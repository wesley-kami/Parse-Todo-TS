export interface Todo {
    title? : string,
    description? : string,
    status? : "On-hold" | "In-progress" | "Done",
    dueDate? : string
}