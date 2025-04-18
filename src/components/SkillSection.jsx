import { motion } from "motion/react"
import SplitStaggerText from "./animation/SplitStaggerText.jsx"

function SkillSection({animation}) {

    const skills = [
        {id:1, title: "Frontend", content: "HTML, CSS, JavaScript, TailwindCSS"},
        {id:2, title: "Backend", content: "Django, Django REST Framework"},
        {id:3, title: "Databases", content: "PostgreSQL, MySQL, SQLite"},
        {id:4, title: "Design", content: "Figma, Photoshop"},
        {id:5, title: "Coding", content: "Git, Github, Visual Studio"},
    ]

    return (
        <section className="px-10 py-24 flex flex-col items-center gap-10">
            <motion.h1
                {...animation}
				transition={{ delay: 0.2, duration: .6, ease: 'easeInOut' }}
                className="font-black text-4xl tracking-tighter"
            >
                Skill set
            </motion.h1>
            {/* <SplitStaggerText text="Skill set" delay={0.5} style="font-black text-4xl tracking-tighter"/> */}
            <div className="text-2xl/7 font-medium tracking-tighter flex flex-col gap-10">
                {
                    skills.map((skill) => (
                        <motion.div 
                            key={skill.id} 
                            {...animation}
                            transition={{ delay: 0.1 * skill.id, duration: .6, ease: 'easeInOut' }}
                            className="grid grid-cols-8 gap-8"
                        >
                            <p className="col-span-3">{skill.title}</p>
                            <p className="col-span-5">{skill.content}</p>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default SkillSection