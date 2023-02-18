import React from "react";

export const CryptoMate = () => {
    return (
        <div>
            <iframe
                className="crptoMate"
                height={700}
                src="https://flooz.trade/embed/trade?refId=RVpxks&swapToTokenAddress=0xe2c5fcf777a2b860921116b275951a50e8135eeb&swapLockToToken=true"
                title="swap"
            />
        </div>
    );
};
