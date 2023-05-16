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

  // criação de 3 states, categoria, palavra escolhida e divisão em letras 
  const [pickedWord, setPickedWord] = useState(''); //plavra escolhida
  const [pickedCategory, setPickedCategory] = useState(''); //categoria escolhida
  const [letters, setLetters] = useState(''); //letras

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    //categories vou acessar o array de categorias e escolho um indice aleatorio vezes o numero de chaves que tenho em um determinado objeto, porem preciso do numero inteiro -floor
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pick a random word - acessar a array principla de palavras, dentro dele a categoria e dai ter acesso a todas as palavras e acessar aleatoriamente
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category };
  };

  /*STARTS THE SECRET WORD GAME*/
  // função p/ o usuario clicar no botao do compon principal e começar o jogo
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();

    // create array of letters
    //pegar as letras da palavra - separando a palabra em letras
    let wordLetters = word.split('');
    
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());
    // pego a word letters e mapeio para pegar cada letra e retornar lowercase para indepm da palavra ter ela normalizada
    
    // wordLetters = wordLetters.map((1) => 1.toLowerCase());


    console.log(word, category);
    console.log(wordLetters);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);


    
    // muda o stage do jogo -> passa a função pro componente no stage start e faz ter acesso como prop no starScreen a função
    //vai fazer tbm o resgate de letras
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
