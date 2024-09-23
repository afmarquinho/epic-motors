import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`w-full min-h-screen flex flex-col`}>
      <Navbar />
      <Hero />
      {children}
      <Footer />
    </div>
  );
};
export default Wrapper;
