export default function Dado(props) {
    if (props.numero === 1) {
        return <img src="lado-1.svg" alt="Lado de face 1 do dado" />;
    } else if (props.numero === 2) {
        return <img src="lado-2.svg" alt="Lado de face 2 do dado" />;
    } else if (props.numero === 3) {
        return <img src="lado-3.svg" alt="Lado de face 3 do dado" />;
    } else if (props.numero === 4) {
        return <img src="lado-4.svg" alt="Lado de face 4 do dado" />;
    }
    else if (props.numero === 5) {
        return <img src="lado-5.svg" alt="Lado de face 5 do dado" />;
    }
    else if (props.numero === 6) {
        return <img src="lado-6.svg" alt="Lado de face 6 do dado" />;
    }
}