// Fetches latest posts from gold & silver Substack RSS feeds
// Substack RSS feeds are public and don't require authentication

const GOLD_SILVER_SUBSTACKS = [
  {
    name: "Arcadia Economics Gold & Silver Daily",
    rss: "https://goldandsilverdaily.substack.com/feed",
  },
  {
    name: "Gold Investor Research",
    rss: "https://giresearch.substack.com/feed",
  },
  {
    name: "Gold Newsletter",
    rss: "https://goldnews.substack.com/feed",
  },
  {
    name: "Gold Newsletter Alert",
    rss: "https://goldnewsletter.substack.com/feed",
  },
  {
    name: "HGM Silver Gold",
    rss: "https://monetaryreset.substack.com/feed",
  },
  {
    name: "Gold and Geopolitics",
    rss: "https://no01.substack.com/feed",
  },
];

// Parse a single RSS XML string into post objects
function parseRSS(xml, sourceName) {
  const posts = [];
  try {
    // Extract <item> blocks
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];

      const title = extractTag(item, "title");
      const link = extractTag(item, "link") || extractTag(item, "guid");
      const pubDate = extractTag(item, "pubDate");
      const description = extractTag(item, "description");
      const image = extractImage(item, description);

      if (title && link) {
        posts.push({
          source: sourceName,
          title: decodeEntities(title),
          url: link.trim(),
          description: stripHtml(decodeEntities(description || "")).slice(0, 120),
          image,
          date: pubDate ? new Date(pubDate).toISOString() : null,
        });
      }
    }
  } catch (e) {
    // silently skip malformed feeds
  }
  return posts;
}

function extractTag(xml, tag) {
  // Handle CDATA and plain text
  const cdataMatch = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, "i").exec(xml);
  if (cdataMatch) return cdataMatch[1].trim();
  const plainMatch = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  if (plainMatch) return plainMatch[1].trim();
  // self-closing or between tags for <link>
  const linkMatch = /<link\s*\/>[\s\S]*?<link>([\s\S]*?)<\/link>/i.exec(xml);
  if (tag === "link" && linkMatch) return linkMatch[1].trim();
  return null;
}

function extractImage(item, description) {
  // Try <media:content>, <enclosure>, or og image in description
  const mediaMatch = /media:content[^>]+url="([^"]+)"/i.exec(item);
  if (mediaMatch) return mediaMatch[1];
  const enclosureMatch = /enclosure[^>]+url="([^"]+)"/i.exec(item);
  if (enclosureMatch) return enclosureMatch[1];
  const imgMatch = /<img[^>]+src="([^"]+)"/i.exec(description || "");
  if (imgMatch) return imgMatch[1];
  return null;
}

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function decodeEntities(str) {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Cache for 10 minutes
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=300");

  const results = await Promise.allSettled(
    GOLD_SILVER_SUBSTACKS.map(async ({ name, rss }) => {
      const response = await fetch(rss, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; GoldSilverTracker/1.0)" },
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const xml = await response.text();
      return parseRSS(xml, name).slice(0, 3); // max 3 posts per feed
    })
  );

  const allPosts = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value)
    .sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    })
    .slice(0, 10);

  if (allPosts.length === 0) {
    return res.status(500).json({ message: "Failed to fetch any substack feeds" });
  }

  return res.status(200).json(allPosts);
}
