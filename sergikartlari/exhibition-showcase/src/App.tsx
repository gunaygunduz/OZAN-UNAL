/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const exhibitions = [
  { 
    year: "2021", 
    title: "Rüya Hissi Süsler, Hafıza Anıyı.", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3p8.png" 
  },
  { 
    year: "2021", 
    title: "İki Kişilik Bir Dünya", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3p9.png" 
  },
  { 
    year: "2021", 
    title: "Rüya Anıdan Sayılır Mı?", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pa.png" 
  },
  { 
    year: "2020", 
    title: "Çünkü Bu Bir Oyun", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pb.png" 
  },
  { 
    year: "2019", 
    title: "Bir Var-lık Bir Yok-luk", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pc.png" 
  },
  { 
    year: "2018", 
    title: "Düşbozumu", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pd.png" 
  },
  { 
    year: "2017", 
    title: "Yerini Yadırgayanlar", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pe.png" 
  },
  { 
    year: "2016", 
    title: "Tahterevalli", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pf.png" 
  },
  { 
    year: "2014", 
    title: "İnsan Kara Bir Leke Değildir", 
    image: "https://storage.googleapis.com/static.ai.studio.google.com/content/01jps3p8x0v3p8v3p8v3p8v3pg.png" 
  },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollContent = scrollContentRef.current;
    if (!scrollContent) return;

    const totalWidth = scrollContent.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(scrollContent, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => `+=${scrollDistance}`,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#080808] font-sans text-[#f0ece4] overflow-x-hidden">
      {/* Intro Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-tighter text-[#f0ece4]">
          SERGİ ARŞİVİ
        </h1>
        <p className="max-w-md text-[#b87333] uppercase tracking-[0.3em] text-[10px] font-extralight">
          Geçmişten günümüze sanatsal yolculuk ve görsel hikayeler.
        </p>
        <div className="mt-16 animate-bounce">
          <ArrowRight className="rotate-90 w-5 h-5 text-[#b87333]" />
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <div ref={horizontalRef} className="h-screen overflow-hidden flex items-center">
        <div ref={scrollContentRef} className="flex h-[75vh] px-12 gap-6">
          {exhibitions.map((exhibition, index) => (
            <div
              key={index}
              className="panel w-[80vw] md:w-[40vw] lg:w-[18vw] h-full flex-shrink-0 relative group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <img 
                src={exhibition.image} 
                alt={exhibition.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              {/* Text Content Inside Card */}
              <div className="absolute bottom-0 left-0 w-full p-6 space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#b87333] text-sm font-extralight tracking-widest block">
                  {exhibition.year}
                </span>
                <h2 className="text-sm md:text-base font-medium leading-tight text-[#f0ece4] uppercase tracking-wider">
                  {exhibition.title}
                </h2>
                <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-8 h-[1px] bg-[#b87333]"></div>
                </div>
              </div>

              {/* Index Number */}
              <span className="absolute top-4 right-4 text-4xl font-medium opacity-10 select-none text-[#f0ece4]">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 bg-[#080808] border-t border-[#f0ece4]/5">
        <h3 className="text-3xl font-medium mb-12 tracking-widest text-[#f0ece4]">İLETİŞİM</h3>
        <p className="text-[#b87333] max-w-sm text-center leading-relaxed font-extralight text-sm">
          Yeni sergiler ve projeler için takipte kalın. Sanatla kalın.
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] uppercase tracking-[0.3em] font-medium text-[#f0ece4]/60">
          <a href="#" className="hover:text-[#b87333] transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-[#b87333] transition-colors">BEHANCE</a>
          <a href="#" className="hover:text-[#b87333] transition-colors">E-POSTA</a>
        </div>
      </section>
    </div>
  );
}
