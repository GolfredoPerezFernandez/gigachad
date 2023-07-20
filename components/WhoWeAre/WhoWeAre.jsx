import React from "react";
import Link from "next/link";
import { useNetwork } from "wagmi";

const WhoWeAre = () => {
  
  const {chain}=useNetwork()
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Who we are</span>
                <h2 className="title">
                GigaChad <span>: </span>  Your Meme Coin, On Steroids.
                </h2>
              </div>
              <p>

              Get ready to dominate the crypto world with GigaChad {chain?.id!==1?
          "CHAD":
          "GHAD"} – the most muscular, assertive, and jaw-droppingly powerful token in the digital asset universe!
            </p>
              <Link href="/" className="btn">
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
