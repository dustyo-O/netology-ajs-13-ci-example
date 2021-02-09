const cashback = {
  regular: {
    bound: 1000,
    percent: 1,
  },
  silver: {
    bound: 10000,
    percent: 2,
  },
  gold: {
    bound: 100000,
    percent: 5,
  },
};

export default function calculateCashback(amount) {
  const discountType = Object.keys(cashback) // ['regular', 'silver', 'gold']
    .sort((a, b) => cashback[b].bound - cashback[a].bound)
    .find((item) => amount >= cashback[item].bound);

  if (!discountType) return 0;

  return cashback[discountType].percent * amount / 100;
}
