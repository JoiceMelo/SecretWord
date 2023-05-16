// CSS
import './App.css';

// REACT
import { useCallback, useEffect, useState } from 'react';

// DATA
import { wordsList } from "./data/words";

// COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

/*o jogo teŕa 3 estagios, então cria-se os três - array de objetos*/
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {
  /* coisas criadas para o useState (controle progresso e pontuação do jogo), 0.name é o start*/
  const [gameStage, setGameStage] = useState(stages[0].name);
  // Initial no state de words
  const [words] = useState(wordsList);

  // criação de 3 states, ter uma palavra que vai ser escolhida
  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  //

  /*STARTS THE SECRET WORD GAME*/
  // função p/ o usuario clicar no botao do compon principal e começar o jogo
  const startGame = () => {
    // muda o stage do jogo -> passa a função pro componente no stage start e faz ter acesso como prop no starScreen a função
    setGameStage(stages[1].name);
  };

  /* PROCESS THE LETTER INPUT */
  // função para processar a letra que o usuario digita no input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  /* RESTARTS THE GAME */
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {/* <h2>Secret Word</h2> TROCO O HTML PELO COMPONENTE DA TELA - só vai aparecer quando o gameStage for start*/}
      {/* <StartScreen /> */}
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
