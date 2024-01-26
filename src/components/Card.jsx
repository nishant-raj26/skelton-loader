import React from "react";
import Image from "next/image";
import headphone from "@/assets/headphone.png";

const Card = () => {
  return (
    <div className="border p-9 rounded-2xl shadow-2xl shadow-purple-200 w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4 flex justify-around ">
        <Image
          className="absolute w-[200px] h-[200px] object-fill rounded "
          src={headphone}
          alt="/"
        />
      </div>
      <div className="flex flex-col items-center ">
        <p className="font-bold text-2xl ">Apple Headphones</p>
        <p className="text-xl pb-2 font-semibold ">₹ 61,999 </p>
        <p className="text-sm text-center text-gray-500 ">
          Apple headphones deliver immersive audio with cutting-edge technology.
          From AirPods to Beats, enjoy seamless connectivity, superior sound
          quality, and sleek designs for an exceptional audio experience on the
          go.
        </p>
      </div>
    </div>
  );
};

export default Card;
