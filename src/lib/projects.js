const data = [
    {
        name: 'BabyV',
        desc: 'A custom acrylic and stainless steel case for an unconventional keyboard.',
        skills: ['Product Design', 'Fusion 360'],
        image: '/Slide1',
        url: '/projects/babyv'
    },
    {
        name: 'Juniper',
        desc: 'A simple design system built in figma with clarity and accessibility in mind.',
        skills: ['Typography', 'Iconography', 'Accessibility', 'Figma'],
        image: '/Slide2',
        url: '/projects/juniper'
    },
    {
        name: 'Elder Dragon Handbook',
        desc: 'Creating an easier Magic: The Gathering commander finder.',
        skills: ['HTML', 'CSS', 'Svelte', 'Mobile', 'Figma'],
        image: '/Slide4',
        url: '/projects/edhb'
    },
    {
        name: 'Reporting on Twitch',
        desc: 'Redesigning the Twitch report flow for more completions and more accurate reports.',
        skills: ['E2E Process', 'Prototyping', 'Figma'],
        image: '/Slide3',
        url: '/projects/twitchreports'
    }
]

export const slides = data.map(({ id, name, desc, skills, image, url }) => {
    return {
		name,
		desc,
		skills,
        image,
        url
	};
});