import './App.css';
import React,{Component} from 'react'
import DataContainer from './components/dataContainer';

// class App extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       isOpen:false
//     }
//     this.handleButtonClick=this.handleButtonClick.bind(this)
//     this.handleOutsideButtonClick=this.handleOutsideButtonClick.bind(this)
//     this.toggleContainer=React.createRef()
//   }

//   componentDidMount(){
//     window.addEventListener('click',this.handleOutsideButtonClick)
//   }

//   componentWillUnmount(){
//     window.removeEventListener('click',this.handleOutsideButtonClick)
//   }

//   handleOutsideButtonClick(event){
//     if(this.state.isOpen && !this.toggleContainer.current.contains(event.target)){
//       this.setState({
//         isOpen:false
//       })
//     }
//   }

//   handleButtonClick(){
//     this.setState(prevState=>({
//       isOpen:!prevState.isOpen
//     }))
//   }

//   render(){
//     return (
//       <div className="App">
        
//           <div ref={this.toggleContainer}>
//             <button onClick={this.handleButtonClick}>Select an option</button><br/>
//             {
//               this.state.isOpen && (
//                 <ul>
//                   <li>Option 1</li>
//                   <li>Option 2</li>
//                   <li>Option 3</li>
//                 </ul>
//               )
//             }
//           </div>
//           <button>Load option</button><br/>
//           <button>Remove option</button><br/>
        
//       </div>
//     );
//   }
// }

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      isOpen:false
    }
    this.timeoutId=null;
    this.handleButtonClick=this.handleButtonClick.bind(this)
    this.handleBlur=this.handleBlur.bind(this)
    this.handleFocus=this.handleFocus.bind(this)
  }

  handleBlur(){
    this.timeoutId=setTimeout(()=>{
      this.setState({
        isOpen:false
      })
    })
  }

  handleButtonClick(){
    this.setState(prevState=>({
      isOpen:!prevState.isOpen
    }))
  }

  handleFocus(){
    clearTimeout(this.timeoutId)
  }

  render(){
    return (
      <div className="App">
        
          <div onBlur={this.handleBlur} onFocus={this.handleFocus}>
            <button onClick={this.handleButtonClick}>Select an option</button><br/>
            {
              this.state.isOpen && (
                <ul>
                  <li tabIndex="0">Option 1</li>
                  <li tabIndex="0">Option 2</li>
                  <li tabIndex="0">Option 3</li>
                </ul>
              )
            }
          </div>
          <button>Load option</button><br/>
          <button>Remove option</button><br/>
          <DataContainer/>                  
      </div>
    );
  }
}

export default App;
