// Single source of truth for brand, contact and currency settings.
export const SITE = {
  name: "Berserk",
  tagline: "Modern clothing for men and women",
  phone: "9816322600",
  email: "support@berserk.example",
  currency: { code: "NPR", symbol: "Rs." },
  freeShippingOver: 5000,
  shippingFee: 150,
};

export const NAV_LINKS = [
  { label: "Men", to: "/collection?gender=Men" },
  { label: "Women", to: "/collection?gender=Women" },
  { label: "Top Wear", to: "/collection?category=Top Wear" },
  { label: "Bottom Wear", to: "/collection?category=Bottom Wear" },
];
