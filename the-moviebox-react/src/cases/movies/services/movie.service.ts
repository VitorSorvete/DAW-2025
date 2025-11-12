export type MovieDTO = {
    title: string;
    year: number;
    image: string;
}
const movies: MovieDTO[] = [
    {
        title: "Lilo & Stitch",
        year: 2025,
        image: "./public/img/Y6pjszkKQUZ5uBbiGg7KWiCksJ.jpg",
    },{
        title: "Ballerina",
        year: 2025,
        image: "./public/img/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
    },{
        title: "M3GAN 2.0",
        year: 2025,
        image: "./public/img/4a63rQqIDTrYNdcnTXdPsQyxVLo.jpg",
    },{
        title: "Sinners",
        year: 2025,
        image: "./public/img/4CkZl1LK6a5rXBqJB2ZP77h3N5i.jpg",
    },{
        title: "Thunderbolts*",
        year: 2025,
        image: "./public/img/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
    },{
        title: "F1",
        year: 2025,
        image: "./public/img/9PXZIUsSDh4alB80jheWX4fhZmy.jpg",  
    },{
        title: "The Ritual",
        year: 2025,
        image: "./public/img/ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg",
    },{
        title: "Superman",
        year: 2025,
        image: "./public/img/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
    },{   
        title: "Heads of State",
        year: 2025,
        image: "./public/img/lVgE5oLzf7ABmzyASEVcjYyHI41.jpg",
    },{
        title: "The Hangman",
        year: 2025, 
        image: "./public/img/rij9Eh4RVXyPet8A1BNU8pDvtmu.jpg",
    },{
        title: "The Amateur",
        year: 2025, 
        image: "./public/img/SNEoUInCa5fAgwuEBMIMBGvkkh.jpg",
    },{
        title: "Jurassic World Rebirth",
        year: 2025, 
        image: "./public/img/q0fGCmjLu42MPlSO9OYWpI5w86I.jpg",
    },
];

export const MovieService = {
    async list(): Promise<MovieDTO[]> {
        return movies;
    }
}