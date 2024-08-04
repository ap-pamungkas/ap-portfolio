import React, { useState } from "react";



const GalleryCard = ({ image }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to manage description visibility
  
    return (
      <div className="overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-white rounded-lg shadow-lg p-2 w-64">
        <div className="flex justify-center">
          {" "}
        
          <img
            src={image.image}
            alt={`Gallery Image ${image.title}`}
            className="w-full h-32 object-cover"
          />
        </div>
        <h3 className="text-lg text-black font-semibold text-center">
          {image.title}
        </h3>{" "}
        {/* Center title */}
        <p className="text-black text-center">
          {" "}
          {/* Center description */}
          {isExpanded
            ? image.description
            : `${image.description.substring(0, 50)}...`}{" "}
          {/* Show truncated description */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:underline ml-2"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
    );
  };


  export default GalleryCard;