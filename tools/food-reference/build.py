"""Generate the four food-reference entries from the edited food rows."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[2]
BOOK = ROOT / 'field-and-home'
VERSION = '2026.11.16-food-reference-r1'
CHECKED = 'November 16, 2026'
CATEGORY = 'Appendix · Food Safety Quick Reference'
SOURCES = [
 ['FoodSafety.gov · Cold food storage', 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts'],
 ['Nebraska Extension · Home food storage', 'https://food.unl.edu/free-resource/food-storage/'],
 ['Texas A&M AgriLife · Safe home food storage', 'https://agrilifeextension.tamu.edu/wp-content/uploads/2025/08/Safe-Home-Food-Storage.pdf'],
 ['FoodSafety.gov · Food handling temperatures and time limits', 'https://www.foodsafety.gov/keep-food-safe/4-steps-to-food-safety'],
 ['NCHFP · Freezer quality and packaging', 'https://nchfp.uga.edu/how/freeze/freeze-general-information/how-long-can-i-store-frozen-foods/'],
 ['NCHFP · Garlic in oil', 'https://nchfp.uga.edu/how/freeze/vegetables/freezing-garlic-in-oil'],
 ['NCHFP · Pesto and herb oils', 'https://nchfp.uga.edu/faqs/miscellaneous-questions/category/faq-canning'],
 ['NCHFP · Homemade jam storage', 'https://nchfp.uga.edu/how/make-jam-jelly/jams-jellies-general-information/storing-home-canned-jams-and-jellies'],
 ['Nebraska Extension · Fresh herbs', 'https://food.unl.edu/article/fresh-herbs/'],
 ['USDA · Leftovers', 'https://ask.fsis.usda.gov/article/How-do-I-handle-leftovers-safely/'],
 ['FoodSafety.gov · Infant formula', 'https://www.foodsafety.gov/people-at-risk/children-under-five'],
 ['Utah State Extension · Salt and dry cooking essentials', 'https://extension.usu.edu/preserve-the-harvest/research/cooking-food-storage'],
]
FREEZE_SOURCES = [
 ['Utah State Extension · Home freeze-drying and shelf-life evidence', 'https://extension.usu.edu/preserve-the-harvest/research/buying-a-home-freeze-dryer-what-to-know-before-you-go'],
 ['Augason Farms · Storage after opening', 'https://augasonfarms.com/pages/frequently-asked-questions'],
 ['Augason Farms · Strawberry can', 'https://augasonfarms.com/products/freeze-dried-sliced-strawberries'],
 ['Augason Farms · Blueberry can', 'https://augasonfarms.com/collections/outdoor/products/freeze-dried-whole-blueberries'],
 ['Augason Farms · Peach pouch', 'https://augasonfarms.com/collections/pouches/products/freeze-dried-sliced-peaches-pouch-24-servings'],
 ['Augason Farms · Pineapple family pouch', 'https://augasonfarms.com/products/freeze-dried-pineapple-pieces-family-size-pouch-20-servings'],
 ['Augason Farms · Broccoli can', 'https://augasonfarms.com/products/freeze-dried-broccoli-florets-and-stems'],
 ['Augason Farms · Sweet corn can', 'https://augasonfarms.com/products/freeze-dried-sweet-corn'],
 ['Mountain House · Shelf life and storage after opening', 'https://mountainhouse.com/pages/faqs-contact-us'],
 ['Mountain House · Cooked ground beef can', 'https://mountainhouse.com/products/ground-beef-10-can'],
 ['Mountain House · Cooked diced chicken can', 'https://mountainhouse.com/products/diced-chicken-10-can'],
]
PET_SOURCES = [
 ['FDA · Pet food and treat storage', 'https://www.fda.gov/animal-veterinary/animal-health-literacy/proper-storage-pet-food-treats'],
 ['FDA · Handling pet food', 'https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats'],
 ['Purina · Cat food storage intervals', 'https://www.purina.com/articles/cat/feeding/guides/how-to-store-cat-food'],
 ['Hill’s · Food storage by product', 'https://www.hillspet.com/pet-care/nutrition-feeding/cat-and-dog-food-storage-tips'],
 ['INABA · Churu storage instructions', 'https://inabafoods.com/products/chicken-with-salmon-4pk/'],
 ['CDC · Raw and freeze-dried raw pet food', 'https://www.cdc.gov/healthy-pets/about/pet-food-safety.html'],
]
groups = {}
for line in (Path(__file__).parent / 'foods.txt').read_text().splitlines():
    if not line or line.startswith('#'):
        continue
    if line.startswith('['):
        group = line[1:-1]
        groups[group] = []
        continue
    fields = line.split('|')
    assert len(fields) in (5, 6), line
    assert fields[1] in ('chill', 'pantry', 'frozen')
    groups[group].append(fields)
count = sum(len(rows) for rows in groups.values())

def guide(number, title, intro, sections, sources, tags):
    return {
        'id': f'food-{number:03d}', 'cat': CATEGORY,
        'sub': 'Food safety reference', 'title': title,
        'time': 'Look up as needed', 'diff': 'Quick reference',
        'gear': [], 'supplies': [], 'steps': [], 'referenceIntro': intro,
        'referenceSections': sections, 'sources': sources,
        'tags': tags, 'reviewed': CHECKED
    }

def section(title, columns, rows, note=''):
    return {'title': title, 'columns': columns, 'rows': rows, 'note': note}

def decision(row):
    if row[1] == 'pantry':
        return 'Do not refrigerate'
    if row[1] == 'frozen':
        return 'Keep frozen'
    return 'Refrigerate'

def freeze_dried(row):
    if len(row) == 6:
        return row[5] + ' unopened*'
    return 'Product label*'

refrigeration = []
storage = []
for group, rows in groups.items():
    decisions = []
    values = []
    for row in sorted(rows, key=lambda r: r[0].casefold()):
        food, mode, room, fridge, freezer = row[:5]
        # The short reason preserves the opened/ripe/prepared exceptions.
        condition = room if mode == 'pantry' else (
            'Keep at 0°F or below' if mode == 'frozen' else
            'For quality; pantry storage can also work' if room in
            ('Chill for quality', '1 day for quality', 'Chill for best quality')
            else 'See the matching storage row for timing'
        )
        decisions.append([food, decision(row), condition])
        values.append([food, room, fridge, freezer, freeze_dried(row)])
    refrigeration.append(section(group, ['Food and condition', 'Where to keep it', 'When or why'], decisions))
    storage.append(section(group, ['Food and condition', 'Room temperature', 'Fridge', 'Freezer', 'Freeze-dried'], values,
        'Fridge ≤40°F · freezer ≤0°F · cool, dry pantry 50–70°F. The 2-hour rule becomes 1 hour above 90°F. * Freeze-dried times refer to commercial packages. Home freeze-dried lifetimes are unvalidated.'))

guides = [
 guide(1, 'Refrigerate or do not refrigerate',
 [
  f'{count} common food entries, grouped by the part of the kitchen where you would look for them. Whole, ripe, cut, cooked and opened forms have separate rows where their storage changes.',
  '“Do not refrigerate” means the described food can stay in a cool, dry pantry. Move ripening produce to the fridge at the stage shown. Refrigeration of whole produce or certain condiments is often a quality choice. Ice cream and other frozen foods have a Keep frozen entry.',
  'Keep the refrigerator at 40°F (4°C) or colder. Refrigerate cut produce, opened perishable foods and cooked leftovers promptly. A package’s Keep Refrigerated instruction takes priority.',
  'For food handled at room temperature, refrigerate within two hours, or one hour if hotter than 90°F (32°C). The time includes preparation, serving and transport. Food kept above 140°F is hot-held. Divide hot leftovers into shallow containers and refrigerate promptly.'
 ], refrigeration, SOURCES, ['appendix', 'food safety', 'refrigerate', 'pantry', 'cheat sheet']),
 guide(2, 'Storage times for common foods',
 [
  'Find the food and its condition first. Times for raw food begin when purchased, times for cooked food when prepared, and opened-food times when opened. Use the shorter applicable interval if the label or earlier handling calls for it.',
  'Pantry times assume a dry cupboard around 50–70°F. A hot garage or humid porch shortens shelf life. Refrigerator times assume 40°F (4°C) or colder. Freezer times assume 0°F (−18°C) or colder and good freezer packaging.',
  'The 2-hour rule means refrigerate within two cumulative hours at room temperature, or one hour above 90°F. For perishable leftovers or raw animal foods kept beyond that limit, discard them. Refrigeration or freezing does not reset unsafe handling.',
  'Pantry and freezer durations usually describe best quality. Food continuously frozen at 0°F stays safe indefinitely if it was safe when frozen. Use the short fridge limits for perishable foods. Whole-produce estimates describe freshness, which also depends on ripeness and condition.',
  'Freeze vegetables with the preparation named in the row. Most require blanching. Fruit generally needs peeling, pitting or slicing. A dash means this sheet supplies no interval for that method. “Poor texture” describes a quality problem.',
  'The freeze-dried column gives verified examples for specific commercial products. Their sealed-package lifetimes apply only to those products and storage directions. “Product label” means there is no reliable generic duration. Home freeze-dried lifetime is unvalidated. Read the freeze-dried sheet for opened packages and rehydrated food.',
  'Discard food with mold, slime, contamination or questionable handling even if its time is still within the table. For cans, reject bulging, leaking, rust-through or deep seam damage. Smell and taste cannot establish that food is safe.'
 ], storage, SOURCES + FREEZE_SOURCES, ['appendix','storage','room temperature','fridge','freezer','freeze dried']),
]
examples = []
seen = set()
for rows in groups.values():
    for row in rows:
        if len(row) == 6 and row[5] not in seen:
            seen.add(row[5])
            examples.append([row[0], row[5], 'Up to 1 year, following the product label' if row[5].startswith('Augason') else 'Within 1 week for best results'])
guides.append(guide(3, 'Freeze-dried food storage',
 [
  'These are manufacturer examples checked on ' + CHECKED + '. Count from manufacture and use the package’s printed instructions. Intact moisture-resistant packaging, cool storage and a complete commercial drying process are part of each claimed lifetime.',
  'A family-size snack pouch can carry a much shorter date than a storage can of another product. Read the package type in each row. Store opened food tightly resealed and dry, and mark the opening date.',
  'For home freeze-dried food, published research has not established a universal storage lifetime. Record the food, process, batch date and packaging. No row in this sheet assigns a multiyear guarantee to a home batch.',
  'Once water is added, treat the food as perishable. Rehydrate with safe water, use clean utensils and serve promptly. Refrigerate within two hours, or one hour above 90°F. Use the comparable prepared-food fridge interval, generally three to four days for cooked leftovers, or an earlier product instruction.',
  'Keep track of whether the original food was raw or cooked. Freeze-drying can preserve surviving microbes. Follow the product’s cooking directions for raw ingredients. Drying food that was already unsafe does not make it safe.'
 ],
 [section('Commercial examples', ['Food', 'Sealed package', 'After opening, still dry'], examples),
  section('Other forms in the pantry', ['Product', 'Storage decision', 'Time'], [
   ['Commercial freeze-dried meals or ingredients', 'Store sealed in a cool, dry place', 'Printed lifetime for that exact product'],
   ['Home freeze-dried fruit, vegetables, cooked meat or meals', 'Keep correctly dried and protected from moisture and oxygen', 'No established universal lifetime'],
   ['Dehydrated foods, powdered milk and egg mixes', 'Use their own labeled process and storage instructions', 'Use the matching pantry row or label'],
   ['Freeze-dried raw pet food or treats', 'Read the raw-food handling instructions', 'See Cat food and treats']
  ])], FREEZE_SOURCES + [PET_SOURCES[-1]], ['appendix','freeze-dried','freeze dried','shelf life']))

pet_rows = [
 ['Canned or pouched cat food, shelf-stable and unopened', 'Do not refrigerate', 'Printed best-by date; store below 80°F', 'Unnecessary while sealed', 'Do not freeze the sealed can', 'Not applicable to this form'],
 ['Canned or pouched cat food, opened and untouched by the cat', 'Refrigerate promptly', 'Cover and chill immediately', 'Use within 3 days as a cautious household rule; obey an earlier label', 'Only if the manufacturer permits; follow its interval', 'Not applicable to this form'],
 ['Wet food served in the bowl', 'Serve, then discard leftovers', 'Pick up and discard after 1 hour, sooner in heat', 'Store the untouched portion separately', 'Not a way to rescue bowl leftovers', 'Not applicable'],
 ['Dry kibble, unopened bag', 'Do not refrigerate', 'Printed best-by date; cool, dry, below 80°F', 'Unnecessary', 'Manufacturer-specific', 'Not applicable to kibble'],
 ['Dry kibble, opened bag', 'Do not refrigerate', 'Purina gives 2–3 months, properly resealed; use earlier label', 'Unnecessary; keep dry', 'Manufacturer-specific', 'Not applicable to kibble'],
 ['Dry kibble, daily bowl portion', 'Do not refrigerate', 'Put out only the day’s portion; discard contaminated food', 'Unnecessary', 'Do not return bowl leftovers to the bag', 'Not applicable to kibble'],
 ['Crunchy shelf-stable cat treats', 'Do not refrigerate', 'Package best-by and open-bag interval; reseal dry', 'Unnecessary unless label directs', 'Manufacturer-specific', 'Not applicable'],
 ['Soft shelf-stable cat treats', 'Do not refrigerate unless label directs', 'Use package’s after-opening interval', 'Required if package says so', 'Manufacturer-specific', 'Not applicable'],
 ['Lickable treat tube, unopened', 'Do not refrigerate if sold shelf-stable', 'Printed date', 'Unnecessary while sealed', 'Manufacturer-specific', 'Not applicable'],
 ['Lickable treat tube, opened', 'Refrigerate promptly', 'Serve promptly; discard a licked portion after feeding', 'INABA says refrigerate and serve as soon as possible; finish a tube at one feeding when practical', 'Manufacturer-specific', 'Not applicable'],
 ['Fresh or refrigerated cat food', 'Refrigerate', 'Serve promptly', 'Product use-by and after-opening interval', 'Freeze only as directed on the label', 'Not applicable'],
 ['Frozen cat food', 'Keep frozen', 'Thaw in the fridge', 'After-thaw interval on label', 'Printed freezer interval', 'Not applicable'],
 ['Freeze-dried cat food or treats, sealed', 'Do not refrigerate if labeled shelf-stable', 'Store dry, in original package', 'Usually unnecessary; follow package', 'Follow package', 'Printed best-by date for the exact pet product'],
 ['Freeze-dried cat food or treats, opened and dry', 'Do not refrigerate unless label directs', 'Reseal and follow the product’s open-package interval', 'Follow package', 'Follow package', 'No universal open-package lifetime'],
 ['Freeze-dried cat food after adding water', 'Refrigerate the untouched reserved portion promptly', 'Serve immediately; discard bowl leftovers after 1 hour', 'Use the specific rehydrated-food interval on the package', 'Follow package', 'Now perishable; the dry-food date no longer applies'],
]
guides.append(guide(4, 'Cat food and treats',
 [
  'Keep cat food in a cool, dry place below 80°F. Mark the date you open each bag, can or pouch. Keep the original package, lot code and best-by date available for recalls.',
  'For dry food, close the original bag and place it inside a clean lidded bin. Wash and dry the bin between bags. Use a clean scoop. Keep bowls and feeding utensils clean and wash your hands after handling food.',
  'Refrigerate unused wet food promptly, tightly covered, at 40°F or colder. For simplicity this sheet uses three days for an opened can unless the label is shorter. Published brand advice differs, including Purina’s three days and Hill’s five to seven days.',
  'The serving-bowl limit here is a cautious one hour. Serve smaller portions in hot conditions and discard food the cat has left. Reserve the rest of a can with a clean utensil before serving.',
  'Freeze-dried raw foods and treats can contain surviving germs. CDC advises against feeding raw pet food. Keep raw products and their utensils away from human food and follow all package handling directions. Commercial dry kibble has its own storage rules.',
  'Treats supplement a complete diet. These times address storage. Feeding amounts and prescription diets should follow the veterinarian and product instructions.'
 ],
 [section('Food, treats and storage', ['Food and condition','Refrigeration','Room temperature','Fridge','Freezer','Freeze-dried'], pet_rows)],
 PET_SOURCES, ['appendix','cat','pet','canned','kibble','treats','churu']))
pack = {'pack':'11-food-safety-reference','category':CATEGORY,'count':len(guides),'guides':guides,'version':VERSION}
(BOOK/'packs/11-food-safety-reference.json').write_text(json.dumps(pack,indent=2,ensure_ascii=False)+'\n')
print(f'Built {count} human-food rows, {len(pet_rows)} cat-food rows and {len(examples)} freeze-dried examples.')
