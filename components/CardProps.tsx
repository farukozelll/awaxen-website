import React from "react";

interface CardProps {
  titleSrc: string;
  coverSrc: string;
  characterSrc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ titleSrc, coverSrc, characterSrc, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="mx-4">
      <div className="group relative w-[200px] h-[300px] flex justify-center items-end p-0 transition-all duration-500 hover:perspective-[800px] hover:-translate-y-4">
        
        {/* Kapak Resmi ve Efektler */}
        <div className="absolute w-full h-full transition-all duration-500 hover:translate-y-[-5%] hover:rotate-x-[25deg] hover:shadow-xl">
          <img src={coverSrc} alt="Cover" className="w-full h-full object-cover" />
          
          {/* Üstten gelen degrade efekti */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Alttan gelen degrade efekti */}
          <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent to-black opacity-100 transition-all duration-500"></div>
        </div>

        {/* Başlık Resmi */}
        <img src={titleSrc} alt="Title" className="w-full z-10 transition-transform duration-500 group-hover:translate-y-[-50px] group-hover:translate-z-[100px]" />

        {/* Karakter Resmi */}
        <img src={characterSrc} alt="Character" className="w-full opacity-0 absolute transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-30%] group-hover:translate-z-[100px]" />
      </div>
    </a>
  );
};

export default Card;



{/* Çağırılma yöntemi bu şekilde olmalıdır:
    
    <div className="w-screen h-screen flex justify-center items-center bg-[#191c29]">
      <Card
        titleSrc="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
        coverSrc="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
        characterSrc="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
        link="https://www.mythrillfiction.com/the-dark-rider"
      />
      <Card
        titleSrc="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
        coverSrc="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
        characterSrc="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
        link="https://www.mythrillfiction.com/force-mage"
      />
    </div> 

*/}