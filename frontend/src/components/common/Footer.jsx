import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { SITE } from "../../config/site";

const shop = [
  {
    label: "Women's Top Outfits",
    to: "/collection?gender=Women&category=Top Wear",
  },
  {
    label: "Men's Top Outfits",
    to: "/collection?gender=Men&category=Top Wear",
  },
  {
    label: "Women's Bottom Outfits",
    to: "/collection?gender=Women&category=Bottom Wear",
  },
  {
    label: "Men's Bottom Outfits",
    to: "/collection?gender=Men&category=Bottom Wear",
  },
];
const support = [
  { label: "Contact Us", to: "/contact" },
  { label: "About Us", to: "/about" },
  { label: "FAQs", to: "/faq" },
  { label: "Shipping & Returns", to: "/shipping-returns" },
];
const social = [
  { href: "https://www.facebook.com", label: "Facebook", Icon: TbBrandMeta },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    Icon: IoLogoInstagram,
  },
  { href: "https://x.com", label: "Twitter / X", Icon: RiTwitterXLine },
];

const Col = ({ title, items }) => (
  <div>
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
      {title}
    </h3>
    <ul className="space-y-3 text-sm text-white/60">
      {items.map((i) => (
        <li key={i.label}>
          <Link to={i.to} className="transition hover:text-white">
            {i.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState("");

  const onSubscribe = (e) => {
    e.preventDefault();
    // Day 3: POST /newsletter
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl font-semibold">
            {SITE.name}
            <span className="text-accent">.</span>
          </h3>
          <p className="mt-3 text-sm text-white/60">
            New products, exclusive events and offers.
          </p>
          <p className="mb-5 mt-5 text-sm font-medium text-amber-300">
            Sign up and get 15% off your first order.
          </p>
          <form
            onSubmit={onSubscribe}
            className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 focus-within:ring-white/40"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              placeholder="Enter your email"
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white px-5 text-sm font-semibold text-ink transition hover:bg-accent hover:text-white"
            >
              Join
            </button>
          </form>
        </div>
        <Col title="Shop" items={shop} />
        <Col title="Support" items={support} />
        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
            Follow us
          </h3>
          <div className="mb-6 flex gap-3">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-sm text-white/50">Call us</p>
          <a
            href={`tel:${SITE.phone}`}
            className="mt-1 flex items-center gap-2 text-sm"
          >
            <FiPhoneCall /> {SITE.phone}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 px-4 py-6 text-xs text-white/40">
        <span>
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </span>
        <Link to="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <Link to="/terms" className="hover:text-white">
          Terms
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
