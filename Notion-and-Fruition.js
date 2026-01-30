  /* CONFIGURATION STARTS HERE */

  /* Step 1: enter your domain name like something.example.com */
  const MY_DOMAIN = 'vivrerelies.org';

  /*
   * Step 2: enter your URL slug to page ID mapping
   * The key on the left is the slug (without the slash)
   * The value on the right is the Notion page ID
   */
  const SLUG_TO_PAGE = {
    '': 'fe4785129e764baf85f54bb86cad7d1e',
    'a-propos': '3084bf902185444995fba7c9e60309b2',
    'carte': '028e57070fe24c99946a195eb0831b89',
    'revue': 'c632aeaca2c44c7f92a6f394978321ba',
    'rendez-vous': 'b26f5877335e48078a6e56de0e0a641f',
    'ateliers': 'd92b7fb981df42caad6d9e9ed5507c21',
    'ressources': '9a8ace54b67c4611b93ead8db1b67c19',
    'ecosysteme': '5eaac9ee15784ae6b0ab012c2c999b59',
    'contribuer': '85044f022e8d460789f89d5ded990f2f',
  };

  /* Step 3: enter your page title and description for SEO purposes */
const PAGE_TITLE = 'Vivre reliés ♾';
const PAGE_DESCRIPTION = 'Un écosystème, des lieux et des ressources pour rénégérer nos liens à soi, aux autres, à la Nature et à plus grand que soi';

  /*
   * Step 3.1: enter per-page metadata for better SEO (optional)
   * Each key is a slug, each value contains title, description, and ogImage
   */
  const PAGE_METADATA = {
      "a-propos": {
          "title": "À propos ⋅ Vivre reliés",
          "description": "Un écosystème, des lieux et des ressources s'inspirant des sagesses de la Nature et des traditions spirituelles pour régénérer nos modes de vie et nos liens à soi, aux autres, à la Nature et à plus grand que soi."
      },
      "carte": {
          "title": "Carte de lieux entre écologie et spiritualité ⋅ Vivre reliés",
          "description":  "Une carte ouverte et collaborative pour découvrir en 2 clics des lieux inspirants pour se ressourcer ou expérimenter des manières de relier écologie et spiritualité."
      }, 
      "revue": {
          "title": "Revue Esprit de Nature ⋅ Vivre reliés",
          "description":  "Une revue s'inspirant des sagesses du vivant et des traditions spirituelles pour régénérer nos modes de vie et œuvrer ensemble au service de la vie."
      }, 
      "ressources": {
          "title": "Revue Esprit de Nature ⋅ Vivre reliés",
          "description":  "Cette première version de bibliothèque participative contient des films, articles, références… à explorer sur l'écologie, la société, la spiritualité et les chemins de sagesses et la jonction entre ces sujets. Elle est alimentée chaque mois lors de la publication de la newsletter Vivre reliés."
      }, 
      "ateliers": {
          "title": "Ateliers ⋅ Vivre reliés",
          "description":  "Des ateliers pour faciliter et expérimenter une vie plus reliée."
      }, 
       "contribuer": {
          "title": "Contribuer ⋅ Vivre reliés",
          "description":  "Contribuer au développement de Vivre reliés à travers sa carte open source, sa revue, ou encore sa bibliothèque participative."
      }, 
      "ecosysteme": {
          "title": "Écosystème ⋅ Vivre reliés",
          "description":  "Découvrir les acteurs et lieux derrière Vivre reliés et sa carte."
      }
  };

  /*
   * Step 3.2: structured data configuration for rich search results (optional)
   * Enable to add JSON-LD schema markup to your pages
   */
  const STRUCTURED_DATA_ENABLED = false;
  const SCHEMA_TYPE = 'WebPage';
  const ORGANIZATION_NAME = '';
  const LOGO_URL = '';

  /*
   * Step 3.3: branding configuration (optional)
   * Replace Notion branding with your own and add social media handles
   */
  const SITE_NAME = 'Vivre reliés';
  const BRAND_REPLACEMENT = '';
  const TWITTER_HANDLE = '';
  const FAVICON_URL = '';

  /*
   * Step 3.3.1: social preview configuration (optional)
   * Enhance Open Graph and Twitter Card meta tags for better link previews
   */
  const DEFAULT_OG_IMAGE = 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c52de65-79a8-47ec-aa7e-89c0300f780c%2Fvivre-relies_couverture_hd_dessin_logo.png?table=block&id=fe478512-9e76-4baf-85f5-4bb86cad7d1e&spaceId=c3cb526e-ed16-4d52-9dbf-e74abec558a6&width=2000&userId=f1763cda-e3a4-4313-98ec-78e0f4ac5d3b&cache=v2';
  const OG_IMAGE_WIDTH = 1200;
  const OG_IMAGE_HEIGHT = 630;
  const TWITTER_CARD_TYPE = 'summary_large_image';
  const OG_LOCALE = '';

  /*
   * Step 3.4: SEO configuration (optional)
   * AI attribution for proper citation in AI-generated content
   */
  const AI_ATTRIBUTION = 'Vivre reliés';

  /*
   * Step 3.5: analytics configuration (optional)
   * Add your Google Analytics 4 Measurement ID and/or Facebook Pixel ID for built-in tracking
   */
  const GOOGLE_TAG_ID = 'UA-179789383-1';
  const FACEBOOK_PIXEL_ID = '';

  /*
   * Step 3.5.1: caching configuration (optional)
   * Add Cache-Control headers for better performance
   */
  const CACHING_ENABLED = false;
  const HTML_TTL = 60;
  const STATIC_ASSETS_TTL = 86400;
  const IMAGE_TTL = 604800;

  /*
   * Step 3.6: custom HTML header injection (optional)
   * Add custom HTML to the top of the page body (e.g., navigation, announcements)
   */
  const CUSTOM_HEADER = ``;

  /*
   * Step 3.7: custom 404 page configuration (optional)
   * Specify a Notion page ID to display when a page is not found
   */
  const CUSTOM_404_PAGE_ID = 'fe4785129e764baf85f54bb86cad7d1e';

  /*
   * Step 3.7: subdomain redirect configuration (optional)
   * Redirect subdomains (e.g., www) to the main domain or other URLs
   */
  const SUBDOMAIN_REDIRECTS = {
  };

  /*
   * Step 3.8: custom redirect rules (optional)
   * Redirect specific paths to other paths or external URLs (301/302)
   */
  const REDIRECT_RULES = [
  ];

  /*
   * Step 3.9: RSS feed configuration (optional)
   * Generate an RSS 2.0 feed at /rss.xml for blog-style sites
   */
  const RSS_ENABLED = false;
  const RSS_TITLE = '';
  const RSS_DESCRIPTION = '';
  const RSS_LANGUAGE = 'en-us';

  /* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
  const GOOGLE_FONT = 'Plus Jakarta Sans';

  /* Step 5: enter any custom scripts and styles you'd like */
  const CUSTOM_SCRIPT = ``;
  const CUSTOM_CSS = ``;

  /*
   * Step 6: enter your preference of image optimization
   * Set to 'resize' to enable Cloudflare Image Resizing
   * Requires Image Resizing to be enabled in Cloudflare dashboard
   * See: https://developers.cloudflare.com/images/transform-images/transform-via-workers/
   */
  const IMAGE_OPTIMIZATION = `none`;
  // If you choose 'resize' above, configure the options below
  const IMAGE_RESIZE_OPTIONS = {
    width: undefined,
    height: undefined,
    quality: undefined,
    format: 'auto',
    fit: 'scale-down',
    blur: undefined,
    anim: true,
    metadata: 'none'
  };

  /* CONFIGURATION ENDS HERE */

  const PAGE_TO_SLUG = {};
  const slugs = [];
  const pages = [];
  Object.keys(SLUG_TO_PAGE).forEach(slug => {
    const page = SLUG_TO_PAGE[slug];
    slugs.push(slug);
    pages.push(page);
    PAGE_TO_SLUG[page] = slug;
  });

  addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
  });

  function rewriteImageOptions() {
    let options = {cf:{}};
    if (IMAGE_OPTIMIZATION === 'resize') {
      // Build image options, excluding undefined values
      const imageOpts = {};
      if (IMAGE_RESIZE_OPTIONS.width !== undefined) imageOpts.width = IMAGE_RESIZE_OPTIONS.width;
      if (IMAGE_RESIZE_OPTIONS.height !== undefined) imageOpts.height = IMAGE_RESIZE_OPTIONS.height;
      if (IMAGE_RESIZE_OPTIONS.quality !== undefined) imageOpts.quality = IMAGE_RESIZE_OPTIONS.quality;
      if (IMAGE_RESIZE_OPTIONS.format && IMAGE_RESIZE_OPTIONS.format !== '') imageOpts.format = IMAGE_RESIZE_OPTIONS.format;
      if (IMAGE_RESIZE_OPTIONS.fit && IMAGE_RESIZE_OPTIONS.fit !== '') imageOpts.fit = IMAGE_RESIZE_OPTIONS.fit;
      if (IMAGE_RESIZE_OPTIONS.blur !== undefined) imageOpts.blur = IMAGE_RESIZE_OPTIONS.blur;
      if (IMAGE_RESIZE_OPTIONS.anim !== undefined) imageOpts.anim = IMAGE_RESIZE_OPTIONS.anim;
      if (IMAGE_RESIZE_OPTIONS.metadata && IMAGE_RESIZE_OPTIONS.metadata !== '') imageOpts.metadata = IMAGE_RESIZE_OPTIONS.metadata;
      options.cf.image = imageOpts;
    }
    return options;
  }

  // Apply Cache-Control headers based on content type (Issue #33)
  function applyCacheHeaders(response, url, contentType) {
    if (!CACHING_ENABLED) return response;

    const newResponse = new Response(response.body, response);
    const pathname = url.pathname;

    // Static assets (JS, CSS, fonts)
    if (pathname.match(/\.(js|css|woff2?|ttf|eot)$/)) {
      newResponse.headers.set('Cache-Control', `public, max-age=${STATIC_ASSETS_TTL}, immutable`);
    }
    // Images
    else if (pathname.startsWith('/image') || pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg|ico)$/)) {
      newResponse.headers.set('Cache-Control', `public, max-age=${IMAGE_TTL}`);
    }
    // HTML pages
    else if (!contentType || contentType.includes('text/html')) {
      newResponse.headers.set('Cache-Control', `public, max-age=${HTML_TTL}, stale-while-revalidate=60`);
    }

    return newResponse;
  }

  function generateSitemap() {
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    slugs.forEach(
      (slug) =>
        (sitemap +=
          '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
    );
    sitemap += '</urlset>';
    return sitemap;
  }

  function generateRssFeed() {
    const title = RSS_TITLE || MY_DOMAIN;
    const description = RSS_DESCRIPTION || `RSS feed for ${MY_DOMAIN}`;
    const buildDate = new Date().toUTCString();
    let rss = '<?xml version="1.0" encoding="UTF-8"?>';
    rss += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">';
    rss += '<channel>';
    rss += `<title>${escapeXml(title)}</title>`;
    rss += `<link>https://${MY_DOMAIN}</link>`;
    rss += `<description>${escapeXml(description)}</description>`;
    rss += `<language>${RSS_LANGUAGE}</language>`;
    rss += `<lastBuildDate>${buildDate}</lastBuildDate>`;
    rss += `<atom:link href="https://${MY_DOMAIN}/rss.xml" rel="self" type="application/rss+xml"/>`;
    slugs.forEach((slug) => {
      const pageId = SLUG_TO_PAGE[slug];
      const metadata = PAGE_METADATA[slug] || {};
      const itemTitle = metadata.title || PAGE_TITLE || slug || 'Home';
      const itemDescription = metadata.description || PAGE_DESCRIPTION || '';
      const itemUrl = 'https://' + MY_DOMAIN + (slug ? '/' + slug : '');
      rss += '<item>';
      rss += `<title>${escapeXml(itemTitle)}</title>`;
      rss += `<link>${itemUrl}</link>`;
      rss += `<guid isPermaLink="true">${itemUrl}</guid>`;
      if (itemDescription) {
        rss += `<description>${escapeXml(itemDescription)}</description>`;
      }
      rss += '</item>';
    });
    rss += '</channel>';
    rss += '</rss>';
    return rss;
  }

  function escapeXml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  function handleOptions(request) {
    if (request.headers.get('Origin') !== null &&
      request.headers.get('Access-Control-Request-Method') !== null &&
      request.headers.get('Access-Control-Request-Headers') !== null) {
      // Handle CORS pre-flight request.
      return new Response(null, {
        headers: corsHeaders
      });
    } else {
      // Handle standard OPTIONS request.
      return new Response(null, {
        headers: {
          'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
        }
      });
    }
  }

  // Extract Notion site domain from the original Notion URL
  const NOTION_SITE_DOMAIN = (() => {
    try {
      const notionHost = new URL('https://philipb.notion.site/Vivre-reli-s-fe4785129e764baf85f54bb86cad7d1e?source=copy_link').hostname;
      return notionHost;
    } catch {
      return 'www.notion.so';
    }
  })();

  // Rewrite domain references in API response body
  function rewriteDomainInBody(body) {
    // Replace *.notion.site domain with custom domain
    let result = body.replace(/[a-z0-9-]+\.notion\.site/g, MY_DOMAIN);
    // Also replace www.notion.so references
    result = result.replace(/www\.notion\.so/g, MY_DOMAIN);
    return result;
  }

  async function fetchAndApply(request) {
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }
    let url = new URL(request.url);

    // Handle subdomain redirects (Issue #15)
    const hostname = url.hostname;
    const domainParts = MY_DOMAIN.split('.');
    const hostParts = hostname.split('.');
    // Check if the request is for a subdomain of the main domain
    if (hostParts.length > domainParts.length) {
      const subdomain = hostParts.slice(0, hostParts.length - domainParts.length).join('.');
      const mainDomainFromHost = hostParts.slice(hostParts.length - domainParts.length).join('.');
      if (mainDomainFromHost === MY_DOMAIN && SUBDOMAIN_REDIRECTS[subdomain]) {
        const redirectBase = SUBDOMAIN_REDIRECTS[subdomain];
        const redirectUrl = redirectBase + url.pathname + url.search;
        return Response.redirect(redirectUrl, 301);
      }
    }

    // Handle custom redirect rules (Issue #32)
    for (const rule of REDIRECT_RULES) {
      if (url.pathname === rule.from) {
        const redirectUrl = rule.to.startsWith('http')
          ? rule.to
          : 'https://' + MY_DOMAIN + rule.to;
        return Response.redirect(redirectUrl, rule.permanent ? 301 : 302);
      }
    }

    // Use the original Notion site domain instead of www.notion.so
    url.hostname = NOTION_SITE_DOMAIN;
    if (url.pathname === '/robots.txt') {
      return new Response('Sitemap: https://' + MY_DOMAIN + '/sitemap.xml');
    }
    if (url.pathname === '/sitemap.xml') {
      let response = new Response(generateSitemap());
      response.headers.set('content-type', 'application/xml');
      return response;
    }
    if (url.pathname === '/rss.xml' && RSS_ENABLED) {
      let response = new Response(generateRssFeed());
      response.headers.set('content-type', 'application/rss+xml; charset=utf-8');
      return response;
    }
    let response;
    if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
      response = await fetch(url.toString());
      let body = await response.text();
      body = rewriteDomainInBody(body);
      response = new Response(body, response);
      response.headers.set('Content-Type', 'application/x-javascript');
      return applyCacheHeaders(response, url, 'application/javascript');
    } else if (url.pathname.startsWith('/_assets/') && url.pathname.endsWith('.js')) {
      // Handle Notion's new asset paths
      response = await fetch(url.toString());
      let body = await response.text();
      body = rewriteDomainInBody(body);
      response = new Response(body, response);
      response.headers.set('Content-Type', 'application/javascript');
      return applyCacheHeaders(response, url, 'application/javascript');
    } else if (url.pathname.startsWith('/api/v3/getPublicPageData')) {
      // Proxy getPublicPageData and rewrite domain info
      response = await fetch(url.toString(), {
        body: request.body,
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        method: 'POST',
      });
      let body = await response.text();
      // Rewrite domain info to prevent redirect
      body = rewriteDomainInBody(body);
      // Also rewrite specific fields that cause redirects or interstitial pages
      try {
        const json = JSON.parse(body);
        if (json.spaceDomain) json.spaceDomain = MY_DOMAIN.split('.')[0];
        if (json.publicDomainName) json.publicDomainName = MY_DOMAIN;
        // Remove requireInterstitial to prevent "page not found" error
        delete json.requireInterstitial;
        // Set requestedOnExternalDomain to false to avoid external domain checks
        json.requestedOnExternalDomain = false;
        body = JSON.stringify(json);
      } catch (e) {
        // If JSON parsing fails, continue with string replacement
      }
      response = new Response(body, response);
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.delete('Content-Security-Policy');
      return response;
    } else if (url.pathname.startsWith('/api/v3/syncRecordValuesMain') ||
               url.pathname.startsWith('/api/v3/syncRecordValuesSpaceInitial') ||
               url.pathname.startsWith('/api/v3/getPublicSpaceData')) {
      // Rewrite domain info in sync/space API responses to prevent redirect
      response = await fetch(url.toString(), {
        body: request.body,
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        method: 'POST',
      });
      let body = await response.text();
      body = rewriteDomainInBody(body);
      response = new Response(body, response);
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.delete('Content-Security-Policy');
      return response;
    } else if ((url.pathname.startsWith('/api'))) {
      // Forward other API requests
      response = await fetch(url.toString(), {
        body: request.body,
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        method: 'POST',
      });
      let body = await response.text();
      body = rewriteDomainInBody(body);
      response = new Response(body, response);
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.delete('Content-Security-Policy');
      return response;
    } else if (url.pathname.startsWith('/image') && IMAGE_OPTIMIZATION !== 'none') {
      const response = await fetch(url, rewriteImageOptions());
      return applyCacheHeaders(response, url, 'image');
    } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
      const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
       return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 302);
    } else {
      response = await fetch(url.toString(), {
        body: request.body,
        headers: request.headers,
        method: request.method,
      });
      response = new Response(response.body, response);
      response.headers.delete('Content-Security-Policy');
      response.headers.delete('X-Content-Security-Policy');
    }

    // Handle 404 with custom page if configured (Issue #12)
    if (response.status === 404 && CUSTOM_404_PAGE_ID !== '') {
      const notFoundUrl = new URL(url);
      notFoundUrl.pathname = '/' + CUSTOM_404_PAGE_ID;
      const notFoundResponse = await fetch(notFoundUrl.toString(), {
        headers: request.headers,
        method: 'GET',
      });
      // Return custom 404 page content with 404 status
      response = new Response(notFoundResponse.body, {
        status: 404,
        statusText: 'Not Found',
        headers: notFoundResponse.headers,
      });
      response.headers.delete('Content-Security-Policy');
      response.headers.delete('X-Content-Security-Policy');
      return appendJavascript(response, SLUG_TO_PAGE, '404', url);
    }

    // Get current slug from page ID for canonical URL
    const pageId = url.pathname.slice(-32);
    const currentSlug = PAGE_TO_SLUG[pageId] || '';

    return appendJavascript(response, SLUG_TO_PAGE, currentSlug, url);
  }

  class MetaRewriter {
    constructor(slug) {
      this.slug = slug;
      // Get page-specific metadata or use defaults (Issue #11)
      this.metadata = PAGE_METADATA[slug] || {};
    }
    element(element) {
      const pageTitle = this.metadata.title || PAGE_TITLE;
      const pageDescription = this.metadata.description || PAGE_DESCRIPTION;
      const ogImage = this.metadata.ogImage;

      // Remove noindex meta tag for SEO (Issue #8)
      if (element.getAttribute('name') === 'robots') {
        const content = element.getAttribute('content');
        if (content && content.includes('noindex')) {
          element.remove();
          return;
        }
      }
      // Set og:site_name - use SITE_NAME if configured, otherwise MY_DOMAIN (Issue #18)
      if (element.getAttribute('property') === 'og:site_name') {
        if (SITE_NAME !== '') {
          element.setAttribute('content', SITE_NAME);
        } else if (MY_DOMAIN !== '') {
          element.setAttribute('content', MY_DOMAIN);
        }
      }
      // Replace 'Notion' branding in meta content (Issue #18)
      if (BRAND_REPLACEMENT !== '') {
        const content = element.getAttribute('content');
        if (content && content.includes('Notion')) {
          element.setAttribute('content', content.replace(/Notion/g, BRAND_REPLACEMENT));
        }
      }
      if (pageTitle !== '') {
        if (element.getAttribute('property') === 'og:title'
          || element.getAttribute('name') === 'twitter:title') {
          element.setAttribute('content', pageTitle);
        }
        if (element.tagName === 'title') {
          element.setInnerContent(pageTitle);
        }
      }
      if (pageDescription !== '') {
        if (element.getAttribute('name') === 'description'
          || element.getAttribute('property') === 'og:description'
          || element.getAttribute('name') === 'twitter:description') {
          element.setAttribute('content', pageDescription);
        }
      }
      // Set custom OG image if specified, fallback to default (Issue #11, #34)
      const effectiveOgImage = ogImage || DEFAULT_OG_IMAGE;
      if (effectiveOgImage && (element.getAttribute('property') === 'og:image'
        || element.getAttribute('name') === 'twitter:image')) {
        element.setAttribute('content', effectiveOgImage);
      }
      // Set canonical URL for og:url and twitter:url (Issue #9)
      if (element.getAttribute('property') === 'og:url'
        || element.getAttribute('name') === 'twitter:url') {
        const canonicalUrl = 'https://' + MY_DOMAIN + (this.slug ? '/' + this.slug : '');
        element.setAttribute('content', canonicalUrl);
      }
      if (element.getAttribute('name') === 'apple-itunes-app') {
        element.remove();
      }
    }
  }

  class LinkRewriter {
    element(element) {
      // Remove Notion's default favicon links when custom favicon is set (Issue #16)
      if (FAVICON_URL !== '') {
        const rel = element.getAttribute('rel');
        if (rel && (rel.includes('icon') || rel === 'apple-touch-icon')) {
          element.remove();
        }
      }
    }
  }

  class HeadRewriter {
    constructor(slug) {
      this.slug = slug;
      // Get page-specific metadata or use defaults (Issue #11)
      this.metadata = PAGE_METADATA[slug] || {};
    }
    element(element) {
      // Add canonical URL and robots meta tag for SEO (Issue #8 & #9)
      const canonicalUrl = 'https://' + MY_DOMAIN + (this.slug ? '/' + this.slug : '');
      element.append(`<link rel="canonical" href="${canonicalUrl}">`, { html: true });
      element.append(`<meta name="robots" content="index, follow">`, { html: true });

      // Add custom favicon if configured (Issue #16)
      if (FAVICON_URL !== '') {
        element.append(`<link rel="icon" href="${FAVICON_URL}" type="image/x-icon">`, { html: true });
        element.append(`<link rel="shortcut icon" href="${FAVICON_URL}" type="image/x-icon">`, { html: true });
        element.append(`<link rel="apple-touch-icon" href="${FAVICON_URL}">`, { html: true });
      }

      // Add Google Analytics 4 if configured (Issue #14)
      if (GOOGLE_TAG_ID !== '') {
        element.append(`<script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_TAG_ID}');
        </script>`, { html: true });
      }

      // Add Facebook Pixel if configured (Issue #31)
      if (FACEBOOK_PIXEL_ID !== '') {
        element.append(`<script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"
        /></noscript>`, { html: true });
      }

      // Add Twitter/X meta tags for social cards (Issue #19)
      if (TWITTER_HANDLE !== '') {
        element.append(`<meta name="twitter:site" content="${TWITTER_HANDLE}">`, { html: true });
        element.append(`<meta name="twitter:creator" content="${TWITTER_HANDLE}">`, { html: true });
      }

      // Add enhanced Open Graph and Twitter Card tags (Issue #34)
      element.append(`<meta property="og:type" content="website">`, { html: true });
      element.append(`<meta name="twitter:card" content="${TWITTER_CARD_TYPE}">`, { html: true });

      // Add OG image dimensions if image is set
      const effectiveOgImage = this.metadata.ogImage || DEFAULT_OG_IMAGE;
      if (effectiveOgImage) {
        element.append(`<meta property="og:image:width" content="${OG_IMAGE_WIDTH}">`, { html: true });
        element.append(`<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}">`, { html: true });
      }

      // Add locale if configured
      if (OG_LOCALE !== '') {
        element.append(`<meta property="og:locale" content="${OG_LOCALE}">`, { html: true });
      }

      // Add AI crawler attribution meta tags (Issue #13)
      if (AI_ATTRIBUTION !== '') {
        element.append(`<meta name="ai:source_url" content="${canonicalUrl}">`, { html: true });
        element.append(`<meta name="ai:source_attribution" content="${AI_ATTRIBUTION}">`, { html: true });
      }

      // Add JSON-LD structured data for rich search results (Issue #10)
      if (STRUCTURED_DATA_ENABLED) {
        const pageTitle = this.metadata.title || PAGE_TITLE;
        const pageDescription = this.metadata.description || PAGE_DESCRIPTION;
        const structuredData = {
          "@context": "https://schema.org",
          "@type": SCHEMA_TYPE,
          "name": pageTitle,
          "description": pageDescription,
          "url": canonicalUrl
        };
        // Add publisher info for Article schema type
        if (SCHEMA_TYPE === 'Article' || SCHEMA_TYPE === 'WebPage') {
          structuredData.publisher = {
            "@type": "Organization",
            "name": ORGANIZATION_NAME || MY_DOMAIN,
            "url": `https://${MY_DOMAIN}`
          };
          if (LOGO_URL) {
            structuredData.publisher.logo = {
              "@type": "ImageObject",
              "url": LOGO_URL
            };
          }
        }
        // Add Organization-specific fields
        if (SCHEMA_TYPE === 'Organization') {
          structuredData.name = ORGANIZATION_NAME || MY_DOMAIN;
          if (LOGO_URL) {
            structuredData.logo = LOGO_URL;
          }
        }
        element.append(`<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`, { html: true });
      }

      if (GOOGLE_FONT !== '') {
        element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
        <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`, {
          html: true
        });
      }
      element.append(`<style>
      div.notion-topbar > div > div:nth-child(3) { display: none !important; }
      div.notion-topbar > div > div:nth-child(4) { display: none !important; }
      div.notion-topbar > div > div:nth-child(5) { display: none !important; }
      div.notion-topbar > div > div:nth-child(6) { display: none !important; }
      div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
      div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
      div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
      div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }
      </style>`, {
        html: true
      })
    }
  }

  class BodyRewriter {
    constructor(SLUG_TO_PAGE) {
      this.SLUG_TO_PAGE = SLUG_TO_PAGE;
    }
    element(element) {
      // Add custom header HTML at the top of body if configured (Issue #20)
      if (CUSTOM_HEADER !== '') {
        element.prepend(CUSTOM_HEADER, { html: true });
      }
      element.append(`<div style="display:none">Powered by <a href="http://worknot.classmethod.cf">Worknot</a></div>
      <script>
      window.CONFIG.domainBaseUrl = 'https://${MY_DOMAIN}';
      const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
      const PAGE_TO_SLUG = {};
      const slugs = [];
      const pages = [];
      const el = document.createElement('div');
      let redirected = false;
      Object.keys(SLUG_TO_PAGE).forEach(slug => {
        const page = SLUG_TO_PAGE[slug];
        slugs.push(slug);
        pages.push(page);
        PAGE_TO_SLUG[page] = slug;
      });
      function getPage() {
        return location.pathname.slice(-32);
      }
      function getSlug() {
        return location.pathname.slice(1);
      }
      function updateSlug() {
        const slug = PAGE_TO_SLUG[getPage()];
        if (slug != null) {
          history.replaceState(history.state, '', '/' + slug);
        }
      }
      function onDark() {
        el.innerHTML = '<div title="Change to Light Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';
        document.body.classList.add('dark');
        __console.environment.ThemeStore.setState({ mode: 'dark' });
      };
      function onLight() {
        el.innerHTML = '<div title="Change to Dark Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';
        document.body.classList.remove('dark');
        __console.environment.ThemeStore.setState({ mode: 'light' });
      }
      function toggle() {
        if (document.body.classList.contains('dark')) {
          onLight();
        } else {
          onDark();
        }
      }
      function addDarkModeButton(device) {
        const nav = device === 'web' ? document.querySelector('.notion-topbar').firstChild : document.querySelector('.notion-topbar-mobile');
        el.className = 'toggle-mode';
        el.addEventListener('click', toggle);
        nav.appendChild(el);
        onLight();
      }
      const observer = new MutationObserver(function() {
        if (redirected) return;
        const nav = document.querySelector('.notion-topbar');
        const mobileNav = document.querySelector('.notion-topbar-mobile');
        if (nav && nav.firstChild && nav.firstChild.firstChild
          || mobileNav && mobileNav.firstChild) {
          redirected = true;
          updateSlug();
          addDarkModeButton(nav ? 'web' : 'mobile');
          const onpopstate = window.onpopstate;
          window.onpopstate = function() {
            if (slugs.includes(getSlug())) {
              const page = SLUG_TO_PAGE[getSlug()];
              if (page) {
                history.replaceState(history.state, 'bypass', '/' + page);
              }
            }
            onpopstate.apply(this, [].slice.call(arguments));
            updateSlug();
          };
        }
      });
      observer.observe(document.querySelector('#notion-app'), {
        childList: true,
        subtree: true,
      });
      const replaceState = window.history.replaceState;
      window.history.replaceState = function(state) {
        if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
        return replaceState.apply(window.history, arguments);
      };
      const pushState = window.history.pushState;
      window.history.pushState = function(state) {
        const dest = new URL(location.protocol + location.host + arguments[2]);
        const id = dest.pathname.slice(-32);
        if (pages.includes(id)) {
          arguments[2] = '/' + PAGE_TO_SLUG[id];
        }
        return pushState.apply(window.history, arguments);
      };
      const open = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function() {
        arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
        return open.apply(this, [].slice.call(arguments));
      };
    </script>${CUSTOM_SCRIPT}<style>${CUSTOM_CSS}</style>`, {
        html: true
      });
    }
  }

  async function appendJavascript(res, SLUG_TO_PAGE, slug, url) {
    const metaRewriter = new MetaRewriter(slug);
    const headRewriter = new HeadRewriter(slug);
    const linkRewriter = new LinkRewriter();
    const contentType = res.headers.get('content-type');
    let transformed = new HTMLRewriter()
      .on('title', metaRewriter)
      .on('meta', metaRewriter)
      .on('link', linkRewriter)
      .on('head', headRewriter)
      .on('body', new BodyRewriter(SLUG_TO_PAGE))
      .transform(res);
    return applyCacheHeaders(transformed, url, contentType);
  }
