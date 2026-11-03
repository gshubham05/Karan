import React from "react";
import { images, cars } from "../assets/data";

function Hero() {
  console.log(cars);
  return (
    <div className="">
      Hero
      {/* <div className="">
        <img className="" src={images.b1} alt="" />
        <img className="" src={images.b2} alt="" />
        <img className="" src={images.b3} alt="" />
        <img className="" src={images.b4} alt="" />
      </div> */}
      <div className="flex justify-start items-center flex-wrap gap-4">
        {cars.map((obj, index) => (
          <div className="h-[400px] w-[300px] shadow-md p-2">
            <p className="font-bold text-center text-2xl">{obj.title}</p>
            <img className="h-[70%] w-full" src={obj.img} alt="" />
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center items-center gap-4">
        <div className="h-[400px] w-[300px] shadow-md p-2">
          <p className="font-bold text-center text-2xl">{cars[0].title}</p>
          <img className="h-[70%] w-full" src={cars[0].img} alt="" />
          <p>{cars[0].description}</p>
        </div>
        <div className="h-[400px] w-[300px] shadow-md p-2">
          <p className="font-bold text-center text-2xl">{cars[1].title}</p>
          <img className="h-[70%] w-full" src={cars[1].img} alt="" />
          <p>{cars[1].description}</p>
        </div>
        <div className="h-[400px] w-[300px] shadow-md p-2">
          <p className="font-bold text-center text-2xl">{cars[2].title}</p>
          <img className="h-[70%] w-full" src={cars[2].img} alt="" />
          <p>{cars[2].description}</p>
        </div>
        <div className="h-[400px] w-[300px] shadow-md p-2">
          <p className="font-bold text-center text-2xl">{cars[3].title}</p>
          <img className="h-[70%] w-full" src={cars[3].img} alt="" />
          <p>{cars[3].description}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Hero;
