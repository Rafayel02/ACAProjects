import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const money = (n: number) =>
  new Intl.NumberFormat("en-US").format(n).replace(/,/g, "\u00a0") + " AMD";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? " scrolled" : ""}`}>
      <div className="shell site-nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">F</span>
          <span className="brand-name">FlintBox</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#product">Product</a>
          <a href="#economics">Economics</a>
          <a href="#pilot">Pilot</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#specs">Specs</a>
        </nav>
        <a className="btn" href="#pilot">
          <span className="spark" aria-hidden />
          Pilot plan
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);
  const scale = useTransform(scrollY, [0, 500], [1.04, 1.12]);
  const opacity = useTransform(scrollY, [0, 420], [1, 0.55]);

  return (
    <section className="hero" id="top" aria-label="FlintBox">
      <motion.div className="hero-media" style={{ y, scale, opacity }}>
        <img src="/flintbox-classic-hero.jpg" alt="FlintBox Classic white pocket accessory" />
      </motion.div>
      <div className="hero-veil" aria-hidden />
      <div className="hero-copy">
        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Internal plan · v1 · 22 Nov 2026
        </motion.p>
        <motion.h1
          className="hero-brand"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          FlintBox
        </motion.h1>
        <motion.p
          className="hero-line"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          Lighter + breath freshness in one pocket piece.
        </motion.p>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          A reusable white case for a Cricket lighter and a refillable mouth spray — built for adult
          smokers who want convenience after a cigarette.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          <a className="btn" href="#economics">
            See unit economics
          </a>
          <a className="btn btn-ghost" href="#product" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.28)" }}>
            Product line
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="section shell" id="product">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Product line</p>
          <h2 className="h2">White product. Black stand. Refills forever.</h2>
          <p className="lede">
            Classic ships with case, Cricket lighter, and filled spray. Refills sell beside it on a
            reusable acrylic fixture — 12 of each SKU per stand.
          </p>
        </div>
      </Reveal>

      <div className="product-grid">
        <Reveal>
          <article className="product-card featured">
            <img src="/flintbox-detail.jpg" alt="FlintBox Classic detail" />
            <div className="shade" />
            <div className="body">
              <h3>FlintBox Classic</h3>
              <p>Reusable body + Cricket + Albadent lemon spray. Target retail 1&nbsp;000 AMD.</p>
              <div className="price-row">
                <span className="chip">COGS 610</span>
                <span className="chip">Wholesale 830</span>
                <span className="chip">Gross 220</span>
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="product-card">
            <img src="/flintbox-classic-hero.jpg" alt="Lighter refill" style={{ objectPosition: "30% 50%" }} />
            <div className="shade" />
            <div className="body">
              <h3>Lighter Refill</h3>
              <p>Cricket + sleeve case. Sleeve is free with Classic; 30 AMD when sold alone.</p>
              <div className="price-row">
                <span className="chip">COGS 200</span>
                <span className="chip">Wholesale 300</span>
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.14}>
          <article className="product-card">
            <img src="/flintbox-stand-black.jpg" alt="Spray refill on stand context" />
            <div className="shade" />
            <div className="body">
              <h3>Fresh Spray Refill</h3>
              <p>Empty atomizer + 2&nbsp;ml Albadent with loss buffer. Independent of the lighter.</p>
              <div className="price-row">
                <span className="chip">COGS 90</span>
                <span className="chip">Wholesale 200</span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <div className="dark-band" style={{ marginTop: "1.25rem" }}>
          <div className="dark-band-grid">
            <img src="/flintbox-stand-black.jpg" alt="Matte black FlintBox retail stand" />
            <div className="copy">
              <p className="eyebrow">Retail fixture</p>
              <h2 className="h2" style={{ color: "#f7f8fa" }}>
                One stand. Thirty-six faces.
              </h2>
              <p className="lede">
                Matte black acrylic, 274.15 × 240.91 × 160.94&nbsp;mm. CapEx {money(15700)} per store —
                not in unit COGS. Pilot assumes 5 stands = {money(78500)}.
              </p>
              <ul>
                <li>12 Classic · 12 lighter refills · 12 spray refills</li>
                <li>Full stock COGS per stand: {money(10800)}</li>
                <li>Stand + first fill: {money(26500)} before logistics/tax</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Economics() {
  return (
    <section className="section shell" id="economics">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Unit economics</p>
          <h2 className="h2">Gross before the hard costs.</h2>
          <p className="lede">
            Figures below are preliminary wholesale gross — stands, logistics, tax, labor, scrap,
            and compliance sit outside.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>SKU</th>
                <th className="num">COGS</th>
                <th className="num">Wholesale</th>
                <th className="num">Retail</th>
                <th className="num">Gross / unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FlintBox Classic</td>
                <td className="num">610</td>
                <td className="num">830</td>
                <td className="num">1&nbsp;000</td>
                <td className="num">220</td>
              </tr>
              <tr>
                <td>Lighter refill + case</td>
                <td className="num">200</td>
                <td className="num">300</td>
                <td className="num">320</td>
                <td className="num">100</td>
              </tr>
              <tr>
                <td>Spray refill</td>
                <td className="num">90</td>
                <td className="num">200</td>
                <td className="num">220</td>
                <td className="num">110</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="note">
          Classic BOM: body 300 + Cricket 170 + atomizer 50 + liquid 40 + sticker 50 = 610. Sleeve is
          free with Classic; +30 on solo lighter refills.
        </p>
      </Reveal>

      <div className="metrics">
        <Reveal>
          <div className="metric">
            <strong>{money(5160)}</strong>
            <span>Gross on a full stand cycle (36 units)</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="metric">
            <strong>~4 cycles</strong>
            <span>Stand payback at {money(15700)} / {money(5160)}</span>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="metric">
            <strong>{money(760000)}</strong>
            <span>Hypo monthly gross at 1k/1k/4k mix — not a forecast</span>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="split" style={{ marginTop: "1.25rem" }}>
          <div className="panel">
            <h3>Classic BOM</h3>
            <ul>
              <li>3D body (PrintEx) — 300</li>
              <li>Cricket lighter — 170</li>
              <li>Atomizer bottle — 50</li>
              <li>Albadent liquid (~2&nbsp;ml) — 40</li>
              <li>Brand sticker — 50</li>
            </ul>
          </div>
          <div className="panel">
            <h3>Not in COGS</h3>
            <ul>
              <li>Stand CapEx 15&nbsp;700</li>
              <li>Delivery & logistics</li>
              <li>Tax, labor, packaging beyond sticker</li>
              <li>Scrap, returns, testing, compliance</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Pilot() {
  return (
    <section className="section shell" id="pilot">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Go-to-market</p>
          <h2 className="h2">Five shops. Sixty Classics. Fourteen days.</h2>
          <p className="lede">
            Brother already has retail access in Armenia — that lowers the placement barrier. Volumes
            are still unproven. Measure sell-through, not just shipments.
          </p>
        </div>
      </Reveal>

      <div className="split">
        <Reveal>
          <div className="panel">
            <h3>Pilot design</h3>
            <ul>
              <li>5 stores × 12 Classic = 60 units</li>
              <li>Observe 14 days after permitted launch</li>
              <li>Stands + refills merchandised together</li>
              <li>Success bar: ~60 Classics sold in 7–14 days, clean quality, reorder intent</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel">
            <h3>Before commercial test</h3>
            <ul>
              <li>Heat / flame safety of the case</li>
              <li>Oral-use spray formula + docs</li>
              <li>Labeling & trade requirements</li>
              <li>Physical fit of the latest print vs CAD gaps</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="split" style={{ marginTop: "1rem" }}>
          <div className="panel">
            <h3>Problem</h3>
            <p>
              Adults who carry a lighter often also want breath freshness after a cigarette —
              especially before work or a meeting. Gum and sprays exist separately.
            </p>
          </div>
          <div className="panel">
            <h3>Value</h3>
            <p>
              “Lighter and breath freshness in one pocket accessory.” Compactness, independent
              refills, and design — still hypotheses until the pilot speaks.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="section shell" id="roadmap">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Roadmap</p>
          <h2 className="h2">Prove love. Then print money. Then maybe a store.</h2>
          <p className="lede">
            Do not pre-invest in gift SKUs or owned retail until demand and refill behavior show up.
          </p>
        </div>
      </Reveal>

      <div className="roadmap">
        <Reveal>
          <article className="stage">
            <h3>Demand check in retail</h3>
            <p>
              Classic + refills on branded stands. If customers shrug, stop. If they buy and reorder,
              expand doors. Later: own a 3D printer — body COGS hypothetically 300 → ~100, Classic
              gross ~220 → ~420 at the same 830 wholesale.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.06}>
          <article className="stage">
            <h3>Gift line + direct online</h3>
            <p>
              Premium materials, engraving, gift wrap. Concept retail ~10&nbsp;000 AMD with ~3&nbsp;000
              target contribution — only after Stage 1 clears.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.12}>
          <article className="stage">
            <h3>Own storefront (optional)</h3>
            <p>
              Long-horizon idea if online + wholesale economics stay healthy. Not committed.
            </p>
          </article>
        </Reveal>
      </div>

      <Reveal>
        <div style={{ marginTop: "2rem" }}>
          <p className="eyebrow">Next actions</p>
          <h2 className="h2" style={{ marginBottom: "1rem" }}>
            TODO
          </h2>
          <ul className="todo">
            {[
              "Run case heat / flame safety tests",
              "Find a documented mouth-safe spray formula",
              "Check certification, labeling, and trade rules",
              "Launch pilot; track sell-through, not only shipments",
              "Rebuild economics with logistics, tax, and real costs after pilot",
            ].map((item) => (
              <li key={item}>
                <span className="box" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function Specs() {
  return (
    <section className="section shell specs" id="specs">
      <Reveal>
        <div className="section-head">
          <p className="eyebrow">Product specifications</p>
          <h2 className="h2">CAD truths, not yet proven fits.</h2>
          <p className="lede">
            Dimensions from FlintBox-all-dimensions.json (22.11.2026), mm. Physical clearance on the
            latest print is still unverified.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <details open>
          <summary>Main case</summary>
          <div className="table-wrap" style={{ border: 0, background: "transparent" }}>
            <table>
              <tbody>
                <tr>
                  <td>Overall W × T × H</td>
                  <td className="num">40.19 × 14.65 × 69.70</td>
                </tr>
                <tr>
                  <td>Lighter well</td>
                  <td className="num">23.34 × 12.04 × 66.90 deep</td>
                </tr>
                <tr>
                  <td>Bottle well</td>
                  <td className="num">Ø10.65 × 46.97 deep</td>
                </tr>
                <tr>
                  <td>Sleeve clearance / side</td>
                  <td className="num">0.15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </Reveal>
      <Reveal>
        <details>
          <summary>Lighter sleeve</summary>
          <div className="table-wrap" style={{ border: 0, background: "transparent" }}>
            <table>
              <tbody>
                <tr>
                  <td>Lighter W × T</td>
                  <td className="num">21.8 × 10.5</td>
                </tr>
                <tr>
                  <td>Sleeve height / wall</td>
                  <td className="num">64.8 / 0.5</td>
                </tr>
                <tr>
                  <td>Outer profile</td>
                  <td className="num">23.04 × 11.74 · R5.3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </Reveal>
      <Reveal>
        <details>
          <summary>Retail stand</summary>
          <div className="table-wrap" style={{ border: 0, background: "transparent" }}>
            <table>
              <tbody>
                <tr>
                  <td>Envelope</td>
                  <td className="num">274.15 × 240.91 × 160.94</td>
                </tr>
                <tr>
                  <td>Panel thickness</td>
                  <td className="num">1.5</td>
                </tr>
                <tr>
                  <td>Wells</td>
                  <td className="num">3 × (2×6) = 36</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td className="num">{money(15700)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </Reveal>
      <Reveal>
        <details>
          <summary>Suppliers (as of 22 Nov 2026)</summary>
          <ul style={{ color: "var(--mute)", lineHeight: 1.55 }}>
            <li>Bodies — PrintEx Yerevan, Artur +374&nbsp;99&nbsp;300306 · plan 300 AMD</li>
            <li>Cricket — wholesale shops · 170 AMD (shops TBD)</li>
            <li>Atomizer — Temu · plan 50 AMD</li>
            <li>Albadent lemon 35&nbsp;ml — Med911 · 600 AMD (~17.14 / ml)</li>
          </ul>
        </details>
      </Reveal>
    </section>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          transformOrigin: "0% 50%",
          scaleX: progress,
          background: "linear-gradient(90deg, #ff8a4a, #e85a1c)",
          zIndex: 60,
        }}
      />
      <Nav />
      <Hero />
      <Product />
      <Economics />
      <Pilot />
      <Roadmap />
      <Specs />
      <footer className="shell footer">
        <span>FlintBox · working internal plan · hypotheses, not market proof</span>
        <span>White product · black stand · Armenia retail pilot</span>
      </footer>
    </>
  );
}
