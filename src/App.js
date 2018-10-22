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
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentWillUpdate(){
        console.log("componentWillUpdate()");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate()");
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