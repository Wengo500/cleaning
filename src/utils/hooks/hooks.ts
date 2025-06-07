import { useEffect, useRef, useState } from 'react'

export  const useMouseCoordinate = () => {
  const [coordinate, setCoordinate] = useState({y:0, x:0})

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      setCoordinate({x: event.x, y: event.y})
    }) 
    return () => {
      document.removeEventListener('mousemove', (event) => event)
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