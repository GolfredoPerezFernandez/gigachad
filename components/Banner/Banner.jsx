import React,{useEffect,useRef,useState} from "react";
import CountDownOne from "../CountDown/CountDownOne";

import BIRDS from 'vanta/dist/vanta.net.min'

const Banner = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)
	useEffect(() => {
	  if (!vantaEffect) {
		setVantaEffect(BIRDS({
		  el: myRef.current,
		  
		  mouseControls: true,
		  touchControls: true,
		  gyroControls: false,
		  scale: 1.00,
		  scaleMobile: 1.00,
		  color: 0xdeb410,
		  backgroundColor: 0x8040f,
		  points: 8.00,
		  maxDistance: 22.00,
		  spacing: 18.00
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])

  return (
    <section ref={myRef} className="banner-area banner-bg">
    


      <div   className="container">
        <div  className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">

              <h2 className="title">
              Get ready to dominate the crypto world with   <span>GigaChad </span>(GCHD) 
               </h2>
            </div>
            </div>
          {/*   <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>

              <CountDownOne />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
