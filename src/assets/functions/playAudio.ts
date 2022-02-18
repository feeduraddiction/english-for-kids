export default function playAudio(src: string) {
    new Audio(require(`@assets/${src}`)).play();
}
