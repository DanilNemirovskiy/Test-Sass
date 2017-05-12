import React, { Component } from 'react';
import '../../styles/Navigation/Navigation.css';


class Navigation extends Component {
    static defaultProps = {
        logo:'logo.png',
}
    render() {
        return(
            <div className='navigation-wrapper'>
                <div className="logo">
                    <a href="#"><img src={'./images/' + this.props.logo} alt="здесь должна быть картинка"/></a>
                </div>
                <div className="navigation">
                    <ul>
                        {this.props.items.map((item, index) =>
                            <li key={index}><a href={item.link}>{item.label}</a></li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;