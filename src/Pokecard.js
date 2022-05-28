import React,{Component} from 'react';
import './Pokecard.css'
// API CALLING 

// 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKEMON_IMAGE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree  = (number) =>(number <=999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component{
    render(){
        const ID = padToThree(this.props.id);
        let imgSrc = `${POKEMON_IMAGE_API}${ID}.png`;
        return(
            <div className = "Pokecard">
                <h1 className = "Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div  className = "Pokecard-data">Type: {this.props.type}</div>
                <div className = "Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        ) 
    }
}
export default Pokecard;