import React from 'react';
import {connect} from "react-redux";
import {setGenderFilterAction, unsetGenderFilterAction} from "../../../Redux/filtersReducer";
import classNames from "classnames";


function GenderFilter({genderFilter, buttons, setGenderFilter, unsetGenderFilter}) {
    let [activeGenderIndex, setActiveGenderIndex] = React.useState(0)

    React.useEffect(() => {
        //Проверяем явлется ли Все выбранным пунктом. Обязательным условием
        // для корректной работы эффекта является activeGenderIndex !== 0.
        // В его отсутствии при первом запуске genderFilter === null -> true,
        // что означало вызов эффекта произойдет перед "смертью" компоненты.
        // Допустим я нажимал на Мужские, и после клика сначала activeIndex = 1,
        // а потом применялся setActiveGenderIndex(0). Хотя в state genderFilter:Мужские
        setActiveGenderIndex(0)
    },[genderFilter === null && activeGenderIndex !== 0])

    const onSetFilterClick = (gender, index) => {
        if (gender === "Все") {
            //Сбрасываем значение фильтра
            unsetGenderFilter()
        } else {
            setGenderFilter(gender)
            setActiveGenderIndex(index)
        }
    }

    const buttonComponents = buttons.map((gender, index) =>
        <button className={classNames({
            "active": index === activeGenderIndex
        })}
                onClick={() => onSetFilterClick(gender, index)}
                key={`${index}__${gender}`}>
            {gender}
        </button>)

    return (
        <div className="content-header__gender-buttons col-xl-9 col-lg-9 col-md-8 col-sm-7 col-8">
            {buttonComponents}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        genderFilter: state.filters.gender
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setGenderFilter: (gender) => {
            dispatch(setGenderFilterAction(gender))
        },
        unsetGenderFilter: () => {
            dispatch(unsetGenderFilterAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderFilter);