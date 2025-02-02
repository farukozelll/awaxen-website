import React from "react";

const Box: React.FC = () => {
  return (
    <p className="relative w-lg h-96 text-9xl font-bold text-white flex items-center justify-center overflow-hidden">
      AWAXEN
      {/* Dönen ve yukarı kayan efekt */}
      <div className="absolute bottom-[-20%] left-[-50%] w-[200%] h-[100%] bg-[#0A0F1E] animate-spin-move"></div>
    </p>
  );
};

export default Box;
