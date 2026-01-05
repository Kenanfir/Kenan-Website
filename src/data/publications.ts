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
    // 2025
    {
        slug: 'metasounds-adaptive-radio',
        title: 'Adaptive Radio System Using MetaSounds for Serious VR Game',
        venue: 'IEEE Access',
        date: 'Nov 2, 2025',
        description: 'This journal article is about building an adaptive in-game radio for VR that reacts to player context using Unreal Engine\'s MetaSounds and a finite-state machine.',
        thumbnail: '/images/metasounds.jpg',
        externalUrl: 'https://ieeexplore.ieee.org/abstract/document/11223216',
        about: 'This journal article is about building an adaptive in-game radio for VR that reacts to player context using Unreal Engine\'s MetaSounds and a finite-state machine. Instead of fixed playlists, the system switches between three affective music states: Happy, Excited, and Intense with smooth crossfades, loudness balancing, and optional beat-synced transitions. Tested with 30 VR users, the approach was rated intuitive and more immersive than non-adaptive audio, suggesting that this engine-native MetaSounds–FSM method can meaningfully enhance engagement in serious VR experiences.',
        info: {
            venue: 'IEEE Access',
            date: 'November 2, 2025',
            type: 'Journal Article',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'Building an adaptive in-game radio for VR using MetaSounds and FSM.' },
            { heading: 'RESULTS', content: 'Tested with 30 VR users, rated intuitive and more immersive than non-adaptive audio.' },
        ],
    },
    {
        slug: 'procedural-audio-metasounds',
        title: 'Real Time Procedural Audio for Immersive Gameplay with MetaSounds',
        venue: 'TCCE 2025',
        date: '2025',
        description: 'This journal article is about creating real-time procedural environmental audio such as rain, wind, and thunder using Unreal Engine\'s MetaSounds system.',
        thumbnail: '/images/procedural.jpg',
        externalUrl: '#',
        about: 'This journal article is about creating real-time procedural environmental audio such as rain, wind, and thunder using Unreal Engine\'s MetaSounds system. Instead of relying on large pre-recorded sound libraries, the authors generate sounds dynamically with noise generators, filters, envelopes, and modulation nodes. Their results show that procedural audio greatly reduces storage and memory usage while still sounding realistic, with only a small increase in CPU/GPU load. The paper argues that MetaSounds is an efficient and immersive way to design game audio and could be extended with AI for future adaptive sound systems.',
        info: {
            venue: 'TCCE 2025, Trends in Computational and Cognitive Engineering',
            date: '2025',
            type: 'Journal Article',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'Real-time procedural audio generation for environmental sounds.' },
            { heading: 'RESULTS', content: 'Greatly reduces storage while maintaining realistic sound quality.' },
        ],
    },
    // 2024
    {
        slug: 'dda-qlearning-fuzzy',
        title: 'Dynamic Level of Difficulties Using Q-Learning and Fuzzy Logic',
        venue: 'IEEE Access',
        date: 'Sep 12, 2024',
        description: 'This journal introduces a dynamic difficulty adjustment (DDA) system that combines fuzzy logic and Q-learning to improve player engagement.',
        thumbnail: '/images/dda.jpg',
        externalUrl: 'https://ieeexplore.ieee.org/',
        about: 'This journal introduces a dynamic difficulty adjustment (DDA) system that combines fuzzy logic and Q-learning to improve player engagement in serious management games. By adapting game complexity based on real-time performance and player behavior, the system increased session length by 35% and overall player effectiveness by 28%. The results show a significant boost in satisfaction and replayability through smarter, more personalized difficulty tuning.',
        info: {
            venue: 'IEEE Access',
            date: 'September 12, 2024',
            type: 'Journal Article',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'DDA system combining fuzzy logic and Q-learning for player engagement.' },
            { heading: 'RESULTS', content: 'Increased session length by 35% and player effectiveness by 28%.' },
        ],
    },
    {
        slug: 'context-aware-recommender',
        title: 'Enhancing Serious Game Experience Through In-Game Radio Using Context-Aware Recommender System Based on Player Behavior',
        venue: 'INASS IJIES',
        date: 'Sep 2, 2024',
        description: 'This journal presents a context-aware recommender system (CARS) for in-game radio that adapts music selection based on real-time factors.',
        thumbnail: '/images/cars.jpg',
        externalUrl: 'https://inass.org/',
        about: 'This journal presents a context-aware recommender system (CARS) for in-game radio that adapts music selection based on real-time factors like weather, time of day, player status, and in-game seasons. By leveraging deep learning and hybrid filtering, the system achieved F1 scores up to 0.71 and outperformed traditional recommendation methods. The results highlight how dynamic, context-driven audio can enhance immersion and player engagement through smarter, personalized music experiences.',
        info: {
            venue: 'INASS International Journal of Intelligent Engineering and Systems',
            date: 'September 2, 2024',
            type: 'Journal Article',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'Context-aware music recommendation based on real-time game factors.' },
            { heading: 'RESULTS', content: 'Achieved F1 scores up to 0.71, outperforming traditional methods.' },
        ],
    },
    {
        slug: 'dynamic-day-night-vr',
        title: 'Dynamic Day and Night Cycle Impact in a Serious VR Game',
        venue: 'ICVR 2024',
        date: '2024',
        description: 'This paper explores how a real-time day and night cycle can boost immersion, strategy, and visual fidelity in serious VR games.',
        thumbnail: '/images/daynight.jpg',
        externalUrl: 'https://ieeexplore.ieee.org/document/10868976/metrics#metrics',
        about: 'This paper explores how a real-time day and night cycle—compressed into a 10-minute gameplay loop—can boost immersion, strategy, and visual fidelity in serious VR games. The system dynamically affects gameplay mechanics, requiring players to adapt to changing conditions such as resource shifts and operational challenges. Research findings show up to a 25% improvement in player immersion and a notable increase in strategic depth, highlighting the value of environmental systems in crafting more engaging VR experiences.',
        info: {
            venue: 'ICVR 2024 International Conference on Virtual Reality',
            date: '2024',
            type: 'Conference Paper',
        },
        sections: [
            { heading: 'ABSTRACT', content: 'Real-time day/night cycle impact on VR game immersion.' },
            { heading: 'RESULTS', content: 'Up to 25% improvement in player immersion and increased strategic depth.' },
        ],
    },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
    return publications.find(p => p.slug === slug);
}
