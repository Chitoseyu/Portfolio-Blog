"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFoundRoot() {
  return (
    <motion.div
      className="err_div"
      initial={{ opacity: 0, y: -50 }} // 初始狀態（淡出 & 位移）
      animate={{ opacity: 1, y: 0 }} // 進場動畫
      exit={{ opacity: 0, y: -50 }} // 離場動畫
      transition={{ duration: 0.5, ease: "easeOut" }} // 動畫緩動效果
    >
      <div className="space-y-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="err_img"
            src="/err_cat.png"
            alt="error_page logo"
            width={300}
            height={300}
            priority
          />
        </motion.div>
        <motion.h1
          className="err_h1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          404
        </motion.h1>
        <motion.p
          className="err_text"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          🚧 施工中 🚧
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <Link href="/" className="err_btn">
            回首頁
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
