// Create Obj w/ task, subtext, & img src
const holdingImg = 'https://travishowell.net/wp-content/uploads/2019/03/sunset-3488162_1920.jpg';

const holdingTag = 'Something clever, coming shortly ;)';
//New Obj
const tasks = {
  0: {
    task: "Apply for jobs",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/blogging-336376_1920.jpg',
    tagLine: 'Time to move up that corporate ladder!',
  },
  1: {
    task: "Brew",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/20160515_164716.jpg',
    tagLine: 'Grab your brewdog and make something tasty!',
  },
  2: {
    task: "Call an old friend",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  3: {
    task: "Call your best friend",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  4: {
    task: "Call your brother",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  5: {
    task: "Call your dad",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  6: {
    task: "Call your grandma",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  7: {
    task: "Call your mom",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  8: {
    task: "Call your sister",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cell-phone-690192_1920.jpg',
    tagLine: 'You really do have the time.',
  },
  9: {
    task: "Checkout a new part of town",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/madrid-3021998_1920.jpg',
    tagLine: 'Seriously, time to explore the unknown and see what you\'re missing out on!',
  },
  10: {
    task: "Clean up",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/chaos-227972_1920.jpg',
    tagLine: 'This mess isn\'t doing you any favors...',
  },
  11: {
    task: "Clean your car",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/mercedes-1338063_1920.jpg',
    tagLine: 'You spend...HOW much time in it??',
  },
  12: {
    task: "Climb",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/climbing-2264698_1920.jpg',
    tagLine: 'Somebody\'s gotta be the next Alex Honnold!',
  },
  13: {
    task: "Code for an hour or two",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/coding-924920_1920.jpg',
    tagLine: 'Put that fancy Macbook to use!',
  },
  14: {
    task: "Create a to-do list",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/to-do-2607082_1920.jpg',
    tagLine: 'Let\'s plan ahead and seize the day!',
  },
  15: {
    task: "Do something nice for someone",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/peru-641632_1920.jpg',
    tagLine: 'A friendly gesture can turn someone\'s day around!',
  },
  16: {
    task: "Do something nice for your SO",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/couple-2424928_1920.jpg',
    tagLine: 'Show them some appreciation, they deserve it!',
  },
  17: {
    task: "Do the dishes",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/dirty-2569516_1920.jpg',
    tagLine: 'I\'m never going to let them pile up like this again...',
  },
  18: {
    task: "Floss",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/dental-842314_1280.jpg',
    tagLine: 'Seriously, how long has it been?',
  },
  19: {
    task: "Get a carwash",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/wash-a-car-1822415_1920.jpg',
    tagLine: 'Get that baby shining like new!',
  },
  20: {
    task: "Go for a bike ride",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/schlern-55375_1920.jpg',
    tagLine: 'It will make you feel like a kid again!',
  },
  21: {
    task: "Go for a run",
    imgUrl: '',
    tagLine: '',
  },
  22: {
    task: "Go for a run",
    imgUrl: '',
    tagLine: '',
  },
  23: {
    task: "Go for coffee",
    imgUrl: '',
    tagLine: '',
  },
  24: {
    task: "Go grocery shopping",
    imgUrl: '',
    tagLine: '',
  },
  25: {
    task: "Go on a walk to pick up trash",
    imgUrl: '',
    tagLine: '',
  },
  26: {
    task: "Go snowshoeing",
    imgUrl: '',
    tagLine: '',
  },
  27: {
    task: "Go to gym",
    imgUrl: '',
    tagLine: '',
  },
  28: {
    task: "Go to library",
    imgUrl: '',
    tagLine: '',
  },
  29: {
    task: "Go to the museum",
    imgUrl: '',
    tagLine: '',
  },
  30: {
    task: "Go to yoga",
    imgUrl: '',
    tagLine: '',
  },
  31: {
    task: "Hit the Poudre",
    imgUrl: '',
    tagLine: '',
  },
  32: {
    task: "Knock something off your to-do list",
    imgUrl: '',
    tagLine: '',
  },
  33: {
    task: "Learn guitar (45 min)",
    imgUrl: '',
    tagLine: '',
  },
  34: {
    task: "Learn to dj (45 min)",
    imgUrl: '',
    tagLine: '',
  },
  35: {
    task: "Listen to a new album",
    imgUrl: '',
    tagLine: '',
  },
  36: {
    task: "Listen to an old favorite album",
    imgUrl: '',
    tagLine: '',
  },
  37: {
    task: "Listen to your favorite album",
    imgUrl: '',
    tagLine: '',
  },
  38: {
    task: "Make a new playlist",
    imgUrl: '',
    tagLine: '',
  },
  39: {
    task: "Meal plan",
    imgUrl: '',
    tagLine: '',
  },
  40: {
    task: "Meal prep",
    imgUrl: '',
    tagLine: '',
  },
  41: {
    task: "Meditate",
    imgUrl: '',
    tagLine: '',
  },
  42: {
    task: "Plan a trip",
    imgUrl: '',
    tagLine: '',
  },
  43: {
    task: "Play disc golf",
    imgUrl: '',
    tagLine: '',
  },
  44: {
    task: "Play horn",
    imgUrl: '',
    tagLine: '',
  },
  45: {
    task: "Play some pickup soccer",
    imgUrl: '',
    tagLine: '',
  },
  46: {
    task: "Play with dog outside",
    imgUrl: '',
    tagLine: '',
  },
  47: {
    task: "Read",
    imgUrl: '',
    tagLine: '',
  },
  48: {
    task: "Read in park",
    imgUrl: '',
    tagLine: '',
  },
  49: {
    task: "Read the news",
    imgUrl: '',
    tagLine: '',
  },
  50: {
    task: "Read up on some new technologies",
    imgUrl: '',
    tagLine: '',
  },
  51: {
    task: "Revisit an old app",
    imgUrl: '',
    tagLine: '',
  },
  52: {
    task: "Schedule a dentist appointment",
    imgUrl: '',
    tagLine: '',
  },
  53: {
    task: "Schedule a doctors appointment",
    imgUrl: '',
    tagLine: '',
  },
  54: {
    task: "Setup a savings account",
    imgUrl: '',
    tagLine: '',
  },
  55: {
    task: "Start building a new app",
    imgUrl: '',
    tagLine: '',
  },
  56: {
    task: "Take dog to dog park",
    imgUrl: '',
    tagLine: '',
  },
  57: {
    task: "Tune-up your bike",
    imgUrl: '',
    tagLine: '',
  },
  58: {
    task: "Vacuum",
    imgUrl: '',
    tagLine: '',
  },
  59: {
    task: "Walk a new trail",
    imgUrl: '',
    tagLine: '',
  },
  60: {
    task: "Walk dog",
    imgUrl: '',
    tagLine: '',
  },
  61: {
    task: "Watch a climbing video",
    imgUrl: '',
    tagLine: '',
  },
  62: {
    task: "Watch a documentary",
    imgUrl: '',
    tagLine: '',
  },
  63: {
    task: "Watch a new movie",
    imgUrl: '',
    tagLine: '',
  },
  64: {
    task: "Watch a soccer match",
    imgUrl: '',
    tagLine: '',
  },
  65: {
    task: "Watch soccer highlights",
    imgUrl: '',
    tagLine: '',
  },
  66: {
    task: "Work on a new skill",
    imgUrl: '',
    tagLine: '',
  },
  67: {
    task: "Work on client website",
    imgUrl: '',
    tagLine: '',
  },
  68: {
    task: "Work on design skills",
    imgUrl: '',
    tagLine: '',
  },
  69: {
    task: "Work on your budget",
    imgUrl: '',
    tagLine: '',
  },
  70: {
    task: "Work on your resume",
    imgUrl: '',
    tagLine: '',
  },
  71: {
    task: "Work on your SQL skills",
    imgUrl: '',
    tagLine: '',
  },
  72: {
    task: "Work on your website",
    imgUrl: '',
    tagLine: '',
  },
  73: {
    task: "Write a blog post",
    imgUrl: '',
    tagLine: '',
  }
}

export default tasks;
