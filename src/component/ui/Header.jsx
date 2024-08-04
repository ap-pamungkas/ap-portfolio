import { Link } from "react-scroll"; // Import for smooth scrolling
import { Navbar } from "flowbite-react";
import logo from "../../assets/react.svg";

const Header = () => {
  return (
    <Navbar fluid rounded className="bg-transparent shadow-md fixed top-0 left-0 w-full  z-[9999]"> {/* Added fixed positioning */}
      <Navbar.Brand href="#about">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Agustinus Putra Pamungkas
        </span>
      </Navbar.Brand>
      <Navbar.Toggle className="text-white" />
      <Navbar.Collapse>
        <Navbar.Link 
          as={Link} 
          to="home" 
          smooth={true} 
          className="text-white hover:bg-black hover:bg-opacity-20 md:hover:bg-opacity-0 cursor-pointer"
        >
         Menu
        </Navbar.Link>
        <Navbar.Link 
          as={Link} 
          to="about" 
          smooth={true} 
          className="text-white hover:bg-black hover:bg-opacity-20 md:hover:bg-opacity-0 cursor-pointer"
        >
          About
        </Navbar.Link>
        <Navbar.Link 
          as={Link} 
          to="gallery" 
          smooth={true} 
          className="text-white hover:bg-black hover:bg-opacity-20 md:hover:bg-opacity-0 cursor-pointer"
        >
          Galeri
        </Navbar.Link>
        <Navbar.Link 
          as={Link} 
          to="contact" 
          smooth={true} 
          className="text-white hover:bg-black hover:bg-opacity-20 md:hover:bg-opacity-0 cursor-pointer"
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;