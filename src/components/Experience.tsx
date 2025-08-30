const experienceData = [
{
    title: "Frontend Developer Intern",
    company: "Integratr Corporation",
    date: "Feb 2025 - May 2025",
    bullets: [
    "Worked on frontend features for eGovernment and car insurance platforms",
    "Joined Agile sprint planning and daily stand-ups",
    "Built responsive UI components with cross-browser compatibility"
    ]
},
{
    title: "Bachelor of Science in Information Technology",
    company: "Pasig Catholic College",
    date: "May 2025",
    bullets: [
    "Developed projects using HTML, CSS, JavaScript, C++, Java, and Ionic",
    "Integrated cloud services with Firebase for web and mobile applications",
    "Created technical documentation including ERDs, system workflows, and research papers",
    ]
},
{
    title: "3rd & 4th Year Beadle, IT Society Organization Member",
    company: "Pasig Catholic College",
    date: "Sept 2023 - May 2025",
    bullets: [
    "Organized and facilitated IT student events",
    "Shared updates and supported active student engagement",
    "Helped plan and execute events smoothly"
    ]
},
{
    title: "Senior High School - Technical Vocational Livelihood (TVL) Strand",
    company: "Pasig Catholic College",
    date: "Batch 2021",
    bullets: [
    "Studied computer hardware servicing and gained hands-on troubleshooting experience",
    "Learned Java programming fundamentals and applied them in academic projects",
    "Built a strong foundation in technology, preparing for advanced IT studies in college"
    ]
}
];

const Experience = () => {
return (
    <section className="py-24 bg-black text-white w-full">
    <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
        Experience
        <span className="block w-24 h-1 bg-primary-600 mx-auto mt-3 rounded-full"></span>
    </h2>

    <div className="relative max-w-4xl mx-auto border-l border-gray-700 pl-8 space-y-16">
        {experienceData.map((item, index) => (
        <div className="relative pl-4" key={index}>
            {/* Primary Dot */}
            <span className="absolute -left-5 top-[0.65rem] w-4 h-4 bg-primary-600 rounded-full" />

            {/* Content */}
            <div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{item.company} | {item.date}</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 text-base">
                {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
                ))}
            </ul>
            </div>
        </div>
        ))}
    </div>
    </section>
);
};

export default Experience;
