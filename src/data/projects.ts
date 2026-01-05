export interface Project {
    slug: string;
    title: string;
    role: string;
    description: string;
    thumbnail: string;
    videoUrl?: string;
    teamSize: number;
    duration: string;
    platform: string;
    year: 'ON_GOING' | '2025' | '2024' | '2023' | '2022';
    about: string;
    info: {
        role: string;
        teamSize: string;
        timeFrame: string;
        engine: string;
    };
    sections: {
        heading: string;
        content: string;
    }[];
}

export const projects: Project[] = [
    // ON_GOING
    {
        slug: 'asset-tracker',
        title: 'Asset Tracker',
        role: 'GAME DEV TOOL',
        description: 'This tool helps Game Developers specially asset creators to push their assets straight in to the Git project with only some push of a button.',
        thumbnail: '/images/asset-tracker.jpg',
        teamSize: 5,
        duration: '+2 Weeks',
        platform: 'Website',
        year: 'ON_GOING',
        about: 'This tool helps Game Developers specially asset creators to push their assets straight in to the Git project with only some push of a button. It streamline the process of integrating asset from the creator to the developer. This way it can help them to have standard rule for asset as well, like location, name, etc.',
        info: {
            role: 'Developer',
            teamSize: '5 members',
            timeFrame: 'Ongoing',
            engine: 'Web / Git Integration',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A streamlined tool for asset management in game development workflows.' },
            { heading: 'KEY FEATURES', content: 'One-button asset push, Git integration, standard naming conventions, location management.' },
        ],
    },
    {
        slug: 'group-session-payment-tracker',
        title: 'Group Session Payment Tracker',
        role: 'iOS DEVELOPER',
        description: 'This app helps organizers manage costs and payments for recurring activities like sports, fitness, or dance classes.',
        thumbnail: '/images/payment-tracker.jpg',
        teamSize: 3,
        duration: '+1 Weeks',
        platform: 'iOS',
        year: 'ON_GOING',
        about: 'This app helps organizers manage costs and payments for recurring activities like sports, fitness, or dance classes. Users create sessions with flexible pricing, add participants, and the app automatically calculates per-person costs and tracks who has paid versus who still owes money.',
        info: {
            role: 'iOS Developer',
            teamSize: '3 members',
            timeFrame: 'Ongoing',
            engine: 'Swift / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A practical tool for managing group activity payments.' },
            { heading: 'KEY FEATURES', content: 'Session creation, flexible pricing, automatic cost calculation, payment tracking.' },
        ],
    },
    // 2025
    {
        slug: 'saturated',
        title: 'Saturated',
        role: 'GAME DEVELOPER',
        description: 'SATURATED is a first-person horror game where you play as a commercial diver. Descend, fix the pipe, finish your job.',
        thumbnail: '/images/saturated.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        teamSize: 8,
        duration: '+8 Weeks',
        platform: 'Mac',
        year: '2025',
        about: 'SATURATED is a first-person horror game where you play as a commercial diver. Descend, fix the pipe, finish your job. That\'s all you have to do. It\'s only 5 shifts, after all. Keep at it, you\'ll see the sun yet. Between shifts, you retreat to the saturation chamber meant for rest, reflection, and recovery. But even here, the silence feels wrong, and your thoughts begin to twist as the days blur together.',
        info: {
            role: 'Game Developer',
            teamSize: '8 members',
            timeFrame: '8+ weeks',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A first-person horror experience set in the depths of commercial diving.' },
            { heading: 'MY ROLE', content: 'Lead gameplay programmer responsible for diving mechanics and horror atmosphere systems.' },
        ],
    },
    {
        slug: 'findect',
        title: 'Findect',
        role: 'iOS BACKEND DEVELOPER',
        description: 'Find your match. Connect with purpose. Networking made simple, powerful, and personal using LLM model.',
        thumbnail: '/images/findect.jpg',
        teamSize: 6,
        duration: '+4 Weeks',
        platform: 'iOS',
        year: '2025',
        about: 'Find your match. Connect with purpose. Networking made simple, powerful, and personal. Findect gives you recommendation of people that you should talk too using LLM model.',
        info: {
            role: 'iOS Backend Developer',
            teamSize: '6 members',
            timeFrame: '4+ weeks',
            engine: 'Swift / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A networking app that uses AI to connect professionals meaningfully.' },
            { heading: 'KEY FEATURES', content: 'LLM-powered matching, purpose-driven networking, personalized recommendations.' },
        ],
    },
    {
        slug: 'tona',
        title: 'Tona',
        role: 'iOS DEVELOPER',
        description: 'Tona helps casual Instagram photographers keep their feed visually consistent by automatically applying tone and color grading.',
        thumbnail: '/images/tona.jpg',
        teamSize: 3,
        duration: '+4 Weeks',
        platform: 'iOS',
        year: '2025',
        about: 'Tona is an app that helps casual Instagram photographers keep their feed visually consistent by automatically applying tone and color grading from their past uploads. It analyzes your existing aesthetic and matches new photos to blend seamlessly into your Instagram grid, no manual editing or presets needed.',
        info: {
            role: 'iOS Developer',
            teamSize: '3 members',
            timeFrame: '4+ weeks',
            engine: 'Swift / CoreML',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'AI-powered photo color grading for Instagram consistency.' },
            { heading: 'MY ROLE', content: 'Developed the iOS app and integrated CoreML for on-device color analysis.' },
        ],
    },
    {
        slug: 'milky-ice-jump',
        title: 'Milky Ice Jump',
        role: 'iOS DEVELOPER',
        description: 'A quick arcade game where you\'re going up and up while jumping between the walls.',
        thumbnail: '/images/milky.jpg',
        teamSize: 2,
        duration: '+2 Weeks',
        platform: 'iOS',
        year: '2025',
        about: 'This game is an quick arcade game where your going up and up while jumping between the walls, my role here was more into porting and publishing the game on App Store.',
        info: {
            role: 'iOS Developer',
            teamSize: '2 members',
            timeFrame: '2+ weeks',
            engine: 'Unity / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A fun, addictive arcade experience optimized for mobile play.' },
            { heading: 'MY ROLE', content: 'Porting the game to iOS and handling App Store publishing.' },
            { heading: 'LINK', content: 'https://apps.apple.com/id/app/milky-ice-jump/id6751799679' },
        ],
    },
    {
        slug: 'pet-jam',
        title: 'Pet Jam',
        role: 'iOS DEVELOPER',
        description: 'A gamification app for motivating users to burn more calories, similar to Tamagotchi but for Apple Watch.',
        thumbnail: '/images/petjam.jpg',
        teamSize: 5,
        duration: '+5 Weeks',
        platform: 'iOS',
        year: '2025',
        about: 'This app is a gamification for motivating users to burn more calories. It has a similar idea to Tamagotchi, but we applied it to the Apple Watch. This app is the second challenge for the Apple Developer Academy, which is to learn and apply Apple technologies. Some of which are WatchKit, SpriteKit, HealthKit, and SwiftData.',
        info: {
            role: 'iOS Developer',
            teamSize: '5 members',
            timeFrame: '5+ weeks',
            engine: 'WatchKit / SpriteKit / HealthKit',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'The second challenge for the Apple Developer Academy.' },
            { heading: 'KEY FEATURES', content: 'WatchKit integration, SpriteKit animations, HealthKit data, SwiftData persistence.' },
        ],
    },
    {
        slug: 'rantify',
        title: 'Rantify',
        role: 'iOS DEVELOPER',
        description: 'Rantify is my first time trying to develop an iOS app, this app gives you a gamified random activity to do.',
        thumbnail: '/images/rantify.jpg',
        teamSize: 1,
        duration: '+3 Weeks',
        platform: 'iOS',
        year: '2025',
        about: '"Rantify" is my first time trying to develop an iOS app, this app gives you a gamified random activity to do. This app is the first challenge from apple developer academy that is to learn how to develop an iOS app.',
        info: {
            role: 'iOS Developer',
            teamSize: '1 member',
            timeFrame: '3+ weeks',
            engine: 'Swift / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'First iOS app development experience from Apple Developer Academy.' },
            { heading: 'KEY FEATURES', content: 'Gamified random activity suggestions.' },
        ],
    },
    {
        slug: 'last-rite',
        title: 'Last Rite',
        role: 'GAME PROGRAMMER',
        description: 'You are an exorcist; the mortuary needs your help to get rid of the devil haunting the place.',
        thumbnail: '/images/lastrite.jpg',
        teamSize: 3,
        duration: '6 Months',
        platform: 'UE5',
        year: '2025',
        about: 'You are an exorcist; the mortuary needs your help to get rid of the devil haunting the place. Well, that\'s basically the game scenario. You can also play with your friend in a multiplayer session. Imagine it\'s mortuary assistant combined with phasmophobia.',
        info: {
            role: 'Game Programmer',
            teamSize: '3 members',
            timeFrame: '6 months',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A multiplayer horror exorcism game.' },
            { heading: 'KEY FEATURES', content: 'Multiplayer sessions, exorcism mechanics, horror atmosphere.' },
        ],
    },
    // 2024
    {
        slug: 'fisherman-manager',
        title: 'Fisherman Manager',
        role: 'GAME PROGRAMMER & DESIGNER',
        description: 'As a Manager of fishermen, you can tell your fishermen to sail them out, repair the boat, upgrade them, etc.',
        thumbnail: '/images/fisherman.jpg',
        teamSize: 2,
        duration: '4 Months',
        platform: 'UE5',
        year: '2024',
        about: 'As a Manager of fishermen, you can tell your fishermen to sail them out, repair the boat, upgrade them, etc. The goal is just to make a lot of money 🙂 Also, one of the main thing for this game it\'s for research purposes on Dynamic Difficulty Adjustment (DDA) so I\'m combining Q-Learning with Fuzzy Logic to create the DDA.',
        info: {
            role: 'Game Programmer & Designer',
            teamSize: '2 members',
            timeFrame: '4 months',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A management game with research-focused Dynamic Difficulty Adjustment.' },
            { heading: 'KEY FEATURES', content: 'Q-Learning + Fuzzy Logic DDA, fishery management, boat upgrades.' },
        ],
    },
    {
        slug: 'xanthous',
        title: 'Xanthous',
        role: 'GAME PROGRAMMER',
        description: '"Xanthous" is a VR horror game and an academic project for my final project and thesis.',
        thumbnail: '/images/xanthous.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        teamSize: 5,
        duration: '10 Months',
        platform: 'UE4',
        year: '2024',
        about: '"Xanthous" is a VR horror game and an academic project for my final project and thesis. I was an AI programmer creating algorithm designs such as Fuzzy Logic, Monte Carlo, Behavior Tree, and more.',
        info: {
            role: 'Game Programmer (AI)',
            teamSize: '5 members',
            timeFrame: '10 months',
            engine: 'Unreal Engine 4',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'VR horror game developed as final thesis project.' },
            { heading: 'MY ROLE', content: 'AI programmer implementing Fuzzy Logic, Monte Carlo, and Behavior Trees.' },
        ],
    },
    {
        slug: 'coblos-son',
        title: 'Coblos Son',
        role: 'GAME PROGRAMMER',
        description: '"Coblos Son" is a joke and meme-ish game created for Global Game Jam 2024 Surabaya.',
        thumbnail: '/images/coblosson.jpg',
        teamSize: 4,
        duration: '38 Hours',
        platform: 'Unity',
        year: '2024',
        about: '"Coblos Son" is a joke and meme-ish game created for Global Game Jam 2024 Surabaya. The game simulates a drunk individual participating in the upcoming election, adding a humorous element to the voting process.',
        info: {
            role: 'Game Programmer',
            teamSize: '4 members',
            timeFrame: '38 hours',
            engine: 'Unity',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A humorous election simulation game.' },
            { heading: 'EVENT', content: 'Created for Global Game Jam 2024 Surabaya.' },
        ],
    },
    // 2023
    {
        slug: 'echo-remnant',
        title: 'Echo Remnant',
        role: 'GAME PROGRAMMER & GAME DESIGNER',
        description: 'A hardcore-level stealth game utilizing AI Perception tools from UE4. Developed for Garena GameJam.',
        thumbnail: '/images/echo-remnant.jpg',
        teamSize: 2,
        duration: '40 Hours',
        platform: 'UE4',
        year: '2023',
        about: '"Echo Remnant" is a hardcore-level stealth game, utilizing AI Perception tools from UE4. "Echo Remnant" was developed for Garena GameJam.',
        info: {
            role: 'Game Programmer & Game Designer',
            teamSize: '2 members',
            timeFrame: '40 hours',
            engine: 'Unreal Engine 4',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A stealth game that challenges players with sophisticated AI detection systems.' },
            { heading: 'MY ROLE', content: 'Implemented AI perception systems and designed core stealth mechanics.' },
        ],
    },
    {
        slug: 'f-u-r-y',
        title: 'F.U.R.Y',
        role: 'GAME PROGRAMMER',
        description: '"F.U.R.Y" (Fiendish Unrest Rattles You) is a first-person horror-action game developed for Candela GameJam.',
        thumbnail: '/images/fury.jpg',
        teamSize: 3,
        duration: '48 Hours',
        platform: 'UE5',
        year: '2023',
        about: '"F.U.R.Y" which stand for "Fiendish Unrest Rattles You" is a first-person horror-action game. "F.U.R.Y" was developed for Candela GameJam.',
        info: {
            role: 'Game Programmer',
            teamSize: '3 members',
            timeFrame: '48 hours',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A fast-paced horror game that combines action with terror.' },
            { heading: 'MY ROLE', content: 'Lead programmer handling combat systems and enemy behaviors.' },
        ],
    },
    {
        slug: 'slime-sage',
        title: 'Slime Sage',
        role: 'GAME PROGRAMMER',
        description: 'A movement-satisfying game using Mix and Jam\'s package for "The Pathless". Developed for GAMELOFT Game Designer Connect.',
        thumbnail: '/images/slime-sage.jpg',
        teamSize: 3,
        duration: '1 Week',
        platform: 'Unity',
        year: '2023',
        about: '"Slime Sage" is a movement-satisfying game using Mix and Jam\'s package for the game called "The Pathless". "Slime Sage" was developed for the event GAMELOFT Game Designer Connect.',
        info: {
            role: 'Game Programmer',
            teamSize: '3 members',
            timeFrame: '1 week',
            engine: 'Unity',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A game focused on fluid, satisfying movement mechanics.' },
            { heading: 'MY ROLE', content: 'Implemented the movement system and physics interactions.' },
        ],
    },
    {
        slug: 'home-server',
        title: 'Home Server',
        role: 'PERSONAL PROJECT',
        description: 'A personal server project to host useful services and learn more about technologies.',
        thumbnail: '/images/homeserver.jpg',
        teamSize: 1,
        duration: '3 Months',
        platform: 'Proxmox',
        year: '2023',
        about: 'This is one of my personal projects of mine. I created a server for me to host useful services and it\'s a way for me to learn more about technologies.',
        info: {
            role: 'Personal Project',
            teamSize: '1 member',
            timeFrame: '3 months',
            engine: 'Proxmox / Docker',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A self-hosted infrastructure project for learning and utility.' },
            { heading: 'KEY FEATURES', content: 'Multiple services, containerization, network management.' },
        ],
    },
    {
        slug: 'priority',
        title: 'Priority',
        role: 'APP DEVELOPER',
        description: 'A mobile app designed for booking store visits, developed as part of a government-sponsored business program.',
        thumbnail: '/images/priority.jpg',
        teamSize: 2,
        duration: '4 Months',
        platform: 'Flutter',
        year: '2023',
        about: '"Priority" is a mobile app designed for booking store visits. It is developed as part of a government-sponsored business program conducted on campuses. I mainly use Google Cloud Platform and Firebase as the server-side functionality. The app\'s current state is only a prototype.',
        info: {
            role: 'App Developer',
            teamSize: '2 members',
            timeFrame: '4 months',
            engine: 'Flutter / Firebase / GCP',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A booking app for retail store visits with queue management.' },
            { heading: 'MY ROLE', content: 'Full-stack development using Flutter and Google Cloud Platform.' },
        ],
    },
    // 2022
    {
        slug: 'bed-time',
        title: 'Bed Time',
        role: 'GAME PROGRAMMER & GAME DESIGNER',
        description: 'A side-scrolling survival horror game created for Indie Games Group Indonesia GameJam+ 2022.',
        thumbnail: '/images/bedtime.jpg',
        teamSize: 6,
        duration: '48 Hours',
        platform: 'Unity',
        year: '2022',
        about: '"Bed Time" is a side-scrolling survival horror game created for Indie Games Group Indonesia GameJam+ 2022. In this game, you take on the role of a child left alone at home, and you must guide the child to fend off demons until morning comes. Despite our initial concept, the game remains unfinished.',
        info: {
            role: 'Game Programmer & Game Designer',
            teamSize: '6 members',
            timeFrame: '48 hours',
            engine: 'Unity',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A horror game about childhood fears and surviving the night.' },
            { heading: 'MY ROLE', content: 'Game design and core gameplay programming.' },
        ],
    },
    {
        slug: 'dont-get-hunted',
        title: "Don't Get Hunted",
        role: 'GAME PROGRAMMER & GAME DESIGNER',
        description: 'A top-down multiplayer horror game utilizing Photon for multiplayer functionality.',
        thumbnail: '/images/dontgethunted.jpg',
        teamSize: 2,
        duration: '1 Week',
        platform: 'Unity',
        year: '2022',
        about: '"Don\'t Get Hunted" is a top-down multiplayer horror game. The game objective is monster collect orbs to gain power and eliminate human before it\'s too late, while human must eliminate monster before it got powerful. "Don\'t Get Hunted" utilizes Photon for multiplayer server and functionality.',
        info: {
            role: 'Game Programmer & Game Designer',
            teamSize: '2 members',
            timeFrame: '1 week',
            engine: 'Unity / Photon',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'An asymmetric multiplayer horror experience.' },
            { heading: 'KEY FEATURES', content: 'Multiplayer via Photon, asymmetric gameplay, power progression system.' },
        ],
    },
];

export const projectYears = ['ON_GOING', '2025', '2024', '2023', '2022'] as const;

export function getProjectsByYear(year: Project['year']): Project[] {
    return projects.filter(p => p.year === year);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}
