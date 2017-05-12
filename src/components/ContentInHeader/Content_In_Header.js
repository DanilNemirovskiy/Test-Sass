import React, { Component } from 'react';
import '../../styles/ContentInHeader/ContentInHeader.css';


class Content_In_Header extends Component {
    tryClick(event) {
        alert('Event');
    }
    static defaultProps = {
        icon:'button-icon.png',
    }
    render(){
        return(
            <div className="header-content">
                <div className="text">
                    <h1>ТМ "КОЛЬЧУГА"</h1>
                    <h2>Система защиты моторного отсека автомобиля</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu nisi eu enim<br/> bibendum aliquet. Donec in risus facilisis, dignissim diam id, ornare tellus.<br/> Aliquam.Proin eu nisi eu enim bibendum aliquet.</p>
                </div>
                <div>
                    <button className="button" onClick={this.tryClick}>
                        <img src={'./images/' + this.props.icon} alt="здесь должна быть картинка"/>
                        <p className='sign'>Обратная связь</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default Content_In_Header;