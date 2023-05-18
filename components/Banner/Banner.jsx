import React,{useEffect,useRef,useState} from "react";
import CountDownOne from "../CountDown/CountDownOne";
import WAVES from 'vanta/dist/vanta.waves.min'

import Link from "next/link";

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)
	useEffect(() => {
	  if (!vantaEffect) {
		setVantaEffect(WAVES({
		  el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])

  return (<section ref={myRef} className="banner-area banner-bg">
       <div   className="container">
        <div  className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">

              <h2 className="title">
              Get ready to dominate the crypto world with   <span>GigaChad </span>(GCHD) 
               </h2>

             
            </div>
            </div>
           <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Airdrop</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "5%" }}
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                0% target raised <span>PRESALE ENDED</span>
              </h4>
            </div>
          </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>

              <CountDownOne />
            </div>
          </div> 
          <Link  style={{width:250,marginTop:30,marginBottom:50}} href="https://etherscan.io/address/0x3beff2831393769448d41f5196d4b68b9bf1ad92#code"  className="btn">
                          ERC20 ADDRESS
                        </Link>
      </div>
      
      </div>
    </section>
  );
};

export default Banner;
