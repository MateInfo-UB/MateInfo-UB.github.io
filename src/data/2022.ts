import { EditionType, ProblemaType } from "../types";

const problema_1: ProblemaType = {
  titlu: "Exponent",
  enunt_markdown: `
Care este cel mai mare exponent \`k\` astfel încât \`$$12^k$$\` divide numărul \`$$100!$$\` ?
`,
  variante: ["8", "25", "33", "48", "97"],
  raspuns: "48",
  dificultate: "usor"
};

const problema_2: ProblemaType = {
  titlu: "Matrice pătratică",
  enunt_markdown: `
Considerăm o matrice pătratică A de dimensiune \`$$10 \\times 10$$\`, având liniile și coloanele indexate de la 1.

Orice element \`A[i][j]\` al matricei este egal cu minimul dintre i și j (\`$$1 \\leq i,j \\leq 10$$\`).

Suma tuturor elementelor din matricea A este egală cu:
`,
  variante: ["285", "385", "500", "550", "715"],
  raspuns: "385",
  dificultate: "usor"
};

const problema_3: ProblemaType = {
  titlu: "Funcție",
  enunt_markdown: `
Pentru numărul natural pozitiv \`n\` definim \`f(n)\` astfel:

- \`f(1) = 1\`
- \`f(n) = 1 + f(n/2)\`, dacă n este par
- \`1 + f(3n+1)\`, dacă n este impar și diferit de 1.

Spre exemplu:
\`\`\`
f(10) = 1 + f(5) = 1 + 1 + f(16) = 1 + 1 + 1 + f(8) = ... = 7
\`\`\`

Cu cât este egal \`f(2022)\`?
`,
  variante: ["64", "128", "256", "512", "1024"],
  raspuns: "64",
  dificultate: "usor"
};

const problema_4: ProblemaType = {
  titlu: "Pagini",
  enunt_markdown: `
Numerele de la \`1\` la \`20.000\` sunt scrise în ordine într-o carte cu \`100\` de foi (\`200\` de pagini), câte \`100\` pe pagină.

Mai exact, prima foaie, alcătuită din paginile \`1\` și \`2\`, conține pe prima pagină numerele de la \`1\` la \`100\` și pe a doua pagină numerele de la \`101\` la \`200\`. A doua foaie, compusă din paginile \`3\` și \`4\` conține numerele de la \`201\` la \`400\` etc.

Cineva dezleagă cartea, amestecă foile și o leagă la loc. Atenție, foile nu sunt rotite sau întoarse ci doar permutate.

Care este probabilitatea, ca numerele de la \`1150\` la \`1250\` să fie în continuare consecutive?
`,
  variante: ["1", "1/2", "1/99", "1/100", "99/10100"],
  raspuns: "1/100",
  dificultate: "usor"
};

const problema_5: ProblemaType = {
  titlu: "Submulțime de produs maxim",
  enunt_markdown: `
Fie mulțimea de numere reale următoare:
\`\`\`
A = {
  -3000, 3000,
  -2000, 2000,
  -1000, 1000,
  -13, 13, -7,
  7, -5, 5, -1.5,
  1.5, -0.75, 0.75,
  -0.5, 0.5, 0
}
\`\`\`

Care este numărul de elemente al submulțimii de produs maxim din A?
`,
  variante: ["9", "13", "14", "15", "18"],
  raspuns: "15",
  dificultate: "usor"
};

const problema_6: ProblemaType = {
  titlu: "Țara fermecată",
  enunt_markdown: `
În țara fermecată, există \`100\` orașe, identificate cu numerele de la \`0\` la \`99\` și următoarele drumuri bidirecționale:

- Autostrăzi între orașele \`(0 și 9)\`, \`(10 și 19)\`, \`(20 și 29)\`, ..., \`(90 și 99)\`, a căror traversare durează \`4\` ore;
- Drumuri comunale între orașele \`(0 și 1)\`, \`(1 și 2)\`, ..., \`(98 și 99)\`, a căror traversare durează o oră.

Cât durează cel mai rapid traseu de la orașul \`12\` la orașul \`72\`?
`,
  variante: ["29", "30", "34", "35", "38"],
  raspuns: "34",
  dificultate: "usor"
};

const problema_7: ProblemaType = {
  titlu: "Matrice binară",
  enunt_markdown: `
Fie o matrice pătratică de dimensiune \`2022\` ce conține valori de \`1\` și \`0\`, astfel încât există exact o valoare egală cu \`1\` pe fiecare linie și pe fiecare coloană.

În matrice este permisă interschimbarea a două valori din celule vecine pe verticală sau pe orizontală (considerăm că două celule sunt vecine dacă au o latură comună).

Considerând toate matricele cu o asemenea proprietate, care este numărul minim de interschimbări necesare pentru a aduce toate valorile de \`1\` pe aceeași linie sau pe aceeași coloană?
`,
  variante: ["2022", "511566", "510555", "1021110", "1022121"],
  raspuns: "1022121",
  dificultate: "usor"
};

const problema_8: ProblemaType = {
  titlu: "Ultima cifră",
  enunt_markdown: `
Ultima cifră a numărului urmator este:
\`\`\`katex
1^1 + 2^2 + 3^3 + \\ldots + 2022^{2022}
\`\`\`
`,
  variante: ["0", "1", "3", "5", "9"],
  raspuns: "5",
  dificultate: "usor"
};

const problema_9: ProblemaType = {
  titlu: "Numere Fibonacci",
  enunt_markdown: `
Câte numere Fibonacci sunt în intervalul închis \`[1234567890, 9876543210]\`?
`,
  variante: ["1", "2", "4", "8", "16"],
  raspuns: "4",
  dificultate: "usor"
};

const problema_10: ProblemaType = {
  titlu: "Cicluri de lungime 3",
  enunt_markdown: `
Fie graful neorientat \`G\` dat prin mulțimea nodurilor:
\`\`\`
V = { 1, 2, …, 1000 }
\`\`\`
Și mulțimea muchiilor:
\`\`\`
E = { (i, j) | i + j este număr prim, și 1 ≤ i, j ≤ 1000}
\`\`\`

Care este numărul ciclurilor distincte de lungime 3 din graful G?
(Considerăm ca doua cicluri sunt distincte daca ele diferă prin cel putin o muchie.)
`,
  variante: ["0", "1", "27", "64", "125"],
  raspuns: "0",
  dificultate: "usor"
};

const problema_11: ProblemaType = {
  titlu: "Netville",
  enunt_markdown: `
În orașul Netville sunt \`14052022\` de case, identificate prin numerele naturale \`1, 2,..., 14052022\`.

În majoritatea caselor locuiesc studenți (sau viitori studenți) ai Facultății de Matematică și Informatică, care s-au gândit să creeze o rețea de calculatoare folosind următoarea regulă:

Casa cu numărul \`h\` (\`$$2 \\leq h \\leq 14052022$$\`) va fi interconectată cu toate casele al căror număr \`d\` este un divizor al lui \`h\` (\`$$1 \\leq d < h$$\`).

De exemplu, casa cu numărul \`10\` va fi interconectată cu casele cu numerele \`1, 2, 5, 20, 30, ..., 14052020\`.

Numărul de conexiuni care trebuie realizate între toate cele \`14052022\` de case este egal cu:
`,
  variante: ["233442104", "226416093", "219390082", "205338061", "248511938"],
  raspuns: "219390082",
  dificultate: "mediu"
};

const problema_12: ProblemaType = {
  titlu: "Salturi",
  enunt_markdown: `
Alex joacă un joc. Inițial, acesta se află lipit cu spatele de perete.

La fiecare pas poate să facă un salt în față sau în spate de lungime egală cu \`$$2^k$$\` unități, unde k > 0.

Pentru a evita accidente, Alex nu va efectua saltul în spate dacă poziția rezultată va fi mai mică decât 0.

Care este numărul minim de salturi necesare lui Alex pentru a ajunge la poziția \`1340291\`?
`,
  variante: ["7", "8", "9", "10", "11"],
  raspuns: "8",
  dificultate: "mediu"
};

const problema_13: ProblemaType = {
  titlu: "Pătrate perfecte",
  enunt_markdown: `
Care este numărul minim de pătrate perfecte necesar astfel încât suma acestora să fie \`2022\`?

De exemplu:

- \`$$2=1^2 + 1^2$$\`, deci răspunsul pentru \`2\` este \`2\`.
- \`$$10=3^2 + 1^2$$\`, deci răspunsul pentru \`10\` este tot \`2\`.
- \`$$100 = 10^2$$\`, deci răspunsul pentru \`100\` este \`1\`.
- \`$$18 = 3^2 + 3^2$$\`, deci răspunsul pentru \`18\` este \`2\`.
`,
  variante: ["2", "3", "4", "5", "6"],
  raspuns: "3",
  dificultate: "mediu"
};

const problema_14: ProblemaType = {
  titlu: "Zaruri",
  enunt_markdown: `
Pe masă se află 3 zaruri. Pe fiecare dintre cele 6 fețe ale zarurilor e inscripționată câte o cifră.

Cifrele înscrise pe ficare zar sunt următoarele:

\`\`\`
Z_1 ↦ [1, 3, 2, 4, 5, 7]
Z_2 ↦ [1, 7, 6, 2, 1, 5]
Z_3 ↦ [7, 9, 8, 2, 4, 21]
\`\`\`

Spunem că un număr de 3 cifre se poate forma folosind zarurile dacă putem aranja cele 3 zaruri pe masă astfel încât fețele de sus să descrie acel număr.

De exemplu, putem forma numărul \`562\` folosind zarurile \`Z_1\`, \`Z_2\`, \`Z_3\` (în această ordine).

Câte numere distincte de 3 cifre se pot forma cu cele 3 zaruri?
`,
  variante: ["125", "317", "499", "521", "729"],
  raspuns: "521",
  dificultate: "mediu"
};

const problema_15: ProblemaType = {
  titlu: "Semne plus/minus",
  enunt_markdown: `
Pentru care din următoarele valori ale lui \`n\` există o alegere de semne plus/minus astfel încât expresia \`$$1 \\pm 2 \\pm 3 \\pm 4 \\pm \\ldots \\pm n$$\` să ia valoarea 0?
`,
  variante: ["2021", "2022", "2023", "2025", "2026"],
  raspuns: "2023",
  dificultate: "mediu"
};

const problema_16: ProblemaType = {
  titlu: "Funcție Simplă",
  enunt_markdown: `
Se consideră funcția:

\`\`\`C
int h(int a, int b, int k)
{
    if (a <= 0) {
        if (k == 1)
            return a + b;
        else
            return b;
    }
    else
        return h(a - b, b, k + 1);
}
\`\`\`

Care va fi valoarea expresiei \`h(14052022, 23, 0)\`?
`,
  variante: ["14", "23", "2022", "610957", "14051999"],
  raspuns: "23",
  dificultate: "mediu"
};

const problema_17: ProblemaType = {
  titlu: "Funcție Grea",
  enunt_markdown: `
Considerăm funcția:

\`\`\`C
const int kLim = 1000000;

void fun(int a, int b, int c)
{
    if (a > kLim || b > kLim || c > kLim)
        return;
    if (a != c && b != c)
        cout << c << '\n';
    fun(a + 1, b, c + b);
    fun(a, b + 1, c + a);
}
\`\`\`

Care dintre următoarele numere va fi afișat la un moment dat ca urmare a apelului \`fun(0, 0, 0)\`?
`,
  variante: ["361", "5051", "1787", "53411", "41"],
  raspuns: "361",
  dificultate: "greu"
};

const problema_18: ProblemaType = {
  titlu: "Triunghiuri",
  enunt_markdown: `
Avem \`10\` bețe de lungimile:
\`\`\`
3, 4, 5, 8, 10, 12, 14, 32, 57, 64
\`\`\`

Vrem să folosim unele dintre aceste bețe (posibil toate) pentru a construi conturul unui triunghi (punând bețele cap la cap). Pentru fiecare latură a triunghiului, putem folosi unul sau mai multe bețe. Triunghiul trebuie să aibă aria strict pozitivă.

Câte arii distincte posibile poate avea un asemenea triunghi?
`,
  variante: ["8193", "22", "55558", "11495", "105693", "234126", "17293", "16639", "132", "49763"],
  raspuns: "16639",
  dificultate: "greu"
};

const problema_19: ProblemaType = {
  titlu: "Submulțimi",
  enunt_markdown: `
Fie \`S\` suma tuturor elementelor tuturor submulțimilor cu \`617\` elemente ale mulțimii:
\`\`\`
{ 1, 2, 3, ..., 1234 }
\`\`\`

Câte cifre are S?
`,
  variante: ["325", "376", "392", "404", "415", "427", "440", "455", "467", "489"],
  raspuns: "404",
  dificultate: "greu"
};

const problema_20: ProblemaType = {
  titlu: "Apariții",
  enunt_markdown: `
Alex are vedenii. Cum stă pe facebook să citească update-uri de la prieteni în loc să învețe pentru examenul de mâine, acesta începe să vadă cuvântul \`picat\` printre postări.

Dat fiind un șir de caractere \`s\` format din literele mici ale alfabetului englez (fără diacritice) și semne de punctuație reprezentând o postare, o apariție a cuvântului "picat" este determinată de numerele \`a_1 < a_2 < a_3 < a_4 < a_5\`, astfel încât:

* \`s[a_1] = 'p'\`
* \`s[a_2] = 'i'\`
* \`s[a_3] = 'c'\`
* \`s[a_4] = 'a'\`
* \`s[a_5] = 't'\`

Două apariții se consideră diferite dacă cel puțin unul dintre numerele \`a_1\`, \`a_2\`, \`a_3\`, \`a_4\` sau \`a_5\` este diferit în cele două apariții.
Alex tocmai a citit următoarea postare:

\`\`\`
Azi am putut in sfarsit ca din intamplare sa vizitez muzeul cunoscut al satului: cand am pasit acolo am simtit ca totul este minunat.
\`\`\`

Câte apariții ale cuvântului \`picat\` există în această postare?
`,
  variante: ["665", "714", "1923", "2154", "1315", "1276", "956", "1672", "1024", "1948"],
  raspuns: "1672",
  dificultate: "greu"
};

const editia_2022: EditionType = {
  name: "Ediția 2022",
  probleme: [
    problema_1,
    problema_2,
    problema_3,
    problema_4,
    problema_5,
    problema_6,
    problema_7,
    problema_8,
    problema_9,
    problema_10,
    problema_11,
    problema_12,
    problema_13,
    problema_14,
    problema_15,
    problema_16,
    problema_17,
    problema_18,
    problema_19,
    problema_20
  ],
  pdf_etapa_1_link: "./pdfs/2022-etapa-I-A.pdf",
  pdf_etapa_2_link: [
    "./pdfs/2022-felinare.pdf",
    "./pdfs/2022-cazane.pdf",
    "./pdfs/2022-tren.pdf",
    "./pdfs/2022-vopsea.pdf",
  ]
}

export { editia_2022 };