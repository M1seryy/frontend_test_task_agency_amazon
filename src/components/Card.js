import React from "react";

const Card = ({ company, quote, author, position, logo, avatar }) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg w-[380px] h-[502px] max-w-md mx-auto hover:scale-105 transition-transform duration-300 py-10 px-5">
        <div className="h-[91px] flex items-center mb-6">
          <img
            src={logo}
            alt="logo"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <p className="text-[rgb(155,154,153)] w-[317px] font-grotesk font-medium text-[20px] leading-[35px] tracking-normal ">
          {quote}
        </p>
        <h2 className="font-staatliches font-normal text-[96px] leading-[35px] tracking-normal  text-[rgb(155,154,153)] text-right ">
          “
        </h2>

        <div className="flex gap-4">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={avatar}
            alt="avatar"
          />
          <div>
            <p className="font-grotesk font-bold text-[24px] leading-[35px]">
              {author}
            </p>
            <p className="font-grotesk  font-medium text-[20px] leading-[35px]">
              {position},{company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
