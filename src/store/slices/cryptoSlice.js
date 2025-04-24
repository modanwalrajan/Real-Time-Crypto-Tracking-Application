import { createSlice } from '@reduxjs/toolkit';

const initialState = {
listItems: [
  {
    id: 1,
    logo: "btc-logo",
    name: "Bitcoin",
    symbol: "BTC",
    price: 1000,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0,
    marketCap: 1000000,
    volume24h: 100000,
    circulatingSupply: '19.85M BTC',
    chart: "btc-chart",
  },
  {
    id: 2,
    logo: "eth-logo",
    name: "Ethereum",
    symbol: "ETH",
    price: 500,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0,
    marketCap: 500000,
    volume24h: 50000,
    circulatingSupply: '120.71M ETH',
    chart: "eth-chart",
  },
  {
    id: 3,
    logo: "usdt-logo",
    name: "Tether",
    symbol: "USDT",
    price: 1,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0,
    marketCap: 100000,
    volume24h: 10000,
    circulatingSupply: '145.27B USDT',
    chart: "usdt-chart",
  },
  {
    id: 4,
    logo: "bnb-logo",
    name: "BNB",
    symbol: "BNB",
    price: 200,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0,
    marketCap: 200000,
    volume24h: 20000,
    circulatingSupply: '58.39B BNB',
    chart: "bnb-chart",
  },
  {
    id: 5,
    logo: "sol-logo",
    name: "Solana",
    symbol: "SOL",
    price: 0.5,
    percentChange1h: 0,
    percentChange24h: 0,
    percentChange7d: 0,
    marketCap: 50000,
    volume24h: 5000,
    circulatingSupply: '517.3M SOL',
    chart: "sol-chart",
  },
]
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateListItems( state, action ) {
      console.log(state, action);
      const listItem = state.listItems.find((item) => item.id === action.payload.id); 
      if (listItem) {
        listItem.price = action.payload.price;
        listItem.percentChange1h = action.payload.percentChange1h;
        listItem.percentChange7d = action.payload.percentChange7d;
        listItem.percentChange24h = action.payload.percentChange24h;
        listItem.volume24h = action.payload.volume24h;
      }
    }
  }
})

export const { updateListItems } = cryptoSlice.actions;
export default cryptoSlice.reducer;

