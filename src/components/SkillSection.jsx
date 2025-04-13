function SkillSection() {

    const skills = [
        {id:1, title: "Frontend", content: "HTML, CSS, JavaScript, TailwindCSS"},
        {id:2, title: "Backend", content: "Django, Django REST Framework"},
        {id:3, title: "Databases", content: "PostgreSQL, MySQL, SQLite"},
        {id:4, title: "Design", content: "Figma, Photoshop"},
        {id:5, title: "Coding", content: "Git, Github, Visual Studio"},
    ]

    return (
        <section className="px-10 py-24 flex flex-col items-center gap-10">
            <h1 className="font-black text-4xl tracking-tighter">Skill set</h1>
            <div className="text-2xl/7 font-medium tracking-tighter flex flex-col gap-10">
                {
                    skills.map((skill) => (
                        <div key={skill.id} className="grid grid-cols-8 gap-2">
                            <p className="col-span-3">{skill.title}</p>
                            <p className="col-span-5">{skill.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SkillSection