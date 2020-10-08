import React from 'react';
import BurgerIngredient from './subComponents/burgerIngredient';

export default ({
    ingredientsOrder
}) => {
    return (
        <div className="col-6 burger pt-5">
            <div className="box">
                <BurgerIngredient ingredient="top-bun">
                    <BurgerIngredient ingredient="seeds" />
                    <BurgerIngredient ingredient="seeds2" />
                </BurgerIngredient>
                {ingredientsOrder.map((ingredient, index) =>
                    <BurgerIngredient key={ingredient + index} ingredient={ingredient} />)
                }
                <BurgerIngredient ingredient="bottom-bun" />
            </div>
        </div>
    );
};
