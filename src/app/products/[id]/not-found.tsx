import Link from "next/link";

export default ()=>{
  return (
    <section className="w-full h-full p-20 flex flex-col items-center justify-between gap-5 bg-[url('/dribbble_1.gif')] bg-cover bg-center backdrop-blur-md">
        <h1 className="text-center text-6xl font-extrabold text-red-400">404</h1>
        <div className="flex flex-col gap-4 pb-10">
          <h3 className="text-center text-3xl font-bold text-red-500"> Look like you're lost.</h3>
          <p>The page you are looking for is not avaible!</p>
          <div className="inline-flex gap-4 justify-between mt-4  text-blue-600 underline font-semibold">
              <Link href="/" className="">Go Back</Link>
              <Link href="/" className="">Go To Home</Link>
          </div>
        </div>
    </section>
  );
}