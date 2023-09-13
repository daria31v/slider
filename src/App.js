import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2018/05/15/18/54/mug-3403963_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/04/29/14/32/make-the-day-great-4166221_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/01/12/22/37/inspiration-1136862_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/02/13/16/15/dream-2063053_1280.png",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/05/15/17/49/dont-give-up-3403779_1280.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[600px] h-[380px] w-full m-auto py-10 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* dots */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer text-green-900"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
