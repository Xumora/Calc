import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default class Mode extends Component {
    changeMode = () => {

    }

    render() {
        return (
            <div className="w-100 text-end">
                <button className="btn fs-5 text-white p-0" onClick={this.changeMode}>
                    <FontAwesomeIcon icon={faSun} />
                </button>
            </div>
        )
    }
}
