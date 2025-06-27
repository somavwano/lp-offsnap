import { Be_Vietnam_Pro as FontBeVietNamPro, Lato, Noto_Sans_JP  } from "next/font/google";

export const fontBeVietNamPro = FontBeVietNamPro({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

export const fontLato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const notoSans = Noto_Sans_JP({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});
