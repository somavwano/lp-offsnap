import Wrapper from "@/components/atoms/Wrapper";
import BenefitsAfterSignup from "@/components/organisms/BenefitsAfterSignup";
import BrandLogoList from "@/components/organisms/BrandLogoList";
import BrandShowcase from "@/components/organisms/BrandShowcase";
import FrequentlyAskedQuestions from "@/components/organisms/FrequentlyAskedQuestions";
import IntroSection from "@/components/organisms/IntroSection";
import OffSnapHero from "@/components/organisms/OffSnapHero";
import OfficePartnerAi from "@/components/organisms/OfficePartnerAi";
import OffisBanner from "@/components/organisms/OffisBanner";
import OffisnapVsQuoteSitesComparison from "@/components/organisms/OffisnapVsQuoteSitesComparison";
import PricingPlans from "@/components/organisms/PricingPlans";
import ProblemsSection from "@/components/organisms/ProblemsSection";
import UsageFlow from "@/components/organisms/UsageFlow";
import WhyChooseSection from "@/components/organisms/WhyChooseSection";

export default function HomePage() {
  return (
    <>
      <OffSnapHero />
      <BrandLogoList />
      <IntroSection />
      <ProblemsSection />
      <BenefitsAfterSignup />
      <OffisBanner />
      <div className="bg-white">
        <Wrapper style="py-6">
          <OfficePartnerAi />
          <p className="text-2xl text-deep-black text-center mt-6">
            「御社でいい」ではなく
            <span className="text-rose-accent font-bold text-[32px] leading-normal">
              「御社がいい！」
            </span>
            という最適な顧客との出会いを創出します
          </p>
        </Wrapper>
      </div>
      <WhyChooseSection />
      <UsageFlow />
      <BrandShowcase />
      <div className="bg-white">
        <Wrapper>
          <PricingPlans />
        </Wrapper>
      </div>
      <OffisnapVsQuoteSitesComparison />
      <FrequentlyAskedQuestions />
    </>
  );
}
