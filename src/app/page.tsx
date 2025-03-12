import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Ren 's 作品集
        </h1>
      </header>

      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <Image
          className="dark:invert"
          src="/home_img.png"
          alt="Portfolio logo"
          width={500}
          height={500}
          priority
        />
      </main>
    </div>
  );
}
