import { createPost } from '@/actions/actions'
import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const CreatePost = () => {
  return (
    
    <div className=' max-w-[1000px] flex  flex-col items-center  '>
        <PageTitle title='Create Post' />
        <form action={createPost} className='w-96 flex flex-col gap-7 mt-10' >
            <Input  type='text' name='title' placeholder='Post Title' />
            <Textarea rows={12}  name='body' placeholder='Post Content'/>
            <Button type='submit'>Create</Button>
        </form>
    </div>
  )
}

export default CreatePost