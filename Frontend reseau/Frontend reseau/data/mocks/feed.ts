import { FeedbackData } from '@/types/feed';

const getAvatar = (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128`;

export const INITIAL_FEEDBACKS: FeedbackData[] = [
    {
        id: '1',
        author: 'Tech Innov S.A.',
        authorAvatar: getAvatar('Tech Innov'),
        authorHeadline: 'Entreprise Leader en Tech',
        time: '5 min',
        project: {
            id: 'p1',
            name: 'Quantum Leap Project',
            description: 'Développement d\'un ordinateur quantique accessible.'
        },
        content: 'Nous sommes ravis d\'annoncer la phase de test beta de "Quantum Leap" ! Vos premiers feedbacks sont précieux pour notre équipe R&D.',
        likes: 12,
        liked: false,
        comments: [
            {
                id: 'c1',
                author: 'Marie Dubois',
                text: 'Très intéressant ! J\'ai hâte de tester l\'interface admin 🎉',
                avatar: getAvatar('Marie Dubois'),
                likes: 3,
                liked: false,
                replies: []
            }
        ],
        type: 'business'
    },
    {
        id: '2',
        author: 'Jean Duport',
        authorAvatar: getAvatar('Jean Duport'),
        authorHeadline: 'Développeur Frontend Senior',
        time: '1 h',
        project: {
            id: 'p2',
            name: 'Refonte Site E-commerce',
            description: 'Modernisation de la stack technique vers Next.js 14.'
        },
        content: 'J\'ai terminé l\'intégration de la maquette sur le projet E-commerce. Le framework React 19 change vraiment la donne au niveau des performances !',
        likes: 45,
        liked: false,
        comments: [],
        type: 'person'
    },
    {
        id: '3',
        author: 'Sophie Martin',
        authorAvatar: getAvatar('Sophie Martin'),
        authorHeadline: 'UX Designer',
        time: '2 j',
        project: {
            id: 'p3',
            name: 'Application Mobile Yowyob',
            description: 'Optimisation du parcours utilisateur.'
        },
        content: 'Les tests utilisateurs sur le nouveau workflow d\'inscription sont concluants. Merci à tous pour vos retours constructifs !',
        likes: 108,
        liked: true,
        comments: [],
        type: 'person'
    },
    {
        id: '4',
        author: 'Lucas Bernard',
        authorAvatar: getAvatar('Lucas Bernard'),
        authorHeadline: 'Data Scientist @ AI Corp',
        time: '3 j',
        project: {
            id: 'p4',
            name: 'Prédiction des Ventes IA',
            description: 'Modèle prédictif pour le retail.'
        },
        content: 'Notre modèle atteint enfin 95% de précision. Je partage les graphiques de performance. Qu\'en pensez-vous ?',
        likes: 230,
        liked: false,
        comments: [],
        type: 'person'
    },
    {
        id: '5',
        author: 'GreenEnergy Ltd.',
        authorAvatar: getAvatar('Green Energy'),
        authorHeadline: 'Solutions Durables',
        time: '5 j',
        project: {
            id: 'p5',
            name: 'Panneaux Solaires Intelligents',
            description: 'Installation pilote à Lyon.'
        },
        content: 'Installation terminée sur le site pilote de Lyon. La production d\'énergie dépasse nos attentes de 15%.',
        likes: 89,
        liked: true,
        comments: [],
        type: 'business'
    }
];

export const SUGGESTED_FOLLOWS = [
    { id: '1', name: 'Henri Fofack', avatar: getAvatar('Henri Fofack'), subtitle: 'Développeur Fullstack', type: 'person' },
    { id: '2', name: 'StartUp Nation', avatar: getAvatar('StartUp Nation'), subtitle: 'Incubateur', type: 'business' },
    { id: '3', name: 'Marc Z.', avatar: getAvatar('Marc Z'), subtitle: 'CTO @ Meta', type: 'person' }
];

export const TRENDING_PROJECTS = [
    { id: 'tp1', name: 'IA Générative 2025', views: '12k' },
    { id: 'tp2', name: 'Hackathon Yowyob', views: '8.5k' },
    { id: 'tp3', name: 'Green Tech Initiative', views: '5k' },
    { id: 'tp4', name: 'Smart City Lyon', views: '3.2k' },
    { id: 'tp5', name: 'EdTech Africa', views: '2.8k' },
];
