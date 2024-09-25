import Image from "next/image";
import logo from "../public/images/logo/logo.png";
import Link from "next/link";
import { LifeBuoy, MapPin, Menu } from "lucide-react";

type Props = {
  href: string;
  name: string;
};
const LinksComponent = (props: Props) => {
  return (
    <Link
      href={props.href}
      className={`text-white hover:text-red-500 relative hover:transform hover:scale-110 transition-all ease-out`}
    >
      {props.name}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav
      className={`bg-gradient-to-b from-black to-black py-2 px-4 flex justify-center md:justify-start items-center gap-5 relative`}
    >
      <button className={`text-gray-200 absolute left-5 bottom-2 md:hidden hover:text-red-500 hover:transform hover:scale-110 transition-all ease-out`}>
        <Menu
          size={28}
          className={``}
        />
      </button>
      <hr className={`border-[0.5px] w-full md:hidden`} />
      <div
        className={`flex justify-center items-center md:justify-start gap-5 w-full max-w-[450px]`}
      >
        <div className={`h-24 overflow-hidden`}>
          <Image src={logo} alt="Epic" className={`w-full h-full`} />
        </div>
        <hr
          className={`border border-solid border-l-2 border-red-50 w-0 h-10 hidden md:block`}
        />
        <p className="text-gray-200 uppercase font-black text-sm lg:text-lg hidden md:block">
          Untamable like you
        </p>
      </div>
      <hr className={`border w-full md:hidden`} />
      <div
        className={`gap-5 hidden md:flex flex-grow py-3 border-b font-medium relative`}
      >
        <LinksComponent href="#" name="Modelos" />
        <LinksComponent href="#" name="Reservas" />
        <LinksComponent href="#" name="Servicios" />
        <LinksComponent href="#" name="Accesorios" />
        <LinksComponent href="#" name="Campañas" />
      </div>
      <div className={`text-gray-200 gap-2 items-center hidden lg:flex`}>
        <Link
          className={`flex gap-1 hover:text-red-500 relative hover:transform hover:scale-110 transition-all ease-out`}
          href={"#"}
        >
          <MapPin className={``} /> Concesionarios
        </Link>
        <Link
          className={`flex gap-1 hover:text-red-500 relative hover:transform hover:scale-110 transition-all ease-out`}
          href={"#"}
        >
          <LifeBuoy /> Test Drive
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
