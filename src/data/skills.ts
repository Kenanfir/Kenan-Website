export interface Skill {
    name: string;
    level: 1 | 2 | 3 | 4; // 1 = Beginner, 4 = Professional
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Coding',
        skills: [
            { name: 'C++', level: 3 },
            { name: 'C#', level: 3 },
            { name: 'Swift', level: 2 },
            { name: 'UE Blueprints', level: 4 },
            { name: 'Python', level: 3 },
            { name: 'Dart', level: 2 },
            { name: 'JavaScript', level: 2 },
        ],
    },
    {
        name: 'Software',
        skills: [
            { name: 'GIT', level: 4 },
            { name: 'UE4', level: 3 },
            { name: 'UE5', level: 3 },
            { name: 'Unity', level: 3 },
            { name: 'Blender', level: 1 },
            { name: 'Windows', level: 4 },
            { name: 'Linux', level: 3 },
            { name: 'MacOS', level: 4 },
            { name: 'Visual Studio', level: 2 },
            { name: 'VSCode', level: 3 },
            { name: 'Xcode', level: 3 },
        ],
    },
    {
        name: 'Backend & DevOps',
        skills: [
            { name: 'Node.js', level: 3 },
            { name: 'Redis', level: 2 },
            { name: 'Docker', level: 3 },
            { name: 'Dokploy', level: 2 },
            { name: 'Proxmox', level: 3 },
            { name: 'Jupyter', level: 3 },
        ],
    },
    {
        name: 'Productivity',
        skills: [
            { name: 'Word', level: 3 },
            { name: 'Canva', level: 4 },
            { name: 'Confluence', level: 3 },
            { name: 'Trello', level: 3 },
            { name: 'Notion', level: 2 },
            { name: 'Miro', level: 3 },
        ],
    },
];

// Level labels
export const levelLabels: Record<number, string> = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Professional',
};
