import React, { useState } from 'react'
import { Navbar, Alignment, Button, Card, H3, Switch } from '@blueprintjs/core'
import '@blueprintjs/core/lib/css/blueprint.css'
import CanvasAnimation from './Animation'
import { PdfFilesViewer } from './PdfFilesViewer'
import { SimulationPage } from './SimulationPage'



function Home({ setTab }: { setTab: (tab: "simulari" | "etapa-I" | "etapa-II") => void }) {
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
        <Button intent="primary" onClick={() => setTab("simulari")}>Pornește Simularea</Button>
      </Card>
      <Card elevation={3} style={cardStyle}>
        <H3>Subiecte</H3>
        <p>Subiectele date în edițiile trecute ale concursului MateInfoUB, secțiunea informatică.</p>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
          <Button intent="primary" onClick={() => setTab("etapa-I")}>Subiecte Etapa I</Button>
          <Button intent="primary" onClick={() => setTab("etapa-II")}>Subiecte Etapa II</Button>
        </div>
      </Card>
    </div>
  </div>
}

function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(window.localStorage.getItem('animationsDisabled') == 'true' ? false : true)
  const [activeTab, setActiveTab] = useState<"home" | "simulari" | "etapa-I" | "etapa-II">('simulari')

  return (
    <div style={{ "height": "100vh", "display": "flex", "flexDirection": "column", overflow: "hidden" }}>
      <div style={{ height: "50px" }}>
        <Navbar style={{ "height": "50px" }}>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>MateInfoUB, Informatică</Navbar.Heading>
            <Navbar.Divider />
            <Button
              className="bp5-minimal"
              icon="home" text="Prima Pagină"
              active={activeTab === 'home'}
              style={{ marginRight: "10px" }}
              onClick={() => setActiveTab('home')}
            />
            <Button
              className="bp5-minimal"
              icon="code" text="Simulări Etapa I"
              active={activeTab === 'simulari'}
              style={{ marginRight: "10px" }}
              onClick={() => setActiveTab('simulari')}
            />
            <Button
              className="bp5-minimal"
              icon="document"
              text="Subiecte Etapa I"
              active={activeTab === 'etapa-I'}
              style={{ marginRight: "10px" }}
              onClick={() => setActiveTab('etapa-I')}
            />
            <Button
              className="bp5-minimal"
              icon="document"
              text="Subiecte Etapa II"
              active={activeTab === 'etapa-II'}
              style={{ marginRight: "10px" }}
              onClick={() => setActiveTab('etapa-II')}
            />
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

        {activeTab === 'home' && <Home setTab={setActiveTab} />}
        {activeTab === 'simulari' && <SimulationPage />}
        {activeTab === 'etapa-I' && <PdfFilesViewer etapa="I" />}
        {activeTab === 'etapa-II' && <PdfFilesViewer etapa="II" />}


      </div>
    </div>
  )
}

export default App
