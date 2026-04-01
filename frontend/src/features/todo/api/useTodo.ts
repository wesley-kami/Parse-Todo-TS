import { useMutation } from "@tanstack/react-query";
import type { TodoType } from "../schemas/todo.schema";
import Parse from 'parse';
import { useState } from "react";

const createTodo = async (newTodo: TodoType) => {
    const Todo = Parse.Object.extend("Todo");
    const todo = new Todo();
    const response = await todo.save(newTodo);
    return response;
}

export const useTodo = () => {
    const [error, setError] = useState<Error | null>(null)

    const create = useMutation({
        mutationFn: createTodo,
        onError: (error) => setError(error)
    })

    return { error, create };
}