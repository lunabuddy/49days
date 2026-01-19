import React, { useState, useEffect } from 'react';
import { CHARACTERS, STATS, SCHOOL_SCHEDULE, STRATEGY_GUIDE, CAFETERIA_MENU } from './constants';
import CharacterCard from './components/CharacterCard';
import CombatTerminal from './components/CombatTerminal';
import { Ghost, Heart, Moon, ArrowDown, BookOpen, Utensils, Siren, Map } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'chars' | 'system'>('info');
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-stone-300 overflow-x-hidden selection:bg-[#580000] selection:text-white font-serif">
      
      {/* Background Ambience - Serious East Asian Horror */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dark noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {/* Concrete/Wall texture for grim vibe */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000000_90%)]"></div>
        
        {/* Subtle Fog */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-stone-900/10 via-transparent to-black opacity-90"></div>
        
        {/* Dripping Blood Effect (Persistent) */}
        <div className="absolute top-0 left-[10%] w-[2px] bg-[#580000] opacity-60 animate-drip"></div>
        <div className="absolute top-0 left-[25%] w-[3px] bg-[#4a0000] opacity-50 animate-drip animation-delay-1000"></div>
        <div className="absolute top-0 left-[60%] w-[2px] bg-[#3a0000] opacity-70 animate-drip animation-delay-500"></div>
        <div className="absolute top-0 right-[15%] w-[4px] bg-[#580000] opacity-40 animate-drip animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${scrolled > 50 ? 'bg-black/95 backdrop-blur-md border-[#330000] py-4' : 'bg-transparent border-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-batang font-bold text-2xl tracking-[0.2em] text-[#880808] opacity-90 cursor-pointer hover:opacity-100 transition-opacity" onClick={() => setActiveTab('info')}>
            49일의 귀가부
          </div>
          <div className="flex gap-8 text-sm font-serif tracking-widest">
            <button onClick={() => { setActiveTab('info'); window.scrollTo(0,0); }} className={`hover:text-[#a00000] transition-colors duration-300 ${activeTab === 'info' ? 'text-[#a00000] border-b border-[#a00000]' : 'text-stone-500'}`}>세계관</button>
            <button onClick={() => { setActiveTab('chars'); window.scrollTo(0,0); }} className={`hover:text-[#a00000] transition-colors duration-300 ${activeTab === 'chars' ? 'text-[#a00000] border-b border-[#a00000]' : 'text-stone-500'}`}>학생부</button>
            <button onClick={() => { setActiveTab('system'); window.scrollTo(0,0); }} className={`hover:text-[#a00000] transition-colors duration-300 ${activeTab === 'system' ? 'text-[#a00000] border-b border-[#a00000]' : 'text-stone-500'}`}>시스템</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20 min-h-screen flex flex-col">
        
        {/* Conditional Rendering based on Tab */}
        {activeTab === 'info' && (
          <div className="animate-in fade-in duration-1000">
            {/* Hero Section */}
            <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pb-24 md:pb-0">
              
              {/* Main Visual - Character Image with Glitch Effect */}
              <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden">
                
                {/* Base Image */}
                <img 
                  src="https://i.postimg.cc/qqYzWVdj/0-5-astist-alzi-xiaomi-0-5-artist-seeshin-see-artist-starstruckdon-s-595751893.png" 
                  alt="Main Visual" 
                  className="h-[85vh] md:h-[100vh] w-auto object-cover opacity-80 filter grayscale-[40%] contrast-125 drop-shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                />

                {/* Glitch Layer 1 (Red Shift) - Animated */}
                <img 
                  src="https://i.postimg.cc/qqYzWVdj/0-5-astist-alzi-xiaomi-0-5-artist-seeshin-see-artist-starstruckdon-s-595751893.png" 
                  alt="" 
                  className="absolute bottom-0 h-[85vh] md:h-[100vh] w-auto object-cover opacity-40 mix-blend-color-dodge animate-glitch hidden md:block"
                  style={{ transform: 'translateX(-4px)' }}
                />

                {/* Glitch Layer 2 (Flicker) */}
                <div className="absolute inset-0 bg-black/20 animate-flicker mix-blend-overlay"></div>

                {/* Gradient Overlay to fade bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-3/4 bottom-0"></div>
                
                {/* Dark Vignette for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]"></div>
              </div>

              {/* Horror Interaction Background Layer - Atmospheric */}
              <div className="absolute inset-0 pointer-events-none z-0">
                 {/* Full Screen Glitch/Shake Overlay */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 animate-shake mix-blend-overlay"></div>
              </div>

              {/* Vertical Text Decoration */}
              <div className="absolute left-12 top-1/3 hidden lg:block opacity-40 pointer-events-none select-none writing-vertical-rl text-6xl font-batang text-[#3a0000] font-bold tracking-[0.5em] border-r border-[#3a0000] pr-6 shadow-[0_0_10px_#000]">
                生死境界
              </div>
              <div className="absolute right-12 bottom-1/3 hidden lg:block opacity-40 pointer-events-none select-none writing-vertical-rl text-6xl font-batang text-[#1a1a1a] font-bold tracking-[0.5em] border-l border-[#1a1a1a] pl-6 text-shadow-sm">
                夢幻高校
              </div>

              <div className="relative z-10 w-full flex flex-col items-center md:block md:mt-12 -mt-8 md:mt-0">
                
                {/* Main Title - Single Line */}
                <h1 className="font-batang text-5xl md:text-7xl lg:text-9xl font-bold text-stone-200 tracking-tight z-20 relative drop-shadow-2xl flex justify-center items-center gap-4 md:gap-8 flex-wrap mb-0 md:mb-0">
                   <span className="text-[#880808] opacity-90 relative inline-block animate-pulse-slow text-shadow-glow">
                     49일의
                   </span>
                   <span className="text-[#e0e0e0] opacity-90">귀가부</span>
                </h1>

                <div className="max-w-[85%] md:max-w-2xl mx-auto text-stone-400 text-sm md:text-xl leading-relaxed md:leading-loose font-serif mt-80 md:mt-16 bg-black/70 p-6 md:p-10 border border-stone-900 shadow-2xl backdrop-blur-sm relative overflow-hidden group hover:border-[#580000]/50 transition-colors">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#580000] to-transparent opacity-50"></div>
                   
                   <p className="mb-3 md:mb-6 text-[#880808] font-bold text-xs md:text-sm tracking-widest text-center animate-pulse">
                     이승과 저승 사이, 경계(境界)의 학교▁▂▃▅▆▓
                   </p>
                   
                   <p className="text-center transition-all duration-300 group-hover:text-stone-300">
                    어떤 이유로 목숨을 잃은 당신은 <span className="text-stone-200 font-bold border-b border-[#580000]">'몽환고교'</span>의 학생으로 깨어난다.<br/>
                    당신의 곁을 맴도는 수상한 남학생들과 얽히며,<br/>
                    <span className="text-[#a00000] font-bold">기묘한 현상</span>을 마주하게 되는데...
                   </p>
                </div>
              </div>

              <div className="absolute bottom-12 animate-bounce text-[#580000] opacity-50">
                <ArrowDown size={24} />
              </div>
            </header>
            
            {/* School Introduction (University Portal Style) */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-b border-stone-900">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/3 border-r border-stone-800 pr-12 text-right hidden md:block">
                   <h3 className="text-4xl font-batang font-bold text-stone-300 mb-2">학교 소개</h3>
                   <p className="text-[#580000] font-serif">Introduction</p>
                </div>
                <div className="w-full md:w-2/3 pl-0 md:pl-4">
                   <div className="md:hidden mb-6 border-b border-stone-800 pb-4">
                      <h3 className="text-3xl font-batang font-bold text-stone-300">학교 소개</h3>
                   </div>
                   <div className="font-serif text-lg text-stone-400 leading-loose mb-6">
                     <span className="text-2xl font-bold text-stone-200 block mb-6 font-batang">"배움의 끝에서 안식을 찾으십시오."</span>
                     <p className="mb-4">
                       몽환고교(夢幻高校)는 현세와 내세의 경계에 설립된 유일한 고등 교육 기관입니다. 
                       본교는 갑작스러운 죽음을 맞이한 영혼들이 49일간 머물며, 생전의 미련을 학업으로 승화시키고 
                       성숙한 이별을 준비할 수 있도록 돕고 있습니다.
                     </p>
                   </div>
                   <p className="font-serif text-stone-500 leading-relaxed">
                     전통과 역사가 살아 숨 쉬는 교정, 각 시대의 지성을 갖춘 교사진, 
                     그리고 여러분의 영혼을 맑게 할 다양한 커리큘럼이 준비되어 있습니다. 
                     부디 이곳에서 마지막 추억을 아름답게 장식하시길 바랍니다.
                   </p>
                   <div className="mt-12 text-right">
                     <span className="font-batang text-stone-600">몽환고교 이사장 </span>
                     <span className="font-batang text-stone-300 text-xl font-bold ml-2">???</span>
                   </div>
                </div>
              </div>
            </section>

            {/* Rules of the World (Zig-Zag Layout) */}
            <section className="py-24 relative overflow-hidden bg-stone-900/10 border-b border-stone-900">
              {/* Background Decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#580000]/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="max-w-5xl mx-auto px-6 space-y-24 relative z-10">
                 {/* Rule 1: 49 Days */}
                 <div className="flex flex-col md:flex-row gap-12 items-center group">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                       <div className="w-32 h-32 border border-[#330000] bg-black/50 flex items-center justify-center relative transform group-hover:rotate-45 transition-transform duration-700 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                          <div className="absolute inset-1 border border-stone-800"></div>
                          <Moon className="w-12 h-12 text-stone-400 group-hover:text-stone-100 transition-colors transform group-hover:-rotate-45 duration-700" />
                       </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                       <h3 className="text-3xl font-batang font-bold text-stone-200 mb-4 tracking-wide group-hover:text-[#a00000] transition-colors">49일의 유예</h3>
                       <div className="h-px w-24 bg-gradient-to-r from-[#580000] to-transparent mx-auto md:mx-0 mb-6"></div>
                       <p className="font-serif text-stone-500 leading-loose">
                          죽은 자는 즉시 저승으로 가지 않습니다.<br/> 
                          <span className="text-stone-300">49일간 '경계'에 머물며</span> 생전의 미련을 정리해야 합니다.<br/>
                          시간이 흐를수록 당신의 영혼은 희미해지며, 이 기간 내에 준비를 마치지 못하면 영원히 소멸하거나 괴물이 됩니다.
                       </p>
                    </div>
                 </div>

                 {/* Rule 2: Specter (Reversed) */}
                 <div className="flex flex-col md:flex-row-reverse gap-12 items-center group">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                       <div className="w-32 h-32 border border-[#330000] bg-black/50 flex items-center justify-center relative transform group-hover:-rotate-12 transition-transform duration-700 shadow-[0_0_15px_rgba(88,0,0,0.3)]">
                          <div className="absolute inset-1 border border-stone-800"></div>
                          <Ghost className="w-12 h-12 text-[#880808] group-hover:text-[#ff0000] transition-colors transform group-hover:rotate-12 duration-700" />
                       </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-right">
                       <h3 className="text-3xl font-batang font-bold text-stone-200 mb-4 tracking-wide group-hover:text-[#ff0000] transition-colors">망령(亡靈)</h3>
                       <div className="h-px w-24 bg-gradient-to-l from-[#580000] to-transparent mx-auto md:mx-0 md:ml-auto mb-6"></div>
                       <p className="font-serif text-stone-500 leading-loose">
                          집착이 강한 영혼은 49일이 지나도 떠나지 못합니다.<br/>
                          그들은 <span className="text-[#a00000]">괴물(망령)이 되어 경계를 뒤틀고</span>,<br/>
                          산 자의 꿈을 갉아먹기 위해 당신을 노릴 것입니다. 조우 시 도망치십시오.
                       </p>
                    </div>
                 </div>

                 {/* Rule 3: Karma */}
                 <div className="flex flex-col md:flex-row gap-12 items-center group">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                       <div className="w-32 h-32 border border-[#330000] bg-black/50 flex items-center justify-center relative transform group-hover:scale-110 transition-transform duration-700 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                          <div className="absolute inset-1 border border-stone-800"></div>
                          <Heart className="w-12 h-12 text-purple-900 group-hover:text-purple-600 transition-colors duration-700" />
                       </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                       <h3 className="text-3xl font-batang font-bold text-stone-200 mb-4 tracking-wide group-hover:text-purple-400 transition-colors">인연과 업보</h3>
                       <div className="h-px w-24 bg-gradient-to-r from-[#580000] to-transparent mx-auto md:mx-0 mb-6"></div>
                       <p className="font-serif text-stone-500 leading-loose">
                          학교의 비밀을 간직한 남학생들과의 관계는 당신의 운명을 결정합니다.<br/>
                          그들과 쌓은 <span className="text-purple-900/80 font-bold">인연(호감도)</span>에 따라<br/>
                          저승으로 구원을 받을 수도, 영원히 학교라는 지옥에 갇힐 수도 있습니다.
                       </p>
                    </div>
                 </div>
              </div>
            </section>

            {/* School Schedule Section */}
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="pb-24">
                <div className="text-center mb-16">
                   <h3 className="text-4xl font-batang font-bold text-[#a00000] mb-3 tracking-widest">일과표</h3>
                   <p className="text-stone-600 text-xs font-serif tracking-[0.3em]">DAILY ROUTINE</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Schedule List */}
                  <div className="bg-[#0a0a0a] border border-stone-800 p-10 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                       <BookOpen size={100} />
                    </div>
                    <ul className="space-y-8 relative z-10">
                      {SCHOOL_SCHEDULE.map((item, idx) => (
                        <li key={idx} className="flex border-b border-stone-900 pb-6 last:border-0">
                          <div className="w-28 text-stone-500 font-bold font-serif text-lg pt-1">{item.time}</div>
                          <div className="flex-1">
                            <h4 className="text-stone-200 font-batang font-bold mb-2 text-xl">{item.activity}</h4>
                            <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Menu List */}
                  <div className="bg-[#0a0a0a] border border-stone-800 p-10 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                       <Utensils size={100} />
                    </div>
                    <div className="mb-8 border-b border-[#330000] pb-4">
                       <h4 className="text-2xl font-batang font-bold text-stone-300">오늘의 급식</h4>
                       <span className="text-xs text-stone-600 font-serif">MENU OF THE DAY</span>
                    </div>
                    <ul className="space-y-6 relative z-10">
                       {CAFETERIA_MENU.map((menu, idx) => (
                         <li key={idx} className="flex justify-between items-start group">
                            <div className="flex-1">
                               <span className="block font-batang text-stone-400 font-bold group-hover:text-[#880808] transition-colors">
                                 {menu.name}
                               </span>
                               <span className="text-xs text-stone-600 block mt-1">{menu.desc}</span>
                            </div>
                         </li>
                       ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-stone-900 text-center">
                       <p className="text-stone-700 text-xs font-serif italic">
                         "식사를 거르면 체력이 감소합니다."
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Restored Student Section */}
        {activeTab === 'chars' && (
          <div className="max-w-7xl mx-auto px-6 py-12 animate-in slide-in-from-bottom-4 fade-in duration-1000">
            <div className="text-center mb-20 relative">
              <h2 className="text-5xl md:text-6xl font-batang font-bold mb-4 text-stone-200 tracking-widest">학생 기록부</h2>
              <div className="text-[#580000]/10 text-9xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-batang opacity-40 pointer-events-none select-none z-0 writing-vertical-rl font-bold">
                機密文書
              </div>
              <p className="text-stone-500 font-serif text-xs tracking-[0.5em] relative z-10 inline-block px-4 py-1 border border-stone-800 bg-black">CONFIDENTIAL</p>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center">
              {CHARACTERS.map(char => (
                <CharacterCard key={char.id} char={char} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="max-w-6xl mx-auto px-6 py-12 animate-in slide-in-from-bottom-4 fade-in duration-1000">
             <div className="text-center mb-20">
               <h2 className="text-5xl font-batang font-bold mb-4 text-stone-200 tracking-wide">시스템</h2>
               <p className="text-[#580000] font-serif tracking-[0.3em] text-xs">SURVIVAL MECHANICS & GUIDE</p>
             </div>
             
             {/* Stats Explanation */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
               {STATS.map((stat, idx) => (
                 <div key={idx} className="bg-stone-950 border border-stone-800 p-8 flex flex-col items-center text-center hover:border-[#330000] transition-colors relative overflow-hidden group">
                    <span className="text-5xl mb-6 mt-4 opacity-80 group-hover:scale-110 transition-transform duration-500">{stat.icon}</span>
                    <h4 className={`text-2xl font-bold font-batang mb-4 ${stat.color}`}>{stat.label}</h4>
                    <p className="text-stone-500 font-serif leading-7 text-sm px-2">{stat.desc}</p>
                 </div>
               ))}
             </div>

             {/* Strategy Guide */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <div className="bg-[#0f0f0f] border-t-2 border-[#580000] p-8 shadow-xl">
                   <div className="flex items-center gap-4 mb-8">
                      <Siren className="text-[#880808]" size={28} />
                      <h3 className="text-2xl font-batang font-bold text-stone-300">생존 수칙</h3>
                   </div>
                   <ul className="space-y-5 font-serif text-stone-400">
                     {STRATEGY_GUIDE.map((guide, idx) => (
                       <li key={idx} className="flex gap-4 items-start">
                         <span className="text-[#880808] font-bold text-lg leading-none mt-[2px]">0{idx + 1}</span>
                         <span className="text-sm leading-relaxed">{guide}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                
                <div className="bg-[#0f0f0f] border-t-2 border-stone-700 p-8 shadow-xl">
                   <div className="flex items-center gap-4 mb-8">
                      <Map className="text-stone-500" size={28} />
                      <h3 className="text-2xl font-batang font-bold text-stone-300">전투 가이드</h3>
                   </div>
                   <p className="font-serif text-stone-400 mb-6 text-sm leading-relaxed text-justify">
                     조우는 학교 내 이동 시 무작위로 발생합니다. '망령'은 이성을 잃은 상태로 대화가 통하지 않으며, 오직 무력이나 특정 아이템으로만 제압할 수 있습니다.
                   </p>
                   <ul className="space-y-3 text-sm text-stone-500 list-none font-serif">
                     <li className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                       근접 공격은 체력 소모가 큽니다. 신중하게 선택하십시오.
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                       호감도가 높은 조력자(학생)가 있다면 전투를 대신 수행해줍니다.
                     </li>
                     <li className="flex items-center gap-2">
                       <span className="w-1 h-1 bg-stone-600 rounded-full"></span>
                       천견우의 부적 등 소비 아이템을 사용하여 전투를 회피할 수 있습니다.
                     </li>
                   </ul>
                </div>
             </div>

             {/* Combat Preview */}
             <div className="border-t border-stone-900 pt-20">
               <div className="flex items-center gap-4 mb-8 justify-center">
                 <h3 className="text-3xl font-batang font-bold text-stone-300">
                   전투 기록 (Simulation)
                 </h3>
               </div>
               <CombatTerminal />
             </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-900 bg-black py-20 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="font-batang text-3xl text-stone-800 font-bold mb-4 tracking-[0.5em] opacity-40">夢幻高校</h4>
          <p className="text-stone-800 font-serif text-xs tracking-widest mb-2">
            본 사이트는 픽션이며, 등장하는 인물과 단체는 실제와 무관합니다.
          </p>
          <p className="text-stone-800 font-serif text-xs">
            &copy; 2025 49일의 귀가부. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
          text-orientation: upright;
        }
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(136, 8, 8, 0.5);
        }
      `}</style>
    </div>
  );
};

export default App;