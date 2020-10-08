import React, { useState } from 'react';
import {
    PlusIcon,
    MinusIcon
} from '../../../assets/images';

export default ({
    icon,
    price,
    type,
    onChangeBurgerIngredients
}) => {
    const [showAddOn, setShowAddOn] = useState(false);
    return (
        <div className="col-5 ingredient-dev"
            onMouseEnter={() => setShowAddOn(true)}
            onMouseLeave={() => setShowAddOn(false)}>
            <div className="row">
                <div className="col-2 align-self-center">
                    {showAddOn && <div className="d-flex flex-column align-items-center add-ons curser-pointer">
                        <span className="plus-icon" onClick={() => onChangeBurgerIngredients(type, true)}>
                            <PlusIcon />
                        </span>
                        <span className="minus-icon" onClick={() => onChangeBurgerIngredients(type, false)}>
                            <MinusIcon />
                        </span>
                    </div>}
                </div>
                <div className="col-9">
                    <div className="ingredient">
                        <div className="price text-center py-1">{price}</div>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
};
