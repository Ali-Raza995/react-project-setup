export interface ButtonData {
    id: string;
    text: string;
}

export interface Document {
    id: number;
    title: string;
}

export interface Recommendations {
    heading: string;
    documents: Document[];
}