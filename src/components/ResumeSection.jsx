import {useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import resumeSticker from "../assets/images/resume_sticker.png"

function ResumeSection() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    
    return (
        <section className=" bg-lime-bg py-12 text-lime-fg text-4xl/8 font-black flex flex-col items-center tracking-tighter relative overflow-hidden">
            <div ref={container}>
                <Slide direction={'left'} left={"-15%"} progress={scrollYProgress} speed={100}/>
                <Slide direction={'right'} left={"-25%"} progress={scrollYProgress} speed={50}/>
                <Slide direction={'left'}  left={"15%"} progress={scrollYProgress} speed={75}/>
                <Slide direction={'right'}  left={"15%"} progress={scrollYProgress} speed={150}/>
                <Slide direction={'left'}  left={"-10%"} progress={scrollYProgress} speed={30}/>
            </div>
            <p className="!text-lg/4 font-normal tracking-normal">( Click to view )</p>
            <a href="#" className="absolute"><img src={resumeSticker} alt="" className="scale-110"/></a>
      </section>
    )
}

const Slide = (props) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [25 * direction, -props.speed * direction])
  
    return (
      <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase />
        <Phrase />
        <Phrase />
      </motion.div>
    )
}
    
  
  const Phrase = () => {
  
    return (
      <div className={'px-3 gap-2 flex items-center'}>
        <p className=''>SEE MY RESUME</p>
      {/* <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span> */}
      </div>
    )
  }

export default ResumeSection