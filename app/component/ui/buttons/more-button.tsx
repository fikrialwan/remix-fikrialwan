import { css } from "@emotion/css";
import { Link } from "@remix-run/react";
import theme from "~/styles/theme";
import { ArrowRightIcon } from "../icons";

interface MoreButtonProps {
  title: string;
  url: string;
}

export default function MoreButton({ title, url }: MoreButtonProps) {
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
      `}
    >
      <Link
        className={css`
          text-decoration: none;
          color: ${theme.colors.white};
          font-weight: 400;
          font-size: 16px;
          display: flex;
          padding: 10px 15px;
          border: 1px solid ${theme.colors.white};
          border-radius: 25px;
          transition: all 0.5s ease;
        `}
        to={url}
      >
        {title}
        <ArrowRightIcon
          width={18}
          height={15}
          className={css`
            margin-left: 5px;
          `}
        />
      </Link>
    </div>
  );
}
