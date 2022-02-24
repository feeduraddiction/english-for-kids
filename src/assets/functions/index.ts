export function playAudio(src: string) {
    new Audio(require(`@assets/${src}`)).play();
};

export function pathToCategory(name: string) {
    return `/${name
        .toLowerCase()
        .replace(/\s+/g, '')}`
};

export function percentOfCorrect(correctValue:number, incorrectValue:number) {
    return Math.floor(100 * (correctValue)/(incorrectValue + correctValue));
}
