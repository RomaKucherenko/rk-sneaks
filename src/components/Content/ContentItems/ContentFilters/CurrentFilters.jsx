import React from 'react';

function CurrentFilters({filters, unsetBrandFilter, unsetGenderFilter, unsetTypeFilter}) {

    const onCancelBrandFilterClick = (item) => {
        unsetBrandFilter(item)
    }
    const onCancelTypeFilterClick = (item) => {
        unsetTypeFilter(item)
    }
    const onCancelGenderFilterClick = () => {
        unsetGenderFilter()
    }
    //ЦЕНА


    //ГЕНДЕР
    const genderFilters =
        <button>
            {filters.gender}
            <img
                onClick={() => onCancelGenderFilterClick()}
                src="./img/crest.png"/>
        </button>

    //ТИПЫ
    const typeFilters = filters.types.map((item, index) =>
        <button key={`${item}__${index}`}>
            {item}
            <img
                onClick={() => onCancelTypeFilterClick(item)}
                src="./img/crest.png"/>
        </button>)
    //БРЕНДЫ
    const brandFilters = filters.brands.map((item, index) =>
        <button key={`${item}__${index}`}>
            {item}
            <img
                onClick={() => onCancelBrandFilterClick(item)}
                src="./img/crest.png"/>
        </button>)

    return (
        <div className="content-items__current-filters
            col-lg-8 col-md-7 col-sm-8 col-7">
            {filters.gender && genderFilters}{brandFilters}{typeFilters}
        </div>
    );
}

export default CurrentFilters;