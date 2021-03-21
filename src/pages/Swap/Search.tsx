import React from 'react';
import './style.css';

export default function Search({currency}) {

    return (
        <>
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
    </>
    )
}
