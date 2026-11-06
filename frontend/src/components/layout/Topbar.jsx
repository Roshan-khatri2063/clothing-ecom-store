import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { SITE } from "../../config/site";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    Icon: TbBrandMeta,
    size: "h-5 w-5",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    Icon: IoLogoInstagram,
    size: "h-5 w-5",
  },
  {
    label: "Twitter / X",
    href: "https://x.com",
    Icon: RiTwitterXLine,
    size: "h-4 w-4",
  },
];

const Topbar = () => (
  <div className="bg-red-900 text-white">
    <div className="container mx-auto flex min-h-10 items-center justify-between px-4">
      <div className="hidden items-center gap-4 md:flex">
        {socials.map(({ label, href, Icon, size }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-colors duration-200 hover:text-gray-300"
          >
            <Icon className={size} />
          </a>
        ))}
      </div>

      <div className="mx-auto text-center text-xs font-medium tracking-wide sm:text-sm md:mx-0">
        We ship worldwide —{" "}
        <span className="text-red-100">fast &amp; reliable shipping!</span>
      </div>

      <div className="hidden text-sm md:block">
        <a
          href={`tel:${SITE.phone}`}
          className="transition-colors duration-200 hover:text-gray-300"
        >
          Call us: {SITE.phone}
        </a>
      </div>
    </div>
  </div>
);
export default Topbar;
