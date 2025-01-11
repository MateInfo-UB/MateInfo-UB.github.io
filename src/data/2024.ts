import { EditionType, ProblemaType } from "../types";

const problema_1: ProblemaType = {
    titlu: "Koningsberg",
    enunt_markdown: `
Se dă harta alăturată.

Harta reprezintă un râu (albastru), două maluri și patru insule (verde), precum și opt poduri (negru).

Care este numărul minim de poduri ce trebuie construite astfel încât un turist să poată traversa toate podurile exact o dată?

**Atenție:** turistul își poate începe traseul oriunde dorește (pe un mal sau pe o insulă) și, de asemenea, poate termina traseul oriunde dorește.`,
    imagine: "./images/2024-koningsberg.png",
    variante: [0, 1, 2, 3, 4],
    raspuns: 1,
    dificultate: "usor"
};

const editia_2024: EditionType = {
    name: "Ediția 2024",
    probleme: [problema_1],
    pdf_etapa_1_link: "./pdfs/2024-rame-pane.pdf",
    pdf_etapa_2_link: [
      "pdfs/2024-rame-pane.pdf",
      "pdfs/2024-rame-pane.pdf",
      "pdfs/2024-rame-pane.pdf",
      "pdfs/2024-rame-pane.pdf"
    ]
}

export { editia_2024 };