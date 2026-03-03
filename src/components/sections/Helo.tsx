import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ChevronDown } from "lucide-react";

export const Helo = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 bg-black/10">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-[1.02]"
                >
                    <source src="https://nanoism.co.jp//files/libs/2687/202410031717096967.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-end pb-24 md:pb-36">
                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <div className="flex items-center space-x-3 mb-6 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="h-[1px] w-8 md:w-12 bg-parfait-blue" />
                        <span className="text-parfait-blue font-medium tracking-[0.4em] text-[11px] md:text-sm uppercase drop-shadow-md">
                            Parfait Clinic × La Briller
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.3] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 [text-shadow:0_4px_20px_rgba(0,0,0,0.5)]">
                        精密が描く、<br />
                        究極の美。
                    </h1>

                    {/* Sub copy */}
                    <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-10 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
                        大切な天然歯を守り抜くこと。それがパルフェクリニックの誠実さ。<br className="hidden md:block" />
                        世界初、PuSL技術が実現した圧倒的な透明感と強靭さ。<br className="hidden md:block" />
                        最短2回の通院で、あなたは新しい自分と出逢うことになります。
                    </p>

                    {/* Dual CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
                        <Button
                            asChild
                            className="h-14 md:h-16 px-8 md:px-10 bg-[#3CB34A] hover:bg-[#3CB34A]/90 text-white rounded-none text-sm tracking-[0.15em] font-medium shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                        >
                            <a href="https://parfait-clinic.com/line-friends/">
                                <MessageCircle className="mr-2 w-4 h-4" />
                                LINEで無料相談・予約
                            </a>
                        </Button>
                        <Button
                            asChild
                            className="h-14 md:h-16 px-8 md:px-10 bg-white/10 backdrop-blur-lg border border-white/40 hover:bg-white/20 hover:border-white/60 text-white rounded-none text-sm tracking-[0.15em] font-medium shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                        >
                            <a href="https://reserve.dental/web/5c572e-743/home" target="_blank" rel="noopener noreferrer">
                                <Calendar className="mr-2 w-4 h-4" />
                                24時間 Web予約
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Side Branding */}
            <div className="absolute right-0 bottom-0 p-12 hidden lg:block vertical-rl z-20">
                <p className="text-[10px] text-gray-400 tracking-[0.5em] uppercase font-light">
                    The Art of Precision Dentistry
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
                <ChevronDown className="w-5 h-5 text-white/50" />
            </div>
        </section>
    );
};
