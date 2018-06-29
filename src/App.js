import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 3,
      html: true,
      text: ''
    }
  }

  componentWillMount(){
    this.getText();
  }
  
  getText(){
    axios.get('http://www.randomtext.me/api/?paras='+this.state.paras+'&html='+this.state.html)
    .then((response)=>{
      this.setState({text: response.data.text}, function(){
        console.log(this.state);
      });
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  showHtml(x){
    this.setState({html: x},this.getText);
  }
  changeParas(number){
    this.setState({paras: number},this.getText);
  }


  render() {
    return (
      <div className="App container">
        <h1 className="text-center"> Text Generator</h1>
        <hr />
        <form className="form-inline">
        <div className="form-group">
          <label>Paragraphs No. </label>
          <Text value={this.state.paras} onChange= {this.changeParas.bind(this)}/>
          </div>

          <div className="form-group">
          <label>Add HTML: </label>
          <Select value={this.state.html} onChange= {this.showHtml.bind(this)}/>
          </div>
 
        </form>
        <br/> <br/>
        <Output value={this.state.text}/>
        <h1>text missing</h1>
      </div>
    );
  }
}

export default App;
