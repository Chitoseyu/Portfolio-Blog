const workProjects = [
  {
    title: "成創永續股份有限公司：web開發工程師",
    description: [
      "與客戶協作開發內部問卷網頁表單，確保專案滿足業務需求",
      "整合公司新舊資料新增多語系功能，提升用戶體驗與操作效率",
    ],
    date: "2023 - 2024",
  },
  {
    title: "日陞空間資訊股份有限公司：後端工程師",
    description: [
      "開發及優化地理檢測數據網站後端確保系統穩定性與高效性能",
      "客製化街景網站建置提供專業技術解決方案",
    ],
    date: "2022 - 2023",
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 sm:p-12">
      <h2 className="work-title">💼 工作經歷</h2>
      
      <div className="timeline">
        {workProjects.map((work, index) => (
         <div key={index} className="timeline-item">
          <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="work-item-title">{work.title}</h3>
              <ul className="work-item-description list-disc pl-5 text-left"> 
                {work.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <span className="text-gray-500 text-sm mt-4">{work.date}</span>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}
