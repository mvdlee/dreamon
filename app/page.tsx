import Image from "next/image";

export default function Home() {
  return (

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
         
        <Image 
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        </div>

      </main>

  );
}
