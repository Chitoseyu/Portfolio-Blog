"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "技術文章 Blog （Hexo）",
    description: "提升技術知識整理與分享效率，能快速發布與管理技術文章",
    images: [
      { src: "/project1/prj_cover.png", description: "紀錄開發經驗的文章" },
      { src: "/project1/total_view.png", description: "整體設計" },
      { src: "/project1/article_search.png", description: "文章全站搜尋" },
      { src: "/project1/article_content.png", description: "文章內容樣式" },
    ],
    github: "https://github.com/Chitoseyu/Chitoseyu.github.io",
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
    github: "https://github.com/Chitoseyu/js-dicord-bot",
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

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
  const handleZoom = (e) => {
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
  
      document.documentElement.style.setProperty("--zoom-origin-x", `${x * 100}%`);
      document.documentElement.style.setProperty("--zoom-origin-y", `${y * 100}%`);
    }
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="prj_div">
      <header className="header">
        <h1 className="header-title">📝 Side Project</h1>
      </header>

      <section className="grid-layout">
        {projects.map((project, index) => (
            <motion.div
                key={index}
                className="card"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
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
            </motion.div>
          ))}
      </section>

      <Dialog open={!!selectedProject} onClose={closeModal} className="modal-overlay">
        <Dialog.Panel className="modal-content">

          {selectedProject && (
            <>
              <div className="image-container">
                <Image
                  className={`zoomable-image ${isZoomed ? "zoomed" : ""}`}
                  src={selectedProject.images[currentImageIndex].src}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  onClick={handleZoom}
                />
              </div>

              <div className="modal-navigation">
                  {/* 上一張按鈕 - 若是第一張則不可點擊 */}
                  <button
                    className="nav-button"
                    onClick={showPrevImage}
                    disabled={currentImageIndex === 0}
                  >
                    <svg className="icon-nav" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>

                  <div className="modal-text">
                    <h2 className="modal-title">{selectedProject.title}</h2>
                    <p className="modal-description">{selectedProject.images[currentImageIndex].description}</p>

                      <div className="modal-buttons">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-button"
                          >
                            GitHub
                          </a>
                        )}
                        
                        <button className="modal-close" onClick={closeModal}>
                          Close
                        </button>
                      </div>
                  </div>
                  {/* 下一張按鈕 - 若是最後一張則不可點擊 */}
                  <button
                    className="nav-button"
                    onClick={showNextImage}
                    disabled={currentImageIndex === selectedProject.images.length - 1}
                  >
                    <svg className="icon-nav" viewBox="0 0 24 24">
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
