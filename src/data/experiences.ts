export type ExperienceCategory = 'ON_GOING' | 'WORK' | 'ACADEMY' | 'GAME_JAMS' | 'OTHER';

export interface Experience {
    slug: string;
    title: string;
    organization: string;
    role: string;
    description: string;
    thumbnail: string;
    duration: string;
    category: ExperienceCategory;
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
    // WORK
    {
        slug: 'joybait-studio',
        title: 'JoyBait Studio',
        organization: 'JoyBait Studio',
        role: 'GAME DEVELOPER',
        description: 'So this studio was made from the last project of Apple Developer Academy Bali. My role here is the Lead Developer, and we\'re a team of 8 people.',
        thumbnail: '/images/joybait.jpg',
        duration: 'On-Going',
        category: 'ON_GOING',
        year: 'Ongoing',
        about: 'So this studio was made from the last project of Apple Developer Academy Bali. My role here is the Lead Developer, and we\'re a team of 8 people. The team has made 2 games so far, and one of them is Saturated, which I\'m involved in. This studio has more to come.',
        info: {
            role: 'Lead Developer',
            organization: 'JoyBait Studio',
            duration: 'On-Going',
            type: 'Game Studio',
        },
        sections: [
            { heading: 'RESPONSIBILITIES', content: 'Lead developer overseeing game development projects.' },
            { heading: 'ACHIEVEMENTS', content: 'Created 2 games including Saturated.' },
        ],
    },
    {
        slug: 'ecosoft-interactive',
        title: 'Ecosoft Interactive',
        organization: 'Ecosoft Interactive',
        role: 'GAME DEVELOPER (UNITY)',
        description: 'Worked on a mobile arcade game project as part of a remote team, mainly helping with QA and iOS-related development.',
        thumbnail: '/images/ecosoft.jpg',
        duration: '2025',
        category: 'WORK',
        year: '2025',
        about: 'Worked on a mobile arcade game project as part of a remote team, mainly helping with QA and iOS-related development. My responsibilities included identifying bugs that disrupted the core gameplay loop, giving feedback on game feel and UI, and helping the team set up more consistent testing and build schedules. Through this project, I learned how important clear communication and structure are when working with remote teams, especially when different roles rely heavily on each other to move forward.',
        info: {
            role: 'Game Developer (Unity)',
            organization: 'Ecosoft Interactive',
            duration: '2025',
            type: 'Remote Work',
        },
        sections: [
            { heading: 'RESPONSIBILITIES', content: 'QA, iOS development, bug identification, UI feedback.' },
            { heading: 'LEARNING', content: 'Remote team communication and structure importance.' },
        ],
    },
    {
        slug: 'starpixel-studio',
        title: 'Starpixel Studio',
        organization: 'Starpixel Studio',
        role: 'GAME DEVELOPER (UNREAL ENGINE)',
        description: 'Developed an undisclosed multiplayer horror game as the leading developer.',
        thumbnail: '/images/starpixel.jpg',
        duration: '2024 - 2025',
        category: 'WORK',
        year: '2025',
        about: 'Developed an undisclosed multiplayer horror game as the leading developer; my responsibility was implementing gameplay and system mechanics. One thing that is most crucial for the game is the multiplayer syncs, and what I learn from it was to have a crucial structure from the start, because if we just make stuff straight away, it will be harder in future development.',
        info: {
            role: 'Lead Developer',
            organization: 'Starpixel Studio',
            duration: '2024 - 2025',
            type: 'Game Studio',
        },
        sections: [
            { heading: 'RESPONSIBILITIES', content: 'Gameplay and system mechanics implementation.' },
            { heading: 'LEARNING', content: 'Importance of structure from the start for multiplayer games.' },
        ],
    },
    {
        slug: 'ebdesk-internship',
        title: 'PT. eBdesk',
        organization: 'PT. eBdesk',
        role: 'DATA SCIENTIST',
        description: 'Worked as intern data scientist for about 6 months.',
        thumbnail: '/images/ebdesk.jpg',
        duration: '6 Months',
        category: 'WORK',
        year: '2023',
        about: 'Worked as intern data scientist for about 6 months, my work there include data scrapping, data analysis, and data visualization. Utilizing tools from the likes of selenium, gephi, and tableau. The programming language used while working there is python.',
        info: {
            role: 'Data Scientist',
            organization: 'PT. eBdesk',
            duration: '6 Months',
            type: 'Internship',
        },
        sections: [
            { heading: 'RESPONSIBILITIES', content: 'Data scraping, analysis, and visualization.' },
            { heading: 'TOOLS', content: 'Python, Selenium, Gephi, Tableau.' },
        ],
    },
    // ACADEMY
    {
        slug: 'apple-developer-academy',
        title: 'Apple Developer Academy',
        organization: 'Apple Developer Academy @ BINUS',
        role: 'APPLE OS DEVELOPER',
        description: 'Work in an Apple environment for 10 months, learning hard and soft skills from teamwork.',
        thumbnail: '/images/ada.jpg',
        duration: '10 Months',
        category: 'ACADEMY',
        year: '2025',
        about: 'Work in an Apple environment for 10 months, learning hard and soft skills from teamwork, and always communicate respectfully with others to develop in terms of research, designing, to coding for an Apple OS app. Also made a game studio called Joybait Studio, more to come. Other than that, this experience really mean a lot to me, the people are one of the best people I\'ve ever met. First bali cohort first to bloom.',
        info: {
            role: 'Apple OS Developer',
            organization: 'Apple Developer Academy @ BINUS',
            duration: '10 months',
            type: 'Academy',
        },
        sections: [
            { heading: 'LEARNING', content: 'Swift, SwiftUI, UIKit, CoreML, HealthKit, WatchKit, SpriteKit.' },
            { heading: 'HIGHLIGHT', content: 'First Bali cohort, first to bloom.' },
        ],
    },
    {
        slug: 'google-play-unity',
        title: 'Google Play x Unity',
        organization: 'Google / Unity',
        role: 'GAME DEVELOPER',
        description: 'Participate in the Google Play x Unity training program for 7 months as a Game Programmer.',
        thumbnail: '/images/googleunity.jpg',
        duration: '7 Months',
        category: 'ACADEMY',
        year: '2024',
        about: 'Participate in the Google Play x Unity training program for 7 months as a Game Programmer, with the goal of getting a certificate in Unity engine. The training program consists of online courses for a game programmer using the Unity engine, but also once or twice a month an online meeting generally discussing how to succeed as a game developer in general as well, especially in the Google Play platform.',
        info: {
            role: 'Game Programmer',
            organization: 'Google / Unity',
            duration: '7 months',
            type: 'Training Program',
        },
        sections: [
            { heading: 'LEARNING', content: 'Unity engine certification, Google Play platform success strategies.' },
        ],
    },
    // GAME JAMS
    {
        slug: 'iplay-gamejam-2025',
        title: 'iPlay Apple Developer Academy Game Jam 2025',
        organization: 'Apple Developer Academy',
        role: 'GAME DEVELOPER (AI)',
        description: '🏆 Won 1st Place! Created "Until Dawn Do Us Part" - a survival twin-stick shooter themed "One Pixel" in just 2 days.',
        thumbnail: '/images/iplay.jpg',
        duration: '2 Days',
        category: 'GAME_JAMS',
        year: '2025',
        about: 'Participated in iPlay Apple Developer Academy Game Jam 2025 themed "One Pixel". Our team of 4 (met during the jam) created "Until Dawn Do Us Part" - a top-down survival horror twin-stick shooter. The game won 1st Place! My role was System Developer and Enemy AI Programmer.',
        info: {
            role: 'System Developer & Enemy AI',
            organization: 'Apple Developer Academy',
            duration: '2 Days',
            type: 'GameJam',
        },
        sections: [
            { heading: 'ACHIEVEMENT', content: '🏆 Won 1st Place in iPlay Apple Developer Academy Game Jam 2025!' },
            { heading: 'EXPERIENCE', content: 'Created a survival horror game with wave-based mechanics in just 2 days with teammates I just met at the jam. All assets handcrafted by the team.' },
        ],
    },
    {
        slug: 'brackeys-jam-2024',
        title: 'Brackeys Game Jam 2024.2',
        organization: 'Brackeys',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online 7-day GameJam themed "Calm Before the Storm".',
        thumbnail: '/images/brackeys.jpg',
        duration: '7 Days',
        category: 'GAME_JAMS',
        year: '2024',
        about: 'Participated in an online 7-day GameJam themed "Calm Before the Storm", in this GameJam I participated in making 2 different games with 2 different teams, one using Unreal Engine and the other using Unity. I did develop the game at the same time, back and forth. This was an experience that I\'ll never forget and probably never do again haha. The good thing is somehow I manage to pull trough and did my role as a main programmer (Unity) and AI programmer (Unreal).',
        info: {
            role: 'Main Programmer (Unity) & AI Programmer (Unreal)',
            organization: 'Brackeys',
            duration: '7 days',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Developed 2 games simultaneously with different teams and engines.' },
        ],
    },
    {
        slug: 'scorespace-jam-31',
        title: 'ScoreSpace Jam #31',
        organization: 'ScoreSpace',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online 96-hour GameJam themed "the floor is lava".',
        thumbnail: '/images/scorespace.jpg',
        duration: '96 Hours',
        category: 'GAME_JAMS',
        year: '2024',
        about: 'Participated in an online 96-hour GameJam themed "the floor is lava", the game was made using Unity, and I did the game by myself, including design, art, and codes. Why I joined this GameJam was to get me back to Unity engine since I was using mostly Unreal throughout the year, cause I need to do a Unity test for Google x Unity.',
        info: {
            role: 'Solo Developer',
            organization: 'ScoreSpace',
            duration: '96 hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Solo development including design, art, and programming.' },
        ],
    },
    {
        slug: 'ryan-laley-jam',
        title: 'Ryan Laley Games Game Jam',
        organization: 'Ryan Laley Games',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online 30-day GameJam themed "fishing minigame".',
        thumbnail: '/images/ryanlaley.jpg',
        duration: '30 Days',
        category: 'GAME_JAMS',
        year: '2024',
        about: 'Participated in an online 30-day GameJam themed "fishing minigame", my role was the game programmer and the designer in a two-developer project using Unreal Engine 5. This game and project were to get me back to Unreal basics, which I need to remember again.',
        info: {
            role: 'Game Programmer & Designer',
            organization: 'Ryan Laley Games',
            duration: '30 days',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Getting back to Unreal Engine basics.' },
        ],
    },
    {
        slug: 'gmtk-jam-2024',
        title: 'GMTK Game Jam 2024',
        organization: 'GMTK',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online 4-day GameJam themed "Built To Scale".',
        thumbnail: '/images/gmtk.jpg',
        duration: '4 Days',
        category: 'GAME_JAMS',
        year: '2024',
        about: 'Participated in an online 4-day GameJam themed "Built To Scale", my role was the game programmer and the designer in a two-developer project using Unity. We made a multiplayer tic tac toe game with a twist….',
        info: {
            role: 'Game Programmer & Designer',
            organization: 'GMTK',
            duration: '4 days',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Created a multiplayer tic tac toe game with a twist.' },
        ],
    },
    {
        slug: 'ggj-surabaya-2024',
        title: 'Global Game Jam Surabaya',
        organization: 'Global Game Jam',
        role: 'GAME DEVELOPER',
        description: 'Participated in an offline 38-hour GameJam themed "Make Me Laugh".',
        thumbnail: '/images/ggj.jpg',
        duration: '38 Hours',
        category: 'GAME_JAMS',
        year: '2024',
        about: 'Participated in an offline 38-hour GameJam themed "Make Me Laugh", where my role as a game programmer in a four-man work using Unity. I enjoyed making this meme-ish game and it went pretty smooth, but there\'s something that I don\'t agree with my team on some features.',
        info: {
            role: 'Game Programmer',
            organization: 'Global Game Jam',
            duration: '38 hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Created a meme-ish game with a four-person team.' },
        ],
    },
    {
        slug: 'garena-gamejam',
        title: 'Garena GameJam',
        organization: 'Garena',
        role: 'GAME DEVELOPER',
        description: 'Participated in an offline 40-hour GameJam themed "Replayability".',
        thumbnail: '/images/garena.jpg',
        duration: '40 Hours',
        category: 'GAME_JAMS',
        year: '2023',
        about: 'Participated in an offline 40-hour GameJam themed "Replayability", where my role as a game programmer in a two-man work using Unreal Engine 4. There were ups and downs, but we managed to pull through with a hardcore level stealth game.',
        info: {
            role: 'Game Programmer',
            organization: 'Garena',
            duration: '40 Hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Created a hardcore stealth game despite challenges.' },
        ],
    },
    {
        slug: 'candela-gamejam',
        title: 'Candela Game Jam #1',
        organization: 'Candela',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online 48-hour GameJam themed "Unify Miraculous Goals".',
        thumbnail: '/images/candela.jpg',
        duration: '48 Hours',
        category: 'GAME_JAMS',
        year: '2023',
        about: 'Participated in an online 48-hour GameJam themed "Unify Miraculous Goals", where my role as a game programmer in a three-man work using Unreal Engine 5. GameJam went great, the visuals are very stunning as always Unreal Engine 5 visually never disappoints.',
        info: {
            role: 'Game Programmer',
            organization: 'Candela',
            duration: '48 Hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'Great visuals with Unreal Engine 5.' },
        ],
    },
    {
        slug: 'gameloft-connect',
        title: 'GAMELOFT Game Designer Connect 3.0',
        organization: 'GAMELOFT',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online one-week game developer event themed "One Room".',
        thumbnail: '/images/gameloft.jpg',
        duration: '1 Week',
        category: 'GAME_JAMS',
        year: '2023',
        about: 'Participated in an online one-week game developer event themed "One Room", where my role as a game programmer in a three-man work using Unity. This event was very fun to participate in but also very tiring. There are a lot of things that I can improve from this event, from a technical standpoint to a teamwork and communication standpoint.',
        info: {
            role: 'Game Programmer',
            organization: 'GAMELOFT',
            duration: '1 Week',
            type: 'Event',
        },
        sections: [
            { heading: 'LEARNING', content: 'Technical improvements and teamwork communication.' },
        ],
    },
    {
        slug: 'iggi-gamejam',
        title: 'IGGI GameJam 2022',
        organization: 'Indie Games Group Indonesia',
        role: 'GAME DEVELOPER',
        description: 'Participated in an online 40-hour GameJam as game programmer and designer.',
        thumbnail: '/images/iggi.jpg',
        duration: '40 Hours',
        category: 'GAME_JAMS',
        year: '2022',
        about: 'Participated in an online 40-hour GameJam, where my role as a game programmer and game designer in a six-person team using Unity. This was the first GameJam I participated, it was the definition of chaos. The core gameplay was unfinished, bugs everywhere, but this GameJam was the best choice I made because at this point my programming knowledge actually grew exponentially.',
        info: {
            role: 'Game Programmer & Designer',
            organization: 'Indie Games Group Indonesia',
            duration: '40 Hours',
            type: 'GameJam',
        },
        sections: [
            { heading: 'EXPERIENCE', content: 'First GameJam, chaotic but transformative for programming skills.' },
        ],
    },
    // OTHER
    {
        slug: 'wirausaha-merdeka',
        title: 'Wirausaha Merdeka',
        organization: 'Government Program',
        role: 'BUSINESS (APP DEVELOPMENT)',
        description: 'Participated in a government-sponsored program to implement a business idea through mobile app development.',
        thumbnail: '/images/wirausaha.jpg',
        duration: '2023',
        category: 'OTHER',
        year: '2023',
        about: 'Participated in a government-sponsored program to implement a business idea, where I designed and created a mobile app. While the app stopped at the prototype stage, it was an interesting experience, especially learning to create a startup business. I can definitely implement this knowledge when designing a game to have better chances of success on the business side.',
        info: {
            role: 'App Developer / Entrepreneur',
            organization: 'Government Program',
            duration: '2023',
            type: 'Business Program',
        },
        sections: [
            { heading: 'LEARNING', content: 'Startup business creation and app development.' },
        ],
    },
    {
        slug: 'pens-esport',
        title: 'Valorant Team PENS ESPORT',
        organization: 'PENS ESPORT',
        role: 'ESPORT',
        description: 'Joined the Esport team of a gaming community on campus as a Valorant player.',
        thumbnail: '/images/pens.jpg',
        duration: '2022',
        category: 'OTHER',
        year: '2022',
        about: 'Joined in the Esport team of a gaming community on my campus. My role was as a player in the game "Valorant" and when I was there, I participated in 5 tournaments then I got replaced because I was only an average skill player at the game. My highest achievement was getting 3rd place finish in a seven-team tournament. not bad, right?',
        info: {
            role: 'Esport Player',
            organization: 'PENS ESPORT',
            duration: '2022',
            type: 'Esport',
        },
        sections: [
            { heading: 'ACHIEVEMENT', content: '3rd place in a seven-team tournament.' },
        ],
    },
];

export const experienceCategories: { key: ExperienceCategory; label: string }[] = [
    { key: 'ON_GOING', label: 'On Going' },
    { key: 'WORK', label: 'Work' },
    { key: 'ACADEMY', label: 'Academy' },
    { key: 'GAME_JAMS', label: 'Game Jams' },
    { key: 'OTHER', label: 'Other' },
];

export function getExperiencesByCategory(category: ExperienceCategory): Experience[] {
    return experiences.filter(e => e.category === category);
}

export function getExperienceBySlug(slug: string): Experience | undefined {
    return experiences.find(e => e.slug === slug);
}
