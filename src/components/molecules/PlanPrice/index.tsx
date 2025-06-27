import { clsx } from "clsx";

interface PlanPriceProps {
  price: string;
  priceNote: string | null;
}

const PlanPrice: React.FC<PlanPriceProps> = ({ price, priceNote }) => (
  <div
    className={clsx(
      "text-center flex flex-col justify-center items-center text-deep-black",
      priceNote ? "pb-4" : "pb-6"
    )}
  >
    <div className="text-nowrap">
      <span className="xl:text-[64px] lg:text-[48px] md:text-3xl text-2xl font-bold">
        {price}
      </span>
      <span className="ml-1 lg:text-2xl md:text-lg text-base font-bold">
        円
      </span>
    </div>
    {priceNote && <p className="text-sm text-gray-500 mt-1">{priceNote}</p>}
  </div>
);

export default PlanPrice;
