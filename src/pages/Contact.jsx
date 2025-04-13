import { motion } from "motion/react"
import { Link } from "react-router"
import faceImg from "../assets/images/face.png"
import { ArrowUpRight, ArrowLeft } from "lucide-react"

function Contact({animation}) {

    const contacts = [
        {id: 1, text: "sahilsolomon101@gmail.com", href: "mailto:sahilsolomon101@gmail.com"},
        {id: 2, text: "github-sahilsol0", href: "https://github.com/sahilsol0"},
        {id: 3, text: "linkedin-Sahil Solomon", href: "#"},
    ]
    return (
        <section className="bg-lime-bg text-lime-fg px-10 py-12 flex flex-col items-center gap-10 min-h-dvh">
            <h1 className="text-5xl/12 font-bold tracking-tighter text-center">LET'S CREATE SOMETHING GREAT !!</h1>
            <h1 className="text-4xl/8 font-normal tracking-tighter text-center">CONTACT ME</h1>
            <div className="w-48"><img src={faceImg} alt="" className="fit rounded-full"/></div>

            <ul className="flex flex-col items-center">
                {
                    contacts.map((contact) => (
                        <motion.li 
                            key={contact.id}
                            {...animation}
                            transition={{ delay: 0.2 * contact.id, duration: 1, ease: 'easeInOut' }}
                        >
                            <a href={contact.href} target="#" className="flex text-xl underline">{contact.text}<ArrowUpRight /></a>
                        </motion.li>
                    ))
                }
            </ul>
            <Link to="/" className="flex mt-20"><ArrowLeft />Go Back</Link>
      </section>
    )
}

export default Contact