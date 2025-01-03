import Link from "next/link";
import useTextDirection from "../_hooks/useTextDirection";

const FloatingIcon = () => {
  const dir = useTextDirection();

  return (
    <Link
      href="https://t.me/c_halal"
      target="_blank"
      rel="noopener"
      className={`fixed bottom-8 ${
        dir == "rtl" ? "right-6" : "left-6"
      }  cursor-pointer z-50`}
    >
      <img
        src="/assets/telegram.svg"
        alt="Telegram Icon"
        className="w-12 h-12"
        loading="lazy"
      />
    </Link>
  );
};

export default FloatingIcon;
