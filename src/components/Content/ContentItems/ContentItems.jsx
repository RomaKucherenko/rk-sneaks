import React from "react"

import ContentItem from "./ContentItem/ContentItem";
import CurrentFiltersContainer from "./ContentFilters/CurrentFiltersContainer";

const ContentItems = () => {
    return <div className="container content-items">

        <div className="row">

            <CurrentFiltersContainer />

            <div className="content-items__sort
            col-lg-4 col-md-5 col-sm-4 col-5">
                <ul className="filters__list">
                    <li>

                        <div className="filters__item">Сортировать по:
                            <div className="sub-filters__list">

                                <div className="sub-filters__item">Популярности</div>
                                <div className="sub-filters__item">Рейтингу</div>
                                <div className="sub-filters__item">Цене</div>
                                <div className="sub-filters__item">Скидке</div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <div className="row items-list">

            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>
            <ContentItem/>

        </div>

        <div className="show-more">
            <button className="show-more__button">Показать ещё</button>
        </div>
    </div>
}

export default ContentItems