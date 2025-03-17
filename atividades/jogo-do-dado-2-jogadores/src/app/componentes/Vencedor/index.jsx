export default function Vencedor({ pontosJogadorUm, pontosJogadorDois }) {
    const calcularQuemVenceu = (valorJogadorUm, valorJogadorDois) => {
      if (valorJogadorUm > valorJogadorDois) {
        return "Jogador 1 ganhou!";
      } else if (valorJogadorUm < valorJogadorDois) {
        return "Jogador 2 ganhou!";
      }
      return "Empate";
    };
  
    const vencedor = calcularQuemVenceu(pontosJogadorUm, pontosJogadorDois);
  
    return (
      <>
        <h1 className="text-3xl font-bold italic p-8">{vencedor}</h1>
      </>
    );
  }