import { EditionType, ProblemaType } from "../types";

const problema_1: ProblemaType = {
  titlu: "Seiful Marei",
  enunt_markdown: `
Mara are un seif care se deschide cu un cod PIN pe care ea l-a uitat.

Ea știe că PIN-ul conține exact \`5\` cifre (de la \`0\` la \`9\`), iar după introducerea lor trebuie apăsată tasta \`0\` pentru confirmare. Ca să-și dea seama de cod, Mara examinează cu atenție seiful și observă amprente numai pe butoanele \`0\`, \`2\`, \`5\` și \`8\`.

Întrucât doar ea a folosit seiful și nu a greșit niciodată codul, deduce că ar putea calcula rapid numărul maxim de combinații pe care să le încerce pentru a deschide seiful. Care este acest număr?`,
  variante: [243, 1024, 390, 150, 240],
  raspuns: 390,
  dificultate: "usor",
};

const problema_2: ProblemaType = {
  titlu: "Pattern-lock",
  enunt_markdown: `
Ștefan și-a cumpărat un telefon de ultimă generație, protejat cu un pattern-lock pe o grilă \`$$3 \\times 3$$\`. Pentru a debloca aparatul, el trebuie să deseneze cu degetul un pattern care îndeplinește simultan următoarele condiții:

- pattern-ul poate porni din orice punct al grilei;
- pattern-ul urmează numai segmente directe între puncte adiacente pe orizontală, verticală sau diagonală (punctele din colțul grilei au trei puncte adiacente, punctul din centru grilei are opt puncte adiacente, iar restul punctelor din grilă au cinci puncte adiacente);
- un segment poate fi parcurs cel mult o dată;
- pattern-ul se încheie în același punct din care a pornit;
- degetul nu se ridică de pe ecran pe tot parcursul desenului.

Câte dintre următoarele 6 exemple de pattern-uri respectă regulile date?

<div style="text-align: center;">
<img src="images/2025-problema2.png" alt="Pattern-uri" style="max-width:500px; width:100%" />
</div>

`,
  variante: [1, 2, 3, 4, 5],
  raspuns: 3,
  dificultate: "usor",
};

const problema_3: ProblemaType = {
  titlu: "Clipboard",
  enunt_markdown: `
Mara a învățat la TIC despre clipboard și despre câteva scurtături utile și dorește să împărtășească tuturor noile ei cunoștințe:

- **Clipboard** - zonă temporară de memorie utilizată de sistemul de operare pentru a stoca date copiate încât acestea să poată fi lipite (pasted) ulterior într-un alt loc;
- **CTRL+C** – combinație de taste care copiază selecția curentă în clipboard.
- **CTRL+V** – combinație de taste care inserează conținutul copiat din clipboard în poziția curentă a cursorului (clipboard-ul nu se golește). După inserare cursorul se mută la sfârșit, după conținutul inserat.
- **CTRL+A** – combinație de taste care selectează tot conținutul dintr-un document, pagină sau câmp activ. Când **CTRL+A** este urmat de **CTRL+C** efectul este următorul: se copiază în clipboard conținutul selectat și cursorul se mută la sfârșit. Când **CTRL+A** este urmat de **CTRL+V** efectul este următorul: se mută cursorul la sfârșit și se copiază în continuare conținutul din clipboard.

Plecând de la textul \`MIUB2025\`, Mara folosește o serie de combinații de taste și obține un nou text. Care este lungimea textului rezultat dacă Mara folosește următoarea succesiune:

\`CTRL+A → CTRL+C → CTRL+V → CTRL+A → CTRL+V → CTRL+A → CTRL+C → CTRL+V → CTRL+V\``,
  variante: [40, 48, 64, 72, 96],
  raspuns: 72,
  dificultate: "usor",
};

const problema_4: ProblemaType = {
  titlu: "Puzzle ABC",
  enunt_markdown: `
Considerăm un joc puzzle în care avem trei litere \`A\`, \`B\`, \`C\` care pot fi puse pe patru poziții (numerotate \`1\`, \`2\`, \`3\`, \`4\` în figura de mai jos).

O configurație inițială conține literele \`A\`, \`B\` și \`C\` puse într-o ordine aleatoare în pozițiile \`1\`, \`2\` și \`3\` și poziția \`4\` din centru goală. Scopul acestui puzzle este ca pornind dintr-o configurația inițială dată să ajungem printr-o serie de mutări (serie eventual vidă) la configurația de referință din figura de mai jos. În această configurație de referință litera \`A\` ocupă poziția \`1\`, litera \`B\` ocupă poziția \`2\`, litera \`C\` ocupă poziția \`3\`, iar poziția \`4\` rămâne goală.

<div style="text-align: center;">
<img src="images/2025-triunghi_ABC_1.png" alt="Puzzle ABC" style="max-width:500px; width:100%" />
</div>

Putem realiza o mutare deplasând o literă de pe poziția ei curentă în poziția goală, dacă există o linie care conectează cele două poziții. Spre exemplu, pornind din configurația \`ACB\` (\`A\` pe poziția \`1\`, \`C\` pe poziția \`2\`, \`B\` pe poziția \`3\`) putem obține configurația de referință prin mutările ilustrate în figura de mai jos.

<div style="text-align: center;">
<img src="images/2025-mutare_ABC_config_finala.png" alt="Mutare ABC" style="max-width:500px; width:100%" />
</div>

De asemenea, din configurația inițială \`ABC\` obținem puzzle-ul dorit fără să fie nevoie să facem vreo mutare. Totuși, nu din orice configurație inițială putem ajunge printr-o serie de mutări la configurația de referință dorită. Considerând toate configurațiile inițiale obținute din permutarea celor trei litere \`A\`, \`B\` și \`C\` din câte aceste configurații nu putem rezolva puzzle-ul?`,
  variante: [0, 1, 2, 3, 4],
  raspuns: 4,
  dificultate: "usor",
};

const problema_5: ProblemaType = {
  titlu: "Furnicuța",
  enunt_markdown: `
După doi ani de pauză, Furnicuța vrea din nou să se deplaseze pe o frunză, de data aceasta reprezentată printr-o matrice pătratică, formată din \`$$n^2$$\` celule. Furnicuța este în colțul din stânga-jos al frunzei și vrea să ajungă în colțul din dreapta-jos al frunzei (evident, fără să iasă de pe frunză). La un pas, ea poate urca de la colțul stânga-jos al unei celule la colțul dreapta-sus al celulei sau poate coborî din colțul stânga-sus al unei celule la colțul dreapta-jos al celulei.

De exemplu, în figura de mai jos traseul \`(a)\` este valid, dar \`(b)\` nu este, deoarece Furnicuța a urcat la un pas din colțul dreapta-jos al unei celule în colțul din stânga-sus.

<div style="text-align: center;">
<img src="images/2025-trasee.png" alt="Trasee" />
</div>

Fie \`$$m$$\` numărul total de trasee valide pe care le poate face Furnicuța pe o frunză cu \`$$10\\times10$$\` celule. Ce valoare are \`$$m \\mod 100$$\` (restul împărțirii lui \`$$m$$\` la \`$$100$$\`)?`,
  variante: [24, 42, 0, 96, 76],
  raspuns: 42,
  dificultate: "usor",
};

const problema_6: ProblemaType = {
  titlu: "Cărți de joc",
  enunt_markdown: `
Alexandru are un pachet cu 52 de cărți de joc ordonat (de la As la Rege, întâi romb, urmat de treflă, inimă roșie și, în final, inimă neagră).

Alexandru extrage 4 carți consecutive din pachet și primele 3 sunt de inimă roșie. Care este probabilitatea ca și a patra carte să fie tot inimă roșie?`,
  variante: ["10/11", "13/25", "4/13", "10/49", "1/13"],
  raspuns: "10/11",
  dificultate: "usor",
};

const problema_7: ProblemaType = {
  titlu: "Scara magică",
  enunt_markdown: `
Scara laterală din Universitatea din București este magică. Conectează cele \`N\` etaje, numerotate de la \`0\` la \`N - 1\`, și are următoarea proprietate:

De la etajul \`i\`, urcând sau coborând pe scară, Matei ajunge magic la etajul \`(i + 6) % N\`, respectiv \`(i - 6) % N\`.

Pentru care din următoarele valori ale lui \`N\` poate Matei ajunge de la etajul \`0\` la etajul \`1\` (urcând și / sau coborând oricât)?`,
  variante: [2022, 2023, 2024, 2025, 2026],
  raspuns: 2023,
  dificultate: "usor",
};

const problema_8: ProblemaType = {
  titlu: "Concurs de biciclete",
  enunt_markdown: `
La un concurs de biciclete, concurenții au un traseu format dintr-o urcare urmată de o coborâre. Distanța parcursă la urcare este egală cu distanța parcursă la coborâre (fiecare reprezentând jumătate din lungimea totală a traseului). Unii cicliști urcă mai repede, dar coboară mai încet, și invers.

Care dintre concurenții de mai jos, pentru care sunt date vitezele medii de urcare și coborâre (în km/h), va câștiga concursul (adică va parcurge traseul complet în cel mai scurt timp)?`,
  variante: [
    "Bogdan vitezomanul: urcă cu 10, coboară cu 100.",
    "Vasilică: urcă cu 12, coboară cu 60.",
    "Emil: urcă cu 20, coboară cu 40.",
    "Eduard: urcă cu 25, coboară cu 30.",
    "Sorinel fricosul: urcă cu 32 și coboară cu 20.",
  ],
  raspuns: "Eduard: urcă cu 25, coboară cu 30.",
  dificultate: "usor",
};

const problema_9: ProblemaType = {
  titlu: "Numărul preferat",
  enunt_markdown: `
Alex îi povestește Andreei despre numărul lui preferat.

Alex: Numărul meu preferat are 3 cifre, același număr de divizori ca răsturnatul lui și suma cifrelor sale este 20.

Andreea: Nu reușesc să ghicesc numărul!

Alex: Produsul cifrelor este 288.

Andreea: Bine, am găsit numărul!

În ce interval se află numarul preferat al lui Alex?`,
  variante: [
    "Între 0 și 199.",
    "Între 200 și 399.",
    "Între 400 și 599.",
    "Între 600 și 799.",
    "Între 800 și 999.",
  ],
  raspuns: "Între 600 și 799.",
  dificultate: "usor",
};

const problema_10: ProblemaType = {
  titlu: "Țevile meșterului Piperel",
  enunt_markdown: `
Meșterul Piperel are 10 țevi cu lungimile de \`7, 5, 3, 2, 3, 10, 7, 4, 9 și 6\` metri pe care trebuie să le îmbine într-o singură țeavă.

De fiecare dată, Piperel poate să îmbine doar două țevi, iar țeava nou obținută va fi așezată lângă celelalte țevi. Îmbinarea a două țevi cu lungimi de \`x\` și \`y\` metri are un cost egal cu \`x + y\` RON și se obține o nouă țeavă cu lungimea \`x + y\` metri.

Știind că țevile se pot îmbina în orice ordine, calculați costul minim necesar pentru a îmbina toate cele 10 țevi într-una singură.`,
  variante: [56, 180, 194, 278, 325],
  raspuns: 180,
  dificultate: "usor",
};

const problema_11: ProblemaType = {
  titlu: "Jocul cu cărți",
  enunt_markdown: `
Cristian și Vlad au un pachet cu \`52\` de cărți de joc și au inventat un joc cu următoarele reguli:

- inițial se aleg \`N\` cărți din cele \`52\` inițiale. Ambii jucători știu valoarea lui \`N\`.
- Cristian e primul care ia cărți din pachetul de \`N\` cărți, apoi jucătorii alternează.
- la fiecare tură jucătorul curent poate lua din pachet exact \`2\`, \`3\` sau \`5\` cărți.
- dacă la începutul unei ture numărul de cărți rămase în pachet este \`0\` sau \`1\`, jucătorul căruia îi este rândul să ia cărți din pachet nu are o opțiune validă și pierde, iar adversarul câștigă.

Amândoi jucătorii joacă optimal, evitând orice decizie care i-ar conduce sigur la pierdere dacă există o alternativă câștigătoare. Se desfășoară cinci jocuri, în care se aleg inițial valorile \`N = 10\`, \`N = 20\`, \`N = 30\`, \`N = 40\`, \`N = 50\`. Câte dintre aceste jocuri îi revin lui Cristian?`,
  variante: [1, 2, 3, 4, 5],
  raspuns: 4,
  dificultate: "mediu",
};

const problema_12: ProblemaType = {
  titlu: "Caietele Mariei",
  enunt_markdown: `
Într-un vis, Mariei i se dezvăluie prețul unui caiet pentru următoarele 10 zile. În fiecare zi, poate cumpăra un caiet dacă nu are niciunul sau vinde caietul dacă are unul. În mod particular, Maria nu poate deține 2 caiete în același timp, dar poate cumpăra și vinde caiete de oricâte ori dorește.

Prețul unui caiet în următoarele 10 zile (în lei) este:

\`\`\`
15, 31, 5, 15, 20, 5, 17, 23, 10, 18
\`\`\`

Care este suma maxima de bani pe care o poate câștiga, știind ca nu deține niciun caiet în prima zi?`,
  variante: [26, 18, 31, 57, 72],
  raspuns: 57,
  dificultate: "mediu",
};

const problema_13: ProblemaType = {
  titlu: "Senzori",
  enunt_markdown: `
Comanda sensors din Linux afișează informații despre diferite componente din calculator, inclusiv temperatura.

De exemplu:

\`\`\`shell
ssd-demultiplexer-5244
Adapter             : AGP adapter
charge_time         : 9 hours
aspect_ratio        : 32:9
radiation           : 0.80 mSv
temperature         : 20 °C
packet_loss         : 7.77 %
luminosity          : 681 lx
size                : 64 MB
acceleration        : 16.85 m/s²
pressure            : 1.53 bar

thermometer-wah-5357
Adapter             : SATA adapter
aspect_ratio        : 4:3
size                : 38 MB
radiation           : 0.47 mSv
temperature         : 91 °C
wireless_channel    : 14
palm_rejection      : No
polling_rate        : 684 Hz
\`\`\`

Matei a rulat comanda și a obținut rezultatul <a href="/data/2025-sensors.txt"  target="_blank">acesta</a>.

Câte componente din calculatorul lui au o temperatură strict mai mare decât 80°C?`,
  variante: [345, 346, 347, 348, 349, 350, 341],
  raspuns: 345,
  dificultate: "mediu",
};

const problema_14: ProblemaType = {
  titlu: "Difuzoarele lui Matei",
  enunt_markdown: `
Ca un om normal, Matei vrea să își conecteze cele \`40\` de difuzoare bluetooth la telefon. Telefonul și fiecare din dispozitive se poate conecta simultan la \`3\` alte dispozitive, și latența fiecărei conexiuni este de exact o milisecundă.

Care este latența minimă pe care o poate obține Matei între telefon si cel mai departat difuzor?`,
  variante: [3, 4, 5, 6, 7, 8, 9],
  raspuns: 4,
  dificultate: "mediu",
};

const problema_15: ProblemaType = {
  titlu: "Numberland",
  enunt_markdown: `
Țara Numberland are o sută de mii de orașe, numerotate \`$$1, 2, \\dots, 100000$$\`.

Între orașul \`$$i$$\` și orașul \`$$j$$\`:
- Dacă \`$$(i - j) \\text{ mod } 5 \\leq 2$$\`, atunci există o autostradă directă, de lungime \`$$|i - j|$$\`.
- În caz contrar, există o cale ferată directă, de lungime \`$$|i - j|$$\`.

Reamintim că \`$$a\\text{ mod } b$$\` este restul împarțirii lui \`$$a$$\` la \`$$b$$\`. De exemplu, \`$$-3\\text{ mod } 5 = 2$$\`.

De exemplu, un tren poate ajunge din orașul \`1\` în orasul \`2\` cu o distanță totală de \`7\`:
- Din orașul \`1\` merge în orașul \`5\` (distanță \`4\`).
- Din orașul \`5\` merge în orașul \`2\` (distanță \`3\`).

Distanța dintre două orașe este distanța minimă cu trenul sau cu mașina între cele două orașe. Care este suma distanțelor dintre toate orașele?`,
  variante: [
    "111113333440000",
    "333333333400000",
    "333343333400000",
    "166671666750000",
    "166666666650000",
    "166666766600000",
    "366666766600000",
  ],
  raspuns: "166666666650000",
  dificultate: "mediu",
};

const problema_16: ProblemaType = {
  titlu: "Numele fetelor",
  enunt_markdown: `
Are tata două fete. Perfecționist, vrea să se asigure că numele celor două fete să fie la aceeași distanță de editare de numele \`elma\`, așadar consideră mai multe opțiuni.

Pentru perechile de nume care conțin \`*\`, cele două nume sunt la aceeași distanță de \`elma\` dacă există cel putin o modalitate de-a înlocui fiecare \`*\` cu un caracter astfel încât cele două cuvinte obținute să fie la aceeași distanța de \`elma\`.

Reamintim că distanța de editare este numărul minim de adăugări, modificări sau ștergeri ale unui caracter pentru a transforma un cuvânt în altul. De exemplu, distanța dintre \`elma\` și \`ema\` este 1 (ștergem \`l\`), iar distanța dintre \`elma\` și \`calma\` este 2 (adăugăm \`c\` și modificăm pe \`e\` în \`a\`).

Câte din perechile de mai jos sunt la aceeași distanță de \`elma\`?

- \`ema\` și \`alma\`
- \`riquelma\` și \`vero\`
- \`dana\` și \`clema\`
- \`fra*a\` și \`rex*na\`
- \`fcsb\` și \`steaua\`
- \`*lmx\` și \`tlma\``,
  variante: [0, 1, 2, 3, 4, 5, 6],
  raspuns: 5,
  dificultate: "mediu",
};

const problema_17: ProblemaType = {
  titlu: "Fusurile orare",
  enunt_markdown: `
În țara Numberland există \`N\` orașe. Fiecare oraș se află în câte un fus orar, toate diferite între ele.

Amuzat, Marcel remarcă: _"Decalajul orar dintre oricare două orașe este un număr prim!"_.

Care este numărul maxim \`N\` de orașe?`,
  variante: [3, 4, 5, 13, 15, 17, 824, 825, 826, 827],
  raspuns: 4,
  dificultate: "greu",
};

const problema_18: ProblemaType = {
  titlu: "Transformări",
  enunt_markdown: `
Dat fiind un număr \`X\`, Matei știe să facă următoarele operații:
- Îl transformă pe \`X\` în \`5 * X\`, SAU
- Îl transformă pe \`X\` în \`X + 1\`, \`X + 2\`, \`X + 3\` sau \`X + 4\`, cu condiția ca ultima cifră a lui \`X\` să fie \`0\` sau \`5\`.

De exemplu, cu o transformare, din \`1\` Matei poate ajunge în \`5\`, și din \`10\` Matei poate ajunge în \`11\`, \`12\`, \`13\`, \`14\` și \`50\`.

Care este numărul minim de transformări pentru a ajunge din \`0\` în \`202520252025\`?`,
  variante: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  raspuns: 28,
  dificultate: "greu",
};

const problema_19: ProblemaType = {
  titlu: "Grafuri",
  enunt_markdown: `
Mihai a generat folosind softul MykeGraphGen un graf neorientat (softul generează grafuri neorientate după definiția din manualul de liceu, adică nu există muchie de la un nod la el însuși sau mai mult de o muchie între două noduri distincte).

Maria îl roagă pe Mihai să îi dea detalii despre graful pe care l-a generat. Singurele informații pe care le primește sunt legate de gradele nodurilor, și anume:

* Gradul minim este \`2\`.
* Gradul maxim este \`2024\`.
* Exact \`3\` noduri au grad \`2\`, exact \`4\` noduri au grad \`3\`, ..., exact \`2025\` noduri au grad \`2024\` (adică exact \`i\` noduri de grad \`i-1\` pentru \`3 ≤ i ≤ 2025\`).

După ce primește aceste informații, Maria face următoarele afirmații:

  * A. Graful generat nu poate fi neconex.
  * B. Graful generat nu poate fi eulerian.
  * C. Graful generat poate avea mai mult de \`2023!\` cicluri hamiltoniene.
  * D. Graful generat are cel mult \`2023\` componente conexe.
  * E. Dacă eliminăm un nod din graful generat obținem un graf cu același număr de componente conexe ca și graful inițial (indiferent de ce muchii are graful generat).
  * F. Graful generat are un număr par de muchii.

Care dintre afirmațiile Mariei sunt adevărate?`,
  variante: [
    "a, b, d",
    "a, c, d",
    "a, b, c, d, e",
    "b, c, d, f",
    "b, d, e, f",
    "b, c, e",
    "b, d",
    "b, d, e",
    "b, c, d, e",
    "b, c, d",
  ],
  raspuns: "b, c, d",
  dificultate: "greu",
};

const problema_20: ProblemaType = {
  titlu: "Limbajul CREaM",
  enunt_markdown: `
Programatorii de pe planeta MIUB (Mutually Invoked Unwinding Blocks) au creat limbajul CREaM (C++ Recursion Enabled and Mandatory) cu următoarele caracteristici:

- singurii operatori sunt:
  * \`+\` (adunare),
  * \`-\` (scădere),
  * \`==\` (egalitate),
  * \`<\` (mai mic strict), și
  * \`if expresie_logică then expresie_1 else expresie_2\` (operatorul condițional: se evaluează \`expresie_logică\` și, dacă aceasta este adevărată, se evaluează \`expresie_1\` și se returnează valoarea sa, altfel se evaluează \`expresie_2\` și se returnează valoarea sa).
- singurul tip de date este \`VLI\` (Very Large Integer), care poate reprezenta numere întregi cu semn având valori arbitrar de mari.
- o funcție trebuie să returneze întotdeauna fie o valoare constantă, fie rezultatul evaluării unei expresii, și se definește astfel:
  \`\`\`c++
  denumire_functie(parametru_1, parametru_2, ...) -> expresie
  \`\`\`
- funcțiile pot fi recursive.

Exemple:

- o funcție care calculează suma a două numere întregi:
    \`\`\`
    suma(x, y) -> x + y
    \`\`\`

- o funcție care calculează maximul dintre două numere întregi:
    \`\`\`
    maxim(x, y) -> if x < y then y else x
    \`\`\`

- o funcție care calculează c.m.m.d.c.-ul a două numere naturale nenule:
    \`\`\`
    cmmdc(x, y) -> if x == y then x else if x < y then cmmdc(x, y - x) else cmmdc(x - y, y)
    \`\`\`

Fie următoarele funcții definite în limbajul CREaM:

\`\`\`
s(x) -> x + 1
p(x) -> x - 1
a(x, y) -> if y == 0 then x else a(s(x), p(y))
d(x, y) -> if y == 0 then x else d(p(x), p(y))
m(x, y) -> if y == 0 then 0 else a(x, m(x, p(y)))
q(x, y) -> if x < y then 0 else a(1, q(d(x, y), y))
r(x, y) -> if x < y then x else r(d(x, y), y)
f(x) -> if x == 1 then 1 else m(x, f(p(x)))
z(x) -> if r(x, 10) == 0 then a(1, z(q(x, 10))) else 0
\`\`\`

Care va fi valoarea obținută în urma apelului \`z(f(10052025))\`?`,
  variante: [
    0,
    8,
    717,
    2091465,
    2513003,
    3150302,
    8866703,
    33027617,
    57154590,
    66021293,
  ],
  raspuns: 2513003,
  dificultate: "greu",
};

const editia_2025: EditionType = {
  name: "Ediția 2025",
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
  pdf_etapa_1_link: "./pdfs/2025-etapa-I.pdf",
  pdf_etapa_2_link: [
    "./pdfs/2025-varcolaci.pdf",
    "./pdfs/2025-strigoi.pdf",
    "./pdfs/2025-ielele.pdf",
    "./pdfs/2025-moroii.pdf",
  ],
  punctaje: [
    50,
    50,
    46,
    46,
    44,
    44,
    43,
    43,
    43,
    42,
    41,
    41,
    40,
    40,
    39,
    39,
    38,
    38,
    38,
    37,
    37,
    37,
    37,
    36,
    36,
    36,
    36,
    36,
    36,
    36,
    36,
    36,
    35,
    35,
    35,
    35,
    34,
    34,
    34,
    34,
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
    31,
    31,
    31,
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
    22,
  ]
};

export { editia_2025 };
