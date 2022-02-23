export interface categoriesPropTypes {
    categories: {
        name: string,
        image: string,
        info: infoType[]
    }[]
}

export interface cardPropTypes {
    info: infoType[]
}


export interface infoType {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
}


