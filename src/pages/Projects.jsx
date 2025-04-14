import { motion } from "motion/react"
import { ArrowUpRight, ArrowLeft } from "lucide-react"
import { Link } from "react-router"

function Projects() {
    const projects = [
        {id: 1, title: "LIBRARY MANAGEMENT SYSTEM", github: "#", images: []},
        {id: 2, title: "DRIVER SAFETY WEB APP", github: "#", images: []},
        {id: 3, title: "SORTING ALGORITHM VISUALIZATION", github: "#", images: []},
        {id: 4, title: "RASTER GRAPHICS ALGORITHM VISUALIZATION", github: "#", images: []},
    ]

    const animation = {
		initial: {
		  opacity: 0,
		  filter: 'blur(10px)',
		  y: 75,
		},
		whileInView: {
		  opacity: 1,
		  filter: 'blur(0px)',
		  y: 0,
		},
		viewport: { once: true }
	}

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: .5,
                ease: ['easeInOut']
            }}
            className="px-8 py-10 lg:py-16 min-h-dvh bg-black text-white flex flex-col items-center gap-16"
        >
            <h1 className="text-5xl/8 tracking-tight text-center">PROJECTS</h1>
            <section className="flex flex-col gap-12">
                {
                    projects.map((project) => (
                        <motion.h1 
                            key={project.id}
                            {...animation}
                            transition={{ delay: 0.2 * project.id, duration: 1, ease: 'easeInOut' }}
                            className="text-3xl/7 font-medium tracking-tighter flex gap-16 pr-8"
                        >
                            <span className="">{project.id}</span>
                            <span className="flex flex-col items-start gap-2">
                                {project.title}
                                <a href={project.github} className="!text-base font-normal tracking-normal px-4 py border rounded-full flex items-end gap-2">View on github<ArrowUpRight /></a>
                            </span>
                        </motion.h1>
                    ))
                }
            </section>
            <Link to="/" className="flex"><ArrowLeft />Go Back</Link>
        </motion.section>
    )
}

export default Projects