import React,{ Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

import blue from './assets/Blue umbrella.png';
import loader from './assets/loader_icon.svg';
import pink from './assets/Pink umbrella.png';
import upload from './assets/upload_icon.svg';
import yellow from './assets/Yello umbrella.png';
import brand from './assets/brand.jpg';
import './Umbrella.css';
export default class Umbrella extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoader:false,
      img:pink,
      bgColor:'#ff99c2',
      selectedFile:'',
    }
  }
  async getImage(id){
    console.log(id)
    if(id==1){
      await this.setState({img:pink,bgColor:'#ff99c2'});
    }
    else if(id==2){
      await this.setState({img:blue,bgColor:' #99c2ff'});
    }
    else{
      await this.setState({img:yellow,bgColor:'#ffff80'});
    }
  }
  
  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }
  
  uploadHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    axios.post('my-domain.com/file-upload', formData)
  }

  render(){
    return(
      <div className="container" style={{backgroundColor:this.state.bgColor}}>
        
          <React.Fragment>
            <img src={this.state.img} width="20%" height="50%" />
            <img className="container_brand"src={brand} width="5%" height="4%"/>
          </React.Fragment>
        
        <div className="container_content">
          <h1>Custom Umbrella</h1>
          <button className="container_dot" value="1" style={{backgroundColor:'pink'}} onClick={(e)=>this.getImage(e.target.value)}></button>
          <button className="container_dot" value="2" style={{backgroundColor:'blue'}} onClick={(e)=>this.getImage(e.target.value)}></button>
          <button className="container_dot" value="3" style={{backgroundColor:'yellow'}} onClick={(e)=>this.getImage(e.target.value)}></button>
          <h4>Customize your umbrella</h4>
          <span>Upload a logo for an instant preview.</span>
          <h6>.png and .jpg files only. Max file size is 5MB</h6>
          <div>
            <input type="file" onChange={()=>this.fileChangedHandler}/>
            <button onClick={()=>this.uploadHandler}>Upload!</button>
          </div>
        </div>
      </div>


    )
  }
}