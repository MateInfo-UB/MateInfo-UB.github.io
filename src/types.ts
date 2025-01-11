interface ProblemaType {
    // the title of the problem
    titlu: string;
    // the content, in markdown format
    enunt_markdown?: string;
    // The content, in latex format
    enunt_latex?: string;
    // An image, if any (name of the image)
    imagine?: string;
    // the multiple choice answers
    variante: (string | number)[];
    // the correct answer
    raspuns: string | number;
    // difficulty
    dificultate: "usor" | "mediu" | "greu";
}

interface EditionType {
    name: string;
    pdf_etapa_1_link?: string | string[];
    pdf_etapa_2_link?: string | string[];
    probleme: ProblemaType[];
}

export type { ProblemaType, EditionType };