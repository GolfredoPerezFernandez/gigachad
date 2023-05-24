import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import Sales from "@/components/Sales/Sales";
import TeamOne from "@/components/Team/TeamOne";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";
import BannerThree from "@/components/Banner/BannerThree";
import Staking from "@/components/Staking/Staking";

export default function Home() {
  return (
    <>
      <Head>
        <title>GigaChad Token</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix">
          <Banner />
          <WhoWeAre />
          
    <div className="area-bg">
            
            <Staking />
          </div>
          <WhyChooseUs />
          
          <div className="area-bg">
            
            <Roadmap />
          </div>
          
          <div height={20}></div>
          <TopPartners />
          <Sales />


          <div height={100}></div>
          
        </main>
      </LayoutOne>
    </>
  );
}
