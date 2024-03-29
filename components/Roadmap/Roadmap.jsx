import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React,{useRef,useEffect,useState} from "react";
import RoadmapItem from "./RoadmapItem";
import RINGS from 'vanta/dist/vanta.net.min'

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q2 2023",
      title: "Birth of GigaChad.",
      info: [
        "GigaChad Token Launch.",
        "Website Launch.",
        "Community Building",
      ],
    },
    {
      roadmapTitle: "Q3 2023",
      title: "Growth and Expansion.",
      info: [
        "Exchange Listings.",
        "Partnerships.",
        "Marketing Campaign.",
      ],
    },

    {
      roadmapTitle: "Q4 2023",
      title: "The Rise of GigaChad NFTs.",
      info: [
        "NFT Launch.",
        "NFT Marketplace.",
        "NFT Staking.",
      ],
    },

    {
      roadmapTitle: "Q1 2024",
      title: "GigaChad Utility and Ecosystem Development.",
      info: [
        "GigaChad App Wallet & Swap.",
        "GigaChad PlayToEarn Games.",
      ],
    },
    {
      roadmapTitle: "Q2 2024 and Beyond",
      title: "Continuous Improvement and Innovation",
      info: [
       
      ],
    },  ];

  const scrollRef = useHorizontalScroll();
  const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)
	useEffect(() => {
	  if (!vantaEffect) {
		setVantaEffect(RINGS({
		  el: myRef.current,
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x74dc,
  backgroundColor: 0x0
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])
  return (
    <section ref={myRef} id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">OUr Roadmap</span>
              <h2 className="title">
              <span>The Ultimate</span> Alpha Male Crypto
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
