"use client"
import { redirect } from "next/navigation";
export default function ProfilePage(){
  redirect("/")
  return(
    <h1 className="text-center text-3xl font-bold p-6"
    > Hello from Profile Page! </h1>
    //return is useless after redirect() call.
  )
}