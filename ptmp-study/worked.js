// Standalone study examples. The practice question bank is separate.
const workedExamples = [
  {
    title: 'Occupancy on a sold-out morning',
    problem: 'At 9 a.m., 18 of a garage’s 240 striped spaces are closed for repairs. A count finds 211 vehicles in the usable spaces. What occupancy should dispatch report, and what can it tell an arriving driver?',
    steps: [
      'Find the usable supply at the moment of the count. Subtract the 18 closed spaces from 240 striped spaces to get 222.',
      'Divide occupied usable spaces by total usable spaces. 211 ÷ 222 × 100 = 95.0%, rounded to one decimal place.',
      'Eleven usable spaces were empty at that moment. Before directing a visitor there, check whether those spaces are eligible for that visitor and whether the count is still current.'
    ],
    trap: '211 ÷ 240 gives 87.9%. That denominator includes 18 spaces nobody can use. Permit sales and daily entries would answer different questions.'
  },
  {
    title: 'Turnover at a loading curb',
    problem: 'Eight loading spaces are observed for six hours. Observers count 72 distinct loading visits and 36 occupied space-hours. What do turnover and average occupancy each tell you?',
    steps: [
      'Turnover for the six-hour period is 72 visits ÷ 8 spaces = 9 visits per space. To express an hourly rate, divide by six again to get 1.5 visits per space-hour.',
      'Eight spaces over six hours provide 48 available space-hours. Average occupancy is 36 occupied space-hours ÷ 48 available space-hours = 75%.',
      'Both results can be true. Many vehicles can use the curb briefly. Examine shorter intervals before concluding that a delivery truck can usually find space at noon.'
    ],
    trap: 'Nine is a visit count per space over the observation period. Writing it as 9% confuses turnover with occupancy.'
  },
  {
    title: 'Following the money to settlement',
    problem: 'A payment report shows $12,500 in captured card sales and $300 in refunds. The processor deducts $244 in fees. The bank receives $11,956. All four figures refer to the same settlement batch. Is cash missing?',
    steps: [
      'Start with captured sales and subtract refunds. $12,500 − $300 = $12,200 in net customer payments.',
      'Subtract fees withheld before deposit. $12,200 − $244 = $11,956 expected in the bank.',
      'The expected and actual deposits agree. Retain the report, refund approvals and settlement record so another reviewer can reproduce the reconciliation.'
    ],
    trap: 'Comparing gross sales directly with the deposit creates an apparent $544 shortage. On a real discrepancy, match batch identifiers and cutoff times before investigating unexplained cash.'
  },
  {
    title: 'Separating price from volume',
    problem: 'A garage budgeted 10,000 paid visits at an average collected price of $6. Actual results were 9,000 visits at $6.50. How much of the revenue difference came from volume and how much from price?',
    steps: [
      'Budgeted revenue was $60,000. Actual revenue was 9,000 × $6.50 = $58,500, or $1,500 below budget.',
      'At the budgeted price, the loss of 1,000 visits reduces revenue by $6,000. At the actual volume, the $0.50 increase adds $4,500.',
      'The effects reconcile. A $6,000 decrease plus a $4,500 increase equals the $1,500 shortfall. Investigate visit patterns and the mix of rates paid before proposing a rate change.'
    ],
    trap: 'A higher average price does not guarantee higher revenue. Multiplying both changes by budget values without accounting for their interaction will leave a difference.'
  },
  {
    title: 'Sizing a shuttle schedule',
    problem: 'A shuttle route takes 36 minutes to travel out and back, plus 9 minutes of recovery once per full cycle. How many buses must be in service for departures every 10 minutes?',
    steps: [
      'Add travel and recovery time to get a 45-minute cycle. Recovery is counted once, as specified.',
      'Divide cycle time by the target headway. 45 ÷ 10 = 4.5, so at least five whole vehicles are needed for the repeating service.',
      'At ten-minute spacing, five vehicles allow a 50-minute rotation. The scheduler can allocate the extra five minutes. Fleet spares, breaks, demand and actual travel-time variability need separate checks.'
    ],
    trap: 'Rounding down gives four buses and only 40 minutes before the first bus must depart again. It would still be completing its 45-minute cycle.'
  },
  {
    title: 'Reading a commute survey',
    problem: 'In comparable fall surveys, 480 of 800 respondents drove alone before a transit program, and 440 of 880 drove alone afterward. How did the drive-alone share change?',
    steps: [
      'Use each survey’s own denominator. Baseline drive-alone share was 480 ÷ 800 = 60%. Follow-up share was 440 ÷ 880 = 50%.',
      'The share fell 10 percentage points. Relative to the original share, that is a 10 ÷ 60 = 16.7% decrease.',
      'Describe the result as a change among respondents. Check response rates, population mix, semester timing and other changes before attributing it to the transit program.'
    ],
    trap: 'Forty fewer respondents reported driving alone. That fact by itself does not establish that 40 daily car trips disappeared across the whole campus.'
  },
  {
    title: 'Comparing two equipment bids',
    problem: 'One gate system costs $44,000 installed plus $7,000 per year for support. Another costs $56,000 installed plus $3,000 per year. Compare four years assuming equal performance, no discounting and no residual value.',
    steps: [
      'First system: $44,000 + (4 × $7,000) = $72,000. Second system: $56,000 + (4 × $3,000) = $68,000.',
      'The second system costs $4,000 less over four years. Its extra $12,000 upfront is recovered after three years of $4,000 annual support savings.',
      'Year three is the break-even point. In a real procurement, document the common evaluation period and also compare integration, accessibility, service coverage and replacement risks.'
    ],
    trap: 'The first system has the lower purchase price. Comparing only purchase prices drops the recurring expense that changes the decision.'
  }
];
