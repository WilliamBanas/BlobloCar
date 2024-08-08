import { z } from 'zod';

export const userSchema = z.object({
  firstname: z.string({ required_error: "Champ requis" }).min(1, "Champ requis").max(50, "Le prénom ne peut dépasser 50 caractères").trim(),
  lastname: z.string({ required_error: "Champ requis" }).min(1, "Champ requis").max(50, "Le nom ne peut dépasser 50 caractères").trim(),
  email: z.string({ required_error: "Champ requis" }).email("Email invalide").max(64, "Email trop long"),
  image: z.string({ required_error: "Champ requis" }).url("URL invalide"),
  password: z.string({ required_error: "Champ requis" }).min(8, "Le mot de passe doit être au moins 8 caractères").max(32, "Le mot de passe ne peut dépasser 32 caractères").trim(),
  passwordConfirm: z.string({ required_error: "Champ requis" }).min(8, "Le mot de passe doit être au moins 8 caractères").max(32, "Le mot de passe ne peut dépasser 32 caractères").trim(),
  terms: z.enum(["on"], { required_error: "Champ requis" }),
})