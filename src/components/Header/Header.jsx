import React from "react"
import Favourites from "./Favourites/Favourites";
import Cart from "./Cart/Cart";


const Header = (props) => {
    return <div className="container header">

        <div className="row header__row">
            <div className="col-xl-9 col-lg-9 col-md-8 col-sm-6 col-4
                            header__logo">
                <img src="./img/my-logo.png"/>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-8
                            header__buttons">

                {/*div для вертикального центрирования*/}
                <div className="buttons-centring">
                    <Favourites/>
                    <Cart/>
                </div>

            </div>

        </div>
    </div>
}

export default Header