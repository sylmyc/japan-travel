var counter = 5;
function upvote() {
 counter++;
 document.getElementById("votesYes").innerText = counter + " Yes";
}
function downvote() {
  counter++;
  document.getElementById("votesNo").innerText = counter + " No";
}