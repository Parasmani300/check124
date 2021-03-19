import React from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';
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
                                    <p>You Pay</p>
                                    <input placeholder="0" type="number" />
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
