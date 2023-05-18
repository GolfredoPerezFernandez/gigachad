import React,{useEffect,useRef,useState} from "react";
import CountDownOne from "../CountDown/CountDownOne";
import WAVES from 'vanta/dist/vanta.waves.min'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { AwesomeButtonProgress } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { CryptoLogos } from '@web3uikit/core';

import {  useAccount } from 'wagmi';

import { makeStyles } from "@mui/styles";

import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  textfield_input: {
      color: `#c5cae9 !important`,
  }
}));
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

import Link from "next/link";

const Banner = () => {
  const [data, setData] = React.useState({
    quantity: '',
    status: 'initial',
  }); 
  
const { address:ethAddress} = useAccount()
   const classes = useStyles();
   const [num, setNum] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ status: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }   }
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

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setNum(e.target.value);
    }
  };
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

      </div>
    
      </div>
        <Stack style={{marginTop:70,marginBottom:120,justifyContent:"center",alignItems:"center"}}>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
   
      <TextField
          id="input-with-icon-adornment"
          label="GCHAD TOKEN ERC20 PRE-SALE"
        variant="filled" 
        focused
        helperText="From ETH to GCHAD"
      width={150}
      onChange={(e) => handleChange(e)}
      value={num}
 step={0.1}
 inputProps={{
   startAdornment:<InputAdornment color="white" position="start">
 <CryptoLogos
 
   bgColor="#000000"
   chain="ethereum"
   onClick={function noRefCheck(){}}
   size="20px"
 />            </InputAdornment>,
 style: { color: "white" } }}

    
  
      />

<AwesomeButtonProgress
cssModule={AwesomeButtonStyles}
type="primary"
focused
disabled={true}
color="primary" 
style={{width:220,marginLeft:10,marginTop:20,alignSelf:"center",marginBottom:50}}
onPress={(event, release) => {
  // do a sync/async task then call `release()`
  release()
}}>
BUY GCHAD
</AwesomeButtonProgress>

    </Box>
      
    </Stack>
    </section>
  );
};

export default Banner;
