import React from 'react';
import PropTypes from 'prop-types';

const NonVeg = (props) => {
    return (
        <span className="mr-2">
        	<img src={props.nonVeg ? `${window.location.origin}/food/img/nonveg-icon.png` : `${window.location.origin}/food/img/veg-icon.png` className="spicy" alt="food"/>
            <span className="font-italic food">{props.nonVeg ? 'Non-Veg' : 'Veg'}</span>
        </span>
    );
}

NonVeg.propTypes = {
    nonVeg: PropTypes.bool
};

export default NonVeg;
