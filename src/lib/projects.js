const data = [
    {
        id: 1,
        name: 'Juniper',
        desc: 'A simple design system built in figma with clarity and accessibility in mind.',
        skills: ['Typography', 'Iconography', 'Figma'],
        image: '/Slide1.png',
        url: '/projects/juniper'
    },
    {
        id: 2,
        name: 'BabyV',
        desc: 'A custom acrylic and stainless steel case for an unconventional keyboard.',
        skills: ['Product Design', 'Fusion 360'],
        image: '/Slide2.png',
        url: '/projects/babyv'
    }
]

export const slides = data.map(({ id, name, desc, skills, image, url }) => {
    return {
		id,
		name,
		desc,
		skills,
        image,
        url
	};
});