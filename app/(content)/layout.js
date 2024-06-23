import MainFooter from "@/components/layout/main-footer";
import MainHeader from "@/components/layout/main-header";


export default function ChannelLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
      <MainFooter />
    </>
  );
}
