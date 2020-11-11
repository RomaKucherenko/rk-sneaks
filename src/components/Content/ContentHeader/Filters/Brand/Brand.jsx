import React from 'react';
import classNames from "classnames"


const brands = ["Nike", "Adidas", "Puma", "Reebok"]

function Brand({unsetBrandFilter, setBrandFilter, selectedBrands}) {

    const onItemClick = (e) => {
        let brand = e.target.innerHTML

        if (selectedBrands.includes(brand)) {
            unsetBrandFilter(brand)
        } else {
            setBrandFilter(brand)
        }
    }

    const brandsElements = brands.map((brand, index) => {
        return <div
            onClick={onItemClick}
            key={`${index}__${brand}`}
            className={classNames("sub-filters__item", {
                "active": selectedBrands.includes(brand)
            })}>{brand}</div>
    })

    return (
        <li>
            <div className="filters__item">Бренд
                <div className="sub-filters__list brand-list"
                >
                    {/*Нажимаю Nike, div становится selected*/}
                    {brandsElements}

                </div>
            </div>
        </li>
    );
}

export default Brand;