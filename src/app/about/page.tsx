"use client";

import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import React from "react";

function Page() { // Capitalize the component name (it's good practice in React)
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="text-4xl">About Page</div>
      <button onClick={goHome} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go Home
      </button>
    </>
  );
}

export default Page;
