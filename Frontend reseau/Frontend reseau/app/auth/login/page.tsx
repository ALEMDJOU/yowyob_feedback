"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { useTranslation } from '@/components/I18nProvider';

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Hero/Image */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-[#0c0b0b] text-white p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-black/60"></div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft size={20} /> Retour à l'accueil
          </Link>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Connectez-vous à <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">l'excellence.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            Rejoignez votre réseau professionnel et partagez vos expériences de stage et d'alternance avec une communauté engagée.
          </p>
        </div>

        <div className="relative z-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Yowyob Feedback. Tous droits réservés.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#F8FAFC]">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center lg:text-left">
            <Image src="/images/logo.jpg" alt="Logo" width={60} height={60} className="mx-auto lg:mx-0 mb-4 rounded-xl shadow-sm" />
            <h2 className="text-3xl font-bold text-gray-900">{t('header.login')}</h2>
            <p className="mt-2 text-gray-600">Bon retour ! Entrez vos identifiants pour continuer.</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                    placeholder="nom@entreprise.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">{t('auth.password')}</label>
                  <Link href="/auth/forgot-password" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                    {t('auth.forgotPassword')}
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400 group-focus-within:text-purple-600 transition-colors" />
                  </div>
                  <input
                    type="password"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                {t('auth.rememberMe')}
              </label>
            </div>

            <Link
              href="/dashboard/feed"
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all transform hover:-translate-y-0.5"
            >
              {t('auth.loginButton')}
            </Link>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#F8FAFC] text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/448234/microsoft.svg" alt="Microsoft" className="h-5 w-5 mr-2" />
                Microsoft
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {t('auth.noAccount')} <Link href="/auth/signup" className="font-bold text-purple-600 hover:text-purple-500">{t('auth.registerTitle')}</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
