import React from 'react'
import axios from 'axios';
import { render } from 'react-dom';
import Nations from './Nations';
import CreateCharacter from './CreateCharacterForm'


class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            nations: [],
            loading: true,
            nationId: '' 
        }
    
        this.handleDelete = this.handleDelete.bind(this)
     
     
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
    async handleDelete(id){
        console.log(id);
    }

    render() {
        const { nations, loading, nationId, newCharName } = this.state;
        console.log(nationId);
        if(loading){
            return '...loading';
        }
        return (<div>
            <CreateCharacter />
            <Nations handleDelete={this.handleDelete} nations={nations} />
            </div>
            )
    }
}

export default Main;