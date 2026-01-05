export interface Publication {
    slug: string;
    title: string;
    venue: string;
    date: string;
    description: string;
    thumbnail: string;
    externalUrl: string;
    about: string;
    info: {
        venue: string;
        date: string;
        type: string;
        doi?: string;
    };
    sections: {
        heading: string;
        content: string;
    }[];
}

export const publications: Publication[] = [
    {
        slug: 'metasounds-adaptive-radio',
        title: 'Adaptive Radio System Using MetaSounds for Serious VR Game',
        venue: 'IEEE Access',
        date: 'Nov 2, 2025',
        description: 'This journal article is about building an adaptive in-game radio for VR that reacts to player context using Unreal Engine\'s MetaSounds and a finite-state machine.',
        thumbnail: '/images/metasounds.jpg',
        externalUrl: 'https://ieeexplore.ieee.org/abstract/document/11223216',
        about: 'This journal article is about building an adaptive in-game radio for VR that reacts to player context using Unreal Engine\'s MetaSounds and a finite-state machine.',
        info: {
            venue: 'IEEE Access',
            date: 'November 2, 2025',
            type: 'Journal Article',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'Instead of fixed playlists, the system switches between three affective music states: Happy, Excited, and Intense with smooth crossfades, loudness balancing, and optional beat-synced transitions.' },
            { heading: 'RESULTS', content: 'Tested with 30 VR users, the approach was rated intuitive and more immersive than non-adaptive audio, suggesting that this engine-native MetaSounds–FSM method can meaningfully enhance engagement in serious VR experiences.' },
        ],
    },
    {
        slug: 'context-aware-recommender',
        title: 'Context-Aware Recommender System for In-Game Radio',
        venue: 'INASS International Journal of Intelligent Engineering and Systems',
        date: 'Sep 2, 2024',
        description: 'This journal presents a context-aware recommender system (CARS) for in-game radio that adapts music selection based on real-time factors.',
        thumbnail: '/images/cars.jpg',
        externalUrl: 'https://inass.org/',
        about: 'This journal presents a context-aware recommender system (CARS) for in-game radio that adapts music selection based on real-time factors like weather, time of day, player status, and in-game seasons.',
        info: {
            venue: 'INASS IJIES',
            date: 'September 2, 2024',
            type: 'Journal Article',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'By leveraging deep learning and hybrid filtering, the system achieved F1 scores up to 0.71 and outperformed traditional recommendation methods.' },
            { heading: 'RESULTS', content: 'The results highlight how dynamic, context-driven audio can enhance immersion and player engagement through smarter, personalized music experiences.' },
        ],
    },
    {
        slug: 'dynamic-day-night-vr',
        title: 'Dynamic Day and Night Cycle Impact in a Serious VR Game',
        venue: 'ICVR 2024 International Conference on Virtual Reality',
        date: '2024',
        description: 'This paper explores how a real-time day and night cycle can boost immersion, strategy, and visual fidelity in serious VR games.',
        thumbnail: '/images/daynight.jpg',
        externalUrl: 'https://ieeexplore.ieee.org/document/10868976/metrics#metrics',
        about: 'This paper explores how a real-time day and night cycle—compressed into a 10-minute gameplay loop—can boost immersion, strategy, and visual fidelity in serious VR games.',
        info: {
            venue: 'ICVR 2024',
            date: '2024',
            type: 'Conference Paper',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'The system dynamically affects gameplay mechanics, requiring players to adapt to changing conditions such as resource shifts and operational challenges.' },
            { heading: 'RESULTS', content: 'Research findings show up to a 25% improvement in player immersion and a notable increase in strategic depth, highlighting the value of environmental systems in crafting more engaging VR experiences.' },
        ],
    },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
    return publications.find(p => p.slug === slug);
}
