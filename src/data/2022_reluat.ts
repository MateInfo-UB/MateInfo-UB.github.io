import { EditionType, ProblemaType } from "../types";

const problema_1: ProblemaType = {
    titlu: "Cafea",
    enunt_markdown: `
Matei are 5 cafele. Fiecare cafea are un volum (dat în ml) și o concentrație dată în procente. Matei poate amesteca două cafele. Dacă amestecă o cafea cu \`$$v_1$$\` ml și concentrație \`$$c_1$$\` cu una cu \`$$v_2$$\` ml și concentrație \`$$c_2$$\` atunci el va obține o cafea cu:

- volum \`$$v_1 + v_2$$\`
- concentrație \`$$\\frac{c_1 \\cdot v_1 + c_2 \\cdot v_2}{v_1 + v_2}$$\`

Satisfacția adusă lui Matei de o cafea cu volum \`$$v$$\` și concentrație \`$$c$$\` este \`$$v \\cdot c$$\`.

Știind că Matei are:

 * o cafea de 50 ml și concentrație de 40% (\`c = 0.4\`)
 * o cafea de 100 ml și concentrație de 30% (\`c = 0.3\`)
 * o cafea de 300 ml și concentrație de 10% (\`c = 0.1\`)
 * o cafea de 250 ml și concentrație de 10% (\`c = 0.1\`)
 * o cafea de 500 ml și concentrație de 50% (\`c = 0.5\`)

Care este cea mai mare satisfacție pe care o poate obține Matei amestecând optim cafelele?
`,
    variante: ["10", "355", "250", "40", "450"],
    raspuns: "355",
    dificultate: "usor"
};

const problema_2: ProblemaType = {
    titlu: "Furnicuța",
    enunt_markdown: `
Se consideră o suprafață (matrice) infinită în jos și în dreapta cu liniile numerotate de sus în jos și coloanele de la stânga la dreapta. O furnică explorează această suprafață pornind din colțul stânga sus \`(1,1)\`. Deoarece furnica este prudentă și vrea să rămână mereu aproape de zona explorată deja (și marcată cu feromoni), explorarea se face extinzând succesiv pătratul deja parcurs din colțul stânga sus.

Astfel, la început furnica coboară în celula \`(2,1)\`, apoi merge în dreapta în celula \`(2,2)\` și apoi urcă în celula \`(1,2)\`, completând un pătrat \`$$2 \\times 2$$\`. Pe acesta îl extinde mergând în dreapta în celula \`(1,3)\`, apoi coboară în \`(2,3)\` și \`(3,3)\`, după care se deplasează spre stânga în celulele \`(3,2)\` și \`(3,1)\` completând un pătrat \`$$3 \\times 3$$\`.

Pe acesta îl extinde coborând în \`(4,1)\`, mergând în dreapta până în \`(4,4)\` și apoi urcând în \`(1,4)\`. Continuând în acest fel furnica poate explora o suprafață oricât de mare. Mai jos se pot vedea pașii la care a fost vizitată fiecare celulă până când furnica explorează un pătrat \`$$5 \\times 5$$\`.

| 1  | 4  | 5  | 16 | 17 |
|----|----|----|----|----|
| 2  | 3  | 6  | 15 | 18 |
| 9  | 8  | 7  | 14 | 19 |
| 10 | 11 | 12 | 13 | 20 |
| 25 | 24 | 23 | 22 | 21 |

Pe ce linie și pe ce coloană se va afla furnica la pasul \`100001\`?
`,
    variante: ["(144,316)", "(145,316)", "(145,317)", "(316, 145)", "(317,145)"],
    raspuns: "(145,317)",
    dificultate: "usor"
};

const problema_3: ProblemaType = {
    titlu: "Parolă",
    enunt_markdown: `
Matei are un PC nou, care rulează PearOS. Alex a reușit să îi fure calculatorul și acum încearcă să îi schimbe parola.

Alex știe că Matei are o parolă de lungime 10 caractere formată din litere mici ale alfabetului englez. De asemenea, pentru o experiență mai plăcută a utilizatorului, atunci când o parolă greșită este introdusă, PearOS notifică utilizatorul dacă parola adevărată este mai mică sau mai mare lexicografic decât cea introdusă.

Dacă Alex caută parola în mod optim, atunci numărul de încercări pe care le va efectua este:
`,
    variante: ["cuprins între 0 și 30", "cuprins între 31 și 60", "cuprins între 61 și 90", "cuprins între 91 și 120", "mai mare sau egal cu 121"],
    raspuns: "cuprins între 31 și 60",
    dificultate: "usor"
};

const problema_4: ProblemaType = {
    titlu: "Servere",
    enunt_markdown: `
Alex a încercat să organizeze un concurs online, dar cu câteva minute înainte de începerea sa, și-a dat seama că platforma nu este suficient de puternică pentru a găzdui toți candidații și riscă să pică în timpul probei.

La concurs participă \`1000\` de candidați și Alex dorește să închirieze câteva servere.
Un server este caracterizat de prețul său (cât îl costă pe Alex să închirieze serverul pe durata probei) și capacitatea sa (numărul de concurenți pe care serverul îi poate servi).

Alex are de ales între următoarele opțiuni de servere:

- servere cu prețul \`2\` și capacitate \`2\`;
- servere cu prețul \`5\` și capacitate \`10\`;
- servere cu prețul \`10\` și capacitate \`23\`.

De notat că Alex poate închiria oricate servere, indiferent dacă sunt sau nu de același tip.

Care este costul minim cu care Alex poate închiria servere cu suma capacităților mai mare sau egală cu \`1000\`?
`,
    variante: ["500", "433", "440", "439", "437"],
    raspuns: "437",
    dificultate: "usor"
};

const problema_5: ProblemaType = {
    titlu: "Permutare",
    enunt_markdown: `
Matei are următoarea permutare:
\`\`\`
9, 1, 2, 6, 5, 4, 3, 7, 10, 8
\`\`\`

El are voie să efectueze cel mult \`5\` operații de interschimbare a două elemente alăturate. Care este cea mai mică permutare în ordine lexicografică pe care o poate obține?
`,
    variante: ["1, 2, 5, 6, 9, 4, 3, 7, 10, 8", "1, 2, 4, 6, 9, 5, 3, 7, 10, 8", "1, 2, 6, 5, 4, 9, 3, 7, 10, 8", "1, 2, 4, 9, 6, 5, 3, 7, 10, 8", "1, 2, 4, 9, 5, 6, 3, 7, 10, 8"],
    raspuns: "1, 2, 4, 9, 6, 5, 3, 7, 10, 8",
    dificultate: "usor"
};

const problema_6: ProblemaType = {
    titlu: "Foc",
    enunt_markdown: `
În timpul taberei la munte, Alex are de aprins un foc.
El are la dispoziție o grămadă de lemne de diferite mărimi, identificate prin numere de la 1 la 100. Unicul băț de dimensiune 1 este un chibrit, cu care Alex are de aprins focul.
Deși buturuga mică răstoarnă carul mare, nu poate ca un chibrit să aprindă un buștean. De fapt, o bucată de lemn de dimensiune \`d\` care ia foc la momentul \`t\` aprinde la momentul \`t+1\` toate bucățile neaprinse de dimensiune mai mică sau egală cu \`2*d\`.

Știind că grămada de lemne conține bucăți cu dimensiunile:
\`\`\`
1, 2, 2, 2, 3, 5, 5, 5, 7, 13, 14, 15, 15, 25, 35, 50, 50, 51, 78, 99, 100
\`\`\`

Și că Alex dă foc chibritului în momentul \`t=1\`, care este primul moment de timp când toate lemnele sunt aprinse?
`,
    variante: ["6", "7", "8", "9", "10"],
    raspuns: "9",
    dificultate: "usor"
};

const problema_7: ProblemaType = {
    titlu: "Plantă",
    enunt_markdown: `
Matei și-a cumpărat o plantă nouă, pe care trebuie să o ude zilnic, cu exact un litru de apă.

El are patru sticle, inițial goale, cu volumele de 2, 8, 10 și 20 litri.

Într-o operație, Matei poate să:

- ia o sticlă, pe care o umple complet de la robinet;
- ia două sticle și varsă cât de mult poate din prima în a doua (fie până când prima sticlă se golește, fie până când a doua sticlă se umple);
- ude planta, dacă are o sticlă umplută cu exact 1 litru.

Considerăm afirmațiile următoare:

1. Matei poate uda planta în 6 mutări.
2. Matei poate uda planta folosind numai 3 sticle.
3. Matei poate uda planta fără să folosească mai mult de 22 de litri de apă.
4. Matei nu poate uda planta.

Care din afirmații este adevărată?
`,
    variante: ["afirmațiile 1, 2 și 3", "afirmațiile 1 și 2", "afirmația 4", "afirmațiile 2 și 3", "afirmațiile 1, 2 și 4"],
    raspuns: "afirmația 4",
    dificultate: "usor"
};

const problema_8: ProblemaType = {
    titlu: "Matrice pătratică",
    enunt_markdown: `
Considerăm o matrice pătratică A de dimensiune \`n = 1000\`, având liniile și coloanele indexate de la 1.

Orice element \`A[i][j]\` al matricei este egal cu \`((i+j) **mod** n) + 1\`.

Dacă \`sumlin(i)\` reprezintă suma tuturor elementelor aflate pe linia _i_ și \`sumcol(j)\` reprezintă suma tuturor elementelor aflate pe coloana _j_, atunci valoarea maximă a expresiei:

\`\`\`katex
|sumlin(i)-sumcol(j)|
\`\`\`

Unde \`$$i, j \\in \\{1,2, \\ldots,n\\}$$\`, este egală cu:
`,
    variante: ["0", "500", "1000", "1998", "500500"],
    raspuns: "0",
    dificultate: "usor"
};

const problema_9: ProblemaType = {
    titlu: "Șir infinit",
    enunt_markdown: `
Considerăm șirul infinit:
\`\`\`
1234567891011121314151617181920 ...
\`\`\`

Obținut prin alipirea tuturor cifrelor tuturor numerelor naturale nenule.

Considerând șirul respectiv ca fiind indexat de la 0, atunci cifra aflată pe poziția \`21052022\` este egală cu:
`,
    variante: ["1", "2", "3", "6", "9"],
    raspuns: "1",
    dificultate: "usor"
};

const problema_10: ProblemaType = {
    titlu: "Palindromuri",
    enunt_markdown: `
Uli a descoperit palindromurile și este foarte pasionată de ele, așa că dorește să calculeze câte palindromuri sunt mai mici ca 2022.

Totuși, după o experiență traumatizantă la ora de fizică, Uli nu mai suportă cifra \`4\`, așa că dorește să calculeze toate palindromurile între \`0\` (inclusiv) și \`2022\` care nu conțin cifra \`4\`.

Câte astfel de palindromuri sunt?
`,
    variante: ["99", "100", "101", "102", "103"],
    raspuns: "99",
    dificultate: "usor"
};

const problema_11: ProblemaType = {
    titlu: "Divizori",
    enunt_markdown: `
Câte numere între \`1\` și \`2.000.000.000\` (inclusiv) au exact \`5\` divizori?
`,
    variante: ["0", "12", "34", "47", "156"],
    raspuns: "47",
    dificultate: "mediu"
};

const problema_12: ProblemaType = {
    titlu: "Matrice",
    enunt_markdown: `
Care este suma maximă a elementelor matricei de mai jos, după înmulțirea unor linii și/sau coloane (posibil chiar toate) cu $-1$? Înmulțirea unei linii sau coloane cu $-1$ presupune înmulțirea tuturor elementelor sale cu $-1$.

|  4  | -1 |  6  | 4  | -5 |
|-----|----|-----|----|----|
| -2  |-33 | -12 | 10 | -11|
|  1  | 0  | 3   |-1  | 4  |
|-99  | -98|-40  |34  | 33 |
`,
    variante: ["233", "234", "235", "361", "427"],
    raspuns: "361",
    dificultate: "mediu"
};

const problema_13: ProblemaType = {
    titlu: "Monede",
    enunt_markdown: `
Toată lumea are acasă o cutie cu monede de 10 și 50 bani cu care nu are ce să facă.
Alex a decis să schimbe acest lucru. Începând de acum, el s-a hotărât să plătească orice sumă cât mai exact poate.

Concret, dacă are de plătit la magazin, va încerca:

- să dea cât mai multe monede de 50 de bani poate, fără să depășească suma totală;
- după ce nu mai poate da monede de 50 de bani, încearcă să dea cât mai multe de 10 bani, de asemenea fără a depăși suma totală;
- după aceea plătește suma rămasă cu bancnote de 1 leu.

De notat că mereu casierul dă restul exact, cu numărul minim de monede necesar.
Înțial, Alex are:

- 10 monede de 50 de bani
- 10 monede de 10 bani.

Cu ce monede va rămâne Alex, dacă are de plătit, în ordine, sumele \`4.7, 2.3, 10.1, 3.5\`?
`,
    variante: ["o monedă de 50 de bani și o monedă de 10 bani", "două monede de 50 de bani", "nicio monedă", "4 monede de 10 bani", "o monedă de 50 de bani"],
    raspuns: "4 monede de 10 bani",
    dificultate: "mediu"
};

const problema_14: ProblemaType = {
    titlu: "Acțiuni",
    enunt_markdown: `
Alex se uită la prețul acțiunilor sale pe piață.

În mod inexplicabil, prețul acțiunilor la minutul i este:

\`\`\`katex
(i^3 + 7 \\cdot i^2 + 3 \\cdot i + 84) \\textbf{ mod } 100
\`\`\`

Având prețul acțiunilor pentru minutul 1, 2, ..., 100, Alex își pune următoarea întrebare: dacă ar putea, pe parcursul acestor 100 de minute, să cumpere o acțiune și să o vândă mai târziu, care este profitul maxim pe care ar putea să îl obțină?
`,
    variante: ["0", "34", "55", "73", "96"],
    raspuns: "96",
    dificultate: "mediu"
};

const problema_15: ProblemaType = {
    titlu: "Numere speciale",
    enunt_markdown: `
Fie numerele "speciale":

\`\`\`katex
100, 356, 440, 1137, 1901
\`\`\`

Definim puterea unui număr întreg x ca fiind distanța față de cel mai apropiat număr special, respectiv valoarea minimă a modulului \`|x - s|\`, unde \`s\` este unul dintre numerele speciale.

Câte numere cuprinse între \`1\` și \`2022\` (inclusiv) au puterea un număr prim?
`,
    variante: ["141", "2008", "446", "431", "1577"],
    raspuns: "431",
    dificultate: "mediu"
};

const problema_16: ProblemaType = {
    titlu: "Fotoliu",
    enunt_markdown: `
Bunica lui Matei are un fotoliu. Fotoliul este foarte vechi și din tapițerie au început să iasă arce.

Putem privi fotoliul ca o matrice pătratică de 100 pe 100, având cele 4 colțuri la coordonatele \`(0, 0)\`, \`(0, 100)\`, \`(100, 0)\` și \`(100, 100)\`. Matei a observat 5 arce, fiecare reprezentat prin cele două coordonate \`(X_i, Y_i)\`, care indică pe unde acesta străpunge fotoliul.

Evident, Matei nu vrea să se așeze pe un arc, deci se întreabă care este aria celui mai mare pătrat inclus în tapițerie, cu laturile paralele cu axele de coordonate și în interiorul căruia să nu se afle niciun arc. De observat faptul că arcele au voie să se afle pe laturile și colțurile pătratului.

Arcele sunt caracterizate prin următoarele coordonate:

\`\`\`
(48, 47), (64, 27), (54, 28), (80, 83), (92, 36)
\`\`\`

Care este latura maximă a unui pătrat complet inclus în tapițerie, cu laturile paralele cu axele de coordonate, în interiorul căruia nu se află niciun arc?
`,
    variante: ["23", "33", "43", "53", "63"],
    raspuns: "53",
    dificultate: "mediu"
};

const problema_17: ProblemaType = {
    titlu: "Întrebări",
    enunt_markdown: `
Alex întâlnește doi oameni.
Pe unul dintre cei doi îl cheamă Matei. Alex știe acest lucru, dar nu știe pe care dintre ei îl cheamă Matei.
De asemenea, unul dintre cei doi spune mereu adevărul și celălalt minte mereu. Alex știe și el lucrul acesta, dar, din nou, nu știe cine minte și cine spune adevărul.

Alex are în minte 5 întrebări pe care vrea să le folosească pentru a afla dacă Matei minte sau nu:

1. Matei minte?
2. Ești Matei?
3. Ce ar spune celălalt dacă l-ași întreba dacă Matei minte?
4. Ce ai spune dacă te-aș întreba dacă Matei minte?
5. Este adevărat că \`1+1=2\`?

Alex dorește să pună exact o întrebare dintre cele 5 pentru a-l identifica pe Matei. Pe care dintre cele 5 întrebări le poate folosi?
`,
    variante: ["întrebarea 1", "întrebările 1 și 5", "întrebarea 2", "întrebările 1 și 4", "întrebările 2, 3 și 4"],
    raspuns: "întrebările 2, 3 și 4",
    dificultate: "greu"
};

const problema_18: ProblemaType = {
    titlu: "Funcție",
    enunt_markdown: `
Care va fi output-ul următoarei secvențe de cod la apelul funcției \`g()\`?

\`\`\`C++
long long f(long long a, long long b)
{
    if (a == 0)
        return 0;
    else if (a & 1)
        return (b + f(a ^ 1, b)) % 137;
    else
        return f(a >> 1, b << 1);
}

void g()
{
    long long suma = 0;
    for (long long i = 0; i < 2LL * 1000LL * 1000LL * 1000LL; i++) {
        suma += f(i, i);
        suma %= 137;
    }

    cout << "Suma este " << suma << '\\n';
}
\`\`\`
`,
    variante: ["Suma este 0", "Suma este 1", "Suma este 4", "Suma este 8", "Suma este 16", "Suma este 32", "Suma este 64", "Suma este 128", "Suma este 256", "Suma este 512"],
    raspuns: "Suma este 4",
    dificultate: "greu"
};

const problema_19: ProblemaType = {
    titlu: "Turnulețe",
    enunt_markdown: `
Ema are 22 de cuburi astfel: 7 verzi, 8 albastre și 7 roșii.

Ea ar vrea să vadă câte turnulețe poate forma cu ele fără ca un cub verde să fie plasat imediat peste un cub roșu.

În câte moduri diferite poate construi turnulețe de acest tip folosind toate cuburile? Două moduri sunt diferite dacă șirurile de culori ce încep de la primul cub de jos sunt diferite.
`,
    variante: ["23519245", "1097450640", "41409225", "37268302", "10803075", "194276877", "298507535", "107567859", "251890065", "462058202"],
    raspuns: "41409225",
    dificultate: "greu"
};

const problema_20: ProblemaType = {
    titlu: "Sosii",
    enunt_markdown: `
Doi oameni se numesc _sosii_ dacă seamănă mult unul cu altul.
Evident, relația de _a fi sosie_ este una de echivalență deoarece:

- \`A\` este mereu sosie cu \`A\`;
- dacă \`A\` este sosie cu \`B\`, atunci și \`B\` este sosie cu \`A\`;
- dacă \`A\` este sosie cu \`B\` și \`B\` cu \`C\`, atunci și \`A\` este sosie cu \`C\`.

Numim o pereche \`(A, B)\` _minunată_ dacă îndeplinește simultan următoarele două condiții:

- \`A < B\`
- \`A\` și \`B\` sunt sosii.

Într-un grup de \`N\` oameni numerotați de la \`1\` la \`N\`, Matei a observat că sunt exact \`2022\` de perechi minunate.

Care este cea mai mică valoare a numărului \`N\` pentru care pot exista exact \`2022\` de perechi minunate?
`,
    variante: ["65", "66", "67", "68", "69", "70", "71", "72", "73", "74"],
    raspuns: "68",
    dificultate: "greu"
};

const editia_2022_bis: EditionType = {
    name: "Ediția 2022 Bis",
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
    pdf_etapa_1_link: "./pdfs/2022-etapa-I-B.pdf",
    pdf_etapa_2_link: [
    ]
}

export { editia_2022_bis };