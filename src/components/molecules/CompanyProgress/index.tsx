import Image from "next/image";

interface CompanyProgressProps {
  name: string;
  url: string;
}

const CompanyProgress: React.FC<CompanyProgressProps> = ({ name, url }) => {
  return (
    <div className="flex flex-col items-center col-span-1 w-full">
      <div className="px-2 md:px-4 py-1 mb-2 border border-rose-accent bg-pink-soft-primary text-rose-accent text-xs rounded font-bold text-center">
        {name}
      </div>
      <Image
        src={url}
        alt={"img-logo-btn"}
        width={80}
        height={80}
        className="w-[60px] md:w-[80px] h-auto object-contain aspect-square"
      />
    </div>
  );
};

export default CompanyProgress;
