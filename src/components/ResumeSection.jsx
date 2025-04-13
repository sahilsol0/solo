import resumeSticker from "../assets/images/resume_sticker.png"

function resumeSection(params) {
    
    return (
        <section className=" bg-lime-bg py-16 text-lime-fg text-4xl/8 font-black tracking-tighter flex flex-col items-center relative">
            <h1>GRAB MY RESUME</h1>
            <h1>GRAB MY RESUME</h1>
            <h1>GRAB MY RESUME</h1>
            <h1>GRAB MY RESUME</h1>
            <h1>GRAB MY RESUME</h1>
            <p className="!text-lg/4 font-normal tracking-normal">( Click to view )</p>
            <img src={resumeSticker} alt="" className="absolute scale-110"/>
      </section>
    )
}

export default resumeSection