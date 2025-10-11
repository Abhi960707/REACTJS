import React, { Component } from 'react'

export class ClassComponent extends Component {
  constructor(){
    super();
    this.name='Abhijeet';
    this.age='21';
  }


  render() {
    return (
      <h1 className='text-4xl'>
        Name={this.name} <br />
        Age={this.age}
      </h1>
  
    )
  }
}

export default ClassComponent