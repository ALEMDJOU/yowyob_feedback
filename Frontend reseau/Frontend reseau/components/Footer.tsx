"use client";
import React from 'react';
import Image from 'next/image';
import { useTranslation } from './I18nProvider';
import { Mail, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#0c0b0b] text-gray-400 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Image
                            src="/images/logo.jpg"
                            alt="Yowyob"
                            width={140}
                            height={45}
                            className="h-10 w-auto" // Increased size slightly
                        />
                        <p className="text-sm leading-relaxed text-gray-500">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            Navigation
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#features" className="hover:text-purple-400 transition-colors">{t('header.features')}</a></li>
                            <li><a href="#how-it-works" className="hover:text-purple-400 transition-colors">{t('header.howItWorks')}</a></li>
                            <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">{t('header.testimonials')}</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Légal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Politique de confidentialité</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Conditions d'utilisation</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Mentions légales</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">{t('footer.contactTitle')}</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-purple-500" />
                                <span>{t('footer.email')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-purple-500" />
                                <span>{t('footer.phone')}</span>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Yowyob Feedback. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}