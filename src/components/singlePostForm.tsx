"use client";
import React, { useEffect, useRef, useState } from "react";
import type { Post } from "@prisma/client";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { updatePost } from "@/actions/actions";
import PageTitle from "./page-title";
import { Input } from "./ui/input";
import { GrStatusGood } from "react-icons/gr";

const SinglePostForm = ({ id, post }: { id: number; post: Post }) => {
  const [editBody, setEditBody] = useState(post.body);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editing, setEditing] = useState(false);

  function handleClickEdit() {
    setEditing(!editing);
  }
  
  // function handleClickEdit() {
  //   const body = refBody.current;
  //   const title = refTitle.current;
  //   const editBtn = refEditBtn.current;
  //   const saveChanges = refSaveChangesBtn.current;

  //   if (body && title && editBtn && saveChanges) {
  //     if (refEditBtn.current.textContent !== "Cancel") {
  //       refTitle.current.style.display = "block";
  //       refTitle.current.value = post.title;

  //       refBody.current.style.display = "block";
  //       refBody.current.value = post.body;
  //       refSaveChangesBtn.current.className =
  //         "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-5 text-xl bg-green-500";

  //       refEditBtn.current.className =
  //         "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2";

  //       refEditBtn.current.textContent = "Cancel";
  //     } else {
  //       body.style.display = "none";

  //       title.style.display = "none";

  //       refEditBtn.current.textContent = "edit";
  //       refEditBtn.current.className =
  //         "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2";
  //         refSaveChangesBtn.current.className = 'hidden'
  //       return;
  //     }
  //   }
  // }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-semibold mt-10 mb-10">{post.title}</h1>
      <p className="leading-8 max-w-2xl mx-auto">{post.body}</p>
      <div className="p-12 flex flex-col gap-12">
        <PageTitle title="edit post" />
        <Input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="edit title"
          className={`text-lg ${editing ? 'block' : 'hidden'}`}
        ></Input>
        <Textarea
          className={`text-lg ${editing ? 'block' : 'hidden'}`}

          rows={10}
          placeholder="edit post body"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <Button  onClick={handleClickEdit} className={editing ? 'bg-red-500' : ''}>
          {editing ? 'Cancel' : 'Edit'}
        </Button>
        <Button
          className={`text-lg ${editing ? 'inline-flex bg-green-500' : 'hidden'}`}

          onClick={() => updatePost(id, editTitle, editBody)}
        >
          save changes <GrStatusGood size={25} />
        </Button>
      </div>
    </div>
  );
};

export default SinglePostForm;
