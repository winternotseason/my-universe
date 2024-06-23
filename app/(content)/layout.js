import MainFooter from "@/components/layout/main-footer";
import MainHeader from "@/components/layout/main-header";
import "../globals.css";

export default function ChannelLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
