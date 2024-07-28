const data = [
    {
        skill: 'UX',
        level: '5',
        type: 'design'
    },
    {
        skill: 'Prototyping',
        level: '5',
        type: 'design'
    },
    {
        skill: 'Iconography',
        level: '5',
        type: 'design'
    },
    {
        skill: 'Wire-Framing',
        level: '4',
        type: 'design'
    },
    {
        skill: 'Typography',
        level: '4',
        type: 'design'
    },
    {
        skill: 'Accessibility',
        level: '4',
        type: 'design'
    },
    {
        skill: 'E2E Process',
        level: '4',
        type: 'design'
    },
    {
        skill: 'Animation',
        level: '3',
        type: 'design'
    },
    {
        skill: 'Mobile',
        level: '3',
        type: 'design'
    },
    {
        skill: 'HTML',
        level: '5',
        type: 'tech'
    },
    {
        skill: 'CSS',
        level: '5',
        type: 'tech'
    },
    {
        skill: 'JS',
        level: '4',
        type: 'tech'
    },
    {
        skill: 'Svelte',
        level: '4',
        type: 'tech'
    },
    {
        skill: 'Git',
        level: '3',
        type: 'tech'
    },
    {
        skill: 'React',
        level: '2',
        type: 'tech'
    },
    {
        skill: 'Figma',
        level: '5',
        type: 'app'
    },
    {
        skill: 'VSCode',
        level: '4',
        type: 'app'
    },
    {
        skill: 'Fusion360',
        level: '3',
        type: 'app'
    },
    {
        skill: 'Blender',
        level: '1',
        type: 'app'
    },
]

export const skills = data.map(({ id, skill, level, type }) => {
    return {
		skill,
        level,
		type,
	};
});