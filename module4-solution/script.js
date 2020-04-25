(function (argument) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (name in names){
  var r = names[name].toLowerCase();
  if (r.charAt(0) === 'j'){
    byeSpeaker.speak(names[name]);
  }
  else{
    helloSpeaker.speak(names[name]);
  }
}

})();
