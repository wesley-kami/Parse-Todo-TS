import { create } from "zustand";

interface TodoStore {
    todoId: string | null;
    isOpenModal: boolean;
    setIsOpenModal: () => void;
    setTodoId: (id: string) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todoId: null,
    isOpenModal: false,
    setIsOpenModal: () => set(state => ({ isOpenModal: !state.isOpenModal })),
    setTodoId: (id: string) => set({ todoId: id })
}));