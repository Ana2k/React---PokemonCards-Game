import React,{Component} from 'react';
// API CALLING 
//we will put up nicer images later.


const POKEMON_IMAGE_API =
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component{
    render(){
        let imgSrc = `${POKEMON_IMAGE_API}${this.props.id}.png`;
        return(
            <div className = "Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name} />
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        ) 
    }
}
export default Pokecard;