import { Plan } from "@/type/interface";

export const listProgressCompany = [
  { name: "A社", url: "/images/png/img-progress-1.png" },
  { name: "B社", url: "/images/png/img-progress-2.png" },
  { name: "C社", url: "/images/png/img-progress-3.png" },
];

export const listOfficeMerit = [
  {
    title: "オフィス担当者登録数",
    description: "日本最大級",
    img: "/images/svg/img-staff-count.svg",
  },
  {
    title: "面倒な導入事例掲載も",
    description: "簡単公開",
    img: "/images/svg/img-staff-count.svg",
  },
  {
    title: "最適な顧客との出会い",
    description: "AIマッチング",
    img: "/images/svg/img-staff-count.svg",
  },
];

export const logos = [
  {
    src: "/images/svg/yahoo.svg",
    className: "w-[85px] sm:w-[170px] sm:h-[42px]",
  },
  {
    src: "/images/svg/amazon.svg",
    className: "w-[75px] sm:w-[150px] sm:h-[42px]",
  },
  {
    src: "/images/svg/lifull.svg",
    className: "w-[85px] sm:w-[170px] sm:h-[42px]",
  },
  {
    src: "/images/svg/adastria.svg",
    className: "w-[99px] sm:w-[198px] sm:h-[42px]",
  },
  {
    src: "/images/svg/accenture.svg",
    className: "w-[85px] sm:h-[42px] sm:w-[170px] h-[21px]",
  },
  {
    src: "/images/svg/line.svg",
    className: "w-[42.5px] sm:w-[85px] sm:h-[42px] h-[21px]",
  },
  {
    src: "/images/svg/mixi.svg",
    className: "w-[48px] sm:w-[96px] sm:h-[42px] h-[21px]",
  },
  {
    src: "/images/svg/raksul.svg",
    className: "w-[85px] sm:w-[170px] sm:h-[42px] h-[21px]",
  },
];

export const contentCartsProblemsSection = [
  {
    title: "自社で手がけた導入企業なのに事例の使用許可が取るのが大変",
    content:
      "掲載イメージを作成して説明し、承諾書面を作成、取引先への説明と承諾、導入事例公開前にご確認いただき、導入事例の公開まで、業務の合間にやるのは大変過ぎる。",
    urlImage: "/images/png/problems-section-first.png",
  },
  {
    title: "導入事例の写真を撮るタイミングを逃してしまった",
    content:
      "オフィス完成してすぐに入居されるため施設を撮影をさせていただける時間はごく僅か。タイミングを逃すと二度と撮れなくなる。",
    urlImage: "/images/png/problems-section-second.png",
  },
  {
    title: "導入企業のご担当者から「お客様の声」をもらいたいが頼みづらい",
    content:
      "お忙しい担当者に勤務中にインタビューをさせていただくのはカンタンではなく、関係性が強い会社でないと頼みづらい。",
    urlImage: "/images/png/problems-section-third.png",
  },
];

export const plans: Plan[] = [
  {
    name: "スタートプラン",
    price: "0",
    priceNote: null,
    cta: {
      text: "今すぐ試してみる(無料)",
      style: "purple",
    },
    features: [
      { text: "1施設" },
      { text: "ー" },
      { text: "ー" },
      { text: "ー" },
      { text: "ー" },
      { text: "ー" },
      { text: "ー" },
      { text: "ー" },
    ],
    footerNote: null,
  },
  {
    name: "ビジネスプラン",
    price: "30,000",
    priceNote: "(税込33,000円)",
    recommended: true,
    cta: {
      text: "初月無料",
      subText: "で今すぐ試す",
      style: "gradient",
    },
    features: [
      { text: "10施設" },
      { text: "○" },
      { text: "○" },
      { text: "○" },
      { text: "○" },
      { text: "ー" },
      { text: "ー" },
      { text: "○", subText: "(スタンダードプラン、月9,800円相当)" },
    ],
    footerNote: "(スタンダードプラン、月9,800円相当)",
  },
  {
    name: "エンタープライズプラン",
    price: "50,000",
    priceNote: "(税込55,000円)",
    cta: {
      text: "初月無料",
      subText: "で今すぐ試す",
      style: "gradient",
    },
    features: [
      { text: "制限無し" },
      { text: "○" },
      { text: "○" },
      { text: "○" },
      { text: "○" },
      { text: "○" },
      { text: "○" },
      { text: "○", subText: "(プレミアムプラン、月19,800円相当)" },
    ],
    footerNote: "(プレミアムプラン、月19,800円相当)",
  },
];

export const featureLabels: string[] = [
  "導入企業ひも付け依頼可能数",
  "導入企業ひも付け依頼機能",
  "資料ダウンロード\n問い合わせボタン設置",
  "AIマッチングによる顧客紹介",
  "広告非表示",
  "「導入企業の声」の表示",
  "絞り込み検索時の優先表示",
  "自社オフィス環境の\nOFFISNAP内での発信",
];
export const contentCartsWhyChooseSection = [
  {
    title: (
      <span>
        オフィス掲載する
        <br className="hidden sm:block" />
        企業の質の高さ
      </span>
    ),
    content: (
      <>
        国内を代表する企業から先進企業までが掲載する「OFFISNAP」は多くの業界で活用されています。
        <br />
        <br />
        御社の導入事例を掲載することで、さらなる
        <span className="font-bold text-amethystGray">
          ブランディング効果や認知度向上が期待
        </span>
        できます。
      </>
    ),
    urlImage: "/images/png/problems-section-first.png",
  },
  {
    title: (
      <span>
        オフィス担当者へ
        <br className="hidden sm:block" />
        ダイレクトな訴求
      </span>
    ),
    content: (
      <>
        「OFFISNAP」に訪れるユーザーの多くは、オフィス環境の改善を検討しているオフィス担当者（経営陣、経営企画室、総務、人事、広報）です。
        <br />
        <br />
        「OFFISNAP」は、オフィス担当者に直接アプローチ
        <span className="font-bold text-amethystGray">
          オフィス担当者に直接アプローチ
        </span>
        できるプラットフォームです。
      </>
    ),
    urlImage: "/images/png/problems-section-second.png",
  },
  {
    title: (
      <span>
        費用も手間も抑えて
        <br />
        質の高い案件と出会える
      </span>
    ),
    content: (
      <>
        OFFISNAPは、成果報酬型の一括見積もりサイトとは異なり、
        <span className="font-bold text-amethystGray">掲載料金のみで運用</span>
        されています。
        <br />
        また「安さ重視」の案件を紹介する一括見積もりサイトとは違い、
        <span className="font-bold text-amethystGray">
          “この会社にお願いしたい”という意志を持った企業からの直接問い合わせ
        </span>
        が届くのが特徴です。さらに、
        <span className="font-bold text-amethystGray">
          マッチングサポート機能
        </span>
        により、貴社の強みに合った企業との出会いも後押しします。
      </>
    ),
    urlImage: "/images/png/problems-section-third.png",
  },
];
