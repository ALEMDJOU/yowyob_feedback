
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ForgotPasswordPage() {
    return (
        <div className="auth-page">
            <div className="auth-card auth-staggered">
                <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <Image src="/images/logo.jpg" alt="Logo Yowyob" width={60} height={60} style={{ borderRadius: '50%', objectFit: 'cover' }} />
                </div>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#6A1B9A' }}>Mot de passe oublié</h2>
                <p style={{ marginBottom: '25px', textAlign: 'center', color: '#666' }}>
                    Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
                </p>

                <form className="auth-staggered">
                    <div className="auth-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="auth-form-control"
                            placeholder="votre@email.com"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', marginBottom: '15px' }}>
                        Envoyer le lien
                    </button>
                </form>

                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <Link href="/auth/login" style={{ color: '#6A1B9A', fontWeight: '600' }}>
                        <i className="fas fa-arrow-left"></i> Retour à la connexion
                    </Link>
                </div>
            </div>
        </div>
    );
}
