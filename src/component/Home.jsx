import Header from "./ui/Header.jsx";
import photo from "../assets/putra.jpeg";
import Footer from "./ui/Footer.jsx";
import About from "./About.jsx";
import Galeri from "./Galeri.jsx";
import Contact from "./Contact.jsx";
import SimpleParallax from "simple-parallax-js";
import parallaxImg from "../assets/parallax.jpg";


function Home() {
  return (
    <>
      <Header />
      

      <div id="home">
        <div className="w-full h-5"></div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 ">
          
          <section className="text-center py-16 bg-transparent text-white rounded-lg shadow-lg relative overflow-hidden">
            <SimpleParallax>
              <img src={parallaxImg} alt="image" className="absolute w-full md:h-[76%] h-[80%] object-cover" />
            </SimpleParallax>
            <div className="absolute inset-0 opacity-30 bg-white rounded-lg transform scale-150"></div>
            <h1 className="text-5xl font-bold mb-4 relative z-10">
              <img
                className="rounded-full bg-transparent  w-[50%] md:w-[40%] lg:w-[18%] mx-auto border-4 border-white shadow-lg"
                src={photo}
                alt="putra"
              />
            </h1>
            <h1 className="text-[50px] max-w-2xl mx-auto relative z-10">
              Agustinus Putra Pamungkas
            </h1>
            <span className="text-gray-200 text-lg relative z-10">
              Mahasiswa Politap | Teknologi Informasi
            </span>
          </section>
          <hr />
          <About />
          <hr />
          <Galeri />
          <hr />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;
