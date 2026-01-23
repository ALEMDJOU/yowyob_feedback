'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Building2, Mail, Phone, Lock, Hash, MapPin, Briefcase } from 'lucide-react';

export default function SignupPage() {
    const [userType, setUserType] = useState<'individual' | 'company'>('individual');

    return (
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Hero/Image */}
            <div className="hidden lg:flex flex-col justify-between w-5/12 bg-[#0c0b0b] text-white p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/60"></div>

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                        <ArrowLeft size={20} /> Retour à l'accueil
                    </Link>
                </div>

                <div className="relative z-10 space-y-6">
                    <h1 className="text-4xl font-bold leading-tight">
                        Créez votre compte <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yowyob Premium.</span>
                    </h1>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-center gap-3">
                            <div className="p-1.5 bg-green-500/20 rounded-full text-green-400"><Briefcase size={16} /></div>
                            Accédez à des milliers d'avis vérifiés
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="p-1.5 bg-green-500/20 rounded-full text-green-400"><Briefcase size={16} /></div>
                            Connectez-vous avec les recruteurs
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="p-1.5 bg-green-500/20 rounded-full text-green-400"><Briefcase size={16} /></div>
                            Boostez votre carrière pro
                        </li>
                    </ul>
                </div>

                <div className="relative z-10 text-sm text-gray-500">
                    © {new Date().getFullYear()} Yowyob Feedback.
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-7/12 flex items-center justify-center p-8 bg-[#F8FAFC]">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-xl"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Bienvenue sur Yowyob</h2>
                        <p className="text-gray-600 mt-2">Commencez votre aventure dès aujourd'hui.</p>
                    </div>

                    <div className="bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm flex mb-8">
                        <button
                            type="button"
                            onClick={() => setUserType('individual')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${userType === 'individual'
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <User size={18} /> Candidat / Étudiant
                        </button>
                        <button
                            type="button"
                            onClick={() => setUserType('company')}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${userType === 'company'
                                    ? 'bg-purple-600 text-white shadow-md'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            <Building2 size={18} /> Entreprise / Recruteur
                        </button>
                    </div>

                    <form className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {userType === 'individual' ? 'Nom complet' : 'Raison sociale'}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        {userType === 'individual' ? <User size={18} /> : <Building2 size={18} />}
                                    </div>
                                    <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="John Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Mail size={18} /></div>
                                    <input type="email" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Phone size={18} /></div>
                                    <input type="tel" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="+33 6..." />
                                </div>
                            </div>

                            {userType === 'company' ? (
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Siège social</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><MapPin size={18} /></div>
                                        <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Paris, France" />
                                    </div>
                                </div>
                            ) : (
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Situation actuelle</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Briefcase size={18} /></div>
                                        <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Étudiant, En recherche..." />
                                    </div>
                                </div>
                            )}

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Lock size={18} /></div>
                                    <input type="password" className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="8+ caractères" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-gray-700">J'accepte les <a href="#" className="text-purple-600 hover:text-purple-500">Conditions d'utilisation</a></label>
                            </div>
                        </div>

                        <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all transform hover:-translate-y-0.5">
                            Créer mon compte
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600">
                        Vous avez déjà un compte ? <Link href="/auth/login" className="font-bold text-purple-600 hover:text-purple-500">Se connecter</Link>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
