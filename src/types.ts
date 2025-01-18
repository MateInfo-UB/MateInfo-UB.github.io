interface ProblemaType {
    // the title of the problem
    titlu: string;
    // the content, in markdown format
    enunt_markdown: string;
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


const ScoreOfProblem = (problem: ProblemaType): number => {
  if (problem.dificultate === "usor") {
    return 2
  }
  else if (problem.dificultate === "mediu") {
    return 3
  }
  else {
    return 5
  }
}


export { ScoreOfProblem };
export type { ProblemaType, EditionType };

