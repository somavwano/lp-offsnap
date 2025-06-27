interface PlanHeaderProps {
  name: string;
  recommended?: boolean;
}

const PlanHeader: React.FC<PlanHeaderProps> = ({ name }) => (
  <div
    className={`text-white text-center font-bold md:h-[91px] sm:h-auto h-[54px] md:my-0  flex items-center justify-center sm:py-6 py-2 lg:text-2xl sm:text-lg text-base bg-[linear-gradient(180deg,_#F88085_0%,_#CD3652_100%)]`}
  >
    {name}
  </div>
);

export default PlanHeader;
