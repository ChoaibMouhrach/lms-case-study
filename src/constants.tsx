export const courses = [
  {
    id: "course_001",
    title: "Finance Internationale Avancée",
    subtitle: "Gestion financière dans un environnement global",
    description:
      "Maîtrisez les techniques de financement international, la gestion des risques de change et l'analyse des marchés financiers globaux pour optimiser les performances financières.",
    instructor: {
      name: "Dr. Sarah El Alaoui",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829",
    },
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    duration: "15h 30m",
    difficulty: "Intermédiaire",
    categories: ["Finance", "Commerce International", "Gestion Financière"],
    level: 2,
    studentsEnrolled: 34,
    rating: 4.7,
    tags: ["finance", "international", "investissement", "devises"],
    updatedAt: "2024-12-01T10:00:00Z",
    isFree: false,
    price: { amount: 0, currency: "CAD" },
    progress: 65,
    chapters: [
      {
        id: "chapter_001_001",
        title: "Introduction au Droit International des Affaires",
        description:
          "Les sources et principes fondamentaux du droit commercial international",
        order: 1,
        lessons: [
          {
            completed: true,
            id: "lesson_001_001_001",
            title: "Les sources du droit international",
            description:
              "Traités, conventions et coutumes dans le commerce international",
            duration: "45m",
            order: 1,
            isCompleted: true,
            learningMaterials: [
              {
                id: "material_001_001_001_001",
                type: "video",
                title: "Introduction aux sources juridiques",
                url: "/material-1.mp4",
                duration: "5m",
              },
              {
                id: "material_001_001_001_002",
                type: "document",
                title: "Convention de Vienne sur la vente internationale",
                url: "https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/19-09951_e_ebook.pdf",
              },
              {
                id: "material_001_001_001_003",
                type: "document",
                title: "Guide UNCITRAL - Commission du commerce international",
                url: "https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/12-57491-guide-to-uncitral-e.pdf",
              },
            ],
          },
          {
            completed: false,
            id: "lesson_001_001_002",
            title: "Organisations internationales et commerce",
            description: "OMC, CNUCED et autres acteurs du commerce mondial",
            duration: "40m",
            order: 2,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_001_001_002_001",
                type: "video",
                title: "Le rôle de l'OMC",
                url: "https://embed.kaltura.com/p/1234567/sp/123456700/embedIframeJs/uiconf_id/12345678/partner_id/1234567",
                duration: "30m",
              },
              {
                id: "material_001_001_002_002",
                type: "document",
                title:
                  "UNCITRAL - Commission sur le droit commercial international",
                url: "https://uncitral.un.org/sites/uncitral.un.org/files/media-documents/uncitral/en/uncitral-e.pdf",
              },
            ],
          },
          {
            completed: false,
            id: "lesson_001_001_003",
            title: "Juridictions et résolution des conflits",
            description: "Arbitrage international et tribunaux compétents",
            duration: "50m",
            order: 3,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_001_001_003_001",
                type: "video",
                title: "L'arbitrage commercial international",
                url: "https://player.vimeo.com/video/234567890",
                duration: "40m",
              },
              {
                id: "material_001_001_003_002",
                type: "document",
                title: "Règlement CCI d'arbitrage",
                url: "https://iccwbo.org/content/uploads/sites/3/2021/01/icc-2021-arbitration-rules-2021-french-version.pdf",
              },
            ],
          },
        ],
      },
      {
        id: "chapter_001_002",
        title: "Contrats Internationaux",
        description:
          "Formation, exécution et contentieux des contrats internationaux",
        order: 2,
        lessons: [
          {
            completed: false,
            id: "lesson_001_002_001",
            title: "Formation des contrats internationaux",
            description: "Négociation, rédaction et clauses essentielles",
            duration: "55m",
            order: 1,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_001_002_001_001",
                type: "video",
                title: "Négociation contractuelle internationale",
                url: "https://mediaspace.demo.kaltura.com/p/123/sp/12300/embedIframeJs/uiconf_id/23456/partner_id/123",
                duration: "45m",
              },
              {
                id: "material_001_002_001_002",
                type: "document",
                title: "Modèles de contrats internationaux",
                url: "https://www.uncitral.org/pdf/english/texts/arbitration/ml-arb/07-86998_Ebook.pdf",
              },
            ],
          },
          {
            completed: false,
            id: "lesson_001_002_002",
            title: "Garanties et sûretés internationales",
            description: "Lettres de crédit, garanties bancaires et cautions",
            duration: "45m",
            order: 2,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_001_002_002_001",
                type: "video",
                title: "Les lettres de crédit documentaires",
                url: "https://player.vimeo.com/video/345678901",
                duration: "35m",
              },
              {
                id: "material_001_002_002_002",
                type: "document",
                title: "RUU 600 - Règles uniformes",
                url: "https://iccwbo.org/content/uploads/sites/3/2016/10/ucp-600-english.pdf",
              },
            ],
          },
        ],
      },
      {
        id: "chapter_001_003",
        title: "Transport et Logistique Internationale",
        description:
          "Aspects juridiques du transport international de marchandises",
        order: 3,
        lessons: [
          {
            completed: false,
            id: "lesson_001_003_001",
            title: "Transport maritime international",
            description: "Connaissement, avaries et responsabilités",
            duration: "50m",
            order: 1,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_001_003_001_001",
                type: "video",
                title: "Le connaissement maritime",
                url: "https://mediaspace.demo.kaltura.com/p/456/sp/45600/embedIframeJs/uiconf_id/34567/partner_id/456",
                duration: "40m",
              },
              {
                id: "material_001_003_001_002",
                type: "document",
                title: "Règles de La Haye-Visby",
                url: "https://www.admiraltylawguide.com/conven/haguevisbyrules1979.pdf",
              },
            ],
          },
          {
            completed: false,
            id: "lesson_001_003_002",
            title: "Transport aérien et terrestre",
            description: "CMR, Convention de Varsovie et réglementations",
            duration: "40m",
            order: 2,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_001_003_002_001",
                type: "video",
                title: "Transport multimodal",
                url: "https://player.vimeo.com/video/456789012",
                duration: "30m",
              },
              {
                id: "material_001_003_002_002",
                type: "document",
                title: "Convention CMR",
                url: "https://www.unece.org/fileadmin/DAM/trans/conventn/cmr_e.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "course_002",
    title: "Management de l'Innovation",
    subtitle:
      "Stratégies et outils pour innover dans un contexte international",
    description:
      "Comprendre les enjeux de l'innovation dans les organisations internationales et maîtriser les outils de management de l'innovation.",
    instructor: {
      name: "Prof. Michel Bergeron",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    thumbnail: "https://images.unsplash.com/photo-1553484771-371a605b060b",
    duration: "12h 45m",
    difficulty: "Avancé",
    categories: ["Management", "Innovation", "Stratégie"],
    level: 3,
    studentsEnrolled: 28,
    rating: 4.8,
    tags: ["innovation", "management", "stratégie", "r&d"],
    updatedAt: "2024-11-28T14:30:00Z",
    isFree: false,
    price: { amount: 0, currency: "CAD" },
    progress: 35,
    chapters: [
      {
        id: "chapter_002_001",
        title: "Fondements de l'Innovation",
        description: "Théories et modèles de l'innovation",
        order: 1,
        lessons: [
          {
            completed: true,
            id: "lesson_002_001_001",
            title: "Types et classifications de l'innovation",
            description: "Innovation incrémentale, radicale et de rupture",
            duration: "35m",
            order: 1,
            isCompleted: true,
            learningMaterials: [
              {
                id: "material_002_001_001_001",
                type: "video",
                title: "Panorama de l'innovation",
                url: "https://mediaspace.demo.kaltura.com/p/789/sp/78900/embedIframeJs/uiconf_id/45678/partner_id/789",
                duration: "25m",
              },
              {
                id: "material_002_001_001_002",
                type: "document",
                title: "Manuel d'Oslo - 4ème édition",
                url: "https://www.oecd-ilibrary.org/docserver/9789264304604-en.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "course_003",
    title: "Finance Internationale",
    subtitle: "Marchés financiers et gestion des risques internationaux",
    description:
      "Analyse approfondie des marchés financiers internationaux, des instruments de change et de la gestion des risques financiers.",
    instructor: {
      name: "Dr. Marie-Claire Dubois",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    duration: "18h 20m",
    difficulty: "Avancé",
    categories: ["Finance", "International", "Risques"],
    level: 3,
    studentsEnrolled: 31,
    rating: 4.9,
    tags: ["finance", "change", "risques", "marchés"],
    updatedAt: "2024-12-05T09:15:00Z",
    isFree: false,
    price: { amount: 0, currency: "CAD" },
    progress: 20,
    chapters: [
      {
        id: "chapter_003_001",
        title: "Marchés des Changes",
        description: "Fonctionnement et mécanismes du marché des devises",
        order: 1,
        lessons: [
          {
            completed: false,
            id: "lesson_003_001_001",
            title: "Structure du marché des changes",
            description: "Acteurs, volumes et organisation du Forex",
            duration: "50m",
            order: 1,
            isCompleted: false,
            learningMaterials: [
              {
                id: "material_003_001_001_001",
                type: "video",
                title: "Le marché Forex mondial",
                url: "https://player.vimeo.com/video/567890123",
                duration: "40m",
              },
              {
                id: "material_003_001_001_002",
                type: "document",
                title: "Enquête BRI sur le Forex 2022",
                url: "https://www.bis.org/statistics/rpfx22.pdf",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "course_004",
    title: "Analyse de Données des Systèmes d'Information",
    subtitle: "Big Data et aide à la décision en finance internationale",
    description:
      "Utilisation des outils d'analyse de données pour optimiser les décisions financières et commerciales internationales.",
    instructor: {
      name: "Prof. Jean-Philippe Roy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    duration: "14h 10m",
    difficulty: "Intermédiaire",
    categories: ["Data", "Analyse", "Systèmes"],
    level: 2,
    studentsEnrolled: 29,
    rating: 4.6,
    tags: ["data", "analyse", "python", "excel"],
    updatedAt: "2024-11-30T16:45:00Z",
    isFree: false,
    price: { amount: 0, currency: "CAD" },
    progress: 45,
    chapters: [
      {
        id: "chapter_004_001",
        title: "Introduction à l'Analyse de Données",
        description: "Concepts fondamentaux et outils",
        order: 1,
        lessons: [
          {
            completed: true,
            id: "lesson_004_001_001",
            title: "Statistiques descriptives et exploratoires",
            description: "Mesures de tendance centrale et de dispersion",
            duration: "40m",
            order: 1,
            isCompleted: true,
            learningMaterials: [
              {
                id: "material_004_001_001_001",
                type: "video",
                title: "Statistiques pour la finance",
                url: "https://mediaspace.demo.kaltura.com/p/101112/sp/10111200/embedIframeJs/uiconf_id/56789/partner_id/101112",
                duration: "30m",
              },
              {
                id: "material_004_001_001_002",
                type: "document",
                title: "Guide Excel avancé",
                url: "https://support.microsoft.com/fr-fr/office/fonctions-excel-par-cat%C3%A9gorie-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "course_005",
    title: "Droit des Sociétés",
    subtitle: "Structures juridiques des entreprises internationales",
    description:
      "Étude comparative des formes sociales et gouvernance d'entreprise dans un contexte international.",
    instructor: {
      name: "Me. Robert Gagnon",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    },
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    duration: "11h 35m",
    difficulty: "Intermédiaire",
    categories: ["Droit", "Sociétés", "Gouvernance"],
    level: 2,
    studentsEnrolled: 32,
    rating: 4.5,
    tags: ["droit", "sociétés", "gouvernance", "compliance"],
    updatedAt: "2024-12-02T11:20:00Z",
    isFree: false,
    price: { amount: 0, currency: "CAD" },
    progress: 55,
    chapters: [
      {
        id: "chapter_005_001",
        title: "Formes Juridiques des Sociétés",
        description: "SA, SARL, SAS et autres structures",
        order: 1,
        lessons: [
          {
            completed: true,
            id: "lesson_005_001_001",
            title: "La société anonyme",
            description: "Caractéristiques et fonctionnement de la SA",
            duration: "35m",
            order: 1,
            isCompleted: true,
            learningMaterials: [
              {
                id: "material_005_001_001_001",
                type: "video",
                title: "Création d'une SA",
                url: "https://player.vimeo.com/video/678901234",
                duration: "25m",
              },
              {
                id: "material_005_001_001_002",
                type: "document",
                title: "Code des sociétés - extraits",
                url: "https://www.legifrance.gouv.fr/codes/texte_lc/LEGITEXT000005634379",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "course_006",
    title: "Techniques de Communication: Anglais et Français",
    subtitle:
      "Communication professionnelle bilingue en contexte international",
    description:
      "Développement des compétences en communication écrite et orale en français et en anglais pour les affaires internationales.",
    instructor: {
      name: "Prof. Sarah Mitchell-Tremblay",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    },
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    duration: "10h 45m",
    difficulty: "Débutant",
    categories: ["Communication", "Langues", "Business"],
    level: 1,
    studentsEnrolled: 35,
    rating: 4.4,
    tags: ["communication", "anglais", "français", "business"],
    updatedAt: "2024-11-25T13:30:00Z",
    isFree: false,
    price: { amount: 0, currency: "CAD" },
    progress: 70,
    chapters: [
      {
        id: "chapter_006_001",
        title: "Communication Écrite Professionnelle",
        description: "Rédaction de documents d'affaires",
        order: 1,
        lessons: [
          {
            completed: true,
            id: "lesson_006_001_001",
            title: "Correspondance commerciale bilingue",
            description: "Lettres, e-mails et mémos en français et anglais",
            duration: "30m",
            order: 1,
            isCompleted: true,
            learningMaterials: [
              {
                id: "material_006_001_001_001",
                type: "video",
                title: "Rédaction efficace bilingue",
                url: "https://mediaspace.demo.kaltura.com/p/131415/sp/13141500/embedIframeJs/uiconf_id/67890/partner_id/131415",
                duration: "25m",
              },
              {
                id: "material_006_001_001_002",
                type: "document",
                title: "Guide de style business",
                url: "https://www.btb.termiumplus.gc.ca/publications/guides-fra.html",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const quizObject = {
  id: "quiz_droit_international_001",
  title: "Quiz : Les sources du droit international",
  description:
    "Évaluez vos connaissances sur les sources et principes fondamentaux du droit international des affaires",
  totalQuestions: 10,
  timeLimit: 25,
  passingScore: 70,
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      question:
        "Quelle est la source principale du droit international des affaires ?",
      options: [
        {
          id: "a",
          text: "Les traités et conventions internationales",
          isCorrect: true,
        },
        { id: "b", text: "La jurisprudence nationale", isCorrect: false },
        { id: "c", text: "Les usages commerciaux locaux", isCorrect: false },
        { id: "d", text: "Les décisions administratives", isCorrect: false },
      ],
      pieces: 2,
      explanation:
        "Les traités et conventions internationales constituent la source principale du droit international des affaires, notamment la Convention de Vienne sur la vente internationale de marchandises.",
    },
    {
      id: "q2",
      type: "true-false",
      question:
        "La Convention de Vienne de 1980 s'applique automatiquement à tous les contrats de vente internationale.",
      correctAnswer: false,
      pieces: 1,
      explanation:
        "La Convention de Vienne ne s'applique qu'aux contrats entre parties ayant leur établissement dans des États contractants, sauf exclusion expresse.",
    },
    {
      id: "q3",
      type: "multiple-choice",
      question: "Que signifient les Incoterms ?",
      options: [
        { id: "a", text: "International Commercial Terms", isCorrect: true },
        { id: "b", text: "Internal Corporate Terms", isCorrect: false },
        {
          id: "c",
          text: "International Contract Terminology",
          isCorrect: false,
        },
        { id: "d", text: "Interstate Commerce Terms", isCorrect: false },
      ],
      pieces: 2,
      explanation:
        "Les Incoterms (International Commercial Terms) sont des règles officielles publiées par la CCI pour l'interprétation des termes commerciaux.",
    },
    {
      id: "q4",
      type: "multiple-select",
      question:
        "Quels sont les organes principaux de l'OMC ? (Sélectionnez toutes les bonnes réponses)",
      options: [
        { id: "a", text: "Conférence ministérielle", isCorrect: true },
        { id: "b", text: "Conseil général", isCorrect: true },
        {
          id: "c",
          text: "Organe de règlement des différends",
          isCorrect: true,
        },
        { id: "d", text: "Cour internationale de Justice", isCorrect: false },
        { id: "e", text: "Conseil de sécurité", isCorrect: false },
      ],
      pieces: 3,
      explanation:
        "L'OMC comprend la Conférence ministérielle, le Conseil général et l'Organe de règlement des différends. La CIJ et le Conseil de sécurité appartiennent à l'ONU.",
    },
    {
      id: "q5",
      type: "short-answer",
      question:
        "Citez deux avantages de l'arbitrage commercial international par rapport aux tribunaux étatiques.",
      sampleAnswer: "Neutralité du forum et confidentialité de la procédure",
      pieces: 3,
      explanation:
        "L'arbitrage offre notamment la neutralité, la confidentialité, l'expertise des arbitres et la reconnaissance internationale des sentences.",
    },
    {
      id: "q6",
      type: "multiple-choice",
      question:
        "Quel est l'Incoterm qui transfère le maximum de responsabilités à l'acheteur ?",
      options: [
        { id: "a", text: "EXW (Ex Works)", isCorrect: true },
        { id: "b", text: "FOB (Free On Board)", isCorrect: false },
        {
          id: "c",
          text: "CIF (Cost, Insurance and Freight)",
          isCorrect: false,
        },
        { id: "d", text: "DDP (Delivered Duty Paid)", isCorrect: false },
      ],
      pieces: 2,
      explanation:
        "L'Incoterm EXW transfère le maximum de responsabilités à l'acheteur qui doit organiser et payer le transport dès l'usine du vendeur.",
    },
    {
      id: "q7",
      type: "true-false",
      question:
        "Les sentences arbitrales internationales sont automatiquement exécutoires dans tous les pays.",
      correctAnswer: false,
      pieces: 1,
      explanation:
        "Les sentences ne sont exécutoires que dans les pays signataires de la Convention de New York de 1958, moyennant certaines conditions.",
    },
    {
      id: "q8",
      type: "multiple-choice",
      question:
        "Quelle institution gère le règlement d'arbitrage le plus utilisé au monde ?",
      options: [
        {
          id: "a",
          text: "CCI (Chambre de Commerce Internationale)",
          isCorrect: true,
        },
        {
          id: "b",
          text: "LCIA (London Court of International Arbitration)",
          isCorrect: false,
        },
        {
          id: "c",
          text: "AAA (American Arbitration Association)",
          isCorrect: false,
        },
        {
          id: "d",
          text: "CMAP (Centre de Médiation et d'Arbitrage de Paris)",
          isCorrect: false,
        },
      ],
      pieces: 2,
      explanation:
        "Le règlement d'arbitrage de la CCI est le plus utilisé mondialement, avec plus de 1000 affaires par an.",
    },
    {
      id: "q9",
      type: "ordering",
      question:
        "Classez ces étapes de la procédure arbitrale dans l'ordre chronologique :",
      items: [
        { id: "1", text: "Constitution du tribunal arbitral", correctOrder: 2 },
        { id: "2", text: "Dépôt de la demande d'arbitrage", correctOrder: 1 },
        { id: "3", text: "Rendu de la sentence", correctOrder: 4 },
        { id: "4", text: "Échange des écritures", correctOrder: 3 },
      ],
      pieces: 2,
      explanation:
        "La procédure commence par le dépôt de la demande, puis la constitution du tribunal, l'échange des écritures et enfin le rendu de la sentence.",
    },
    {
      id: "q10",
      type: "short-answer",
      question: "Expliquez brièvement ce qu'est la lex mercatoria.",
      sampleAnswer:
        "Un ensemble de règles et usages commerciaux internationaux développés par la pratique des commerçants",
      pieces: 3,
      explanation:
        "La lex mercatoria désigne l'ensemble des règles et principes juridiques issus de la pratique du commerce international.",
    },
  ],
};
