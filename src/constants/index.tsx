/* eslint-disable no-sparse-arrays */
/* eslint-disable react/jsx-key */
import DoubleCircle from "@/components/atoms/DoubleCircle";
import XIcon from "@/components/atoms/XIcon";
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
    className: "w-[85px] h-[21px] sm:w-[170px] sm:h-[42px]",
  },
  {
    src: "/images/svg/amazon.svg",
    className: "w-[75px] h-[21px] sm:w-[150px] sm:h-[42px]",
  },
  {
    src: "/images/svg/lifull.svg",
    className: "w-[85px] h-[21px] sm:w-[170px] sm:h-[42px]",
  },
  {
    src: "/images/svg/adastria.svg",
    className: "w-[99px] h-[23px] sm:w-[198px] sm:h-[46px]",
  },
  {
    src: "/images/svg/accenture.svg",
    className: "w-[85px] h-[23px] sm:h-[50px] sm:w-[170px] h-[21px]",
  },
  {
    src: "/images/svg/line.svg",
    className: "w-[42.5px] h-[23px] sm:w-[85px] sm:h-[42px] h-[21px]",
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
    urlImage: "/images/png/why-choose-section-first.png",
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
    urlImage: "/images/png/why-choose-section-second.png",
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
    urlImage: "/images/png/why-choose-section-third.png",
  },
];

export const columnsOffisnapVsQuoteSitesComparison = [
  {
    header: null,
    items: [
      <div className="text-xs md:text-base">月額費用</div>,
      <div className="text-xs md:text-base">
        集客力
        <br />
        顧客の質
      </div>,
      <div className="text-xs md:text-base">
        導入事例の
        <br />
        掲載
      </div>,
      <div className="text-xs md:text-base">
        マッチング
        <br />
        サービス
      </div>,
    ],
  },
  {
    header: {
      text: "OFFISNAP",
      isRed: true,
    },
    border: "border-4 border-rose-accent",
    items: [
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <DoubleCircle />
        <div className="text-[18px] sm:text-xl md:text-2xl lg:text-[32px] text-rose-accent leading-6 md:leading-8 lg:leading-9">
          30,000円〜50,000円
          <span className="text-xs lg:text-base">（税抜き）</span>
        </div>
        <div className="text-[10px] sm:text-xs md:text-[14px] lg:text-base leading-4">
          ※成約数が何件でも金額は固定
        </div>
      </div>,
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <DoubleCircle />
        <div className="text-xs sm:text-sm lg:text-base text-deep-black">
          <span className="text-rose-accent">オフィス環境を投資</span>
          として考えるような 関心の高い担当者が訪れるため、
          <span className="text-rose-accent">
            質の高い顧客からの問い合わせが多い
          </span>
        </div>
      </div>,
      ,
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <DoubleCircle />
        <div className="text-xs sm:text-sm lg:text-base text-deep-black">
          企業側から導入事例をつないでくれたり、繋げる際にも
          <span className="text-rose-accent">
            ワンクリックで事例ひも付け可能
          </span>
        </div>
      </div>,
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <DoubleCircle />
        <div className="text-xs sm:text-sm lg:text-base text-deep-black">
          イメージに合うオフィス写真を選ぶことで、
          <span className="text-rose-accent">
            最も相性の良い会社同士を繋ぐことができるAIマッチングサービス
          </span>
          。無駄が一切無い。
        </div>
      </div>,
      ,
    ],
  },
  {
    header: {
      text: "一括見積もりサイト",
      isGray: true,
    },
    items: [
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <div>
          <XIcon />
        </div>
        <div className="text-[18px] sm:text-xl md:text-2xl lg:text-[32px] leading-4 sm:leading-6 md:leading-8 lg:leading-9 text-gray-dark-muted">
          <span className="text-xs lg:text-base">月</span>100,000
          <span className="text-xs lg:text-base">円〜</span>500,000
          <span className="text-xs lg:text-base">円（税抜き）</span>
        </div>
        <div className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-4">
          中には初期費用＋月額費用＋成約手数料の 一括見積もりサービスも
        </div>
      </div>,
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <div>
          <XIcon />
        </div>
        <div className="text-xs sm:text-sm lg:text-base text-deep-black">
          集客力が高く、問い合わせは多いが安さ、速さを求める問い合わせも多い
        </div>
      </div>,
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <div>
          <XIcon />
        </div>
        <div className="text-xs sm:text-sm lg:text-base text-deep-black">
          基本的に サポートはなし
        </div>
      </div>,
      <div className="py-2 px-[2px] sm:py-3 sm:px-1 md:py-4 md:px-2 lg:py-4 lg:px-3 flex flex-col items-center justify-center gap-2">
        <div>
          <XIcon />
        </div>
        <div className="text-xs sm:text-sm lg:text-base text-deep-black">
          一括見積もりの担当者からの紹介があるが複数企業に紹介しているため制度は高く無い
        </div>
      </div>,
    ],
  },
];

export const listAskQuestion = [
  {
    ask: "利用にあたって条件はありますか？",
    titleQuestion: "はい、OFFISNAPは法人向けのサービスとなっております。",
    question:
      "ご登録・ご利用いただけるのは、法人格を有する企業・団体様に限らせていただいております。個人事業主様やフリーランスの方のご利用は現在のところ対象外となりますので、あらかじめご了承ください。",
  },
  {
    ask: "自社のオフィスも掲載できますか？",
    titleQuestion: "はい、掲載可能です。",
    question:
      "パートナーとして有料プランをご契約いただいている場合、ご自身の企業オフィスを「オフィスオーナー」として無料で掲載することができます。自社の実績紹介やブランディングにもつながりますので、ぜひご活用ください。",
  },
  {
    ask: "自社の導入事例を掲載することはできますか？",
    titleQuestion:
      "はい、導入企業様がOFFISNAPに掲載されている場合に限り、導入事例として紐づけが可能です。",
    question:
      "導入先の企業様がOFFISNAPに登録・掲載されていれば、御社のページと紐づけることで、導入事例として表示することができます。まだ掲載されていない場合には、導入企業様にOFFISNAPの無料掲載をご案内いただくことで、掲載完了後に紐づけが可能となります。",
  },
  {
    ask: "解約はいつでもできますか？",
    titleQuestion: "はい、いつでもご解約いただけます。",
    question:
      "ご契約は1ヶ月ごとの自動更新制となっており、次回更新の1ヶ月前までにご連絡いただければ、いつでも解約が可能です。無理な継続契約などは一切ございませんので、ご安心ください。",
  },
  {
    ask: "解約後、掲載されていた情報はどうなりますか？",
    titleQuestion: "解約後はすべての掲載情報が非公開となります。",
    question:
      "解約後は、オフィス情報やプロフィールなど、全ての掲載内容がOFFISNAP上に表示されなくなります。なお、再度ご契約いただければ、過去の情報をもとにスムーズに再掲載が可能ですので、ご安心ください。",
  },
  {
    ask: "領収書は発行できますか？",
    titleQuestion: "はい、領収書は管理画面からいつでも発行いただけます。",
    question:
      "ご利用中のプランに関する領収書は、ログイン後の管理ページよりダウンロード可能です。毎月の決済履歴とあわせてご確認いただけますので、経理処理にもご活用いただけます。",
  },
  {
    ask: "支払い方法には何がありますか？",
    titleQuestion: "お支払いはクレジットカード決済に対応しております。",
    question:
      "現在、OFFISNAPではクレジットカードによるお支払いのみご利用いただけます。銀行振込やその他の決済手段には対応しておりませんので、あらかじめご了承ください。",
  },
];
