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
  muted: "#8888AA",
  bdr: "rgba(26, 26, 46, 0.1)",
  bdrD: "rgba(255, 255, 255, 0.1)",
  page: "#F7F5F0",
  white: "#FFFFFF",
  grn: "#1A7A4A",
  grnBg: "#E8F5ED",
  red: "#C0392B",
  redBg: "#FDECEA",
  amb: "#92400E",
  ambBg: "#FEF3C7",
  blu: "#1E3A5F",
  bluBg: "#EFF6FF",
  max: "1280px",
  r: "10px",
  rl: "14px",
};

export const keyframes = {
  tk: `@keyframes tk { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`,
  ld: `@keyframes ld { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`,
};

export const breakpoints = {
  lg: "(max-width: 1024px)",
  md: "(max-width: 768px)",
  sm: "(max-width: 560px)",
};

export const responsive = {
  lg: {
    g4: { gridTemplateColumns: "1fr 1fr" },
    hpg: { gridTemplateColumns: "1fr 1fr" },
    ss: { gridTemplateColumns: "1fr 1fr" },
  },
  md: {
    w: { padding: "0 20px" },
    nav: { padding: "0 20px" },
    g2: { gridTemplateColumns: "1fr" },
    g3: { gridTemplateColumns: "1fr" },
    g52: { gridTemplateColumns: "1fr" },
    snavI: { padding: "0 16px" },
  },
  sm: {
    g4: { gridTemplateColumns: "1fr" },
    hpg: { gridTemplateColumns: "1fr" },
    ss: { gridTemplateColumns: "1fr" },
  },
};

export const globalReset = {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
};

export const htmlBase = {
  scrollBehavior: "smooth",
};

export const bodyBase = {
  fontFamily: '"DM Sans", sans-serif',
  background: "#F7F5F0",
  color: "#1A1A2E",
  fontSize: "14px",
  lineHeight: 1.6,
  WebkitFontSmoothing: "antialiased",
};

export const aBase = {
  color: "inherit",
  textDecoration: "none",
};

export const buttonBase = {
  fontFamily: "inherit",
  cursor: "pointer",
};

export const w = {
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 32px",
};

export const g2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "18px",
};

export const g3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

export const g4 = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "14px",
};

export const g52 = {
  display: "grid",
  gridTemplateColumns: "5fr 2fr",
  gap: "18px",
  alignItems: "start",
};

export const gap = {
  marginBottom: "18px",
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
  listStyle: "none",
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

export const ticker = {
  background: "#2D2D44",
  borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
  overflow: "hidden",
  height: "34px",
  display: "flex",
  alignItems: "center",
};

export const tkInner = {
  display: "flex",
  gap: "40px",
  animation: "tk 32s linear infinite",
  whiteSpace: "nowrap",
  padding: "0 20px",
  alignItems: "center",
};

export const ti = {
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
  fontSize: "11px",
  fontFamily: '"DM Mono", monospace',
  color: "rgba(255, 255, 255, 0.85)",
};

export const tl = {
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.4)",
  letterSpacing: "0.05em",
};

export const up = { color: "#4CAF50" };

export const dn = { color: "#F44336" };

export const neu = { color: "rgba(255, 255, 255, 0.45)" };

export const hero = {
  background: "#1A1A2E",
  padding: "40px 0 44px",
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
};

export const hEye = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "#C9A84C",
  marginBottom: "8px",
};

export const hTitle = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(26px, 3.5vw, 40px)",
  fontWeight: 700,
  color: "#ffffff",
  lineHeight: 1.15,
  marginBottom: "6px",
};

export const hTitleEm = {
  fontStyle: "italic",
  color: "#C9A84C",
};

export const hSub = {
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.5)",
  maxWidth: "560px",
  lineHeight: 1.65,
  marginBottom: "10px",
};

export const hUpd = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.35)",
  marginBottom: "24px",
  padding: "4px 10px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
};

export const ldot = {
  width: "6px",
  height: "6px",
  background: "#4CAF50",
  borderRadius: "50%",
  animation: "ld 2s ease-in-out infinite",
};

export const hpg = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1px",
  background: "rgba(255, 255, 255, 0.06)",
  borderRadius: "14px",
  overflow: "hidden",
  border: "1px solid rgba(201, 168, 76, 0.2)",
};

export const hpc = {
  background: "rgba(255, 255, 255, 0.03)",
  padding: "18px 20px",
  transition: "background 0.2s",
};

export const hpcHover = {
  background: "rgba(255, 255, 255, 0.06)",
};

export const hpcL = {
  fontSize: "10px",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "rgba(255, 255, 255, 0.35)",
  marginBottom: "5px",
};

export const hpcV = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "22px",
  fontWeight: 500,
  color: "#ffffff",
  lineHeight: 1.1,
  marginBottom: "3px",
};

export const hpcC = {
  fontSize: "11px",
  marginBottom: "2px",
};

export const hpcS = {
  fontSize: "10px",
  color: "rgba(255, 255, 255, 0.3)",
};

export const snav = {
  background: "#ffffff",
  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",
  position: "sticky",
  top: "56px",
  zIndex: 100,
  overflowX: "auto",
  scrollbarWidth: "none",
};

export const snavI = {
  maxWidth: "1600px",
  margin: "0 auto",
  padding: "0 32px",
  display: "flex",
  gap: "40px",
};

export const sn = {
  fontSize: "12px",
  fontWeight: 500,
  color: "#8888AA",
  padding: "12px 14px",
  borderBottom: "2px solid transparent",
  whiteSpace: "nowrap",
  transition: "all 0.15s",
  background: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
};

export const snHover = {
  color: "#1A1A2E",
};

export const snOn = {
  color: "#1A1A2E",
  borderBottomColor: "#C9A84C",
  fontWeight: 600,
};

export const sec = {
  padding: "48px 0",
};

export const secAlt = {
  background: "#ffffff",
};

export const secDark = {
  background: "#1A1A2E",
};

export const slbl = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#8B6914",
  marginBottom: "4px",
};

export const slblDark = {
  color: "#C9A84C",
};

export const stitle = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(20px, 2.2vw, 28px)",
  fontWeight: 700,
  color: "#1A1A2E",
  lineHeight: 1.2,
  marginBottom: "6px",
};
export const stitle2 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "clamp(20px, 2.2vw, 28px)",
  fontWeight: 700,
  color: "#fff",
  lineHeight: 1.2,
  marginBottom: "6px",
};

export const stitleDark = {
  color: "#ffffff",
};

export const sdesc = {
  fontSize: "13px",
  color: "#8888AA",
  maxWidth: "640px",
  lineHeight: 1.65,
  marginBottom: "28px",
};

export const sdescDark = {
  color: "rgba(255, 255, 255, 0.5)",
};

export const card = {
  background: "#ffffff",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  padding: "20px 22px",
};

export const cb = {
  background: "#ffffff",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  padding: "20px 22px 14px",
};

export const cbd = {
  background: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "14px",
  padding: "20px 22px 14px",
};

export const ch = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "12px",
  marginBottom: "16px",
};

export const cl = {
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "#8888AA",
  marginBottom: "2px",
};

export const clDark = {
  color: "rgba(255, 255, 255, 0.35)",
};

export const ct = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "17px",
  fontWeight: 600,
  color: "#fff",
};

export const ct2 = {
  fontFamily: '"Playfair Display", serif',
  fontSize: "17px",
  fontWeight: 600,
  color: "#000",
};

export const ctDark = {
  color: "#ffffff",
};

export const cm = {
  fontSize: "11px",
  color: "#8888AA",
  marginTop: "2px",
};

export const cmDark = {
  color: "rgba(255, 255, 255, 0.3)",
};

export const csrc = {
  fontSize: "10px",
  color: "#8888AA",
  marginTop: "10px",
  paddingTop: "8px",
  borderTop: "1px solid rgba(26, 26, 46, 0.1)",
};

export const csrcDark = {
  color: "rgba(255, 255, 255, 0.25)",
  borderTopColor: "rgba(255, 255, 255, 0.07)",
};

export const trng = {
  display: "flex",
  gap: "2px",
  flexShrink: 0,
};

export const tb = {
  fontSize: "10px",
  fontWeight: 500,
  padding: "3px 8px",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "5px",
  background: "transparent",
  color: "#8888AA",
  transition: "all 0.12s",
};

export const tbHover = {
  background: "#1A1A2E",
  color: "#C9A84C",
  borderColor: "#1A1A2E",
};

export const tbOn = {
  background: "#1A1A2E",
  color: "#C9A84C",
  borderColor: "#1A1A2E",
};

export const tbdBase = {
  borderColor: "rgba(255, 255, 255, 0.15)",
  color: "rgba(255, 255, 255, 0.4)",
};

export const tbdHover = {
  background: "rgba(201, 168, 76, 0.15)",
  color: "#C9A84C",
  borderColor: "rgba(201, 168, 76, 0.4)",
};

export const tbdOn = {
  background: "rgba(201, 168, 76, 0.15)",
  color: "#C9A84C",
  borderColor: "rgba(201, 168, 76, 0.4)",
};

export const tvph = {
  background: "#0d0d1a",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "7px",
  border: "1px solid rgba(255, 255, 255, 0.07)",
  color: "rgba(255, 255, 255, 0.3)",
  fontSize: "11px",
};

export const tvic = {
  width: "34px",
  height: "34px",
  borderRadius: "8px",
  background: "rgba(201, 168, 76, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const tvsym = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "11px",
  color: "#C9A84C",
  opacity: 0.8,
};

export const tvcr = {
  fontSize: "9px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.15)",
};

export const ss = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1px",
  background: "rgba(26, 26, 46, 0.1)",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  overflow: "hidden",
  marginBottom: "28px",
};

export const ssd = {
  background: "rgba(255, 255, 255, 0.06)",
  borderColor: "rgba(255, 255, 255, 0.08)",
};

export const sc = {
  background: "#ffffff",
  padding: "16px 20px",
};

export const scd = {
  background: "rgba(255, 255, 255, 0.03)",
};

export const sl = {
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "#8888AA",
  marginBottom: "5px",
};

export const slDark = {
  color: "rgba(255, 255, 255, 0.35)",
};

export const sv = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "20px",
  fontWeight: 500,
  color: "#000",
  lineHeight: 1.1,
};

export const sv2 = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "20px",
  fontWeight: 500,
  color: "#fff",
  lineHeight: 1.1,
};

export const svDark = {
  color: "#ffffff",
};

export const ss2 = {
  fontSize: "11px",
  color: "#8888AA",
  marginTop: "2px",
};

export const ss2Dark = {
  color: "rgba(255, 255, 255, 0.35)",
};

export const bdg = {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "10px",
  fontWeight: 600,
  padding: "3px 8px",
  borderRadius: "20px",
  letterSpacing: "0.04em",
};

export const bBull = {
  ...bdg,
  background: "#E8F5ED",
  color: "#1A7A4A",
};

export const bBear = {
  ...bdg,
  background: "#FDECEA",
  color: "#C0392B",
};

export const bNeu = {
  ...bdg,
  background: "#F3F4F6",
  color: "#4B5563",
};

export const bWarn = {
  ...bdg,
  background: "#FEF3C7",
  color: "#92400E",
};

export const bGold = {
  ...bdg,
  background: "#FBF6EC",
  color: "#8B6914",
};

export const ins = {
  display: "flex",
  gap: "14px",
  alignItems: "flex-start",
  padding: "14px 16px",
  borderRadius: "10px",
  marginTop: "14px",
};

export const ig = {
  ...ins,
  background: "rgba(201, 168, 76, 0.08)",
  border: "1px solid rgba(201, 168, 76, 0.22)",
};

export const ir = {
  ...ins,
  background: "#FDECEA",
  border: "1px solid rgba(192, 57, 43, 0.2)",
};

export const ib = {
  ...ins,
  background: "#EFF6FF",
  border: "1px solid rgba(30, 58, 95, 0.15)",
};

export const ii = {
  fontSize: "16px",
  flexShrink: 0,
  marginTop: "1px",
};

export const it = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#1A1A2E",
  marginBottom: "3px",
};

export const itDark = {
  color: "#ffffff",
};

export const ix = {
  fontSize: "12px",
  color: "#4A4A6A",
  lineHeight: 1.6,
};

export const ixDark = {
  color: "rgba(255, 255, 255, 0.6)",
};

export const dt = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "12px",
};

export const dtTh = {
  fontSize: "10px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: "#8888AA",
  padding: "8px 12px",
  textAlign: "left",
  borderBottom: "1px solid rgba(26, 26, 46, 0.1)",
  whiteSpace: "nowrap",
};

export const dtTd = {
  padding: "11px 12px",
  borderBottom: "1px solid rgba(26, 26, 46, 0.05)",
  verticalAlign: "middle",
};

export const dtTrLastTd = {
  borderBottom: "none",
};

export const dtTrHoverTd = {
  background: "rgba(201, 168, 76, 0.03)",
};

export const mono = {
  fontFamily: '"DM Mono", monospace',
};

export const mbw = {
  height: "4px",
  background: "rgba(0, 0, 0, 0.07)",
  borderRadius: "2px",
  overflow: "hidden",
  flex: 1,
  minWidth: "40px",
};

export const mb = {
  height: "100%",
  borderRadius: "2px",
  background: "#C9A84C",
};

export const dl = {
  display: "flex",
  flexDirection: "column",
  gap: "9px",
};

export const dli = {
  display: "flex",
  alignItems: "center",
  gap: "9px",
  fontSize: "12px",
  color: "#4A4A6A",
};

export const dld = {
  width: "9px",
  height: "9px",
  borderRadius: "50%",
  flexShrink: 0,
};

export const dlp = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "12px",
  color: "#8888AA",
  marginLeft: "auto",
};

export const sgb = {
  height: "8px",
  background:
    "linear-gradient(to right, #4CAF50 0%, #FFC107 40%, #FF5722 70%, #C62828 100%)",
  borderRadius: "4px",
  position: "relative",
  margin: "12px 0 6px",
};

export const sgm = {
  position: "absolute",
  top: "-4px",
  width: "16px",
  height: "16px",
  background: "#1A1A2E",
  border: "2px solid #ffffff",
  borderRadius: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.3)",
};

export const sgl = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "10px",
  color: "#8888AA",
};

export const cotl = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  marginBottom: "14px",
};

export const cotli = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "11px",
  color: "#8888AA",
};

export const cotls = {
  width: "10px",
  height: "10px",
  borderRadius: "2px",
  flexShrink: 0,
};

export const etfc = {
  background: "#ffffff",
  border: "1px solid rgba(26, 26, 46, 0.1)",
  borderRadius: "14px",
  padding: "16px 18px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export const etfT = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "15px",
  fontWeight: 500,
  color: "#1A1A2E",
};

export const etfN = {
  fontSize: "11px",
  color: "#8888AA",
};

export const etfP = {
  fontFamily: '"DM Mono", monospace',
  fontSize: "18px",
  fontWeight: 500,
  color: "#1A1A2E",
  marginTop: "4px",
};

export const etfM = {
  display: "flex",
  gap: "10px",
  fontSize: "10px",
  color: "#8888AA",
  flexWrap: "wrap",
};

export const etfMB = {
  color: "#4A4A6A",
  fontWeight: 500,
};

export const etype = {
  fontSize: "9px",
  fontWeight: 600,
  padding: "2px 7px",
  borderRadius: "10px",
  background: "rgba(201, 168, 76, 0.1)",
  color: "#8B6914",
  display: "inline-block",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export const footer = {
  background: "#1A1A2E",
  padding: "40px 32px 36px",
  borderTop: "1px solid rgba(201, 168, 76, 0.15)",
  textAlign: "center",
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
