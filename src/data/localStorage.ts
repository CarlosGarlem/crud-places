export class Place {
    id: number;
    country: string;
    rating: number;
    place: string;
    description: string;
    activity: string;

    constructor() {
        this.id = 0;
        this.country = "";
        this.rating = 0;
        this.place = "";
        this.description = "";
        this.activity = "";
    }
}

export const storage: any = [
    {
        id: 1,
        country: 'Guatemala',
        rating: 4.5,
        place: 'Tikal National Park',
        description: 'Archeologic ruins and temples',
        activity: 'Archeologic site tour'
    },
    {
        id: 2,
        country: 'Corea del Sur',
        rating: 5,
        place: 'Oryukdo',
        description: 'Beach and park',
        activity: 'Sky walking'
    },
    {
        id: 3,
        country: 'Perú',
        rating: 4.7,
        place: 'Vinicunca',
        description: 'Mountain range',
        activity: 'Hiking in rainbow mountain'
    },
    {
        id: 4,
        country: 'Honduras',
        rating: 4.2,
        place: 'Roatan',
        description: 'Beach',
        activity: 'Snorkling'
    }
]