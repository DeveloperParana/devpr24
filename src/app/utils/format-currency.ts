export const formatCurrency = (amount: number) => {
  const number = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return number.format(amount);
};
