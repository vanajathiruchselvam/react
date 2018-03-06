import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (<h1>Come and Order..</h1>);
    }
}

export default Home
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Tasty Cakes</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <img src='http://www.cakestoindore.com/379/chocolate-truffle-cake.jpg'/>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;
