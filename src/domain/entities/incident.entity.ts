

export interface IIncident{
    lat: number,
    lng: number,
    isSent: boolean,
    genre: string,
    age: number,
    creationDate: Date
}

export interface IIncidentDocument extends Document, IIncident {}