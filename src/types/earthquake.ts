export interface Geometry {
    type: string;
    coordinates: number[]
}

export interface Properties {
    mag: string;
}

export interface Feature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}

export interface EarthquakeUsgsGovResponse {
    type: string;
    metada: {
        generated: number;
        url: string;
        status: number;
        api: string;
        count: number;
    };
    features: Feature[];
    bbox: number[];
}