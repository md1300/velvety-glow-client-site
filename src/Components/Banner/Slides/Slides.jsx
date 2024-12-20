const Slides = ({ image, text,text2 }) => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-[28rem] "
        style={{ backgroundImage: `url( ${image})` }}
      >
        <div className="relative">
          <h1 className="text-4xl text-pink-500 absolute right-16 top-56">
            {text}
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Slides;
