export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fr-BJ", {
    style: "currency",
    currency: "XOF",
  }).format(price);
};
