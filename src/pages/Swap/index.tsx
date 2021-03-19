import React from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';
import * as currency from '../../constants/token/pancakeswap.json'
import './style.css';

export default function Swap() {
    const token_default = currency.tokens[0]
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Buy Crypto to Your Wallet</h4>
                                <div className="card">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h5>You Pay</h5>
                                            <input placeholder="0" type="number" />
                                        </div>
                                        <div className="col-md-3">
                                            <button class="button">
                                                <img src={token_default.logoURI} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        </>
    )
}
