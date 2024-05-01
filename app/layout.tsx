
import type { Metadata } from "next";

// import { Inter } from "next/font/google";
import { Jura } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { NotificationProvider } from "@/contexts/NotificatonContext";

// const inter = Inter({ subsets: ["latin"] });

const jura_init = Jura({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-jura',

});


export const metadata: Metadata = {
  title: "Findr",
  description: "Giving your interns the perfect experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <ClerkProvider>
      <NotificationProvider>
        <html lang='en'>
          <body className={jura_init.variable}>{children}</body>
        </html>
      </NotificationProvider>
    </ClerkProvider>

  );
}



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return ( 
//     <html lang="en">
//       <body className={jura_init.variable}>{children}</body>
//     </html>
//   ); 
// }
