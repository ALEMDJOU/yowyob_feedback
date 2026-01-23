"use client";

import React from 'react';
import { Folder, Clock, CheckCircle, MoreHorizontal, Users, BarChart3, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock Data for Projects
const MY_PROJECTS = [
    {
        id: '1',
        name: 'Quantum Leap Integration',
        description: 'Intégration du module quantique dans l\'architecture existante.',
        status: 'In Progress',
        role: 'Owner',
        members: 8,
        progress: 65,
        lastUpdate: '2h ago',
        color: 'bg-blue-900/30 text-blue-400',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '2',
        name: 'Refonte UX Mobile',
        description: 'Modernisation du parcours client sur l\'application iOS/Android.',
        status: 'Review',
        role: 'Contributor',
        members: 12,
        progress: 90,
        lastUpdate: '5h ago',
        color: 'bg-purple-900/30 text-purple-400',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '3',
        name: 'Migration Cloud AWS',
        description: 'Migration des serveurs legacy vers AWS EC2 & Lambda.',
        status: 'Planning',
        role: 'Admin',
        members: 5,
        progress: 15,
        lastUpdate: '1d ago',
        color: 'bg-orange-900/30 text-orange-400',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '4',
        name: 'Green AI Initiative',
        description: 'Réduction de l\'empreinte carbone de nos modèles IA.',
        status: 'In Progress',
        role: 'Owner',
        members: 24,
        progress: 42,
        lastUpdate: '2d ago',
        color: 'bg-green-900/30 text-green-400',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '5',
        name: 'Dashboard Analytics v2',
        description: 'Nouveaux indicateurs de performance en temps réel.',
        status: 'Completed',
        role: 'Contributor',
        members: 6,
        progress: 100,
        lastUpdate: '1w ago',
        color: 'bg-gray-800 text-gray-400',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
    }
];

export default function ProjectsPage() {
    return (
        <div className="space-y-6">
            {/* Header Card */}
            <div className="bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-800 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Mes Projets</h1>
                    <p className="text-gray-400 text-sm mt-1">Gérez vos initiatives et collaborez avec votre équipe.</p>
                </div>
                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md shadow-purple-900/20">
                    <Plus size={18} /> Nouveau Projet
                </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MY_PROJECTS.map((project) => (
                    <div key={project.id} className="bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-800 hover:border-purple-500/30 hover:shadow-purple-900/10 transition-all overflow-hidden group">
                        {/* Cover Image */}
                        <div className="relative h-40 w-full">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent opacity-80"></div>
                            <div className="absolute top-3 right-3">
                                <button className="text-white/80 hover:text-white p-1 rounded-full bg-black/20 backdrop-blur-sm">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="p-5 -mt-2 relative">
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center -mt-8 shadow-lg ${project.color} bg-[#1e1e1e] border border-gray-700`}>
                                    <Folder size={18} />
                                </div>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${project.status === 'Completed' ? 'bg-green-900/20 text-green-400 border-green-900/50' :
                                        project.status === 'In Progress' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                                            project.status === 'Review' ? 'bg-purple-900/20 text-purple-400 border-purple-900/50' :
                                                'bg-gray-800 text-gray-400 border-gray-700'
                                    }`}>
                                    {project.status.toUpperCase()}
                                </span>
                            </div>

                            <Link href={`/dashboard/projects/${project.id}`} className="block">
                                <h3 className="font-bold text-white text-lg hover:text-purple-400 transition-colors mb-2">
                                    {project.name}
                                </h3>
                            </Link>

                            <p className="text-sm text-gray-400 line-clamp-2 mb-4 h-10">
                                {project.description}
                            </p>

                            <div className="space-y-3">
                                {/* Progress Bar */}
                                <div>
                                    <div className="flex justify-between text-[10px] font-semibold text-gray-500 mb-1">
                                        <span>PROGRESSION</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                                        <div
                                            className={`h-1.5 rounded-full ${project.progress === 100 ? 'bg-green-500' : 'bg-purple-500'
                                                }`}
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-800">
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />
                                        <span>{project.members} membres</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{project.lastUpdate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
