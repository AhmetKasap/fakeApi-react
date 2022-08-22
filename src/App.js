import Card from "./components/Card";
import Navbar from "./components/Navbar";
import './main.css'

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    words: [],

    serachQuery :""
    
   }

   async componentDidMount () {
    const url = "http://localhost:3002/words"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({words:data})

   }

  searchWord = (event) => {
    this.setState({serachQuery:event.target.value})
  }
  
  
  

  render() {
    const filterWord = this.state.words.filter(word => {
      return word.name.toLowerCase().indexOf(this.state.serachQuery.toLowerCase()) !== -1
    })

    return (
      <div>

      <div>
        <Navbar searchWordProp = {this.searchWord}></Navbar>
      </div>
      <br></br>
      <br></br>
  
      <div className="row mx-2 my-2 ">
        <Card info = {filterWord}></Card>
  
      </div>
  
     
  
  
     </div> 
    )
  }
}

  



  





