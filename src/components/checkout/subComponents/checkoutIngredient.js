import React from 'react';

export default ({
    price,
    quantity,
    icon,
    checkoutClass
}) => {
    return (
        <div className={`col-5 icon text-center ${checkoutClass}`}>
            {icon} <span>{price} x {quantity}</span>
        </div>
    );
};
