import React from 'react'

class Library extends React.Component{
  constructor(){
    super()
    this.state={
      lastAction: ''
    }
  }

  readBook = (book) =>{
    this.setNeeds([1,2,3,4,5,6])
    this.setState({lastAction: `You read ${book}`})
  }
  render(){
    return(
      <div>
        <p>At the library!</p>
        <button onClick={()=>{this.readBook('Harry Potter')}}>
          Harry Potter
        </button>
      </div>
    )
  }
}

export default Library
