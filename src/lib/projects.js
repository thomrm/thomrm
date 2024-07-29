const data = [
    {
        name: 'Elder Dragon Handbook',
        type: 'App Build',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        image: 'Blueprint(EDHb)'
    },
    {
        name: 'Reporting on Twitch',
        type: 'Case Study',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        image: 'Blueprint(Reporting)'
    },
    {
        name: 'NYC Vectors',
        type: 'Quick Shot',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        image: 'Blueprint(Token)'
    },
    {
        name: 'Lorebox.ink',
        type: 'App Build',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        image: 'Blueprint(Lorebox)'
    },
    {
        name: 'Moonbeam Badges',
        type: 'Quick Shot',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        image: 'Blueprint(MoonbeamBadges)'
    },
    {
        name: 'Watch Series (GMT)',
        type: 'Quick Shot',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        image: 'Blueprint(GMT)'
    }
]

export const work = data.map(({ name, type, desc, skills, image }) => {
    return {
		name,
        type,
		desc,
		skills,
        image
	};
});