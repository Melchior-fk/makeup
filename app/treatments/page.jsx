'use client'
import { easeInOut, motion } from "framer-motion"
import { useContext } from "react"
import Image from "next/image"
import { CursorContext } from "@/components/CursorContext"

const Traitements = () => {
  const {mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2}}}
    className="min-h-screen flex items-center overflow-x-hidden">
    
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-36 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          <motion.div 
          initial={{opacity: 0, x: -60}}
          animate={{
            opacity: 1,
            x: 0,
            transition: {delay: 2, duration: 0.8, ease: 'easeInOut'}
          }}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Un traitement efficace sur le long terme</h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, dolor iure.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Classique </h3>
                </div>
                <p className="pl-6 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Aucun produit chimique</h3>
                </div>
                <p className="pl-6 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Pour tous type de peau </h3>
                </div>
                <p className="pl-6 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                  <h3 className="text-2xl">Hydratation parfaite</h3>
                </div>
                <p className="pl-6 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>


            </div>
            <motion.button 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="btn mx-auto xl:mx-0">En savoir plus</motion.button>
          </motion.div>
          <motion.div 
           initial={{opacity: 0, x: 60}}
           animate={{
             opacity: 1,
             x: 0,
             transition: {delay: 2.2, duration: 0.8, ease: 'easeInOut'}
           }}
          className="hidden xl:flex w-[408px] h-[612px] relative">
            <Image src={'/assets/img3.png'} fill quality={100} alt="" className="object-contain" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Traitements