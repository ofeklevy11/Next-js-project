import { deletePost } from '@/actions/actions'
import DeleteBtn from '@/components/deleteBtn'
import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

const AllPosts =async () => {
   const allPosts = await prisma.post.findMany()
  return (
    <>
    <PageTitle title='all posts'/>
    <div className='grid grid-cols-4 gap-6 mt-10'>
        {allPosts.map((post) => (
            <div   key={post.id} className='p-8 bg-white/80 text-black text-center'>
                <h3 className='text-xl font-bold'>{post.title}</h3>
                <h6 className='text-[15px] leading-6 truncate	'>{post.body}</h6>
                <DeleteBtn postId={post.id} />
                <div className='mt-4'>
                <Link href={`/post/${post.id}`}>
                <Button >Show post</Button>
                </Link>
                </div>
                
            </div>
        ))}
    </div>
    </>
  )
}

export default AllPosts