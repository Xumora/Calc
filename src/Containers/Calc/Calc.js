import { faSquareRootAlt, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Mode from '../../Components/Mode/Mode';
import './Calc.css';





export default class Calc extends Component {
    constructor(props) {
        super(props);

        this.state = { display: "0", minidisplay: "" }
    }


    buttons = [
        {
            valueProp: "C", classProp: "btn btn-secondary text-white w-100",
            click: () => {
                this.setState((state) => {
                    return { display: "0" }
                })
            }
        },
        { valueProp: "+/-", classProp: "btn btn-secondary text-white w-100", click: () => { } },
        { valueProp: "%", classProp: "btn btn-secondary text-white w-100", click: () => { } },
        {
            valueProp: <FontAwesomeIcon icon={faUndo} />, classProp: "btn btn-secondary text-white w-100",
            click: () => {
                this.setState((state) => {
                    return { display: state.display.slice(0, state.display.length - 1) || "0" }
                })
            }
        },
        {
            valueProp: <FontAwesomeIcon icon={faSquareRootAlt} />, classProp: "btn btn-secondary text-white w-100",
            click: () => {
                this.setState((state) => {
                    return { display: Math.sqrt(state.display, 2) }
                })
            }
        },
        {
            valueProp: <p className="m-0">x <sup>2</sup></p>, classProp: "btn btn-secondary text-white w-100",
            click: () => {
                this.setState((state) => {
                    return { display: Math.pow(state.display, 2) }
                })
            }
        },
        {
            valueProp: "1/x", classProp: "btn btn-secondary text-white w-100",
            click: () => {
                this.setState((state) => {
                    return { display: 1 / state.display }
                })
            }
        },
        { valueProp: "/", classProp: "btn btn-secondary text-white w-100", click: () => { this.addText("/") } },
        { valueProp: "7", classProp: "btn text-white w-100", click: () => { this.addText(7) } },
        { valueProp: "8", classProp: "btn text-white w-100", click: () => { this.addText(8) } },
        { valueProp: "9", classProp: "btn text-white w-100", click: () => { this.addText(9) } },
        { valueProp: "*", classProp: "btn btn-secondary text-white w-100", click: () => { this.addText("*") } },
        { valueProp: "4", classProp: "btn text-white w-100", click: () => { this.addText(4) } },
        { valueProp: "5", classProp: "btn text-white w-100", click: () => { this.addText(5) } },
        { valueProp: "6", classProp: "btn text-white w-100", click: () => { this.addText(6) } },
        { valueProp: "-", classProp: "btn btn-secondary text-white w-100", click: () => { this.addText("-") } },
        { valueProp: "1", classProp: "btn text-white w-100", click: () => { this.addText(1) } },
        { valueProp: "2", classProp: "btn text-white w-100", click: () => { this.addText(2) } },
        { valueProp: "3", classProp: "btn text-white w-100", click: () => { this.addText(3) } },
        { valueProp: "+", classProp: "btn btn-secondary text-white w-100", click: () => { this.addText("+") } },
        { valueProp: "0", classProp: "btn text-white w-100", click: () => { this.addText(0) } },
        { valueProp: ".", classProp: "btn text-white w-100", click: () => { this.addText(".") } },
        {
            valueProp: "=", classProp: "btn btn-secondary text-white w-100",
            click: () => {
                this.setState((state) => {
                    return { display: eval(state.display) }
                })
            }
        },
    ];

    addText = (text) => {
        this.setState((state) => {
            if (text == "." || text == "+" || text == "-" || text == "/" || text == "*") return { display: state.display + String(text) }
            return { display: (state.display != "0" && state.display || "") + String(text) }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center py-5">
                    <div className="col-12 col-md-8 col-lg-4 pt-2">
                        <div className="calc bg-dark text-white p-3 shadow-lg">
                            <Mode />
                            <div className="w-100 sum d-flex align-items-end text-end">
                                <p className="fs-4 w-100 m-0">{this.state.display}</p>
                            </div>
                            <div className="w-100">
                                <div className="row">
                                    {
                                        this.buttons.map((value, index) => {
                                            if (index == 20) {
                                                return <div className="col-6 mt-3">
                                                    <button className={value.classProp} onClick={value.click}>{value.valueProp}</button>
                                                </div>
                                            }
                                            return <div className="col-3 mt-3">
                                                <button className={value.classProp} onClick={value.click}>{value.valueProp}</button>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
