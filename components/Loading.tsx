"use client"
import { Loader } from "lucide-react";
import React from "react";

import blackLogo from "@/public/blacklogo.png"
import Image from "next/image";
import {motion} from "framer-motion"
function Loading() {
  return (
    <div className="flex h-screen text-2xl items-center justify-center gap-2">
      <motion.div  initial={{ opacity: 0,scale:1.1 }} transition={{ duration: 3 }} animate={{ opacity: 1,scale:1 }}>
          <Image src={blackLogo} alt="logo" width={400} height={400} />
      </motion.div>
    </div>
  );
}

export default Loading;
