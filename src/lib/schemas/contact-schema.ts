import z from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(3, { message: 'Name must have at least 3 characters' }),
  email: z.email({ message: 'Please enter a valid email address' }),
  message: z.string().trim().min(10, { message: 'Message must have at least 10 characters' }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
