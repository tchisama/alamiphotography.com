import { Loader } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex h-screen text-2xl items-center justify-center gap-2">
      loading <Loader className="animate-spin" />
    </div>
  );
}

export default Loading;
