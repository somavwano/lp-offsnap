type ContactButtonProps = {
  width?: string;
  height?: string;
  className?: string;
};

const ContactButton = ({
  width = "w-full",
  height = "h-[49px]",
  className = "",
}: ContactButtonProps) => {
  return (
    <button
      className={`text-primary border-primary border-2 rounded-[24.5px] ${width} ${height} ${className}`}
    >
      お問合せ
    </button>
  );
};

export default ContactButton;
