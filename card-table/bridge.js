// Clockwise from North. Every practice card is identifiable by suit and rank.
const bridgeSeats = ['North','East','South','West'];
const practiceHands = [
  ['K74','A92','K64','A862'], ['962','653','J73','QJT3'],
  ['AQJT8','K74','A82','95'], ['53','QJT8','QT95','K74']
];
const practiceTricks = [
  ['♥Q ♥A ♥3 ♥4','North takes the opening lead with the ace. Dummy now leads, with South choosing its card.'],
  ['♠4 ♠2 ♠A ♠3','Lead a small trump toward the closed hand. Both defenders must follow spades.'],
  ['♠Q ♠5 ♠7 ♠6','South cashes the queen. West has now played both spades.'],
  ['♠8 ♦5 ♠K ♠9','West is out of spades and discards. Dummy wins the king and draws East’s last trump.'],
  ['♥2 ♥5 ♥K ♥8','A small heart brings the lead back to South’s king.'],
  ['♥7 ♥J ♥9 ♥6','West wins the jack. Declarer can afford three losers.'],
  ['♥T ♣2 ♦3 ♠T','South has no hearts left. The spade ten trumps West’s heart ten.'],
  ['♦2 ♦9 ♦K ♦7','South leads toward dummy’s diamond king.'],
  ['♦4 ♦J ♦A ♦T','The ace wins even though East played a face card.'],
  ['♦8 ♦Q ♦6 ♣3','West wins the diamond queen. East has no diamonds left.'],
  ['♣K ♣A ♣T ♣5','Dummy takes West’s king with the ace.'],
  ['♣6 ♣J ♣9 ♣4','East wins the club jack. This is the defenders’ third trick.'],
  ['♣Q ♠J ♣7 ♣8','South trumps the last club. Ten tricks make 4♠ exactly. Score 120 trick points plus 300 game bonus: 420 to North–South.']
];
function bridgeLesson(host) {
  const suits='♠♥♦♣', ranks='23456789TJQKA', lesson=element('section',null,'lesson');
  lesson.append(element('h2','A first deal, face up'));
  const hands=element('div',null,'hands');
  practiceHands.forEach((holding,i)=>{
    const block=element('div');block.append(element('strong',bridgeSeats[i]));
    holding.forEach((cards,j)=>block.append(element('span',suits[j]+' '+[...cards].map(v=>v==='T'?'10':v).join(' '),j===1||j===2?'red':'')));
    hands.append(block);
  });
  const live=element('div');live.setAttribute('aria-live','polite');
  const prev=element('button','Previous trick'), next=element('button','Next trick');
  let index=0, leader=3, ns=0;
  const records=practiceTricks.map(([line,note])=>{
    const cards=line.split(' '),lead=cards[0][0],start=leader;
    const power=c=>(c[0]==='♠'?30:c[0]===lead?15:0)+ranks.indexOf(c[1]);
    const high=cards.reduce((best,c,i)=>power(c)>power(cards[best])?i:best,0);
    leader=(start+high)%4;if(leader%2===0)ns++;
    return {cards,start,winner:leader,ns,note};
  });
  function draw(){
    const r=records[index];live.replaceChildren(element('h3','Trick '+(index+1)+' of 13'),element('p',bridgeSeats[r.start]+' leads.'));
    const plays=element('div',null,'plays');
    r.cards.forEach((card,i)=>{const tag=element('div');tag.append(element('small',bridgeSeats[(r.start+i)%4]),element('strong',card.replace('T','10'),/[♥♦]/.test(card)?'red':''));plays.append(tag);});
    live.append(plays,element('p',r.note),element('strong','North–South '+r.ns+' · East–West '+(index+1-r.ns)));
    prev.disabled=index===0;next.disabled=index===12;
  }
  prev.onclick=()=>{index--;draw();};next.onclick=()=>{index++;draw();};
  lesson.append(hands,live,prev,next);host.append(lesson);draw();
}
