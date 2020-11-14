import React from 'react';

function CurrentFilters({filters, unsetBrandFilter, unsetSizeFilter,
                            unsetGenderFilter, unsetTypeFilter, unsetCostFilter}) {
    //По хорошему нужно сделать здесь по нормальному

    const onCancelBrandFilterClick = (item) => {
        unsetBrandFilter(item)
    }
    const onCancelSizeFilterClick = (item) => {
        unsetSizeFilter(item)
    }
    const onCancelTypeFilterClick = (item) => {
        unsetTypeFilter(item)
    }
    const onCancelGenderFilterClick = () => {
        unsetGenderFilter()
    }
    const onCancelCostFilterClick = () => {
        unsetCostFilter()
    }
    //РАЗМЕР
    const sizeFilters = filters.sizes.map((item, index) =>
        <button key={`${item}__${index}`}>
            {item}
            <img
                onClick={() => onCancelSizeFilterClick(item)}
                src="./img/crest.png"/>
        </button>)
    //ЦЕНА

    // Достаточно проверки что хотя одно из свойств filters.cost !== null,
    // потому в случае неравенства второе значени 100% не будет === null,
    // тк в state ВСЕГДА dispatch'им 2 значения
    const costFilterButton = filters.cost.from &&
        <button>
            {filters.cost.from + "-" + filters.cost.to}
            <img
                onClick={() => onCancelCostFilterClick()}
                src="./img/crest.png"/>
        </button>

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
            {filters.gender && genderFilters}{brandFilters}{typeFilters}{costFilterButton}{sizeFilters}
        </div>
    );
}

export default CurrentFilters;