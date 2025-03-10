"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const projects = [
  {
    title: "技術文章 Blog",
    description: "以 Hexo 建構",
    images: [
      { src: "/project1/prj_cover.png", description: "紀錄開發經驗的文章" },
      { src: "/project1/total_view.png", description: "整體設計" },
    ],
  },
  {
    title: "Discord群組 Bot",
    description: "以 JavaScript 建構",
    images: [
      { src: "/project2/prj_cover.png", description: "能進入任何群組與用戶互動的Bot" },
      { src: "/project2/setrpy1.png", description: "用戶輸入關鍵字能及時回覆訊息" },
      { src: "/project2/setrpy2.png", description: "設定關鍵字回覆" },
      { src: "/project2/setrpy3.png", description: "查看關鍵字設定的內容" },
      { src: "/project2/setrpy4.png", description: "刪除關鍵字設定的內容" },
      { src: "/project2/delete1.png", description: "刪除用戶的訊息" },
      { src: "/project2/setgreet1.png", description: "自訂群組歡迎/離開訊息內容及開關" },
      { src: "/project2/setgreet2.png", description: "及時發送對成員群組歡迎/離開訊息" },
      { src: "/project2/setnotify1.png", description: "設定對特定用戶的提醒訊息" },
      { src: "/project2/setnotify2.png", description: "查看目前設定的提醒訊息" },
      { src: "/project2/setnotify3.png", description: "時間到了會標記用戶提醒" },
      { src: "/project2/sayd1.png", description: "工人智慧" },

    ],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const showNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const showPrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">📝 Side Project</h1>
      </header>

      {/* Projects Gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              className="rounded-md"
              src={project.images[0].src} // 顯示第一張作為封面
              alt={project.title}
              width={400}
              height={300}
              layout="responsive"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedProject} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <Dialog.Panel className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg relative">
          {selectedProject && (
            <>
              {/* 圖片顯示區 */}
              <div className="relative">
                <Image
                  className="rounded-md"
                  src={selectedProject.images[currentImageIndex].src}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                />

                {/* 左右切換按鈕 */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
                      onClick={showPrevImage}
                    >
                      ←
                    </button>
                    <button
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full hover:bg-gray-900"
                      onClick={showNextImage}
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              {/* 標題與描述 */}
              <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">{selectedProject.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{selectedProject.images[currentImageIndex].description}</p>

              {/* 關閉按鈕 */}
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700" onClick={closeModal}>
                關閉
              </button>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
