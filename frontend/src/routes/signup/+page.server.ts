import { userSchema } from "../../schemas/userSchema";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms/server";
import { zod } from 'sveltekit-superforms/adapters'
import { z } from 'zod';

export const load = async (event) => {
  const form = await superValidate(event, zod(userSchema));
  return { form };
}

export const actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(userSchema));
    console.log(form);
    

    if (!form.valid) {
      return fail(400, {
        form
      })
    }
    return { form }
    
  }
}