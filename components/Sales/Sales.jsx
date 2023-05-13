import React,{useRef,useEffect,useState} from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";

import RINGS from 'vanta/dist/vanta.rings.min'

const Sales = () => {
  const chart_info_list = [
    "Liquidity Pool: 65%",
    "Centralized Exchanges: 10%",
    "Staking Pools: 10%",
    "Airdrops: 5%",
    "Charity: 5%",
    "Marketing: 3%",
    "Dev Team: 2%",
  ];
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
  backgroundColor: 0x0,
  color: 0x888
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])
  return (
    <section ref={myRef} id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="chart-wrap wow fadeInRight" data-wow-delay=".2s">
                <img src={"/img/images/chart.png"} alt="" />
                <ul>
                  {chart_info_list.map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                 

                  <SalesTabButton
                    title="Token Allocation"
                    className=""
                    id="token-tab"
                    target="#token"
                    ariaControls="token"
                    ariaSelected={false}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="1 CGHAD = The Future"
                    description="Take the reins of your financial future with GigaChad. This isn't your average meme coin, this is a financial revolution, embodying strength, resilience, and determination. Stand tall with GigaChad, and embrace the power of a community that never backs down. Welcome to the world of GigaChad - where the bold thrive and the timid step aside
                  "
                    link="/"
                  />

                  <SalesTabContent
                    className={""}
                    id="token"
                    ariaLabel="token-tab"
                    title="2 CNL = 0.0967 BTC"
                    description=" The World’s 1st ICO Platform That Offers Rewards and The
                    platform helps investors to make easy to purchase and
                    sell their tokens"
                    link="/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
