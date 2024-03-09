import { ReactNode } from "react";
import Navbar from "layout/navbar/navbar";
import Footer from "layout/footer/footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
