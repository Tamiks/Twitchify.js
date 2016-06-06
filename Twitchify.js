var comment = document.getElementsByClassName("comment-text");
var emote = [];
var command = [];
var link = [];
var emotesrc = ["http://i.imgur.com/XMaAqez.png", "http://i.imgur.com/PhF0QyM.png"];

setInterval(function(){
  for(i = 0; comment[i] && comment[i].innerHTML; i ++){
    if(comment[i].innerHTML.indexOf("!github") != -1){
      command[i] = document.createElement("a");
      link[i] = document.createTextNode("https://github.com/tamiks");
      command[i].appendChild(link[i]);
      command[i].title = "https://github.com/tamiks";
      command[i].href = "https://github.com/tamiks";
      command[i].target = "_blank";
      comment[i].innerHTML = comment[i].innerHTML.replace("!github", "");
      comment[i].appendChild(command[i]);
    }
    if(comment[i].innerHTML.indexOf("%bibleThump") != -1){
      emote[i] = new Image();
      emote[i].src = emotesrc[1];
      emote[i].width = 16;
      comment[i].innerHTML = comment[i].innerHTML.replace("%bibleThump", "");
      comment[i].appendChild(emote[i]);
    }
    if(comment[i].innerHTML.indexOf("%spork") != -1){
      emote[i] = new Image();
      emote[i].src = emotesrc[0];
      comment[i].innerHTML = comment[i].innerHTML.replace("%spork", "");
      comment[i].appendChild(emote[i]);
    }
  }
}, 50);
