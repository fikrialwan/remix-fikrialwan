import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Fikri Alwan Ramadhan",
    },
    {
      name: "theme-color",
      content: "#000000",
    },
    {
      name: "description",
      content: "Fikri Alwan Ramadhan's personal website.",
    },
    {
      name: "msapplication-TileColor",
      content: "#da532c",
    },
    {
      property: "og:site_name",
      content: "Fikri Alwan Ramadhan",
    },
    {
      property: "og:title",
      content: "Fikri Alwan Ramadhan",
    },
    {
      property: "og:description",
      content: "Fikri Alwan Ramadhan's personal website.",
    },
    {
      property: "og:image",
      itemProp: "image",
      content: "/apple-touch-icon.png",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image:alt",
      content: "Personal website of Fikri Alwan Ramadhan",
    },
  ];
};

export const link: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      href: "/favicon-32x32.png",
      type: "image/png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      href: "/favicon-16x16.png",
      type: "image/png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
