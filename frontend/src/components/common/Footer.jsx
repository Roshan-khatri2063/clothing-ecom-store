import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const shop = ["Women's Top Outfits", "Men's Top Outfits", "Women's Bottom Outfits", "Men's Bottom Outfits"];
const support = ["Contact Us", "About Us", "FAQs", "Features"];
const social = [
  { href: "http://www.facebook.com", label: "Facebook", Icon: TbBrandMeta },
  { href: "http://www.instagram.com", label: "Instagram", Icon: IoLogoInstagram },
  { href: "http://www.twitter.com", label: "Twitter / X", Icon: RiTwitterXLine },
];

const Col = ({ title, items }) => (
  <div>
    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">{title}</h3>
    <ul className="space-y-3 text-sm text-white/60">
      {items.map((i) => (
        <li key={i}><Link to="#" className="transition hover:text-white">{i}</Link></li>
      ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="bg-ink text-white">
    <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-4">
      <div>
        <h3 className="font-display text-2xl font-semibold">Berserk<span className="text-accent">.</span></h3>
        <p className="mt-3 text-sm text-white/60">New products, exclusive events and offers.</p>
        <p className="mb-5 mt-5 text-sm font-medium text-amber-300">Sign up and get 15% off your first order.</p>
        <form className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15 focus-within:ring-white/40">
          <input type="email" placeholder="Enter your email" required
            className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none" />
          <button type="submit" className="bg-white px-5 text-sm font-semibold text-ink transition hover:bg-accent hover:text-white">Join</button>
        </form>
      </div>
      <Col title="Shop" items={shop} />
      <Col title="Support" items={support} />
      <div>
        <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">Follow us</h3>
        <div className="mb-6 flex gap-3">
          {social.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-white hover:bg-white hover:text-ink">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="text-sm text-white/50">Call us</p>
        <p className="mt-1 flex items-center gap-2 text-sm"><FiPhoneCall /> 9816322600</p>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">© 2026 Roshan Khatri. All rights reserved.</div>
  </footer>
);
export default Footer;
