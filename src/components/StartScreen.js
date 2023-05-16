/* componente responsável pela tela inicial */
import './StartScreen.css';

const StartScreen = ({startGame}) => {
  return (
    /* className para o css */    
    <div className='start'> 
       <h1>Secret Word</h1>
       <p>Clique no botão abaixo para jogar</p> 
       {/* quando o usuário clicar tem que ser suficiente para mandar para o segundo componete */}
       <button onClick={startGame}>Começar a jogar</button>
    </div>
  )
}

export default StartScreen