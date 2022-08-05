import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [term, setTerm] = useState("");

  useEffect(() => {
    setIsloading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          <div className="h-10 w-10 mx-auto rounded-full border-4 border-gray-300 border-r-black animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
