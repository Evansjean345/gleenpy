import React from "react";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

/* Items value */

const sectionItemsAction = [
  {
    id: "1",
    duration: "3 saisons",
    title: "How to sell Drugs Online (Fast)",
    url: "https://www.dailymotion.com/embed/video/x8a3g0f",
    overview:
      "How to Sell Drugs Online (Fast) est une série dramatique policière allemande créée par Philipp Käßbohrer et Matthias Murmann. La série est basée sur des événements réels et suit le gang fictif MyDrugs alors qu'ils tentent d'accroître leur contrôle sur le marché de la drogue dans le but de trouver l'amour.",
    litle: "how to sell drugs Online",
  },
  {
    id: "2",
    duration: "1 tome",
    title: "La cité de Dieu",
    overview:
      "À Rio de Janeiro, un jeune homme et son meilleur ami forment un gang qui passe du vol au meurtre pour finir dans le trafic de drogue.",
    url: "https://www.dailymotion.com/embed/video/x8a2a5c",
    litle: "La cité de Dieu",
  },
  {
    id: "3",
    duration: "6 saisons",
    to: "#",
    title: "Lucifer",
    overview: `Lassé et mécontent de sa position de "Seigneur des Enfers", Lucifer Morningstar démissionne et abandonne le trône de son royaume pour la bouillonnante et non moins impure Los Angeles. Dans la Cité des anges, l'ex maître diabolique est le patron d'un nightclub baptisé "Lux".`,
    url: "https://www.dailymotion.com/embed/video/x86ery1",
    litle: "lucifer",
  },
  {
    id: "4",
    duration: "1 saison",
    to: "#",
    title: "DayBreak",
    url: "https://www.dailymotion.com/embed/video/x7md4qq",
    overview:
      "Dans une ville post-apocalyptique, Glendale, Josh, un lycéen de 17 ans part à la recherche de sa petite amie disparue, Sam. Il est rejoint par un groupe de marginaux délinquants. Josh et ses acolytes tentent de rester en vie en se confrontant à des gangs de Ghoulies, des zombies.",
    litle: "daybreak",
  },
  {
    id: "5",
    duration: "5 saisons",
    to: "#",
    title: "Breaking Bad",
    url: "https://www.dailymotion.com/embed/video/x2kkjq4",
    overview:
      "La série se concentre sur Walter White, un professeur de chimie surqualifié et père de famille, qui, ayant appris qu'il est atteint d'un cancer du poumon en phase terminale, sombre dans le crime pour assurer l'avenir financier de sa famille.",
    litle: "breaking bad",
  },
  {
    id: "6",
    duration: "6 saisons",
    to: "#",
    title: "Ricky et Morty",
    url: "https://www.dailymotion.com/embed/video/x8a2mn3",
    overview:
      " La série suit les mésaventures de Rick Sanchez, un scientifique cynique et fantasque, et de son petit-fils, Morty Smith, perturbé et facilement influençable, qui partagent leur temps entre une vie domestique et des aventures interdimensionnelles.",
    litle: "ricky et morty",
  },
  {
    id: "7",
    duration: "1 Tome",
    to: "#",
    title: "La Plateforme",
    url: "https://www.dailymotion.com/embed/video/x7xom4f",
    overview:
      "Dans le futur, des prisonniers sont détenus dans des cellules verticales. Ceux qui logent dans les cellules supérieures sont nourris, tandis que ceux des cellules inférieures meurent de faim. Goreng, un détenu fraîchement débarqué, va se battre pour changer le système.",
    litle: "la plateforme",
  },
  {
    id: "8",
    duration: "1 Tome",
    to: "#",
    title: "Spider-man: No-Way-Home",
    url: "https://www.dailymotion.com/embed/video/x85vu03",
    overview:
      "Avec l'identité de Spiderman désormais révélée, celui-ci est démasqué et n'est plus en mesure de séparer sa vie normale en tant que Peter Parker des enjeux élevés d'être un superhéros. Lorsque Peter demande de l'aide au docteur Strange, les enjeux deviennent encore plus dangereux, l'obligeant à découvrir ce que signifie vraiment être Spiderman.",
    litle: "spiderman",
  },
  {
    id: "9",
    duration: "1 tome",
    to: "#",
    title: "Uncharted",
    url: "https://www.dailymotion.com/embed/video/x8dvwyb",
    overview:
      "Le chasseur de trésors Victor Sully Sullivan recrute Nathan Drake pour l'aider à récupérer une fortune vieille de 500 ans amassée par l'explorateur Ferdinand Magellan. Ce qui commence comme un cambriolage devient rapidement une course de globe-trotters pour atteindre le prix avant que l'impitoyable Santiago Moncada ne puisse mettre la main dessus.",
    litle: " Uncharted",
  },
];
const sectionItemsDrame = [
  {
    id: "1",
    duration: "5 saisons",
    to: "#",
    title: "Elite",
    overview:
      "Lorsque trois ados issus de la classe ouvrière accèdent à une école élitiste d'Espagne, le fossé qui les sépare des élèves fortunés conduit à la pire des tragédies. Regardez autant que vous voulez. Jaime Lorente (Nano), María Pedraza (Marina) et Miguel Herrán (Christian) ont aussi joué dans <<La casa de papel>>.",
    url: "https://www.dailymotion.com/embed/video/x8a2ne3",
    litle: "elite",
  },
  {
    id: "2",
    duration: "2 saisons",
    to: "#",
    title: "Euphoria",
    overview:
      "Produite par Drake, Euphoria explore le quotidien d'un groupe de lycéens américains qui noient leurs problèmes dans le sexe, l'alcool et la drogue. Zendaya y incarne Rue, une toxicomane qui retombe dans ses travers à peine sortie de cure de désintoxication.",
    url: "https://www.dailymotion.com/embed/video/x86hh87",
    litle: "euphoria",
  },
  {
    id: "3",
    duration: "5 saisons",
    to: "#",
    title: "Prison Break",
    overview:
      "Un jeune ingénieur, Michael Scofield, se fait emprisonner volontairement au pénitencier de Foxriver. Son objectif : aider son frère, Lincoln Burrows, condamné à mort suite à un meurtre qu'il n'a pas commis, à s'évader de prison. Pour cela, Scofield s'est fait tatouer sur le corps les plans du pénitencier.",
    url: "https://www.dailymotion.com/embed/video/x53uapz",
    litle: "prison break",
  },
  {
    id: "4",
    duration: "3 saisons",
    to: "#",
    title: "You",
    overview:
      "Joe Goldberg est un brillant jeune homme qui tient une librairie à New York. Un jour, il tombe amoureux d'une de ses clientes, Guinevere. La jeune femme, qui aspire à devenir écrivain, l'obsède complètement. Joe va l'espionner sur Internet pour savoir en permanence où elle se trouve et avec qui.",
    url: "https://www.dailymotion.com/embed/video/x8a2luo",
    litle: "you",
  },
  {
    id: "5",
    duration: "1 saison",
    to: "#",
    title: "Mon ami Adèle - Behind Her eyes",
    overview:
      "Une mère célibataire commence une liaison adultérine avec un homme marié. La jeune femme se noue d'amitié avec l'épouse bafouée. Plus elle fréquente l'un et l'autre, plus elle se demande les terribles secrets que ces deux-là peuvent cacher derrière l'apparence d'un mariage heureux et réussi.",
    url: "https://www.dailymotion.com/embed/video/x7ziial",
    litle: "Mon ami Adèle",
  },
  {
    id: "6",
    duration: "3 saisons",
    to: "#",
    title: "Too Hot To Handle",
    overview:
      "Prémisse. Animé par une assistante virtuelle en forme de cône nommée <<Lana>>, l'émission tourne autour d'un groupe d'adultes - qui se livrent tous principalement à des aventures insignifiantes et sont incapables de nouer des relations durables - qui sont placés ensemble dans une maison pendant quatre semaines .",
    url: "https://www.dailymotion.com/embed/video/x86ft2l",
    litle: "Too Hot To Handle",
  },
  {
    id: "7",
    duration: "9 saisons",
    to: "#",
    title: "How i meet your mother",
    overview:
      " En 2030, Ted Mosby raconte à ses deux enfants comment il a rencontré leur mère. Il se remémore ses jeunes années, notamment dès 2005, où il apprend que son meilleur ami Marshall Eriksen va demander à Lily Aldrin de l'épouser. Ted se demande quand il rencontrera sa future épouse.",
    url: "https://www.dailymotion.com/embed/video/xeu23o",
    litle: "How i meet your mother",
  },
  {
    id: "8",
    duration: "3 saisons",
    to: "#",
    title: "Sex education",
    overview:
      "Otis, un adolescent puceau qui vit avec sa mère sexologue, est entraîné par la rebelle Maeve dans la création d'une cellule de thérapie sexuelle clandestine au sein de leur lycée.",
    url: "https://www.dailymotion.com/embed/video/x86r93c",
    litle: "sex education",
  },
  {
    id: "8",
    duration: "1 tome",
    to: "#",
    title: "BlacKkKlansman : J'ai infiltré le Ku Klux Klan",
    overview:
      "Au début des années 1970, plusieurs émeutes raciales éclatent dans les grandes villes des États-Unis. Ron Stallworth devient le premier officier noir américain du Colorado Springs Police Department, mais son arrivée est accueillie avec scepticisme, voire avec une franche hostilité. Prenant son courage à deux mains, Stallworth va tenter de faire bouger les lignes. Il se fixe alors une mission des plus périlleuses : infiltrer le Ku Klux Klan pour en dénoncer les exactions.",
    url: "https://www.dailymotion.com/embed/video/x88uhne",
    litle: "BlacKkKlansman ",
  },
];
const sectionItemsFantasy = [
  {
    id: "1",
    duration: "7 saisons",
    to: "#",
    title: "The 100",
    url: "https://www.dailymotion.com/embed/video/x8a1qlr",
    overview:
      "Après une apocalypse nucléaire causée par l'Homme lors d'une troisième Guerre Mondiale, les 318 survivants recensés se réfugient dans des stations spatiales et parviennent à y vivre et à se reproduire, atteignant le nombre de 4000. Mais 97 ans plus tard, le vaisseau mère, l'Arche, est en piteux état.",
    litle: "the 100",
  },
  {
    id: "2",
    duration: "8 saisons",
    to: "#",
    title: "Game of Thrones",
    url: "https://www.dailymotion.com/embed/video/x75ilbr",
    overview:
      "Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.",
    litle: "game of throne",
  },
  {
    id: "3",
    duration: "2 saisons",
    to: "#",
    title: "The Witcher",
    url: "https://www.dailymotion.com/embed/video/x8a1rll",
    overview:
      "Après avoir survécu à la Chasse Sauvage et sauvé le monde d'un hiver éternel, Geralt de Riv poursuit la formation de sa protégée, Ciri, au rude métier de Sorceleur. Sur la piste d'une strige terrorisant les environs de Novigrad, l'apprentie chasseuse de monstres cherche à en savoir toujours plus sur la créature.",
    litle: "the witcher",
  },
  {
    id: "4",
    duration: "2 Tomes",
    to: "#",
    title: "Hellboy",
    url: "https://www.dailymotion.com/embed/video/x73oi9l",
    overview:
      "Hellboy est de retour, et il est en feu. Le légendaire superhéros mi-homme mi-démon devra combattre un trio de géants déchainés dans les plaines de l'Angleterre. C'est là qu'il y découvrira la Reine de Sang, Nimue, une ancienne sorcière ressuscitée en quête de vengeance. Pris entre les griffes du surnaturel et du monde humain, Hellboy devra arrêter Nimue tout en évitant la fin du monde.",
    litle: "hellboy",
  },
  {
    id: "5",
    duration: "1 tome",
    to: "#",
    title: "Mortal Kombat",
    url: "https://www.dailymotion.com/embed/video/x7zebln",
    overview: ` Dans "Mortal Kombat", le combattant de MMA Cole Young, habitué à prendre des coups pour de l'argent, ignore son histoire - ou pourquoi l'empereur Shang Tsung d'Outworld a envoyé son meilleur guerrier, Sub-Zero, un Cryomancien d'un autre monde, pour traquer Cole.`,
    litle: "mortal kombat",
  },
  {
    id: "6",
    duration: "5 saisons",
    to: "#",
    title: "Misfits",
    url: "https://www.dailymotion.com/embed/video/xjpe9g",
    overview: `Nathan Young, Simon Bellamy, Kelly Bailey, Curtis Donovan et Alisha Daniels sont cinq jeunes adultes ayant été condamnés, pour des raisons diverses, à des travaux d'intérêt général (TIG). Alors qu'ils effectuent leur premier jour, non sans provoquer Tony Morecombe, leur superviseur, un violent orage éclate.`,
    litle: "misfits",
  },
  {
    id: "7",
    duration: "3 tomes",
    to: "#",
    title: "Deadpool",
    url: "https://www.dailymotion.com/embed/video/x34hrwj",
    overview: `Wade Wilson, un ancien militaire des forces spéciales, est devenu mercenaire. Après avoir subi une expérimentation hors-norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, il va traquer l'homme qui a bien failli anéantir sa vie.`,
    litle: "deadpool",
  },
  {
    id: "8",
    duration: "9 tomes",
    to: "#",
    title: "Fast & Furious",
    url: "https://www.dailymotion.com/embed/video/x81tze4",
    overview: `La nuit tombée, Dominic Toretto règne sur les rues de Los Angeles à la tête d'une équipe de fidèles qui partagent son goût du risque, sa passion de la vitesse et son culte des voitures de sport lancées à plus de 250 km/h dans des rodéos urbains d'une rare violence. Ses journées sont consacrées à bricoler et à relooker des modèles haut de gamme, à les rendre toujours plus performants et plus voyants, et à organiser des joutes illicites.`,
    litle: "fast & furious",
  },
  {
    id: "9",
    duration: "1 tome",
    to: "#",
    title: "Bright",
    url: "https://www.dailymotion.com/embed/video/x6cn19f",
    overview: `Dans un monde contemporain alternatif, humains, orcs, elfes et fées coexistent depuis le début des temps. Confrontés aux ténèbres lors d'une patrouille nocturne de routine à Los Angeles, ils tombent sur un objet puissant et ils voient leur avenir et leur monde se métamorphoser à jamais.`,
    litle: "bright",
  },
];
const sectionItemsHorreur = [
  {
    id: "1",
    duration: "2 tomes",
    to: "#",
    title: "La Nonne",
    url: "https://www.dailymotion.com/embed/video/x8a1npi",
    overview: `Lorsqu'une jeune nonne se suicide dans une abbaye roumaine, la stupéfaction est totale dans l'Église catholique. Le Vatican missionne aussitôt un prêtre au passé trouble et une novice pour mener l'enquête. Risquant leur vie, les deux ecclésiastiques doivent affronter une force maléfique qui bouscule leur foi et menace de détruire leur âme. Bientôt, l'abbaye est en proie à une lutte sans merci entre les vivants et les damnés.`,
    litle: "la nonne",
  },
  {
    id: "2",
    duration: "3 tomes",
    to: "#",
    title: "The human centipede",
    url: "https://www.dailymotion.com/embed/video/x3rkixi",
    overview: `Un savant fou a dans l'idée de créer un mille-pattes humain. Pour ce faire, il doit trouver des cobayes. Par chance, deux jeunes américaines en voyage à travers l'Europe tombent en panne en plein milieu d'une forêt. Elles sont ravies de trouver refuge chez le Dr Heiter.`,
    litle: "the human centipede",
  },
  {
    id: "3",
    duration: "1 tome",
    to: "#",
    title: "Truth or Dare",
    url: "https://www.dailymotion.com/embed/video/x6fxai6",
    overview: `Un simple jeu innocent d'Action ou Vérité entre amis se transforme en cauchemar sanglant quand quelqu'un – ou quelque chose – commence à punir ceux qui mentent – ou refusent de jouer. `,
    litle: "truth or dare",
  },
  {
    id: "4",
    duration: "1 tome",
    to: "#",
    title: "Annabelle",
    url: "https://www.dailymotion.com/embed/video/x25hszu",
    overview: `Été 1969, John et Mia, qui attendent leur premier enfant, viennent d'emménager dans une maison à Santa Monica. John, qui ne sait comment choyer son épouse, lui a offert une poupée ancienne. La nuit suivante, ils sont sauvagement attaqués par un couple lié à une secte satanique. La police leur porte secours rapidement, abattant l'homme tandis que sa compagne se tranche la gorge, laissant couler quelques gouttes de sang dans l'oeil de la poupée.`,
    litle: "annabelle",
  },
  {
    id: "5",
    duration: "1 tome",
    to: "#",
    title: "La malediction de la dame blanche",
    url: "https://www.dailymotion.com/embed/video/x8a2dx0",
    overview: `Quand elle était en vie, elle a noyé ses enfants dans un accès de folle jalousie, puis, dévastée par le chagrin, elle s'est jetée dans le fleuve; désormais, ses larmes sont devenues éternelles; elles sont même mortelles et tous ceux qui entendent ses appels sinistres la nuit sont maudits; tapie dans l'ombre, la Llorona s'attaque aux enfants, cherchant désespérément à remplacer les siens; au fil des siècles, elle est devenue de plus en plus prédatrice et ses méthodes de plus en plus terrifiantes.`,
    litle: "la malediction de la dame blanche",
  },
  {
    id: "6",
    duration: "1 tome",
    to: "#",
    title: "L'Exorcisme de Hannah Grace",
    url: "https://www.dailymotion.com/embed/video/x6w4qxt",
    overview: `Un épouvantable exorcisme échappe à tout contrôle, coûtant la vie à une jeune femme. Quelques mois plus tard, Megan Reed, employée de la morgue, reçoit un cadavre lourdement défiguré durant une garde de nuit. Enfermée dans les couloirs du sous-sol, ses terribles hallucinations la poussent à penser que le corps est possédé par une force démoniaque.`,
    litle: "l'Exorcisme de hannah grace",
  },
  {
    id: "7",
    duration: "1 tome",
    to: "#",
    title: "The Silence",
    url: "https://www.dailymotion.com/embed/video/x8a380n",
    overview: `De terrifiantes créatures ont envahi la Terre, chassant leurs proies humaines au bruit. Pour leur échapper, les Andrews se réfugient dans un lieu isolé, mais découvrent un culte sinistre qui cherche à exploiter les sens suraiguisés de leur fille Ally, sourde depuis ses 13 ans.`,
    litle: "the silence",
  },
  {
    id: "8",
    duration: "1 tome",
    to: "#",
    title: "Jennifer Body",
    url: "https://www.dailymotion.com/embed/video/xpyda0",
    overview: `Lorsque le malin prend possession d'elle, Jennifer, une étudiante séduisante, ne voit pas d'un bon oeil les garçons qui n'ont pas tenté leur chance avec elle. Tandis que la maléfique Jennifer satisfait son appétit pour la chair humaine avec la population masculine du collège, son amie Needy apprend ce qu'il se passe et se dévoue pour faire cesser le carnage.`,
    litle: "jennifer body",
  },
  {
    id: " 9",
    duration: "1 tome",
    to: "#",
    title: "La chapelle du diable",
    url: "https://www.dailymotion.com/embed/video/x83udnu",
    overview: `L'histoire d'Alice, une jeune fille malentendante qui, après une supposée manifestation de la Vierge Marie, a regagné de manière inexplicable la capacité d'entendre, de parler et de soigner les malades. Tandis que le bouche-à-oreille fait effet et que des gens de près ou de loin affluent pour témoigner de ses miracles, un journaliste déshonoré décide, dans l'espoir de faire revivre sa carrière, de visiter le petit village de la Nouvelle-Angleterre afin d'enquêter sur la sensation.`,
    litle: "la chapelle du diable",
  },
];
/* Items for a seaseon */

const itemsAction = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {sectionItemsAction.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <h2 class="text-xl font-medium title-font text-slate-100 mt-5">
            {item.title}
          </h2>
          <p class="text-base leading-relaxed mt-2 text-white">
            {item.overview}
          </p>
          <Link to={item.to} class="text-red-700 inline-flex items-center mt-3">
            {item.litle}
          </Link>
        </div>
      );
    })}
  </div>
);
const itemsDrame = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {sectionItemsDrame.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <h2 class="text-xl font-medium title-font text-slate-100 mt-5">
            {item.title}
          </h2>
          <p class="text-base leading-relaxed mt-2 text-white">
            {item.overview}
          </p>
          <Link to={item.to} class="text-red-700 inline-flex items-center mt-3">
            {item.litle}
          </Link>
        </div>
      );
    })}
  </div>
);
const itemsFantasy = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {sectionItemsFantasy.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <h2 class="text-xl font-medium title-font text-slate-100 mt-5">
            {item.title}
          </h2>
          <p class="text-base leading-relaxed mt-2 text-white">
            {item.overview}
          </p>
          <Link to={item.to} class="text-red-700 inline-flex items-center mt-3">
            {item.litle}
          </Link>
        </div>
      );
    })}
  </div>
);
const itemsHorreur = (
  <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
    {sectionItemsHorreur.map((item) => {
      return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div class="rounded-lg h-64 overflow-hidden">
            <iframe
              class="rounded-lg h-64 w-full overflow-hidden"
              src={item.url}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;"
              allowfullscreen="true"
            ></iframe>
          </div>
          <h2 class="text-xl font-medium title-font text-slate-100 mt-5">
            {item.title}
          </h2>
          <p class="text-base leading-relaxed mt-2 text-white">
            {item.overview}
          </p>
          <Link to={item.to} class="text-red-700 inline-flex items-center mt-3">
            {item.litle}
          </Link>
        </div>
      );
    })}
  </div>
);

/* Tabs Value */

const data = [
  {
    label: "action",
    value: "action",
    desc: itemsAction,
  },
  {
    label: "drame",
    value: "drame",
    desc: itemsDrame,
  },
  {
    label: "fantasy",
    value: "sf",
    desc: itemsFantasy,
  },
  {
    label: "Horreur",
    value: "anime",
    desc: itemsHorreur,
  },
];
export default function TabsMovies() {
  return (
    <section>
      <Tabs id="custom-animation" value="html" className="bg-black">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab
              className="text-red-700 text-xl rounded-lg  hover:bg-white active:bg-red-700 active:text-white hover:text-red-700  hover:text-2xl transition-all"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}
