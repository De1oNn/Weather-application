import './index.css';
import sun from './pic/sun.png';
import moon from './pic/moon.png';
import logoleft from './pic/logo-left.png';
import home from './pic/home-icon.png'
import location from './pic/location-icon.png'
import love from './pic/love-icon.png'
import user from './pic/user-icon.png'

function App() {
  return (
    <div className="flex w-screen h-screen relative justify-center items-center bg-[#F3F4F6]">
      <div className="h-[140px] w-[140px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[340px] w-[340px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[540px] w-[540px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[940px] w-[940px] absolute border border-black rounded-full z-10 opacity-20"></div>
      <div className="h-[140px] w-[140px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[340px] w-[340px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[540px] w-[540px] absolute border border-white rounded-full z-10 opacity-40"></div>
      <div className="h-[940px] w-[940px] absolute border border-white rounded-full z-10 opacity-40"></div>
      
      
      <div className="bg-custom-white w-1/2 h-screen left-0 absolute flex justify-center items-center">
        <img src={logoleft} className="h-[86px] w-[43px] absolute top-1/2 left-[800px]"/>
        <div className="h-1/2 w-1/2 bg-[#FFFFFF] z-20 rounded-[48px] flex flex-col items-center">
          <img src={sun} className="h-[262px] w-[262px]"/>
          <div className="flex h-[32px] w-[318px] justify-between">
            <img src={home} className="h-[32px] w-[32px]"/>
            <img src={location} className="h-[32px] w-[32px]"/>
            <img src={love} className="h-[32px] w-[32px]"/>
            <img src={user} className="h-[32px] w-[32px]"/>
          </div>
        </div>
        <input className="h-[80px] w-[567px] bg-[#FFFFFF] absolute top-10 left-10 rounded-[48px]"></input>
      </div>
      <div className="bg-custom-dark w-1/2 h-screen right-0 absolute flex justify-center items-center rounded-bl-[48px]">
        <div className="h-1/2 w-1/2 bg-[#111827] z-20 rounded-[48px] flex flex-col items-center">
          <img src={moon} className="h-[262px] w-[262px]"/>
          <div className="flex h-[32px] w-[318px] justify-between">
            <img src={home} className="h-[32px] w-[32px]"/>
            <img src={location} className="h-[32px] w-[32px]"/>
            <img src={love} className="h-[32px] w-[32px]"/>
            <img src={user} className="h-[32px] w-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;