import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      {/* Header */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Hi, I'm Ren! 
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <Image
          className="rounded-full border-4 border-gray-300 dark:border-gray-700"
          src="/author.png"
          alt="Author's profile picture"
          width={300}
          height={300}
        />
        <p className="text-lg text-gray-700 dark:text-gray-300">
          虎尾科技大學資訊工程系 畢業 <br/>
          2 年多的網頁開發經驗，前後端都有所涉獵 <br/>
          <br/>
          主要展示自己開發的 <b>Side Project</b> <br/>
        </p>
      
      </main>
    </div>
  );
}
