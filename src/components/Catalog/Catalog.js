import React, { Component } from 'react';
import '../../styles/Catalog/Catalog.css';

class Catalog extends Component {
    static defaultProps = {
        marka1:'marka1.png',
        marka2:'marka2.png',
        marka3:'marka3.png',
        marka4:'marka4.png',
        marka5:'marka5.png',
        marka6:'marka6.png'
    }
    render(){
        return(
            <div className="catalog">
                <div className="title2">
                    <h1>Каталог продукции</h1>
                </div>
                <div className="indicator">
                    <hr/><hr className="hr2"/>
                </div>
                <div className="marks">
                    <ul id="lightSlider">
                        <li>
                            <ul className="liInli">
                                {this.props.items.map((item, index) =>
                                    <li key={index}><a href={item.link}><img src={item.img} alt="тут должна быть картинка"/></a></li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <ul className="liInli">
                                {this.props.items.map((item, index) =>
                                    <li key={index}><a href={item.link}><img src={item.img} alt="тут должна быть картинка"/></a></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Catalog;
