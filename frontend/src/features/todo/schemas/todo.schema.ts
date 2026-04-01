import z from "zod";

export const todoSchema = z.object({
    title: z.string(),
    description: z.string().nullable(),
    status: z.enum(["On-hold", "In-progress", "Done"]),
    dueData: z.string().nullable()
});

export type TodoType = z.infer<typeof todoSchema>;