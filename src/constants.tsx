export const courses = [
  {
    id: "course_001",
    courseCode: "FIN301",
    title: "Finance Internationale Avancée",
    subtitle: "Gestion financière dans un environnement global",
    description:
      "Maîtrisez les techniques de financement international, la gestion des risques de change et l'analyse des marchés financiers globaux pour optimiser les performances financières.",
    instructor: {
      name: "Dr. Sarah El Alaoui",
      title: "Professeure des Universités",
      credentials: "Doctorat en Finance, ESCP Business School",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829",
    },
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "15h 30m",
    ects: 6,
    semester: "Semestre 1",
    prerequisite: "FIN201 - Finance d'Entreprise",
    difficulty: "Intermédiaire",
    categories: ["Finance", "Commerce International", "Gestion Financière"],
    level: 2,
    studentsEnrolled: 34,
    rating: 4.7,
    evaluationMethod: "Contrôle continu (40%) + Examen final (60%)",
    tags: ["finance", "international", "investissement", "devises"],
    updatedAt: "2024-12-01T10:00:00Z",
    isFree: false,
    price: { amount: 0, currency: "EUR" },
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
    courseCode: "MGT305",
    title: "Management de l'Innovation",
    subtitle:
      "Stratégies et outils pour innover dans un contexte international",
    description:
      "Comprendre les enjeux de l'innovation dans les organisations internationales et maîtriser les outils de management de l'innovation.",
    instructor: {
      name: "Prof. Michel Bergeron",
      title: "Maître de Conférences HDR",
      credentials: "Doctorat en Sciences de Gestion, HEC Paris",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "12h 45m",
    ects: 4,
    semester: "Semestre 2",
    prerequisite: "MGT201 - Management Général",
    difficulty: "Avancé",
    categories: ["Management", "Innovation", "Stratégie"],
    level: 3,
    studentsEnrolled: 28,
    rating: 4.8,
    evaluationMethod: "Projet de groupe (50%) + Présentation orale (30%) + QCM (20%)",
    tags: ["innovation", "management", "stratégie", "r&d"],
    updatedAt: "2024-11-28T14:30:00Z",
    isFree: false,
    price: { amount: 0, currency: "EUR" },
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
    courseCode: "FIN302",
    title: "Finance Internationale",
    subtitle: "Marchés financiers et gestion des risques internationaux",
    description:
      "Analyse approfondie des marchés financiers internationaux, des instruments de change et de la gestion des risques financiers.",
    instructor: {
      name: "Dr. Marie-Claire Dubois",
      title: "Professeure Associée",
      credentials: "Doctorat en Finance Quantitative, Université Paris-Dauphine",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "18h 20m",
    ects: 5,
    semester: "Semestre 1",
    prerequisite: "FIN301 - Finance Internationale Avancée",
    difficulty: "Avancé",
    categories: ["Finance", "International", "Risques"],
    level: 3,
    studentsEnrolled: 31,
    rating: 4.9,
    evaluationMethod: "Examen écrit (70%) + Étude de cas (30%)",
    tags: ["finance", "change", "risques", "marchés"],
    updatedAt: "2024-12-05T09:15:00Z",
    isFree: false,
    price: { amount: 0, currency: "EUR" },
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
    courseCode: "INF204",
    title: "Analyse de Données des Systèmes d'Information",
    subtitle: "Big Data et aide à la décision en finance internationale",
    description:
      "Utilisation des outils d'analyse de données pour optimiser les décisions financières et commerciales internationales.",
    instructor: {
      name: "Prof. Jean-Philippe Roy",
      title: "Professeur des Universités",
      credentials: "Doctorat en Informatique, École Polytechnique",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "14h 10m",
    ects: 4,
    semester: "Semestre 2",
    prerequisite: "INF101 - Informatique de Base",
    difficulty: "Intermédiaire",
    categories: ["Data", "Analyse", "Systèmes"],
    level: 2,
    studentsEnrolled: 29,
    rating: 4.6,
    evaluationMethod: "TP notés (40%) + Projet (40%) + Examen final (20%)",
    tags: ["data", "analyse", "python", "excel"],
    updatedAt: "2024-11-30T16:45:00Z",
    isFree: false,
    price: { amount: 0, currency: "EUR" },
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
    courseCode: "DRT203",
    title: "Droit des Sociétés",
    subtitle: "Structures juridiques des entreprises internationales",
    description:
      "Étude comparative des formes sociales et gouvernance d'entreprise dans un contexte international.",
    instructor: {
      name: "Me. Robert Gagnon",
      title: "Maître de Conférences",
      credentials: "Doctorat en Droit des Affaires, Université Sorbonne",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    },
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "11h 35m",
    ects: 3,
    semester: "Semestre 1",
    prerequisite: "DRT101 - Introduction au Droit",
    difficulty: "Intermédiaire",
    categories: ["Droit", "Sociétés", "Gouvernance"],
    level: 2,
    studentsEnrolled: 32,
    rating: 4.5,
    evaluationMethod: "Cas pratiques (50%) + Examen oral (50%)",
    tags: ["droit", "sociétés", "gouvernance", "compliance"],
    updatedAt: "2024-12-02T11:20:00Z",
    isFree: false,
    price: { amount: 0, currency: "EUR" },
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
    courseCode: "LAN102",
    title: "Techniques de Communication: Anglais et Français",
    subtitle:
      "Communication professionnelle bilingue en contexte international",
    description:
      "Développement des compétences en communication écrite et orale en français et en anglais pour les affaires internationales.",
    instructor: {
      name: "Prof. Sarah Mitchell-Tremblay",
      title: "Professeure Certifiée",
      credentials: "Master en Langues Appliquées, INALCO Paris",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    },
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    duration: "10h 45m",
    ects: 2,
    semester: "Semestre 1",
    prerequisite: "Niveau B2 en anglais requis",
    difficulty: "Débutant",
    categories: ["Communication", "Langues", "Business"],
    level: 1,
    studentsEnrolled: 35,
    rating: 4.4,
    evaluationMethod: "Oral (60%) + Écrit (40%)",
    tags: ["communication", "anglais", "français", "business"],
    updatedAt: "2024-11-25T13:30:00Z",
    isFree: false,
    price: { amount: 0, currency: "EUR" },
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

// Admin Data
export const adminStats = {
  totalStudents: 186,
  activeCourses: 6,
  totalInstructors: 8,
  completionRate: 72,
  monthlyGrowth: 15.2,
  avgRating: 4.6,
  totalECTS: 120,
  graduationRate: 89
};

export const studentsData = [
  {
    id: "student_001",
    name: "Alex Martin",
    email: "alex.martin@esfi-lyon.fr",
    studentId: "2024-FI-001",
    program: "Master 2 Finance Internationale",
    semester: "Semestre 1",
    enrollmentDate: "2024-09-15",
    status: "active",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    totalECTS: 18,
    completedECTS: 12,
    gpa: 15.2,
    coursesEnrolled: ["course_001", "course_002", "course_003", "course_006"],
    lastLogin: "2024-12-10T14:30:00Z",
    coins: 147
  },
  {
    id: "student_002",
    name: "Amina El-Rashid",
    email: "amina.rashid@esfi-lyon.fr",
    studentId: "2024-FI-002",
    program: "Master 2 Finance Internationale",
    semester: "Semestre 1",
    enrollmentDate: "2024-09-15",
    status: "active",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    totalECTS: 20,
    completedECTS: 16,
    gpa: 16.8,
    coursesEnrolled: ["course_001", "course_002", "course_003", "course_004", "course_005"],
    lastLogin: "2024-12-10T16:20:00Z",
    coins: 189
  },
  {
    id: "student_003",
    name: "Chen Wei-Ming",
    email: "chen.weiming@esfi-lyon.fr",
    studentId: "2024-FI-003",
    program: "Master 2 Finance Internationale",
    semester: "Semestre 1",
    enrollmentDate: "2024-09-15",
    status: "active",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    totalECTS: 16,
    completedECTS: 14,
    gpa: 14.9,
    coursesEnrolled: ["course_001", "course_003", "course_004", "course_006"],
    lastLogin: "2024-12-09T10:45:00Z",
    coins: 156
  },
  {
    id: "student_004",
    name: "Sofia Petrova",
    email: "sofia.petrova@esfi-lyon.fr",
    studentId: "2024-FI-004",
    program: "Master 2 Finance Internationale",
    semester: "Semestre 1",
    enrollmentDate: "2024-09-15",
    status: "active",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    totalECTS: 18,
    completedECTS: 10,
    gpa: 13.7,
    coursesEnrolled: ["course_001", "course_002", "course_005", "course_006"],
    lastLogin: "2024-12-08T09:15:00Z",
    coins: 132
  }
];

export const instructorsData = [
  {
    id: "instructor_001",
    name: "Dr. Sarah El Alaoui",
    email: "sarah.elalaoui@esfi-lyon.fr",
    title: "Professeure des Universités",
    credentials: "Doctorat en Finance, ESCP Business School",
    department: "Finance Internationale",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829",
    coursesAssigned: ["course_001"],
    studentsCount: 34,
    rating: 4.7,
    experience: "15 ans",
    phone: "+33 4 72 76 85 21"
  },
  {
    id: "instructor_002",
    name: "Prof. Michel Bergeron",
    email: "michel.bergeron@esfi-lyon.fr",
    title: "Maître de Conférences HDR",
    credentials: "Doctorat en Sciences de Gestion, HEC Paris",
    department: "Management et Innovation",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    coursesAssigned: ["course_002"],
    studentsCount: 28,
    rating: 4.8,
    experience: "12 ans",
    phone: "+33 4 72 76 85 22"
  }
];

export const recentActivities = [
  {
    id: "activity_001",
    type: "enrollment",
    studentName: "Pierre Dubois",
    action: "s'est inscrit au cours FIN301",
    timestamp: "2024-12-10T15:30:00Z",
    courseId: "course_001"
  },
  {
    id: "activity_002",
    type: "completion",
    studentName: "Alex Martin",
    action: "a terminé le chapitre 'Introduction au Droit International'",
    timestamp: "2024-12-10T14:20:00Z",
    courseId: "course_001"
  },
  {
    id: "activity_003",
    type: "quiz",
    studentName: "Amina El-Rashid",
    action: "a obtenu 18/20 au quiz de Finance Internationale",
    timestamp: "2024-12-10T11:45:00Z",
    courseId: "course_001"
  },
  {
    id: "activity_004",
    type: "login",
    studentName: "Chen Wei-Ming",
    action: "s'est connecté à la plateforme",
    timestamp: "2024-12-10T09:15:00Z"
  }
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
