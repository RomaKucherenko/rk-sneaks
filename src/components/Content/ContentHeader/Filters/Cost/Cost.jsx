import React from 'react';
import {costFilterValueValidator} from "../../../../../utils/costFilterValueValidator";
import {connect} from "react-redux";
import {setCostFilterAction, unsetCostFilterAction} from "../../../../../Redux/filtersReducer";

//++++ Если мы через "крестик" удаляем фильтр,
// то желательно, чтобы в Input значения занулились
//Пока не решил что с Blur делать

const Cost = (props) => {
    //По умолчанию цена самого дешёвого товара на странице
    const [fromCost, setFromCost] = React.useState(500)
    //Самого дорогого
    const [toCost, setToCost] = React.useState(fromCost + 1000)

    const setCostFilter = (fromCostValue, toCostValue, id) => {
        //Возможно и не стоит настолько заморачиваться и дробить действия.
        //Нынешний алгоритм: onKeyDown, который вешается на КАЖДОЕ поле
        // отлавливает Enter, потом вызывает setCostFilter,
        //Потом выясняем на каком именно поле был нажат Enter, после чего уже вызываем
        // для каждого поля свой обработчик
        //А можно сделать так. У каждого поля будет свой обработчик, в котором мы проверим,
        // что действительно был нажат Enter, после чего выполняем логику по проверке.
        //Второй вариант менее громосткий, но у него есть минус. Если нам нужно будет "слушать"
        //другую кнопку, то придётся переписывать код, потому что на onKeyDown висит обработчик,
        //заточенный под действия при нажатии Enter

        if (id === "fromCost") {
            checkFromCostValue()
        } else if (id === "toCost") {
            checkToCostValue()
        }


        function checkFromCostValue() {
            if (fromCostValue > toCostValue) {
                setFromCost(toCostValue - 1000)
            } else {
                props.setCostFilter(fromCost, toCost)
            }
        }

        function checkToCostValue() {
            if (toCostValue < fromCostValue) {
                setToCost(fromCostValue + 1000)
            } else {
                props.setCostFilter(fromCost, toCost)
            }
        }

    }


    const onInputChange = (e) => {
        let tempValue = e.target.value

        if (e.target.id === "fromCost") {
            //costFilterValueValidator boolean func
            costFilterValueValidator(tempValue) && setFromCost(tempValue)
        } else if (e.target.id === "toCost") {
            costFilterValueValidator(tempValue) && setToCost(tempValue)
        }
    }

    const onKeyDown = e => {
        if (e.key === "Enter") {
            setCostFilter(fromCost, toCost, e.target.id)
        }
    }
    const onBlurEventHandler = e => {
        //Пока не решил что с Blur делать
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
                               onKeyDown={onKeyDown}
                               onBlur={onBlurEventHandler}
                        />
                    </div>
                    <div className="sub-filters__item">
                        До
                        <input type="text"
                               id={"toCost"}
                               placeholder="От"
                               value={toCost}
                               onKeyDown={onKeyDown}
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

const mapDispatchToProps = dispatch => {
    return {
        setCostFilter: (to, from) => {
            dispatch(setCostFilterAction(to, from))
        },
        unsetCostFilter: () => {
            dispatch(unsetCostFilterAction())
        }
    }
}

const CostContainer = connect(null, mapDispatchToProps)(Cost)

export default CostContainer;