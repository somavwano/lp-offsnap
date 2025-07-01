import "@/app/globals.css";
import { clsx } from "clsx";

import HeaderLayer from "@/components/organisms/HeaderLayer";
import { fontBeVietNamPro, fontLato, notoSans } from "@/config/fonts";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="ja" suppressHydrationWarning>
        <body
          className={clsx(
            "min-h-screen font-be-vietnam-pro antialiased pb-10 !tracking-normal leading-normal sm:text-base text-sm text-secondary bg-white w-full mx-auto",
            fontBeVietNamPro.variable,
            fontLato.variable,
            notoSans.variable
          )}
        >
          <main>
            <HeaderLayer />
            {children}
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
