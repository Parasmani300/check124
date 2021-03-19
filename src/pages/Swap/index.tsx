import React from 'react';
// import ConnectWalletButton from 'components/ConnectWalletButton';

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
                                    <div className="card-body">
                                        <p>You Pay</p>
                                        <input style={{border:0}} />
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
