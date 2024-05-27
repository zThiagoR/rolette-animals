import { useState, useRef } from "react";
import { animals, stacks } from "./data";
import "./App.css";

function App() {
    const [result, setResult] = useState({ animal: "", stack: "" });
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState("");
    const [selectedStack, setSelectedStack] = useState("");
    const timerRef = useRef<number | null>(null);

    const discoverAnimalAndStack = () => {
        const randomAnimalIndex = Math.floor(Math.random() * animals.length);
        const randomStackIndex = Math.floor(Math.random() * stacks.length);
        const chosenAnimal = animals[randomAnimalIndex];
        const chosenStack = stacks[randomStackIndex];
        setResult({ animal: chosenAnimal, stack: chosenStack });
    };

    const handlePressStart = () => {
        timerRef.current = window.setTimeout(() => {
            setDropdownVisible(true);
        }, 2000);
    };

    const handlePressEnd = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (!isDropdownVisible) {
            discoverAnimalAndStack();
        }
    };

    const handleMouseLeave = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const handleDropdownChange = () => {
        setResult({ animal: selectedAnimal, stack: selectedStack });
        setDropdownVisible(false);
    };

    return (
        <div className="container">
            <main>
                <img
                    src="./assets/bichinhosdati.webp"
                    alt="Bichinhos da TI"
                    width="200"
                    height="200"
                />
                <h1>Qual animal da TI você seria?</h1>
                <button
                    onMouseDown={handlePressStart}
                    onMouseUp={handlePressEnd}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handlePressStart}
                    onTouchEnd={handlePressEnd}
                    onTouchCancel={handleMouseLeave}
                >
                    {result.animal && result.stack ? "Descobrir outro" : "Descobrir"}
                </button>

                {result.animal && result.stack && !isDropdownVisible && (
                    <p className="result">
                        Você seria um(a) <strong>{result.animal} de {result.stack}</strong>!
                    </p>
                )}

                {isDropdownVisible && (
                    <div className="dropdown">
                        <select
                            value={selectedAnimal}
                            onChange={(e) => setSelectedAnimal(e.target.value)}
                        >
                            <option value="">Selecione um animal</option>
                            {animals.map((animal) => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedStack}
                            onChange={(e) => setSelectedStack(e.target.value)}
                        >
                            <option value="">Selecione uma stack</option>
                            {stacks.map((stack) => (
                                <option key={stack} value={stack}>
                                    {stack}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleDropdownChange}>Confirmar</button>
                    </div>
                )}
            </main>

            <footer>
                Feito com <span className="heart">♥</span> por{" "}
                <a href="https://github.com/zThiagoR">Thiago M</a>.
                <br />
                Venha participar da{" "}
                <a href="https://discord.gg/NmmP4EcdRd">
                    Comunidade Bichinhos da TI
                </a>{" "}
                no Discord!
            </footer>
        </div>
    );
}

export default App;
