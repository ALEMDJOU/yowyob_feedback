// app/auth/register/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/commons/I18nProvider';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!name || !(email || phone) || !password || !confirm) {
      setError(t('auth.errors.fillAll'));
      return;
    }
    if (password !== confirm) {
      setError(t('auth.errors.passwordMismatch'));
      return;
    }
    // TODO: appeler l'API d'inscription
    console.log('Inscription', { name, email, phone });
    alert(t('auth.simulated'));
  }

  const { t } = useTranslation();

  return (
    <main className="auth-page">
      <div className="auth-card animate-on-scroll visible">
        <div className="auth-brand">
          <Image src="/lor1.jpg" alt="Yowyob" width={64} height={64} />
          <h1>{t('auth.registerTitle')}</h1>
        </div>

        <p className="muted">{t('auth.registerMuted')}</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="input-group">
            <span>{t('profileEdit.firstName')}</span>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Ex: Jean Dupont" />
          </label>

          <label className="input-group">
            <span>{t('auth.emailOrPhone')}</span>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email@exemple.com" />
          </label>

          <label className="input-group">
            <span>{t('profileEdit.contact')}</span>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+2376XXXXXXX" />
          </label>

          <label className="input-group">
            <span>{t('auth.password')}</span>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Mot de passe" />
          </label>

          <label className="input-group">
            <span>{t('profileEdit.confirmPassword')}</span>
            <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} placeholder="Confirmez" />
          </label>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="btn btn-primary btn-large auth-submit">{t('auth.registerButton')}</button>
        </form>

        <div className="auth-footer">
          <p>{t('auth.alreadyRegistered')} <Link href="/auth/login">{t('auth.loginButton')}</Link></p>
        </div>
      </div>
    </main>
  );
}
