import React from 'react';

function Type(props) {
    return (
        <li>
            <div className="filters__item">Тип
                <div className="sub-filters__list type-list">

                    <div className="sub-filters__item">Беговые</div>
                    <div className="sub-filters__item">Повседневные</div>
                    <div className="sub-filters__item">Шиповки</div>
                    <div className="sub-filters__item">Бутсы</div>

                </div>
            </div>
        </li>
    );
}

export default Type;