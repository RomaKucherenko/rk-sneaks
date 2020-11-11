import React from "react"



const ContentItem = () => {
    return <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12
                            items-list__item">

        <img src="./img/item-1.jpg"/>
        <div className="item-info">

            <span>Nike React.js</span>
            <div className="item-info__colors">
                <img src="./img/item-1.jpg"/>
                <img src="./img/item-1.jpg"/>
                <img src="./img/item-1.jpg"/>
            </div>
            <span className="item-info__lower-price">4&nbsp;999&nbsp;₽</span>
            <span className="item-info__old-price">6&nbsp;999&nbsp;₽</span>

            <button>Add to cart</button>
        </div>
    </div>
}

export default ContentItem