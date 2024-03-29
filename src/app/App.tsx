import { Montserrat } from "next/font/google";
import "./globals.scss";
import "./classes.scss";
import Navbar from "@/widgets/general/Navbar/Navbar";
import Footer from "@/widgets/general/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
