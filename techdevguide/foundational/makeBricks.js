// We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

function makeBricks(small, large, goal) {
  return goal % 5 <= small && goal - large * 5 <= small;
}

console.log(makeBricks(3, 1, 8) === true);
console.log(makeBricks(3, 1, 9) === false);
console.log(makeBricks(3, 2, 10) === true);
