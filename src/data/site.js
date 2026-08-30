// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE YOUR SITE.
//  Everything on the site comes from here. You shouldn't need to
//  touch any other file to change your name, bio, links, or
//  publications.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Jimmy Campbell',

  // Shown in small caps under your name on the landing page.
  // Delete the line or set to '' to hide it.
  tagline: 'Researcher',

  // Your photo. Put the image file in the `public/` folder and
  // reference it as '/your-file-name.jpg'.
  photo: '/headshot_20260829.png',

  // Alt text for the photo (used by screen readers).
  photoAlt: 'Portrait of Jimmy Campbell',

  // Your bio. Each string in this array becomes a paragraph.
  // Two or three short paragraphs reads best.
  bio: [
    "I am a Ph.D. Candidate in Health Services Research, Policy, and Administration at the University of Minnesota. My research focuses on topics in health economics including demand and supply responses to financial incentives. My job-market paper evaluates how Long-Term Acute Care Hospitals responded to the implementation of site neutral payments for Medicare patients.",
    "Prior to graduate school I worked as a consultant in the Health Analytics Practice Group at Berry, Dunn, McNeil, and Parker. I received a BA from Providence College in 2017.",
  ],

  // Links shown as a row under your bio.
  // Delete any you don't want; add any you do.
  links: [
    { label: 'Email', href: 'mailto:camp2679@umn.edu' },
    { label: 'GitHub', href: 'https://github.com/camp2679' },
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
    title: 'The full title of your paper, sentence case is fine',
    authors: '**J. Matthews**, A. Colleague, B. Coauthor',
    venue: 'Journal or Conference Name',
    year: 2025,
    // Optional one- or two-sentence plain-language summary.
    // Delete this line if you'd rather keep the list clean.
    note: 'A short, plain-language note on what this paper found and why it matters.',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'DOI', href: '#' },
    ],
  },
  {
    title: 'A second selected publication',
    authors: 'A. Colleague, **J. Matthews**',
    venue: 'Another Journal',
    year: 2024,
    links: [{ label: 'PDF', href: '#' }],
  },
  {
    title: 'A third selected publication',
    authors: '**J. Matthews**, C. Someone',
    venue: 'Conference Proceedings',
    year: 2023,
    links: [{ label: 'DOI', href: '#' }],
  },
];
