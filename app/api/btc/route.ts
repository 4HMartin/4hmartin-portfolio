// /app/api/btc/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

// SERVER-SIDE CACHING AT API ROUTE LEVEL - NEXT.JS BUILT-IN FETCH CACHE
export const revalidate = 120;

export async function GET() {
    try {
        const apiKey = process.env.COINMARKETCAP_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "CoinMarketCap API key not configured" },
                { status: 500 }
            );
        }

        const response = await axios.get(
            "https://pro-api.coinmarketcap.com/v1/simple/price",
            {
                params: {
                    ids: "1",
                    include_percent_change_24h: true,
                    include_last_updated: true
                },
                headers: {
                    "X-CMC_PRO_API_KEY": apiKey,
                    "Accept": "application/json",
                },
            }
        );

        const data = response.data.data[0];

        if(response.status === 200){
            return NextResponse.json({
            data
        }, { status: 200 });
        }

    } catch (error) {
        if (axios.isAxiosError(error)) {
        console.error("CMC status:", error.response?.status);
        console.error("CMC details:", JSON.stringify(error.response?.data, null, 2));

            const status = error.response?.status || 500;
            const cmcError = error.response?.data;

            return NextResponse.json(
                { 
                    error: "Failed to fetch Bitcoin price", 
                    details: cmcError 
                },
                { status }
            );
        }

        console.error("Unexpected error:", error);
        return NextResponse.json(
            { error: "Internal server error while fetching Bitcoin price" },
            { status: 500 }
        );
    }
}