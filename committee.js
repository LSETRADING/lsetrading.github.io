/* ============================================================
   LSESU Trading Society — committee data
   ------------------------------------------------------------
   Person-centric, not role-centric: one entry per human, with a
   `roles` array, because people hold more than one post. The
   leadership page groups by `group`; each division page pulls its
   heads from `divisions`. Nothing is hard-coded in the markup.

   To add someone: append an object here and drop their photo at
   photos/<slug>.jpg. No markup changes.

   HOUSE STYLE for every bio on this site:
     1. No em dashes, no en dashes. Use commas, colons, full stops.
     2. Say "his focus is" / "she is interested in", never "works on".
     3. A spring week is "a spring internship at X", never "joins X
        in the spring".
     4. Four beats: course, focus, best one or two placements, fun
        fact as the closer. 55 to 70 words.
     5. Short is fine. If someone sends three lines, write two
        sentences and stop. Never pad, never invent.
   ============================================================ */

const COMMITTEE = [

  {
    slug: 'keane-turner',
    name: 'Keane Turner',
    roles: ['Chairman'],
    group: 'exec',
    divisions: [],
    course: 'BSc Finance',
    year: '27',
    photo: 'photos/keane-turner.jpg',
    linkedin: 'https://www.linkedin.com/in/keaneturner/',
    focus: 50,                  // 800×800, already square
    bio: 'Keane reads Finance and chairs the society. His focus is G10 FX options ' +
         'trading. He spent his summer internship trading at HSBC. He was also a ' +
         'professional FIFA player, which is not the usual route onto an FX desk.',
    _raw: {
      expertise: 'G10 FX options trading',
      funFact: 'Used to be a pro FIFA player',
      placements: ['Summer Internship, Trading, HSBC'],
    },
  },

  {
    slug: 'hugo-masier',
    name: 'Hugo Masier',
    roles: ['President'],
    group: 'exec',
    divisions: [],
    course: 'BSc Economics',
    year: '28',
    photo: 'photos/hugo-masier.jpg',
    linkedin: 'https://www.linkedin.com/in/hugomasier/',
    focus: 42,                  // 2016×2048, effectively square
    bio: 'Hugo reads Economics and is President of the society. His focus is ' +
         'fundamental small cap equities, the part of the market where the research ' +
         'still has to be done by hand. He completed spring internships at Barclays ' +
         'and Houlihan Lokey, and spent his first year summer at Inthallo in equity ' +
         'research. He has climbed Mont Blanc.',
    _raw: {
      expertise: 'Fundamental small cap equities',
      funFact: 'Has climbed Mont Blanc',
      placements: ['Spring Internship, Sales and Trading, Barclays',
                   'Spring Internship, Houlihan Lokey'],
    },
  },

  {
    slug: 'constance-zhang',
    name: 'Constance Zhang',
    roles: ['Treasurer'],
    group: 'exec',
    divisions: [],
    course: 'BSc International Social & Public Policy and Economics',
    year: '27',
    photo: 'photos/constance-zhang.jpg',
    linkedin: 'https://www.linkedin.com/in/constance-yili-zhang/',
    focus: 4,                   // 1068×1600 studio headshot, head high in frame
    bio: 'Constance is Treasurer, which she earned by scoring 100 out of 100 in ' +
         'first year maths. She spent a summer auditing asset and wealth management ' +
         'at PwC, and did corporate finance at Soochow Securities. She also ' +
         'travelled to seven countries in her first year, three of them alone.',
    _raw: {
      expertise: 'Scored 100/100 in first year maths, so trust me with the accounts',
      funFact: 'Travelled to seven countries in first year, three solo',
      placements: ['Audit Summer Intern, Asset & Wealth Management, PwC London',
                   'Investment Banking, corporate finance, Soochow Securities',
                   'Retail Banking Spring Intern, Barclays'],
    },
  },

  {
    slug: 'sam-evans',
    name: 'Sam Evans',
    roles: ['Vice President', 'Co-Head of Macro'],
    group: 'exec',
    divisions: ['macro'],
    course: 'BSc Finance',
    year: '28',
    photo: 'photos/sam-evans.jpg',
    linkedin: 'https://www.linkedin.com/in/samevans06/',
    focus: 34,                  // 309×412, small source, face high
    bio: 'Sam reads Finance, and serves as Vice President as well as one of the two ' +
         'heads of Macro. His focus is rates and FX, built up through his own time ' +
         'in the society’s macro subcommittee. He has been at Dare International and ' +
         'the Development Bank of Wales. He could also solve a Rubik’s cube in ' +
         'thirty seconds at the age of twelve.',
    _raw: {
      expertise: 'Rates and FX trading, analysis of rates and macro markets',
      funFact: 'Could solve a Rubik’s cube in 30 seconds at age 12',
      placements: ['Dare International', 'Development Bank of Wales', 'Trade Nation'],
    },
  },

  {
    slug: 'krish-sahni',
    name: 'Krish Sahni',
    roles: ['Secretary', 'Co-Head of Macro'],
    group: 'exec',              // exec | divisions | ops — primary placement
    divisions: ['macro'],       // division pages this person heads
    course: 'BSc Economics & Economic History',
    year: '28',
    photo: 'photos/krish-sahni.jpg',
    linkedin: 'https://www.linkedin.com/in/krish-sahni-645876291/',
    focus: 50,                  // object-position Y %, 50 = centred
    bio: 'Krish reads Economics and Economic History. His focus is the plumbing ' +
         'of crypto derivatives: perpetual funding dislocations, and the ' +
         'reflexivity that turns a single liquidation into a cascade. He built a ' +
         'credit risk engine at Shanghai Commercial Bank and finished top five in ' +
         'the CME Trading Society Challenge. Solidity was his first programming ' +
         'language, which tells you most of what you need to know.',
    _raw: {
      expertise: 'Perp funding dislocations and liquidation cascade reflexivity',
      funFact: 'Solidity was my first programming language (because starting with Python would have been far too sensible)',
      placements: ['Credit Risk Engine Developer, Shanghai Commercial Bank',
                   'Top 5, CME x Trading Society Challenge',
                   'Spring, Platinum Securities', 'Spring, Dare Global'],
    },
  },

  {
    slug: 'benjamin-helwaser',
    name: 'Benjamin Helwaser',
    // He wrote "Head of Derivatives"; using Co-Head to match Kriti, since the
    // seat is shared. Say the word and I will switch both to Head.
    roles: ['Co-Head of Derivatives'],
    group: 'divisions',
    divisions: ['derivatives'],
    course: 'BSc International Relations',
    year: '28',
    photo: 'photos/benjamin-helwaser.jpg',
    linkedin: 'https://www.linkedin.com/in/benjamin-helwaser-293177251/',
    focus: 50,                  // 800×800, already square
    bio: 'Benjamin reads International Relations. His focus is the intersection of ' +
         'geopolitical forecasting and stochastic modelling, using one to price the ' +
         'other. He completed a spring internship at Bank of America and spent his ' +
         'summer on the Natixis CIB trading floor. He was also part of a finance game ' +
         'show with 500,000 viewers.',
    _raw: {
      expertise: 'Intersection of geopolitical forecasting and nonlinear stochastic modelling to forecast derivatives pricing',
      funFact: 'Was part of a finance game show with 500,000 viewers',
      placements: ['Spring Internship, Bank of America',
                   'Summer, Natixis CIB trading floor'],
    },
  },

  {
    slug: 'kriti-sharma',
    name: 'Kriti Sharma',
    roles: ['Co-Head of Derivatives'],
    group: 'divisions',
    divisions: ['derivatives'],
    course: 'BSc Financial Mathematics & Statistics',
    year: '28',
    photo: 'photos/kriti-sharma.jpg',
    linkedin: 'https://www.linkedin.com/in/kriti-sharma-484969237/',
    focus: 16,                  // 736×1258, tall
    bio: 'Kriti reads Financial Mathematics and Statistics. Her focus is advanced ' +
         'option strategies and the Breeden and Litzenberger framework, which recovers ' +
         'the market’s whole implied distribution from a strip of option prices. She ' +
         'won the 2026 Citadel FIM Central Bank Challenge, and has a trading offer ' +
         'from HSBC for the summer. She can also name 98% of the world’s countries ' +
         'in ten minutes.',
    _raw: {
      expertise: 'Option strategies and Breeden Litzenberger implied distributions',
      funFact: 'Can name 98% of the world’s countries in 10 minutes',
      // alternative, held back only to avoid two clubbing facts in one grid:
      funFactAlt: 'Ministry regular',
      placements: ['Winner, 2026 Citadel FIM Central Bank Challenge',
                   'Spring, D. E. Shaw', 'Spring, HSBC',
                   'Offer, HSBC Trading Summer Internship'],
    },
  },

  {
    slug: 'tom-smith',
    name: 'Tom Smith',
    roles: ['Head of Advanced Trader Programme · Equities'],
    group: 'divisions',
    divisions: ['atp-equities'],
    course: 'BSc Politics & International Relations',
    year: '28',
    photo: 'photos/tom-smith.jpg',
    linkedin: 'https://www.linkedin.com/in/tomsmithlse/',
    focus: 10,                  // 1200×1600
    bio: 'Tom reads Politics and International Relations. His focus is equity ' +
         'trading and thesis synthesis, the work of building a view and then ' +
         'testing whether it survives contact with the market. He has been at ' +
         'Pelham Capital, and has a spring internship at Maven Capital Partners. ' +
         'He has also been clubbing with Andy Burnham, which is not a line most ' +
         'equity traders can offer.',
    _raw: {
      expertise: 'Equity trading and thesis synthesis',
      funFact: 'Has been clubbing with Andy Burnham',
      placements: ['Pelham Capital', 'Future Planet Capital',
                   'Clarifield International', 'Spring, Maven Capital Partners'],
    },
  },

  {
    slug: 'filip-surbek',
    name: 'Filip Surbek',
    roles: ['Head of Advanced Trader Programme · FICC'],
    group: 'divisions',
    divisions: ['atp-ficc'],    // CHECK with Ben: is this the ATP FICC seat?
    course: 'BSc Accounting & Finance',
    year: '27',
    photo: 'photos/filip-surbek.jpg',
    linkedin: 'https://www.linkedin.com/in/filip-surbek-47585b313/',
    focus: 5,                   // 896×1195, face sits high
    bio: 'Filip heads the FICC stream of the Advanced Trader Programme. His focus '  +
         'is global macro.',
    _raw: {
      expertise: 'Global macro',
      funFact: '',
      placements: [],
    },
  },

  {
    slug: 'harrison-older',
    name: 'Harrison Older',
    roles: ['Head of Equities'],
    group: 'divisions',
    divisions: ['equities'],
    course: 'BSc Finance',
    year: '28',
    photo: 'photos/harrison-older.jpg',
    linkedin: 'https://www.linkedin.com/in/harrison-older-4178a028b/',
    // Face measured at 62% across, 42% down of a 1014x2048 source. A square
    // crop always shows the full width, so object-position cannot move him
    // sideways; the pan does that and the focus centres him vertically.
    focus: 35,
    crop: 'translate(-17%, 0) scale(1.45)',
    tune: 'brightness(1.16)',   // shot in low bar light, needs lifting
    bio: 'Harrison reads Finance and heads the Equities division. He spent a summer ' +
         'in private wealth management at a boutique advisory firm under Aviva, and ' +
         'completed a spring internship in global markets at BNP Paribas. He has also ' +
         'raced against Lando Norris and the Sidemen in karting.',
    _raw: {
      expertise: '',            // not supplied
      funFact: 'Has raced against Lando Norris and the Sidemen in karting',
      placements: ['Summer Internship, Private Wealth Management, boutique advisory firm under Aviva',
                   'Spring week, BNP Paribas, Global Markets'],
    },
  },

  {
    slug: 'ali-karimov',
    name: 'Ali Karimov',
    roles: ['Head of Commodities'],
    group: 'divisions',
    divisions: ['commodities'],
    course: 'BSc Politics & Philosophy',
    year: '28',
    photo: 'photos/ali-karimov.jpg',
    linkedin: 'https://www.linkedin.com/in/ali-karimov-88496123b/',
    focus: 5,                   // 959×1280, white ground, head sits high
    bio: 'Ali heads the Commodities division. His focus is oil and gas. He spent ' +
         'time at SOCAR Trading as an LNG intern. He also grew up on a shoreline ' +
         'within sight of an oil rig, which is a fairly direct route into the job.',
    _raw: {
      expertise: 'Oil and gas',
      funFact: 'Used to live on the shore next to an oil rig',
      placements: ['LNG Intern, SOCAR Trading'],
    },
  },

  {
    slug: 'alex-ficau',
    name: 'Alex Ficau',
    roles: ['Head of Emerging Markets'],
    group: 'divisions',
    divisions: ['em'],
    course: 'BSc Accounting & Finance',
    year: '27',
    photo: 'photos/alex-ficau.jpg',
    linkedin: 'https://www.linkedin.com/in/alexficau16/',
    focus: 40,                  // 1600×1543, near square, face slightly high
    bio: 'Alex reads Accounting and Finance, and came up through the Emerging ' +
         'Markets subcommittee, spending a year and a half as an analyst before ' +
         'taking it over. He was Head of Fixed Income at Veles Capital, and spent ' +
         'eleven weeks as a summer analyst at McKinsey. He kiteboards and skis, ' +
         'which suggests a tolerance for moving fast over uneven ground.',
    _raw: {
      expertise: 'EM subcommittee analyst for 18 months before becoming head. Previously Head of Fixed Income, Veles Capital',
      funFact: 'Enjoys kiteboarding and skiing',
      placements: ['Summer Analyst, McKinsey (11 weeks, 2026)',
                   'Head of Fixed Income, Veles Capital'],
    },
  },

  {
    slug: 'arnav-shepuri',
    name: 'Arnav Shepuri',
    roles: ['Head of Credit'],
    group: 'divisions',
    divisions: ['credit'],
    course: 'BSc Finance',
    year: '28',
    photo: 'photos/arnav-shepuri.png',
    linkedin: 'https://www.linkedin.com/in/arnav-sherpuri-40456324b/',
    focus: 50,                  // 800×800, already square and well framed
    bio: 'Arnav reads Finance. His focus is emerging markets credit trading. He ' +
         'spent a summer at QDEX running credit analysis across 81 lenders to find ' +
         'mispriced borrower segments, and rotated through light exotics and equity ' +
         'derivatives at Vantage Capital Markets. He is also a huge Dune fan, which ' +
         'is fitting for someone drawn to scarce resources and unstable regimes.',
    _raw: {
      expertise: 'Emerging markets credit trading',
      funFact: 'Huge Dune fan',
      placements: ['Quantitative Credit Risk Intern, QDEX (Jul to Aug 2026)',
                   'Markets Intern, Vantage Capital Markets (Jun 2026)'],
      education: 'LSE, BSc Finance, 2025 to 2028',
    },
  },

  {
    slug: 'smile-gu',
    name: 'Smile Gu',
    roles: ['Head of Digital Strategy'],
    group: 'ops',
    divisions: [],
    course: 'BSc Philosophy & Economics',
    year: '27',
    photo: 'photos/smile-gu.jpg',
    linkedin: 'https://www.linkedin.com/in/smile-gu-114018331/',
    // Environmental shot at Tower Bridge, not a headshot: she is small and
    // left of frame. Zoom and pan to her face so the tile matches the rest.
    crop: 'translate(33%, 2%) scale(1.9)',
    focus: 50,
    bio: 'Smile is Head of Digital Strategy. Her focus is content, audience growth ' +
         'measured in data rather than guesswork, and getting people across teams ' +
         'pulling in one direction. She spent a summer in risk management at Bank ' +
         'of China. She also speaks Shanghainese.',
    _raw: {
      expertise: 'Content creation, data driven growth, and cross functional leadership',
      funFact: 'Can speak Shanghainese',
      placements: ['Risk Management Summer Intern, Bank of China'],
    },
  },

  {
    slug: 'whitney-nnadozie',
    name: 'Whitney Nnadozie',
    roles: ['Head of Corporate Sponsorship'],
    group: 'ops',
    divisions: [],
    course: 'BSc Economics',
    year: '28',
    photo: 'photos/whitney-nnadozie.jpg',
    linkedin: 'https://www.linkedin.com/in/whitneynnadozie/',
    focus: 100,                 // 877×1037, head sits low with wall above
    bio: 'Whitney reads Economics and runs corporate sponsorship for the society. ' +
         'She has been at Deutsche Bank and Schroders. She also came fourth in a ' +
         'hackathon despite her laptop dying for the first two hours, having ' +
         'uploaded a single untested model, which is a better hit rate than most ' +
         'people manage with working equipment.',
    _raw: {
      expertise: '',            // not supplied
      funFact: 'Accidentally came 4th in a hackathon despite her laptop not working for the first 2 hours and only uploading 1 untested model',
      placements: ['Deutsche Bank', 'Schroders', 'Igneo Infrastructure Partners'],
    },
  },

  {
    slug: 'sophie-le-guen',
    name: 'Sophie Le Guen',
    roles: ['Head of Events'],
    group: 'ops',
    divisions: ['events'],
    course: 'MSc Finance',
    year: '27',
    photo: 'photos/sophie-le-guen.jpg',
    linkedin: 'https://www.linkedin.com/in/sophie-le-guen-/',
    focus: 35,                  // 1179×1568, face just above centre
    bio: 'Sophie is reading for an MSc in Finance, her second LSE degree, and runs ' +
         'the society’s events. She spent a summer in global banking at UBS. She was ' +
         'also born on Halloween, so as she puts it, the volatility was priced in ' +
         'from day one.',
    _raw: {
      expertise: 'So good at LSE degrees they wanted me back for a second one',
      funFact: 'Born on Halloween, so the volatility was priced in from day one',
      placements: ['Global Banking Summer Internship, UBS'],
    },
  },

];

/* Role titles for slots not yet filled. Removed from here as people arrive. */
const VACANT = {
  exec: [],
  divisions: [],
  ops: [],
};   // Committee complete: 16 people across 17 seats (Krish and Sam each hold two).
