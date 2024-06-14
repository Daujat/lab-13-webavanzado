export interface Todo {
    todos: TodoElement[];
    total: number;
    skip:  number;
    limit: number;
}

export interface TodoElement {
    id?:        number;
    todo:      string;
    completed: boolean;
    userId:    number;
}
