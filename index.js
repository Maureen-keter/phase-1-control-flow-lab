function scuberGreetingForFeet(distance){
  const ride =distance;
if (ride<=400){
  return "This one is on me!";
}
else if (ride>2000 && ride <2500){
  return "I will gladly take your thirty bucks."
}
else if(ride>2500){
  return "No can do."
}
}

function ternaryCheckCity(destination){
    return destination === "NYC" ? "Ok, sounds good." : "No go." ;
}
 
function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
    case "generous":
        return "Thank you so much.";
    case "not as generous":
        return "Thank you.";
        default:
            return "Bye."
  }
}