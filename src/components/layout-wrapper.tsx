"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeader = pathname === "/checkout/success";

  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </>
  );
}
