import React from 'react'

const TechnicalSkills: React.FC = () => {
    const skillCategories = [
        {
            title: "Languages & Frameworks",
            skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"]
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "Responsive Design"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"]
        },
        {
            title: "Testing & QA",
            skills: ["Playwright", "Jest", "Mocha", "Test-Driven Development (TDD)", "Automated Testing"]
        },
        {
            title: "DevOps & Tools",
            skills: ["GitHub Actions", "Docker", "CI/CD", "VS Code", "Cursor", "Git"]
        },
        {
            title: "Methodologies",
            skills: ["Agile/Scrum", "Code Review", "Pair Programming", "Technical Documentation"]
        }
    ]

    return (
        <section className="mb-12">
            <h2 className="section-title">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                    <div key={index} className="card">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">{category.title}</h3>
                        <div className="flex flex-wrap">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnicalSkills 