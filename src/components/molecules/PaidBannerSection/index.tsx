import Image from "next/image";

const Index = () => {
  return (
    <div className="max-w-[918px] mx-auto mt-6 p-6 border-[2px] xl:h-[150px] border-lavender-light rounded-lg flex flex-col md:flex-row items-center justify-center gap-10">
      <Image
        src={"/images/png/img-paid.png"}
        alt="img-paid"
        width={179}
        height={50}
      />
      <div>
        <h3 className="text-[32px] font-bold text-gray-800 text-center md:text-left">
          請求書払い（paid後払い）
        </h3>
        <p className="text-gray-muted mt-4 text-center text-xl md:text-left">
          支払い方法: 銀行振込 / 口座振替 / コンビニ払い
          <br />
          ※請求書払いは個人事業主/法人のみご利用いただけます
        </p>
      </div>
    </div>
  );
};

export default Index;
