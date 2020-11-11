import React from 'react';

function CurrentFilters({filters, unsetBrandFilter}) {

    const onCancelFilterClick = (item) => {
        unsetBrandFilter(item)
    }

    const currentFilters = filters.brands.map((item, index) =>
        <button key={`${item}__${index}`}>
            {item}
            <img
                onClick={() => onCancelFilterClick(item)}
                src="./img/crest.png"/>
        </button>)

    return (
        <div className="content-items__current-filters
            col-lg-8 col-md-7 col-sm-8 col-7">
            {filters.brands && currentFilters}
        </div>
    );
}

export default CurrentFilters;