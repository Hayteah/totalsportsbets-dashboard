"use client";

import { useState, useEffect } from "react";

// =============================================
// Types
// =============================================
type Prediction = {
  market: string;
  pick: string;
  odds: number;
  confidence: number;
  value: number;
  stake: number;
  reasoning?: string;
};

type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  sport: string;
  time: string;
  predictions: Prediction[];
  selected: boolean;
};

type DayRecord = {
  date: string;
  picks: number;
  hits: number;
  roi: string;
};

// =============================================
// Small Components
// =============================================
function ConfBadge({ confidence }: { confidence: number }) {
  const color =
    confidence >= 75 ? "#00FF88" : confidence >= 60 ? "#FFAA00" : "#FF6B6B";
  const label = confidence >= 75 ? "HIGH" : confidence >= 60 ? "MED" : "LOW";
  return (
    <span
      style={{
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 700,
        background: `${color}18`,
        color,
        border: `1px solid ${color}40`,
        letterSpacing: "0.5px",
      }}
    >
      {label} {confidence}%
    </span>
  );
}

function ValueBadge({ value }: { value: number }) {
  const positive = value > 0;
  return (
    <span
      style={{
        padding: "3px 8px",
        borderRadius: 4,
        fontSize: 11,
        fontWeight: 700,
        background: positive ? "#00FF8815" : "#FF6B6B15",
        color: positive ? "#00FF88" : "#FF6B6B",
      }}
    >
      {positive ? "+" : ""}
      {value.toFixed(1)}%
    </span>
  );
}

function Toggle({
  checked,
  onChange,
  ariaLabel,
}: {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      style={{
        width: 44,
        height: 24,
        borderRadius: 12,
        cursor: "pointer",
        transition: "all 0.2s",
        background: checked ? "#00FF88" : "#1a1a2e",
        border: `1px solid ${checked ? "#00FF8860" : "#2a2a3e"}`,
        position: "relative",
        flexShrink: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 9,
          position: "absolute",
          top: 2,
          left: checked ? 22 : 2,
          transition: "all 0.2s",
          background: checked ? "#0a0a0f" : "#4a4a5e",
        }}
      />
    </button>
  );
}

function StatusDot({ active }: { active: boolean }) {
  return (
    <div
      style={{
        width: 8,
        height: 8,
        borderRadius: 4,
        background: active ? "#00FF88" : "#FF6B6B",
      }}
    />
  );
}

// =============================================
// Platforms config
// =============================================
const platforms = [
  { id: "instagram", name: "Instagram", icon: "📸", connected: true },
  { id: "facebook", name: "Facebook", icon: "📘", connected: true },
  { id: "tiktok", name: "TikTok", icon: "🎵", connected: false },
  { id: "telegram", name: "Telegram", icon: "✈️", connected: false },
];

// =============================================
// Main Dashboard
// =============================================
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("predictions");
  const [predictions, setPredictions] = useState<Match[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState(["instagram"]);
  const [scheduleTime, setScheduleTime] = useState("12:00");
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<string | null>(null);
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [pipelineStep, setPipelineStep] = useState("");
  const [accuracy, setAccuracy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Load predictions on mount
  useEffect(() => {
    loadPredictions();
    loadAccuracy();
  }, []);

  async function loadPredictions() {
    try {
      const res = await fetch("/api/predictions");
      const data = await res.json();
      if (data.predictions) {
        setPredictions(
          data.predictions.map((m: any) => ({ ...m, selected: true })),
        );
      }
    } catch {
      // Use demo data if API not connected yet
      setPredictions(getDemoData());
    }
    setLoading(false);
  }

  async function loadAccuracy() {
    try {
      const res = await fetch("/api/accuracy");
      const data = await res.json();
      setAccuracy(data);
    } catch {
      setAccuracy(getDemoAccuracy());
    }
  }

  async function runPipeline() {
    setPipelineRunning(true);
    const steps = [
      "Fetching fixtures & odds...",
      "Generating AI predictions...",
      "Creating card images...",
    ];
    for (const step of steps) {
      setPipelineStep(step);
      try {
        await fetch("/api/pipeline", {
          method: "POST",
          body: JSON.stringify({ step }),
        });
      } catch {}
      await new Promise((r) => setTimeout(r, 2000));
    }
    setPipelineStep("✅ Pipeline complete!");
    await loadPredictions();
    setTimeout(() => {
      setPipelineRunning(false);
      setPipelineStep("");
    }, 2000);
  }

  async function handlePublish() {
    setIsPublishing(true);
    const selected = predictions.filter((p) => p.selected);
    setPublishStatus(
      `Publishing ${selected.length} matches to ${selectedPlatforms.join(", ")}...`,
    );
    try {
      await fetch("/api/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platforms: selectedPlatforms,
          matches: selected,
          scheduleTime,
        }),
      });
      setPublishStatus("✅ Published successfully!");
    } catch {
      setPublishStatus("❌ Publishing failed. Check console.");
    }
    setIsPublishing(false);
    setTimeout(() => setPublishStatus(null), 5000);
  }

  const togglePrediction = (id: string) => {
    setPredictions((prev) =>
      prev.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p)),
    );
  };

  const removePick = (matchId: string, market: string) => {
    setPredictions((prev) =>
      prev.map((p) =>
        p.id === matchId
          ? {
              ...p,
              predictions: p.predictions.filter((pr) => pr.market !== market),
            }
          : p,
      ),
    );
  };

  const togglePlatform = (id: string) => {
    const platform = platforms.find((p) => p.id === id);
    if (!platform?.connected) return;
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const selectedCount = predictions.filter((p) => p.selected).length;
  const totalPicks = predictions
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + p.predictions.length, 0);

  const tabs = [
    { id: "predictions", label: "Predictions", icon: "🎯" },
    { id: "publish", label: "Publish", icon: "📱" },
    { id: "accuracy", label: "Accuracy", icon: "📊" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      {/* =================== SIDEBAR =================== */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 240,
          background: "#0c0c14",
          borderRight: "1px solid #1a1a2e",
          display: "flex",
          flexDirection: "column",
          zIndex: 100,
        }}
      >
        <div
          style={{ padding: "24px 20px", borderBottom: "1px solid #1a1a2e" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg, #00FF88, #00AAFF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              ⚡
            </div>
            <div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 800,
                  letterSpacing: "0.5px",
                }}
              >
                TOTALSPORTBET
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#4a4a5e",
                  letterSpacing: "2px",
                  fontWeight: 600,
                }}
              >
                AI DASHBOARD
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "16px 12px", flex: 1 }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 14px",
                borderRadius: 10,
                border: "none",
                cursor: "pointer",
                background: activeTab === tab.id ? "#00FF8812" : "transparent",
                color: activeTab === tab.id ? "#00FF88" : "#6b6b80",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                marginBottom: 4,
                transition: "all 0.15s",
                textAlign: "left" as const,
              }}
            >
              <span style={{ fontSize: 16 }}>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        <div style={{ padding: "16px 12px", borderTop: "1px solid #1a1a2e" }}>
          <button
            onClick={runPipeline}
            disabled={pipelineRunning}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background: pipelineRunning
                ? "#1a1a2e"
                : "linear-gradient(135deg, #00FF88, #00AAFF)",
              color: pipelineRunning ? "#6b6b80" : "#0a0a0f",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "inherit",
              letterSpacing: "0.5px",
            }}
          >
            {pipelineRunning ? "⏳ Running..." : "▶ Run Full Pipeline"}
          </button>
          {pipelineStep && (
            <div
              style={{
                fontSize: 11,
                color: "#00AAFF",
                textAlign: "center" as const,
                marginTop: 8,
              }}
            >
              {pipelineStep}
            </div>
          )}
          {!pipelineStep && (
            <div
              style={{
                fontSize: 11,
                color: "#4a4a5e",
                textAlign: "center" as const,
                marginTop: 8,
              }}
            >
              Fetch → Predict → Generate
            </div>
          )}
        </div>
      </div>

      {/* =================== MAIN CONTENT =================== */}
      <div
        style={{ marginLeft: 240, padding: "24px 32px", flex: 1, minWidth: 0 }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 28,
            flexWrap: "wrap" as const,
            gap: 16,
          }}
        >
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>
              {tabs.find((t) => t.id === activeTab)?.icon}{" "}
              {tabs.find((t) => t.id === activeTab)?.label}
            </h1>
            <p style={{ fontSize: 13, color: "#4a4a5e", margin: "4px 0 0" }}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          {activeTab === "predictions" && (
            <span style={{ fontSize: 13, color: "#6b6b80" }}>
              {selectedCount} matches · {totalPicks} picks
            </span>
          )}
        </div>

        {/* Status banner */}
        {publishStatus && (
          <div
            style={{
              padding: "14px 20px",
              borderRadius: 10,
              marginBottom: 20,
              background: publishStatus.includes("✅")
                ? "#00FF8812"
                : publishStatus.includes("❌")
                  ? "#FF6B6B12"
                  : "#00AAFF12",
              border: `1px solid ${publishStatus.includes("✅") ? "#00FF8830" : publishStatus.includes("❌") ? "#FF6B6B30" : "#00AAFF30"}`,
              color: publishStatus.includes("✅")
                ? "#00FF88"
                : publishStatus.includes("❌")
                  ? "#FF6B6B"
                  : "#00AAFF",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {publishStatus}
          </div>
        )}

        {/* =================== PREDICTIONS TAB =================== */}
        {activeTab === "predictions" && (
          <div>
            {loading ? (
              <div
                style={{
                  textAlign: "center" as const,
                  padding: 60,
                  color: "#4a4a5e",
                }}
              >
                Loading predictions...
              </div>
            ) : predictions.length === 0 ? (
              <div style={{ textAlign: "center" as const, padding: 60 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🏟️</div>
                <div
                  style={{ fontSize: 16, color: "#6b6b80", marginBottom: 8 }}
                >
                  No predictions yet
                </div>
                <div style={{ fontSize: 13, color: "#4a4a5e" }}>
                  Click "Run Full Pipeline" to fetch today's data and generate
                  predictions
                </div>
              </div>
            ) : (
              predictions.map((match) => (
                <div
                  key={match.id}
                  className="fade-in"
                  style={{
                    background: "#0f0f18",
                    borderRadius: 14,
                    marginBottom: 12,
                    border: `1px solid ${match.selected ? "#00FF8825" : "#1a1a2e"}`,
                    overflow: "hidden",
                    transition: "all 0.2s",
                    opacity: match.selected ? 1 : 0.5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 20px",
                      borderBottom: match.selected
                        ? "1px solid #1a1a2e"
                        : "none",
                      flexWrap: "wrap" as const,
                      gap: 10,
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 14 }}
                    >
                      <Toggle
                        checked={match.selected}
                        onChange={() => togglePrediction(match.id)}
                        ariaLabel={`Include ${match.homeTeam} vs ${match.awayTeam} in publishing`}
                      />
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>
                          {match.sport === "football" ? "⚽" : "🏀"}{" "}
                          {match.homeTeam} vs {match.awayTeam}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "#4a4a5e",
                            marginTop: 2,
                          }}
                        >
                          {match.league} · {match.time} CET
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      {match.predictions.map((p) => (
                        <ConfBadge key={p.market} confidence={p.confidence} />
                      ))}
                    </div>
                  </div>
                  {match.selected &&
                    match.predictions.map((pred) => (
                      <div
                        key={pred.market}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 20px",
                          borderBottom: "1px solid #12121e",
                          gap: 16,
                          flexWrap: "wrap" as const,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                            flex: 1,
                            minWidth: 200,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 11,
                              fontWeight: 700,
                              color: "#4a4a5e",
                              letterSpacing: "1px",
                              minWidth: 100,
                            }}
                          >
                            {pred.market}
                          </span>
                          <span style={{ fontSize: 15, fontWeight: 700 }}>
                            {pred.pick}
                          </span>
                          <span
                            style={{
                              fontSize: 18,
                              fontWeight: 800,
                              color: "#00FF88",
                              fontFamily: "monospace",
                            }}
                          >
                            @{pred.odds}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <ValueBadge value={pred.value} />
                          <span
                            style={{
                              fontSize: 12,
                              color: "#6b6b80",
                              fontWeight: 600,
                            }}
                          >
                            {pred.stake}u
                          </span>
                          <button
                            type="button"
                            onClick={() => removePick(match.id, pred.market)}
                            aria-label={`Remove ${pred.market} prediction for ${match.homeTeam} vs ${match.awayTeam}`}
                            style={{
                              background: "none",
                              border: "none",
                              color: "#FF6B6B60",
                              cursor: "pointer",
                              fontSize: 16,
                              padding: "2px 6px",
                              borderRadius: 4,
                            }}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              ))
            )}
          </div>
        )}

        {/* =================== PUBLISH TAB =================== */}
        {activeTab === "publish" && (
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <div
              style={{
                background: "#0f0f18",
                borderRadius: 14,
                padding: 24,
                border: "1px solid #1a1a2e",
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "#8b8ba0",
                }}
              >
                Platforms
              </h3>
              {platforms.map((p) => (
                <div
                  key={p.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid #1a1a2e",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <span style={{ fontSize: 20 }}>{p.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        {p.name}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: p.connected ? "#00FF88" : "#FF6B6B",
                        }}
                      >
                        {p.connected ? "Connected" : "Not connected"}
                      </div>
                    </div>
                  </div>
                  <Toggle
                    checked={selectedPlatforms.includes(p.id)}
                    onChange={() => togglePlatform(p.id)}
                    ariaLabel={`Publish to ${p.name}`}
                  />
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{
                  background: "#0f0f18",
                  borderRadius: 14,
                  padding: 24,
                  border: "1px solid #1a1a2e",
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 16,
                    color: "#8b8ba0",
                  }}
                >
                  Schedule
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap" as const,
                  }}
                >
                  {["Now", "10:00", "12:00", "15:00", "18:00", "20:00"].map(
                    (time) => (
                      <button
                        key={time}
                        onClick={() => setScheduleTime(time)}
                        style={{
                          padding: "10px 16px",
                          borderRadius: 8,
                          border: `1px solid ${scheduleTime === time ? "#00FF8840" : "#1a1a2e"}`,
                          cursor: "pointer",
                          background:
                            scheduleTime === time ? "#00FF8818" : "#12121e",
                          color: scheduleTime === time ? "#00FF88" : "#6b6b80",
                          fontSize: 13,
                          fontWeight: 700,
                          fontFamily: "inherit",
                        }}
                      >
                        {time === "Now" ? "🚀 Now" : `${time} CET`}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div
                style={{
                  background: "#0f0f18",
                  borderRadius: 14,
                  padding: 24,
                  border: "1px solid #1a1a2e",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    marginBottom: 16,
                    color: "#8b8ba0",
                  }}
                >
                  Card Preview
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 8,
                  }}
                >
                  {[...Array(Math.min(8, selectedCount + 2))].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        aspectRatio: "4/5",
                        borderRadius: 8,
                        background:
                          i === 0
                            ? "linear-gradient(135deg, #00FF8820, #00AAFF20)"
                            : "#12121e",
                        border: "1px solid #1a1a2e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        color: "#4a4a5e",
                        fontWeight: 600,
                      }}
                    >
                      {i === 0
                        ? "COVER"
                        : i <= selectedCount
                          ? `MATCH ${i}`
                          : "ACCA"}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <button
                onClick={handlePublish}
                disabled={isPublishing || selectedPlatforms.length === 0}
                style={{
                  width: "100%",
                  padding: "18px",
                  borderRadius: 12,
                  border: "none",
                  cursor:
                    selectedPlatforms.length === 0 ? "not-allowed" : "pointer",
                  background: isPublishing
                    ? "#1a1a2e"
                    : selectedPlatforms.length === 0
                      ? "#12121e"
                      : "linear-gradient(135deg, #00FF88, #00AAFF)",
                  color:
                    isPublishing || selectedPlatforms.length === 0
                      ? "#4a4a5e"
                      : "#0a0a0f",
                  fontSize: 16,
                  fontWeight: 800,
                  fontFamily: "inherit",
                  letterSpacing: "0.5px",
                  transition: "all 0.2s",
                }}
              >
                {isPublishing
                  ? "⏳ Publishing..."
                  : `🚀 Publish to ${selectedPlatforms.length} platform(s) ${scheduleTime === "Now" ? "now" : `at ${scheduleTime} CET`}`}
              </button>
            </div>
          </div>
        )}

        {/* =================== ACCURACY TAB =================== */}
        {activeTab === "accuracy" && accuracy && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {[
                {
                  label: "Overall Hit Rate",
                  value: `${accuracy.overall}%`,
                  color: "#00FF88",
                },
                {
                  label: "This Week",
                  value: `${accuracy.thisWeek}%`,
                  color: "#00AAFF",
                },
                {
                  label: "Avg ROI",
                  value: accuracy.avgRoi || "+8.4%",
                  color: "#FFAA00",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "#0f0f18",
                    borderRadius: 14,
                    padding: 24,
                    border: "1px solid #1a1a2e",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      color: "#4a4a5e",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontSize: 40,
                      fontWeight: 800,
                      color: stat.color,
                      marginTop: 8,
                      fontFamily: "monospace",
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#0f0f18",
                borderRadius: 14,
                padding: 24,
                border: "1px solid #1a1a2e",
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#8b8ba0",
                }}
              >
                By League
              </h3>
              {(accuracy.byLeague || []).map((league: any, i: number) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{ fontSize: 14, fontWeight: 600, minWidth: 160 }}
                  >
                    {league.league}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 8,
                      background: "#12121e",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${league.rate}%`,
                        height: "100%",
                        borderRadius: 4,
                        background:
                          league.rate >= 70
                            ? "linear-gradient(90deg, #00FF88, #00AAFF)"
                            : league.rate >= 65
                              ? "#FFAA00"
                              : "#FF6B6B",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#00FF88",
                      minWidth: 50,
                      textAlign: "right" as const,
                    }}
                  >
                    {league.rate}%
                  </span>
                  <span
                    style={{ fontSize: 12, color: "#4a4a5e", minWidth: 70 }}
                  >
                    {league.wins}/{league.total}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#0f0f18",
                borderRadius: 14,
                padding: 24,
                border: "1px solid #1a1a2e",
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#8b8ba0",
                }}
              >
                Recent Days
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: 12,
                }}
              >
                {(accuracy.recent || []).map((day: DayRecord, i: number) => {
                  const rate = Math.round((day.hits / day.picks) * 100);
                  return (
                    <div
                      key={i}
                      style={{
                        background: "#12121e",
                        borderRadius: 10,
                        padding: 16,
                        textAlign: "center" as const,
                        border: "1px solid #1a1a2e",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: "#4a4a5e",
                          fontWeight: 600,
                          marginBottom: 8,
                        }}
                      >
                        {day.date}
                      </div>
                      <div
                        style={{
                          fontSize: 28,
                          fontWeight: 800,
                          color:
                            rate >= 70
                              ? "#00FF88"
                              : rate >= 50
                                ? "#FFAA00"
                                : "#FF6B6B",
                        }}
                      >
                        {rate}%
                      </div>
                      <div
                        style={{ fontSize: 12, color: "#6b6b80", marginTop: 4 }}
                      >
                        {day.hits}/{day.picks}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          marginTop: 8,
                          color: day.roi.startsWith("+")
                            ? "#00FF88"
                            : "#FF6B6B",
                        }}
                      >
                        {day.roi}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* =================== SETTINGS TAB =================== */}
        {activeTab === "settings" && (
          <div style={{ maxWidth: 600 }}>
            <div
              style={{
                background: "#0f0f18",
                borderRadius: 14,
                padding: 24,
                border: "1px solid #1a1a2e",
                marginBottom: 20,
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#8b8ba0",
                }}
              >
                API Status
              </h3>
              {[
                {
                  name: "API-Football",
                  remaining: "92/100 daily",
                  active: true,
                },
                {
                  name: "Odds API",
                  remaining: "436/500 monthly",
                  active: true,
                },
                {
                  name: "Claude API",
                  remaining: "Credits loaded",
                  active: true,
                },
                {
                  name: "Meta/IG API",
                  remaining: "Token active",
                  active: true,
                },
                { name: "Cloudinary", remaining: "Unlimited", active: true },
              ].map((api, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: i < 4 ? "1px solid #12121e" : "none",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600 }}>
                    {api.name}
                  </span>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span style={{ fontSize: 12, color: "#4a4a5e" }}>
                      {api.remaining}
                    </span>
                    <StatusDot active={api.active} />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: "#0f0f18",
                borderRadius: 14,
                padding: 24,
                border: "1px solid #1a1a2e",
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#8b8ba0",
                }}
              >
                Quick Actions
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  {
                    label: "🔄 Refresh Token",
                    desc: "Renew Meta API token (60-day cycle)",
                  },
                  {
                    label: "📊 Export Accuracy Report",
                    desc: "Download CSV of all prediction results",
                  },
                  {
                    label: "🗑️ Clear Today's Data",
                    desc: "Remove today's predictions and images",
                  },
                ].map((action, i) => (
                  <button
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 16px",
                      borderRadius: 10,
                      border: "1px solid #1a1a2e",
                      background: "#12121e",
                      cursor: "pointer",
                      textAlign: "left" as const,
                      color: "#e2e2e8",
                      fontFamily: "inherit",
                      width: "100%",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>
                        {action.label}
                      </div>
                      <div
                        style={{ fontSize: 12, color: "#4a4a5e", marginTop: 2 }}
                      >
                        {action.desc}
                      </div>
                    </div>
                    <span style={{ color: "#4a4a5e" }}>→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// =============================================
// Demo data (used when API not connected)
// =============================================
function getDemoData(): Match[] {
  return [
    {
      id: "ucl-1",
      homeTeam: "Bayer Leverkusen",
      awayTeam: "Arsenal",
      league: "Champions League",
      sport: "football",
      time: "21:00",
      predictions: [
        {
          market: "1X2",
          pick: "Away Win",
          odds: 2.25,
          confidence: 72,
          value: 8.3,
          stake: 2,
        },
        {
          market: "BTTS",
          pick: "Yes",
          odds: 1.75,
          confidence: 78,
          value: 12.1,
          stake: 2,
        },
      ],
      selected: true,
    },
    {
      id: "ucl-2",
      homeTeam: "PSG",
      awayTeam: "Chelsea",
      league: "Champions League",
      sport: "football",
      time: "21:00",
      predictions: [
        {
          market: "1X2",
          pick: "Home Win",
          odds: 1.85,
          confidence: 68,
          value: 5.2,
          stake: 2,
        },
        {
          market: "OVER_UNDER_25",
          pick: "Over 2.5",
          odds: 1.65,
          confidence: 75,
          value: 9.8,
          stake: 2,
        },
      ],
      selected: true,
    },
    {
      id: "ucl-3",
      homeTeam: "Real Madrid",
      awayTeam: "Man City",
      league: "Champions League",
      sport: "football",
      time: "21:00",
      predictions: [
        {
          market: "BTTS",
          pick: "Yes",
          odds: 1.8,
          confidence: 80,
          value: 14.2,
          stake: 3,
        },
      ],
      selected: true,
    },
    {
      id: "nba-1",
      homeTeam: "LA Lakers",
      awayTeam: "Boston Celtics",
      league: "NBA",
      sport: "basketball",
      time: "03:30",
      predictions: [
        {
          market: "MONEYLINE",
          pick: "Away Win",
          odds: 1.65,
          confidence: 70,
          value: 7.5,
          stake: 2,
        },
      ],
      selected: false,
    },
  ];
}

function getDemoAccuracy() {
  return {
    overall: 67.3,
    thisWeek: 71.4,
    avgRoi: "+8.4%",
    byLeague: [
      { league: "Champions League", rate: 72.1, total: 43, wins: 31 },
      { league: "Premier League", rate: 68.5, total: 89, wins: 61 },
      { league: "Bundesliga", rate: 70.8, total: 48, wins: 34 },
      { league: "NBA", rate: 61.3, total: 62, wins: 38 },
    ],
    recent: [
      { date: "Mar 10", picks: 8, hits: 6, roi: "+12.3%" },
      { date: "Mar 9", picks: 5, hits: 3, roi: "-4.1%" },
      { date: "Mar 8", picks: 12, hits: 9, roi: "+18.7%" },
      { date: "Mar 7", picks: 6, hits: 4, roi: "+5.2%" },
      { date: "Mar 6", picks: 10, hits: 7, roi: "+9.8%" },
    ],
  };
}
