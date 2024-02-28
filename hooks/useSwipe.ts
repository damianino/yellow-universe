import {useRef} from "react";

export const useOnSwipe = () => {
    const prevValRef = useRef({
        x:0,
        y:0,
        xPrev: 0,
        yPrev:0
    })

    return (node: HTMLElement, moveCB: (deltaX: number, deltaY: number) => void, stopCB: Function) => {
        node.addEventListener("touchstart", (e) => {
            prevValRef.current = {x: e.touches[0].clientX, y: e.touches[0].clientY, xPrev: e.touches[0].clientX, yPrev: e.touches[0].clientY}
        })
        node.addEventListener("touchmove", (e) => {
            moveCB(prevValRef.current.x-e.touches[0].clientX, prevValRef.current.y-e.touches[0].clientY)

            if (prevValRef.current.x != e.touches[0].clientX) prevValRef.current.xPrev = prevValRef.current.x
            if (prevValRef.current.y != e.touches[0].clientY) prevValRef.current.yPrev = prevValRef.current.y
            prevValRef.current.x = e.touches[0].clientX
            prevValRef.current.y = e.touches[0].clientY
        })
        node.addEventListener("touchend", async (e) => {
            if (Math.abs(prevValRef.current.x - prevValRef.current.xPrev) == 0) return

            let velocityX = prevValRef.current.x - prevValRef.current.xPrev
            stopCB(velocityX, 0)
        })
    }
}