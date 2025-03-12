import Image from "next/image";

export default function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1 className="about-title">👋 Hi, I'm Ren!</h1>
      </header>

      <main className="about-main">
        <Image
          className="about-image"
          src="/author.png"
          alt="Author's profile picture"
          width={300}
          height={300}
        />
        <p className="about-description">
          我是一名熱愛探索新技術的軟體工程師，喜歡挑戰不同類型的開發專案。<br />
          我擅長 <b>系統開發、數據處理與前後端整合</b>，致力於提升使用者體驗與系統效能。 <br />
          <br />
          🔗 歡迎與我交流，一起探索技術的可能！ <br />
          
        </p>

        <div className="social-links">
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
        </div>
      </main>
    </div>
  );
}
