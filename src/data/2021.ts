import { EditionType, ProblemaType } from "../types";

const problema_1: ProblemaType = {
    titlu: "Număr divizibil cu 7",
    enunt_markdown: `
Care este ultima cifră a celui mai mare număr de 7 cifre, divizibil cu 7, care conține în componența sa doar cifre strict mai mici decât 7?
`,
    variante: ["0", "2", "3", "5", "6"],
    raspuns: "0",
    dificultate: "usor"
};

const problema_2: ProblemaType = {
    titlu: "Parte întreagă superioară",
    enunt_markdown: `
Care expresie implementează corect \`$$\\lceil \\frac{n}{k} \\rceil$$\` pentru toate perechile \`n, k\` de numere naturale nenule?

Notații:
 * \`$$\\lceil a\\rceil$$\` reprezintă partea întreagă superioară a numărului real \`a\`, spre exemplu \`$$\\lceil 2.8\\rceil = 3$$\`.
 * \`[n / k]\` reprezintă câtul împărțirii lui \`n\` la \`k\` și \`n mod k\` reprezintă restul împărțirii lui \`n\` la \`k\`).
`,
    variante: ["[n / k]", "[(n+k) / k]", "[(n+k-1) / k]", "[n / (k-1)]", "[n / k] + (n mod k)"],
    raspuns: "[(n+k-1) / k]",
    dificultate: "usor"
};

const problema_3: ProblemaType = {
    titlu: "Funcție",
    enunt_markdown: `
Considerăm următorul cod scris în limbajul C++ / Pascal:

\`\`\`C
int f(int t[10000], int n) {
    int i = 0, s = 0;
    while (i < n) {
        int j = i + 1;
        while (j < n && t[i] == t[j])
            j += 1;
        s += 1;
        i = j;
    }
    return s;
}
\`\`\`

\`\`\`Pascal
function f(t : MyArray; n : Integer) : Integer;
var i, s, j : Integer;
begin
i := 0; s := 0;
while i < n do begin
    j := i + 1;
    while (j < n) and (t[i] = t[j]) do
        j := j + 1;
    s := s + 1;
    i := j;
end;
f := s;
end;
\`\`\`

Definiții:
 * O subsecvență a lui \`t\` este o listă de valori aflate pe poziții consecutive crescătoare, e.g., \`[t[3], t[4], t[5]]\`.
 * Un subșir al lui \`t\` este o listă de valori aflate pe poziții ordonate crescător (nu neapărat consecutive), e.g., \`[t[3], t[5], t[9]]\`.
 * 
Presupunând că tabloul \`t\` este format din \`n\` numere ordonate crescător, precizați ce returnează \`f(t, n)\`:
`,
    variante: ["numărul valorilor distincte din tabloul t", "lungimea maximă a unei subsecvențe din tabloul t formată din valori egale", "numărul subsecvențelor strict crescătoare din tabloul t", "lungimea maximă a unui subșir din tabloul t format din valori egale", "numărul valorilor care se repetă de cel puțin două ori din tabloul t"],
    raspuns: "numărul valorilor distincte din tabloul t",
    dificultate: "usor"
};

const problema_4: ProblemaType = {
    titlu: "Schimb de cărți de vizită",
    enunt_markdown: `
Într-o sală de conferințe sunt mai multe persoane, fiecare având o rezervă suficient de mare de cărți de vizită.

Știind că oricare două persoane pot să facă schimb de cărți de vizită cel mult o dată și s-au efectuat \`23052021\` de schimburi, care este numărul minim de persoane care se pot afla în sală?
`,
    variante: ["4801", "4802", "4803", "6790", "6791"],
    raspuns: "6791",
    dificultate: "usor"
};

const problema_5: ProblemaType = {
    titlu: "Arbori parțiali",
    enunt_markdown: `
Pentru un graf \`G\`, un arbore parțial este un graf conex, fără cicluri, conținând același număr de noduri ca \`G\` și doar muchii din \`G\` (dar nu neapărat toate).

Numărul de arbori parțiali ai grafului de mai jos este egal cu:
`,
    variante: ["12", "11", "9", "15", "16"],
    raspuns: "11",
    dificultate: "usor",
    imagine: "./images/2021-arbori-partiali.png"
};

const problema_6: ProblemaType = {
    titlu: "Pseudo-palindrom",
    enunt_markdown: `
Un număr natural se numește palindrom dacă se citește la fel de la stânga la dreapta și de la dreapta la stânga.

Spre exemplu, \`13231\` și \`2662\` sunt palindromuri, dar \`145\` sau \`1234322\` nu sunt.

Un număr natural se numește pseudo-palindrom dacă cifrele sale pot fi reordonate astfel încât să devină palindrom (în particular orice palindrom este și pseudo-palindrom).

Spre exemplu, \`13321\` și \`2626\` sunt pseudo-palindromuri.

Fie \`X\` cel mai mare număr pseudo-palindrom mai mic sau egal cu \`1000465\`. Care este restul lui \`X\` la împărțirea cu \`37\`?
`,
    variante: ["36", "4", "1", "35", "25"],
    raspuns: "35",
    dificultate: "usor"
};

const problema_7: ProblemaType = {
    titlu: "Adunare",
    enunt_markdown: `
Se dă următoarea adunare:

\`\`\`
ERAM + MARE = MARET
\`\`\`

Fiecare majusculă reprezintă o cifră (nu neapărat distinctă de celelalte).

Fiind primele cifre ale numerelor, cifrele corespunzătoare lui \`M\` și \`E\` trebuie să fie diferite de 0.

Care este valoarea sumei \`M + A + R + E + T\`?
`,
    variante: ["21", "7", "16", "18", "30"],
    raspuns: "18",
    dificultate: "usor"
};

const problema_8: ProblemaType = {
    titlu: "Creioane",
    enunt_markdown: `
Ionel are 10 creioane. Lungimile fiecărui creion sunt:

\`\`\`
4, 3, 7, 8, 7, 4, 5, 8, 13, 15
\`\`\`

El își dorește să obțină creioane având doar două lungimi diferite. Pentru a realiza acest lucru, el poate scurta (prin ascuțire) unele creioane.

Care este suma maximă a lungimilor creioanelor pe care o poate obține Ionel, după ce efectuează operațiile?
`,
    variante: ["46", "50", "54", "56", "62"],
    raspuns: "54",
    dificultate: "usor"
};

const problema_9: ProblemaType = {
    titlu: "Mulțime 13-liberă",
    enunt_markdown: `
O mulțime de numere naturale se numește 13-liberă dacă nu putem obține numărul 13 ca sumă a unor elemente **distincte** din mulțime.

Spre exemplu, mulțimea \`{ 1, 5, 7, 11 }\` nu este 13-liberă fiindcă \`1 + 5 + 7 = 13\`, dar mulțimea \`{ 1, 5, 6 }\` este 13-liberă (notați că deși \`1 + 6 + 6 = 13\`, condiția descrisă nu este încălcată, 6 fiind folosit de două ori).

Care este cardinalul maxim al unei submulțimi 13-libere a mulțimii \`1, 2, 3, ..., 10\`?
`,
    variante: ["5", "4", "3", "6", "8"],
    raspuns: "5",
    dificultate: "usor"
};

const problema_10: ProblemaType = {
    titlu: "Număr prim",
    enunt_markdown: `
Fie \`n\` cel mai mare număr natural **prim** de 5 cifre cu toate cifrele distincte.
Care este restul împărțirii lui \`n\` la 37?
`,
    variante: ["27", "4", "11", "15", "31"],
    raspuns: "15",
    dificultate: "usor"
};

const problema_11: ProblemaType = {
    titlu: "Pași",
    enunt_markdown: `
Vă amintiți de Cristian cel neastâmpărat? Tatăl lui s-a hotărât să îl învețe puțină aritmetică.

El spune că de la un număr natural \`x\` se poate ajunge la un număr natural \`y\` (\`y > x\`) trecând prin numerele dintre ele utilizând o secvență de pași.

Lungimea fiecărui pas este pozitivă și poate fi:
 * Egală cu lungimea pasului anterior, sau
 * Mai mare cu 1, sau
 * Mai mare cu 1.

Lungimile primului și ultimului pas trebuie să fie egale cu 1.

Problema dată lui Cristian este de a găsi numărul minim de pași prin care se poate ajunge de la \`2021\` la \`3110\`. Ce să aleagă Cristian?
`,
    variante: ["64", "65", "66", "67", "68"],
    raspuns: "65",
    dificultate: "mediu"
};

const problema_12: ProblemaType = {
    titlu: "Postere",
    enunt_markdown: `
Primarul P. are de acoperit un perete lung de 100 m și înalt de 1 m, pe care vrea să îl împânzească cu postere publicitare.

În acest sens, a cumpărat 8 postere, de înălțime egală cu 1 m și lățimile (exprimate în metri):

\`\`\`
12, 27, 13, 25, 26, 38, 28, 38
\`\`\`

El va trebui să aranjeze posterele de-a lungul peretelui. Posterele nu au voie să se suprapună și nu pot depăși marginile peretelui.

Care este aria maximă de perete pe care o poate acoperi folosind posterele cumpărate (exprimată în \`$$m^2$$\`)?
`,
    variante: ["93", "94", "95", "96", "97"],
    raspuns: "94",
    dificultate: "mediu"
};

const problema_13: ProblemaType = {
    titlu: "Triunghi infinit",
    enunt_markdown: `
Considerăm triunghiul infinit de mai jos, format din numere naturale, în care numărul 1 se află la nivelul 1, numerele 2 și 3 se află la nivelul 2, numerele 4, 5 și 6 se află la nivelul 3 și așa mai departe.

Pentru un anumit nivel \`k\`, vrem să calculăm suma numerelor din **interiorul** triunghiului care se oprește la nivelul \`k\`.

Spre exemplu, pentru nivelul \`k = 5\` numerele din interiorul triunghiului creat sunt \`5, 8, 9\`, și suma lor este \`22\`, iar pentru \`k = 7\` numerele din interiorul triunghiului creat sunt \`5, 8, 9, 12, 13, 14, 17, 18, 19, 20\` și suma lor este \`135\`.

Calculați suma numerelor din interiorul triunghiului care se oprește la nivelul \`k = 2021\`.
`,
    variante: ["2076403516157", "2080520640766", "2080520640767", "2084643884965", "2084643884966"],
    raspuns: "2080520640766",
    dificultate: "mediu",
    imagine: "./images/2021-triunghi-infinit.png"
};

const problema_14: ProblemaType = {
    titlu: "Domino",
    enunt_markdown: `
Fie \`A\` o matrice binară cu 50 de linii și 50 de coloane (numerotate de la 1 la 50).

Celula de pe rândul \`i\` și coloana \`j\` conține valoarea 1 dacă și numai dacă numărul \`$$50 \\cdot (i-1) + j$$\` se divide cu 7 **sau** cu 13, altfel conține valoarea 0.

Vrem să plasăm un singur "domino" (piesă de mărime \`$$1 \\times 2$$\` sau \`$$2 \\times 1$$\`) în matrice. Domino-ul trebuie să acopere 2 celule vecine (pe orizontală sau verticală) de 0 ale matricei.

În câte feluri putem face acest lucru?
`,
    variante: ["1479", "1480", "1520", "2959", "3039"],
    raspuns: "2959",
    dificultate: "mediu"
};

const problema_15: ProblemaType = {
    titlu: "Algoritm de acoperire",
    enunt_markdown: `
Considerăm următorul algoritm de acoperire a unei sume de bani, folosind bancnotele disponibile în portofel:

Cât timp suma este neacoperită și avem în portofel o bancnotă de valoare mai mică sau egală cu suma, alegem cea mai mare bancnotă de acest tip, scoatem bancnota din portofel și reducem suma cu valoarea ei.

Dacă algoritmul se încheie cu suma 0, a reușit, altfel a eșuat.

În funcție de configurația de bancnote disponibile și suma de acoperit, e posibil ca acest algoritm să nu găsească o soluție deși ea există.

Spre exemplu, dacă avem bancnotele \`{1, 1, 4, 5, 6}\` și trebuie să acoperim suma \`S = 9\`, algoritmul va selecta bancnotele \`6, 1, 1\`, după care se va bloca, fiindcă nu mai poate acoperi suma rămasă (egală cu 1). Totuși, există soluția \`{4, 5}\` care acoperă complet suma. Numim o astfel de configurație de bancnote disponibile, respectiv sumă de acoperit, un contraexemplu pentru algoritmul descris.

Fie \`S_MIN\` cea mai mică sumă de acoperit care apare într-un contraexemplu construit doar cu tipurile de bancnote românești aflate în circulație, anume: \`{1, 5, 10, 50, 100, 200, 500}\`. Fiecare tip de bancnotă poate fi folosit de oricâte ori (inclusiv deloc).

Care este restul lui \`S_MIN\` la împărțirea cu 37?
`,
    variante: ["13", "3", "8", "18", "23"],
    raspuns: "8",
    dificultate: "mediu"
};

const problema_16: ProblemaType = {
    titlu: "Dreptunghiuri",
    enunt_markdown: `
Câte dreptunghiuri distincte sunt în figura următoare?

\`\`\`
+------+---+---+---+---+
|      |   |   |   |   |
+--+---+   +---+   |   |
|  |   |   |   |   |   |
+--+---+---+---+---+   |
|  |       |       |   |
+--+---+---+---+---+---+
|      |   |   |       |
+------+---+---+-------+
\`\`\`

`,
    variante: ["43", "44", "45", "46", "47"],
    raspuns: "43",
    dificultate: "mediu"
};

const problema_17: ProblemaType = {
    titlu: "Ecuație",
    enunt_markdown: `
Pe masă este scrisă ecuația \`a + b = c\`. După un cutremur masiv, s-au permutat toate cifrele și semnele matematice între ele și s-a obținut o nouă "ecuație" (evident, greșită):

\`\`\`
129129851 = 29552 + 1177003
\`\`\`

Care ar fi putut fi valoarea inițială a lui \`c\`?
`,
    variante: ["8739191", "3001892", "3072104", "3735094", "5790835", "7192195", "8952530", "15038950", "15111922", "15839920"],
    raspuns: "15111922",
    dificultate: "greu"
};

const problema_18: ProblemaType = {
    titlu: "Date robuste",
    enunt_markdown: `
În această problemă ne vom referi la date calendaristice care țin cont de an, lună, zi, ora și minut.

Spunem că o astfel de dată este robustă dacă putem deduce în mod unic la ce dată validă se referă o mulțime de numere, fără să știm corespondența dintre valori și câmpurile datei.

Spre exemplu, având valorile \`{3, 20, 30, 53, 2021}\`, știm că nu poate fi vorba decât de \`30.03.2021 20:53\`, deci această dată este robustă. Pe de altă parte, data \`23.05.2021 20:53\` nu este robustă, deoarece mulțimea \`{5, 20, 23, 53, 2021}\` poate identifica și alte date (de exemplu, \`20.05.2021 23:53\`).

Câte date între \`01.01.2021 00:00\` și \`31.12.2021 23:59\` (inclusiv) sunt robuste?

O dată este validă dacă ora este în intervalul \`[0, 23]\`, minutul în \`[0, 59]\`, luna în \`[1, 12]\`, ziua în intervalul corespunzător lunii respective conform calendarului anului 2021.
`,
    variante: ["27412", "29568", "35797", "37409", "44382", "44516", "46870", "512260", "525600", "535680"],
    raspuns: "44382",
    dificultate: "greu"
};

const problema_19: ProblemaType = {
    titlu: "Secret",
    enunt_markdown: `
Considerăm 7 copii (identificați prin numere de la 1 la 7) și relațiile de prietenie (bidirecționale):

\`\`\`
{(1, 2), (4, 5), (4, 6), (6, 7), (7, 2), (4, 2), (3, 1), (5, 6), (4, 3), (3, 2)}
\`\`\`

În ziua 0, copilul 5 află de la profesoară un secret (că aceasta vrea să organizeze o onomastică pentru copilul 2 la sfârșitul celei de-a 4-a zi).

În fiecare dintre următoarele 4 zile, se întâmplă următorul lucru:

Fiecare copil care știe secretul își alege exact un prieten aleator (echiprobabil din lista lui de prieteni) și îi comunică și lui secretul (se poate întâmpla ca un copil să comunice secretul de mai multe ori aceluiași prieten, în zile diferite).

Astfel, noi copii pot afla secretul, pe care îl vor comunica în continuare începând cu zilele următoare.

Care este probabilitatea pentru copilul 2 să afle secretul cel târziu la sfârșitul celei de-a 4-a zi?

_Alegeți varianta cea mai apropiată de răspunsul real._
`,
    variante: ["0%", "26%", "32%", "44%", "58%", "68%", "76%", "85%", "94%", "100%"],
    raspuns: "68%",
    dificultate: "greu"
};

const problema_20: ProblemaType = {
    titlu: "Angajați",
    enunt_markdown: `
Compania _Grigorescu: Grile, grătare și grilaje_ are 7 angajați. Ziua de mâine are un total de 1440 de minute. Fiecare angajat știe exact câte minute poate lucra mâine. Aceste valori sunt date de șirul:

\`\`\`
480, 360, 333, 1000, 285, 560, 15
\`\`\`

Un angajat care poate lucra \`X\` minute poate alege orice interval continuu de \`X\` minute care începe la minut fix și este inclus complet în cele 1440 de minute ale zilei.

Angajații vor să-și coordoneze alegerile astfel încât oricare doi dintre ei să aibă cel puțin un minut comun în program.

Câte configurații de alegeri satisfac această cerință? Răspunsul este foarte mare, deci suntem interesați de restul acestui număr la împărțirea cu \`1000000007\`.

O configurație \`A\` diferă de o configurație \`B\` dacă există cel puțin un angajat care și-a ales un anumit interval în \`A\` și un interval diferit în \`B\`.
`,
    variante: ["82930407", "195773645", "231919841", "353129100", "371820425", "469187746", "715377483", "67843200", "802170567", "918401827"],
    raspuns: "195773645",
    dificultate: "greu"
};


const editia_2021: EditionType = {
    name: "Ediția 2021",
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
    pdf_etapa_1_link: "./pdfs/2021-etapa-I.pdf",
    pdf_etapa_2_link: [
      "./pdfs/2021-grile.pdf",
      "./pdfs/2021-kscale.pdf",
      "./pdfs/2021-secretariat.pdf",
      "./pdfs/2021-sort.pdf"
    ]
}

export { editia_2021 };