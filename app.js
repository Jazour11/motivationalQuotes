let btn = document.getElementById('btn');
let output = document.getElementById('output')
let quote = 
[
'"You gotta be hungry." - Les Brown',
'"If you are not willing to risk the unusual, you will have to settle for the ordinary."  - Jim Rohn',
'"Formal education will make you a living; self-education will make you a fortune." - Jim Rohn',
'"If you want to be successful you have to jump, theres no way around it." - Steve Harvey',
'"If you think you can do a thing or think you cant do a thing, youre right." - Henry Ford',
'"You cant build a reputation on what you are going to do." - Henry Ford',
'“Do not fear mistakes. You will know failure. Continue to reach out.” Benjamin Franklin',
'“Your past does not equal your future.” – Tony Robbins.',
'“Most people fail in life because they major in minor things.” – Tony Robbins',
'“I dont stop when Im tired, I stop when Im done.” - David Goggins',
'“You are stopping you, you are giving up instead of getting hard.” David Goggins',
'“The thing that’s going to kill your dream is the obsession about what other people are going to think about you.” - Ed Mylett',
'"Failure is not an option. Everyone has to succeed." Arnold schwarzenegger',
'“If you will live like no one else, later you can live like no one else.” - Dave Ramsey',
'“Fear is the enemy of hope.” - Dave Ramsey',
'"No matter how bad it is or how bad it gets I am going to make it." - Les Brown',
'"If you are born poor it’s not your mistake, but if you die poor it’s your mistake." - Bill Gates',
'"Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself." - Bill Gates',
'“One of the only ways to get out of a tight box is to invent your way out.” – Jeff Bezos',
'“In business, what’s dangerous is not to evolve.” Jeff Bezos',
'"If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, its not." Elon Musk',
'"Its OK to have your eggs in one basket as long as you control what happens to that basket." Elon Musk',
'"Theres no shortage of money, only of people thinking big enough."Grant Cardone',
'“Success is your duty, obligation and responsibility.” Grant Cardone',
'“I grew up believing that anything is possible. And when you’re not aware there are any limitations, nothing stops your from trying” - Sam Zell',
'“The environment you spend most of your waking hours in reflects who you are and the type of people you want working with you and for you.”Sam Zell',
'"The greatest difficulty always comes right before the birth of a dream."Joel Osteen',
'“Your time is limited, so don’t waste it living someone else’s life.” - Steve Jobs',
'“Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.” - Steve Jobs',
'“You have to believe in what you do in order to get what you want.” - Larry Ellison',
'“If you double the number of experiments you do per year youre going to double your inventiveness.” – Jeff Bezos',
'"Always plenty to do. Cannot well be idle and believe will rather wear out than rust out." - Henry J. Heinz',
'“Luck is a dividend of sweat. The more you sweat, the luckier you get.” - Ray Kroc',
'"High expectations are the key to everything." - Sam Walton',
'"Swim upstream. Go the other way. Ignore the conventional wisdom." - Sam Walton',
'“You must expect great things of yourself before you can do them.” – Michael Jordan',
'“You don’t need to have a 100 person company to develop that idea.” - Larry Page',
'"When wealth is lost, nothing is lost; when health is lost, something is lost; when character is lost, all is lost." - Billy Graham',

];
btn.addEventListener('click', function(){
   var randomQuote = quote[Math.floor(Math.random() * quote.length)]
   output.innerHTML = randomQuote;
})