import React from 'react';
import { Modal } from 'react-bootstrap';
import { CheeseIcon, LettuceIcon, BeefBaconIcon, MeatIcon } from '../../assets/images/index';
import CheckoutIngredient from './subComponents/checkoutIngredient';
import Constants from '../../constants/index';
import { Link } from 'react-router-dom';
const burgerCostCalculator = (ingredients = {}) => {
    const { ingredientPrices, ingredientsType } = Constants;
    return (ingredients[ingredientsType.CHEESE] * ingredientPrices.CHEESE) +
        (ingredients[ingredientsType.LETTUCE] * ingredientPrices.LETTUCE) +
        (ingredients[ingredientsType.BEEF_BACON] * ingredientPrices.BEEF_BACON) +
        (ingredients[ingredientsType.MEAT] * ingredientPrices.MEAT);
};

export default ({
    showModal,
    setShowModal,
    ingredients
}) => {
    const { ingredientPrices, ingredientsType, pagePath } = Constants;
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} className='my-modal' centered>
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container-fluid p-0 m-0'>
                    <div style={{ marginTop: 70 }} className="row justify-content-center">
                        {ingredients[ingredientsType.CHEESE] ?

                            <CheckoutIngredient
                                price={ingredientPrices.CHEESE}
                                quantity={ingredients[ingredientsType.CHEESE]}
                                icon={<CheeseIcon />}
                                checkoutClass='checkout-cheese mb-2 mr-2'
                            />
                            : null
                        }
                        {ingredients[ingredientsType.LETTUCE] ? <CheckoutIngredient
                            price={ingredientPrices.LETTUCE}
                            quantity={ingredients[ingredientsType.LETTUCE]}
                            icon={<LettuceIcon />}
                            checkoutClass='checkout-lettuce mb-2 mr-2'
                        /> : null}

                        {ingredients[ingredientsType.BEEF_BACON] ?
                            <CheckoutIngredient
                                price={ingredientPrices.BEEF_BACON}
                                quantity={ingredients[ingredientsType.BEEF_BACON]}
                                icon={<BeefBaconIcon />}
                                checkoutClass='checkout-beefBacon mb-2 mr-2'
                            /> : null}

                        {ingredients[ingredientsType.MEAT] ?
                            <CheckoutIngredient
                                price={ingredientPrices.MEAT}
                                quantity={ingredients[ingredientsType.MEAT]}
                                icon={<MeatIcon />}
                                checkoutClass='checkout-meat mb-2 mr-2'
                            /> : null}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-9 icon text-center checkout-total mb-2">
                            <span>TOTAL: RM {burgerCostCalculator(ingredients)}</span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => { setShowModal(false) }}>Cancel</button>
                <Link to={pagePath.ORDER_PREPARING}>
                    <button type="button" className="btn btn-warning">Confirm</button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
};
