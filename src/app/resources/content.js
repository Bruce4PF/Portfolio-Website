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
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>If you want to read my random thoughts and rants every once in a while, put in your email!</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Bruce4PF',
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
    headline: <>Product Manager and Community Builder</>,
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
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/Symend.png',
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
                ],
                images: [ ]
            },
            {
                company: 'Zentein Nutrition Inc.',
                timeframe: 'Oct 2021 - Sep 2022',
                role: 'Product Manager Intern',
                achievements: [
                    <>Pioneered product marketing campaign by introducing sponsor program, leading to a 25% increase in site traffic</>,
                    <>Championed ideation and development for a new product by creating roadmap, sourcing suppliers, and testing product iteratively over two months, resulting in 6 product variations</>
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
        title: 'Technical Skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to create beautiful designs and prototypes lightning fast.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/Figma 1.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/Outlook Subscription Manager Prototype 3.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Deep Learning Models',
                description: <>Finding ways to revolutionize the world with AI.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/Deep Learning Models 2.png',
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
                title: 'Next.js',
                description: <>Building quick, responsive, eye-catching websites.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/IPS Website.png',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/ChuckleChallenge Cover 2.png',
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
    title: 'My photos!',
    description: `${person.name}'s life in photos`,
    images: [
        { 
            src: '/images/gallery/img1.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img16.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img7.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img15.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img5.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img4.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img17.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img6.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img8.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img9.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img12.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img18.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img19.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };