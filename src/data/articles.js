export const articles = [
    {
        id: 1,
        title: "The Death of Flat Design",
        date: "Jan 02, 2026",
        category: "Design",
        readTime: "5 min",
        content: `
            <p class="mb-4">Flat design has dominated the web for over a decade. But as screens become higher resolution and our devices more powerful, the need for sterility is fading. We are entering an era of <strong>Neo-Skeuomorphism</strong>—where depth, texture, and light play a crucial role in digital interfaces.</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">Why Now?</h3>
            <p class="mb-4">Users are craving tactile experiences. In a world of glass slabs, we want our digital buttons to feel like they can be pushed. We want shadows that ground elements in reality. It's not about making a calendar app look like leather (looking at you, iOS 6), but about using physics-based lighting to create hierarchy and focus.</p>

            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Role of 3D</h3>
            <p class="mb-4">With WebGL becoming accessible through libraries like Three.js and React Three Fiber, we can now embed actual 3D objects into our layouts without destroying performance. This allows for:</p>
            <ul class="list-disc list-inside space-y-2 mb-8 ml-4">
                <li>Interactive product showcases</li>
                <li>Particle systems that respond to cursor movement</li>
                <li>Glassmorphism that actually refracts background elements</li>
            </ul>

            <p>The future isn't flat. It's deep, rich, and alive.</p>
        `
    },
    {
        id: 2,
        title: "React Server Components",
        date: "Dec 18, 2025",
        category: "Engineering",
        readTime: "8 min",
        content: `
            <p class="mb-4">React Server Components (RSC) represent the biggest paradigm shift in React's history. For years, we've been pushing more and more logic to the client, resulting in massive bundles and slow TTI.</p>
            
            <h3 class="text-2xl font-bold text-white mt-8 mb-4">The Pendulum Swings Back</h3>
            <p class="mb-4">RSC allows us to run components exclusively on the server. This means:</p>
            <ul class="list-disc list-inside space-y-2 mb-8 ml-4">
                <li>Zero bundle size for server-only dependencies</li>
                <li>Direct database access from components</li>
                <li>Automatic code splitting</li>
            </ul>

            <p>It's not just an optimization; it's a new mental model for building applications.</p>
        `
    },
    {
        id: 3,
        title: "Motion as Meaning",
        date: "Nov 30, 2025",
        category: "Design",
        readTime: "4 min",
        content: `
            <p class="mb-4">Animation on the web used to be a garnish. Something you added at the end if you had time. Today, motion is structural.</p>
            <p><strong>Physics-based animation</strong> (springs) feels natural because it mimics the real world. Linear transitions feel robotic. When an interface responds with the weight and friction of physical objects, usage becomes intuitive.</p>
        `
    },
    {
        id: 4,
        title: "Accessible 3D Web",
        date: "Oct 12, 2025",
        category: "Engineering",
        readTime: "6 min",
        content: `
            <p class="mb-4">WebGL is powerful, but it's often a black box for screen readers. Only 20% of award-winning "immersive" sites are actually usable by people with disabilities.</p>
            <p>We need to stop treating accessibility as a constraint and start treating it as a design challenge. Semantic HTML overlays, keyboard navigation for 3D scenes, and reduced motion preferences are non-negotiable.</p>
        `
    },
    {
        id: 5,
        title: "The Art of Micro-Interactions",
        date: "Sep 28, 2025",
        category: "Design",
        readTime: "3 min",
        content: `
            <p class="mb-4">The difference between a good app and a great app is often in the details. A heart icon that pops when clicked. A toggle that snaps satisfyingly.</p>
            <p>Micro-interactions provide feedback, communicate status, and most importantly, deliver delight.</p>
        `
    },
    {
        id: 6,
        title: "Scaling Design Systems",
        date: "Aug 15, 2025",
        category: "Strategy",
        readTime: "10 min",
        content: `
            <p class="mb-4">A design system is not a Figma file. It is a product served to other products. Without governance, versioning, and adoption strategies, your tokens are just suggestions.</p>
            <p>The key to scaling is <strong>automation</strong>. Design tokens should flow from Figma to CSS variables automatically.</p>
        `
    }
];
