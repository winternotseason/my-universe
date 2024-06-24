import MainFooter from "@/components/layout/main-footer";
import MainHeader from "@/components/layout/main-header";
import MobileHeader from "@/components/layout/mobile-header";
import FooterWithSession from "@/components/layout/session-provider";

import "../globals.css";

export default function ChannelLayout({ children }) {
  return (
    <>
      <MobileHeader />
      <MainHeader />
      {children}
    <FooterWithSession><MainFooter /></FooterWithSession>
    </>
  );
}
