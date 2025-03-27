import GitHubIcon from "@/icons/GitHubIcon";
import XIcon from "@/icons/XIcon";
import ThemeToggler from "./theme-toggler";

export default function Footer() {
  return (
    <div className="flex w-full items-center text-base justify-between">
      <p className="flex gap-2 flex-wrap items-center">
        Share:{" "}
        <a
          href="https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20year%20progress%20app%20https%3A%2F%2Fyeargauge.vercel.app%2F"
          target="_blank"
          rel="noreferrer"
        >
          <XIcon className="w-6 h-6 dark:fill-white" />
        </a>
        |{" "}
        <a
          href="https://github.com/saadfrhan/yeargauge"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="w-8 h-8 dark:fill-white" />
        </a>
      </p>
      <ThemeToggler />
    </div>
  );
}
