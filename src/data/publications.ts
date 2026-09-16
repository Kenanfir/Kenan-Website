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
    // 2026
    {
        slug: 'brain-tumor-mri-transfer-learning',
        title: 'Evaluating VGG16, ResNet50, and EfficientNet-B0 for Brain Tumor MRI Classification: A Two-Phase Transfer Learning Approach',
        venue: 'ISIBER 2026',
        date: '2026',
        description: 'A comparison of VGG16, ResNet50, and EfficientNet-B0 for brain tumor MRI classification using a two-phase transfer-learning approach.',
        thumbnail: '/images/braintumor.jpg',
        externalUrl: 'https://doi.org/10.1109/ISIBER68248.2026.11469939',
        about: 'This conference paper compares VGG16, ResNet50, and EfficientNet-B0 for multi-class brain tumor classification from MRI images. It uses a two-phase transfer-learning approach to evaluate how the three convolutional neural network architectures perform on the same classification task.',
        info: {
            venue: '2026 International Seminar on Intelligent Business and Edge-Computing Research (ISIBER)',
            date: 'February 2026',
            type: 'Conference Paper',
            doi: '10.1109/ISIBER68248.2026.11469939',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. A. Damastuti, A. B. Gumelar, K. Firmansyah' },
            { heading: 'SUMMARY', content: 'Comparison of three convolutional neural network architectures for multi-class brain tumor MRI classification using a two-phase transfer-learning approach.' },
        ],
    },
    {
        slug: 'rl-supervised-llm-question-generation',
        title: 'Reinforcement Learning-Supervised LLM Question Generation from Educational Textbooks: A Comparative Study of Prompt Engineering and Post-Hoc Filtering',
        venue: 'ETASR',
        date: 'Jun 2026',
        description: 'A study of LLM-based question generation from educational textbooks, comparing prompt engineering and post-hoc filtering.',
        thumbnail: '/images/rlllm.jpg',
        externalUrl: 'https://doi.org/10.48084/etasr.17900',
        about: 'This journal article studies reinforcement learning-supervised large language model question generation from educational textbooks. It compares prompt engineering and post-hoc filtering as approaches for improving generated questions.',
        info: {
            venue: 'Engineering, Technology & Applied Science Research, Vol. 16(3), pp. 35162–35170',
            date: 'June 2026',
            type: 'Journal Article',
            doi: '10.48084/etasr.17900',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. A. Damastuti, A. B. Gumelar, K. Firmansyah' },
            { heading: 'SUMMARY', content: 'A comparative study of prompt engineering and post-hoc filtering for reinforcement learning-supervised LLM question generation.' },
        ],
    },
    {
        slug: 'adaptive-vr-cybersickness',
        title: 'Toward Adaptive VR Design: Physiological and Cognitive Predictors of Cybersickness in Serious Games',
        venue: 'IJHCI (Taylor & Francis)',
        date: '2026',
        description: 'A study of cybersickness predictors in a VR fishery-management serious game built in Unreal Engine 5, using physiological signals, cognitive load, and session duration.',
        thumbnail: '/images/cybersickness.jpg',
        externalUrl: 'https://www.tandfonline.com/doi/full/10.1080/10447318.2026.2684064',
        about: 'A study of cybersickness predictors in a VR fishery-management serious game built in Unreal Engine 5. We recorded HRV, GSR, and HR from 105 participants and collected post-session cognitive load and duration ratings. Hierarchical regression on 94 complete cases explained 35.8% of the cybersickness variance, with duration dominating (β = 0.87), then cognitive load (β = 0.52) and GSR (β = 0.54). The results point to duration, cognitive load, and GSR as candidate inputs for adaptive VR comfort systems in serious games.',
        info: {
            venue: 'International Journal of Human-Computer Interaction (Taylor & Francis)',
            date: '2026',
            type: 'Journal Article',
            doi: '10.1080/10447318.2026.2684064',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. Annisa Damastuti, K. Firmansyah, Y. M. Arif, R. Yuniar Hakkun, M. Hariadi' },
            { heading: 'ABSTRACT', content: 'Multivariate cybersickness prediction in a free-play VR serious game (UE5 fishery-management sim) using physiological signals, cognitive load, and session duration.' },
            { heading: 'RESULTS', content: 'R² = 0.358 on 94 cases. Duration (β = 0.87), cognitive load (β = 0.52), and GSR (β = 0.54) emerged as the strongest predictors — candidate inputs for adaptive VR comfort systems.' },
        ],
    },
    {
        slug: 'hierarchical-memory-llm-npc',
        title: 'Hierarchical Memory Consolidation and Context-Efficient Retrieval for Persistent Personality in LLM-Based Game NPCs',
        venue: 'SSRN (Preprint)',
        date: '2026',
        description: 'A preprint on hierarchical memory and context-efficient retrieval for persistent personality in LLM-based game NPCs.',
        thumbnail: '/images/llmnpc.jpg',
        externalUrl: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6536138',
        about: 'This preprint presents a three-tier memory architecture for LLM-based game NPCs, combining short-term, episodic, and core memory with context-efficient retrieval. The work focuses on maintaining character personality while managing longer interaction histories.',
        info: {
            venue: 'SSRN Preprint 6536138',
            date: '2026',
            type: 'Preprint (under review)',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. A. Damastuti, K. Firmansyah, A. Barakbah, M. Hariadi' },
            { heading: 'SUMMARY', content: 'Hierarchical memory consolidation and context-efficient retrieval for maintaining persistent personality in LLM-driven game NPCs.' },
        ],
    },
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
            venue: 'IEEE Access (Vol. 13)',
            date: 'November 2, 2025',
            type: 'Journal Article',
            doi: '10.1109/ACCESS.2025.3627544',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. A. Damastuti, K. Firmansyah, Y. M. Arif, D. Pramadihanto, S. Criollo-C' },
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
        externalUrl: 'https://doi.org/10.1109/ACCESS.2024.3457801',
        about: 'This journal introduces a dynamic difficulty adjustment (DDA) system that combines fuzzy logic and Q-learning to improve player engagement in serious management games. By adapting game complexity based on real-time performance and player behavior, the system increased session length by 35% and overall player effectiveness by 28%. The results show a significant boost in satisfaction and replayability through smarter, more personalized difficulty tuning.',
        info: {
            venue: 'IEEE Access (Vol. 12)',
            date: 'September 12, 2024',
            type: 'Journal Article',
            doi: '10.1109/ACCESS.2024.3457801',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. A. Damastuti, K. Firmansyah, Y. M. Arif, T. Dutono, A. Barakbah, M. Hariadi' },
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
        externalUrl: 'https://doi.org/10.22266/ijies2024.1031.26',
        about: 'This journal presents a context-aware recommender system (CARS) for in-game radio that adapts music selection based on real-time factors like weather, time of day, player status, and in-game seasons. By leveraging deep learning and hybrid filtering, the system achieved F1 scores up to 0.71 and outperformed traditional recommendation methods. The results highlight how dynamic, context-driven audio can enhance immersion and player engagement through smarter, personalized music experiences.',
        info: {
            venue: 'INASS International Journal of Intelligent Engineering and Systems',
            date: 'September 2, 2024',
            type: 'Journal Article',
            doi: '10.22266/ijies2024.1031.26',
        },
        sections: [
            { heading: 'AUTHORS', content: 'F. A. Damastuti, K. Firmansyah, Y. M. Arif, T. Dutono, A. Barakbah, M. Hariadi' },
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
            { heading: 'AUTHORS', content: 'F. A. Damastuti, K. Firmansyah, Y. M. Arif, A. R. Barakbah, M. Hariadi' },
            { heading: 'ABSTRACT', content: 'Real-time day/night cycle impact on VR game immersion.' },
            { heading: 'RESULTS', content: 'Up to 25% improvement in player immersion and increased strategic depth.' },
        ],
    },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
    return publications.find(p => p.slug === slug);
}
