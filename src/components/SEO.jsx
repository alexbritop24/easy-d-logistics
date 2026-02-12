import { useEffect } from "react";

export default function SEO({ title, description, path, ogImage }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMetaTag = (attr, value, content) => {
      if (!content) return;

      let tag = document.querySelector(`meta[${attr}="${value}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) {
      setMetaTag("name", "description", description);
    }

    if (title) {
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (description) {
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("name", "twitter:image", ogImage);
      setMetaTag("name", "twitter:card", "summary_large_image");
    }

    if (path) {
      const url = `https://easydlogistics.com${path}`;
      setMetaTag("property", "og:url", url);
    }

  }, [title, description, path, ogImage]);

  return null;
}