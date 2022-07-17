 function Addsentence() {

  let verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
            verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
            adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
            adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
 
              let output = "";
              output += '<p>'+ nouns[Math.floor(Math.random() * nouns.length)] + " " + verbs[Math.floor(Math.random() * verbs.length)] + " " + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + adverbs[Math.floor(Math.random() * adverbs.length)] + " " + preposition[Math.floor(Math.random() * preposition.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)] + "." + '</p>';
              // console.log(output);
              return output;

}

function LeftSideExtra(){

let a = Addsentence();
document.getElementById("leftSide").innerHTML+=  a;



 
   
 

}

function MainSideExtra(){
  let a = Addsentence();
  document.getElementById("MainSide").innerHTML+=  a;
}

function RightSideExtra(){
  let a = Addsentence();
  document.getElementById("RightSidee").innerHTML+=  a;
}

