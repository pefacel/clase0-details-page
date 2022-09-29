import { useRouter } from "next/router";
import React from "react";

export default function Pagina2() {
  const router = useRouter();

  let currentPath = router.asPath;

  console.log("currentPath", currentPath);

  return (
    <>
      <button
        onClick={() => router.push("/pagina2")}
        className={currentPath === "/pagina2" ? "bg-red-600 px-8" : "  px-8"}
      >
        pagina2{" "}
      </button>

      <button onClick={() => router.push("/pagina1")} className="px-8">
        pagina1{" "}
      </button>
    </>
  );
}
