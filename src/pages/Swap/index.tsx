import React,{useState} from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';
import * as currency from '../../constants/token/pancakeswap.json'
import Search from './Search';
import './style.css';


export default function Swap() {
    // const [view,setView] = useState(false)
    const [token_default,setTokenDefault] = useState(currency.tokens[0]);
    const [tokenTwo,setTokenTwo] = useState(currency.tokens[1]);
    const [open,setOpen] = useState(true);
    const [secondOpen,setSecondOpen] = useState(true);
    const handleClick = (token:any) =>{
      setOpen(!open);
      setTokenDefault(token);
    }
    return (
        <>
      <div className="main">
        <div className="container1">
        {/* this is a drop down */}
        {open ? 
        <div className="c-Dropdown__wrapper">
          <div className="c-Dropdown__header">
            <h2>Buy Crypto to your wallet</h2>
          </div>
          <div className="c-Dropdown">
            <div className="c-Dropdown__value">
              <div className="c-Dropdown__value__pretitle">
                You Receive (estimate)
              </div>
              <div className="c-Dropdown__value__title">97869869</div>
            </div>
            
            <div role="button" tabIndex={0}  className="c-Dropdown__click"  onClick={()=> {setOpen(!open)}} onKeyDown={() => {setOpen(!open)}} >
              <div className="c-Dropdown__click__title">
                <img
                  src={token_default.logoURI}
                  alt="trancasss"
                />
                <span>{token_default.symbol}</span>
              </div>
              <div className="c-Dropdown__click__tab">{token_default.name}</div>
            </div>
            
          </div>
          {/* The second input */}
          <div className="c-Dropdown">
            <div className="c-Dropdown__value">
              <div className="c-Dropdown__value__pretitle">
                You Receive (estimate)
              </div>
              <div className="c-Dropdown__value__title">97869869</div>
            </div>
            
            <div role="button" tabIndex={0}  className="c-Dropdown__click"  onClick={()=> {setOpen(!open)}} onKeyDown={() => {setOpen(!open)}} >
              <div className="c-Dropdown__click__title">
                <img
                  src={token_default.logoURI}
                  alt="trancasss"
                />
                <span>{token_default.symbol}</span>
              </div>
              <div className="c-Dropdown__click__tab">{token_default.name}</div>
            </div>
          </div>
          {/*  */}
          <div className="c-Dropdown__tabs">
            <div className="c-Dropdown__tab c-Dropdown__tabs__primary">
              Slippage 0%
            </div>
            <div className="c-Dropdown__tab c-Dropdown__tabs__secondary">
              Processing time 2-30 minutes
            </div>
          </div>
          <div className="c-Dropdown__button">Buy Now</div>
        </div>
        
        :
        <Search currency={currency} />
        }
      </div>
    </div>
        </>
    )
}
