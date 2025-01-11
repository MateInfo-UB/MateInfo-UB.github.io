import { EditionType } from "../types";
import { editia_2024 } from "./2024";

const editia_2023: EditionType = {
    name: "Ediția 2023",
    probleme: [],
    pdf_etapa_1_link: "./pdfs/2024-rame-pane.pdf",
    pdf_etapa_2_link: "./pdfs/2024-rame-pane.pdf"
}

const editii: EditionType[] = [editia_2024, editia_2023];

export { editii };