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

export const placeMsg = {
    'country': [
      { type: 'required', message: 'Country is required' },
      { type: 'minlength', message: 'Country must be at least 2 characters long' },
      { type: 'maxlength', message: 'Country cannot be more than 30 characters long' },
      { type: 'pattern', message: 'Country can only use letters' } 
    ],
    'place': [
      { type: 'required', message: 'Place is required' },
      { type: 'minlength', message: 'Place must be at least 2 characters long' },
      { type: 'maxlength', message: 'Place cannot be more than 30 characters long' },
      { type: 'pattern', message: 'Place can only use letters' } 
    ],
    'activity': [
      { type: 'required', message: 'Activity is required' },
      { type: 'minlength', message: 'Activity must be at least 2 characters long' },
      { type: 'maxlength', message: 'Activity cannot be more than 30 characters long' },
      { type: 'pattern', message: 'Activity can only use letters' } 
    ],
    'description': [
      { type: 'required', message: 'Dsc is required' },
      { type: 'minlength', message: 'Dsc must be at least 2 characters long' },
      { type: 'maxlength', message: 'Dsc cannot be more than 50 characters long' },
      { type: 'pattern', message: 'Dsc can only use letters' } 
    ],
    'rating': [
        { type: 'required', message: 'Rating is required' },
        { type: 'min', message: 'Rating min value allowed is 0' },
        { type: 'max', message: 'Rating max value allowed is 5' },
        { type: 'pattern', message: 'Ratings pattern is #.#' } 
      ]
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
        id: 2.0,
        country: 'Corea del Sur',
        rating: 5,
        place: 'Oryukdo',
        description: 'Beach and park',
        activity: 'Sky walking'
    },
    {
        id: 3.0,
        country: 'Peru',
        rating: 4.7,
        place: 'Vinicunca',
        description: 'Mountain range',
        activity: 'Hiking in rainbow mountain'
    },
    {
        id: 4.0,
        country: 'Honduras',
        rating: 4.2,
        place: 'Roatan',
        description: 'Beach',
        activity: 'Snorkling'
    }
]