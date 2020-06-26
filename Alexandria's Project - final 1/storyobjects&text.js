// EXAMPLES!!!!
// var sampleObject = {
// id: 0,
// displayText: "the text that will be shown on screen",
// imageDisplay: "image.jpg",
// questions: ["go left","go right"],
// choices: [1,2],
// end: false
// }


// id: 1, // each object should have a unique ID
// displayText: "the text that will be shown on screen",
// imageDisplay: "image.jpg", // the name of an image file to go along with the text
// questions: ["go left"," go right"], // this is a array of questions, parallel to choices
// choices: [2,3], //an array of choices, each number brings you to a different object id/node on the tree
// end: false // are we at the end of the story?


var introStories = { 
id: 1, 
displayText: "What Would You Like To Do?",
imageDisplay: "scarystoryintro.jpg", 
questions: ["Stay At Home","Go To A Party","Go To Your Friend's House"], 
choices: [2, 3, 4], 
end: false //we are not at the end of story. 
}

         /// STAY AT HOME 

var stayHome = { 
id: 2, 
displayText: "Let's Stay Home.",
imageDisplay: "scarystoryintro.jpg", 
questions: ["Home Time!"],
choices: [2.1], 
end: false
}

var stayBegin = { 
id: 2.1, 
displayText: "There was an old woman who lived all by herself, and she was very lonely. Sitting in the kitchen one night, she said, 'Oh, I wish I had some company.'",
imageDisplay: "scarystoryintro.jpg", 
questions: ["Remain at Home", "Go To A Party", "Go To Friend's House"], 
choices: [2.2, 3, 4],
end: false
}

var stayContinue = { 
id: 2.2,
displayText: "No sooner had she spoken than down the chimney tumbled two feet from which the flesh had rotted. The old woman's eyes bulged with terror.",
imageDisplay: "whatdoyoucomefor.jpg",
questions: ["Continue..."],
choices: [2.3],
end: false
}

var stayScary = { 
id: 2.3, 
displayText: "Then two legs dropped to the hearth and attached themselves to feet. Then a body tumbled down, then two arms, and a man's head.",
imageDisplay: "whatdoyoucomefor.jpg", 
questions: ["Run Away to Friend's House", "Keep Watching!"], 
choices: [4, 2.5], //4 is 2.4 here. 
end: false
}

var stayMoreScary = { 
id: 2.5,
displayText: "As the old woman watched, the parts came together into a great gangling man. The man danced around and around the room. Faster and faster he went. Then he stopped, and looked into her eyes.",
imageDisplay: "whatdoyoucomefor.jpg", 
questions: ["Ask a question."],
choices: [2.6], 
end: false 
}

var stayEvenMore = {
id: 2.6,
displayText: " 'What do you come for?' she asked in a small voice that shivered and shook.",
imageDisplay: "whatdoyoucomefor.jpg",
questions: ["Wait..."],
choices: [2.7],
end: false 
}

var stayEnd = { 
id: 2.7,
displayText: " 'What do I come for?' he said. 'I come for - YOU!' ", 
imageDisplay: "whatdoyoucomefor.jpg", 
questions: ["Play More", "Play More Again"], //Start the "game" all over again
choices: [3, 4],
end: true
} 

			/// GO TO A PARTY

var goParty = { 
id: 3,
displayText: "Let's Go To A Party!",
imageDisplay: "scarystoryintro.jpg", 
questions: ["Party Time!"],
choices: [3.1],
end: false 
}

var partyBegin = { 
id: 3.1,
displayText: "Some boys and girls were at a party one night. There was a graveyard down the street, and they were talking about how scary it was. 'Don't ever stand on a grave after dark,' one of the boys said. 'The person inside will grab you. He'll pull you under.' 'That's not true,' one of the girls said. 'It's just a superstition.' 'I'll give you a dollar if you stand on a grave.' said the boy. ", 
imageDisplay: "scarystoryintro.jpg",
questions: [" 'Nah, no thanks.' " , " 'This is stupid.' " , " 'Sure, easy money.' "],
choices: [2, 4, 3.4], // 2 is 3.2 . 4 is 3.3 
end: false 
}


var partyContinue = { 
id: 3.4,
displayText: " 'A grave doesn't scare me,' said the girl. 'I'll do it right now.' ",
imageDisplay: "scarystoryintro.jpg",
questions: ["Let's go."],
choices: [3.5],
end: false
}


var partyMore = { 
id: 3.5,
displayText: "The boy handed her his knife. 'Stick this knife in one of the graves, ' he said. 'Then we'll know you were there.' The graveyard was filled with shadows and was as quiet as death.",
imageDisplay: "scarystoryintro.jpg",
questions: ["Change Mind" , " 'I'm not scared!' "],
choices: [2,3.7], // 2 is  3.6 
end: false
}

var partyEvenMore = { 
id: 3.7,
displayText: " 'There's nothing to be scared of,' the girl told hereself, but she was scared anyway.",
imageDisplay: "scarystoryintro.jpg",
questions: ["Keep Going"],
choices: [3.8],
end: false
}

var partyOhNO = { 
id: 3.8,
displayText: "She picked out a grave and stood on it. Then quickly she bent over and plunged the knife into the soil , and she started to leave. But she couldn't get away. Something was holding her back! She tried a second time to leave, but she couldn't move. She was filled with terror.",
imageDisplay: "girlongrave.jpg",
questions: ["Red" , "Blue"], // Pick A Color goes here, somehow.... to go to the next stage...
choices: [3.9 , 3.12], // changed 3.10 to 3.12 bc javascript was reading it as 3.1 smh
end: false 
}

var partyEnd = { 
id: 3.9,
displayText: "The girl stops panicking and finds the knife is stuck to her dress. 'I knew this was dumb,' she laughed. 'I was frightened for no reason.' She goes home and takes a nap." , 
imageDisplay: "scarystoryintro.jpg",
questions: ["Play Again" , "Play More"], //Start the "game" all over again 
choices: [2,4], 
end: true
}

var partyEndAgain = { 
id: 3.12, // changed it from 3.10 to 3.12 bc javascript was reading it as 3.1 smh 
displayText: " 'Something has got me!' she screamed, and she fell to the ground. When she didn't come back, the others went to look for her. They found her body sprawled across the grave. Without realizing it, she had plunged her knife through her skirt and had pinned it to the ground. It was only the knife that held her. She had died of fright.", 
imageDisplay: "girlongrave.jpg",
questions: ["Play Again", "Play More"], // Start the "game" all over again
choices: [2, 4],
end: true
}

           /// GO TO YOUR FRIEND'S HOUSE 

var goFriend = { 
id: 4,
displayText: "Let's Go To A Friend's House!",
imageDisplay: "scarystoryintro.jpg",
questions: ["Let's Go!"],
choices: [4.1],
end: false
}


var goFriendBegin = { 
id: 4.1,
displayText: "Sam Lewis spent the evening playing chess at his friend's house. It was about midnight when they finished their game, and he started home. Outside it was icy cold and quiet as the grave.", 
imageDisplay: "scarystoryintro.jpg",
questions: ["Go straight." , " Turn here." ],
choices: [ 4.2 , 4.3] ,
end: false
}


var goFriendEndOne = { 
id: 4.2,
displayText: "You've made it home, safe and sound. No ghosts and ghouls here tonight.",
imageDisplay: "scarystoryintro.jpg",
questions: ["Play More", "Play Again", "I want to be scared!"], //Start the "game" over, or try again for new outcome
choices: [2,3,4],
end: true
}


var goFriendContinue = { 
id: 4.3,
displayText: "As he came around a turn in the road, he was surprised to see a woman walking ahead of him. She was carrying a basket covered with a white cloth. When he caught up to her, he looked to see who it was. But she was so bundled up against the cold, it was hard to see her face.", 
imageDisplay: "scarystoryintro.jpg",
questions: [ " Ask a question. "],
choices: [4.4], 
end: false
}

var goFriendScary = { 
id: 4.4,
displayText: " 'Good evening,' Sam said. 'What bring you out so late?' But she didn't answer.",
imageDisplay: "mayicarryyourbasket.jpg",
questions: [" Creepy Lady...lets ignore her.","Ask another question"],
choices: [2, 4.6], // 2 is 4.5
end: false
}


var goFriendMore = { 
id: 4.6,
displayText: "Then he said 'May I carry your basket?' She handed it to him. From under the cloth, a small voice said, 'That's very nice of you,' and that was followed by wild laughter. Sam was so startled that he dropped the basket - out rolled a woman's head. 'It's her head!' he cried. And he started to run, and the woman and her head begain to chase him.", 
imageDisplay: "mayicarryyourbasket.jpg",
questions: ["Yellow" , "Green"],
choices: [4.7 , 4.8] ,
end: false
}


var goFriendEnd = { 
id: 4.7,
displayText: "Sam manages to out-run the woman and her head. But he trips over a rock, and gets knocked out cold. His friend finds him the next morning.",
imageDisplay: "scarystoryintro.jpg",
questions: ["Play Again" , "Play More"], //start the "game" again
choices: [2,3],
end: true
}


var goFriendEndAgain = { 
id: 4.8,
displayText: "Soon the head caught up with him. It bounded into the air and sunk its teeth into his left leg. Sam screamed with pain and ran faster. But the woman and her head stayed right behind. Soon the head leaped into the air again and bit into his other leg. Then they were gone.",
imageDisplay: "scarystoryintro.jpg",
questions: ["Play again" , "Play More"],
choices: [2, 3],
end: true
}

nodeArray = [introStories, stayHome, stayBegin, stayContinue, stayScary, stayMoreScary, stayEvenMore, stayEnd, goParty, partyBegin, partyContinue, partyMore, partyEvenMore, partyOhNO, partyEnd, partyEndAgain, goFriend, goFriendBegin, goFriendEndOne, goFriendContinue, goFriendScary, goFriendMore, goFriendEnd, goFriendEndAgain];

story0= `
There was an old woman who lived all by herself, and she was very lonely. Sitting in the kitchen one night, 
she said, "Oh, I wish I has some company." 

No sooner had she spoken than down the chimney tumbled two feet from which the flesh had rotten. The old woman's 
eyes bulged with terror. 

Then two legs dropped to the hearth and attached themselves to the feet. 

Then a body tumbled down, then two arms, and a man's head. 

As the old woman watched, the parts came together into a great, gangling man. The man danced around and around 
the room. Faster and faster he went. Then he stopped, and he looked into her eyes. 

"What do you come for?" she asked in a small voice that shivered and shook. 
"What do I come for?" he said. "I come - for YOU!" 
`;


story1= `
Some boys and girls were at a party one night. There was a graveyard down the street, 
and they were talking about how scary it was. 

"Don't ever stand on a grave after dark," one of the boys said. 
"The person inside will grab you. He'll pull you under." 
"That's not true," one of the girls said. "Its just a superstition."
"I'll give you a dollar if you stand on a grave," said the boy. 
"A grave doesn't scare me," said the girl. "I'll do it right now."
The boy handed her his knife. "Stick this knife in one of the graves," he said. 
"Then we'll know you were there." 

The graveyard was filled with shadows and was as quiet as death. 
"There is nothing to be scared of," the girl told herself, but she was scared anyway. 

She picked out a grave and stood on it. Then quickly she bent over and plunged the knife
into the soil, and she started to leave. But she couldn't get away. Something was holding 
her back! She tried a second time to leave, but she couldn't move. She was filled with terror. 

"Something has got me!" she screamed, and she fell to the ground. When she didn't come back, 
the others went to look for her. They found her body sprawled across the grave. 
Without realizing it, she had plunged the knife through her skirt and had pinned it to the ground. 
It was only the knife that held her. She had died of fright. 
`;


story2= `
Sam Lewis spent the evening playing chess at his friend's house. It was about midnight when they 
finished their game, and he started home. Outside it was icy cold and as quiet as the grave. 

As he came around a turn in the road, he was surprised to see a woman walking ahead of him. She was 
carrying a basket covered with a white cloth. When he caught up to her, he looked to see who it was. 
But she was so bundled up against the cold, it was hard to see her face. 

"Good evening," Sam said. "What brings you out so late?" But she didn't answer. 
Then he said, "May I carry your basket?" She handed it to him. From under the cloth, a small voice said, 
"That's very nice of you," and that was followed by wild laughter. 

Sam was so startled that he dropped the basket - and out rolled a woman's head. He looked at the head, and
he stared at the woman. "It's HER head!" he cried. And he started to run, and the woman and the head 
began to chase him. 

Soon the head caught up to him. It bounded into the air and sunk its teeth into his left leg. Sam screamed 
with pain and ran faster. But the woman and her head stayed right behind. Soon the head leaped into the air 
again and bit into his other leg. Then they were gone.
`;
