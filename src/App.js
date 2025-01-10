import './index.css';

function App() {
  return (
    <div className="flex w-screen h-screen relative justify-center items-center">
      <div className="h-[140px] w-[140px] absolute border border-black rounded-full z-10 opacity-10"></div>
      <div className="h-[340px] w-[340px] absolute border border-black rounded-full z-10 opacity-10"></div>
      <div className="h-[540px] w-[540px] absolute border border-black rounded-full z-10 opacity-10"></div>
      <div className="h-[940px] w-[940px] absolute border border-black rounded-full z-10 opacity-10"></div>
      
      
      <div className="bg-custom-white w-1/2 h-screen left-0 absolute"></div>
      <div className="bg-custom-dark w-1/2 h-screen right-0 absolute"></div>
    </div>
  );
}

export default App;