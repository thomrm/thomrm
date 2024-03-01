const data = [
    {
        name: 'BabyV',
        desc: 'A custom acrylic and stainless steel case for an unconventional keyboard.',
        skills: ['Product Design', 'Fusion 360'],
        image: '/Slide2.png',
        url: '/projects/babyv'
    },
    {
        name: 'Juniper',
        desc: 'A simple design system built in figma with clarity and accessibility in mind.',
        skills: ['Typography', 'Iconography', 'Accessibility', 'Figma'],
        image: '/Slide1.png',
        url: '/projects/juniper'
    },
    {
        name: 'Reporting on Twitch',
        desc: 'Redesigning the Twitch report flow for more completions and more accurate reports.',
        skills: ['E2E Process', 'Prototyping', 'Figma'],
        image: '/Slide3.png',
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