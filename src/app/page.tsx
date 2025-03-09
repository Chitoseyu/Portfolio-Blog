import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Portfolio by Ren
        </h1>
      </header>

      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <Image
          className="dark:invert"
          src="/Author.jpg"
          alt="Portfolio logo"
          width={300}
          height={40}
          priority
        />
        <a 
          href="/projects" 
          className="text-lg font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          🏆 專案經歷 →
        </a>
      </main>

      <footer className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400">
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://chitoseyu.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          日常Blog
        </a>
        <a
          className="flex items-center gap-2 hover:underline"
          href="https://github.com/chitoseyu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.png"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}
