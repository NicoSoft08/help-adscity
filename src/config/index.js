import { CreditCard, FileText, Megaphone, ShieldCheck, Store, User } from 'lucide-react';

const homeURL = process.env.REACT_APP_HOME_URL;
const authURL = process.env.REACT_APP_AUTH_URL;
const accountURL = process.env.REACT_APP_ACCOUNT_URL;

export const textBlueWithoutBg = require('../assets/icons/blue-no-bg.png');
export const letterWhiteBgBlue = require('../assets/icons/logo-letter-bg.png');
export const letterBlueBgWhite = require('../assets/icons/logo-letter-light.png');
export const textWhiteBgBlue = require('../assets/icons/logo-text-bg.png');
export const textBlueBgWhite = require('../assets/icons/logo-text-light.png');
export const textWhiteWithoutBg = require('../assets/icons/white-no-bg.png');


export const helpCategories = [
  {
    title: 'Compte',
    description: 'Gérer votre profil, vos informations et préférences.',
    icon: <User size={32} />,
    link: 'account'
  },
  {
    title: 'Annonces',
    description: 'Créer, modifier, marquer comme vendu ou supprimer vos annonces.',
    icon: <FileText size={32} />,
    link: 'posts'
  },
  {
    title: 'Boutiques',
    description: 'Créer et gérer vos boutiques pour présenter vos produits et services.',
    icon: <Store size={32} />,
    link: 'stores'
  },
  {
    title: 'Paiements',
    description: 'Comprendre les méthodes de paiement et facturation.',
    icon: <CreditCard size={32} />,
    link: 'payments'
  },
  {
    title: 'Publicités',
    description: 'Découvrez comment promouvoir votre entreprise sur AdsCity.',
    icon: <Megaphone size={32} />,
    link: 'pubs'
  },
  {
    title: 'Sécurité',
    description: 'Protégez votre compte et signalez les activités suspectes.',
    icon: <ShieldCheck size={32} />,
    link: 'safety'
  },
];

export const helpArticles = [
  {
    id: 1,
    title: 'Comment modifier mes informations personnelles ?',
    slug: 'modifier-infos-personnelles',
    category: { slug: 'account', title: 'Compte' },
    content: (
      <>
        <p>Pour modifier vos informations personnelles:</p>
        <ul>
          <li>
            Première Etape
            <ol>
              <li>Rendez-vous sur la page d'accueil AdsCity ou accédez via le <strong><a href={`${homeURL}`}>adscity.net</a></strong> Cliquez sur l'icône ou votre photo de profile en haut à droite de la page d'accueil et accédez à votre espace personnel. Si vous etes connecté à votre compte, vous pouvez directement y accéder à partir du lien suivant <strong><a href={`${authURL}/signin?redirect=${encodeURIComponent(accountURL)}`}>Mon Compte</a></strong> </li>
            </ol>
          </li>
          <li>Deuxième Etape</li>
        </ul>
        <p>1. Rendez-vous sur la page d'accueil AdsCity ou accédez via le lien suivant <a href={`${homeURL}`}>adscity.net</a> Cliquez sur l'icône ou votre photo de profile en haut à droite de la page d'accueil et accédez à votre espace personnel.</p>
        <p>2. Cliquez sur l'onglet avec l'icône utilisateur</p>
        <p>3. Cliquez sur l'icône en forme de crayon situé à coté de l'élément à modifier.</p>
        <p>4. Une fenêtre ou boite de dialogue s'ouvrira et vous pourrez modifier l'information souhaitée et cliquez sur le bouton <strong>Valider</strong>.</p>
      </>
    )
  },
  {
    id: 2,
    title: 'Créer une annonce sur AdsCity',
    slug: 'creer-une-annonce',
    category: { slug: 'posts', title: 'Annonces' },
    content: (
      <>
        <p>Voici comment publier une annonce :</p>
        <p><strong>Important</strong>: pour publier une annonce sur la plateforme, vous devez etre inscris et connecté à votre compte. Si vous n'avez pas de compte, vous devez en créer. <a href="/account/comment-s-inscrire">En savoir plus</a></p>
        <ul>
          <li>Connectez-vous à votre compte</li>
          <li>Cliquez sur "Publier une annonce"</li>
          <li>Choisissez la catégorie appropriée</li>
          <li>Ajoutez un titre, une description, des images</li>
          <li>Validez pour soumettre votre annonce</li>
        </ul>
      </>
    )
  },
  {
    id: 3,
    title: 'Créer votre boutique AdsCity',
    slug: 'creer-une-boutique',
    category: { slug: 'stores', title: 'Boutiques' },
    content: (
      <>
        <p>Vous pouvez créer une boutique professionnelle en quelques étapes :</p>
        <ul>
          <li>Rendez-vous dans "Mon Compte &gt; Boutiques"</li>
          <li>Cliquez sur "Créer une boutique"</li>
          <li>Remplissez les informations (nom, description, logo, etc.)</li>
          <li>Ajoutez vos produits</li>
          <li>Enregistrez</li>
        </ul>
      </>
    )
  },
  {
    id: 4,
    title: 'Quels sont les moyens de paiement acceptés ?',
    slug: 'moyens-de-paiement',
    category: { slug: 'payments', title: 'Paiements' },
    content: (
      <>
        <p>Nous acceptons plusieurs moyens de paiement :</p>
        <ul>
          <li>Carte bancaire (Visa, MasterCard)</li>
          <li>Sberbank, Tinkoff (en Russie)</li>
          <li>Portefeuille électronique AdsCity (bientôt disponible)</li>
        </ul>
      </>
    )
  },
  {
    id: 5,
    title: 'Comment booster mon annonce avec une publicité ?',
    slug: 'booster-une-annonce',
    category: { slug: 'pubs', title: 'Publicités' },
    content: (
      <>
        <p>Pour promouvoir votre annonce :</p>
        <ol>
          <li>Accédez à votre tableau de bord</li>
          <li>Sélectionnez l’annonce que vous souhaitez booster</li>
          <li>Cliquez sur "Booster"</li>
          <li>Choisissez un plan de publicité</li>
          <li>Effectuez le paiement</li>
        </ol>
      </>
    )
  },
  {
    id: 6,
    title: 'Sécuriser mon compte contre le piratage',
    slug: 'securiser-mon-compte',
    category: { slug: 'safety', title: 'Sécurité' },
    content: (
      <>
        <p>Pour protéger votre compte :</p>
        <ul>
          <li>Utilisez un mot de passe fort et unique</li>
          <li>Activez la vérification par e-mail</li>
          <li>Ne partagez jamais vos identifiants</li>
          <li>Consultez régulièrement l’historique de vos connexions</li>
        </ul>
      </>
    )
  },
  {
    id: 7,
    title: 'Comment publier une annonce ?',
    slug: 'publier-une-annonce',
    category: { slug: 'posts', title: 'Annonces' },
    content: (
      <>
        <p>Voici comment publier une annonce :</p>
        <p>Pour publier une annonce, connectez-vous à votre compte, puis, dépendamment de l'affichage de l'interface sur votre appareil (Smartphone ou Ordinateur), cliquez sur le bouton <strong>Créer une annonce</strong> en haut à droite de la page d'accueil ou sur le bouton <strong>Plus</strong> vers le bas à droite de la page d'accueil et suivez les instructions.</p>
      </>
    )
  },
  {
    id: 8,
    title: "J'ai oublié mon mot de passe, que faire ?",
    slug: 'mot-de-passe-oublie',
    category: { slug: 'account', title: 'Compte' },
    content: (
      <>
        <p>Pour réinitialiser votre mot de passe en cas d'oubli, suivez les étapes suivantes:</p>
        <ol>
          <li>Rendez-vous sur la page de <strong> <a href={`${authURL}/signin`}>connexion</a> </strong>, vous verrez un bouton "Mot de passe oublié ?" </li>
          <li>Renseignez votre adresse email connectée à votre compte, ensuite un lien de réinitialisation de mot de passe vous sera envoyé par email.</li>
          <li>Depuis votre boite de réception de couriers électroniques, cliquez sur le bouton "Réinitialiser mon mot de passe"; Vous serez redirigés vers le site de AdsCity.</li>
          <li>Une fois sur la page de redirection, entrez un nouveau mot de passe et confirmez-le, puis cliquez sur le bouton <strong>Valider</strong>.</li>
        </ol>
      </>
    )
  },
  {
    id: 9,
    title: "Comment signaler une annonce ?",
    slug: 'signaler-une-annonce',
    category: { slug: 'posts', title: 'Annonce' },
    content: (
      <>
        <p>Pour signaler une annonce, observez ce bouton <a href={window.location.origin + '/account/modifier-infos-personnelles'}>ici</a>  </p>
      </>
    )
  },
  {
    id: 10,
    title: "Comment s'inscrire ?",
    slug: 'comment-s-inscrire',
    category: { slug: 'account', title: 'Compte' },
    content: (
      <>
        <p>Pour créer un compte:</p>
        <ol>
          <li>Cliquez sur le bouton "Inscription" en haut à droite de la page d'accueil ou accédez directement à la <a href={`${authURL}/signup`}>page d'inscription</a>.</li>
          <li>Renseignez vos informations personnelles, telles que votre nom et prénom, puis cliquez sur le bouton <strong>Suivant</strong>.</li>
          <li>Renseignez vos informations de contact, telles que email et numéro de téléphone, puis cliquez sur le bouton <strong>Suivant</strong></li>
          <li>Renseignez vos informations de résidence, telles que le pays, la ville et l'adresse de domicile, puis cliquez sur le bouton <strong>Suivant</strong></li>
          <li>Renseignez vos informations de sécurité, telles que le mot de passe et la confirmation du mot de passe, puis cliquez sur le bouton <strong>Suivant</strong>. Vous serez alors redirigés vers la page suivante.</li>
          <li>Saisissez <strong>le code à 6 chiffres qui sera envoyé à l'adresse email que vous aurez fournie</strong>. Une fois le code vérifié, vous verrez une fenêtre indiquant que votre inscription a réussi.</li>
        </ol>
      </>
    )
  },
  {
    id: 11,
    title: "Combien de temps prend la vérification d'annonce ?",
    slug: 'combien-de-temps-prend-la-verification-d-annonce',
    category: { slug: 'posts', title: 'Annonce' },
    content: (
      <>
        <p>Habituellement, la vérification prend entre 2 et 30 minutes, mais parfois cela peut prendre jusqu'à 2 jours.</p>
        <p>La vérification peut aller au delà de 24 heures, parce qu'il est important de tout vérifier - de la description aux photos en passant par les détails.</p>
        <p>Cela ne signifie pas que quelque chose ne va pas avec votre annonce. Si la vérification est en cours depuis 2 jours, il est probable que cela est dû à un grand nombre d'annonces.</p>
      </>
    )
  },
  {
    id: 12,
    title: "Pourquoi une vérification supplémentaire ?",
    slug: 'pourquoi-une-verification-supplementaire',
    category: { slug: 'posts', title: 'Annonce' },
    content: (
      <>
      <p>Pour garantir la sécurité et la qualité des annonces, les annonces dans les catégories sensibles requièrent une vérification par documents et reconnaissance faciale. Cela permet de prévenir les fraudes et les contenus inappropriés.</p>
      <p>Une catégorie sensible est une catégorie d'annonces qui nécessite une vigilance accrue car elle peut impliquer des données personnelles ou informations confidentielles, etre soumise à des réglementations légales spécifiques, présenter un risque d’abus, de fraude ou d’exploitation.</p>
      <p>Les catégories sensibles comprennent les annonces dans les catégories suivantes: <strong>Automobile</strong>, <strong>Immobilier</strong>, <strong>Services Financiers</strong>, <strong>Emplois</strong></p>
      </>
    )
  },
  // {
  //   id: 13,
  // },
  {
    id: 14,
    title: "A quel moment passer la vérification supplémentaire ?",
    slug: 'a-quel-moment-passer-la-verification-supplementaire',
    category: { slug: 'posts', title: 'Annonce' },
    content: (
      <>
      <p><strong>Important</strong>: la vérification supplémentaire est relative; Elle ne s'applique pas à tous les utilisateurs de la plateforme.</p>
      <p>L'utilisateur est invité à passer la vérification à partir du moment où il sélectionne une catégorie dite sensible. <a href='/posts/pourquoi-une-verification-supplementaire'>En savoir plus</a></p>
      </>
    )
  }
];

export const securityAdvice = {
  title: "Conseils de Sécurité",
  sections: [
    {
      title: "Transactions Sécurisées",
      tips: [
        "Privilégiez les paiements sécurisés",
        "Méfiez-vous des prix anormalement bas",
        "Ne communiquez jamais vos informations bancaires",
        "Évitez les virements bancaires directs"
      ]
    },
    {
      title: "Rencontres en Personne",
      tips: [
        "Choisissez un lieu public et fréquenté",
        "Venez accompagné si possible",
        "Effectuez les échanges en journée",
        "Vérifiez le produit avant la transaction"
      ]
    },
    {
      title: "Protection des Données",
      tips: [
        "Utilisez un mot de passe unique et complexe",
        "Ne partagez jamais vos identifiants",
        "Vérifiez régulièrement vos transactions",
        "Activez l'authentification à deux facteurs"
      ]
    },
    {
      title: "Signaux d'Alerte",
      tips: [
        "Vendeur pressant pour finaliser rapidement",
        "Demande de paiement par des cannaux non sécurisés",
        "Communication irrégulière ou agressive",
        "Refus de rencontre en personne sans raison valable"
      ]
    }
  ],
  emergency: {
    title: "En cas de problème",
    contacts: [
      "Service client: support@adscity.net",
      "Signalement: Bouton 'Signaler' sur l'annonce"
    ]
  }
};