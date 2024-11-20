import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Courtside",
  description: "An app that gets you up close and personal with your favourtie teams and players.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <Link href={"/teams"}>Teams</Link>

        <Link href={"/players"}>Players</Link>
        {children}
      </body>
    </html>
  );
}
