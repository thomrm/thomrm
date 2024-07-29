const data = [
    {
        name: 'Elder Dragon Handbook',
        type: 'App Build',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'EDHb'
    },
    {
        name: 'Reporting on Twitch',
        type: 'Case Study',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'TwitchReporting'
    },
    {
        name: 'NYC Vectors',
        type: 'Quick Shot',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'NYCVectors'
    },
    {
        name: 'Lorebox.ink',
        type: 'App Build',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'Lorebox'
    },
    {
        name: 'Moonbeam Badges',
        type: 'Quick Shot',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'MoonbeamBadges'
    },
    {
        name: 'Watch Series (GMT)',
        type: 'Quick Shot',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'GMT'
    }
]

export const work = data.map(({ name, type, desc, skills, id }) => {
    return {
		name,
        type,
		desc,
		skills,
        id
	};
});