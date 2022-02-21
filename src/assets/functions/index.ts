export function playAudio(src: string) {
    new Audio(require(`@assets/${src}`)).play();
};

export function pathToCategory(category: {
    name: string,
    image: string
}) {
    return `/english-for-kids/${category.name
        .toLowerCase()
        .replace(/\s+/g, '')}`
};
