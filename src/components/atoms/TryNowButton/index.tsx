type TryNowButtonProps = {
  width?: string;   // ví dụ: "w-full", "w-[300px]"
  height?: string;  // ví dụ: "h-[49px]", "h-auto"
  className?: string; // optional: nếu muốn thêm class ngoài
};

const TryNowButton = ({
  width = "w-full",
  height = "h-[49px]",
  className = "",
}: TryNowButtonProps) => {
  return (
    <button className={`text-white bg-primary rounded-[24.5px] ${width} ${height} ${className}`}>
      今すぐお試しで掲載してみる(無料)
    </button>
  );
};

export default TryNowButton;
