import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/globals.scss";
import { Providers } from "@component/redux/provider";

export const metadata = {
  title: "Sake Sake",
  description: "best bar",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
