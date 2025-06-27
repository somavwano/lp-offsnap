import Image from "next/image";

import Wrapper from "@/components/atoms/Wrapper";

const Title = () => {
  return (
    <div className="flex items-center justify-center sm:gap-2 gap-1 text-center">
      <div className="relative sm:w-[254px] sm:h-[50px] w-[122px] h-6">
        <Image
          src="/images/svg/logo-offisnap.svg"
          alt="Logo"
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 101px, 204px"
        />
      </div>
      <div className="h-full flex items-center">
        <span className="font-bold sm:text-[40px] text-xl">に登録すると</span>
      </div>
    </div>
  );
};

interface RegistrationCardProps {
  title: string;
  image: React.ReactNode;
  description: React.ReactNode;
}

const RegistrationCard = ({
  title,
  image,
  description,
}: RegistrationCardProps) => {
  return (
    <div className="bg-white sm:p-4 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-center font-bold text-base sm:text-2xl text-amethystGray ">
        {title}
      </h3>
      <div className="mb-4 max-w-[588px] mt-3">{image}</div>
      <div className="text-sm leading-6 text-gray-800">{description}</div>
    </div>
  );
};

type BoldTextProps = {
  children: React.ReactNode;
};

const BoldText = ({ children }: BoldTextProps) => {
  return <span className="font-bold text-amethystGray">{children}</span>;
};

const BenefitsAfterSignup = () => {
  return (
    <div className="w-full bg-white font-noto text-deep-black py-6 tracking-[0.05em]">
      <Wrapper>
        <div>
          <Title />
          <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-6 gap-2 mt-[16px] sm:mt-6">
            <RegistrationCard
              title="掲載企業なら、1クリックで導入事例に。"
              image={
                <Image
                  src="/images/svg/benefits-after-signup-left.svg"
                  alt=""
                  width={588}
                  height={300}
                  className="w-full h-auto"
                />
              }
              description={
                <p className="font-normal text-sm leading-6">
                  OFFISNAP掲載企業であれば、
                  <BoldText>
                    1クリックで御社の導入事例として簡単にひも付けることが可能
                  </BoldText>
                  です。
                  <br />
                  導入企業にとっても、事例として紐付けられることで
                  <BoldText>
                    自社ページへのアクセス増加が期待できるため、ひも付け申請の積極的なご活用をおすすめ
                  </BoldText>
                  しています。
                  <br />
                  <br />
                  なお、導入企業がまだOFFISNAPに掲載されていない場合は、
                  <BoldText>
                    ぜひOFFISNAPをご紹介ください。
                    <br />
                  </BoldText>
                  ?掲載が完了次第、
                  <BoldText>
                    自動的に御社との導入事例としてひも付けが行われます。
                  </BoldText>
                </p>
              }
            />
            <RegistrationCard
              title="「お客様の声」も、導入企業が自ら投稿！"
              image={
                <Image
                  src="/images/svg/benefits-after-signup-right.svg"
                  alt=""
                  width={588}
                  height={300}
                  className="w-full h-auto"
                />
              }
              description={
                <div>
                  導入企業が「お客様の声」として、
                  <BoldText>魅力を自発的にコメントしてくれる仕組み</BoldText>
                  があります。
                  <br />
                  <br />
                  これは、導入企業側にとってもメリットがあり、
                  <BoldText>
                    コメントを投稿するとOFFICEMILL内で上位表示されやすくなるアルゴリズムを採用
                  </BoldText>
                  しているため、多くの企業が積極的にコメントを投稿してくれます。
                </div>
              }
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BenefitsAfterSignup;
