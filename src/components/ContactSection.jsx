import faceImg from "../assets/images/face.png"
import { ArrowUpRight } from "lucide-react"

function ContactSection() {

    const contacts = [
        {id: 1, text: "sahilsolomon101@gmail.com", href: "mailto:sahilsolomon101@gmail.com"},
        {id: 2, text: "github-sahilsol0", href: "https://github.com/sahilsol0"},
    ]
    return (
        <section className="bg-black text-white py-16 flex flex-col items-center gap-8">
            <h1 className="text-3xl/6 font-normal tracking-tighter">CONTACT ME</h1>
            <div className="w-32"><img src={faceImg} alt="" className="fit rounded-full"/></div>

            <ul className="flex flex-col items-center">
                {
                    contacts.map((contact) => (
                        <li key={contact.id}>
                            <a href={contact.href} target="#" className="flex">{contact.text}<ArrowUpRight /></a>
                        </li>
                    ))
                }
            </ul>
      </section>
    )
}

export default ContactSection