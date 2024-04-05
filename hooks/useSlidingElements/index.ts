//@ts-ignore
import { makeNoise2D } from "fast-simplex-noise";
import { useCallback, useEffect, useRef } from "react";
import { Rect } from "sanity";
import useScreenSize from "../useScreenSize";

type SlidingElementConfig = {
    ref: React.RefObject<HTMLElement>
    velocity: {
        x: number
        y: number
    }
    initialOffset: {
        x: number
        y: number
    }
}

const useSlidingElements = (slidingElements: SlidingElementConfig[], disabled: boolean) => {
    const {height} = useScreenSize()
    let noiseStep = useRef(0)

    useEffect(() => {
        console.log(disabled)
        if (disabled) return
        setInterval(() => {
            slidingElements.forEach((el, i) => {
                if (!el.ref.current) return
                const [perlinX, perlinY] = floatEffect(i, noiseStep.current)
                
                noiseStep.current += .001;
                
                const elRect = el.ref.current.getBoundingClientRect()

                const offsetX = perlinX 
                const offsetY = perlinY + (height/2 - (elRect.x + elRect.height / 2) + el.initialOffset.y) * el.velocity.y

                try {
                    el.ref.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`
                } catch {
                    
                }
            });
            
        }, 10)
    }, [height])

    
}

const floatEffect = (seed: number, noiseStep: number) => {
    const noise2d = makeNoise2D(() => seed)
    const perlinX = (noise2d(noiseStep, 0) - .5) * 5
    const perlinY = (noise2d(0, noiseStep) - .5) * 5

    return [perlinX, perlinY]
}

export default useSlidingElements;