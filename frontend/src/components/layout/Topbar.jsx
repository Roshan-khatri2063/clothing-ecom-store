// import { TbBrandMeta } from "react-icons/tb";
// import { IoLogoInstagram } from "react-icons/io";
// import { RiTwitterXLine } from "react-icons/ri"; 

// const Topbar = () => {
//     return (
//         <div className="bg-red-900 text-white">
//             <div className="container mx-auto flex justify-between items center py-1 px-3">
//                 <div className="hidden md:flex items-center space-x-4">

//                     <a href="#" className="hover:text-gray-300">
//                         <TbBrandMeta className = "h-5 w-5"/>
//                     </a>

//                     <a href="#" className="hover:text-gray-300">
//                         <IoLogoInstagram className = "h-5 w-5"/>
//                     </a>

//                     <a href="#" className="hover:text-gray-300">
//                         <RiTwitterXLine className = "h-4 w-4"/>
//                     </a>
//                 </div>
//                 <div className="text-sm text-center">
//                     <span>we ship worldwide- fast and reliable shopping!</span>
//                 </div>

//                 {/* <div className="text-center font-normal tracking-wider uppercase text-[11px] sm:text-xs text-neutral-200">
//                 We ship worldwide — <span className="text-amber-400 font-medium">Fast & reliable shipping!</span>
//                 </div> */}

//                 <div className="text-sm hidden md:block p-3">
//                     <a href="tel: 9816322600" className="hover:text-gray-300">
//                         9816322600
//                     </a>
//                 </div>
//             </div>
//         </div>
        
//     );
// };
// export default Topbar;



import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-red-900 text-white">
      <div className="container mx-auto flex min-h-10 items-center justify-between px-">
        
        {/* Social Links */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            aria-label="Facebook"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            <TbBrandMeta className="h-5 w-5" />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>

          <a
            href="#"
            aria-label="Twitter / X"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Shipping Message */}
        <div className="text-center text-xs font-medium tracking-wide sm:text-sm">
          We ship worldwide —{" "}
          <span className="text-red-100">
            Fast & reliable shipping!
          </span>
        </div>

        {/* Phone */}
        <div className="hidden text-sm md:block">
          <a
            href="tel:9816322600"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            Call Us:9816322600
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

