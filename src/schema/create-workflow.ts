import {z} from "zod"
export const createWorkFlowSchema=z.object({
    name:z.string().trim().max(50),
    description:z.string().max(80).optional(),
});
export type createworkflowSchemaType=
z.infer<typeof createWorkFlowSchema>;