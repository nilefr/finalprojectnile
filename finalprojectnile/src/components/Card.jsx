function Card() {
  const title = "my name is nile";
  const description = "im blasian(indonesian) and a fun fact is that i am 5ft8";
  const emoji = "🥹";

  return (
    <div className="w-96 mx-auto mt-10 p-8 
                    bg-sky-600 text-white 
                    border-4 border-sky-900 
                    rounded-2xl 
                    shadow-xl 
                    text-center 
                    transition-all duration-300 
                    hover:bg-sky-800 hover:scale-105 hover:shadow-2xl">

     
      <span className="text-3xl font-bold underline drop-shadow-lg">
        About Me {emoji}
      </span>

      <h3 className="text-xl font-bold mt-4">
        {title}
      </h3>

      <p className="italic mt-2 mb-6">
        {description}
      </p>

      
      <span className="text-3xl font-bold underline drop-shadow-lg">
        Interests {emoji}
      </span>

      <h3 className="text-xl font-bold mt-4">
        Dragon Ball
      </h3>

      <p className="mt-2 mb-6">
        I like Dragon Ball because I grew up watching it.
      </p>

    
      <span className="text-3xl font-bold underline drop-shadow-lg">
        Dream Job {emoji}
      </span>

      <h3 className="text-xl font-bold mt-4">
        Becoming a Civil Engineer
      </h3>

      <p className="mt-2">
        I want to work for a private company that works on the expansion of trains 
        and railroads such as bullet train systems in Japan and China.
      </p>

    </div>
  );
}

export default Card;