import { getTranslations } from "next-intl/server";
import React, { ReactNode } from "react";

interface Params {
  params: {
    locale: string;
  };
}
interface LayoutProps {
  children: ReactNode;
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: "Currencies" });
  return {
    title: t("title"),
  };
}
const PageLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};
export default PageLayout;