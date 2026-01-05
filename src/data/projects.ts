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
    appStoreUrl?: string;
    itchUrl?: string;
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
        thumbnail: '',
        teamSize: 5,
        duration: 'Ongoing',
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
        slug: 'plan-hub',
        title: 'Plan Hub',
        role: 'SOLO DEVELOPER',
        description: 'AI-powered personal planning assistant that creates packed daily schedules from your goals with OKR management and smart notifications.',
        thumbnail: '',
        teamSize: 1,
        duration: 'Ongoing',
        platform: 'App',
        year: 'ON_GOING',
        about: 'Plan Hub is a mobile-first AI-powered personal planning assistant. It creates and manages OKRs with AI assistance, generates packed daily schedules from your goals, reviews tomorrow\'s plan each night, sends push notifications for task reminders, and tracks progress with daily logs. Features include a freemium subscription model with Pro plan ($6.99/month), cross-platform support (iOS, Android, Web), and integration with OpenAI GPT-4 for intelligent scheduling.',
        info: {
            role: 'Solo Developer',
            teamSize: '1 member',
            timeFrame: 'Ongoing',
            engine: 'NestJS & Stuff',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A comprehensive AI planning app with OKR management, daily schedule generation, and smart notifications.' },
            { heading: 'KEY FEATURES', content: 'AI Plan Generation, OKR Management, Push Notifications (Morning Briefing, Task Reminders, Evening Review), Weekly Summary, Cross-platform sync, Freemium subscription model.' },
        ],
    },
    // 2025
    {
        slug: 'paid-sport-split-bill',
        title: 'Paid - Sport Split Bill',
        role: 'iOS DEVELOPER',
        description: 'This app helps organizers manage costs and payments for recurring activities like sports, fitness, or dance classes.',
        thumbnail: '',
        videoUrl: 'https://youtube.com/shorts/rHEImRNFWOo?feature=share',
        teamSize: 3,
        duration: '+8 Weeks',
        platform: 'iOS',
        year: '2025',
        about: 'This app helps organizers manage costs and payments for recurring activities like sports, fitness, or dance classes. Users create sessions with flexible pricing, add participants, and the app automatically calculates per-person costs and tracks who has paid versus who still owes money.',
        info: {
            role: 'iOS Developer',
            teamSize: '3 members',
            timeFrame: '8+ weeks',
            engine: 'Swift / iOS',
        },
        sections: [
            { heading: 'INTRODUCTION', content: 'A practical tool for managing group activity payments.' },
            { heading: 'KEY FEATURES', content: 'Session creation, flexible pricing, automatic cost calculation, payment tracking.' },
        ],
    },
    {
        slug: 'saturated',
        title: 'Saturated',
        role: 'GAME DEVELOPER',
        description: 'SATURATED is a first-person horror game where you play as a commercial diver. Descend, fix the pipe, finish your job.',
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/0wkXfAQb-wY',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/baLQDNrXQoo',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/-LpufQveMVQ',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/Tpz54tOTTOw',
        appStoreUrl: 'https://apps.apple.com/id/app/milky-ice-jump/id6751799679',
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
        ],
    },
    {
        slug: 'pet-jam',
        title: 'Pet Jam',
        role: 'iOS DEVELOPER',
        description: 'A gamification app for motivating users to burn more calories, similar to Tamagotchi but for Apple Watch.',
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/vbAcI0mYJcc',
        appStoreUrl: 'https://apps.apple.com/us/app/pet-jam/id6757231277',
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
        thumbnail: '',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/msL-IpjbRNo',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/jEh9ddNSLk0',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/R7RcHgE8FMI',
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
            { heading: 'INTRODUCTION', content: 'This game was created for our final project as a bachelor in computer engineering. At first, we thought it would be a great idea to use horror because it looked easy to market, and we also loved watching people playing horror games on YouTube. So we think a horror VR game is a great score, oh boy were we so ambitious. It was a pretty tough but very enlightening journey, from designing the game to having a struggle developing the game on VR.\n\nThe game is about a kid named Jaka who\'s looking for his family member inside his family\'s apartment unit. After the family\'s incident where they crashed, Jaka got a major concussion. When he woke up, he decided to go to his apartment and suddenly passed out as he approached his parent\'s room. Then the mystery and horror begins…..\n\nIn development it was an up-and-down moment, especially the VR part, sometimes it would just be tiresome, But we managed to pull through somehow. We managed to create a pretty good face on our campus having multiple great reviews during testing and the harsh critique was also there. The main problem with the game is if now its player is having problems understanding the game objectives and the story is poorly delivered. But as a team, we think the journey ends here for the game, to think about it sounds sad. Maybe sometime in the future, we will come back to it.' },
            { heading: 'MY ROLE', content: 'In this project, my role is the AI programmer, in which I have the job of creating the algorithm for the behavior of the AI and also some mechanics that correlate to the AI.\n\nThere are multiple algorithms that I use and implement to create the AI such as fuzzy logic, monte carlo, finite state machine, behavior tree, and AI perception. The one that stands out the most is definitely the fuzzy logic, and the thing is I created all algorithms in an unreal blueprint for some that is not really efficient to think about after I created it.\n\nList of what I did:\n• Project Planning and Design: Conceptualized and planned the development of the game "Xanthous," focusing on integrating AI to control NPC behavior in a horror game environment.\n• AI Techniques Implementation:\n  - Finite State Machine (FSM): Implemented FSM to manage various states of NPCs like Mysterious Sound, Smoky Ghost, and Emily.\n  - Behavior Tree: Used Behavior Trees to create complex and modular AI behavior for NPCs.\n  - Fuzzy Logic: Integrated Fuzzy Logic into the NPCs to adjust their behavior based on gameplay conditions.\n  - Monte Carlo Simulation: Applied Monte Carlo simulations to improve the AI decision-making process.\n• AI Perception System: Implemented AI Perception, which allows NPCs to simulate human-like senses such as hearing and sight.' },
            { heading: 'CONCLUSION', content: 'This project was a lot of fun to work on even though we had ups and downs, a lot of things were learned from this project hard and soft skill-wise.\n\nIn terms of hard skills, I learned algorithm concepts and development, also although visual scripting is really nice it\'s not really a good implementation for an algorithm that uses a good amount of calculation.\n\nSometimes I took the role of the leader especially when the project had just gone off from our main idea. We also are really open and help each other, which boosts our morale together to make the game much better.' },
        ],
    },
    {
        slug: 'coblos-son',
        title: 'Coblos Son',
        role: 'GAME PROGRAMMER',
        description: '"Coblos Son" is a joke and meme-ish game created for Global Game Jam 2024 Surabaya.',
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/dDXWPKiIFb8',
        itchUrl: 'https://s-ux.itch.io/coblos-son',
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
            { heading: 'INTRODUCTION', content: 'The Game Jam theme "Make Me Laugh" and my team did a pretty good job at it. The team was shuffled by the committee and the team composition I got is, me as Game Programmer, one Game Designer, one 2D artist, and one Sound Designer.\n\nWhen we was creating this game our way of thinking is to just laugh and enjoy it along the way and make the game just to make people laugh at it. The game idea itself was very absurd from the start which I think that\'s one of the essence for this game to be funny.\n\nThe game is a simulation or a story of one drunk individual participating the election, which able to pee and aim for the target for better accuracy of voting, while also this individual is imagining random Indonesian memes.\n\nThe gameplay maybe confusing because there\'s no indication or tutorial, honestly we don\'t have the time. When we present it to other participants, I\'m confident we got the most and loudest laugh from everyone. But it was not without critiques, because we displayed some face from the meme we put out.' },
            { heading: 'MY ROLE', content: 'At this point I was familiar with unity and C#. I began on working the core game mechanics straight away with dummy assets.\n\nA problem occurred where I need to move the mouse cursor on its own to add some force feedback for the pee mechanic. There is several way to achieve this, but the one that I use is Mouse.current.WarpCursorPosition(Vector2) which upon using it, I encountered that the package using UnityEngine.InputSystem was not available. So I thought this was the engine problem, but then I searched in the package manager there it is, sitting there not activated.\n\nAnother problem with the pee mechanic. What I did for the pee is, an object will spawned a 3D sphere and shoot the object towards the cursor location. This fixes it but the pee doesn\'t look realistic, it will a close object the same as the further object. So what I did is took the depth of the target that the mouse hover on, which makes the pee direction more realistic.\n\nOther game mechanics went smooth, and I was able to make the code quick enough so the core gameplay is completed and playable. But there was a problem that I realized after the time is up. Apparently the credit video can\'t be played on WebGL. Which I replaced with only a text after.' },
            { heading: 'CONCLUSION', content: 'My team was very fun to work with, it\'s a refreshing development since they will always be goofy and just laugh at everything. Our team communication I think was very good, even though I disagree on certain things that my team choose to do, but it\'s a fun experience.\n\nWhat I learned there was to enjoy it and not take things so serious can be more rewarding works in game development as well. On the technical side I learned that making easy to read code is not hard, you just need to have consistency all around.\n\nPlay Coblos Son on itch.io. There will be instruction on how to play in the description.' },
        ],
    },
    // 2023
    {
        slug: 'echo-remnant',
        title: 'Echo Remnant',
        role: 'GAME PROGRAMMER & GAME DESIGNER',
        description: 'A hardcore-level stealth game utilizing AI Perception tools from UE4. Developed for Garena GameJam.',
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/ap-CN9X1LHM',
        itchUrl: 'https://made-brio.itch.io/echo-remnant',
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
            { heading: 'INTRODUCTION', content: 'The Game Jam theme is "Replayability", when I heard this I wanted to be unique, so I came up with a hardcore-level game inspired by Only Up and Getting Over It. But I need something different so a stealth game is good because creating perception AI in the unreal engine is not that hard.\n\nThe challenge in this game was the animation because this was the first time I used montages and smooth transitions. The bottle throw is also a challenge, I decided to just spawn the bottle when the throw button is pressed and then add force, which caused the bottle to be unpredicted. This was unintentional, but it\'s in line with the game genre.\n\nThere\'s also a build problem I came across which I need to install some Visual Studio packages, and also a GitHub problem for uploading large data files, since we don\'t use LFS.' },
            { heading: 'MY ROLE', content: 'This is the list of what I did:\n• Game Core Mechanics: Controls, Bottle Throw\n• Animation System: Enemy Animation Montage, Player Animation Montage\n• AI Behavior Tree: AI Perception (See, Hear), AI Attack' },
            { heading: 'CONCLUSION', content: 'We encountered problems and barely managed to pull through with the game. We have planned larger than what we created, that idea is for another day.\n\nWhat I learned there was visuals and advanced mechanics are intriguing, but core mechanics will still be the heart of the game. I also learned a lot about games that don\'t have to be complex to be fun or immersive. On the technical side, I learned about the unreal engine animation blueprint and bone/socket. I also need to improve on the game optimization.\n\nDownload Echo Remnant on itch.io. There will be instructions on how to download in the description.' },
        ],
    },
    {
        slug: 'f-u-r-y',
        title: 'F.U.R.Y',
        role: 'GAME PROGRAMMER',
        description: '"F.U.R.Y" (Fiendish Unrest Rattles You) is a first-person horror-action game developed for Candela GameJam.',
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/_PCgHxttVJM',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/aMS11Pzritw',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/XFxLKTrspi0',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/DZLw_t2_WQU',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/FF_vFRcN8AU',
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
        thumbnail: '',
        videoUrl: 'https://www.youtube.com/embed/4I9NwBpB0BI',
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

// Helper to get YouTube thumbnail from video URL
export function getYouTubeThumbnail(videoUrl: string): string {
    const match = videoUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
    if (match) {
        return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
    }
    return '';
}
