import ReactImg from "../../assets/react-core-concepts.png"
import "./Header.css"
const reactDescriptions = ["Core", "Fundamental", "Crucial"];

const getRandomIndex = (max) => Math.floor(Math.random() * max);

const randomWord = () => reactDescriptions[getRandomIndex(reactDescriptions.length)];

export default function Header() {
  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomWord()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
