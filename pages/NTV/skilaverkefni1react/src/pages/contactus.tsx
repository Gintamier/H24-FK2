import Navbar from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const menuItems = [
  { name: "Home", link: "./" },
  { name: "Menu", link: "./menu" },
  { name: "About us", link: "./aboutus" },
  { name: "Contact", link: "./contactus" },
];

export default function Home() {
  return (
    <div className="bg-[#f4f0e3] h-screen">
      <Navbar menuItems={menuItems} />;
      <ContactForm />
    </div>
  );
}
