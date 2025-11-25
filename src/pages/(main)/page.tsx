export const HomePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-sm text-gray-500">Établissement d'Enseignement Supérieur Privé</span>
            <br />
            <span className="text-xs text-gray-400">Ministère de l'Enseignement Supérieur - N° 069 3127 P</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            École Supérieure de
            <span className="text-blue-600"> Finance Internationale</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Maîtrisez les marchés financiers globaux, la gestion des risques
            internationaux et devenez expert en finance dans un environnement
            multiculturel.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Formation diplômante Master 2 - 120 ECTS | Campus Lyon Gerland
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Commencer maintenant
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Découvrir les cours
            </button>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Finance Globale</h3>
            <p className="text-gray-600">
              Programmes conçus par des experts en finance internationale
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Accréditations</h3>
            <p className="text-gray-600">
              Diplômes reconnus par les institutions financières mondiales
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Analytics Financières
            </h3>
            <p className="text-gray-600">
              Tableaux de bord personnalisés pour suivre votre progression
            </p>
          </div>
        </div>

        {/* Footer avec informations légales */}
        <footer className="mt-32 border-t pt-16 pb-8">
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
              <p>École Supérieure de Finance Internationale</p>
              <p>58 Avenue Tony Garnier</p>
              <p>69007 Lyon, France</p>
              <p>Tél: +33 (0)4 72 76 85 20</p>
              <p>Email: contact@esfi-lyon.fr</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Informations Légales</h4>
              <p>Établissement d'enseignement supérieur privé</p>
              <p>Déclaration d'activité: 84 69 16 46 269</p>
              <p>SIRET: 523 456 789 00015</p>
              <p>Code APE: 8542Z</p>
              <p>Conforme RGPD - Certifié Qualiopi</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Accréditations</h4>
              <p>• Ministère de l'Enseignement Supérieur</p>
              <p>• RNCP - Répertoire National des Certifications</p>
              <p>• AACSB International</p>
              <p>• Conférence des Grandes Écoles (CGE)</p>
              <p>• EUR-ACE (Engineering Accreditation)</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-xs text-gray-500">
            <p>© 2024 École Supérieure de Finance Internationale. Tous droits réservés.</p>
            <p className="mt-2">
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-blue-600">Politique de confidentialité</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-blue-600">Conditions d'utilisation</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-blue-600">Accessibilité</a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-blue-600">Plan du site</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
