import z from "zod";

export const todoSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    status: z.enum(["On-hold", "In-progress", "Done"]),
    dueDate: z.string().optional()
});

export type TodoType = z.infer<typeof todoSchema>;
