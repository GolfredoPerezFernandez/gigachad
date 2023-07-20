import React,{useRef,useEffect,useState} from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import { Button, Hero, Input, PlanCard, Typography } from '@web3uikit/core'

import { useNetwork } from "wagmi";
import HALO from 'vanta/dist/vanta.halo.min'

const Staking = () => {
  
  const chart_info_list = [
    "Liquidity Pool: 65%",
    "Centralized Exchanges: 10%",
    "Staking Pools: 10%",
    "Airdrops: 5%",
    "Charity: 5%",
    "Marketing: 3%",
    "Dev Team: 2%",
  ];
  const {chain}=useNetwork()

  const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)
  
	useEffect(() => {
	  if (!vantaEffect) {
		setVantaEffect(HALO({
		  el: myRef.current,
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  baseColor: 0x0,
  backgroundColor: 0x0,
  yOffset: -0.06,
  size: 1.60
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])
  console.log("Staking "+ chain?.id)
  return (
    <section ref={myRef} id="staking" className="chart-area chart-bg ">
      <div className="container">
        <div className="chart-inner">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
           
     <PlanCard 
  key={"101"}
                backgroundColor="#144690"
                ctaButton={<div key={"144690"}><Input
				key={"3391"}
                  label={chain?.id==="14"?"CHADCOIN":"GHADCOIN"}
                  placeholder="100"
                  />
                  <Button  key={"31131"}   onClick={() => null} style={{ marginTop: 4 }} color="#144690" isFullWidth text={chain?.id!==14?"STAKE GHAD":"STAKE CHAD"} theme="primary" />
                  <Button key={"931"}  onClick={() => null} style={{ marginTop: 4 }} isFullWidth text="CLAIM" theme="secondary" /><Button key={"2334"} onClick={() => null} style={{ marginTop: 4 }} isFullWidth text="WITHDRAW" theme="secondary" /></div>}
                features={[
					"Your Deposit:",
                  "TVL:",
                  "ROI 90%",
                ]}
                featuresIconColor="#A8AFB7"
                height="606px"
                horizontalLine
                isCurrentBillingPeriod
                isCurrentPlan
                price={<Typography key={"33321"} color="#144690" variant="h1" weight="700">{ chain?.id!==14?" GHAD":"CHAD"}</Typography>}
                themeColor="#144690"
                title={chain?.id!==14?"GHAD Staking":"CHAD Staking"}
                width="285px" description={<Typography key={"3331"} color="#144690" variant="h1" weight="700">{""}</Typography>}    />
                
 
	
            </div>

            <div className="col-lg-6 col-md-10">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title={chain?.id!==14?"GHAD Staking":"CHAD Staking"}
                    description="Take the reins of your financial future with GigaChad. This isn't your average meme coin, this is a financial revolution, embodying strength, resilience, and determination. Stand tall with GigaChad, and embrace the power of a community that never backs down. Welcome to the world of GigaChad - where the bold thrive and the timid step aside"
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

export default Staking;
