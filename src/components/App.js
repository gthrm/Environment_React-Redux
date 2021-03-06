import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import { connect } from 'react-redux';

import dispatch from '../store/dispatch.js';

import './App.css';



class App extends Component {
    
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps()", nextProps);
    }
    componentWillMount(){
        console.log("componentWillMount()");
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate()");
        return true;
        //вызывается каждый раз при обновлении объекта props или state.
        //В качестве параметра передаются новый объект props и state.
        //Эта функция должна возвращать true (надо делать обновление)
        //или false (игнорировать обновление).
        //По умолчанию возвращается true. Но если функция будет возвращать false,
        //то тем самым мы отключим обновление компонента, а последующие функции
        //не будут срабатывать.
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate()");
        // console.log('---','nextProps: ', nextProps, 'nextState: ', nextState);
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate()");
        // console.log('---','prevProps: ', prevProps, 'prevState: ', prevState);
    }


    // можно использоват для проверки заполненности номера
    // onChangeTel(data) {
    //     if(data.target.value.endsWith('_') === false){
    //         console.log('заполнен');
    //     }
    // }
    //

    handleClickButton(){
        console.log(this.props);
        // if (this.props.name !== '' && this.props.secondName !== '' && this.props.email !== '' && this.props.tel !== '' && this.props.org !== '') {
        //     const request = new XMLHttpRequest();
        //     const body = JSON.stringify({
        //         name: this.props.name
        //     });
        //     this.props.getInitialState();
        //     request.open("POST", `${apiPrefix}/user`, true);
        //     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        //     request.send(body);
        // } else {
        //     alert('Пожалуйста заполните все поля!');
        // }
        this.props.getInitialState();
    }

    render() {
        console.log('this.props в render(): ', this.props);
        
        return(
            <div className="app-header">
                <div className="app-div-input">
                    <input
                        className="app-input"
                        value={this.props.name}
                        type="text"
                        placeholder="Имя"
                        onChange={(event)=>{
                            this.props.changeName(event.target.value);
                        }}
                    />
                </div>
                
                {/* <div className="App-div-input">
                    <InputMask
                        className="App-input"
                        value={this.props.tel}
                        onChange={(event)=>{
                            this.props.changeTel(event.target.value);
                        }}
                        mask="+7 (999) 999-99-99"
                        placeholder="+7 (___) ___-__-__"
                    />
                </div> */}
                <div>
                    <button className="App-button" onClick={()=>this.handleClickButton()}>Ok</button>
                </div>
                <h1 className="app-text" >{this.props.name}</h1>
            </div>
        );
    };
};

export default connect(dispatch.mapStateToProps, dispatch.mapDispatchToProps)(App);