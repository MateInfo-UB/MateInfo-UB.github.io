import { Button, Card, H3 } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

function LinkuriUtile() {
  const cardStyle: React.CSSProperties = {
    marginLeft: "5vh",
    marginRight: "5vh",
    marginTop: "20px",
    marginBottom: "20px",
    width: "60vw",
    height: "fit-content",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
  };
  const problemLinkButtonStyle: React.CSSProperties = {
    width: "calc(min(23%, 200px))",
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
          flexDirection: "column",
          // "justifyContent": "center",
          height: "100%",
          alignItems: "center",
          alignContent: "flex-start",
          // "flexWrap": "wrap",
          overflow: "auto",
          padding: "30px",
        }}
      >
        <Card elevation={3} style={cardStyle}>
          <H3>Site-ul Oficial</H3>
          <p>
            Site-ul oficial a concursului MateInfoUB, secțiunea informatică,
            unde veți găsi informațiile organizatorice legate de concurs.
          </p>
          <a
            href="https://fmi.unibuc.ro/concursul-mateinfoub/"
            target="_blank"
            rel="noreferrer"
          >
            <Button intent="primary">
              Deschide Pagina Concursului de pe Site-ul FMI
            </Button>
          </a>
        </Card>

        <Card elevation={3} style={cardStyle}>
          <H3>Arhiva Concursului</H3>
          <p>
            Toate problemele (enunțuri, editoriale, soluțiile oficiale) date în
            cadrul concursului sunt centralizate într-o organizatie Github©.
          </p>
          <a
            href="https://github.com/MateInfo-UB"
            target="_blank"
            rel="noreferrer"
          >
            <Button intent="primary">
              Deschide Pagina Github a Arhivei de Probleme
            </Button>
          </a>
        </Card>

        <Card elevation={3} style={cardStyle}>
          <H3>Arhiva Kilonova, Ediția 2024</H3>
          <p>
            Soluții pentru problemele propuse în etapa II a concursului, ediția
            2024 pot fi trimise pe Kilonova.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <a
              href="https://kilonova.ro/problems/2823"
              target="_blank"
              rel="noreferrer"
              style={problemLinkButtonStyle}
            >
              <Button intent="primary" style={{ width: "100%" }}>
                Râme Pane
              </Button>
            </a>
            <a
              href="https://kilonova.ro/problems/2825"
              target="_blank"
              rel="noreferrer"
              style={problemLinkButtonStyle}
            >
              <Button intent="primary" style={{ width: "100%" }}>
                Cornișoni Afumați
              </Button>
            </a>
            <a
              href="https://kilonova.ro/problems/2824"
              target="_blank"
              rel="noreferrer"
              style={problemLinkButtonStyle}
            >
              <Button intent="primary" style={{ width: "100%" }}>
                Răcituri cu Pireu
              </Button>
            </a>
            <a
              href="https://kilonova.ro/problems/2822"
              target="_blank"
              rel="noreferrer"
              style={problemLinkButtonStyle}
            >
              <Button intent="primary" style={{ width: "100%" }}>
                Prăjitură cu Mujdei
              </Button>
            </a>
          </div>
        </Card>

        <Card elevation={3} style={cardStyle}>
          <H3>Raportează o Problemă</H3>
          <p>
            Această platformă nu este platforma pe care se desfășoară concursul,
            ci există în scop educativ. Dacă găsiți o problemă (un bug), vă
            rugăm să îl raportați la link-ul de mai jos (veți avea nevoie de un
            cont de Github).
          </p>
          <a
            href="https://github.com/MateInfo-UB/MateInfo-UB.github.io/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            <Button intent="warning">Raportează o Problemă</Button>
          </a>
        </Card>
      </div>
    </div>
  );
}

export { LinkuriUtile };
