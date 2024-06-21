import MainHeader from "@/components/main-header";

export default function ChannelLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
