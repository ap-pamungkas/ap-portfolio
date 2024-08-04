import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import ikon sosial media

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white text-center py-4 mt-12 fixed bottom-0 left-0 w-full">
        <p>&copy; {new Date().getFullYear()} Agustinus Putra Pamungkas. All rights reserved.</p>
        <p>Follow us on social media!</p>
        <div className="flex justify-center space-x-4"> {/* Menambahkan div untuk ikon */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-gray-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-300" />
          </a>
          <a href="https://www.instagram.com/_ap_pemungkas30/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-300" />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;