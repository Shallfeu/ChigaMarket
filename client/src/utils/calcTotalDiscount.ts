export const calcTotalDiscount = (items: any) => {
  return items.reduce(
    (sum: any, obj: any) =>
      sum + ((obj.price * obj.discount) / 100) * obj.quantity,
    0
  );
};
