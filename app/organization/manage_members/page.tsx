'use client';

import React, { useState, useEffect } from 'react';
// Icônes nécessaires pour la gestion : ajouter, modifier, supprimer, chercher
import { 
    Search, UserPlus, Trash2, Edit3, Settings, LogOut, 
    Home, MessageSquare, Briefcase, ChevronUp, ChevronDown, Users
} from 'lucide-react';
// Import du fichier CSS spécifique à cette page
import './management.css';
import Image from 'next/image';
import { useTranslation } from '@/components/commons/I18nProvider';

// ----------------------------------------------------------------
// INTERFACES ET DONNÉES SIMULÉES
// ----------------------------------------------------------------

type MemberRole = 'Admin' | 'Editor' | 'Member';

interface Member {
    id: number;
    name: string;
    email: string;
    role: MemberRole;
    status: 'Active' | 'Inactive' | 'Pending';
    joinedDate: string;
}

const initialMembers: Member[] = [
    { id: 1, name: "Jean Dupont", email: "jean.dupont@org.com", role: 'Admin', status: 'Active', joinedDate: "2023-01-15" },
    { id: 2, name: "Sophie Martin", email: "sophie.martin@org.com", role: 'Editor', status: 'Active', joinedDate: "2023-03-22" },
    { id: 3, name: "Marc Lefevre", email: "marc.lefevre@org.com", role: 'Member', status: 'Pending', joinedDate: "2023-06-01" },
    { id: 4, name: "Léa Girard", email: "lea.girard@org.com", role: 'Member', status: 'Inactive', joinedDate: "2024-02-10" },
    { id: 5, name: "Antoine Petit", email: "antoine.petit@org.com", role: 'Admin', status: 'Active', joinedDate: "2024-05-18" },
];

type SortKey = keyof Member;

// ----------------------------------------------------------------
// COMPOSANT PRINCIPAL
// ----------------------------------------------------------------

export default function MemberManagementPage() {
    const { t } = useTranslation();
    const [members, setMembers] = useState<Member[]>(initialMembers);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'ascending' | 'descending' } | null>(null);
    const [memberToDelete, setMemberToDelete] = useState<Member | null>(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);


    // ----------------------------------------------------------------
    // LOGIQUE DE FILTRAGE ET RECHERCHE
    // ----------------------------------------------------------------
    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ----------------------------------------------------------------
    // LOGIQUE DE TRI
    // ----------------------------------------------------------------
    const sortedMembers = React.useMemo(() => {
        let sortableItems = [...filteredMembers];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const aValue = String(a[sortConfig.key]);
                const bValue = String(b[sortConfig.key]);

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [filteredMembers, sortConfig]);

    const requestSort = (key: SortKey) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key: SortKey) => {
        if (!sortConfig || sortConfig.key !== key) return null;
        return sortConfig.direction === 'ascending' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
    };

    // ----------------------------------------------------------------
    // LOGIQUE DE GESTION DES MEMBRES
    // ----------------------------------------------------------------

    // Fonction de suppression (simulée)
    const confirmDelete = () => {
        if (memberToDelete) {
            setMembers(members.filter(m => m.id !== memberToDelete.id));
            setMemberToDelete(null); // Ferme la modale de confirmation
            console.log(`Membre ${memberToDelete.name} supprimé.`);
        }
    };
    
    // Fonction d'ajout (simulée)
    const handleAddMember = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logique d'ajout...
        console.log("Tentative d'ajout d'un nouveau membre...");
        setIsAddModalOpen(false);
    };

    // Placeholder pour la Sidebar (réutilise la structure du dashboard)
    const Sidebar = () => (
        <aside className="sidebar">
            <h2>Yowyob Feedback</h2>
            <nav>
                <ul>
                    <li><a href="#"><Home size={20} />{t('user.dashboard.title')}</a></li>
                    <li><a href="#"><MessageSquare size={20} />{t('user.dashboard.recentReviewsTitle')}</a></li>
                    <li className="active-item"><a href="#"><Users size={20} />{t('management.title')}</a></li> 
                    <li><a href="#"><Settings size={20} />{t('header.features')}</a></li>
                    <li><a href="#"><LogOut size={20} />{t('header.contact')}</a></li>
                </ul>
            </nav>
            <div className="sidebar-profile">
                <Image 
                    src="/lor1.jpg" 
                    alt="Profil Admin" 
                    width={60} 
                    height={60} 
                    style={{ borderRadius: '50%', marginBottom: '10px' }} 
                />
                <p style={{ color: 'var(--gray-light)', fontSize: '0.9em' }}>Admin : **Henri**</p>
            </div>
        </aside>
    );

    // Composant Modale de Confirmation de Suppression
    const DeleteConfirmationModal = () => {
        if (!memberToDelete) return null;
        
        return (
            <div className="modal-overlay">
                <div className="modal-content danger">
                    <h3>{t('management.confirmDeleteTitle')}</h3>
                    <p>{t('management.confirmDeleteText').replace('{name}', memberToDelete.name).replace('{email}', memberToDelete.email)}</p>
                    <p className="warning-text">{t('management.irreversible')}</p>
                    <div className="modal-actions">
                        <button className="btn-secondary" onClick={() => setMemberToDelete(null)}>{t('management.cancel')}</button>
                        <button className="btn-danger" onClick={confirmDelete}>{t('management.delete')}</button>
                    </div>
                </div>
            </div>
        );
    };

    // Composant Modale d'Ajout de Membre
    const AddMemberModal = () => {
        if (!isAddModalOpen) return null;

        return (
            <div className="modal-overlay">
                <div className="modal-content primary-theme">
                    <span className="close-button" onClick={() => setIsAddModalOpen(false)}>&times;</span>
                    <h3>{t('management.addModalTitle')}</h3>
                    <form onSubmit={handleAddMember} className="add-member-form">
                        <input type="text" placeholder="Nom Complet" required />
                        <input type="email" placeholder="Adresse Email" required />
                        <select required>
                            <option value="">Sélectionner un Rôle</option>
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editeur</option>
                            <option value="Member">Membre</option>
                        </select>
                        <button type="submit" className="btn-primary">{t('management.addModalSubmit')}</button>
                    </form>
                </div>
            </div>
        );
    };


    // Rendu Principal
    return (
        <div className="management-layout">
            <Sidebar />

            <main className="management-content">
                
                <h1><Users size={32} style={{ verticalAlign: 'middle', marginRight: '10px' }} /> {t('management.title')}</h1>

                {/* --- Barre de Contrôle --- */}
                <div className="controls-bar">
                    
                    {/* Recherche */}
                    <div className="search-input-group">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder={t('management.searchPlaceholder')}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    
                    {/* Bouton Ajouter */}
                    <button className="btn-primary add-button" onClick={() => setIsAddModalOpen(true)}>
                        <UserPlus size={20} style={{ marginRight: '8px' }}/> {t('management.addMember')}
                    </button>
                </div>

                {/* --- Tableau des Membres --- */}
                <div className="member-table-container">
                    <table className="member-table">
                        <thead>
                            <tr>
                                {/* En-têtes cliquables pour le tri */}
                                {(['name', 'email', 'role', 'status', 'joinedDate'] as SortKey[]).map((key) => (
                                    <th key={key} onClick={() => requestSort(key)} className="sortable">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}
                                        {getSortIcon(key)}
                                    </th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedMembers.map((member) => (
                                <tr key={member.id} className="member-row">
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td className={`role-cell role-${member.role.toLowerCase()}`}>{member.role}</td>
                                    <td className={`status-cell status-${member.status.toLowerCase()}`}>{member.status}</td>
                                    <td>{member.joinedDate}</td>
                                    <td className="action-cell">
                                        <button className="btn-icon edit-btn" title="Modifier"><Edit3 size={18} /></button>
                                        <button 
                                            className="btn-icon delete-btn" 
                                            title="Supprimer" 
                                            onClick={() => setMemberToDelete(member)}
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {members.length === 0 && <p className="no-data">{t('management.noMembers')}</p>}
                </div>
            </main>

            {/* Modales (Toujours affichées en dernier plan) */}
            <DeleteConfirmationModal />
            <AddMemberModal />
        </div>
    );
}