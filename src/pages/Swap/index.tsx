import React,{useState} from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';
import * as currency from '../../constants/token/pancakeswap.json'
import './style.css';


export default function Swap() {
    // const [view,setView] = useState(false)
    const [token_default,setTokenDefault] = useState(currency.tokens[0]);
    const [open,setOpen] = useState(true)
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
        <div className="c-Search">
          <div className="c-Search__header">
            <h2>Select a crytocurrency</h2>
            <div className="c-Search__header__back">Back</div>
          </div>
          <div className="c-Search__search">
            <input
              type="text"
              placeholder="Type a currency"
              className="c-Search__input"
            />
            <select className="c-Search__search__dropdown">
              <option value="all" selected>ALL NETWORK</option>
              <option value="Dai">Dai</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Elrond">Elrond</option>
              <option value="Tether">Tether</option>
            </select>
          </div>
          <div className="c-Search__options">
            <div className="c-Search__options__title">All currencies available</div>
            <div className="c-Search__options__list">
              {/* <!-- Data is injected here --> */}
              {currency?.tokens.filter(t => t.logoURI).map((token) => {
                return<div className="c-Search__options__item" role="button" tabIndex={0}   onClick={()=> {handleClick(token)}} onKeyDown={() => {setOpen(!open)}}>
                <div className="c-Search__options__item__click" id={token.address} />
                <div className="c-Search__options__item__info">
                  <img className="c-Search__options__item__icon" src={token.logoURI} alt={token.name}/>
                  <div className="c-Search__options__item__title">{token.symbol}<span>{token.name}</span></div>
                </div>
                <div className="c-Search__options__item__tab">{token.decimals}</div>
              </div>
              })}
            </div>
          </div>
        </div>
        }
      </div>
    </div>
        </>
    )
}
