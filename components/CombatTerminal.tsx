import React, { useState, useEffect } from 'react';
import { Terminal, RefreshCcw } from 'lucide-react';

const CombatTerminal: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [step, setStep] = useState(0);

  const combatSequence = [
    { text: "⚠️ 조우 발생! 망령화된 학생이 접근합니다.", type: "system" },
    { text: "> {user} 🩸80 🕳️15 📿10", type: "status" },
    { text: "주사위 굴림 (1d20+5)... [18] 명중!", type: "action" },
    { text: "피해량 판정 (2d6+3)... [10] 피해를 입혔습니다.", type: "damage" },
    { text: "{망령} 🩸0 🫥1m (제압됨)", type: "enemy" },
    { text: "전투 종료. 🕳️한이 1 증가했습니다.", type: "result" }
  ];

  useEffect(() => {
    if (step < combatSequence.length) {
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, combatSequence[step].text]);
        setStep(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const resetCombat = () => {
    setLogs([]);
    setStep(0);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black border border-stone-700 rounded-lg overflow-hidden shadow-2xl font-mono text-sm md:text-base my-8">
      {/* Terminal Header */}
      <div className="bg-stone-900 border-b border-stone-800 px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2 text-stone-400">
          <Terminal size={16} />
          <span>System.Combat.exe</span>
        </div>
        <button onClick={resetCombat} className="text-stone-500 hover:text-stone-300 transition-colors">
          <RefreshCcw size={14} />
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto space-y-3 bg-opacity-90 bg-black">
        {logs.map((log, idx) => {
           let colorClass = "text-stone-300";
           if (log.includes("⚠️")) colorClass = "text-red-500 font-bold animate-pulse";
           if (log.includes("🩸")) colorClass = "text-yellow-100";
           if (log.includes("명중")) colorClass = "text-green-400";
           if (log.includes("피해")) colorClass = "text-red-400";
           if (log.includes("제압")) colorClass = "text-stone-500";

           return (
             <div key={idx} className={`animate-in slide-in-from-left-2 fade-in duration-300 ${colorClass}`}>
               <span className="opacity-50 mr-2">{`[00:00:${10 + idx * 2}]`}</span>
               {log}
             </div>
           );
        })}
        {step >= combatSequence.length && (
           <div className="animate-pulse text-stone-500 pt-4">_ Awaiting next command...</div>
        )}
      </div>
    </div>
  );
};

export default CombatTerminal;