export interface Item {
    id: number;
    name: string;
    completed: boolean;
}

export type PageType = "all" | "active" | "completed"
