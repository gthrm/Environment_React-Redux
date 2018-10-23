import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeName, changeSecondName, changeTel, changeOrg } from '../store/actions';

import './App.css';

class App extends Component {
    
    // Пока не нужен
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         secondName: '',
    //         tel: null,
    //         org: ''
    //     };
          
        // console.log("constructor");
    // }

    componentWillReceiveProps(nextProps) {
        // console.log("componentWillReceiveProps()", nextProps);
    }
    componentWillMount(){
        // console.log("componentWillMount()");
    }
    componentDidMount(){
        // console.log("componentDidMount()");
    }
    componentWillUnmount(){
        // console.log("componentWillUnmount()");
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log("shouldComponentUpdate()");
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
        // console.log("componentWillUpdate()");
        // console.log('---','nextProps: ', nextProps, 'nextState: ', nextState);
        
    }
    componentDidUpdate(prevProps, prevState){
        // console.log("componentDidUpdate()");
        // console.log('---','prevProps: ', prevProps, 'prevState: ', prevState);
    }


    // можно использоват для проверки заполненности номера
    onChangeTel(data) {
        if(data.target.value.endsWith('_') === false){
            console.log('заполнен');
        }
    }
    //

    render() {
        console.log('this.props в render(): ', this.props);
        
        return(
            <div className="App-header">
                <div className="App-div-input">
                    <input
                        className="App-input"
                        value={this.props.name}
                        type="text"
                        placeholder="Имя"
                        onChange={(event)=>{
                            this.props.changeName(event.target.value);
                        }}
                    />
                </div>
                <div className="App-div-input">
                    <input
                        className="App-input"
                        value={this.props.secondName}
                        type="text"
                        placeholder="Фамилия"
                        onChange={(event)=>{
                            this.props.changeSecondName(event.target.value);
                        }}
                    />
                </div>
                <div className="App-div-input">
                    <InputMask
                        className="App-input"
                        value={this.props.tel}
                        onChange={(event)=>{
                            this.props.changeTel(event.target.value);
                        }}
                        mask="+7 (999) 999-99-99"
                        placeholder="+7 (___) ___-__-__"
                    />
                </div>
                <div className="App-div-input">
                    <input
                        className="App-input"
                        value={this.props.org}
                        type="text"
                        placeholder="Организация"
                        onChange={(event)=>{
                            this.props.changeOrg(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <h3>
                        {this.props.name + ' ' + this.props.secondName + ' ' + this.props.tel + ' ' + this.props.org }
                    </h3>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state)=> {
    console.log('mapStateToProps - state, который пришел в mapStateToProps: ', state);
    return {
      name: state.name,
      secondName: state.secondName,
      tel: state.tel,
      org: state.org
    }
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      changeName: bindActionCreators(changeName, dispatch),
      changeSecondName: bindActionCreators(changeSecondName, dispatch),
      changeTel: bindActionCreators(changeTel, dispatch),
      changeOrg: bindActionCreators(changeOrg, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);