const data = [
    {
        name: 'Elder Dragon Handbook',
        type: 'Short',
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
        type: 'Short',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'NYCVectors'
    },
    {
        name: 'Lorebox.ink',
        type: 'Case Study',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'Lorebox'
    },
    {
        name: 'Moonbeam Badges',
        type: 'Case Study',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'MoonbeamBadges'
    },
    {
        name: 'Watch 001 GMT',
        type: 'Short',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'GMT'
    },
    {
        name: 'Lunar Module Components',
        type: 'Short',
        desc: 'Description goes here.',
        skills: ['Figma', 'UX'],
        id: 'ApolloControls'
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