import Navbar from "@/components/Header";
import HoverImage from "@/components/Logo";

const menuItems = [
  { name: "Home", link: "./" },
  { name: "Menu", link: "./menu" },
  { name: "About us", link: "./aboutus" },
  { name: "Contact", link: "./contactus" },
];

export default function Home() {
  return (
    <div className="bg-[#f4f0e3] h-screen">
      <div className="flex flex-col justify-center items-center space-x-4 space-y-4">
        <Navbar menuItems={menuItems} />
        <HoverImage />
        <div>
          <h1>Welcome to our restaurant!</h1>
        </div>
      </div>
    </div>
  );
}
