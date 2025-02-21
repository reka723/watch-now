export type Movie = {
    id: string,
    title: string,
    overview: string
    releaseYear: string
    imageSet: {
        verticalPoster: { w360: string, w480: string },
        horizontalPoster: { w360: string, w480: string }
    }
}