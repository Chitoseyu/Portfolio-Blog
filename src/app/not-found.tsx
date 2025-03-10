import Link from "next/link";
import Image from "next/image";
export default function NotFoundRoot() {
  return (
    <div className="err_div">
      <div className="space-y-4">
         <Image
                  className="dark:invert"
                  src="/err_cat.png"
                  alt="Portfolio logo"
                  width={300}
                  height={300}
                  priority
                />
        <h1 className="err_h1">
        404
        </h1>
        <p className="err_text">
          🚧  施工中  🚧
        </p>
        <Link
          href="/"
          className="err_btn"
        >
          回首頁
        </Link>
      </div>
    </div>
  );
}
