import React, { useState } from "react";
import { Navbar, Alignment, Button, Card, H3, Switch } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import CanvasAnimation from "./Animation";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import { PdfFilesViewer } from "./PdfFilesViewer";
import { SimulationPage } from "./SimulationPage";
import { LinkuriUtile } from "./LinkuriUtile";
import { HashHistory } from "history";

import "./App.css";

function Home() {
  const cardStyle: React.CSSProperties = {
    marginLeft: "5vh",
    marginRight: "5vh",
    marginTop: "10vh",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
  };
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Card elevation={3} style={cardStyle}>
          <H3>Simulări</H3>
          <p>
            Simulări online pentru etapa I a concursului MateInfoUB, secțiunea
            informatică.
          </p>
          <Link to="/simulari">
            <Button intent="primary">Pornește Simularea</Button>
          </Link>
        </Card>
        <Card elevation={3} style={cardStyle}>
          <H3>Subiecte</H3>
          <p>
            Subiectele date în edițiile trecute ale concursului MateInfoUB,
            secțiunea informatică.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link to="/etapa-I">
              <Button intent="primary">Subiecte Etapa I</Button>
            </Link>
            <Link to="/etapa-II">
              <Button intent="primary">Subiecte Etapa II</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

function App({ history }: { history: HashHistory }) {
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(
    window.localStorage.getItem("animationsDisabled") == "true" ? false : true,
  );
  const location = useLocation();

  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    height: "100%",
    padding: "6px 0 5px 0",
  };

  const buttonStyle: React.CSSProperties = {
    marginRight: "10px",
    height: "100%",
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "50px" }}>
        <Navbar
          style={{ height: "50px", backgroundColor: "rgb(235, 234, 234)" }}
        >
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <Link
                to="/"
                style={{ fontWeight: "bold", color: "rgb(77, 77, 77)" }}
              >
                MateInfoUB, Informatică
              </Link>
            </Navbar.Heading>
            <Navbar.Divider />
            <Link to="/" style={linkStyle}>
              <Button
                className="bp5-minimal"
                icon="home"
                text="Prima Pagină"
                style={buttonStyle}
                active={location.pathname === "/"}
              />
            </Link>
            <Link to="/simulari" style={linkStyle}>
              <Button
                className="bp5-minimal"
                icon="code"
                text="Simulări Etapa I"
                style={buttonStyle}
                active={location.pathname === "/simulari"}
              />
            </Link>
            <Link to="/etapa-I" style={linkStyle}>
              <Button
                className="bp5-minimal"
                icon="document"
                text="Subiecte Etapa I"
                style={buttonStyle}
                active={location.pathname === "/etapa-I"}
              />
            </Link>
            <Link to="/etapa-II" style={linkStyle}>
              <Button
                className="bp5-minimal"
                icon="document"
                text="Subiecte Etapa II"
                style={buttonStyle}
                active={location.pathname === "/etapa-II"}
              />
            </Link>
            <Link to="/linkuri" style={linkStyle}>
              <Button
                className="bp5-minimal"
                icon="link"
                text="Linkuri Utile"
                style={buttonStyle}
                active={location.pathname === "/linkuri"}
              />
            </Link>
          </Navbar.Group>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Switch
              checked={animationsEnabled}
              label="Animații"
              onChange={() => {
                window.localStorage.setItem(
                  "animationsDisabled",
                  animationsEnabled.toString(),
                );
                setAnimationsEnabled(!animationsEnabled);
              }}
              style={{ margin: 0 }}
            />

            <Button
              className="bp5-minimal"
              icon="bug"
              style={{ marginLeft: "10px" }}
              onClick={() =>
                window
                  .open(
                    "https://github.com/MateInfo-UB/Simulari-Etapa-I/issues/new",
                    "_blank",
                  )!
                  .focus()
              }
            />
          </div>
        </Navbar>
      </div>
      <div
        style={{
          height: "calc(100vh - 50px)",
          position: "relative",
        }}
      >
        {animationsEnabled && (
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}
          >
            <CanvasAnimation />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/simulari"
            element={<SimulationPage history={history} />}
          />
          <Route path="/etapa-I/" element={<PdfFilesViewer etapa="I" />} />
          <Route path="/etapa-II/" element={<PdfFilesViewer etapa="II" />} />
          <Route path="/linkuri" element={<LinkuriUtile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
