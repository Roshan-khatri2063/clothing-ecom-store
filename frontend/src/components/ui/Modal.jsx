import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const Modal = ({ open, onClose, title, children }) => {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="text-gray-500 hover:text-black">
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default Modal;
