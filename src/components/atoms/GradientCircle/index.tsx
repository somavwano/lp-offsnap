type GradientCircleProps = {
  size?: string;
  number?: string
  textSize?: string
  border?: string
};

const GradientCircle = ({ size = "w-20 h-20", textSize= "text-2xl", number = "01", border= "p-[2px]" }: GradientCircleProps) => {
  return (
    <div className={`relative ${size}`}>
      <div className={`rounded-full bg-gradient-to-r from-gradient-red to-gradient-purple ${border} opacity-80 z-20 w-full h-full absolute`}>
        <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
          <span className={`${textSize} font-bold bg-gradient-to-r from-gradient-red to-gradient-purple text-transparent bg-clip-text`}>
            {number}
          </span>
        </div>
      </div>
      <div className="absolute w-full h-full bg-white z-10 top-0 right-0"></div>
    </div>
  );
};

export default GradientCircle;
