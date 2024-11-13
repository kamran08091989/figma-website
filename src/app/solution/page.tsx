import { resolve } from "path";

export default async function Solution(){
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })
    return(
        <div>
        <h1 className="text-center font-serif border-blue-300 text-yellow-700 border-8 pl-5 ml-4 text-2xl bg-red-300">solution page</h1>
        </div>
    );
}