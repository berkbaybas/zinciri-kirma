// import chain_start from "./chain_start.svg";
// import chain_mid from "./chain_mid.svg";
// import chain_end from "./chain_end.svg";
// const firstDate = dates[0];
// const lastDate = dates[dates.length - 1];
// const midDates = dates.slice(1, dates.length - 1);

import Chain from "./components/Chain/Chain";

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full bg-slate-100"
      style={{
        backgroundImage:
          "linear-gradient(to right, #525fcb, #5d5dcd, #695cce, #7359cf, #7e57d0)",
      }}
    >
      <h1 className="text-7xl antialiased tracking-wider text-white mb-8">
        ZİNCİRİ KIRMA
      </h1>
      <div className="w-3/6">
        <Chain />
      </div>
    </div>
  );
}

export default App;
