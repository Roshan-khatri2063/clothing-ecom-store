import { SITE } from "../config/site";

export const formatPrice = (amount) =>
  `${SITE.currency.symbol} ${Number(amount || 0).toLocaleString("en-IN")}`;
