import React, { useState } from 'react'
import { Navbar, Alignment, Button, Card, H3, Switch } from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css'
import CanvasAnimation from './Animation'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { PdfFilesViewer } from './PdfFilesViewer'
import { SimulationPage } from './SimulationPage'



function Home() {
  const cardStyle: React.CSSProperties = {
    marginLeft: '5vh',
    marginRight: '5vh',
    marginTop: '10vh',
  }
  return <div style={{
    height: "100%",
    width: "100%",
    position: "relative",
  }}>
    <div style={{
      "display": "flex",
      "flexDirection": "row",
      "justifyContent": "center",
    }}>

      <Card elevation={3} style={cardStyle}>
        <H3>Simulări</H3>
        <p>Simulări online pentru etapa I a concursului MateInfoUB, secțiunea informatică.</p>
        <Link to="/simulari">
          <Button intent="primary">Pornește Simularea</Button>
        </Link>
      </Card>
      <Card elevation={3} style={cardStyle}>
        <H3>Subiecte</H3>
        <p>Subiectele date în edițiile trecute ale concursului MateInfoUB, secțiunea informatică.</p>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
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
}

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(window.localStorage.getItem('animationsDisabled') == 'true' ? false : true)

  return (
    <HashRouter>
      <div style={{ "height": "100vh", "display": "flex", "flexDirection": "column", overflow: "hidden" }}>
        <div style={{ height: "50px" }}>
          <Navbar style={{ "height": "50px", backgroundColor: "rgb(235, 234, 234)" }}>
            <Navbar.Group align={Alignment.LEFT}>
              <Navbar.Heading>MateInfoUB, Informatică</Navbar.Heading>
              <Navbar.Divider />
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  className="bp5-minimal"
                  icon="home" text="Prima Pagină"
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <Link to="/simulari" style={{ textDecoration: "none" }}>
                <Button
                  className="bp5-minimal"
                  icon="code" text="Simulări Etapa I"
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <Link to="/etapa-I" style={{ textDecoration: "none" }}>
                <Button
                  className="bp5-minimal"
                  icon="document"
                  text="Subiecte Etapa I"
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <Link to="/etapa-II" style={{ textDecoration: "none" }}>
                <Button
                  className="bp5-minimal"
                  icon="document"
                  text="Subiecte Etapa II"
                  style={{ marginRight: "10px" }}
                />
              </Link>
            </Navbar.Group>
            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              alignItems: "center",
              height: "100%"
            }}>
              <Switch checked={animationsEnabled} label="Animații" onChange={() => {
                window.localStorage.setItem('animationsDisabled', (animationsEnabled).toString())
                setAnimationsEnabled(!animationsEnabled)
              }}
                style={{ margin: 0 }} />

              <Button
                className="bp5-minimal"
                icon="bug"
                text="Raportează o Problemă"
                style={{ marginLeft: "10px" }}
                onClick={() => window.open('https://github.com/MateInfo-UB/Simulari-Etapa-I/issues/new', '_blank')!.focus()}
              />
            </div>
          </Navbar>
        </div>
        <div style={{
          height: "calc(100vh - 50px)",
          position: "relative",
        }}>
          {animationsEnabled && <div style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}><CanvasAnimation /></div>}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulari" element={<SimulationPage />} />
            <Route path="/simulari/:activeEdition" element={<SimulationPage />} />
            <Route path="/etapa-I/" element={<PdfFilesViewer etapa="I" />} />
            <Route path="/etapa-I/:activeTab" element={<PdfFilesViewer etapa="I" />} />
            <Route path="/etapa-II/" element={<PdfFilesViewer etapa="II" />} />
            <Route path="/etapa-II/:activeTab" element={<PdfFilesViewer etapa="II" />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
