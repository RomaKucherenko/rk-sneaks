import React from "react";
import GenderFilter from "./GenderFilter";
import FiltersContainer from "./Filters/FiltersContainer";

const ContentHeader = () => {
    return <div className="container content-header">
        <div className="row content-header__top">

            <GenderFilter
                buttons={["Все", "Мужские", "Женские"]}/>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-4">
                <input type="text" placeholder="Поиск"/>
            </div>

        </div>

            <FiltersContainer/>

    </div>
}

export default ContentHeader