"use client"

import { useState } from "react";
import Dado from "./componentes/Dado/";
import Vencedor from "./componentes/Vencedor";

export default function Home() {
  const [estado, setEstado] = useState({
    dadoUm: 0,
    dadoDois: 0,
    rodada: 1,
    botaoDadoUm: true,
    pontuacaoJogadorUm: 0,
    pontuacaoJogadorDois: 0,
  });

  const atualizarPontuacao = (valorJogadorUm, valorJogadorDois) => {
    setEstado(prev => ({
      ...prev,
      pontuacaoJogadorUm: prev.pontuacaoJogadorUm + (valorJogadorUm > valorJogadorDois ? 1 : 0),
      pontuacaoJogadorDois: prev.pontuacaoJogadorDois + (valorJogadorUm < valorJogadorDois ? 1 : 0),
    }));
  };

  const gerarDadoUm = () => {
    let novoValor = Math.floor(Math.random() * 6) + 1;

    setEstado(prev => ({
      ...prev,
      dadoUm: novoValor,
      botaoDadoUm: !prev.botaoDadoUm,
    }));
  }

  const gerarDadoDois = () => {
    let novoValor = Math.floor(Math.random() * 6) + 1;

    setEstado(prev => ({
      ...prev,
      dadoDois: novoValor,
      botaoDadoUm: !prev.botaoDadoUm,
      rodada: prev.rodada + 1,
    }));
    atualizarPontuacao(estado.dadoUm, novoValor);
  }

  const reiniciarJogo = () => {
    setEstado({
      dadoUm: 0,
      dadoDois: 0,
      rodada: 1,
      botaoDadoUm: true,
      pontuacaoJogadorUm: 0,
      pontuacaoJogadorDois: 0,
    });
  }

  let valorRodada = estado.rodada === 6 ? 5 : estado.rodada; 

  return (
    <div className="text-black">
      <main className="flex flex-col items-center  gap-12 h-screen w-screen">
        <header>
          <h2 className="text-center text-3xl p-4 font-bold">{valorRodada}° Rodada</h2>
        </header>
        <div className="flex gap-52">
          <div className="flex flex-col gap-12">
            <Dado numero={estado.dadoUm} />
            <button
            onClick={gerarDadoUm}
            className={`${estado.botaoDadoUm === true && estado.rodada !== 6 ? "bg-red-300 hover:bg-red-400" :"bg-gray-300 " } p-4 w-32 rounded-sm text-lg m-auto font-bold`}
            disabled={`${estado.botaoDadoUm === true && estado.rodada !== 6  ? "" : "disabled"}`}
            >Girar dado</button>
          </div>
          <div className="flex flex-col gap-12">
            <Dado numero={estado.dadoDois} />
            <button
              onClick={gerarDadoDois}
              className={`${estado.botaoDadoUm === false ? "bg-red-300 hover:bg-red-400" :"bg-gray-300 " } p-4 w-32 rounded-sm text-lg m-auto font-bold`}
              disabled={`${estado.botaoDadoUm === false ? "" : "disabled"}`}
            >Girar dado</button>
          </div>
        </div>
        <p className="m-4 font-bold text-xl border-2 p-4">Placar atual: {estado.pontuacaoJogadorUm} x {estado.pontuacaoJogadorDois}</p>
        
        {estado.rodada === 6 && (
          <>
            <Vencedor 
              pontosJogadorUm={estado.pontuacaoJogadorUm}
              pontosJogadorDois={estado.pontuacaoJogadorDois}
            />
            <button
              onClick={reiniciarJogo}
              className="bg-red-400 p-4 w-56 rounded-sm text-lg hover:bg-red-300 m-auto font-bold mt-4"
            >Reiniciar Jogo</button>
          </>
        )}
      </main>
    </div>
  );
}