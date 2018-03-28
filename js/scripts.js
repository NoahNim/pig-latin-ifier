// Business Logic
// Variable for constanants. Excludes q and y for the purposes of this program
var consonants = [B, C, D, F, G, H, J, K, L, M, N, P, R, S, T, V, W, X, Z,];
// Variable containing vowels
var vowels = [A, E, I, O, U];


// Front End Logic
$(document).ready(function(event) {

  $("#pig-form").submit(function(event){
    event.preventDefault();
    var pigInput = $("#pig-input").val();

  });
});
