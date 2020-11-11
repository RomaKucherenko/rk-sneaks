import React from 'react';

function Cost(props) {
    return (
        <li>
            <div className="filters__item">Цена
                <div className="sub-filters__list cost-list">

                    <div className="sub-filters__item">
                        От
                        <input type="text" placeholder="От"/>
                    </div>
                    <div className="sub-filters__item">
                        До<input type="text" placeholder="До"/>
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