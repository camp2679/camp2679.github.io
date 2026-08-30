// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE YOUR SITE.
//  Everything on the site comes from here. You shouldn't need to
//  touch any other file to change your name, bio, links, or
//  publications.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'James M. Campbell',
  
  nav: [
    { label: 'Research', href: '/research' },
    { label: 'CV', href: '/cv' },
  ],

  cv: {
    file: '/James Campbell - CV.pdf',
    updated: 'August 2026',
  },
  // Shown in small caps under your name on the landing page.
  // Delete the line or set to '' to hide it.
  tagline: '',

  // Your photo. Put the image file in the `public/` folder and
  // reference it as '/your-file-name.jpg'.
  photo: '/headshot_20260829.png',

  // Alt text for the photo (used by screen readers).
  photoAlt: 'Portrait of Jimmy Campbell',

  // Your bio. Each string in this array becomes a paragraph.
  // Two or three short paragraphs reads best.
  bio: [
    "I am Jimmy, a Ph.D. Candidate in Health Services Research, Policy, and Administration (Health Economics track) at the University of Minnesota. My research focuses on patient and provider responses to changes in financial incentives. My job-market paper evaluates the impact of Medicare's site neutral payment - the first of it's kind - on the treatement behavior and market structure of Long-Term Acute Care Hospitals.",
    "Prior to graduate school I worked as a consultant in the Health Analytics Practice Group at Berry, Dunn, McNeil, and Parker. I received a BA in 2017 from Providence College, where I was also a member of their track and cross-country teams. Maine Native.",
  ],

  // Links shown as a row under your bio.
  // Delete any you don't want; add any you do.
  links: [
    { label: 'Email', href: 'mailto:camp2679@umn.edu' },
  ],
};

// ─────────────────────────────────────────────────────────────
//  PUBLICATIONS
//
//  Newest first. Only `title` and `year` are required — every
//  other field can be deleted if it doesn't apply.
//
//  In `authors`, wrap your own name in ** ** to bold it:
//      'A. Colleague, **J. Matthews**, B. Other'
//
//  `links` is a list of {label, href} — use whatever you have:
//  PDF, DOI, Publisher, Code, Data, Preprint, Slides.
// ─────────────────────────────────────────────────────────────

export const publications = [
  {
    title: 'Health Insurance and Access to Care after Unemployment in Medicaid Expansion versus non-Expansion States during COVID-19',
    authors: '**Campbell JM**, Escarce JJ, Runger D, Eisenman D., Huckfeldt PJ',
    venue: 'Medical Care',
    year: 2025,
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1097/MLR.0000000000002254' },
    ],
  },
  {
    title: 'Prescription Drug Dispensing and Patient Costs After Implementation of a No Behavioral Health Cost-Sharing Law',
    authors: 'Golberstein E, **Campbell JM**, Maclean JC, Harris SJ, Saloner B, Stein BD',
    venue: 'JAMA Health Forum',
    year: 2024,
    links: [{ label: 'DOI', href: 'https://doi.org/10.1001/jamahealthforum.2024.0198' }],
  },
  {
    title: 'The Future of State All Payer Claims Databases (APCDs)',
    authors: 'Blewett LA., Mac Arthur N., **Campbell JM**',
    venue: 'Journal of Health Politics, Policy, and Law',
    year: 2023,
    links: [{ label: 'DOI', href: 'https://doi.org/10.1215/03616878-10171104' }],
  },
];

export const workInProgress = [
  {
    title: 'Site-Neutral Payments and Long-Term Acute Care Hospitals',
    venue: 'Job-market paper',
    year: 2026,
  },
  {
    title: 'Effects of Zero Cost-Sharing for Behavioral Health on Utilization and Spending',
    authors: 'with Ezra Golberstein, Catherine Maclean, Susan Ettner, Bradley Stein, and Samantha Harris',
    year: 2026,
  },
];
