export default function App() {
  const liveUrl = "https://performance-elite-website-ii71.vercel.app";

  const sectionTitle = (eyebrow, title, subtitle) => (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          color: "#d4a017",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontSize: 36,
          lineHeight: 1.15,
          margin: 0,
          color: "#0f172a",
        }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          style={{
            marginTop: 14,
            fontSize: 18,
            lineHeight: 1.7,
            color: "#475569",
            maxWidth: 760,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 24,
    padding: 28,
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  };

  const darkCardStyle = {
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24,
    padding: 28,
    color: "#ffffff",
    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.28)",
  };

  const volleyballIcon = (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "#fbbf24",
        border: "3px solid #0f172a",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "absolute", left: 24, top: 0, bottom: 0, width: 3, background: "#0f172a" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 16, height: 3, background: "#0f172a" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 32, height: 3, background: "#0f172a" }} />
      <div
        style={{
          position: "absolute",
          width: 70,
          height: 70,
          border: "3px solid #0f172a",
          borderRadius: "50%",
          left: -28,
          top: -10,
          background: "transparent",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 70,
          height: 70,
          border: "3px solid #0f172a",
          borderRadius: "50%",
          right: -28,
          top: -10,
          background: "transparent",
        }}
      />
    </div>
  );

  const PriceCard = ({ name, oldPrice, newPrice, desc, featured }) => (
    <div
      style={{
        ...cardStyle,
        background: featured ? "#fffaf0" : "#ffffff",
        border: featured ? "2px solid #fbbf24" : "1px solid #e2e8f0",
        transform: featured ? "translateY(-4px)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: featured ? "#b45309" : "#d4a017",
          }}
        >
          {name}
        </div>
        {volleyballIcon}
      </div>

      <div style={{ fontSize: 18, color: "#64748b", textDecoration: "line-through", marginBottom: 6 }}>
        {oldPrice}
      </div>

      <div style={{ fontSize: 40, fontWeight: 900, color: "#b45309", lineHeight: 1.1 }}>
        {newPrice}
      </div>

      <div
        style={{
          marginTop: 8,
          display: "inline-block",
          background: "#fef3c7",
          color: "#92400e",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "8px 10px",
          borderRadius: 999,
        }}
      >
        Limited Introductory Pricing
      </div>

      <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.7, color: "#475569" }}>{desc}</p>
    </div>
  );

  const NumberCard = ({ n, text }) => (
    <div style={{ ...cardStyle, padding: 22 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#fbbf24",
          color: "#0f172a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          marginBottom: 14,
        }}
      >
        {n}
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.7, color: "#334155" }}>{text}</div>
    </div>
  );

  const processSteps = ["Check-In", "Evaluate", "Score", "Rank", "Offer"];
  const categories = [
    ["Technical Skill", "25%"],
    ["Game IQ", "20%"],
    ["Athleticism", "15%"],
    ["Competitive Presence", "15%"],
    ["Coachability", "15%"],
    ["Communication", "10%"],
  ];
  const mistakes = [
    "Lack of objective scoring rubrics",
    "No coach calibration before tryouts",
    "Inconsistent weighting by age or level",
    "Poor parent communication",
    "Roster decisions based on gut feeling",
    "No evaluator variance tracking",
    "No post-tryout debrief process",
  ];

  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: "#ffffff",
        color: "#0f172a",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid #e2e8f0",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src="/PEVC-LOGO.png"
              alt="Performance Elite Volleyball Consulting logo"
              style={{ width: 52, height: 52, objectFit: "contain", borderRadius: 14 }}
            />
            <div>
              <div style={{ fontSize: 18, fontWeight: 900 }}>Performance Elite Volleyball Consulting</div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#d4a017",
                  marginTop: 4,
                }}
              >
                Mid-Atlantic Club Performance
              </div>
            </div>
          </div>

          <a
            href="#contact"
            style={{
              background: "#0f172a",
              color: "#ffffff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: 16,
              fontWeight: 800,
              fontSize: 14,
            }}
          >
            Book a Call
          </a>
        </div>
      </header>

      <section
        style={{
          background: "linear-gradient(135deg, #020617 0%, #0f172a 55%, #111827 100%)",
          color: "#ffffff",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 24px",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 40,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#fbbf24",
              }}
            >
              Objective. Defensible. Operationally Sound.
            </div>

            <h1
              style={{
                fontSize: 58,
                lineHeight: 1.04,
                margin: "22px 0 0 0",
                fontWeight: 900,
                maxWidth: 760,
              }}
            >
              Build a data-driven tryout system your club can defend.
            </h1>

            <p
              style={{
                marginTop: 24,
                fontSize: 20,
                lineHeight: 1.8,
                color: "#cbd5e1",
                maxWidth: 760,
              }}
            >
              Performance Elite Volleyball Consulting helps Mid-Atlantic youth volleyball clubs reduce subjectivity,
              improve roster accuracy, and create cleaner systems for evaluations, communication, and operations.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
              <a
                href="#services"
                style={{
                  background: "#fbbf24",
                  color: "#111827",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: 16,
                  fontWeight: 900,
                }}
              >
                Explore Services
              </a>
              <a
                href="#pricing"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.16)",
                  fontWeight: 800,
                }}
              >
                View Packages
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                gap: 16,
                marginTop: 32,
              }}
            >
              {[
                ["24–48 hr", "Offer timeline structures"],
                ["6", "Core evaluation categories"],
                ["1 System", "For clarity, consistency, and trust"],
              ].map(([big, small]) => (
                <div
                  key={big}
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 20,
                    padding: 18,
                  }}
                >
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#fbbf24" }}>{big}</div>
                  <div style={{ marginTop: 8, fontSize: 14, color: "#cbd5e1", lineHeight: 1.5 }}>{small}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <div
              style={{
                ...darkCardStyle,
                minHeight: 220,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", right: -18, top: -18, opacity: 0.25 }}>{volleyballIcon}</div>
              <img
                src="/PEVC-LOGO.png"
                alt="Performance Elite Volleyball Consulting logo"
                style={{ width: 90, height: 90, objectFit: "contain", marginBottom: 18 }}
              />
              <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.2 }}>Tryouts With Structure</div>
              <div style={{ marginTop: 12, fontSize: 16, lineHeight: 1.8, color: "#cbd5e1" }}>
                Volleyball-focused consulting that creates cleaner evaluations, stronger communication, and better decisions.
              </div>
            </div>

            <div style={darkCardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <img
                  src="/PEVC-LOGO.png"
                  alt="Performance Elite Volleyball Consulting logo"
                  style={{ width: 42, height: 42, objectFit: "contain" }}
                />
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#fbbf24",
                  }}
                >
                  The Problem
                </div>
              </div>

              {[
                "Inconsistent evaluations",
                "Parent complaints and disputes",
                "No structured scoring system",
                "Weak documentation and defensibility",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    padding: "14px 16px",
                    marginTop: 12,
                    color: "#e2e8f0",
                    fontSize: 15,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                borderRadius: 24,
                padding: 24,
                background: "rgba(251,191,36,0.12)",
                border: "1px solid rgba(251,191,36,0.25)",
                color: "#ffffff",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#fcd34d",
                }}
              >
                The Result
              </div>
              <div style={{ marginTop: 10, fontSize: 17, lineHeight: 1.8, color: "#f8fafc" }}>
                A structured process with scoring consistency, coach calibration, clearer communication, and stronger program credibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        {sectionTitle(
          "Services",
          "Consulting built for club directors who need structure.",
          "Performance Elite combines volleyball expertise with systems-level operational strategy to help clubs make better decisions and run cleaner programs."
        )}

        <div
          style={{
            display: "inline-block",
            marginBottom: 28,
            background: "#fff7ed",
            border: "1px solid #fdba74",
            color: "#c2410c",
            padding: "10px 14px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          Limited to first 5 Mid-Atlantic clubs
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
          {[
            [
              "Data-Driven Tryout Systems",
              "Objective, defensible systems that reduce parent conflict, improve roster accuracy, and give clubs a repeatable process they can trust.",
            ],
            [
              "Club Operations Audits",
              "Operational reviews focused on tryout integrity, staffing, communication, facility utilization, and program efficiency.",
            ],
            [
              "Implementation Support",
              "Hands-on advisory support to help clubs roll out stronger systems with clarity, accountability, and consistency.",
            ],
          ].map(([title, text]) => (
            <div key={title} style={cardStyle}>
              <div style={{ marginBottom: 16 }}>{volleyballIcon}</div>
              <div style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.2 }}>{title}</div>
              <div style={{ marginTop: 14, fontSize: 16, lineHeight: 1.8, color: "#475569" }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f8fafc", padding: "80px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 24,
          }}
        >
          <div style={cardStyle}>
            {sectionTitle("Tryout System", "How the process works")}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0,1fr))", gap: 12 }}>
              {processSteps.map((step, i) => (
                <div
                  key={step}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 18,
                    padding: 16,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      margin: "0 auto 10px auto",
                      borderRadius: "50%",
                      background: "#0f172a",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{step}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                border: "1px solid #e2e8f0",
                borderRadius: 22,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "16px 20px",
                  fontSize: 13,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Core Evaluation Categories
              </div>

              {categories.map(([label, weight]) => (
                <div
                  key={label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    padding: "16px 20px",
                    borderTop: "1px solid #e2e8f0",
                    background: "#ffffff",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{label}</span>
                  <span style={{ fontWeight: 900, color: "#b45309" }}>{weight}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gap: 20 }}>
            <div style={darkCardStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div
                    style={{
                      color: "#fbbf24",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Differentiator
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, marginTop: 10 }}>Evaluator variance tracking</div>
                </div>
                {volleyballIcon}
              </div>

              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.8, color: "#cbd5e1" }}>
                Identify scoring bias, coach inconsistency, and outlier evaluations before final offers go out.
              </p>

              {[
                ["Coach A", "0.3", "30%"],
                ["Coach B", "0.85", "85%"],
                ["Coach C", "0.38", "38%"],
              ].map(([name, score, width]) => (
                <div key={name} style={{ marginTop: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 8 }}>
                    <span>{name}</span>
                    <span style={{ color: "#fbbf24", fontWeight: 800 }}>{score}</span>
                  </div>
                  <div style={{ height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 999 }}>
                    <div
                      style={{
                        height: 10,
                        width,
                        background: "#fbbf24",
                        borderRadius: 999,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div style={cardStyle}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src="/PEVC-LOGO.png"
                  alt="Performance Elite Volleyball Consulting logo"
                  style={{ width: 42, height: 42, objectFit: "contain" }}
                />
                <div
                  style={{
                    color: "#d4a017",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  Outcome
                </div>
              </div>

              <div style={{ marginTop: 16, fontSize: 28, fontWeight: 900 }}>What clubs gain</div>

              {[
                "Reduced parent conflict",
                "Improved roster accuracy",
                "Standardized coach evaluations",
                "Repeatable systems year over year",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    marginTop: 12,
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: "14px 16px",
                    color: "#334155",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 32 }}>
          {[
            ["Club Leadership", "Professional systems for directors who need clarity, structure, and clean communication."],
            ["Tryout Evaluation", "Better scoring, better documentation, better roster outcomes."],
            ["Program Growth", "Operational support that helps clubs scale with confidence."],
          ].map(([title, subtitle], i) => (
            <div
              key={title}
              style={{
                ...cardStyle,
                minHeight: 220,
                background: i === 1 ? "linear-gradient(135deg, #0f172a, #111827)" : "#ffffff",
                color: i === 1 ? "#ffffff" : "#0f172a",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", right: -10, top: -10, opacity: i === 1 ? 0.2 : 0.12 }}>
                {volleyballIcon}
              </div>
              <div style={{ marginTop: 24, fontSize: 26, fontWeight: 900, position: "relative", zIndex: 1 }}>{title}</div>
              <div
                style={{
                  marginTop: 14,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: i === 1 ? "#cbd5e1" : "#475569",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {subtitle}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 20 }}>
          <div>
            {sectionTitle(
              "Authority",
              "Top tryout mistakes clubs make",
              "Most tryout problems are not talent problems. They are structure, communication, and consistency problems."
            )}

            <div
              style={{
                ...cardStyle,
                background: "#f8fafc",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {volleyballIcon}
                <div
                  style={{
                    color: "#64748b",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Key Takeaway
                </div>
              </div>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.8, color: "#334155" }}>
                Structured, data-driven, coach-aligned tryouts protect the club, improve athlete placement, and reduce conflict.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {mistakes.map((m, i) => (
              <NumberCard key={m} n={i + 1} text={m} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" style={{ background: "#020617", color: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          {sectionTitle(
            "Fall 2026 Tryout Cycle Readiness",
            "Secure your system before Fall 2026 tryouts begin.",
            "Clubs that implement early go into tryouts with clarity, alignment, and confidence. Limited introductory pricing available for Fall 2026 rollout."
          )}

          <div
            style={{
              display: "inline-block",
              marginBottom: 28,
              background: "rgba(251,191,36,0.12)",
              border: "1px solid rgba(251,191,36,0.3)",
              color: "#fcd34d",
              padding: "10px 14px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Limited to first 5 Mid-Atlantic clubs
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", gap: 20 }}>
            <PriceCard
              name="Pilot Package"
              oldPrice="$2,500"
              newPrice="$2,000 Intro Offer"
              desc="Ideal for initial implementation with a focused system rollout."
            />
            <PriceCard
              name="Full Package"
              oldPrice="$3,500"
              newPrice="$3,000 Intro Offer"
              desc="Complete tryout system build with guidance and customization."
              featured
            />
            <PriceCard
              name="Monthly Retainer"
              oldPrice="$2,000/mo"
              newPrice="$1,500/mo Intro"
              desc="Ongoing implementation, advisory, and operational support."
            />
          </div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a, #1e293b)",
            borderRadius: 32,
            padding: 36,
            color: "#ffffff",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 28,
            boxShadow: "0 20px 50px rgba(15,23,42,0.18)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/PEVC-LOGO.png"
                alt="Performance Elite Volleyball Consulting logo"
                style={{ width: 42, height: 42, objectFit: "contain" }}
              />
              <div
                style={{
                  color: "#fbbf24",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Next Step
              </div>
            </div>

            <h2 style={{ marginTop: 16, marginBottom: 0, fontSize: 40, lineHeight: 1.15 }}>
              Book a 20-minute consultation.
            </h2>

            <p style={{ marginTop: 18, fontSize: 18, lineHeight: 1.8, color: "#cbd5e1", maxWidth: 620 }}>
              Review your current tryout process, identify gaps, and determine whether a pilot implementation is the right next move for your club.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
              {[
                ["Club Inquiry", "Use the form to share your current system, pain points, and goals."],
                ["Performance Elite", "Professional support for clubs that want structure and credibility."],
              ].map(([title, text], i) => (
                <div
                  key={title}
                  style={{
                    borderRadius: 22,
                    padding: 22,
                    background: i === 0 ? "rgba(255,255,255,0.06)" : "rgba(251,191,36,0.1)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ marginBottom: 12 }}>{volleyballIcon}</div>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>{title}</div>
                  <div style={{ marginTop: 10, fontSize: 15, lineHeight: 1.7, color: "#cbd5e1" }}>{text}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                borderRadius: 24,
                padding: 20,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#cbd5e1",
                fontSize: 14,
                lineHeight: 1.8,
              }}
            >
              Contact: Email - info@performanceelitevolleyball.com or Call (571)276-0149.
            </div>
          </div>

          <div style={{ ...cardStyle, alignSelf: "start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <img
                src="/PEVC-LOGO.png"
                alt="Performance Elite Volleyball Consulting logo"
                style={{ width: 56, height: 56, objectFit: "contain", borderRadius: 14 }}
              />
              <div>
                <div style={{ fontSize: 22, fontWeight: 900 }}>Contact Performance Elite</div>
                <div style={{ marginTop: 4, color: "#64748b", fontSize: 14 }}>
                  Tell us about your club and current tryout process.
                </div>
              </div>
            </div>

            <form
              action="https://formsubmit.co/performanceelitevolleyball@gmail.com"
              method="POST"
              style={{ display: "grid", gap: 14 }}
            >
              <input type="hidden" name="_subject" value="New Performance Elite website inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={`${liveUrl}/thank-you`} />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for reaching out to Performance Elite Volleyball Consulting. We received your inquiry and will follow up shortly."
              />
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input name="name" required placeholder="Your full name" style={inputStyle} />
                <input type="email" name="email" required placeholder="you@club.org" style={inputStyle} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input name="phone" placeholder="Phone" style={inputStyle} />
                <input name="club" placeholder="Club Name" style={inputStyle} />
              </div>

              <select name="service_interest" defaultValue="" style={inputStyle}>
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Tryout System Design">Tryout System Design</option>
                <option value="Club Operations Audit">Club Operations Audit</option>
                <option value="Implementation Support">Implementation Support</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your current tryout process, parent communication challenges, or operational goals."
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button
                type="submit"
                style={{
                  border: "none",
                  background: "#0f172a",
                  color: "#ffffff",
                  borderRadius: 16,
                  padding: "14px 18px",
                  fontSize: 15,
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Send Inquiry
              </button>
</form>

<div style={{ marginTop: "20px", lineHeight: "1.8" }}>
  <p><strong>Email:</strong> info@performanceelitevolleyball.com</p>
  <p><strong>Phone:</strong> (571) 276-0149</p>
</div>

</div>
</div>
</section>
</div>
  );
}

const inputStyle = {
  width: "100%",
  border: "1px solid #cbd5e1",
  borderRadius: 16,
  padding: "14px 16px",
  fontSize: 14,
  color: "#0f172a",
  background: "#ffffff",
  boxSizing: "border-box",
};
export function AboutPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "60px 20px", maxWidth: 900, margin: "0 auto" }}>
      
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <img src="PEVC-LOGO.png" alt="Performance Elite Volleyball Consulting Logo" style={{ height: 80 }} />
        <h1 style={{ fontSize: 42, fontWeight: 900, marginTop: 20 }}>
          About Performance Elite Volleyball Consulting
        </h1>
      </div>

      <p style={{ fontSize: 18, lineHeight: 1.7 }}>
                Performance Elite Volleyball Consulting was built on years of experience in competitive volleyball, club operations, and program development. 
        Our mission is simple: help clubs build structured, defensible systems that improve athlete placement, reduce conflict, and increase long-term program success.
      </p>

      <h2 style={{ marginTop: 40 }}>Background & Experience</h2>
      <p style={{ lineHeight: 1.7 }}>
        With over a decade of experience in competitive volleyball, coaching, and club operations, 
        Performance Elite brings a unique combination of on-court expertise and operational leadership. 
        Having coached at multiple levels and worked within high-level club environments, we understand both the athletic and administrative sides of running a successful program.
      </p>

      <h2 style={{ marginTop: 40 }}>Club Growth & Revenue Development</h2>
      <p style={{ lineHeight: 1.7 }}>
        Beyond coaching, our experience includes building and scaling revenue-generating volleyball programs. This includes:
      </p>

      <ul style={{ lineHeight: 1.8 }}>
        <li>Intramural leagues designed to drive consistent recurring revenue</li>
        <li>Open gym programming that increases player engagement and retention</li>
        <li>Camps and clinics structured for both development and profitability</li>
        <li>Program expansion strategies that maximize facility usage</li>
      </ul>

      <h2 style={{ marginTop: 40 }}>Why Performance Elite</h2>
      <p style={{ lineHeight: 1.7 }}>
        Most clubs struggle not because of talent, but because of inconsistent systems, unclear evaluation processes, and lack of structure. 
        Performance Elite focuses on solving those problems by implementing:
      </p>

      <ul style={{ lineHeight: 1.8 }}>
        <li>Data-driven tryout systems</li>
        <li>Standardized evaluation frameworks</li>
        <li>Coach calibration processes</li>
        <li>Clear and defensible decision-making structures</li>
      </ul>

      <h2 style={{ marginTop: 40 }}>Our Approach</h2>
      <p style={{ lineHeight: 1.7 }}>
        We don’t believe in overcomplicating systems. 
        Our approach is to build practical, repeatable frameworks that clubs can execute year after year — improving clarity for staff, transparency for families, and confidence for leadership.
      </p>

      <div style={{ marginTop: 50, textAlign: "center" }}>
        <a href="/" style={{
          background: "#111827",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: 8,
          textDecoration: "none"
        }}>
          Back to Home
        </a>
      </div>
    </div>
  );
}
