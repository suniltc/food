import React from 'react';

const Spicy = () => {
    return (
        <span>
            <img src={`${window.location.origin}/food/img/chilli.png`} className="spicy" alt="chilli"/>
            <span className="font-italic food">Spicy</span>
        </span>
    );
}

export default Spicy;
