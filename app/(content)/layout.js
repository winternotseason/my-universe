import MainFooter from "@/components/main-footer";
import MainHeader from "@/components/main-header";

export default function ChannelLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
