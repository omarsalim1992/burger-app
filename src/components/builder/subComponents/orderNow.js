import React from 'react';
import { BurgerIcon } from '../../../assets/images';

export default ({
    ingredientsOrder,
    setShowModal
}) => {
    const isNoIngredients = !ingredientsOrder.length;
    return (
        <div className="row order-now justify-content-center">
            <div className="col-7">
                <button type="button"
                    className={`btn btn-block btn-warning ${isNoIngredients && 'cursor-not-allowed'}`}
                    disabled={isNoIngredients}
                    onClick={() => setShowModal(true)}>
                    <span className="text mr-4">
                        Order Now
                </span>
                    <span className="icon">
                        <BurgerIcon />
                    </span>
                </button>
            </div>
        </div>
    );
};
