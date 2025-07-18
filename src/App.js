import "./App.css";
import bgImage from "./assets/background.jpg";
import CardCarusel from "./components/CardCarusel";

function App() {
  return (
    <div
      className="w-full pt-[40px] h-[755px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <h1 className="font-spaceGrotesk font-bold text-[48px] leading-[41px] tracking-normal text-center">
        Voices of Success with Sales Fortuna
      </h1>
      <CardCarusel />
    </div>
  );
}

export default App;
