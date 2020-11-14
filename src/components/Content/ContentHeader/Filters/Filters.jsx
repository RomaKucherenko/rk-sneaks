import React from 'react';

import Cost from "./Cost/Cost";
import Size from "./Size/Size";
import BrandContainer from "./Brand/BrandContainer";
import TypeContainer from "./Type/TypeContainer";

const Filters = (props) => {
    return (
        <div className="row content-header__filters">
            <div className="col filters">
                <ul className="filters__list">
                    <BrandContainer/>
                    <Cost/>
                    <TypeContainer/>
                    <Size/>
                </ul>
            </div>
        </div>
    );
}

export default Filters;
