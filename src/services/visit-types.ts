export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id: string;
}

export interface LoggedInUser {
    email: string;
    token: string;
    _id: string;
}

export interface County {
    nameEng: string;
    nameIrish: string;
    countyTown: string;
    _id: string;
}

export interface Visit {
    location: number;
    latitude: number;
    longitude: number;
    date: string;
    details: string;
    visitor: LoggedInUser;
    county: County;
    _id: string;
}

export interface CountyVisits {
    county: County;
    visits: Visit[];
}
