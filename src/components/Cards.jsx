import React from "react";

function Cards({ d, title, img }) {
  return (
    <div className="h-[400px] w-[300px] shadow-md p-2 overflow-hidden">
      <p className="font-bold text-center text-2xl">{title}</p>
      <div className="overflow-hidden">
        <img
          className="h-[70%] w-full hover:scale-125 transition-all duration-300"
          src={img}
          alt="image is not available"
        />
      </div>
      <p>{d}</p>
    </div>
  );
}
// function Cards(props) {
//     console.log(props)
//   return (
//     <div className="h-[400px] w-[300px] shadow-md p-2">
//       <p className="font-bold text-center text-2xl">{props.title}</p>
//       <img className="h-[70%] w-full" src={props.img} alt="image is not available" />
//       <p>{props.d}</p>
//     </div>
//   );
// }

export default Cards;
