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
  dificultate: "usor",
};

const problema_2: ProblemaType = {
  titlu: "Buseala",
  enunt_markdown: `
Se dă următoarea secvență de cod:

\`\`\`c++
int n = 3;
for (int i = 0; i < n; i--) {
    cout << '$';
}
\`\`\`

Care din următoarele modificări va face codul să afișeze exact de 3 ori caracterul dolar (i.e., "$$$")?

1. înlocuim "n = 3" cu "n = -3"
2. înlocuim "int i = 0" cu "long i = 0"
3. înlocuim "i < n" cu "-i < n"
4. înlocuim "i < n" cu "i + n"
5. înlocuim "i--" cu "n--"
6. înlocuim "cout << '$'" cu "cout << "$$$""
`,
  variante: [
    "1, 2 si 3.",
    "2, 3 si 4.",
    "3, 4 si 5.",
    "3, 5 si 6.",
    "1, 3 si 6.",
  ],
  raspuns: "3, 4 si 5.",
  dificultate: "usor",
};

const problema_3: ProblemaType = {
  titlu: "Text",
  enunt_markdown: `
Se dă următoarea listă de cuvinte:

\`\`\`c++
char cuvinte[10][5] = {
  "mate",
  "buri",
  "mute",
  "mese",
  "cute",
  "mare",
  "iute",
  "sute",
  "sate",
  "muri"
};
\`\`\`

Două cuvinte sunt _similare_ dacă sunt exact la o literă distanță (adică se poate schimba exact o literă din primul cuvânt astfel încât el să devină egal cu al doilea cuvânt). De exemplu, "abab" este similar cu "abbb", dar "aaaa" nu este similar cu "aabb" și de asemenea "aaaa" nu este similar cu "aaaa".

Câte perechi neordonate (perechea (a, b) este considerată egală cu perechea (b, a)) de cuvinte similar există?
`,
  variante: [3, 7, 11, 15, 19],
  raspuns: 11,
  dificultate: "usor",
};

const problema_4: ProblemaType = {
  titlu: "APM-uri",
  enunt_markdown: `
Câți arbori parțiali de cost minim are următorul graf?
`,
  imagine: "./images/2024-APM-uri.png",
  variante: [6, 5, 7, 3, 9],
  raspuns: 7,
  dificultate: "usor",
};

const problema_5: ProblemaType = {
  titlu: "Bilete norocoase",
  enunt_markdown: `
Alexandrina, fiind pasionată de transport public, a cumpărat 1 milion de bilete de autobuz, având coduri distincte între ele, formate din exact 6 cifre. Un bilet este considerat norocos dacă suma primelor 3 cifre ale sale este egală cu suma ultimelor 3. De exemplu, biletul cu codul 000013 are suma primelor 3 cifre egală 0 și suma ultimelor 3 cifre egală cu 4.

Ajutați-o pe Alexandrina să numere câte bilete norocoase deține!
`,
  variante: [50412, 55252, 57823, 49575, 45198],
  raspuns: 55252,
  dificultate: "usor",
};

const problema_6: ProblemaType = {
  titlu: "Cel mai mic număr",
  enunt_markdown: `
Marius i-a cumpărat fetiței sale, Luna, un calculator de jucărie. În mod curios, acest calculator are un procesor care funcționează pe 10 biți. O variabilă de tip număr real păstrează valoarea sa în următorul format: \`$$m \\ \\times \\ 2^{-e}$$\`, unde m și e sunt numere naturale a căror reprezentare binară este păstrată în variabilă. Mai exact primii 3 biți semnificativi reprezintă valoarea lui e și următorii 7 reprezintă valoarea lui m.

De exemplu, variabila x dată prin secvența de biți 1010101010 reprezintă numărul:
\`\`\`KaTeX
(32 \\ + \\ 8 \\ + \\ 2) \\ \\times \\ 2^{-5} \\ = \\ 1.3125
\`\`\`

Marius îi dă următoarea temă Lunei: care este cea mai mică valoare nenulă care poate fi reprezentată de o variabilă în noua ei jucărie? O puteți ajuta?
`,
  variante: [0.001, 0.0078125, 0.00390625, 0.005859375, 0.015625],
  raspuns: 0.0078125,
  dificultate: "usor",
};

const problema_7: ProblemaType = {
  titlu: "Tastatură rotundă",
  enunt_markdown: `
La ora de design hardware, Teo inventează o tastatură circulară care conține cifrele de la 0 la 9 în ordine crescătoare și un ac care indică către una dintre ele. Această tastatură poate face de oricâte ori una dintre următoarele două operații:

1. să scrie pe ecran o dată cifra către care indică acul
2. mută acul pe poziția succesoare (dacă acul arăta către 0, va fi mutat către cifra 1; dacă arăta către 9, va fi mutat către cifra 0)

Inițial acul arată către cifra 0. Care este numărul **minim** de operații de care este nevoie pentru a scrie pe ecran numărul 11052024?
`,
  variante: [41, 42, 43, 44, 45],
  raspuns: 42,
  dificultate: "usor",
};

const problema_8: ProblemaType = {
  titlu: "Sockets",
  enunt_markdown: `
În datacenter-ul UniBuc, un server A de calcul științific pornește o conexiune către un serviciu extern o dată la 17 **secunde**. Un alt server B pornește câte o conexiune o dată la 21 **secunde**.

Alexandru, noul tehnician-șef al datacenter-ului, a făcut un program care monitorizează numărul de conexiuni pornite la orice moment de timp. Știind că fiecare conexiune rămâne deschisă exact 5 **minute** de la pornire, care este numărul maxim de conexiuni care pot exista simultan?
`,
  variante: [29, 30, 31, 32, 33],
  raspuns: 33,
  dificultate: "usor",
};

const problema_9: ProblemaType = {
  titlu: "Alianțe",
  enunt_markdown: `
Ștefan împreună cu cei 23 de prieteni ai săi joacă un joc de strategie.

Aceștia primesc un ID unic în cadrul jocului, un număr din intervalul [2, N+1] unde N este numărul de jucători.

Jucătorii formează alianțe astfel: doi jucători sunt în aceeași alianță dacă ID-urile lor au același număr de divizori (de exemplu jucătorul cu ID-ul 2 este în aceeași alianță cu jucătorul cu ID-ul 3). Comunicarea este foarte importantă în acest joc, iar după stabilirea alianțelor doar membrii aceleiași alianțe pot stabili conexiuni securizate bidirecționale între ei prin care comunică.

Care este numărul total de conexiuni securizate ce se pot stabili?
`,
  variante: [63, 61, 62, 65, 64],
  raspuns: 63,
  dificultate: "usor",
};

const problema_10: ProblemaType = {
  titlu: "Cifre distincte",
  enunt_markdown: `
Mara este pasionată de numere. După ce a analizat foarte multe tipuri de numere
(pare/impare, prime, palindrom, pătrate perfecte etc.)
și-a dat seama că favoritele ei sunt numerele cu toate cifrele distincte care nu conțin cifra 0.

Mara a făcut o groază de studii pentru numerele scrise în baza 10 dar acum este curioasă ce se întâmplă în alte baze de numerație. De exemplu, pentru baza 2 și-a dat seama că îi place doar un număr, iar pentru baza 3 îi plac 4 numere.

Câte numere o să-i placă Marei pentru baza 5?
`,
  variante: [31, 68, 15, 64, 260],
  raspuns: 64,
  dificultate: "usor",
};

const problema_11: ProblemaType = {
  titlu: "Copăcel",
  enunt_markdown: `
Comanda copăcel afișează structura directoarelor. De exemplu, dacă avem un director A care conține directoarele B, C si D, directorul B conține directoarele E si F, iar directorul D conține directorul G, atunci rezultatul comenzii copăcel va arăta în felul următor:

\`\`\`c++
> copacel A
A
|-- B
|   |-- E
|   |-- F
|-- C
|-- D
    |-- G

7 directories,  0 files
\`\`\`

În exemplul de mai sus, directoarele C, E, F și G sunt goale.

La linkul <a href="data/2024-tree.txt" target="_blank">acesta</a> se află rezultatul rulării comenzii copăcel pe un sistem cu 1500 de directoare (și niciun fișier). Câte din directoarele prezente sunt goale?
`,
  variante: [53, 164, 419, 602, 734, 953, 1231],
  raspuns: 734,
  dificultate: "mediu",
};

const problema_12: ProblemaType = {
  titlu: "Valize",
  enunt_markdown: `
Matei are 6 valize cu capacitățile de 14, 3, 16, 8, 2 si 5 litri. El își alege o submulțime de valize și calculează suma capacităților valizelor alese. Amuzat, Matei observă: _"Există exact două alegeri posibile ale valizelor care să dea suma aceasta!"_.

Care este suma maximă a capacităților valizelor alese de Matei?
`,
  variante: ["Este imposibil.", 5, 8, 13, 19, 30, 43],
  raspuns: 43,
  dificultate: "mediu",
};

const problema_13: ProblemaType = {
  titlu: "Tractoraș",
  enunt_markdown: `
Câte numere X între 5 si 999 (inclusiv) au proprietatea că următorul șir de operații se termină:

\`\`\`c++
X := numar intre 5 si 999
Y := 1
WHILE Y != 3:
    Y = Y * 2 % X
\`\`\`

Pentru cunoscători, problema cere să se afle pentru câte numere n cuprinse între 5 și 999, numărul 3 este generat de 2 în \`(Zn, *)\`.
`,
  variante: [0, 10, 64, 134, 257, 752, 989],
  raspuns: 134,
  dificultate: "mediu",
};

const problema_14: ProblemaType = {
  titlu: "Playlist",
  enunt_markdown: `
Cecilia dorește să asculte playlist-ul ei preferat în recreația mare care durează 15 minute. Playlist-ul ei este compus din 5 cântece cu următoarele durate:
1. cântecul 1: 4 minute și 35 de secunde
2. cântecul 2: 3 minute și 25 de secunde
3. cântecul 3: 6 minute și 20 de secunde
4. cântecul 4: 12 minute și 20 de secunde
5. cântecul 5: 5 minute și 40 de secunde

Înainte de a începe să asculte playlist-ul, Cecilia va apăsa pe butonul “shuffle” care va amesteca în mod aleatoriu (uniform) cântecele. Care este numărul mediu de cântece pe care Cecilia le poate asculta în totalitate?
`,
  variante: [1.8, 2.5, 1.5, 2.2, 2.4, 2.3, 2.6],
  raspuns: 1.8,
  dificultate: "mediu",
};

const problema_15: ProblemaType = {
  titlu: "Prietenel",
  enunt_markdown: `
Prietenel are 23 de colegi la firma la care lucrează (deci sunt în total 24 de angajați).

El a construit o rețea cu relațiile de prietenie dintre angajații de la firmă. Astfel, el a numerotat colegii cu numere de la 1 la 23 (pentru el a păstrat numărul 24, pentru că suntem în 2024) și a constatat că există \`m\` relații de prietenie reciprocă între perechi (neordonate) de angajați de la firma la care lucrează.

Spunem că i este prieten cu j dacă există o relație de prietenie  între i și j (relația de prietenie între i și j fiind reciprocă, dacă i este prieten cu j, atunci și j este prieten cu i). Prietenel și-a făcut lista L1 a prietenilor săi și lista L2 a prietenilor prietenilor lui și a constatat că exact doi colegi ai săi nu se află în niciuna dintre aceste liste.

Care este valoarea minimă și valoarea maximă a lui \`m\`?
`,
  variante: [
    "21 și  252",
    "23 și  252",
    "21 și  251",
    "23 și  251",
    "21 și  232",
    "23 și  232",
    "22 și  231",
  ],
  raspuns: "21 și  252",
  dificultate: "mediu",
};

const problema_16: ProblemaType = {
  titlu: "Turneu Jackpot",
  enunt_markdown: `
Într-un turneu de table de tip jackpot participă 40 de jucători și sunt premiați cu diverse sume doar primii 4 în funcție de clasamentul final al acestora. Valoarea totală a premiilor este de \`10800\` de dolari.

Deși cei 4 nu vor primi exact aceeași sumă, în principiu fiecare dintre ei are șansa sa câștige în medie \`$$\\frac{10800}{4} \\ = \\ 2700$$\` dolari.

Turneul se desfășoară astfel: jucătorii sunt grupați aleator câte doi, joacă o partidă, iar câștigătorii trec în etapa următoare. Astfel după 3 runde rămân 5 jucători A, B, C, D și E.

Teoretic acum, fiecare dintre cei cinci are șansa sa câștige în medie \`$$\\frac{10800}{4} \\ = \\ 2160$$\` dolari. Pentru a hotărî care vor fi cei 4 finaliști se aleg aleatoriu doi jucători din cei cinci, să zicem D și E, care vor juca o rundă suplimentară, câștigătorul intrând în finala celor 4.

Această rundă suplimentară diminuează șansele lui D și E la câștigul teoretic mediu. Cu căt ar trebui compensați D și E din fondul total de premii, înainte de runda suplimentară pe care o vor juca, astfel încât în final șansa la câștigul mediu (oricare ar fi acesta) să rămână aceeași pentru cei cinci?
`,
  imagine: "./images/2024-jackpot.png",
  variante: [0, 540, 720, 1080, 1350, 2160, 2700],
  raspuns: 1080,
  dificultate: "mediu",
};

const problema_17: ProblemaType = {
  titlu: "5 Eyes",
  enunt_markdown: `
Se consideră următoarea secvență de cod C++, din care lipsește valoarea tabloului de caractere secret:

\`\`\`c++
// Lungimea secretului (excluzand '\\0').
int n = 12;

// Secretul, format din n+1 caractere (incluzand caracterul '\\0').
char secret[] = "????????????"; // secretul lipseste

for (int i = 1; i < n; i++)
    for (int j = 2 * i; j < n; j += i)
        secret[j] ^= secret[i];

for (int i = 0; i < n; i++)
    cout << (int)secret[i] << ' ';
\`\`\`

Rezultatul rulării codului este următorul șir, de lungime 12:

\`\`\`c++
109 97 21 4 89 40 62 39 98 72 9 35
\`\`\`

Care este ultimul caracter nenul (diferit de \`\\0\`) al secretului?
`,
  variante: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
  raspuns: "B",
  dificultate: "greu",
};

const problema_18: ProblemaType = {
  titlu: "Zăpăceală",
  enunt_markdown: `
Brăduț este un băiat zăpăcit care încurcă mereu drumul către școală.
Harta cartierului său poate fi reprezentată ca un sistem ortogonal în care casa lui Brăduț se află în origine, iar școala acestuia se află în punctul de coordonate \`(3, 4)\`.

Dacă Brăduț se află în punctul de coordonate \`(x, y)\` acesta se poate deplasa într-un minut în unul din punctele \`(x + 1, y)\`, \`(x - 1, y)\`, \`(x, y + 1)\` și \`(x, y - 1)\`.

Pentru că este zăpăcit, acesta nu va considera mereu alegerea cea mai bună, ci va alege aleatoriu una dintre cele 4 direcții de deplasare, astfel:
1. Va merge în \`(x + 1, y)\` cu probabilitatea \`Pdreapta = 0.4\`.
2. Va merge în \`(x - 1, y)\` cu probabilitatea \`Pstanga = 0.05\`.
3. Va merge în \`(x, y + 1)\` cu probabilitatea \`Psus = 0.45\`.
4. Va merge în \`(x, y - 1)\` cu probabilitatea \`Pjos = 0.1\`.

Mai mult decât atât, lui Brăduț îi este permanent dor de casă. Astfel, după fiecare deplasare într-o anumită direcție, probabilitatea de deplasare în acea direcție scade cu \`0.01\`, iar probabilitatea de deplasare în direcția opusă crește cu \`0.01\`.

Care este probabilitatea ca Brăduț să ajungă la școală (punctul \`(3, 4)\`) folosind un drum de durată minimă?

Considerăm una dintre variantele de răspuns corectă, dacă diferența dintre aceasta și valoarea reală a probabilității este mai mică decât \`0.001\`.
`,
  variante: [
    0.002, 0.015, 0.023, 0.043, 0.074, 0.087, 0.092, 0.131, 0.176, 0.5,
  ],
  raspuns: 0.074,
  dificultate: "greu",
};

const problema_19: ProblemaType = {
  titlu: "2024 ca subșir",
  enunt_markdown: `
Considerăm șirul **finit** \`123456789101112131415...2024\` format prin alipirea în ordine a tuturor cifrelor numerelor naturale nenule mai mici sau egale cu 2024. Pierre vrea să știe de câte ori apare \`2024\` ca subșir în acest șir. Ajutați-l pe Pierre.

**Notă**: șirul \`a\` este un subșir al șirului \`b\` dacă \`a\` poate fi obținut din \`b\` ștergând 0 sau mai multe caractere din b.
`,
  variante: [
    1421010813, 4858581392, 5144380298, 5715978109, 8173848695, 6859173730,
    3268324869, 1278909731, 3429586865, 5430179203,
  ],
  raspuns: 5715978109,
  dificultate: "greu",
};

const problema_20: ProblemaType = {
  titlu: "Plimbare prin matrice",
  enunt_markdown: `
După ce a lucrat toată noaptea la propriul sistem de operare, Ioan a adormit buștean și a început să viseze.

Acesta se pomenește în celula \`(0, 0)\` a unei matrice bidimensionale infinite. În această matrice, Ioan poate face doar un pas sau doi **jos sau la dreapta**. Cu alte cuvinte, daca el se află in celula \`(i, j)\`, într-o mutare poate ajunge in una dintre celulele \`(i + 1, j)\`, \`(i + 2, j)\`, \`(i, j + 1)\` sau \`(i, j + 2)\`.

Pentru a putea scăpa de vis, Ioan trebuie sa răspundă la următoarea întrebare: \\
_În câte moduri poate ajunge în celula \`(20, 24)\`, având în vedere restricțiile de mișcare pe care le are?_
`,
  variante: [
    "59713569536180432",
    "436844856458564300",
    "152596701737090864",
    "1119576038404099820",
    "384848943308945522",
    "20810114480126744",
    "52291395481992608",
    "1735342859526354688",
    "1343491246084919808",
    "27053148824164768",
  ],
  raspuns: "1119576038404099820",
  dificultate: "greu",
};

const editia_2024: EditionType = {
  name: "Ediția 2024",
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
  pdf_etapa_1_link: "./pdfs/2024-etapa-I.pdf",
  pdf_etapa_2_link: [
    "./pdfs/2024-rame-pane.pdf",
    "./pdfs/2024-racituri-cu-pireu.pdf",
    "./pdfs/2024-prajitura-cu-mujdei.pdf",
    "./pdfs/2024-cornisoni-afumati.pdf",
  ],
  punctaje: [
    50,
    45,
    40,
    38,
    37,
    36,
    36,
    35,
    35,
    35,
    34,
    34,
    34,
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
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21
  ]
};

export { editia_2024 };
