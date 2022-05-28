    // instructions page file:///home/ana/Desktop/reactjs/react-bootcamp-materials/05-pokedex-project/pokedex-exericse-handout/index.html
    // fancier images link https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png
    import React,{Component} from 'react';
    import './App.css';
    import Pokegame from './Pokegame';
    
    function App() {
    return (
        <div className="App">
        <Pokegame />
        </div>
    );
    }

    export default App;
        {/* we could go from the pokedex to the pokecard */}
      {/* {/* or from the pokecard to the pokedex */ }
    {/* //   we are going to go from the pokecard to pokedex */}
