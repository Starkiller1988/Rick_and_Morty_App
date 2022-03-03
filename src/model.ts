export interface Character {
    id: number;
    name: string;
    status: string; 
    image: string;
    gender?: string;
    origin?: { name: string };
    species?: string;
}

export interface Info {
    next?: string;
    prev?: string;
}

export interface ResponseBody {
    info: Info;
    results: Array<Character>;
}
