import ScoreRow from "./components/Scorerow"
import { Zap, Brain, MessageSquare, Eye } from 'lucide-react';

function App() {

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-lg h-96 rounded-4xl flex flex-row">
        {/* Left Component */}
        <div className="bg-gradient-slate-royal h-full w-1/2 rounded-4xl flex flex-col items-center justify-start">
    
          <h1 className="h-12 py-12 text-paleblue">Your Result</h1>
          <div className="flex flex-col justify-center items-center bg-gradient-circle rounded-full h-36 w-36">
            <p className="text-5xl text-paleblue font-extrabold py-2">76</p>
            <p className="text-[12px] text-paleblue">out of 100</p>
          </div>
          <h1 className="font-extrabold h-12 p-4 text-paleblue">Great</h1>
          <p className="text-[12px] px-4 text-center text-paleblue">You scored higher than 65% of the people who have taken these tests</p>
        
        </div>
        
        {/* Right Component */}
        <div className="flex flex-col justify-center items-center w-1/2">
          <div>
            <h1 className="mb-6 font-extrabold text-grayblue">Summary</h1>
            <ScoreRow 
              icon={Zap}
              label="Reaction"
              score={80}
              color="text-lightred"
              bgColor="bg-lightred/[10%]"
              textColor="text-grayblue"
            />
            <ScoreRow 
              icon={Brain}
              label="Memory"
              score={92}
              color="text-orangyyellow"
              bgColor="bg-orangyyellow/[10%]"
              textColor="text-grayblue"
            />
            <ScoreRow 
              icon={MessageSquare}
              label="Verbal"
              score={61}
              color="text-greenteal"
              bgColor="bg-greenteal/[10%]"
              textColor="text-grayblue"
            />
            <ScoreRow 
              icon={Eye}
              label="Visual"
              score={73}
              color="text-cobaltblue"
              bgColor="bg-cobaltblue/[10%]"
              textColor="text-grayblue"
            />
            <button className="transition-all bg-grayblue w-full h-10 rounded-full mt-6 text-paleblue hover:shadow-lg duration-300 hover:scale-[1.02] cursor-pointer">Contiune</button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
