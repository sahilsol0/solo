import faceSticker from "../assets/images/face_sticker.png"

function AboutSection() {
    return (
        <section className="bg-lime-bg  text-lime-fg py-24 flex flex-col items-center gap-4">
        <h1 className="font-black text-4xl tracking-tighter">About me.</h1>
        <img src={faceSticker} alt="face of Sahil in a sticker style." className=""/>
        <h4 className="text-2xl font-normal tracking-tight text-center px-17 md:px-96">I am a Computer Science (B.Tech.) graduate specializing in full-stack Python/ Django development, handling both front-end and back-end aspects of web creation. <br/><br />Graduated in 2025, I’ve utilized and polished my skills through projects and internships.</h4>
      </section>
    )
}

export default AboutSection