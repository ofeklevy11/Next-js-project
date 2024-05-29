'use client'
import React from 'react'
import { Button } from './ui/button'
import { deletePost } from '@/actions/actions'

const DeleteBtn = ({postId} : {postId : number}) => {

    console.log(postId);
    
  return (
    <Button variant={'destructive'} onClick={ () => deletePost(postId)} >delete</Button>
  )
}

export default DeleteBtn