import "./GameOver.css"

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      {/* quando o usuário clicar tem que ser suficiente para voltar para o primeiro componente */}
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver