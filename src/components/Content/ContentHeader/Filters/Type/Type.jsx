import React from 'react';
import classNames from "classnames";

const types = ["Беговые","Повседневные","Шиповки","Бутсы"]

function Type({setTypeFilter, unsetTypeFilter, selectedTypes}) {
    const onItemClick = (e) => {
        let type = e.target.innerHTML

        if (selectedTypes.includes(type)) {
            unsetTypeFilter(type)
        } else {
            setTypeFilter(type)
        }
    }

    const typesElements = types.map((type, index) => {
        return <div
            onClick={onItemClick}
            key={`${index}__${type}`}
            className={classNames("sub-filters__item", {
                "active": selectedTypes.includes(type)
            })}>{type}</div>
    })
    return (
        <li>
            <div className="filters__item">Тип
                <div className="sub-filters__list type-list">

                    {typesElements}

                </div>
            </div>
        </li>
    );
}

export default Type;