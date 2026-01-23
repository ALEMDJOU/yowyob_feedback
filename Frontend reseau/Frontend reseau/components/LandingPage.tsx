'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from './I18nProvider';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Users, Zap, Globe, MessageCircle } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function LandingPage() {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="bg-white overflow-hidden">
            {/* Hero Section - Immersive & Dynamic */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0b0b] text-white pt-20">
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                            Votre carrière mérite <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 animate-gradient-x">
                                l'excellence
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Connectez-vous avec les leaders de demain. Partagez vos expériences, découvrez des opportunités et propulsez votre réseau vers de nouveaux sommets.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/auth/signup"
                                className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10">Commencer maintenant</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                            <Link
                                href="#features"
                                className="px-8 py-4 bg-transparent border border-gray-700 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                            >
                                Découvrir les fonctionnalités
                            </Link>
                        </div>
                    </motion.div>

                    {/* Floating Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-16 relative mx-auto max-w-5xl perspective-1000"
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#121212]">
                            <div className="absolute top-0 left-0 right-0 h-8 bg-[#1e1e1e] border-b border-gray-800 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <Image
                                src="/images/stage.jpg" // Placeholder for dashboard screenshot
                                alt="Dashboard Preview"
                                width={1200}
                                height={675}
                                className="w-full h-auto opacity-80"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0b] via-transparent to-transparent"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Features Section */}
            <section id="features" className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        {...fadeInUp}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Tout ce dont vous avez besoin</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Une suite d'outils puissants conçus pour maximiser votre impact professionnel.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                        {/* Large Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="col-span-1 md:col-span-2 row-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden relative group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-purple-200"></div>
                            <div className="relative z-10">
                                <span className="inline-block p-3 bg-purple-50 rounded-xl text-purple-600 mb-6">
                                    <Globe size={32} />
                                </span>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Réseau Mondial</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Connectez-vous instantanément avec des professionnels du monde entier. Brisez les barrières géographiques et accédez à des opportunités internationales sans précédent.
                                </p>
                            </div>
                            <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full">
                                <Image
                                    src="/images/porwel.jpg"
                                    alt="network"
                                    fill
                                    className="object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                            </motion.div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="col-span-1 md:col-span-1 bg-[#1e1e1e] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <Zap size={32} className="text-yellow-400 mb-4 relative z-10" />
                            <h3 className="text-xl font-bold mb-2 relative z-10">Vitesse Éclair</h3>
                            <p className="text-gray-300 text-sm relative z-10">Une interface réactive et optimisée pour une expérience fluide.</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="col-span-1 md:col-span-1 bg-white rounded-3xl p-6 shadow-xl border border-gray-100 group hover:border-purple-200 transition-colors"
                        >
                            <Shield size={32} className="text-green-500 mb-4" />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">100% Sécurisé</h3>
                            <p className="text-gray-600 text-sm">Vos données sont cryptées et protégées par les meilleurs standards.</p>
                        </motion.div>

                        {/* Wide Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="col-span-1 md:col-span-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 flex flex-col justify-center items-start shadow-inner border border-white"
                        >
                            <Users size={40} className="text-blue-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Communauté Active</h3>
                            <p className="text-gray-600">Rejoignez une communauté vibrante de plus de 10 000 membres actifs prêts à échanger.</p>
                        </motion.div>

                        {/* Tall Card 5 */}
                        <motion.div className="col-span-1 md:col-span-1 row-span-2 hidden md:block relative rounded-3xl overflow-hidden shadow-xl">
                            <Image src="/images/lesour.jpg" alt="Student" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                <p className="text-white font-bold text-lg">"Une révélation pour ma carrière."</p>
                                <p className="text-gray-300 text-sm mt-2">- Thomas, Étudiant</p>
                            </div>
                        </motion.div>

                        {/* Large Card 6 - Innovation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="col-span-1 md:col-span-3 row-span-2 bg-[#1e1e1e] rounded-3xl p-10 shadow-xl border border-gray-800 relative overflow-hidden group flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                            <div className="relative z-10 max-w-xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/30 border border-blue-500/30 text-blue-400 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider">
                                    <Zap size={14} className="fill-current" /> Innovation
                                </span>
                                <h3 className="text-4xl font-bold text-white mb-6">Propulsez votre entreprise.</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Accédez à des analytics avancés, identifiez les talents émergents avant vos concurrents et construisez une marque employeur forte au sein d'une communauté engagée.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                        Espace Entreprise
                                    </button>
                                    <button className="text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors border border-white/20">
                                        Voir la démo
                                    </button>
                                </div>
                            </div>

                            {/* Abstract Graph/Visual */}
                            <div className="absolute bottom-0 right-0 w-1/2 h-2/3 opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                                <div className="relative w-full h-full">
                                    <div className="absolute bottom-10 right-10 w-full h-full border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl"></div>
                                    <div className="absolute bottom-20 right-20 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-tl-3xl backdrop-blur-sm border-t border-l border-white/10"></div>
                                    <div className="absolute bottom-12 right-12 text-6xl font-black text-white/5">+124%</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Scrolling Marquee / Trust Section */}
            <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
                <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Ils nous font confiance</p>
                <div className="flex gap-16 animate-marquee whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-grayscale duration-500">
                    {/* Repeat logos for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-2xl font-bold text-gray-400">XCCM2</span>
                            <span className="text-2xl font-bold text-gray-400">YOWYOB</span>
                            <span className="text-2xl font-bold text-gray-400">TIIBNTICK</span>
                            <span className="text-2xl font-bold text-gray-400">POLYCLINIC</span>
                            <span className="text-2xl font-bold text-gray-400">FULTANG</span>
                            <span className="text-2xl font-bold text-gray-400">UML2CODE</span>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            {/* How It Works - Minimalist Steps */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 -z-10"></div>

                        {[
                            { title: "Créez votre profil", desc: "Personnalisez votre espace en quelques clics.", icon: Star },
                            { title: "Connectez-vous", desc: "Trouvez des mentors et des pairs inspirants.", icon: Users },
                            { title: "Évoluez", desc: "Partagez et recevez des feedbacks constructifs.", icon: MessageCircle }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white p-6 text-center"
                            >
                                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-purple-50 flex items-center justify-center mb-6 shadow-lg relative z-10">
                                    <step.icon size={32} className="text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-500">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials - Tall Cards Horizontal */}
            <section className="py-32 bg-[#0c0b0b] relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">La communauté s'exprime</h2>
                        <p className="text-xl text-gray-400">Découvrez les retours de ceux qui ont transformé leur carrière.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
                                quote: "Le meilleur outil pour valider mes compétences.",
                                author: "Sarah, Data Analyst",
                                role: "Freelance"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
                                quote: "J'ai trouvé mon associé grâce au réseau !",
                                author: "Marc, CEO",
                                role: "Tech Innov"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
                                quote: "Des feedbacks constructifs qui m'ont fait grandir.",
                                author: "Julie, Designer",
                                role: "Agence Créa"
                            },
                            {
                                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
                                quote: "Une plateforme indispensable pour mon alternance.",
                                author: "Thomas, Étudiant",
                                role: "Master 2"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-800"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.author}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white font-bold text-xl leading-snug mb-4">"{item.quote}"</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-0.5 bg-purple-500 rounded-full"></div>
                                            <div>
                                                <p className="text-white font-bold text-sm">{item.author}</p>
                                                <p className="text-gray-400 text-xs">{item.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA - Dark Mode */}
            <section className="py-32 bg-[#0c0b0b] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center fixed-bg"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Prêt à transformer votre avenir ?</h2>
                        <p className="text-xl text-gray-400 mb-12">Rejoignez la révolution du feedback professionnel dès aujourd'hui.</p>
                        <Link
                            href="/auth/signup"
                            className="inline-block px-12 py-5 bg-white text-black text-lg font-bold rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
                        >
                            Commencer l'aventure
                        </Link>
                    </motion.div>
                </div>
            </section>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </div>
    );
}