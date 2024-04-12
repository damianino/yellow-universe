import { Ref, RefObject, useState } from "react";

const useTextRandomFadeIn = (textContainer: RefObject<HTMLElement>): HTMLSpanElement[] => {
    const [childrenLetters, setChildrenLetters] = useState<HTMLSpanElement[]>([])

    if (textContainer.current == undefined){
        console.error("error in textRandomFadeIn hook. textContainer.current in undefined")
        return []
    }
    console.log("READY!!")
    const text = textContainer.current.innerText
    textContainer.current.innerHTML = ""

    let tmp:HTMLSpanElement[] = []
    text.split('').forEach(letter => {
        const a  = new HTMLSpanElement()
        a.innerHTML = letter
        tmp.push(a)
    });

    setChildrenLetters(tmp)

    return childrenLetters
}

export default useTextRandomFadeIn;