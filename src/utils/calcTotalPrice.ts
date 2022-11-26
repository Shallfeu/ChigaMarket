export const calcTotalPrice = (items: any) => {
  return items.reduce(
    (sum: any, obj: any) => sum + obj.price * obj.quantity,
    0
  );
};
