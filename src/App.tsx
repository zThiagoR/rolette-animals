import { useState } from "react";
import { animals, stacks } from "./data";
import "./App.css";

function App() {
    const [result, setResult] = useState({ animal: "", stack: "" });

    const discoverAnimalAndStack = () => {
        const randomAnimalIndex = Math.floor(Math.random() * animals.length);
        const randomStackIndex = Math.floor(Math.random() * stacks.length);
        const chosenAnimal = animals[randomAnimalIndex];
        const chosenStack = stacks[randomStackIndex];
        setResult({ animal: chosenAnimal, stack: chosenStack });
    };

    return (
        <div className="container">
            <main>
                <img
                    src="./assets/bichinhos-da-ti.webp"
                    alt="Bichinhos da TI"
                    width="200"
                    height="200"
                />
                <h1>Qual animal da TI você seria?</h1>
                <button onClick={discoverAnimalAndStack}>
                    {result.animal && result.stack ? "Descobrir outro" : "Descobrir"}
                </button>
                {result.animal && result.stack && (
                    <p className="result">
                        Você seria um(a) <strong>{result.animal} de {result.stack}</strong>!
                    </p>
                )}
            </main>

            <footer>
                Feito com <span className="heart">♥</span> por{" "}
                <a href="https://github.com/zThiagoR">Thiago M</a>.
                <br />
                Venha participar da{" "}
                <a href="https://discord.gg/NeH77NaVrv">
                    Comunidade Bichinhos da TI
                </a>{" "}
                no Discord!
            </footer>
        </div>
    );
}

export default App;
