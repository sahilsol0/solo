import { motion } from "motion/react"
import { Link } from "react-router"
import faceImg from "../assets/images/face.png"
import { ArrowUpRight, ArrowLeft } from "lucide-react"

function Contact() {

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

    const contacts = [
        {id: 1, text: "sahilsolomon101@gmail.com", href: "mailto:sahilsolomon101@gmail.com"},
        {id: 2, text: "github-sahilsol0", href: "https://github.com/sahilsol0"},
        {id: 3, text: "linkedin-Sahil Solomon", href: "https://www.linkedin.com/in/sahil-solomon/"},
    ]
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                duration: .5,
                ease: ['easeInOut']
            }}
            className="bg-lime-bg text-lime-fg px-10 py-12 flex flex-col items-center gap-10 min-h-dvh"
        >
            <motion.h1
                {...animation}
                transition={{ delay: 0.2, duration: 1, ease: 'easeInOut' }}
                className="text-5xl/12 font-bold tracking-tighter text-center"
                >
                LET'S CREATE SOMETHING GREAT !!
            </motion.h1>
            <motion.h1 
                {...animation}
                transition={{ delay: 0.3, duration: 1, ease: 'easeInOut' }}
                className="text-4xl/8 font-normal tracking-tighter text-center"
                >
                CONTACT ME
            </motion.h1>
            <motion.div 
                {...animation}
                transition={{ delay: 0.4, duration: 1, ease: 'easeInOut' }}
                className="w-48"
            >
                <img src={faceImg} alt="" className="fit rounded-full"/>
            </motion.div>

            <ul className="flex flex-col items-center">
                {
                    contacts.map((contact) => (
                        <motion.li 
                            key={contact.id}
                            {...animation}
                            transition={{ delay: 0.2 * contact.id, duration: 1, ease: 'easeInOut' }}
                        >
                            <a href={contact.href} target="#" className="flex items-end text-xl underline">{contact.text}<ArrowUpRight /></a>
                        </motion.li>
                    ))
                }
            </ul>
            <Link to="/" className="flex mt-20"><ArrowLeft />Go Back</Link>
      </motion.section>
    )
}

export default Contact