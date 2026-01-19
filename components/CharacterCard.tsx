import React, { useState } from 'react';
import { Character } from '../types';
import { Eye, EyeOff, Skull, AlertTriangle, Fingerprint } from 'lucide-react';

interface CharacterCardProps {
  char: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ char }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleRevealClick = () => {
    if (isRevealed) {
      setIsRevealed(false);
    } else {
      setShowWarning(true);
    }
  };

  const confirmReveal = () => {
    setShowWarning(false);
    setIsRevealed(true);
  };

  return (
    <div className={`relative group w-full md:w-[48%] lg:w-[48%] xl:w-[23%] min-h-[550px] perspective-1000 transition-all duration-500 mb-8`}>
      {/* Paper texture container */}
      <div className={`relative w-full h-full flex flex-col transition-colors duration-700 overflow-hidden shadow-2xl
        ${isRevealed 
          ? 'bg-stone-900 border-2 border-[#580000]' 
          : 'bg-[#d6d3c7] border border-[#b8b3a1]'
        }
      `}>
        
        {/* Paper Texture Overlay (CSS) */}
        {!isRevealed && (
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] z-0"></div>
        )}

        {/* Blood Splatter Effect (CSS Radial Gradients) - Only visible when revealed */}
        {isRevealed && (
          <div className="absolute inset-0 pointer-events-none opacity-50 z-0" 
               style={{
                 backgroundImage: `
                   radial-gradient(circle at 20% 30%, #300000 0%, transparent 25%),
                   radial-gradient(circle at 70% 80%, #4a0000 0%, transparent 30%),
                   url('https://www.transparenttextures.com/patterns/black-felt.png')
                 `
               }}>
          </div>
        )}

        {/* Image Section */}
        <div className="relative w-full h-80 overflow-hidden border-b border-[#330000]/20 bg-black group-hover:brightness-110 transition-all z-10">
           {/* Normal Image */}
           <img 
              src={char.normalImage} 
              alt={char.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isRevealed ? 'opacity-0' : 'opacity-100'} filter sepia-[0.3] contrast-[0.9]`}
           />
           {/* Abyss Image */}
           <img 
              src={char.abyssImage} 
              alt={`${char.name} Revealed`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isRevealed ? 'opacity-100 scale-105' : 'opacity-0'} filter contrast-125 brightness-90 saturate-50`}
           />
           
           {/* Overlay Gradient */}
           <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 pointer-events-none`}></div>
           
           {/* Name Overlay on Image */}
           <div className="absolute bottom-4 left-4 text-left">
              <div className="flex items-baseline gap-2 drop-shadow-lg">
                <h3 className={`text-3xl font-batang font-bold tracking-tight ${isRevealed ? 'text-[#ff0000] animate-pulse' : 'text-stone-200'}`}>
                  {char.name}
                </h3>
                <span className={`font-serif text-lg ${isRevealed ? 'text-red-900' : 'text-stone-400'}`}>{char.hanja}</span>
              </div>
           </div>
        </div>

        {/* Header / Role - Moved below image */}
        <div className={`px-5 py-3 border-b relative z-10
          ${isRevealed ? 'border-[#580000] bg-black/60' : 'border-[#b8b3a1] bg-[#e0ddd5]'}
        `}>
            <p className={`text-sm font-serif font-bold tracking-wide ${isRevealed ? 'text-[#a00000]' : 'text-stone-600'}`}>
              {char.role}
            </p>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 relative z-10 overflow-y-auto scrollbar-thin">
          
          {/* Default State: Notebook Style */}
          <div className={`transition-all duration-700 ${isRevealed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>
            <div className="space-y-5 font-serif text-[#1a1a1a]">
              <div className="flex gap-2 items-start">
                <span className="font-bold min-w-[3rem] border-r border-stone-400 pr-2 mt-1 text-sm">외모</span>
                <span>{char.appearance}</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="font-bold min-w-[3rem] border-r border-stone-400 pr-2 mt-1 text-sm">성격</span>
                <span className="leading-relaxed text-justify">{char.personality}</span>
              </div>
              
              <div className="mt-8 pt-6 border-t border-stone-400/30">
                <p className="font-serif font-bold text-[#3a3a3a] text-lg text-center tracking-wide">
                  "{char.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Revealed State: Horror Style */}
          {isRevealed && (
            <div className="animate-in fade-in zoom-in duration-700 space-y-8 pt-2">
              <div className="relative">
                <h4 className="text-xl font-batang font-bold text-[#880808] mb-3 flex items-center gap-2 border-b border-[#580000]/30 pb-1">
                  <Fingerprint size={20} /> 기록되지 않은 과거
                </h4>
                <p className="text-stone-300 font-serif leading-7 text-sm text-justify opacity-90">
                  {char.past}
                </p>
              </div>

              <div className="relative">
                 <h4 className="text-xl font-batang font-bold text-[#a00000] mb-3 flex items-center gap-2 border-b border-[#580000]/30 pb-1">
                  <Skull size={20} /> 심연의 진실
                </h4>
                <p className="text-red-50 font-serif leading-7 text-sm text-justify drop-shadow-md">
                  {char.secret}
                </p>
              </div>
            </div>
          )}
          
          {/* Spoiler Warning Overlay */}
          {showWarning && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 z-50 p-6 text-center animate-in fade-in duration-300">
              <AlertTriangle className="w-12 h-12 text-[#880808] mb-6 animate-pulse" />
              <h4 className="text-[#a00000] font-batang font-bold text-3xl mb-3 tracking-widest">경고</h4>
              <p className="text-stone-500 text-sm mb-10 font-serif leading-relaxed">
                이 기록을 열람하는 순간,<br/>
                돌이킬 수 없는 진실을 마주하게 됩니다.<br/>
                <span className="text-[#880808] font-bold block mt-4">확인하시겠습니까?</span>
              </p>
              <div className="flex gap-4 w-full px-4">
                <button 
                  onClick={() => setShowWarning(false)}
                  className="flex-1 py-3 text-xs border border-stone-800 text-stone-500 hover:bg-stone-900 transition-colors font-serif tracking-widest"
                >
                  거부
                </button>
                <button 
                  onClick={confirmReveal}
                  className="flex-1 py-3 text-xs bg-[#300000] border border-[#580000] text-red-500 hover:bg-[#4a0000] transition-colors font-serif font-bold tracking-widest"
                >
                  승낙
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer / Toggle */}
        <div className={`p-4 border-t relative z-20 flex justify-center
          ${isRevealed ? 'bg-black/80 border-[#580000]' : 'bg-[#e0ddd5] border-[#b8b3a1]'}
        `}>
            <button 
              onClick={handleRevealClick}
              className={`w-full py-2 rounded-sm font-serif text-sm transition-all duration-300 flex items-center justify-center gap-2 tracking-widest
                ${isRevealed 
                  ? 'bg-[#1a0000] text-[#a00000] border border-[#580000] hover:bg-[#300000]' 
                  : 'bg-[#5c5c5c] text-[#e6dcc0] hover:bg-[#4a4a4a]'
                }
              `}
            >
              {isRevealed ? (
                <><EyeOff size={16} /> 기록 봉인</>
              ) : (
                <><Eye size={16} /> 심연 응시</>
              )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;