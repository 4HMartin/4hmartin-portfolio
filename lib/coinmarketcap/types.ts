export type BitcoinPriceResponse = {
  data: {
    id: number;
    price: number;
    percent_change_24h: number;
    last_updated: string;
  };
};
