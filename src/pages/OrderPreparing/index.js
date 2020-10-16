import React from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';
import { ChefIcon, BurgerIcon } from '../../assets/images';
import { Link } from 'react-router-dom';
import Constants from '../../constants';

const OrderPreparing = (props) => {
    const { pagePath } = Constants;
    console.log("props.latestOrder::", props.latestOrder);
    const { latestOrder = {} } = props;
    const { pickupTime = "", orderId = "" } = latestOrder;
    return (
        <div className="container">
            <div className="order-preparing row justify-content-center">
                <div className="col-7" style={{ borderStyle: 'outset' }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-5 chef align-self-center">
                            <ChefIcon />
                        </div>
                        <div className="col-7 text text-center align-self-center">
                            your order will be ready<br />for pick up at
                            <div className="p-0 m-0 time">
                                {/* {moment().add(15, 'minutes').format('h:mm A')} */}
                                {pickupTime}
                            </div>
                            <div className="my-1">
                                order No: <span style={{ color: '#873600' }}>{orderId}</span>
                            </div>
                            <div className="go-home px-2 mb-2">
                                <Link to={pagePath.HOME}>
                                    <div type="button"
                                        className='btn btn-warning'>
                                        <span className="text mr-4">
                                            Order Again
                                        </span>
                                        <span className="icon">
                                            <BurgerIcon />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state = {}) => {
    return {
        latestOrder: (state && state.orders && state.orders.latest) || {}
    }
};

export default connect(mapStateToProps, null)(OrderPreparing);