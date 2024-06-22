import MainHeader from "@/components/main-header";

export default function JoinLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
