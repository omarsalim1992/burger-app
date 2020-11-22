import React from 'react';
import BuilderIngredient from './subComponents/builderIngredient';
import OrderNow from './subComponents/orderNow';
import Constants from '../../constants/index';
import {
    CheeseIcon,
    LettuceIcon,
    BeefBaconIcon,
    MeatIcon
} from '../../assets/images';

export default ({
    onChangeBurgerIngredients,
    isNoIngredients,
    setShowModal
}) => {
    const { ingredientPrices, ingredientsType } = Constants;
    return (
        <div className="menu col-6 mt-2">
            <div className="row justify-content-between my-2 px-5">
                <BuilderIngredient
                    price={ingredientPrices.CHEESE}
                    type={ingredientsType.CHEESE}
                    icon={<CheeseIcon />}
                    onChangeBurgerIngredients={onChangeBurgerIngredients}
                />
                <BuilderIngredient
                    price={ingredientPrices.LETTUCE}
                    type={ingredientsType.LETTUCE}
                    icon={<LettuceIcon />}
                    onChangeBurgerIngredients={onChangeBurgerIngredients}
                />
            </div>
            <div className="row justify-content-between my-5 px-5">
                <BuilderIngredient
                    price={ingredientPrices.BEEF_BACON}
                    type={ingredientsType.BEEF_BACON}
                    icon={<BeefBaconIcon />}
                    onChangeBurgerIngredients={onChangeBurgerIngredients}
                />
                <BuilderIngredient
                    price={ingredientPrices.MEAT}
                    type={ingredientsType.MEAT}
                    icon={<MeatIcon />}
                    onChangeBurgerIngredients={onChangeBurgerIngredients}
                />
            </div>
            <OrderNow
                isNoIngredients={isNoIngredients}
                setShowModal={setShowModal}
            />
        </div>
    );
};
