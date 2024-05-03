import { z } from 'zod';

export const clientSchema = z.object({
	firstname: z.string().min(1),
	lastname: z.string().min(1),
	email: z.string().email().optional(),
	tel: z.string().min(1),
	address: z.string().optional()
});

export const addClientSchema = clientSchema;

export const updateClientSchema = clientSchema.extend({
	id: z.string().min(1)
});
