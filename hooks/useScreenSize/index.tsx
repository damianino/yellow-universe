import { useEffect, useRef, useState } from "react"

const useScreenSize = () => {
    const [size, setSize] = useState({width: window.innerWidth, height: window.innerHeight})

    useEffect(() => {
        setSize({width: window.innerWidth, height: window.innerHeight})
        window.addEventListener("resize", () => {
            setSize({width: window.innerWidth, height: window.innerHeight})
        }, true)
    }, [])

    return size
}

export default useScreenSize;