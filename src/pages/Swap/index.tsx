import React from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';
import * as currency from '../../constants/token/pancakeswap.json'
import './style.css';

export default function Swap() {
    const token_default = currency.tokens[0]
    return (
        <>
            <div class="main">
      <div class="container">
        {/* this is a drop down */}
        <div class="c-Dropdown__wrapper">
          <div class="c-Dropdown__header">
            <h2>Buy Crypto to your wallet</h2>
          </div>
          <div class="c-Dropdown">
            <div class="c-Dropdown__value">
              <div class="c-Dropdown__value__pretitle">
                You Receive (estimate)
              </div>
              <div class="c-Dropdown__value__title">97869869</div>
            </div>
            <div class="c-Dropdown__click">
              <div class="c-Dropdown__click__title">
                <img
                  src="https://transak-bucket.s3.us-east-2.amazonaws.com/images/cryptocurrency/bitcoin_small.png"
                />
                <span>ETH</span>
              </div>
              <div class="c-Dropdown__click__tab">Eretheum Network</div>
            </div>
          </div>
          <div class="c-Dropdown__tabs">
            <div class="c-Dropdown__tab c-Dropdown__tabs__primary">
              Slippage 0%
            </div>
            <div class="c-Dropdown__tab c-Dropdown__tabs__secondary">
              Processing time 2-30 minutes
            </div>
          </div>
          <div class="c-Dropdown__button">Buy Now</div>
        </div>
        {/* <!-- this is the search page --> */}
        <div class="c-Search">
          <div class="c-Search__header">
            <h2>Select a crytocurrency</h2>
            <div class="c-Search__header__back">Back</div>
          </div>
          <div class="c-Search__search">
            <input
              type="text"
              placeholder="Type a currency"
              class="c-Search__input"
            />
            <select class="c-Search__search__dropdown">
              <option value="all" selected>ALL NETWORK</option>
              <option value="Dai">Dai</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Bitcoin">Bitcoin</option>
              <option value="Elrond">Elrond</option>
              <option value="Tether">Tether</option>
            </select>
          </div>
          <div class="c-Search__options">
            <div class="c-Search__options__title">All currencies available</div>
            <div class="c-Search__options__list">
              {/* <!-- Data is injected here --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
