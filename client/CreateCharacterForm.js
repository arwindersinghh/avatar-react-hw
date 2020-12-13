import React from 'react';
import axios from 'axios';


class createCharacter extends React.Component{
constructor(){
    super();
    this.state = {
      name: '',
      element: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(){
    const { name, element } = this.state;
    const newCharacter = (await axios.post('/api/characters', { name, element })).data
  }

  render(){
    const { name, element } = this.state;
    return (
      <form>
        <label>
        Type a name...
        <input value={ name } onChange={ ev => this.setState({ name: ev.target.value})}/>
        </label>
        <label>
          Type an element...
          <input value={ element } onChange={ ev => this.setState({ element: ev.target.value })}/>
        </label>
        <button onClick={this.handleSubmit}>Create Character</button>
      </form>
    );
  }
}

export default createCharacter