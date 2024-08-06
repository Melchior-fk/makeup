'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useContext } from "react"
import { CursorContext } from "@/components/CursorContext"
import StatsItems from "@/components/StatsItems"


const About = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  return (
     <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}}
     className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
          <motion.div 
          initial={{opacity: 0, x: -60}} animate={{opacity: 1, x:0, transition : {delay: 2, duration: 0.6, ease : 'easeInOut'}}}
          className="relative w-[380px] h-[350px] xl:w-[380px] xl:h-[450px] mb-8 xl:mx-0">
            <Image src={'/assets/img2.png'} fill quality={100} priority alt="" className="object-contain"/>
          </motion.div>
          <motion.div 
          initial={{opacity: 0, x: 60}} animate={{opacity: 1, x:0, transition : {delay: 2.2, duration: 0.6, ease : 'easeInOut'}}}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-autp xl:mx-0">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Une commuanauté pour vos soins de beauté</h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa blanditiis sint unde voluptatibus cumque ducimus ab veniam deleniti incid.</p>
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div><StatsItems countNum={22} text={'Années sur le marché'}/></div>
              <div><StatsItems countNum={30} countText='k+' text={'Clientes satisfaites'}/></div>
              <div><StatsItems countNum={90} countText='%' text={'A base de solutions naturelles'}/></div>
            </div>
            <motion.button 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn mx-auto xl:mx-0">Nous contacter</motion.button>
          </motion.div>
        </div>
      </div>
     </motion.section>
  )
}

export default About