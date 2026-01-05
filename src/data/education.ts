export interface Education {
    slug: string;
    title: string;
    institution: string;
    degree: string;
    description: string;
    thumbnail: string;
    duration: string;
    about: string;
    info: {
        degree: string;
        institution: string;
        duration: string;
        major: string;
    };
    sections: {
        heading: string;
        content: string;
    }[];
}

export const education: Education[] = [
    {
        slug: 'eepis',
        title: 'EEPIS',
        institution: 'Electronic Engineering Polytechnic Institute of Surabaya',
        degree: 'Bachelor Degree',
        description: 'Bachelor Degree in Computer Engineering with a major in Game Technology.',
        thumbnail: '/images/eepis.jpg',
        duration: '2020 - 2024',
        about: 'Bachelor Degree in Computer Engineering in EEPIS (Electronic Engineering Polytechnic Institute of Surabaya). The major that I took is Game Technology.',
        info: {
            degree: 'Bachelor Degree',
            institution: 'EEPIS',
            duration: '2020 - 2024',
            major: 'Game Technology',
        },
        sections: [
            { heading: 'LEARNING', content: 'Where I learned game development from the ground up, like the psychology of players, I learned and practiced all roles in game development, the journalistic and game review in the game industry, and so on.' },
            { heading: 'FOCUS AREAS', content: 'Game programming, game design, player psychology, game industry analysis.' },
        ],
    },
];

export function getEducationBySlug(slug: string): Education | undefined {
    return education.find(e => e.slug === slug);
}
