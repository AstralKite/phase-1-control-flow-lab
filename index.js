function scuberGreetingForFeet(num){
  if(num < 400)
    return "This one is on me!";

  if(num > 400 && num <2000 )
    return 'That will be twenty bucks.';
    
  if(num > 2500 )
    return 'No can do.';

  if(num > 2000 )
    return 'I will gladly take your thirty bucks.';
}

function ternaryCheckCity(dest){
  return dest === 'NYC' ? 'Ok, sounds good.' : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip) {

    case ('generous'):
      return "Thank you so much.";
      break;

    case ('not as generous'):
      return "Thank you.";
      break;

    default:
      return "Bye.";
  }
}