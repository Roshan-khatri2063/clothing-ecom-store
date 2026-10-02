import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";

const perks = [
  { Icon: FiTruck, title: "Worldwide shipping", text: "Fast & reliable delivery" },
  { Icon: FiRefreshCw, title: "Easy returns", text: "30-day return window" },
  { Icon: FiShield, title: "Secure checkout", text: "100% protected payments" },
  { Icon: FiHeadphones, title: "Friendly support", text: "We're here to help" },
];

const PerksStrip = () => (
  <section className="border-y border-ink/10 bg-cream">
    <div className="container mx-auto grid grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
      {perks.map(({ Icon, title, text }) => (
        <div key={title} className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"><Icon className="h-5 w-5 text-accent" /></span>
          <div><p className="text-sm font-semibold">{title}</p><p className="text-xs text-ink/60">{text}</p></div>
        </div>
      ))}
    </div>
  </section>
);
export default PerksStrip;
