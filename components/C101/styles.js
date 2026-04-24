export const tokens = {
  gold: "#C9A84C",
  goldL: "#F0D080",
  goldD: "#8B6914",
  goldBg: "#FBF6EC",
  goldT: "rgba(201, 168, 76, 0.08)",
  sil: "#A8A8B3",
  silL: "#D4D4DC",
  ink: "#1A1A2E",
  ink2: "#2D2D44",
  ink3: "#4A4A6A",
  muted: "#777799",
  bdr: "rgba(26, 26, 46, 0.1)",
  page: "#F7F5F0",
  white: "#FFFFFF",
  grn: "#1A7A4A",
  grnBg: "#E8F5ED",
  red: "#C0392B",
  redBg: "#FDECEA",
  blu: "#1E3A5F",
  bluBg: "#EFF6FF",
  max: "800px",
  r: "10px",
  rl: "14px",
};

export const keyframes = {
  pulse: `@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`,
};

export const breakpoints = {
  md: "(max-width: 768px)",
  sm: "(max-width: 480px)",
};

export const responsive = {
  md: {
    nav: { padding: "0 20px" },
    article: { padding: "0 20px" },
    heroInner: { padding: "0 20px" },
    priceStripInner: { padding: "0 20px", gridTemplateColumns: "1fr 1fr" },
    tocOl: { gridTemplateColumns: "1fr" },
    stats: { gridTemplateColumns: "1fr 1fr" },
    dataBanner: { flexDirection: "column" },
    nlForm: { flexDirection: "column" },
    footer: { padding: "32px 20px" },
  },
  sm: {
    stats: { gridTemplateColumns: "1fr" },
    priceStripInner: { gridTemplateColumns: "1fr" },
  },
};
export const globalReset = {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  backgroundColor: "rgba(253, 224, 71, 0.2)",
};

export const htmlBase = {
  scrollBehavior: "smooth",
};

export const bodyBase = {
  fontFamily: '"DM Sans", sans-serif',
  background: "#F7F5F0",
  color: "#1A1A2E",
  WebkitFontSmoothing: "antialiased",
};

export const aBase = {
  color: "#8B6914",
  textDecoration: "none",
};

export const aHover = {
  textDecoration: "underline",
};

export const nav = {
  background: "#1A1A2E",
  height: "56px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 32px",
  position: "sticky",
  top: 0,
  zIndex: 200,
  borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
};

export const navLogo = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "17px",
  fontWeight: 700,
  color: "#C9A84C",
  textDecoration: "none",
};

export const navLinks = {
  display: "flex",
  gap: "4px",
};

export const navLinksA = {
  fontSize: "12px",
  fontWeight: 500,
  color: "rgba(255, 255, 255, 0.55)",
  padding: "5px 10px",
  borderRadius: "6px",
  transition: "all 0.15s",
  textDecoration: "none",
};

export const navLinksAHover = {
  color: "#C9A84C",
  background: "rgba(201, 168, 76, 0.1)",
};

export const navLinksAOn = {
  color: "#C9A84C",
  background: "rgba(201, 168, 76, 0.12)",
};

export const bread = {
  background: "#FFFFFF",
  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",
  padding: "7px 32px",
  fontSize: "11px",
  color: "#777799",
};

export const breadA = {
  color: "#777799",
};

export const breadSpan = {
  margin: "0 6px",
  opacity: 0.4,
};

export const hero = {
  background: "#1A1A2E",
  padding: "52px 0 56px",
  position: "relative",
  overflow: "hidden",
};

export const heroBefore = {
  content: '""',
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse 55% 80% at 10% 60%, rgba(201,168,76,0.07) 0%, transparent 70%), " +
    "radial-gradient(ellipse 35% 50% at 90% 20%, rgba(168,168,179,0.04) 0%, transparent 70%)",
  pointerEvents: "none",
};

export const heroInner = {
  position: "relative",
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 32px",
};

export const heroLabel = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#C9A84C",
  marginBottom: "10px",
};

export const heroH1 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(28px, 4vw, 46px)",
  fontWeight: 700,
  color: "#ffffff",
  lineHeight: 1.15,
  marginBottom: "14px",
};

export const heroH1Em = {
  fontStyle: "italic",
  color: "#C9A84C",
};

export const heroDesc = {
  fontSize: "15px",
  color: "rgba(255, 255, 255, 0.65)",
  lineHeight: 1.7,
  maxWidth: "1600px",
  marginBottom: "20px",
};

export const heroMeta = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
  fontSize: "11px",
  color: "rgba(255, 255, 255, 0.35)",
};

export const heroMetaSpan = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

export const heroCta = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "#C9A84C",
  color: "#1A1A2E",
  fontSize: "12px",
  fontWeight: 700,
  padding: "9px 18px",
  borderRadius: "8px",
  textDecoration: "none",
  marginTop: "8px",
  transition: "opacity 0.15s",
};

export const heroCtaHover = {
  opacity: 0.88,
};

export const liveDot = {
  width: "6px",
  height: "6px",
  background: "#4CAF50",
  borderRadius: "50%",
  animation: "pulse 2s ease-in-out infinite",
};

export const priceStrip = {
  background: "#2D2D44",
  borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
};

export const priceStripInner = {
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "14px 32px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1px",
  background: "rgba(255, 255, 255, 0.06)",
};

export const ps = {
  padding: "12px 16px",
  background: "rgba(255, 255, 255, 0.03)",
};

export const psL = {
  fontSize: "9px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "rgba(255, 255, 255, 0.35)",
  marginBottom: "4px",
};

export const psV = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "18px",
  fontWeight: 500,
  color: "#ffffff",
  lineHeight: 1.1,
};

export const psS = {
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.3)",
  marginTop: "2px",
};

export const up = { color: "#4CAF50" };

export const dn = { color: "#F44336" };

export const neu = { color: "rgba(255, 255, 255, 0.45)" };

export const article = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "0 32px",
};

export const toc = {
  background: "#FFFFFF",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  padding: "24px 28px",
  margin: "40px 0",
};

export const tocTitle = {
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#777799",
  marginBottom: "14px",
};

export const tocOl = {
  paddingLeft: "18px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4px 24px",
};

export const tocLi = {
  fontSize: "13px",
  color: "#4A4A6A",
  padding: "3px 0",
};

export const tocA = {
  color: "#8B6914",
  fontWeight: 500,
};

export const sec = {
  padding: "48px 0 32px 20px",
  // paddingLeft: "20px",
  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",
};

export const secLabel = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#8B6914",
  marginBottom: "5px",
};

export const secH2 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(22px, 3vw, 30px)",
  fontWeight: 700,
  color: "#1A1A2E",
  lineHeight: 1.2,
  marginBottom: "16px",
};

export const secH3 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "20px",
  fontWeight: 600,
  color: "#1A1A2E",
  margin: "28px 0 10px",
};

export const secH4 = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#1A1A2E",
  margin: "20px 0 8px",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
};

export const proseP = {
  fontSize: "15px",
  lineHeight: 1.8,
  color: "#4A4A6A",
  marginBottom: "16px",
};

export const prosePStrong = {
  color: "#1A1A2E",
  fontWeight: 600,
};

export const proseUl = {
  margin: "0 0 16px 20px",
};

export const proseLi = {
  fontSize: "15px",
  lineHeight: 1.75,
  color: "#4A4A6A",
  marginBottom: "6px",
};

export const proseA = {
  color: "#8B6914",
  fontWeight: 500,
};

export const proseBlockquote = {
  borderLeft: "3px solid #C9A84C",
  padding: "12px 18px",
  background: "rgba(201, 168, 76, 0.08)",
  borderRadius: "0 10px 10px 0",
  margin: "20px 0",
};

export const proseBlockquoteP = {
  fontSize: "15px",
  fontStyle: "italic",
  color: "#4A4A6A",
  margin: 0,
};

export const callout = {
  borderRadius: "10px",
  padding: "18px 20px",
  margin: "24px 0",
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
};

export const calloutGold = {
  ...callout,
  background: "rgba(201, 168, 76, 0.08)",
  border: "1px solid rgba(201, 168, 76, 0.25)",
};

export const calloutBlue = {
  ...callout,
  background: "#EFF6FF",
  border: "1px solid rgba(30, 58, 95, 0.15)",
};

export const calloutRed = {
  ...callout,
  background: "#FDECEA",
  border: "1px solid rgba(192, 57, 43, 0.2)",
};

export const calloutGrn = {
  ...callout,
  background: "#E8F5ED",
  border: "1px solid rgba(26, 122, 74, 0.2)",
};

export const calloutIcon = {
  fontSize: "18px",
  flexShrink: 0,
  marginTop: "1px",
};

export const calloutTitle = {
  fontSize: "13px",
  fontWeight: 700,
  color: "#1A1A2E",
  marginBottom: "4px",
};

export const calloutText = {
  fontSize: "13px",
  color: "#4A4A6A",
  lineHeight: 1.65,
};

export const ctbl = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "20px 0",
  fontSize: "13px",
};

export const ctblTh = {
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "#777799",
  padding: "9px 14px",
  textAlign: "left",
  borderBottom: "2px solid rgba(26, 26, 46, 0.1)",
};

export const ctblTd = {
  padding: "11px 14px",
  borderBottom: "1px solid rgba(26, 26, 46, 0.06)",
  verticalAlign: "top",
  color: "#4A4A6A",
  lineHeight: 1.55,
};

export const ctblTrHoverTd = {
  background: "rgba(201, 168, 76, 0.03)",
};

export const ctblTrLastTd = {
  borderBottom: "none",
};

export const ctblMono = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "12px",
};

export const ctblStrong = {
  color: "#1A1A2E",
  fontWeight: 600,
};

export const tag = {
  fontSize: "10px",
  fontWeight: 600,
  padding: "2px 8px",
  borderRadius: "12px",
  whiteSpace: "nowrap",
  display: "inline-block",
};

export const tagGold = {
  ...tag,
  background: "#FBF6EC",
  color: "#8B6914",
};

export const tagGrn = {
  ...tag,
  background: "#E8F5ED",
  color: "#1A7A4A",
};

export const tagRed = {
  ...tag,
  background: "#FDECEA",
  color: "#C0392B",
};

export const tagNeu = {
  ...tag,
  background: "#F3F4F6",
  color: "#4B5563",
};

export const tagBlu = {
  ...tag,
  background: "#EFF6FF",
  color: "#1E3A5F",
};

export const stats = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  margin: "24px 0",
};

export const stat = {
  background: "#FFFFFF",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  padding: "18px 20px",
};

export const statL = {
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#777799",
  marginBottom: "5px",
};

export const statV = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "22px",
  fontWeight: 500,
  color: "#1A1A2E",
};

export const statS = {
  fontSize: "11px",
  color: "#777799",
  marginTop: "3px",
};

export const glosDl = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "4px 20px",
  fontSize: "14px",
};

export const glosDt = {
  fontWeight: 600,
  color: "#1A1A2E",
  padding: "8px 0",
  borderBottom: "1px solid rgba(26, 26, 46, 0.05)",
};

export const glosDd = {
  color: "#4A4A6A",
  lineHeight: 1.65,
  padding: "8px 0",
  borderBottom: "1px solid rgba(26, 26, 46, 0.05)",
};

export const faqItem = {
  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",
};

export const faqBtn = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 0",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: '"DM Sans", sans-serif',
  fontSize: "15px",
  fontWeight: 600,
  color: "#1A1A2E",
  textAlign: "left",
  gap: "16px",
};

export const faqBtnHover = {
  color: "#8B6914",
};

export const faqArr = {
  fontSize: "11px",
  color: "#777799",
  flexShrink: 0,
  transition: "transform 0.2s",
};

export const faqArrOpen = {
  transform: "rotate(180deg)",
};

export const faqBody = {
  display: "none",
  padding: "0 0 18px",
  fontSize: "14px",
  color: "#4A4A6A",
  lineHeight: 1.75,
};

export const faqBodyOpen = {
  display: "block",
};

export const dataBanner = {
  background: "#1A1A2E",
  borderRadius: "14px",
  padding: "24px 28px",
  margin: "32px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
};

export const tableWrapper = {
  overflowX: "auto",
  width: "100%",
};

export const dbLabel = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#C9A84C",
  marginBottom: "4px",
};

export const dbTitle = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "18px",
  color: "#ffffff",
  marginBottom: "4px",
};

export const dbSub = {
  fontSize: "12px",
  color: "rgba(255, 255, 255, 0.45)",
};

export const dbBtn = {
  background: "#C9A84C",
  color: "#1A1A2E",
  fontSize: "12px",
  fontWeight: 700,
  padding: "9px 18px",
  borderRadius: "8px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  flexShrink: 0,
  transition: "opacity 0.15s",
};

export const dbBtnHover = {
  opacity: 0.88,
};

export const newsletter = {
  background: "#FFFFFF",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  padding: "28px",
  margin: "40px 0",
  textAlign: "center",
};

export const nlTitle = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "22px",
  color: "#1A1A2E",
  marginBottom: "8px",
};

export const nlSub = {
  fontSize: "14px",
  color: "#777799",
  marginBottom: "18px",
};

export const nlForm = {
  display: "flex",
  gap: "10px",
  maxWidth: "400px",
  margin: "0 auto",
};

export const nlInput = {
  flex: 1,
  padding: "10px 14px",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "8px",
  fontSize: "14px",
  fontFamily: '"DM Sans", sans-serif',
};

export const nlBtn = {
  padding: "10px 20px",
  background: "#C9A84C",
  color: "#1A1A2E",
  border: "none",
  borderRadius: "8px",
  fontWeight: 700,
  fontSize: "13px",
  cursor: "pointer",
};

export const footer = {
  background: "#1A1A2E",
  padding: "40px 32px 36px",
  borderTop: "1px solid rgba(201, 168, 76, 0.15)",
  textAlign: "center",
  marginTop: 0,
};

export const footerLogo = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "18px",
  color: "#C9A84C",
  display: "block",
  marginBottom: "10px",
};

export const footerP = {
  fontSize: "11px",
  color: "rgba(255, 255, 255, 0.3)",
  lineHeight: 1.8,
};

export const footerLinks = {
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  marginTop: "12px",
  flexWrap: "wrap",
};

export const footerLinksA = {
  fontSize: "11px",
  color: "rgba(255, 255, 255, 0.3)",
};

export const footerLinksAHover = {
  color: "#C9A84C",
};
