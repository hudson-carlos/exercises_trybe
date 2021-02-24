import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <fieldset>
          <label for="nome">Nome</label>
          <input className="name" type="text" name="nome"></input>
          <input type="email" name="email"></input>
        </fieldset>
      </div>
    );
  }
}

export default App;
