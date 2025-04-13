import faceImg from "../assets/images/face.png"

function ContactSection() {

    const contacts = [
        {id: 1, text: "sahilsolomon101@gmail.com", href: "mailto:sahilsolomon101@gmail.com"},
        {id: 2, text: "github-sahilsol0", href: "https://github.com/sahilsol0"},
    ]
    return (
        <section className="bg-black text-white py-10 flex flex-col items-center gap-10">
            <h1 className="text-3xl/6 font-normal tracking-tighter">CONTACT ME</h1>
            <div className="w-32"><img src={faceImg} alt="" className="fit rounded-full"/></div>

            <ul>
                {
                    contacts.map((contact) => (
                        <li key={contact.id} className="text-center"><a href={contact.href} target="#">{contact.text}</a></li>
                    ))
                }
            </ul>
      </section>
    )
}

export default ContactSection