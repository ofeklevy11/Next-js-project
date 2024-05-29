import AuthButton from "@/components/authBtn";
import PageTitle from "@/components/page-title";
import SignOut from "@/components/signOut";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();

  
  return (
    
    <>
      <main className="text-center my-auto">
        {session && session.user && session.user.image ?  (
          <div >
            <PageTitle title="You are LOGGED IN!" />
            <div className="flex justify-center mt-4 items-center gap-4">
              <h4>welcome user: {session.user.name}</h4>
            <Image
              className="rounded-full"
              alt="user image"
              src={session.user?.image}
              width={100}
              height={100}
            ></Image>
            </div>
          
            <p className="text-center my-8">
              Try to log out and see if you can still be there
            </p>
            <SignOut />
          </div>
        ) : (
          <div className="text-2xl flex flex-col gap-10">
            <p>You must be logged in to view this page!</p>
            <h1>please log in</h1>
            <AuthButton />
          </div>
        )}
      </main>
    </>
  );
};

export default page;
