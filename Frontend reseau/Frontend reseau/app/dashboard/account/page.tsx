"use client";

import React from 'react';
import { Settings, User, Shield, CreditCard, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-purple-900 to-blue-900"></div>
        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-end -mt-10 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Henri+Fofack&background=random&color=fff&size=128"
              alt="Avatar"
              className="w-20 h-20 rounded-full border-4 border-[#1e1e1e]"
            />
            <button className="bg-transparent border border-gray-600 text-gray-300 px-4 py-1.5 rounded-full text-sm font-medium hover:border-white hover:text-white transition-colors">
              Modifier le profil
            </button>
          </div>
          <h1 className="text-2xl font-bold text-white">Henri Fofack</h1>
          <p className="text-gray-400">Développeur Fullstack @ Yowyob Feedback</p>
        </div>
      </div>

      <div className="bg-[#1e1e1e] rounded-xl border border-gray-800 p-6">
        <h2 className="text-lg font-bold text-white mb-4">Paramètres du compte</h2>
        <div className="space-y-2">
          <button className="w-full text-left p-3 rounded-lg hover:bg-white/5 flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <User size={20} className="text-purple-500" /> Informations personnelles
          </button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-white/5 flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Shield size={20} className="text-green-500" /> Sécurité et connexion
          </button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-white/5 flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <CreditCard size={20} className="text-blue-500" /> Abonnement Premium
          </button>
          <button className="w-full text-left p-3 rounded-lg hover:bg-white/5 flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Settings size={20} className="text-gray-500" /> Préférences de l'application
          </button>

          <div className="pt-4 mt-2 border-t border-gray-800">
            <Link href="/auth/login" className="w-full text-left p-3 rounded-lg hover:bg-red-900/10 flex items-center gap-3 text-red-500 hover:text-red-400 transition-colors">
              <LogOut size={20} /> Déconnexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
