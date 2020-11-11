import React from 'react';



function GenderFilter({ buttons }) {

    const buttonComponents = buttons.map((b, index) =>
        <button
            key={`${index}__${b}`}>
            {b}
        </button>)

    return (
        <div className="content-header__gender-buttons col-xl-9 col-lg-9 col-md-8 col-sm-7 col-8">
            {buttonComponents}
        </div>
    );
}

export default GenderFilter;