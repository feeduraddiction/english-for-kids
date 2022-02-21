export function playAudio(src: string) {
    new Audio(require(`@assets/${src}`)).play();
};

export function pathToCategory(name: string) {
    return `/${name
        .toLowerCase()
        .replace(/\s+/g, '')}`
};
