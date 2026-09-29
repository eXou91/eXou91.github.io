// Recommandations transmises par Diane (septembre 2026) : source unique des textes,
// utilisée par l'accueil et par la page Réalisations.
//
// Qui parle : des dirigeantes avec qui Diane a travaillé chez Legendre Immobilier et
// SECIB Immobilier (recommandations de type LinkedIn). Ce ne sont PAS des clientes
// d'À vous la ville : ne jamais les présenter comme des « témoignages clients ».
//
// Règles de saisie :
//  - texte à l'identique de ce qu'a transmis Diane ; seules corrections admises :
//    coquilles et typographie. Toute coupe se marque […] ;
//  - pas de guillemets ni d'apostrophe courbe (’) : le composant Recommandation
//    pose les « » et refuse le build sinon ;
//  - espaces ordinaires : le composant pose lui-même l'espace insécable avant ! ? : ;

export interface Reco {
  quote: string;
  name: string;
  role: string; // fonction, telle que transmise
  org: string;  // entreprise (jamais coupée en fin de ligne)
}

const MURIEL    = { name: 'Muriel Berthois',       role: 'Directrice développement grands projets', org: 'SECIB Immobilier' };
const GRAZIELLA = { name: 'Graziella Inisan',      role: 'Directrice générale',                     org: 'SECIB Immobilier' };
const ALEXANDRA = { name: 'Alexandra Tugot Doris', role: 'Direction marketing & communication',     org: 'Legendre Immobilier' };
// Projet « La cachette des Korrigans » (2026).
const PIERRE_YVES = { name: 'Pierre-Yves Laurent', role: 'Directeur du développement',              org: 'Legendre Immobilier' };

// Accueil : la plus courte en exergue…
export const RECO_EXERGUE: Reco = {
  ...GRAZIELLA,
  quote: 'Une collaboratrice capable de porter des projets ambitieux avec rigueur et créativité.',
};

// … puis les deux longues côte à côte, dans l'ordre du chapô (Legendre puis SECIB).
export const RECOS_COLONNES: Reco[] = [
  {
    ...ALEXANDRA,
    quote: "Curieuse, engagée et dotée d'une grande capacité à faire le lien entre l'opérationnel et les enjeux de marque, Diane se distingue par sa capacité à allier créativité, rigueur et vision stratégique, tout en apportant une solide expertise en immobilier (développement, montage, technique).",
  },
  {
    ...MURIEL,
    quote: "Diane nourrit une veille active, une capacité d'analyse affûtée et une production de qualité, à travers rapports, livrets de R&D et documents stratégiques. Son dynamisme et sa positive attitude sont tellement agréables lorsque l'on travaille en mode projet !",
  },
];

// Réalisations : rattachées à un projet via son champ `recos`.
export const RECOS_PROJETS = {
  // Muriel d'abord : le « ces compétences techniques » de Graziella renvoie à son énumération.
  livretBiosource: [
    {
      ...MURIEL,
      quote: 'Diane a toujours une posture constructive, rigoureuse et tournée vers le dialogue. Elle a le souci du détail qui rend ses livrables de grande qualité tant par le fond que par la forme. Elle est également très engagée sur les thématiques émergentes : réemploi, matériaux bio et géosourcés, nouvelles formes de montage immobilier.',
    },
    {
      ...GRAZIELLA,
      quote: 'Elle a réussi à rendre pédagogiques ces compétences techniques acquises en réalisant des livrables destinés à acculturer les collaborateurs.',
    },
  ],
  rapportRse: [
    {
      ...GRAZIELLA,
      quote: "Une compétence remarquée dans la réalisation de notre rapport d'activité RSE 2024.",
    },
  ],
  korrigans: [
    {
      ...PIERRE_YVES,
      quote: "Diane fait preuve d'une grande créativité et sait identifier et valoriser avec pertinence les éléments différenciants d'un projet. Sa réactivité, associée à un excellent sens des priorités, lui permet de structurer efficacement le travail d'édition et de garantir une remise des offres dans les délais et en toute sérénité.",
    },
  ],
} satisfies Record<string, Reco[]>;
