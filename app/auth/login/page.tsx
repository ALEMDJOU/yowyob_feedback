// app/auth/login/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/commons/I18nProvider';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError(t('auth.errors.fillAll'));
      return;
    }
    // TODO: appeler l'API d'authentification
    console.log('Connexion', { email, password });
    // Simuler succès
    alert(t('auth.simulated'));
  }
  const { t } = useTranslation();

  return (
    <main className="auth-page">
      <div className="auth-card animate-on-scroll visible">
        <div className="auth-brand">
          <Image src="/lor1.jpg" alt="Yowyob" width={64} height={64} />
          <h1>{t('auth.loginTitle')}</h1>
        </div>

        <p className="muted">{t('auth.loginMuted')}</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="input-group">
            <span>{t('auth.emailOrPhone')}</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: john@exemple.com ou +237677777777"
              aria-label="Email ou Téléphone"
            />
          </label>

          <label className="input-group">
            <span>{t('auth.password')}</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
              aria-label="Mot de passe"
            />
          </label>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="btn btn-primary btn-large auth-submit">{t('auth.loginButton')}</button>
        </form>

        <div className="auth-footer">
          <p>{t('auth.noAccount')} <Link href="/auth/register">{t('auth.registerLink')}</Link></p>
          <div className="social-login">
            <small>Ou connectez-vous avec</small>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Image src="/images/facebook.jpeg" alt="Facebook" width={32} height={32} /></a>
              <a href="#" aria-label="X"><Image src="/images/X.png" alt="X" width={32} height={32} /></a>
              <a href="#" aria-label="LinkedIn"><Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} /></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
