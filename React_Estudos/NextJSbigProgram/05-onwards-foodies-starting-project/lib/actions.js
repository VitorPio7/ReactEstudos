'use server';

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from 'next/navigation';

function isInvalidText(text){
 return !text || meal.title.trim() === ''
}
export async function shareMeal(prevValue,formData){/*quando se utiliza o useFormStatus, é necessário colocar mais um parametro (prevValue) */
    const meal = {
     title:formData.get('title'),
     summary:formData.get('summary'),
     instructions:formData.get('instructions'),
     image:formData.get('image'),
     creator:formData.get('name'),
     creator_email:formData.get('email')
    }
    if(isInvalidText(meal.title) || 
    isInvalidText(meal.summary)||
    isInvalidText(meal.instructions)||
    isInvalidText(meal.creator)||
    isInvalidText(meal.creator_email)||
    !meal.creator.creator_email.includes("@")||
    !meal.image || meal.image.size === 0
  ){
   throw new {message:"There was an error on sending the form"}
  }
  await saveMeal(meal);
  revalidatePath('/meals')
  redirect('/meals')
 }