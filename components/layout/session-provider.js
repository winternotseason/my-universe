'use client';

import { SessionProvider } from "next-auth/react";

export default function FooterWithSession({ children }) {
   
  return <SessionProvider>{children}</SessionProvider>;
}
