"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="about-header">
        <motion.h1 
          className="about-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👋 Hi, I'm Ren!
        </motion.h1>
      </header>

      <main className="about-main">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            className="about-image"
            src="/author.png"
            alt="Author's profile picture"
            width={300}
            height={300}
          />
        </motion.div>
        
        <motion.p 
          className="about-description"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          我是一名熱愛探索新技術的軟體工程師，喜歡挑戰不同類型的開發專案。<br />
          我擅長 <b>系統開發、數據處理與前後端整合</b>，致力於提升使用者體驗與系統效能。 <br />
          <br />
          🔗 歡迎與我交流，一起探索技術的可能！ <br />
        </motion.p>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            className="social-link"
            href="https://chitoseyu.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="social-icon"
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Blog
          </a>
          <a
            className="social-link"
            href="https://github.com/chitoseyu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="social-icon"
              src="/github-mark.png"
              alt="GitHub icon"
              width={16}
              height={16}
            />
            GitHub
          </a>
        </motion.div>
      </main>
    </motion.div>
  );
}
