export const textRandomFadeIn = (textContainer: HTMLElement) => {
    const text = textContainer.innerText
    textContainer.innerHTML = ""

    text.split('').forEach(letter => {
        textContainer.appendChild(create)
    });
}