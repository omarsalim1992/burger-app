import React from 'react';

export default ({
    allOrders
}) => {
    return (
        <div className="order-list container">
            <div className="row mb-1">
                <div className="col-12">
                    <b>Your Orders</b>
                </div>
            </div>
            <div className="row">
                {allOrders.map((order, index) => {
                    return (
                        <div key={order.orderId + index} className="col-3 individual-order text-center mr-1">
                            {order.orderId} - {order.pickupTime}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
