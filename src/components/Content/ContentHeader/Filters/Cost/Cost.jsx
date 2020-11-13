import React from 'react';
import {costFilterValueValidator} from "../../../../../utils/costFilterValueValidator";

function Cost(props) {
    const [fromCost, setFromCost] = React.useState(500)
    const [toCost, setToCost] = React.useState(fromCost + 1000)

    const onInputChange = (e) => {
        //Проверка на цифры, проверяем последнее значение
        let tempValue = e.target.value

        if (e.target.id === "fromCost") {
            //costFilterValueValidator boolean func
            costFilterValueValidator(tempValue) && setFromCost(tempValue)
        } else if (e.target.id === "toCost") {
            costFilterValueValidator(tempValue) && setToCost(tempValue)
        }
    }

    return (
        <li>
            <div className="filters__item">Цена
                <div className="sub-filters__list cost-list">

                    <div className="sub-filters__item">
                        От
                        <input type="text"
                               id={"fromCost"}
                               placeholder="От"
                               value={fromCost}
                               onChange={onInputChange}
                        />
                    </div>
                    <div className="sub-filters__item">
                        До
                        <input type="text"
                               id={"toCost"}
                               placeholder="От"
                               value={toCost}
                               onChange={onInputChange}
                        />
                    </div>
                    {/*<div className="sub-filters__item">*/}
                    {/*    <input type="range" min="0" max="100" step="1"/>*/}
                    {/*</div>*/}

                </div>
            </div>
        </li>
    );
}

export default Cost;