export function formatPrice(amount: number): string {
  return `PKR ${amount.toLocaleString("en-PK")}`;
}

export function formatDiscount(price: number, compareAtPrice?: number): number | null {
  if (!compareAtPrice || compareAtPrice <= price) return null;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
