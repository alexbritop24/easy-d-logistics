// src/hooks/useSEO.js
import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
  return el;
}

function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

export default function useSEO({
  title,
  description,

  // If you don’t pass path, we’ll use the current route automatically
  path,

  // Your OG image in /public
  ogImage = "/EasyD.png",

  noIndex = false,

  // LocalBusiness schema knobs (optional)
  business = {
    name: "Easy D Logistics",
    url: "https://easydlogistics.com",
    telephone: "+1-385-292-8031",
    // keep email optional; remove it if you don’t want it in schema
    email: "info@easydlogistics.com",
    areaServed: "United States",

    // ✅ Added real address (schema only; UI is separate)
    address: {
      streetAddress: "370 W 400 N, Suite 9",
      addressLocality: "Provo",
      addressRegion: "UT",
      postalCode: "84601",
      addressCountry: "US",
    },
  },
} = {}) {
  useEffect(() => {
    // HARD SOURCE OF TRUTH: production domain
    const PROD_ORIGIN = "https://easydlogistics.com";

    // If you set VITE_SITE_URL correctly, we’ll use it.
    // If not, we still force PROD_ORIGIN so canonicals never become .info or netlify.app.
    const envOriginRaw = import.meta?.env?.VITE_SITE_URL?.replace(/\/$/, "");
    const origin =
      envOriginRaw && envOriginRaw.includes("easydlogistics.com")
        ? envOriginRaw
        : PROD_ORIGIN;

    const currentPath = window.location.pathname || "/";
    const rawPath = path ?? currentPath;
    const cleanPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
    const canonicalUrl = `${origin}${cleanPath}`;

    // Title
    if (title) document.title = title;

    // Description
    if (description) {
      upsertMeta('meta[name="description"]', {
        name: "description",
        content: description,
      });
    }

    // Robots
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: noIndex ? "noindex,nofollow" : "index,follow",
    });

    // Canonical
    upsertLink("canonical", canonicalUrl);

    // Open Graph
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Easy D Logistics",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });

    if (title)
      upsertMeta('meta[property="og:title"]', {
        property: "og:title",
        content: title,
      });

    if (description) {
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      });
    }

    // Force OG image to use the production domain too
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${origin}${ogImage}`,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "630",
    });

    // Twitter
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });

    if (title)
      upsertMeta('meta[name="twitter:title"]', {
        name: "twitter:title",
        content: title,
      });

    if (description) {
      upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      });
    }

    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: `${origin}${ogImage}`,
    });

    // LocalBusiness Schema (valid + minimal)
    // If you ever set noIndex=true (staging), don’t inject LocalBusiness.
    if (noIndex) {
      removeJsonLd("ld-localbusiness");
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business.name || "Easy D Logistics",
      url: business.url || origin,
      telephone: business.telephone || "+1-385-292-8031",
      areaServed: business.areaServed || "United States",
    };

    if (business.email) schema.email = business.email;

    if (business.address?.streetAddress) {
      schema.address = {
        "@type": "PostalAddress",
        ...business.address,
      };
    }

    upsertJsonLd("ld-localbusiness", schema);
  }, [title, description, path, ogImage, noIndex, business]);
}