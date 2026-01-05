export interface Experience {
    slug: string;
    title: string;
    organization: string;
    role: string;
    description: string;
    thumbnail: string;
    duration: string;
    year: string;
    about: string;
    info: {
        role: string;
        organization: string;
        duration: string;
        type: string;
    };
    sections: {
        heading: string;
        content: string;
    }[];
}

export const experiences: Experience[] = [
    {
        slug: 'joybait-studio',
        title: 'JoyBait Studio',
        organization: 'JoyBait Studio',
        role: 'Game Developer',
        description: 'Working as a game developer at JoyBait Studio, contributing to various game projects using Unreal Engine.',
        thumbnail: '/images/joybait.jpg',
        duration: '2024 - Present',
        year: '2024',
        about: 'JoyBait Studio is a game development studio where I work on various projects as a game developer.',
        info: {
            role: 'Game Developer',
            organization: 'JoyBait Studio',
            duration: '2024 - Present',
            type: 'Full-time',
        },
        sections: [
            { heading: 'RESPONSIBILITIES', content: 'Game programming, gameplay systems, AI implementation.' },
            { heading: 'ACHIEVEMENTS', content: 'Contributed to multiple game releases and prototypes.' },
        ],
    },
    {
        slug: 'apple-developer-academy',
        title: 'Apple Developer Academy',
        organization: 'Apple Developer Academy @ BINUS',
        role: 'Apple OS Developer',
        description: 'Learning and applying Apple technologies including iOS, watchOS, and macOS development.',
        thumbnail: '/images/ada.jpg',
        duration: '2024 - 2025',
        year: '2024',
        about: 'Intensive program learning Apple ecosystem development including Swift, SwiftUI, and various Apple frameworks.',
        info: {
            role: 'Apple OS Developer',
            organization: 'Apple Developer Academy @ BINUS',
            duration: '2024 - 2025',
            type: 'Academy',
        },
        sections: [
            { heading: 'LEARNING', content: 'Swift, SwiftUI, UIKit, CoreML, HealthKit, WatchKit, SpriteKit.' },
            { heading: 'PROJECTS', content: 'Multiple challenge apps published on the App Store.' },
        ],
    },
    {
        slug: 'garena-gamejam',
        title: 'Garena GameJam',
        organization: 'Garena',
        role: 'Game Developer',
        description: 'Participated in an online 48-hour GameJam themed "Unify Miraculous Goals".',
        thumbnail: '/images/garena.jpg',
        duration: '48 Hours',
        year: '2024',
        about: 'Participated in an online 48-hour GameJam themed "Unify Miraculous Goals", where my role as a game programmer in a three-man team using Unreal Engine 5.',
        info: {
            role: 'Game Programmer',
            organization: 'Garena',
            duration: '48 Hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'GameJam went great, the visuals are very stunning as always - Unreal Engine 5 visually never disappoints.' },
        ],
    },
    {
        slug: 'gameloft-connect',
        title: 'GAMELOFT Game Designer Connect 3.0',
        organization: 'GAMELOFT',
        role: 'Game Developer',
        description: 'Participated in an online one-week game developer event themed "One Room".',
        thumbnail: '/images/gameloft.jpg',
        duration: '1 Week',
        year: '2023',
        about: 'Participated in an online one-week game developer event themed "One Room", where my role as a game programmer in a three-man work using Unity.',
        info: {
            role: 'Game Programmer',
            organization: 'GAMELOFT',
            duration: '1 Week',
            type: 'Event',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'This event was very fun to participate in but also very tiring. There are a lot of things that I can improve from this event, from a technical standpoint to a teamwork and communication standpoint.' },
        ],
    },
    {
        slug: 'wirausaha-merdeka',
        title: 'Wirausaha Merdeka',
        organization: 'Government Program',
        role: 'Business (App Development)',
        description: 'Participated in a government-sponsored program to implement a business idea through mobile app development.',
        thumbnail: '/images/wirausaha.jpg',
        duration: '2023',
        year: '2023',
        about: 'Participated in a government-sponsored program to implement a business idea, where I designed and created a mobile app.',
        info: {
            role: 'App Developer / Entrepreneur',
            organization: 'Government Program',
            duration: '2023',
            type: 'Business Program',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'While the app stopped at the prototype stage, it was an interesting experience, especially learning to create a startup business. I can definitely implement this knowledge when designing a game to have better chances of success on the business side.' },
        ],
    },
    {
        slug: 'ebdesk-internship',
        title: 'PT. eBdesk Internship',
        organization: 'PT. eBdesk',
        role: 'Data Scientist',
        description: 'Worked as intern data scientist for about 6 months, including data scraping, analysis, and visualization.',
        thumbnail: '/images/ebdesk.jpg',
        duration: '6 Months',
        year: '2023',
        about: 'Worked as intern data scientist for about 6 months, my work there include data scraping, data analysis, and data visualization.',
        info: {
            role: 'Data Scientist',
            organization: 'PT. eBdesk',
            duration: '6 Months',
            type: 'Internship',
        },
        sections: [
            { heading: 'RESPONSIBILITIES', content: 'Data scraping, data analysis, and data visualization using Selenium, Gephi, and Tableau.' },
            { heading: 'TOOLS', content: 'Python, Selenium, Gephi, Tableau.' },
        ],
    },
    {
        slug: 'iggi-gamejam',
        title: 'IGGI GameJam 2022',
        organization: 'Indie Games Group Indonesia',
        role: 'Game Developer',
        description: 'Participated in an online 40-hour GameJam as game programmer and designer in a six-person team.',
        thumbnail: '/images/iggi.jpg',
        duration: '40 Hours',
        year: '2022',
        about: 'Participated in an online 40-hour GameJam, where my role as a game programmer and game designer in a six-person team using Unity.',
        info: {
            role: 'Game Programmer & Designer',
            organization: 'Indie Games Group Indonesia',
            duration: '40 Hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'This was the first GameJam I participated in, it was the definition of chaos. The core gameplay was unfinished, bugs everywhere, but this GameJam was the best choice I made because at this point my programming knowledge actually grew exponentially.' },
        ],
    },
    {
        slug: 'pens-esport',
        title: 'Valorant Team PENS ESPORT',
        organization: 'PENS ESPORT',
        role: 'Esport Player',
        description: 'Joined the Esport team of a gaming community on campus as a Valorant player.',
        thumbnail: '/images/pens.jpg',
        duration: '2022',
        year: '2022',
        about: 'Joined in the Esport team of a gaming community on my campus. My role was as a player in the game "Valorant".',
        info: {
            role: 'Esport Player',
            organization: 'PENS ESPORT',
            duration: '2022',
            type: 'Esport',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'I participated in 5 tournaments then I got replaced because I was only an average skill player at the game. My highest achievement was getting 3rd place finish in a seven-team tournament. Not bad, right?' },
        ],
    },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
    return experiences.find(e => e.slug === slug);
}
