import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid work email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  product: z.string().min(1, { message: 'Please select a product or track.' }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const joinUsFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  domain: z.string().min(1, { message: 'Please select your preferred domain.' }),
  note: z.string().optional(),
  resume: z
    .any()
    .refine((file) => file instanceof File || (file && typeof file === 'object'), { message: 'Resume file is required.' })
    .refine((file) => !file || file.size <= MAX_FILE_SIZE, { message: 'Max file size is 5MB.' })
    .refine(
      (file) => !file || ACCEPTED_FILE_TYPES.includes(file.type) || file.name?.endsWith('.pdf') || file.name?.endsWith('.doc') || file.name?.endsWith('.docx'),
      { message: 'Only .pdf, .doc, and .docx formats are supported.' }
    ),
});

export type JoinUsFormData = z.infer<typeof joinUsFormSchema>;
