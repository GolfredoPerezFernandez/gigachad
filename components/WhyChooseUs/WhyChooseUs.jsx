import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import WhyChooseUsItem from "./WhyChooseUsItem";

import { useNetwork } from "wagmi";
const WhyChooseUs = () => {
  
  const {chain}=useNetwork()
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: "/img/icon/choose_icon01.svg",
      alt: "",
      link: "/",
      title: "Total Supply Cap",
      description: chain?.id!==1?"A ripped and shredded 188,888,888,888,888 CHAD tokens. No more, no less – because a real alpha knows when enough is enough.":"A ripped and shredded 188,888,888,888,888 GHAD tokens. No more, no less – because a real alpha knows when enough is enough.",
    },
    {
      src: "/img/icon/choose_icon02.svg",
      alt: "",
      link: "/",
      title: "Token Deflation",
      description: chain?.id!==1?"Every CHAD transaction is like a killer workout, burning 1% of the transferred tokens. As the total supply deflates, the value of CHAD grows like a chiseled bicep.":"Every GHAD transaction is like a killer workout, burning 1% of the transferred tokens. As the total supply deflates, the value of GHAD grows like a chiseled bicep.",
    },
    {
      src: "/img/icon/h2_choose_icon04.svg",
      alt: "",
      link: "/",
      title: "Airdrops",
      description: chain?.id!==1?"Shower your loyal followers with CHAD tokens using airdrops. Because a true GigaChad shares his gains with his squad.":"Shower your loyal followers with GHAD tokens using airdrops. Because a true GigaChad shares his gains with his squad.",
    },
    {
      src: "/img/icon/choose_icon03.svg",
      alt: "",
      link: "/",
      title: "Security Features",
      description: chain?.id!==1?"CHAD has got your back with tight security, including pausing mechanisms and cooldown periods to prevent Sandwichs Attacks. It's like having a personal bodyguard for your tokens.":"GHAD has got your back with tight security, including pausing mechanisms and cooldown periods to prevent Sandwichs Attacks. It's like having a personal bodyguard for your tokens.",
    },
    {
      src: "/img/icon/h2_choose_icon03.svg",
      alt: "",
      link: "/",
      title: "Snapshot Capabilities",
      description: chain?.id!==1?"CHAD takes snapshots of token balances, so you know who's boss when it comes to voting rights or dividends distribution.":"GHAD takes snapshots of token balances, so you know who's boss when it comes to voting rights or dividends distribution.",
    },
    {
      src: "/img/icon/h2_choose_icon02.svg",
      alt: "",
      link: "/",
      title: "Governance & Voting",
      description: chain?.id!==1?"CHAD runs on pure democracy and swagger. The more GHAD tokens you hold, the louder your alpha voice roars in governance decisions.":"GHAD runs on pure democracy and swagger. The more GHAD tokens you hold, the louder your alpha voice roars in governance decisions.",
    },
    {
      src: "/img/icon/h2_choose_icon01.svg",
      alt: "",
      link: "/",
      title: "Flashloans",
      description: chain?.id!==1?"Flex those financial muscles with CHAD's flash minting feature. Create flashloan in a single transaction for mind-blowing DeFi moves.":"Flex those financial muscles with GHAD's flash minting feature. Create flashloan in a single transaction for mind-blowing DeFi moves.",
    },
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
 
              <h2 className="title">
                Why choose GigaChad <span>Token</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row choose-active">
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className="col-lg-3">
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        <div className="slide-progressbar">
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className="slide-filler"
          />
        </div>

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
