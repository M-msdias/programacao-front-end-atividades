"use client"

import { useState } from "react";
import Dado from "./componentes/Dado";

export default function Home() {
  const [numeroSorteado, setNumeroSorteado] = useState(0);

  function sortearNumero() {
    const novoNumero = Math.floor(Math.random() * 6) + 1;
    setNumeroSorteado(novoNumero);
  }

  return (
    <div className="">
      <main>
        <div>
          <Dado numero={numeroSorteado} />
          <button onClick={sortearNumero}>Sortear número</button>
          {numeroSorteado === 0 && <p>Pressione o botão para sortear um número</p>}
          {numeroSorteado !== 0 && <p>O número sorteado foi {numeroSorteado}</p>}
        </div>
      </main>
    </div>
  );
}
