import React, { Component } from 'react';
import '../../styles/Contacts/Contacts.css';


class Contacts extends Component {
    static defaultProps = {
        phone:'phone.png',
        email:'email.png',
    }
    render() {
        return(
            <div className="contacts">
                <div className="phone">
                    <img src={'./images/' + this.props.phone} alt="здесь должна быть картинка"/>
                    <span><small>(044)</small> <b>536-26-43</b>, <small>(098)</small> <b>152-16-03</b></span>
                </div>
                <div className="email">
                    <img src={'./images/' + this.props.email} alt="здесь должна быть картинка"/>
                    {this.props.items.map((item, index) =>
                        <a href={item.link} key={index}>{item.label}</a>
                    )}
                </div>
            </div>
        );
    }
}
export default Contacts;