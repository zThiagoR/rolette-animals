import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const animals = [
    'Pato',
    'Leão',
    'Gato',
    'Cachorro',
    'Tartaruga',
    'Girafa',
    'Elefante',
    'Golfinho',
    'Tubarão',
    'Galinha',
    'Pinguim',
    'Coelho',
    'Águia',
    'Urso',
    'Camaleão',
    'Cisne',
    'Coruja',
    'Falcão',
    'Formiga',
    'Gorila',
    'Hipopótamo',
    'Iguana',
    'Jaguar',
    'Koala',
    'Lince',
    'Macaco',
    'Naja',
    'Papagaio',
    'Raposa',
    'Sapo',
    'Vaca',
    'Zebra'
  ];

  const stacks = [
    'FullStack',
    'DevOps',
    'Front-End',
    'Back-End',
    'QA',
    'Mobile',
    'UX/UI',
    'Data Science',
    'Machine Learning',
    'Business Intelligence',
    'Marketing Digital',
    'Growth Hacking',
    'Sales Engineer',
    'Product Management',
    'Cloud Computing',
    'Cybersecurity',
    'Blockchain',
    'DevSecOps',
    'Inteligência Artificial',
    'Big Data',
    'Desenvolvimento de Jogos',
    'Análise de Dados',
    'Arquitetura de Software',
    'Engenharia de Dados',
    'Automação',
    'Administração de Sistemas',
    'Redes e Infraestrutura',
    'Suporte Técnico',
  ];

  const discoverAnimalAndStack = () => {
    const randomAnimalIndex = Math.floor(Math.random() * animals.length);
    const randomStackIndex = Math.floor(Math.random() * stacks.length);
    const chosenAnimal = animals[randomAnimalIndex];
    const chosenStack = stacks[randomStackIndex];
    setResult(`Você seria um(a) <strong>${chosenAnimal} de ${chosenStack}</strong>!`);
  };

  return (
    <div className='container'>
      <main>
        <img 
          src="./assets/Bichinhos-da-ti.webp" 
          alt="Bichinhos da TI" 
          width="200"
          height="200"
        />
        <h1>Qual animal da TI você seria?</h1>
        <button 
          onClick={discoverAnimalAndStack}
        >
          {
            result ? 'Descobrir outro' : 'Descobrir'
          }
        </button>
        {result && <p dangerouslySetInnerHTML={{ __html: result }}></p>}
      </main>

      <footer>
        Feito com <span className="heart">♥</span> por <a href="https://github.com/zThiagoR">Thiago M</a>.
        <br/>
        Venha participar da <a href="https://discord.gg/NeH77NaVrv">Comunidade Bichinhos da TI</a> no Discord!
      </footer>
    </div>
  );
}

export default App;
