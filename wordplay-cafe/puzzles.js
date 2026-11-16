// Puzzle IDs are permanent so new editions can keep earlier progress.
const menu = [
  {id:1, type:'cipher', title:'Before sunrise', phrase:'THE KETTLE SINGS BEFORE THE STREET WAKES', hint:'The first word often comes before a noun.'},
  {id:2, type:'ladder', title:'From cold to warm', path:['COLD','CORD','CARD','WARD','WARM'], clues:['A rope or thick string','Something you deal from a deck','A hospital division']},
  {id:3, type:'hunt', title:'At the roastery', letters:'ROASTED', targets:{OATS:'Grain often served for breakfast',TOAD:'A warty amphibian',STORE:'A place to shop',TREAD:'The patterned surface of a tire',ROASTED:'How coffee beans are cooked'}},
  {id:4, type:'cipher', title:'Window seat', phrase:'A RAINY WINDOW MAKES A FINE READING LAMP', hint:'Two single-letter words are the same article.'},
  {id:5, type:'ladder', title:'Turn a cat into a dog', path:['CAT','COT','COG','DOG'],clues:['A narrow camp bed','A tooth on a gear']},
  {id:6, type:'hunt', title:'Garden party', letters:'PLANTER', targets:{PEAR:'An orchard fruit with a narrow neck',LENT:'Let someone borrow',PETAL:'One colored piece of a blossom',ALERT:'Wide awake and watchful',PLANTER:'A container for growing flowers'}},
  {id:7, type:'cipher', title:'Table for two',phrase:'WE SAVED THE CORNER TABLE FOR YOU',hint:'The last word is the person being addressed.'},
  {id:8, type:'ladder', title:'A change of headwear',path:['HEAD','HEAL','TEAL','TELL','TALL','TAIL'],clues:['To mend a wound','A blue-green color','To relate a story','The opposite of short']},
  {id:9, type:'hunt', title:'Night drive',letters:'BRIGHTS',targets:{GRIT:'Courage, or tiny grains of sand',STIR:'Move a spoon in a cup',GIRTH:'Distance around the middle',SHIRT:'Garment with a collar or sleeves',BRIGHTS:'High-beam headlights, informally'}},
  {id:10, type:'cipher', title:'The spare bookmark',phrase:'MY BOOKMARK IS A RECEIPT FOR MORE BOOKS',hint:'The first and last book-related words share four starting letters.'},
  {id:11, type:'ladder', title:'A sweeter ending',path:['SALT','SILT','SILK','MILK'],clues:['Fine sediment in a river','Fabric made from cocoons']},
  {id:12, type:'hunt', title:'A lucky find',letters:'CHARMED',targets:{ARCH:'Curved opening above a doorway',MADE:'Created, in the past',REACH:'Stretch out your hand',DREAM:'A story your sleeping mind tells',CHARMED:'Delighted or under a magic spell'}},
  {id:13, type:'cipher', title:'House blend',phrase:'GOOD COMPANY IS THE SECRET INGREDIENT',hint:'The first word has a doubled vowel.'},
  {id:14, type:'ladder', title:'Walk to the coast',path:['LAND','LANE','LONE','TONE','TINE','TIDE'],clues:['A narrow road','Solitary','The sound quality of a voice','One prong of a fork']},
  {id:15, type:'hunt', title:'The long way home',letters:'JOURNEY',targets:{JURY:'A group that decides a court case',YORE:'Long ago, in days of this',EURO:'Currency used in France',ENJOY:'Take pleasure in',JOURNEY:'A trip from one place to another'}},
  {id:16, type:'cipher', title:'Last slice',phrase:'SOME MYSTERIES END WITH AN EMPTY PIE TIN',hint:'The final container has three letters.'},
  {id:17, type:'ladder', title:'Change your tune',path:['SING','SANG','SAND','BAND'],clues:['Performed a song yesterday','Grains on a beach']},
  {id:18, type:'hunt', title:'Birthday table',letters:'CANDLES',targets:{LACE:'Delicate openwork fabric',DEAL:'Give each player cards',CLEAN:'Free of dirt',LANCE:'A long spear used on horseback',CANDLES:'Make a wish and blow these out'}},
  {id:19, type:'cipher', title:'Closing time',phrase:'THE LAST CUP ALWAYS HAS A STORY LEFT IN IT',hint:'A three-letter drinking vessel follows LAST.'},
  {id:20, type:'ladder', title:'Cross the finish line',path:['LOSE','LOST','COST','CAST','CASH'],clues:['Unable to find the way','The price of something','The actors in a play']}
];
