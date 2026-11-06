const tones = {
  accent: "bg-accent text-white",
  dark: "bg-ink text-white",
  light: "bg-sand text-ink",
  success: "bg-green-100 text-green-800",
  warning: "bg-amber-100 text-amber-800",
  danger: "bg-red-100 text-red-800",
};

const Badge = ({ tone = "light", className = "", children }) => (
  <span
    className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest ${tones[tone]} ${className}`}
  >
    {children}
  </span>
);
export default Badge;
