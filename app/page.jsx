'use client'

import { motion } from "framer-motion"
import { useContext } from "react"
import { CursorContext } from "@/components/CursorContext"
import Image from "next/image"
import ModalVideo from "@/components/ModalVideo"

const Home = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}}
    className="min-h-screen flex items-center overflow-x-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          <motion.div 
          initial={{opacity:0, y: -100}}
          animate={{opacity: 1, y: 0, transition: {delay: 2, duration: 1, ease: 'easeInOut'}}}
          className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
            <h1 className="h1 mb-6">Maquillage naturel <br /> Faites-vous plaisir</h1>
            <p className="lead max-w-xl mx-auto">Révélez votre beauté avec notre gamme de maquillage exclusive où chaque touche est une œuvre d'art.</p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button 
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              className="btn btn-lg">Notre catalogue</motion.button>
              <motion.div 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.div 
            initial={{opacity:0, bottom: '-100%'}}
            animate={{opacity: 1, bottom: 0, transition: {delay: 2.2, duration: 1.2, ease: 'easeInOut'}}}
            className="hidden xl:flex fixed bottom-0">
              <Image className="-cover" src={"/assets/svg1.svg"} width={400} height={350} alt=""/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home