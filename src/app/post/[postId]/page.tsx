import SinglePostForm from '@/components/singlePostForm'
import prisma from '@/lib/db'
import { notFound } from 'next/navigation'
import React from 'react'

const Post = async ({params} : {params:  {
    postId: number
}}) => {

    const postId = Number(params.postId)

    
    

    const post = await prisma.post.findUnique({
        where: {
            id : postId
        }
    })
    if(!post) {
        return notFound()
    }
  return (
    <SinglePostForm id={post.id} post={post}/>
  )
}

export default Post