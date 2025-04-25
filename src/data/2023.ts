import { EditionType, ProblemaType } from "../types";
const problema_1: ProblemaType = {
  titlu: "Numărul N",
  enunt_markdown: `
Considerăm numărul \`N = 1! + 2! + ... + 2023!\`.

Care este ultima cifră a numărului \`N\`?
`,
  variante: ["0", "1", "3", "5", "8"],
  raspuns: "3",
  dificultate: "usor",
};

const problema_2: ProblemaType = {
  titlu: "Numere puternice",
  enunt_markdown: `
Un număr este puternic dacă este strict mai mare decât răsturnatul său.

De exemplu, 10 și 21 sunt numere puternice, dar 1 și 34 nu sunt. Răsturnatul lui 10 este 1.

Câte numere pozitive până în 2023 (inclusiv) sunt puternice?
`,
  variante: ["519", "646", "766", "1258", "1378"],
  raspuns: "646",
  dificultate: "usor",
};

const problema_3: ProblemaType = {
  titlu: "RedDrink",
  enunt_markdown: `
Matei se pregătește să învețe asiduu pentru examenul de Bacalaureat.

Pentru a avea mai multă energie, el și-a cumpărat 100 de doze de băutură energizantă RedDrink. Matei preferă această băutură și pentru promoția de care poate beneficia, respectiv dacă reciclează 7 doze de aluminiu goale de RedDrink primește una plină la schimb.

El și-a făcut un plan să bea 3 doze de RedDrink pe zi (dimineața, la prânz și seara), pentru a susține un efort mare de învățare. Dacă nu are 3 doze la dispoziție se mulțumește cu 2 doze, iar dacă nu are 2 doze la dispoziție se mulțumește cu una.

Dacă Matei reciclează toate dozele goale care pot fi convertite în doze gratuite RedDrink pline cu băutură, după câte zile Matei nu mai poate să bea nicio doză de RedDrink?
`,
  variante: ["34", "37", "39", "41", "42"],
  raspuns: "39",
  dificultate: "usor",
};

const problema_4: ProblemaType = {
  titlu: "Expresie",
  enunt_markdown: `
Valoarea unei expresii de forma (a < b) este 1 dacă expresia este adevărată și 0 dacă ea este falsă. Care este valoarea expresiei E de mai jos?

\`$$E = (123^{345} < 654^{274}) \\
      + 2 * (345^{322} < 654^{294}) \\
      + 4 * (923^{263} < 452^{284})
$$\`
`,
  variante: ["0", "2", "3", "5", "6"],
  raspuns: "3",
  dificultate: "usor",
};

const problema_5: ProblemaType = {
  titlu: "Insule",
  enunt_markdown: `
Într-o matrice infinită (asemenea unui ocean nemărginit) în care pătratele albe reprezintă apă, iar pătratele negre reprezintă fâșii de pământ.

Mai multe fâșii formează o insulă dacă se poate ajunge din orice fâșie din insulă în orice altă fâșie din insulă mergând fie pe orizontală, fie pe verticală pe fâșii de pământ adiacente (fără a merge pe diagonale). O insulă poate fi formată și dintr-o singură fâșie de pământ. De pe o fâșie dintr-o insulă nu putem ajunge pe o altă fâșie de pe altă insulă. Dimensiunea unei insule reprezintă numărul de fâșii care alcătuiesc insula. În figura de mai jos sunt 4 astfel de insule cu dimensiunile 1, 4, 4 și 24.

Presupunem că pentru fiecare fâșie de pământ cunoaștem dimensiunea insulei din care face parte. Dându-se o matrice infinită în care știm că se află 30 de fâșii de pământ și lista următoare sortată a dimensiunilor insulelor din care face parte fiecare fâșie de pământ:

\`\`\`
1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
\`\`\`

să se afle numărul de insule.
`,
  imagine: "./images/2023-insule.png",
  variante: ["5", "7", "11", "13", "15"],
  raspuns: "11",
  dificultate: "usor",
};

const problema_6: ProblemaType = {
  titlu: "Reciclare",
  enunt_markdown: `
Matei vrea să recicleze. Are 6 obiecte pe care vrea să le arunce și pentru fiecare din ele știe câtă sticlă, cât plastic și câtă hârtie conține fiecare obiect. Din păcate, din motive tehnice, trebuie să arunce fiecare obiect la exact unul din cele 3 tomberoane de reciclare selectivă.

Câte unități de materie primă poate recicla maxim, dacă aruncă obiectele în tomberoane în mod optim? \\
Materia primă reciclată este sticla aruncată la tomberonul de sticlă, plasticul aruncat la tomberonul de plastic și hârtia aruncată la tomberonul de hârtie.

Cele 6 obiecte pe care le are Matei au:
1. 4 unități de sticlă, 5 unități de plastic și 3 unități de hârtie.
2. 10 unități de sticlă, 0 unități de plastic și 5 unități de hârtie.
3. 3 unități de sticlă, 9 unități de plastic și 4 unități de hârtie.
4. 5 unități de sticlă, 5 unități de plastic și 5 unități de hârtie.
5. 1 unitățide sticlă, 2 unități de plastic și 3 unități de hârtie.
6. 9 unități de sticlă, 9 unități de plastic și 8 unități de hârtie.
`,
  variante: ["14", "32", "41", "74", "90"],
  raspuns: "41",
  dificultate: "usor",
};

const problema_7: ProblemaType = {
  titlu: "Fort Leon",
  enunt_markdown: `
Arhipelagul Fort Leon este format din 14 insule, majoritatea locuitorilor fiind programatori începători.

Într-o zi cu soare, locuitorii arhipelagului s-au gândit că le-ar plăcea foarte mult să construiască mai multe poduri între insule astfel încât să poate pleca de pe orice insulă, să treacă o singură dată pe fiecare pod și să ajungă tot pe insula de unde au plecat. Pentru a-și îndeplini mai repede dorința, ei au scris un program care să-i ajute.

Din păcate, ei au scris un program greșit, care le-a furnizat următoarea modalitate de construire a unor poduri între cele 14 insule (vedeți poza alăturată).

Deoarece sunt foarte nerăbdători, locuitorii din Fort Leon vă roagă să-i ajutați, precizându-le numărul minim de poduri pe care trebuie să le adauge la cele deja indicate de programul scris de ei, astfel încăt să-și îndeplinească dorința.
`,
  imagine: "./images/2023-graf.png",
  variante: ["3", "4", "5", "6", "7", "8"],
  raspuns: "6",
  dificultate: "usor",
};

const problema_8: ProblemaType = {
  titlu: "Oferte",
  enunt_markdown: `
Matei vrea să își cumpere pungi cu bomboanele lui favorite. Are la dispoziție 4 oferte, dintre care trebuie să aleagă **cel mult una**, pe care o poate folosi de cel mai multe ori.

Ofertele sunt următoarele:
1. Prima ofertă: pentru fiecare 24 pungi cumpărate, următoarele 12 sunt gratuite.
2. A doua ofertă: pentru fiecare 15 pungi cumpărate, următoarele 6 sunt gratuite.
3. A treia ofertă: pentru fiecare 3 pungi cumpărate, următoarea este gratuită.
4. A patra ofertă: pentru fiecare 40 pungi cumpărate, următoarele 20 sunt gratuite.

Presupunând că o pungă de bomboane costă un leu, cât trebuie să plătească minim pentru a își cumpăra minim 100 pungi?
`,
  variante: ["25", "72", "75", "80", "100"],
  raspuns: "72",
  dificultate: "usor",
};

const problema_9: ProblemaType = {
  titlu: "Apă",
  enunt_markdown: `
Matei are multe bidoane de 5, 7 și 10 litri. Matei poate pune K litri de apă în bidoane dacă există un număr de bidoane de 5, 7 și 10 litri pe care le poate alege astfel încât suma capacităților bidoanelor alese să fie exact K. Concret, Matei poate pune K litri de apă în bidoane dacă există a, b și c astfel încât \`$$5a + 7b + 10c = K$$\`.

Care este cel mai mare număr de litri de apă pe care nu îl poate pune în bidoane?
`,
  variante: ["13", "17", "23", "26", "27"],
  raspuns: "23",
  dificultate: "usor",
};

const problema_10: ProblemaType = {
  titlu: "Configurații",
  enunt_markdown: `
Netty este foarte preocupată de siguranța datelor din PC-urile aflate în firmă sa, așa că s-a gândit să interconecteze PC-urile pentru a realiza rapid și sigur backup-ul datelor. Deoarece nu știe exact cum trebuie să interconecteze PC-urile, Netty a apelat la un oracol apaș care i-a sugerat mai multe configurații magice. 

Deoarece oracolul apaș era foarte grăbit, acesta i-a spus, în fiecare configurație, doar numărul PC-urilor cu care trebuie interconectate fiecare PC din firmă. De exemplu, configurația \`(2, 3, 1, 2)\` înseamnă că un PC trebuie interconectat cu alte două PC-uri, alt PC trebuie interconectat cu 3 PC-uri etc.

Unele dintre configurațiile respective sunt realizabile (de exemplu, configurația menționată anterior), iar altele nu (de exemplu, configurația \`(3, 2, 3)\`). Știind că oracolul i-a sugerat lui Netty următoarele configurațiile magice:

\`\`\`
C1 = (5, 2, 6, 4, 3, 4, 2, 2, 1, 1),
C2 = (5, 1, 1, 4, 4, 3, 5, 2, 2, 2),
C3 = (6, 4, 4, 3, 9, 2, 2, 2, 1, 1),
C4 = (6, 2, 6, 2, 6, 2, 6, 2, 8, 2),
C5 = (7, 6, 7, 3, 3, 2, 2, 2, 4, 4),
\`\`\`

ajută-o pe Netty, determinând numărul de configurații realizabile din cele 5 precizate!

**Notă**: Pentru fiecare PC trebuie să existe exact câte conexiuni câte sunt specificate în configurație.
`,
  variante: ["0", "1", "2", "3", "4", "5"],
  raspuns: "3",
  dificultate: "usor",
};

const problema_11: ProblemaType = {
  titlu: "Algoritm",
  enunt_markdown: `
Alex, Dan și Matei sunt prieteni buni. Ei au participat împreună la un concurs de programare formând o echipă și au câștigat marele premiu, o consolă XBOX. Cum ei se înțeleg bine, se hotărăsc să împartă marele premiu, respectiv fiecare dintre ei se va juca pe rând o săptămână pe consolă. Cei trei prieteni trebuie să decidă acum ordinea în care se vor juca pe consolă. Alex propune să stabilească această ordine folosind următorul algoritm care amestecă cele trei elemente din vectorul v situate pe pozițiile 0, 1 și 2:

\`\`\`
v = [Alex, Dan, Matei]
pentru i de la 0 la 2
        swap(v[i], v[random(3)])
\`\`\`

unde \`swap(a,b)\` interschimbă valorile elementelor a și b, iar \`random(3)\` returnează un număr aleator 0, 1 sau 2 cu probabilitatea uniformă 1/3.

Care este șansa ca Matei să fie generat pe prima poziție (poziția 0) a vectorului v folosind algoritmul de mai sus?
`,
  variante: ["1/2", "1/3", "1/4", "8/27", "3/10"],
  raspuns: "8/27",
  dificultate: "mediu",
};

const problema_12: ProblemaType = {
  titlu: "Șiruri de caractere",
  enunt_markdown: `
Considerăm șirurile de caractere de lungime 10 care conțin literele a si b, dar fără a conține trei apariții consecutive ale literelor a sau b.

Spre exemplu, șirul \`ababababab\` este un exemplu pozitiv (verifică regulile), iar șirul \`aaabababab\` este un exemplu negativ (nu verifică regulile).

Câte exemple pozitive de astfel de șiruri de caractere există?
`,
  variante: ["68", "110", "175", "178", "288"],
  raspuns: "178",
  dificultate: "mediu",
};

const problema_13: ProblemaType = {
  titlu: "Probabilitate",
  enunt_markdown: `
Care este, în medie, probabilitatea ca funcția de mai jos să returneze \`true\`?
Functia \`rnd()\` returnează un număr aleator real uniform distribuit între 0 și 1.

Atenție: funcția \`rnd()\` nu este aceeași cu funcția \`rand()\` din C/C++.

\`\`\`
bool F() {
    if (rnd() < 0.5)
        return true;
    if (rnd() < 0.4)
        return false;
    return rnd() < 0.3;
}
\`\`\`
`,
  variante: ["0.5", "0.56", "0.59", "0.9", "0.94"],
  raspuns: "0.59",
  dificultate: "mediu",
};

const problema_14: ProblemaType = {
  titlu: "Funcții",
  enunt_markdown: `
Se dau următoarele 3 funcții:

\`\`\`
int A(int x) {
    if (x <= 1)
        return x;
    return A(x - 1) + A(x - 2);
}

int B(int x) {
    if (x <= 1)
        return 1;
    return B(x / 2) + B(x / 2);
}

int C(int x) {
    if (x < 0)
        return 0;
    return 1 + C(x - 10);
}
\`\`\`

Se presupune ca tipul de date int folosit nu dă overflow și poate salva valori oricât de mari.

Considerând numerele:
\`\`\`
a = A(123456789)
b = B(123456789)
c = C(123456789)
\`\`\`

Care dintre următoarele inegalități este adevărată?
`,
  variante: ["a < b < c", "c < b < a", "b < a < c", "c < a < b", "a < c < b"],
  raspuns: "c < b < a",
  dificultate: "mediu",
};

const problema_15: ProblemaType = {
  titlu: "Puncte șa",
  enunt_markdown: `
Într-o matrice M de dimensiune m×n se numește punct șa un element \`M[i][j]\` cu proprietatea că fie este minim pe linia i și maxim pe coloana j, fie este maxim pe linia i și minim pe coloana j.

Dacă elementele matricei M sunt o permutare a mulțimii \`{1,2,...,m⋅n}\`, unde m ≥ 3 și n ≥ 3, atunci numărul maxim de puncte șa pe care poate să le aibă matricea M este:
`,
  variante: ["minimul dintre m și n", "maximul dintre m și n", "0", "1", "2"],
  raspuns: "2",
  dificultate: "mediu",
};

const problema_16: ProblemaType = {
  titlu: "Furnicuța",
  enunt_markdown: `
O furnicuță se deplasează pe o frunză, reprezentată printr-o matrice triunghiulară de dimensiune 2023, cu liniile și coloanele numerotate de la 1 (matricea are deci 2023 linii, iar fiecare linie i din matrice are i coloane).

Ea ar vrea să calculeze în câte moduri poate ajunge din vârful frunzei, adică din celula \`(1,1)\`, la baza frunzei, adică pe ultima linie a matricei (în oricare dintre celulele acesteia), știind că pentru că este așa de mică se poate deplasa dintr-o celulă a matricei doar un pas în jos sau un pas în dreapta-jos (din celula \`(i,j)\` în \`(i+1,j)\` sau \`(i+1, j+1)\`).

Până să găsească ea o strategie de numărare, o omidă a venit și a mușcat dintr-o margine a frunzei celulele \`(x,1)\` unde x este multiplu de 100. Mai mult, omida pofticioasă a mușcat și celula \`(2001, 1999)\`.

Furnicuța nu mai știe acum să calculeze câte trasee poate face fără a trece prin celulele mușcate, așa ca va roagă pe voi să calculați care este cea mai mare putere a lui 2 care divide numărul acestor trasee.
`,
  variante: ["22", "25", "2021", "23", "0"],
  raspuns: "25",
  dificultate: "mediu",
};

const problema_17: ProblemaType = {
  titlu: "Joc",
  enunt_markdown: `
X și Y joacă următorul joc:\\
Se pornește cu numărul \`p = 1\`, și, pe rând. X și Y (începând cu X) multiplică numărul p cu un număr între 2 și 9.

Câștigă primul care ajunge cu \`p >= n\` unde n este număr dat.

Dacă X și Y joacă 9 jocuri în care n este fixat pe rând la valorile:
\`\`\`
37, 89, 167, 2920, 5832, 66666, 104970, 131313, 34012226
\`\`\`

De câte ori câștigă X?
`,
  variante: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  raspuns: "4",
  dificultate: "greu",
};

const problema_18: ProblemaType = {
  titlu: "Tastatură",
  enunt_markdown: `
Matei tocmai a cumpărat tastatura din imagine și dorește să apese în total pe 10 taste. Prima tastă pe care apasă poate fi oricare dintre ele, dar fiind foarte leneș vrea ca începând de la a doua apăsare, fiecare tastă pe care o apasă să fie alăturată celei pe care tocmai a apăsat-o (tasta a i-a pe care apasă să fie alăturată tastei a i-1-a pentru 2 ≤ i ≤ 10).

Două taste sunt alăturate dacă sunt diferite și se ating pe o latură sau jumătate de latură. De exemplu, tastele "1" si "0" sunt alăturate, dar tastele "7" si "5", sau "+" si "*" nu sunt.

În câte moduri poate apăsa Matei pe taste?
`,
  imagine: "./images/2023-tastatura.png",
  variante: [
    "1212334",
    "4200301",
    "2204913",
    "1150905",
    "1200908",
    "3433058",
    "9507809",
    "7756489",
    "8890506",
    "6632980",
  ],
  raspuns: "1200908",
  dificultate: "greu",
};

const problema_19: ProblemaType = {
  titlu: "Funcție recursivă",
  enunt_markdown: `
Considerăm următoarea funcție recursivă:

\`\`\`
void f(int n, unsigned long long int k, unsigned long long int t)
{
    if(n >= 0)
    {
        if(k <= t)
        {
            cout << k << " ";
            f(n, k+1, t);
        }
        else
            f(n-1, 1, 2*t);
    }
}
\`\`\`

Cu cât este egală suma tuturor numerelor care vor fi afișate pe ecran după executarea apelului \`f(30,1,1)\`?
`,
  variante: [
    "2^31-1",
    "2^31+1",
    "2^32-1",
    "2^32+1",
    "2^29⋅(2^30+1)",
    "2^30⋅(2^31+1)",
    "(2^62+3⋅2^31-4)/3",
    "(2^62+3⋅2^31-3)/2",
    "(2^61+3⋅2^30-3)/3",
    "(2^61+3⋅2^30-2)/3",
  ],
  raspuns: "(2^61+3⋅2^30-2)/3",
  dificultate: "greu",
};

const problema_20: ProblemaType = {
  titlu: "Multipli de 2023",
  enunt_markdown: `
Câte numere de forma \`11...100...0\` (cu m de 1 și n de 0, pentru \`n, m ≥ 1\`) cu proprietatea că \`m + n ≤ 15000\` sunt multipli de 2023?
`,
  variante: [
    "82361",
    "337365",
    "141361",
    "225563",
    "130464",
    "246577",
    "331547",
    "459011",
    "178023",
    "267908",
  ],
  raspuns: "130464",
  dificultate: "greu",
};

const editia_2023: EditionType = {
  name: "Ediția 2023",
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
    problema_20,
  ],
  pdf_etapa_1_link: "./pdfs/2023-etapa-I.pdf",
  pdf_etapa_2_link: [
    "./pdfs/2023-ForkBomb.pdf",
    "./pdfs/2023-Cadouri.pdf",
    "./pdfs/2023-Agar.pdf",
    "./pdfs/2023-BebelusiPlangaciosi.pdf",
  ],
  punctaje: [
    50,
    44,
    44,
    43,
    42,
    41,
    40,
    40,
    40,
    39,
    39,
    38,
    38,
    37,
    37,
    37,
    37,
    37,
    37,
    36,
    36,
    36,
    36,
    36,
    35,
    35,
    35,
    35,
    35,
    35,
    35,
    35,
    34,
    34,
    34,
    34,
    34,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    33,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    32,
    31,
    31,
    31,
    31,
    31,
    31,
    31,
    31,
    31,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    29,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    28,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25
  ],
};

export { editia_2023 };
