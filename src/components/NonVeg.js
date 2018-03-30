import React from 'react';
import PropTypes from 'prop-types';

const NonVeg = (props) => {
    return (
        <span className="mr-2">
        	<img src={props.nonVeg ? "https://suniltc.github.io/food/img/nonveg-icon.png" : "https://suniltc.github.io/food/img/veg-icon.png"} className="spicy" alt="food"/>
            <span className="font-italic food">{props.nonVeg ? 'Non-Veg' : 'Veg'}</span>
        </span>
    );
}

NonVeg.propTypes = {
    nonVeg: PropTypes.bool
};

export default NonVeg;
