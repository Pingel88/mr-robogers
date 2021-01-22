# _Mr. Robogers' Neighborhood_
#### _Learn to count with Mr. Robogers_
#### _By Mike Pingel_
## Technologies Used
* _HTML_
* _CSS_
* _Javascript_
* _jQuery_
* _GitHub_
## Description
#### Enter a number and Mr. Robogers will help you count up to it. He still has a few kinks to work out from his old programming for a TV show.
## Setup/Installation Instructions
* Viewable at: https://pingel88.github.io/mr-robogers/
* Alternatively, to view this webpage and the project contents offline:
  * Copy the repository URL to your clipboard: `https://github.com/Pingel88/mr-robogers.git`
  * Open Git Bash or your preferred equivalent
  * Change the current working directory to where you want the cloned directory
  * Type `git clone`, then paste the URL from your clipboard and press enter
  * Navigate to the top level of the cloned directory
  * Open index.html to view the webpage
## Specs
```
Describe: beepBoop()
Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]);

Test: "It should return an array with [1, 2, 3, 4, 5, 6, 7, 8, 9] if the number 9 is inputted"
Expect(beepBoop(9).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

Test: "It should return an array with ["Beep!", 2, 3, 4, 5, 6, 7, 8, 9] if the number 9 is inputted"
Expect(beepBoop(9).toEqual(["Beep!", 2, 3, 4, 5, 6, 7, 8, 9]);

Test: "It should return an array with ["Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"] if the number 10 is inputted"
Expect(beepBoop(10).toEqual(["Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]);

Test: "It should return an array with [Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, "Beep!"] if the number 10 is inputted"
Expect(beepBoop(10).toEqual([Beep!, Boop!, 3, 4, 5, 6, 7, 8, 9, "Beep!"]);

Test: "It should return an array with [Beep!, 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"] if the number 11 is inputted"
Expect(beepBoop(11).toEqual([Beep!, 2, 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!"]);

Test: "It should return an array starting and ending with ["Beep!", "Boop!", 3, 4, ... "Beep!", "Boop!", "Boop!", "Boop!"] if the number 22 is inputted"
Expect(beepBoop(22).toEqual(["Beep!", "Boop!", 3, 4, ... "Beep!", "Boop!", "Boop!", "Boop!"]);

Test: "It should return an array starting and ending with ["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, ... "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"] if the number 33 is inputted"
Expect(beepBoop(33).toEqual(["Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, ... "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]);

Test: "It should return a string with "Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!" if the number 10 is inputted"
Expect(beepBoop(10).toEqual("Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!");

Test: "It should return Mr. Robogers' result when a number is submitted in a field in a form"
Code: $("form#robogers-input").submit(function(event) {
         $("#robogers-output").text(beepBoop($("input#robogers-input").val());
      };
Expect: Empty <p> element to be populated with Mr. Robogers' counting.
```

## Contact Information
#### Mike Pingel mdpingel@gmail.com
## Copyright & License Information
#### MIT
#### Copyright &copy; 2021 Michael Pingel