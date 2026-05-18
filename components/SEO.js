import Head from "next/head";

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  const url = canonicalUrl || "https://www.goldandsilvertracker.com/";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.goldandsilvertracker.com/Gold_and_silver_thumbnail.png"
      />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href="/Gold_and_silver_thumbnail.png" />
      <script type="application/ld+json">
        {JSON.stringify({
          name: "Gold & Silver Tracker",
          url: "https://www.goldandsilvertracker.com/",
          logo: "https://www.goldandsilvertracker.com/Goldsilver_logo.png",
          description,
        })}
      </script>
    </Head>
  );
};

export default SEO;
