//ranked matches calculator for DIO
let victories = 101

let defeats = 1

let matchResults = 0

let heroRank = ""


function results(){ 
 matchResults = victories - defeats
 return matchResults
}

function rank(){
 if (matchResults <= 10){
  heroRank = "Iron"
  }
  
 else if (matchResults <= 20){
   heroRank = "Bronze"
   }
   
  else if (matchResults <= 50){
    heroRank = "Silver"
    }
    
    else if (matchResults <= 80){
     heroRank = "Gold"
     }
     
     else if (matchResults <= 90){
      heroRank = "Diamond"
      }
      
      else if (matchResults <= 100){
      heroRank = "Legendary"
      }
      
       else if (matchResults){
       heroRank = "Immortal"
       }
return heroRank
}

function getRank() {
 results()
 rank()
 console.log ("The hero has " + victories + " victories, " + defeats + " defeats and is on the " + heroRank + " rank.")
}

getRank()

