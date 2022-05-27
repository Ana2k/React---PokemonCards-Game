    // instructions page file:///home/ana/Desktop/reactjs/react-bootcamp-materials/05-pokedex-project/pokedex-exericse-handout/index.html
    import React,{Component} from 'react';
    import './App.css';
    import Pokecard from './Pokecard'
// #run 1 
    function App() {
    return (
        <div className="App">
        <Pokecard id={4} name="Charmendar" type="fire" exp={62} />
        {/* these are all just props bruh so you have to access them in the pokecard.js react app part */}
        </div>
    );
    }

    export default App;
        {/* we could go from the pokedex to the pokecard */}
      {/* {/* or from the pokecard to the pokedex */ }
    {/* //   we are going to go from the pokecard to pokedex */}
