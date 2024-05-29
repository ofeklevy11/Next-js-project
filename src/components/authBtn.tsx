'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function AuthButton() {
    const { data: session } = useSession();
  
    if (
      session &&
      session.user !== undefined &&
      session.user.name !== undefined && session.user.image
    ) {
      return (
        <>
          <h6 className="font-semibold text-lg tracking-wider">
            {" "}
            {session.user.name}{" "}
          </h6>
          
          <Image className="rounded-full w-10" alt="user image" src={session?.user?.image} width={200} height={200}>
  
              
          </Image>
  
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
      );
    }
    return (
      <>
        <Button onClick={() => signIn()}>Sign In</Button>
      </>
    );
  }