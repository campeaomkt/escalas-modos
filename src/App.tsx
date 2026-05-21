/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Music, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown,
  Star, 
  BookOpen, 
  Terminal, 
  Timer, 
  Layout, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Users,
  Award,
  Keyboard,
  ArrowRight,
  Mail
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "./lib/utils";

// --- Components ---

const Button = ({ 
  children, 
  className, 
  primary = true,
  onClick 
}: { 
  children: React.ReactNode; 
  className?: string; 
  primary?: boolean;
  onClick?: () => void;
}) => (
  <button 
    onClick={onClick}
    className={cn(
      "relative w-full md:w-auto px-6 py-4 md:px-8 md:py-4 font-extrabold text-lg transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group",
      primary 
        ? "bg-[#6366f1] text-white rounded-2xl shadow-[0_10px_20px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.6)]" 
        : "bg-white/10 text-white border border-white/20 rounded-2xl backdrop-blur-sm hover:bg-white/20",
      className
    )}
  >
    {children}
    {primary && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
  </button>
);

const SectionTitle = ({ title, subtitle, label, light = false }: { title: string; subtitle?: string; label?: string; light?: boolean }) => (
  <div className="mb-12 md:mb-16 space-y-4 text-center md:text-left">
    {label && (
      <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest", light ? "bg-white/10 text-white/70" : "bg-indigo-100 text-indigo-600")}>
        <span>{label}</span>
      </div>
    )}
    <h2 className={cn("text-3xl md:text-5xl font-black tracking-tight leading-tight", light ? "text-white" : "text-slate-900")}>
      {title}
    </h2>
    {subtitle && <p className={cn("text-base md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0", light ? "text-slate-400" : "text-slate-600")}>{subtitle}</p>}
  </div>
);

const Card = ({ children, className, key }: { children: React.ReactNode; className?: string; key?: React.Key }) => (
  <div key={key} className={cn("bg-white border border-slate-200 rounded-2xl p-8 shadow-sm transition-all hover:shadow-md", className)}>
    {children}
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group transition-colors"
      >
        <span className={cn(
          "text-lg md:text-xl font-bold transition-colors",
          isOpen ? "text-indigo-600" : "text-slate-900 group-hover:text-indigo-500"
        )}>
          {question}
        </span>
        <div className={cn(
          "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-indigo-600 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-400"
        )}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 24 : 0
        }}
        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <p className="text-slate-600 text-base md:text-lg leading-relaxed pr-12">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};


// --- Page Content ---

export default function App() {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 1. First Fold / Hero */}
      <header className="relative bg-[#0F172A] pt-20 md:pt-32 pb-32 md:pb-48 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#4f46e5_0,transparent_50%)]" />
          <div className="absolute w-full h-full" style={{ backgroundImage: 'radial-gradient(#ffffff22 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 text-[10px] md:text-sm font-semibold mb-6 backdrop-blur-sm uppercase tracking-widest"
          >
            <Music className="w-3 h-3 md:w-4 h-4" />
            <span>Exclusivo para Tecladistas</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 md:mb-10"
          >
            TODAS AS ESCALAS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">NA PALMA DA MÃO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 md:mb-16"
          >
            Maiores, Menores, Pentatônicas, Blues e Modos Gregos. O mapa visual definitivo 
            para você tocar em qualquer tom sem nunca mais travar no teclado.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            {/* Optimized Pricing Section */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <span className="text-slate-500 line-through text-sm md:text-lg font-medium opacity-60">De R$ 67,00</span>
                <span className="bg-green-500/10 text-green-400 text-[10px] md:text-xs font-black px-2 py-1 rounded-lg uppercase tracking-wider border border-green-500/20">
                  ECONOMIZE 60%
                </span>
              </div>
              <div className="flex flex-col items-center space-y-0">
                <span className="text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-40">Aproveite por apenas</span>
                <div className="flex items-start">
                  <span className="text-white text-3xl font-black mt-2">R$</span>
                  <span className="text-white text-7xl md:text-9xl font-black tracking-tighter leading-none">27</span>
                  <span className="text-white text-3xl font-black mt-2">,00</span>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mt-4">
              <div className="p-1.5 md:p-2 bg-indigo-500/20 rounded-[2.5rem] md:rounded-[3rem] backdrop-blur-sm border border-indigo-500/20">
                <Button 
                  onClick={scrollToOffer}
                  className="w-full h-16 md:h-20 text-lg md:text-2xl rounded-[2rem] md:rounded-[2.5rem] uppercase tracking-tighter shadow-2xl"
                >
                  Quero o Dicionário Visual
                </Button>
              </div>
            </div>

            <div className="text-center mt-2">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">Pague uma única vez • Acesso vitalício</p>
            </div>
          </motion.div>

          {/* Product Mockup Representation */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 max-w-md mx-auto"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full" />
              <div className="relative bg-slate-800 rounded-2xl p-2 border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]">
                <div className="bg-slate-900 rounded-xl overflow-hidden aspect-square border border-white/5">
                  <img 
                    src="https://i.ibb.co/gLMQ2MRJ/Chat-GPT-Image-18-de-mai-de-2026-13-19-32.webp" 
                    alt="Mockup do Dicionário Visual" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Pain Points (Dor) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6">
          <SectionTitle 
            label="O Problema"
            title="Por que o teclado parece um labirinto?"
            subtitle="Toda vez que você tenta sair do 'Dó Maior', as coisas ficam confusas. Você sabe que as escalas existem, mas elas parecem distantes e complicadas demais."
          />
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: BookOpen, title: "Excesso de Teoria", desc: "Livros de 400 páginas que focam em nomes difíceis e esquecem que você só quer TOCAR." },
              { icon: Timer, title: "Lentidão nos Tons", desc: "Você gasta minutos tentando transpor uma ideia simples para tons com muitos acidentes." },
              { icon: Layout, title: "Sem Guia Visual", desc: "Tentar decorar intervalos sem uma ferramenta prática no teclado leva à fadiga mental rápida." }
            ].map((item, i) => (
              <Card key={i} className="p-6 md:p-8 hover:-translate-y-1">
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 mb-4 md:mb-6" />
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution / Mechanism */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                label="A Solução"
                title="A Diferença: O Mecanismo Visual"
                subtitle="Nós transformamos intervalos abstratos em formas concretas no teclado. Em vez de decorar regras, você aprende a reconhecer os desenhos."
              />
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Diagramas de Teclado em Alta Resolução (PDF)",
                  "Todos os 12 Tons Mapeados Individualmente",
                  "Todas as Pentatônicas & Penta Blues para Improvisação Livre",
                  "Os 7 Modos Gregos Completos e Aplicados"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4">
                    <div className="mt-1 bg-green-100 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-3 h-3 md:w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700 text-sm md:text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 md:mt-12">
                <Button onClick={scrollToOffer}>QUERO ACESSO AGORA</Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative group px-4 md:px-0 flex justify-center">
               <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full" />
               <div className="relative transform hover:scale-[1.05] transition-transform duration-500">
                  <img 
                    src="https://i.ibb.co/G3cPWB6h/mockup-escalas-removebg-preview.png" 
                    alt="Escalas e Modos Mockup" 
                    className="w-full max-w-lg h-auto drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Demonstration (Showcase) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionTitle 
            label="Por Dentro"
            title="O Arsenal Musical Completo"
            subtitle="Não é apenas sobre modos gregos. É sobre o domínio total do teclado em qualquer escala."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { type: "Essenciais", items: ["Maiores e Menores Naturais", "Menores Harmônicas", "Menores Melódicas"] },
              { type: "Todas as Pentatônicas", items: ["Pentatônicas Maiores (Estilo Pop/Worship)", "Pentatônicas Menores (Licks Rápidos)", "Penta Blues Completa (Notas Especiais)", "Mapeamento Completo em todos os 12 tons"] },
              { type: "Modos Gregos", items: ["Todos os 7 Modos Luxuosos", "Aplicações Práticas", "Visualização em 12 Tons"] }
            ].map((box, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <h3 className="text-indigo-600 font-black text-xl mb-6 uppercase tracking-tighter">{box.type}</h3>
                <ul className="space-y-4">
                  {box.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-indigo-900 text-white p-8 rounded-3xl inline-flex flex-col md:flex-row items-center gap-8">
            <div className="text-left">
              <p className="text-xl font-bold">Mapeado em todos os 12 tons (C, C#, D, D#, E...)</p>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block" />
            <p className="text-slate-400 text-sm max-w-xs text-left">Totalmente visual: você olha para o diagrama e repete no seu teclado. Sem leitura de partitura necessária.</p>
          </div>
        </div>
      </section>

      {/* 4.5. New Dedicated Section: Pentatonicos e Improvisação */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-indigo-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#4f46e5_0,transparent_40%)] opacity-40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-widest">
                <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>SUPER NOVIDADE ADICIONADA</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Domine a Improvisação:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Todas as Pentatônicas & Blues
                </span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Esqueça aquelas teorias difíceis e cansativas. Se você quer fazer solos expressivos e que tocam a alma de quem ouve, o segredo é dominar as <strong>Pentatônicas</strong> e a clássica <strong>Penta Blues</strong>. Elas eliminam as "notas de erro" e te dão segurança imediata para improvisar.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Pentatônicas Maiores e Menores Completas",
                    desc: "O shape seguro para deslizar os dedos por qualquer música popular, worship, jazz ou sertanejo em todos os 12 tons."
                  },
                  {
                    title: "Lendária Penta Blues & Nota Blue Note",
                    desc: "Toque as notas de tensão e expressividade que dão aquela sonoridade sofisticada de quem realmente domina o piano e teclado."
                  },
                  {
                    title: "Segurança Total nos Seus Solos",
                    desc: "Como a escala tem apenas 5 notas estruturadas que sempre combinam entre si, você improvisa com a certeza de que nenhuma nota vai soar fora de tom."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="bg-amber-400 text-indigo-950 p-2 rounded-xl font-bold shrink-0 text-sm">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{item.title}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />
              
              <h3 className="text-2xl font-black mb-6 text-white flex items-center gap-2">
                <Music className="text-indigo-400 w-6 h-6" />
                Diga Adeus às Partituras Duras
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                Agora, além de todos os modos gregos, nosso material conta com o mapeamento completo e 100% visual de <strong>todas as escalas pentatônicas e penta blues</strong>. Diagramas limpos do formato exato do teclado para você apenas olhar e tocar.
              </p>

              <div className="space-y-4 bg-indigo-950/50 p-6 rounded-2xl border border-indigo-800/50">
                <div className="flex justify-between items-center text-xs text-indigo-300 font-mono tracking-wider uppercase">
                  <span>Estudo Tradicional Teérico</span>
                  <span className="text-red-400 font-bold">Lento e Confuso</span>
                </div>
                <p className="text-slate-400 text-sm">Passar meses tentando entender graus e cálculos matemáticos antes de arriscar a primeira nota.</p>
                
                <div className="border-t border-indigo-900/50 my-2" />
                
                <div className="flex justify-between items-center text-xs text-indigo-300 font-mono tracking-wider uppercase">
                  <span>Nosso Guia Rápido de Pentas</span>
                  <span className="text-green-400 font-bold">Direto ao Ponto</span>
                </div>
                <p className="text-slate-200 text-sm font-semibold">Tocar com as formas visuais prontas de cada escala. Siga os desenhos das teclas e faça solos incríveis hoje mesmo.</p>
              </div>

              <div className="mt-8">
                <Button onClick={scrollToOffer} className="w-full bg-[#6366f1] hover:bg-[#5053e3] text-white shadow-lg">
                  QUERO DOMINAR OS IMPROVISOS
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Social Proof (Testimony) */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Aprovado por Tecladistas</h2>
            <p className="text-slate-400">Junte-se a mais de 2.000 alunos que destravaram o teclado.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Carlos Wagner", quote: "Finalmente entendi o que é o modo Mixolídio. O guia visual é surreal de bom.", role: "Tecladista de Igreja" },
              { name: "Juliana Mendes", quote: "Sempre tive dificuldade em outros tons além de Dó e Sol. Esse PDF mudou meu jogo.", role: "Estudante de Música" },
              { name: "Ricardo Dias", quote: "Simples, barato e direto ao ponto. Exatamente o que eu precisava para meus solos.", role: "Freelancer" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-indigo-400 text-indigo-400" />)}
                </div>
                <p className="italic text-slate-300 mb-6">"{item.quote}"</p>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 3 Bonus Items */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            label="Presente para você"
            title="E você ainda leva 3 SUPER BÔNUS"
            subtitle="Queremos que você não só conheça as escalas, mas saiba usá-las."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bônus 1: Digitação Correta", desc: "O guia de dedilhado para que você não trave seus dedos na hora de tocar." },
              { title: "Bônus 2: Progressões Práticas", desc: "Uma lista de cadências comuns para você aplicar cada modo que aprendeu." },
              { title: "Bônus 3: Transposição Rápida", desc: "A tabela mestre para você mudar qualquer música de tom instantaneamente sem precisar de teoria complexa." }
            ].map((bonus, i) => (
              <div key={i} className="relative overflow-hidden bg-indigo-600 text-white p-8 rounded-3xl group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl -mr-16 -mt-16 group-hover:bg-white/20 transition-all" />
                <Zap className="w-10 h-10 mb-6 text-indigo-200" />
                <h3 className="text-xl font-bold mb-4">{bonus.title}</h3>
                <p className="text-indigo-100/80 leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Biography */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-64 h-64 bg-slate-300 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-xl">
               <img 
                src="https://eliabcamposteclas.com/wp-content/uploads/2026/05/app-tela-1.jpg" 
                alt="Eliab Campos"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
            </div>
            <div className="max-w-2xl">
              <div className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">O Criador</div>
              <h2 className="text-4xl font-black mb-6">Eliab Campos Teclas</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Tecladista profissional com mais de 15 anos de experiência e criador do método de visualização rápida. 
                Minha missão é democratizar o conhecimento técnico da música de forma que QUALQUER tecladista, 
                independente do nível, consiga se expressar no instrumento sem medo.
              </p>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 text-slate-500">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">30k+ Seguidores</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-500">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Método Validado</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Delivery Information (How you receive) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-indigo-50 rounded-[2.5rem] p-8 md:p-12 border border-indigo-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-indigo-500 rounded-3xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
              <Mail className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">Como você vai receber?</h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                Assim que a sua compra for confirmada, o acesso ao material será enviado <span className="font-bold text-indigo-600">automaticamente para o seu e-mail</span>. Você poderá baixar o PDF e começar a estudar em menos de 2 minutos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Offer Block */}
      <section id="oferta" className="py-16 md:py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl font-sans">
          <h2 className="text-white text-3xl md:text-6xl font-black mb-8 md:mb-12 leading-tight">RESUMO DO <br className="md:hidden" /> SEU ACESSO</h2>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 mb-8 md:mb-12 text-left backdrop-blur-md">
            <div className="space-y-4 mb-10">
              {[
                { label: "Dicionário Visual Completo", price: "R$ 67" },
                { label: "Bônus: Guia de Digitação", price: "R$ 47" },
                { label: "Bônus: Progressões Reais", price: "R$ 47" },
                { label: "Bônus: Transposição Rápida", price: "R$ 37" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-slate-300 border-b border-white/5 pb-4 last:border-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm md:text-base font-medium">{item.label}</span>
                  </div>
                  <span className="text-xs md:text-sm font-mono opacity-50">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-indigo-400 font-black text-sm md:text-lg mb-6 uppercase tracking-widest">Oferta Exclusiva</p>
              
              <div className="flex flex-col items-center mb-10">
                <span className="text-slate-500 line-through text-lg mb-2">De R$ 198,00</span>
                <div className="flex items-start">
                  <span className="text-white text-3xl font-black mt-4">R$</span>
                  <span className="text-white text-8xl md:text-9xl font-black tracking-tighter leading-none">27</span>
                  <span className="text-white text-3xl font-black mt-4">,00</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  onClick={() => window.open('https://pay.wiapy.com/aZfl0z2SRZ', '_blank')}
                  className="w-full h-20 text-2xl bg-indigo-500 hover:bg-indigo-400"
                >
                   COMPRAR AGORA 
                </Button>
                <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Compra 100% segura e processada na hora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Guarantee */}
      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="inline-block bg-green-100 p-4 rounded-full mb-8">
            <ShieldCheck className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-black mb-6">Garantia Blindada de 7 Dias</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            Eu tenho tanta certeza de que esse guia vai clarear sua mente que eu assumo todo o risco. 
            Se em 7 dias você olhar para o PDF e achar que ele não vale os R$ 27,00, 
            eu devolvo cada centavo sem perguntas chatas.
          </p>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-4xl font-black">Perguntas Frequentes</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-[2.5rem] px-8 md:px-12 shadow-sm">
            {[
              { q: "Como recebo o produto?", a: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link de acesso ao PDF e aos bônus." },
              { q: "Serve para iniciantes?", a: "Sim! O guia foi feito especialmente para quem quer pular a parte chata da teoria e ir direto para as teclas." },
              { q: "Posso imprimir o PDF?", a: "Sim, o arquivo está em alta resolução e pode ser impresso para ficar em cima do seu teclado." },
              { q: "O pagamento é seguro?", a: "Totalmente. Utilizamos as maiores plataformas de pagamento do Brasil, com criptografia de ponta." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 font-bold text-xl">
             <Music className="w-6 h-6 text-indigo-600" />
             <span>Escalas & Modos</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">© 2026 Eliab Campos Music. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Suporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
