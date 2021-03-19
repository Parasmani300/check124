import React from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';
import * as currency from '../../constants/token/pancakeswap.json'
import './style.css';

export default function Swap() {
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
                                            <select className="form-select">
                                                {currency.tokens.map((token) => {
                                                    return <option value={token.name}>
                                                        <div className="row">
                                                            <div className="col">
                                                                <img src={token.logoURI} alt={token.name} />
                                                            </div>
                                                            <div className="col">
                                                                <h5>{token.symbol}</h5>
                                                            </div>
                                                        </div>
                                                    </option>
                                                })}
                                            </select>
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
