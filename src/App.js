import Chain from "./components/Chain/Chain";
import Title from "./components/Title/Title";

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #6cc5b6, #72bea5, #78b695, #7ead86, #84a579)",
      }}
    >
      <Title />
      <div className="w-3/6">
        <Chain />
      </div>
    </div>
  );
}

export default App;
