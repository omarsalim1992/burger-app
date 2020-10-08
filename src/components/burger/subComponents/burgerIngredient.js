import React from 'react';

export default ({
    ingredient,
    children
}) => {
    return (
        <div className={ingredient}>
            {children}
        </div>
    );
};
