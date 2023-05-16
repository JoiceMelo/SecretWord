import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      {/* quando o usuário clicar tem que ser suficiente para mandar para o terceiro componete */}
      <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  )
}

export default Game