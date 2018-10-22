import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import './App.css';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            secondName: '',
            tel: null,
            ogr: ''
        };
          
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
        console.log('---','nextProps: ', nextProps, 'nextState: ', nextState);
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate()");
        console.log('---','prevProps: ', prevProps, 'prevState: ', prevState);
    }

    onChangeTel(data) {
        console.log("onChange", data.target.value);
        this.setState({tel: data.target.value});
        
        if(data.target.value.endsWith('_') === false){
            console.log('лолка');
        }
    }

    render() {
        return(
            <div className="App-header">
                <div className="App-div-input"><input className="App-input" type="text" placeholder="Имя"/></div>
                <div className="App-div-input"><input className="App-input" type="text" placeholder="Фамилия"/></div>
                <div className="App-div-input"><InputMask className="App-input" onChange={(event)=>this.onChangeTel(event)} mask="+7 (999) 999-99-99" placeholder="+7 (___) ___-__-__"/></div>
                <div className="App-div-input"><input className="App-input" type="text" placeholder="Организация"/></div>
                <div></div>
            </div>
        );
    };
};

export default App;