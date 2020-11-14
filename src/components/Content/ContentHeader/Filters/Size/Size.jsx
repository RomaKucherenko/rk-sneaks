import React from 'react';
import classNames from "classnames";
import {setSizeFilterAction, unsetSizeFilterAction} from "../../../../../Redux/filtersReducer";
import {connect} from "react-redux";

const sizes = []

for (let i = 35; i <= 46; i++) {
    sizes.push(i)
}


const Size = ({selectedSizes, unsetSizeFilter, setSizeFilter}) => {
    const onItemClick = (e) => {
        let size = e.target.innerHTML

        if (selectedSizes.includes(size)) {
            unsetSizeFilter(size)
        } else {
            setSizeFilter(size)
        }
    }

    const sizeElements = sizes.map((size, index) => {
        return <div
            onClick={onItemClick}
            key={`${index}__${size}`}
            className={classNames("sub-filters__item", {
                //Важный момент `${size}` - строка, size - число
                "active": selectedSizes.includes(`${size}`)
            })}>{size}</div>
    })

    return (
        <li>
            <div className="filters__item">Размер
                <div className="sub-filters__list size-list">

                    <div className="size-list__wrapper">
                        {sizeElements}
                    </div>

                </div>
            </div>
        </li>
    );
}

const mapStateToProps = state => {
    return {
        selectedSizes: state.filters.sizes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unsetSizeFilter: (size) => {
            dispatch(unsetSizeFilterAction(size))
        },
        setSizeFilter: (size) => {
            dispatch(setSizeFilterAction(size))
        }
    }
}


const SizeContainer = connect(mapStateToProps, mapDispatchToProps)(Size)

export default SizeContainer;