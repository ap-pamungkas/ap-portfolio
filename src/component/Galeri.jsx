
import images from "../data/galeri";

import GalleryCard from"./ui/galeri-card";

const Galeri = () => {
  return (
    <section
      id="gallery"
      className="mt-12 py-12  pb-5 mb-8 z-[9999]"
    >
       <div className="w-full  h-[3rem]"></div>
       <div className="bg-transparent  text-white rounded-lg p-5">
      <div className="container mx-auto">
        <div className="text-center mx-auto items-center">
          <h1 className="text-[50px] mb-10">My Project</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[13rem] lg:gap-7 lg:grid-cols-4 gap-4 justify-items-center mb-8">
            {" "}
            {/* Added justify-items-center */}
            {images.map((image, index) => (
              <GalleryCard  key={index} image={image} />
            ))}
          </div>
        </div>
      </div>
       </div>
    </section>
  );
};



export default Galeri;
