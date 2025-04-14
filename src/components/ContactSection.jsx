import { motion } from "motion/react"
import faceImg from "../assets/images/face.png"
import { ArrowUpRight } from "lucide-react"

function ContactSection({animation}) {

    const contacts = [
        {id: 1, text: "sahilsolomon101@gmail.com", href: "mailto:sahilsolomon101@gmail.com"},
        {id: 2, text: "github-sahilsol0", href: "https://github.com/sahilsol0"},
        {id: 3, text: "linkedin-Sahil Solomon", href: "https://www.linkedin.com/in/sahil-solomon/"},
    ]
    return (
        <section className="bg-black text-white py-16 flex flex-col items-center gap-8">
            <h1 className="text-3xl/6 font-normal tracking-tighter">CONTACT ME</h1>
            <div className="w-32"><img src={faceImg} alt="" className="fit rounded-full"/></div>

            <ul className="flex flex-col items-center">
                {
                    contacts.map((contact) => (
                        <motion.li 
                            key={contact.id}
                            {...animation}
                            transition={{ delay: 0.2 * contact.id, duration: 1, ease: 'easeInOut' }}
                        >
                            <a href={contact.href} target="#" className="flex items-end">{contact.text}<ArrowUpRight /></a>
                        </motion.li>
                    ))
                }
            </ul>
      </section>
    )
}

export default ContactSection