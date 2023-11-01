"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Loader, Plus } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AiFillWarning } from "react-icons/ai";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

type Props = {};

const CreateAdmin = (props: Props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const addAdmin = () => {
    if(!email) return setError("Email is required")
    if(!password) return setError("Password is required")
    if(!name) return setError("Name is required")
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        addDoc(collection(db, "admins"), {
          name,
          uid:user.uid,
          email,
          createdAt:serverTimestamp()
        }).then(() => {
          setLoading(false)
          setOpen(false);
        })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
        setLoading(false)
      });
  };
  useEffect(() => {
      setError("")
  },[name,email,password])
  return (
    <Dialog open={open} onOpenChange={()=>{setOpen(p=>!p)}}>
      <DialogTrigger asChild>
        <Button className="flex gap-2">
          Add admin <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new folder</DialogTitle>
          <DialogDescription className="">
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size={12}
              className="mt-8"
            />
            <Input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={"password"}
              size={12}
              className="mt-4"
            />
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              size={12}
              className="mt-4"
            />
            {error && (
              <Alert className="mt-2" variant={"destructive"}>
                <AlertTitle>
                  <AiFillWarning /> Error
                </AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"} className="px-4 py-2">
              Close
            </Button>
          </DialogClose>
            <Button onClick={addAdmin} className="px-4 py-2">
              {
                loading?
                <>Loading<Loader className="animate-spin ml-2" size={20}/></>:
                "Create"
              }
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAdmin;
