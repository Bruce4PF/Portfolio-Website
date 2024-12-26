import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bruce',
    lastName:  'Liu',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Product Manager',
    avatar:    '/images/Bruce Liu.png',
    location:  'Canada/Eastern',        // IANA time zone identifier
    languages: ['English', 'Mandarin', 'French']  // List of spoken languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Shitposts</>,
    description: <>If you want to read my random thoughts and rants every once in a while, put in your email!</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Bruce4PF/Portfolio-Website',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/bliu445/',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/bruce.liu_/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:bliu.hba2025@ivey.ca'
    },
]

const home = {
    label: 'Home',
    title: `${person.name}`,
    description: `My portfolio website showcasing my work as a ${person.role}`,
    headline: <>Product Manager and Builder</>,
    subline: <>I'm Bruce, a dual degree Computer Science & Business student at <InlineCode>Ivey Business School</InlineCode> & <InlineCode>Western University</InlineCode>.
    After hours, I'm building products, communities, and chasing adventures!</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/bruceliu/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm a Canada-born product manager with a passion for building products people love and creating thriving communities! My experience spans from RAG AI, deep learning models, frontend development, end-to-end ownership, and design!</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Symend',
                timeframe: 'May 2024 - Dec 2024',
                role: 'Technical Product Manager Intern',
                achievements: [
                    <>Led a cross-functional team to "make Symend scalable", building a RAG AI onboarding solution 0-1, reducing time to value by over 99% (640 to 2 hours)</>,
                    <>Delivered MVP 20% ahead of schedule. Secured buy-in and a $220,000 budget for further development from C-suite executives and VPs</>,
                    <>Defined and prioritized requirements through PRDs and regular backlog grooming, resulting in a 25% increase in sprint velocity</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Terra Optima Labs',
                timeframe: 'May 2023 - Sep 2023',
                role: 'Product Manager Intern',
                achievements: [
                    <>Conducted user interviews and identified key product improvements, leading to a 70% faster growth rate in mushroom farming applications</>,
                    <>Crafted a go-to-market strategy for flagship product. Boosted customer reach by 30% and increased initial sales within selected segments</>,
                    <>Analyzed product workflows, identifying key areas for process improvement; implemented a humidification system that reduced production time by 29%</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Ivey Business School',
                description: <>Bachelor of Arts, Honours Business Administration <br/> September 2023 - April 2025</>,
            },
            {
                name: 'University of Western Ontario',
                description: <>Bachelor of Science, Computer Science <br/> September 2021 - April 2026</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Projects',
        skills: [
            {
                title: 'Outlook Subscription Manager',
                description: <>A streamlined inbox organizer tool pitched to Microsoft.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'ChuckleChallenge.com',
                description: <>Try Not To Laugh with computer vision tracking.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ChuckleChallenge.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Metal Defect Classifier',
                description: <>Metal defect dection model, represented Western at a national AI conference.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ChuckleChallenge.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };