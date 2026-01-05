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
        slug: 'xanthous',
        title: 'Xanthous',
        role: 'GAME DEVELOPER',
        description: 'A narrative-driven game project currently in development, focusing on unique storytelling and gameplay mechanics.',
        thumbnail: '/images/xanthous.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        teamSize: 5,
        duration: '+2 Weeks',
        platform: 'Website',
        year: 'ON_GOING',
        about: 'Xanthous is a narrative-driven game project currently in development. The project focuses on creating unique storytelling experiences through innovative gameplay mechanics.',
        info: {
            role: 'Game Developer',
            teamSize: '5 members',
            timeFrame: 'Ongoing',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'Xanthous represents an ambitious project in narrative game design, combining immersive storytelling with engaging gameplay mechanics.' },
            { heading: 'MY ROLE', content: 'As a Game Developer, I am responsible for implementing core gameplay systems and ensuring the technical vision aligns with the creative direction.' },
        ],
    },
    {
        slug: 'gamedev-tool',
        title: 'Game Dev Tool',
        role: 'DEVELOPER',
        description: 'This tool helps Game Developers specially asset creators to push their assets straight in to the Git project with only some push of a button.',
        thumbnail: '/images/gamedev-tool.jpg',
        teamSize: 3,
        duration: '+1 Weeks',
        platform: 'iOS',
        year: 'ON_GOING',
        about: 'This tool helps Game Developers specially asset creators to push their assets straight into the Git project with only some push of a button. It streamlines the process of integrating assets from the creator to the developer.',
        info: {
            role: 'Developer',
            teamSize: '3 members',
            timeFrame: 'Ongoing',
            engine: 'Swift / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A streamlined tool for asset management in game development workflows.' },
            { heading: 'KEY FEATURES', content: 'One-button asset push, Git integration, standard naming conventions, location management.' },
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
        about: 'SATURATED is a first-person horror game where you play as a commercial diver. Descend, fix the pipe, finish your job. It\'s only 5 shifts, after all. Keep at it, you\'ll see the sun yet.',
        info: {
            role: 'Game Developer',
            teamSize: '8 members',
            timeFrame: '8+ weeks',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'Between shifts, you retreat to the saturation chamber meant for rest, reflection, and recovery. But even here, the silence feels wrong, and your thoughts begin to twist as the days blur together.' },
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
        about: 'Findect gives you recommendations of people that you should talk to using LLM model. Networking made simple, powerful, and personal.',
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
        about: 'Tona is an app that helps casual Instagram photographers keep their feed visually consistent by automatically applying tone and color grading from their past uploads.',
        info: {
            role: 'iOS Developer',
            teamSize: '3 members',
            timeFrame: '4+ weeks',
            engine: 'Swift / CoreML',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'It analyzes your existing aesthetic and matches new photos to blend seamlessly into your Instagram grid, no manual editing or presets needed.' },
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
        about: 'This game is a quick arcade game where you\'re going up and up while jumping between the walls. My role here was more into porting and publishing the game on App Store.',
        info: {
            role: 'iOS Developer',
            teamSize: '2 members',
            timeFrame: '2+ weeks',
            engine: 'Unity / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A fun, addictive arcade experience optimized for mobile play.' },
            { heading: 'MY ROLE', content: 'Porting the game to iOS and handling App Store publishing.' },
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
        about: 'This app is a gamification for motivating users to burn more calories. It has a similar idea to Tamagotchi, but we applied it to the Apple Watch.',
        info: {
            role: 'iOS Developer',
            teamSize: '5 members',
            timeFrame: '5+ weeks',
            engine: 'WatchKit / SpriteKit / HealthKit',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'The second challenge for the Apple Developer Academy, learning and applying Apple technologies.' },
            { heading: 'KEY FEATURES', content: 'WatchKit integration, SpriteKit animations, HealthKit data, SwiftData persistence.' },
        ],
    },
    // 2024
    {
        slug: 'echo-remnant',
        title: 'Echo Remnant',
        role: 'GAME PROGRAMMER & GAME DESIGNER',
        description: 'A hardcore-level stealth game utilizing AI Perception tools from UE4. Developed for Garena GameJam.',
        thumbnail: '/images/echo-remnant.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        teamSize: 3,
        duration: '48 Hours',
        platform: 'UE5',
        year: '2024',
        about: '"Echo Remnant" is a hardcore-level stealth game, utilizing AI Perception tools from UE4. It was developed for Garena GameJam.',
        info: {
            role: 'Game Programmer & Game Designer',
            teamSize: '3 members',
            timeFrame: '48 hours',
            engine: 'Unreal Engine 5',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A stealth game that challenges players with sophisticated AI detection systems.' },
            { heading: 'MY ROLE', content: 'Implemented AI perception systems and designed core stealth mechanics.' },
        ],
    },
    // 2023
    {
        slug: 'f-u-r-y',
        title: 'F.U.R.Y',
        role: 'GAME PROGRAMMER',
        description: '"F.U.R.Y" (Fiendish Unrest Rattles You) is a first-person horror-action game developed for Candela GameJam.',
        thumbnail: '/images/fury.jpg',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        teamSize: 3,
        duration: '48 Hours',
        platform: 'UE5',
        year: '2023',
        about: '"F.U.R.Y" which stands for "Fiendish Unrest Rattles You" is a first-person horror-action game. It was developed for Candela GameJam.',
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
        about: '"Slime Sage" is a movement-satisfying game using Mix and Jam\'s package for the game called "The Pathless". It was developed for the event GAMELOFT Game Designer Connect.',
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
        about: 'This is one of my personal projects. I created a server for me to host useful services and it\'s a way for me to learn more about technologies.',
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
        about: '"Priority" is a mobile app designed for booking store visits. It is developed as part of a government-sponsored business program conducted on campuses.',
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
        about: '"Bed Time" is a side-scrolling survival horror game created for Indie Games Group Indonesia GameJam+ 2022. You take on the role of a child left alone at home, and you must guide the child to fend off demons until morning comes.',
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
        about: '"Don\'t Get Hunted" is a top-down multiplayer horror game. The game objective is for the monster to collect orbs to gain power and eliminate humans before it\'s too late, while humans must eliminate the monster before it gets too powerful.',
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
