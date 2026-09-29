// Constantes partagées du site.

// Clé publique Web3Forms (elle est visible dans le HTML par conception : c'est un
// identifiant de boîte de réception, pas un secret). Si elle devait être révoquée,
// il suffit d'en régénérer une sur https://web3forms.com. Sans clé, le formulaire de
// contact retombe sur le logiciel de messagerie, et le book reste téléchargeable
// (seule la notification serait perdue). La même clé sert au contact et au book :
// les deux notifications arrivent dans la même boîte.
export const WEB3FORMS_KEY = '79a90915-b326-4592-9a3f-7f9e1dc356e4';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
export const CONTACT_EMAIL = 'contact@avouslaville.fr';

// Book « Réponses à concours ». Nouvelle version : remplacer le PDF dans public/book/
// (même nom de fichier), mettre à jour `pages` et `poids`, et changer `edition` pour
// redemander l'e-mail aux visiteurs qui avaient déjà débloqué l'ancienne.
export const BOOK = {
  url: '/book/a-vous-la-ville-book-reponses-a-concours.pdf',
  nomFichier: 'A-vous-la-ville_Book-concours-2023-2026.pdf',
  pages: 14,
  poids: '7 Mo', // 7 308 225 octets (version du 29/09/2026)
  edition: '2023-2026',
};
