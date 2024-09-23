import Image from "next/image";
import logo from "../public/images/logo/logo.png";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className={`bg-gradient-to-b from-black to-black py-2 px-4 flex justify-center md:justify-start items-center gap-5 mb-5`}
      >
        <hr className={`border w-full `} />
        <div className={`flex justify-center items-center md:justify-start`}>
          <div className={`w-24 overflow-hidden`}>
            <Image src={logo} alt="Epic" className={`w-full h-full`} />
          </div>
        </div>
        <hr className={`border w-full`} />
      </div>
      {children}
    </>
  );
};
export default SectionWrapper;
