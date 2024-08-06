'use client'

import React, {useState, useEffect, createContext} from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'


//create context
export const CursorContext = createContext()


const CursorProvider = ({ children }) => {
    const [cursor, setCursor] = useState({size: 30, background: '#00334A'})
    const [isHovering, setIsHovering] = useState(false)
    const smallViewportIsActive = useMediaQuery({
        query: '(max-width: 1200px)'
    })

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springCongig = {damping: 20, stiffness: 290, mass: 0.45}
    const springX = useSpring(mouseX, springCongig)
    const springY = useSpring(mouseY, springCongig)

    const handleMouseMove = (e) => {
        if(!smallViewportIsActive) {
            mouseX.set(e.clientX - cursor.size/2)
            mouseY.set(e.clientY - cursor.size/2)
        }else {
            setCursor({size: 0, background: 'none'})
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return ()=> window.removeEventListener('mousemove', handleMouseMove)
    }, [cursor])

    const mouseEnterHandler = () => {
        setCursor({size: 90, background: "#B6D8F2"})
        setIsHovering(true)
    }

    const mouseLeaveHandler = () => {
        setCursor({size: 30, background: "#00334A"})
        setIsHovering(false)
    }

  return (
    <CursorContext.Provider value={{mouseEnterHandler, mouseLeaveHandler}}>
        <motion.div className='fixed z-[99] rounded-full pointer-events-none transition-all duration-300' style={{
            left: springX,
            top: springY,
            width: cursor.size,
            height: cursor.size,
            backgroundColor: cursor.background,
            mixBlendMode: isHovering ? 'difference' : 'normal',
            transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out'
        }}/>
        {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider