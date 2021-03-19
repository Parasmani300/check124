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
                                            <button type="submit" className="button">
                                                <div className="row">
                                                    <div className="col-5">
                                                        <img src={token_default.logoURI} alt={token_default.name} />
                                                    </div>
                                                    <div className="col-5">
                                                        <h5>{token_default.symbol}</h5>
                                                    </div>
                                                    <div className="col-2">
                                                        <img src="https://img.icons8.com/android/24/4a90e2/expand-arrow.png"/>
                                                    </div>
                                                </div>
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
