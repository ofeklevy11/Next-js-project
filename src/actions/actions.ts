"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });
  
  revalidatePath('/all-posts')
  redirect('/all-posts')
  
}
export async function deletePost(id : number) {

  await prisma.post.delete({
    where: {
      id
    },
  });
  
  revalidatePath('/all-posts')
  redirect('/all-posts')
  
}
export async function updatePost(id : number , title: string, body: string) {

  await prisma.post.update({
    where: {
      id
    },
    data: {
      title,
      body
    }
  });

  revalidatePath(`/post${id}`)

  
  

  
}