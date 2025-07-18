import React, { useState } from "react";
import { CardContent } from "../data";
import Card from "./Card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CardCarusel = () => {
  const [cards, setCards] = useState(CardContent);

  const handlePrev = () => {
    const updated = [
      cards[cards.length - 1],
      ...cards.slice(0, cards.length - 1),
    ];
    setCards(updated);
  };

  const handleNext = () => {
    const updated = [...cards.slice(1), cards[0]];
    setCards(updated);
  };

  return (
    <div className="relative w-full flex items-center justify-center py-10 px-4">
      <button
        onClick={handlePrev}
        className="w-[60px] h-[60px] rounded-full border border-[rgb(209,207,207)] bg-white flex items-center justify-center hover:scale-110 transition"
      >
        <ArrowLeft
          size={32}
          className="text-[rgb(112,112,112)]"
          strokeWidth={1.5}
        />
      </button>

      <div className="flex justify-center gap-6 flex-wrap px-4 mx-6">
        {cards.map(
          (
            { company, quote, author, position, companyLogo, avatar },
            index
          ) => (
            <Card
              avatar={avatar}
              key={index}
              company={company}
              quote={quote}
              author={author}
              position={position}
              logo={companyLogo}
            />
          )
        )}
      </div>

      <button
        onClick={handleNext}
        className="w-[60px] h-[60px] rounded-full border border-[rgb(209,207,207)] bg-white flex items-center justify-center hover:scale-110 transition"
      >
        <ArrowRight
          size={32}
          className="text-[rgb(112,112,112)]"
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
};

export default CardCarusel;
