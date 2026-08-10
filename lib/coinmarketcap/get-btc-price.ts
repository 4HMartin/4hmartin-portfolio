import axios from "axios";
import { BitcoinPriceResponse } from "./types";

const CACHE_DURATION_MS = 2 * 60 * 1000;

let cachedData: BitcoinPriceResponse | null = null;
let cachedTimestamp: number = 0;

// Success or error result, discriminated by "success"
export type GetBtcPriceResult = {
  success: boolean;
  cachedData?: BitcoinPriceResponse;
  positive?: boolean;
  error?: string;
};

/**
 * Fetch current Bitcoin price from internal API route.
 * In-memory cache (module-level variable) that persists as long as the page isn't refreshed.
 * @returns Result object with success status and either data or error
 */
export async function getBtcPrice(): Promise<GetBtcPriceResult> {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!SITE_URL) {
    console.error(
      "NEXT_PUBLIC_SITE_URL is not defined in environment variables",
    );
    return {
      success: false,
      error: "Site URL is not configured",
    };
  }

  const age = Date.now() - cachedTimestamp;
  if (cachedData && age < CACHE_DURATION_MS) {
    return { success: true, cachedData };
  }

  try {
    const response = await axios.get<BitcoinPriceResponse>(
      `${SITE_URL}/api/btc`,
    );

    // console.log("## RESPONSE: ", response);

    const date = new Date(response.data.data.last_updated);

    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      // timeZone: 'UTC' // Omit this line if you want local time instead
    });

    const percentChange24 = response.data.data.percent_change_24h.toFixed(2);
    const positive = !percentChange24.startsWith("-");
    response.data.data.last_updated = formatter.format(date).replace(",", " -");
    response.data.data.price = Number(response.data.data.price.toFixed(2));
    response.data.data.percent_change_24h = Number(response.data.data.percent_change_24h.toFixed(2));

    cachedData = response.data;
    cachedTimestamp = Date.now();

    return {
      success: true,
      cachedData,
      positive
    };

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error fetching BTC price:", {
        status: error.response?.status,
      });

      return {
        success: false,
        error: error.response?.data?.error || "Failed to fetch Bitcoin price",
      };
    }

    console.log("Unexpected error fetching BTC price:", error);

    return {
      success: false,
      error: "Unexpected error while fetching Bitcoin price",
    };
  }
}
