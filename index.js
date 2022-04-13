import inquier from 'inquirer';

class DigitalPal {

    constructor() {
        this.hungry = false;
        this.sleepy = false;
        this.bored = true;
        this.age = 0;
    }

    increaseAge() {
        this.age += 1;
        
        return `Happy Birthday to me! I am ${this.age}`;
    }

    feed() {
        if (this.hungry) {
            this.hungry = false;
            this.sleepy = true;
            return "That was yummy \nand I need to sleep";
        } else {
            return `No thanks! I'm full. \nI have full energy and need playing`;
        }
    };

    sleep() {
        if (this.sleepy) {
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
            return "Zzzzzz \nAfter sleeping, we can play";
        } else {
            return "No way! I'm not tired.";
        }
    };

    play() {
        if (this.bored) {
            this.bored = false;
            this.hungry = true;
            return "Yay! Let's play! \nAnd I'm getting hungry";
        }
        else {
            return "Not right now.Later?";
        }
    }
}

const careOfPet = new DigitalPal();

function care() {
    
    inquier.prompt(
        [
            {
                message: "Choose one that, needed for your pet",
                name: "careLists",
                type: "list",
                choices: ['hungry', "sleepy", "bored", "age"]
            }
        ]
    ).then(result => {
        if (result.careLists === 'hungry') {
            console.log("hungry");
            console.log(careOfPet.feed());
        }
        else if (result.careLists === 'sleepy') {
            console.log("sleepy");
            console.log(careOfPet.sleep());
        }
        else if (result.careLists === 'bored') {
            console.log("bored");
            console.log(careOfPet.play());
        } else {
            console.log("age");
            console.log(careOfPet.increaseAge());
        }
        care();
    });
}
care();









// // constructor function which can take in a series of values and create objects
// // with the properties contained inside
// function Character(name, profession, gender, age, strength, hitpoints) {
//     this.name = name;
//     this.profession = profession;
//     this.gender = gender;
//     this.age = age;
//     this.strength = strength;
//     this.hitpoints = hitpoints;
  
//     // method which prints all of the stats for a character
//     this.printStats = function() {
//       console.log("Name: " + this.name + "\nProfession: " + this.profession +
//       "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
//       this.strength + "\nHitPoints: " + this.hitpoints);
//       console.log("\n-------------\n");
//     };
  
//     // method which determines whether or not a character's "hitpoints" are less than zero
//     // and returns true or false depending upon the outcome
//     this.isAlive = function() {
//       if (this.hitpoints > 0) {
//         console.log(this.name + " is still alive!");
//         console.log("\n-------------\n");
//         return true;
//       }
//       console.log(this.name + " has died!");
//       return false;
//     };
  
//     // method which takes in a second object and decreases their "hitpoints" by this character's strength
//     this.attack = function(character2) {
//       character2.hitpoints -= this.strength;
//     };
  
//     // method which increases this character's stats when called
//     this.levelUp = function() {
//       this.age += 1;
//       this.strength += 5;
//       this.hitpoints += 25;
//     };
//   }
  
//   // creates two unique characters using the "character" constructor
//   var warrior = new Character("Crusher", "Warrior", "Male", 25, 10, 75);
// var rogue = new Character("Dodger", "Rogue", "Female", 23, 20, 50);
  
  
//   warrior.printStats();
//   rogue.printStats();
  
//   rogue.attack(warrior);
//   warrior.printStats();
//   warrior.isAlive();
  
//   rogue.levelUp();
//   rogue.printStats();
  
//   // while loop that continues to run so long as both characters' "hitpoints" are above zero
//   while (warrior.isAlive() === true && rogue.isAlive() === true) {
//     // characters deal damage to one another
//     warrior.attack(rogue);
//     rogue.attack(warrior);
//     // prints stats to show changes
//     warrior.printStats();
//     rogue.printStats();
//   }