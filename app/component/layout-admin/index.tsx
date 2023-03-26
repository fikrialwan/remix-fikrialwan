import type { ReactNode } from "react";
import { css } from "@emotion/css";
import theme from "~/styles/theme";
import { Global } from "@emotion/react";
import normalizeCss from "~/styles/normalize-css";

interface LayoutAdminProps {
  children: ReactNode;
}

export default function LayoutAdmin({ children }: LayoutAdminProps) {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 50px 1fr;
        grid-template-areas:
          "aside header"
          "aside main";
        height: 100vh;
        background-color: ${theme.colors.blackGrey};
      `}
    >
      <Global styles={normalizeCss} />
      <header
        className={css`
          grid-area: header;
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
        `}
      >
        ini header
      </header>
      <aside
        className={css`
          grid-area: aside;
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
        `}
      >
        sidebar
      </aside>
      <main
        className={css`
          grid-area: main;
        `}
      >
        {children}
      </main>
    </div>
  );
}
