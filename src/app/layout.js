import Footer from "./components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const roboto = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Verdearch - Atelier Projektowania Pasywnego i Biofilicznego.",
  description: "Atelier Projektowania Pasywnego i Biofilicznego.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='pl'>
      <body className={roboto.className}>
        <main className='bg-gray-800'>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
