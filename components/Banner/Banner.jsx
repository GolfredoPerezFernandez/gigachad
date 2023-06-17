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
import {  useConnect } from 'wagmi'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ethers, getDefaultProvider } from 'ethers';
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

import { Web3Provider } from '@ethersproject/providers'
import {  useAccount } from 'wagmi';

import { makeStyles } from "@mui/styles";

import TextField from '@mui/material/TextField';

const useStyles = makeStyles((theme) => ({
  textfield_input: {
      color: `#c5cae9 !important`,
  }
}));
const theme = {
  primary: '#FFD700',
  secondary: '#A9A9A9',
  interactive: '#F8F8FF',
  container: '#4E4E5A',
  module: '#222633',
  accent: '#2A1B33',
  outline: '#CC1',
  dialog: '#000',
  fontFamily: 'orbitron',
}
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
  const UNISWAP_TOKEN_LIST = 'https://tokenlist.arbitrum.io/ArbTokenLists/arbed_arb_whitelist_era.json'

  const [provider, setProvider] = useState()
  const { connector } = useAccount()

  useEffect(() => {
    if (!connector) {
      return () => setProvider(undefined)
    }
  
    connector.getProvider().then((provider) => {
      setProvider(new Web3Provider(provider))
    })
  }, [connector])

  const [data, setData] = React.useState({
    quantity: '',
    status: 'initial',
  }); 
  const { connector: activeConnector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

const { address:ethAddress} = useAccount()
   const classes = useStyles();
   const [num, setNum] = React.useState(0);

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

  const handleChecker = (e) => {

    let array = [
      { language: "JavaScript" },
      { language: "JavaScript" },
      { language: "TypeScript" },
      { language: "C++" }
    ];
  
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].language)
      for (let j = 0; j < array.length; j++) {
        console.log(array[j].language)
        if (array[i].language !== array[j].language) {
          newArray.push(array[i].language);
        } else {
          newArray = [...newArray,array[i].language];
        }
      }
    }

    console.log("newArray", newArray);
  };
  const handleChange = (e) => {

    setNum(e.target.value);
  };
  const {  isSuccess, write } = useContractWrite({
    address: '0x338bbD9ea31C4a816e51C548eb55092BC91CB3eD',
    abi: presaleABI,
    functionName: 'buyTokens',
    args:[ethAddress],
    value:ethers.parseEther(num.toString())
  })

  //ethers.formatEther(num),
  return (<section ref={myRef} className="banner-area banner-bg">
      
       <Stack style={{marginTop:70,marginBottom:120,alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
        <h2 className="title">ICO IS  <span>LIVE!</span></h2>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
   
      <TextField
          id="input-with-icon-adornment"
          label="GHAD TOKEN ERC20 PRE-SALE"
        variant="filled" 
        focused
        maxWidth={120}
        step={0.1}
        pattern={"numbers"}
        helperText="1 ETH FOR 10.000 GHAD  "
        type="number"

      onChange={(e) => handleChange(e)}
      value={num}
 InputProps={{
  maxLength: 13,
  step: "0.1",
  endAdornment:
  <InputAdornment color="white" position="start">
 <CryptoLogos
 
   bgColor="#000000"
   chain="ethereum"
   onClick={function noRefCheck(){}}
   size="20px"
 />            </InputAdornment>,
 style: { color: "white" } ,

  }}

    
  
      />

<AwesomeButtonProgress
cssModule={AwesomeButtonStyles}
type="primary"
focused

disabled
color="primary" 
ripple
style={{width:220,marginLeft:10,marginTop:20,alignSelf:"center",marginBottom:50}}
onPress={(event, release) => {
  if(isConnected){
    write();
    release()
  }

  // do a sync/async task then call `release()`

}}>
BUY GHAD
</AwesomeButtonProgress>


    </Box>
      
    </Stack>
    <div className="Uniswap">
   {/*  <SwapWidget           locale={'en-US'}
    defaultChainId={1}
    hideConnectionUI={true}
    width={360} 

    provider={provider} 
/> */}
  </div>
    
    
    </section>
  );
};

export default Banner;

const presaleABI=[{"inputs":[{"internalType":"uint256","name":"pRate","type":"uint256"},{"internalType":"address payable","name":"pWallet","type":"address"},{"internalType":"contract IERC20","name":"pToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"purchaser","type":"address"},{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newRate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weiRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_withdrawAll","type":"bool"},{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"withdrawRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]