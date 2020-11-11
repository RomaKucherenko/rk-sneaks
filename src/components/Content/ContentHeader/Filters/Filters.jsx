import React from 'react';

import Cost from "./Cost/Cost";
import Type from "./Type/Type";
import Size from "./Size/Size";
import BrandContainer from "./Brand/BrandContainer";

function Filters({setBrandFilter, unsetBrandFilter}) {
    return (
        <div className="row content-header__filters">
            <div className="col filters">
                <ul className="filters__list">
                    <BrandContainer/>
                    <Cost/>
                    <Type/>
                    <Size/>
                </ul>
            </div>
        </div>
    );
}

export default Filters;
