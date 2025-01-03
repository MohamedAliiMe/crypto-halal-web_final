"use client";

import { usePathname, useRouter, type Locale } from "@/i18n.config";
import Image from "next/image";
import { useState } from "react";
import { setUserLocale } from "../_lib/locale";

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [icon, setIcon] = useState(
    locale == "en" ? "/assets/ar.svg" : "/assets/en.svg"
  );

  const changeLocale = (newLocale: any) => {
    if (newLocale === "en") {
      setIcon("/assets/en.svg");
    } else if (newLocale === "ar") {
      setIcon("/assets/ar.svg");
    }
    document.cookie = `NEXT_LOCALE=${newLocale}`;
    setUserLocale(newLocale);
    localStorage.setItem("NEXT_LOCALE", newLocale);
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="selectWrapper">
      <div className="localeSelect border-[#ccc] border-[1px] p-1 rounded cursor-pointer">
        <Image
          src={icon}
          alt=""
          onClick={() => changeLocale(locale === "en" ? "ar" : "en")}
          loading="lazy"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
