import React from 'react'
import axios from 'axios';
import { render } from 'react-dom';
import Nations from './Nations';



class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            nations: [],
            loading: true,
            nationId: ''
        }
        
        this.createCharacter = this.createCharacter.bind(this)
    }
    async componentDidMount(){
        this.setState({
            nations: (await axios.get('/api/nations')).data,
            loading: false
        });
        window.addEventListener('hashchange', () => {
            this.setState({ nationId: window.location.hash.slice(1)})
        });
        this.setState({ nationId: window.location.hash.slice(1)})
    }
    async createCharacter(){
        console.log(req.body);
        const character = (await axios.post('/api/characters')).data
        console.log(character);
    }

    render() {
        const { nations, loading, nationId } = this.state;
        console.log(nationId);
        if(loading){
            return '...loading';
        }
        return (
            <Nations createCharacter={this.createCharacter} nations={nations} />
            )
    }
}

export default Main;