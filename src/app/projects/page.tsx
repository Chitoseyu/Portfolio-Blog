"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

const projects = [
  {
    title: "技術文章 Blog （Hexo）",
    description: "提升技術知識整理與分享效率，能快速發布與管理技術文章",
    images: [
      { src: "/project1/prj_cover.png", description: "紀錄開發經驗的文章" },
      { src: "/project1/total_view.png", description: "整體設計" },
    ],
  },
  {
    title: "Discord群組 Bot（JavaScript）",
    description: "自動化群組管理與互動，提升社群運營效率並改善使用者體驗",
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
const workProjects = [
  {
    title: "...",
    description: "...",
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

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
      {/* <section className="work-section">
        <h2 className="work-title">💼 Work Project</h2>
        {workProjects.map((work, index) => (
          <div key={index} className="work-item">
            <h3 className="work-item-title">{work.title}</h3>
            <p className="work-item-description">{work.description}</p>
          </div>
        ))}
      </section> */}
      <header className="header">
        <h1 className="header-title">📝 Side Project</h1>
      </header>

      <section className="grid-layout">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedProject(project)}
          >
          <div className="card-image-container">
            <Image
              className="card-image"
              src={project.images[0].src}
              alt={project.title}
              width={300}
              height={300}
            />
          </div>
          <h2 className="card-title">{project.title}</h2>
          <p className="card-description">{project.description}</p>
        </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedProject} onClose={closeModal} className="modal-overlay">
        <Dialog.Panel className="modal-content">

          {selectedProject && (
            <>
              {/* 圖片顯示區 */}
              <div className="image-container">
                <Image
                   className={`rounded-md transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "scale-100"
                  } object-contain max-h-[60vh] max-w-full cursor-zoom-in`}
                  src={selectedProject.images[currentImageIndex].src}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  onClick={() => setIsZoomed(!isZoomed)} // 點擊切換放大狀態
                />
              </div>

              <div className="modal-navigation">
                  <button
                    className="nav-button"
                    onClick={showPrevImage}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>

                  <div className="modal-text">
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-description">{selectedProject.images[currentImageIndex].description}</p>
                    <button className="modal-close" onClick={closeModal}>
                      關閉
                    </button>
                  </div>

                  <button
                    className="nav-button"
                    onClick={showNextImage}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
