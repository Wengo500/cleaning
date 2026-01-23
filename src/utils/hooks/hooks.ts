import { useEffect, useRef, useState } from 'react'

export const useMouseCoordinate = () => {
  const [coordinate, setCoordinate] = useState({ y: 0, x: 0 })

  useEffect(() => {
    let animationFrameId: number

    const handleMouseMove = (event: MouseEvent) => {
      // Cancel the previous frame if it hasn't run yet to avoid stacking
      // although strictly speaking simply requesting a new one is often enough if we only update state
      // but standard pattern is usually just check if running or cancel previous.
      // Simpler approach for React state: just schedule update in next frame.
      cancelAnimationFrame(animationFrameId)
      
      animationFrameId = requestAnimationFrame(() => {
        setCoordinate({ x: event.clientX, y: event.clientY })
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])
  
  return coordinate
}

export const useVwVh = () => {
    const [size, setSize] = useState<{VW: number, VH: number}>({VW:0, VH:0})
   
    useEffect(()=>{
        setSize({VW: window.innerWidth, VH: window.innerHeight})
    },[])
    return size
}

export const useElemSize = () => {
  const elemRef = useRef<null | HTMLElement>(null)
  const [size, setSize] = useState<{elemWidth: number, elemHeight: number}>({elemWidth:0, elemHeight:0})

  useEffect(()=>{
    if ( elemRef.current !== null ) {
      setSize({
        elemWidth: elemRef.current.getBoundingClientRect().width, 
        elemHeight: elemRef.current.getBoundingClientRect().height 
      })
    }
  },[])

  return {...size, ref: elemRef}
}

export const modalCoordinates = () => {
  const elemRef = useRef<null | HTMLElement>(null)
  const [coordinates, setCoordinates] = useState<number>(0)
  console.log('ref1',elemRef.current)  

  useEffect(()=>{
  console.log('ref2',elemRef.current)  
    if ( elemRef.current !== null ) {
      setCoordinates(elemRef.current.scrollTop)
      console.log('ref3',elemRef.current.scrollTop)  
    }
  },[elemRef.current])


  return {coordinates, elemRef}
}