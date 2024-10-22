import { type ReactNode } from "react";
import Navbar from "../components/storefront/Navbar";

export default function StoreFrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
