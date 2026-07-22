import axios from "axios";
import { BitcoinPriceResponse } from "./types";

const CACHE_DURATION_MS = 2 * 60 * 1000;

let cachedPrice: BitcoinPriceResponse | null = null;
let cachedTimestamp: number = 0;

/**
 * Fetch current Bitcoin price from internal API route.
 * In-memory cache (module-level variable) that persists as long as the page isn't refreshed.
 * @returns Bitcoin price data in USD
 */
export async function getBtcPrice(): Promise<BitcoinPriceResponse> {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

  if (!SITE_URL) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is not defined in environment variables",
    );
  }

  const age = Date.now() - cachedTimestamp;
  if (cachedPrice && age < CACHE_DURATION_MS) {
    return cachedPrice;
  }

  try {
    const response = await axios.get<BitcoinPriceResponse>(`${SITE_URL}/api/btc`);
    cachedPrice = response.data;
    cachedTimestamp = Date.now();
    return cachedPrice;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching BTC price:", {
        status: error.response?.status,
        data: error.response?.data,
      });
    } else {
      console.error("Unexpected error fetching BTC price:", error);
    }
    throw error;
  }
}
