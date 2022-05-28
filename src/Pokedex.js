import React,{Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    
    render(){
        let title;
        if(this.props.isWinner){
            title = <h1 className = "Pokedex-Winner">WINNING HAND</h1>
        }else{
            title = <h1 className = "Pokedex-Loser">LOSING HAND</h1> 
        }
        return (
        <div className="Pokedex">
            <h1>Pokedex!</h1>
            <h3>Total Experience: {this.props.exp}</h3> 
            {/* <p className = {this.props.isWinner ? "Pokedex-Winner":"Pokedex-Loser"}>{this.props.isWinner ? 'WINNING HAND' : 'LOSING HAND'}</p> */}
            {title}
            <div className='Pokedex-cards'>
            {this.props.pokemon.map( (p)=>(
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience}/>
            ))}
            </div>
            
        </div>
    );
  }
}

export default Pokedex;
