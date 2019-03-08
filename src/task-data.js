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
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/man-1245658_1920.jpg',
    tagLine: 'Time to get in shape!',
  },
  22: {
    task: "Go for a beer",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/beer-2218900_1280.jpg',
    tagLine: 'Sometimes you need to unwind after a hard day\'s work!',
  },
  23: {
    task: "Go for coffee",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/coffee-983955_1920.jpg',
    tagLine: 'A little caffeine will get you on track.',
  },
  24: {
    task: "Go grocery shopping",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/shopping-1232944_1920.jpg',
    tagLine: 'That fridge is looking a little empty...',
  },
  25: {
    task: "Go on a walk to pick up trash",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/garbage-2729608_1280.jpg',
    tagLine: 'Let\'s get this world looking the way it should!',
  },
  26: {
    task: "Go snowshoeing",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/matterhorn-939_1280.jpg',
    tagLine: 'Take advantage of that snow while it lasts!',
  },
  27: {
    task: "Go to gym",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cross-fit-1126999_1280.jpg',
    tagLine: 'Time to work on that beach bod!',
  },
  28: {
    task: "Go to the library",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/library-869061_1280.jpg',
    tagLine: 'Check out that book you\'ve been wanting to read!',
  },
  29: {
    task: "Go to the museum",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/woman-1283009_1280.jpg',
    tagLine: 'Find some culture for once!',
  },
  30: {
    task: "Go to yoga",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/yoga-2959226_1280.jpg',
    tagLine: 'Fitness and mindfulness all in one!',
  },
  31: {
    task: "Hit the canyon",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/cliff-1866832_1280.jpg',
    tagLine: 'I mean, assuming you have one nearby...',
  },
  32: {
    task: "Knock something off your to-do list",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/to-do-2607082_1920.jpg',
    tagLine: 'You made one for a reason, after all.',
  },
  33: {
    task: "Learn guitar",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/guitar-756326_1280.jpg',
    tagLine: 'Soon enough, you\'ll be singing those campfire songs.',
  },
  34: {
    task: "Learn to dj",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/turntable-1337986_1280.jpg',
    tagLine: 'More than just pushing buttons. (Or is it?)',
  },
  35: {
    task: "Listen to a new album",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/vinyl-records-945396_1280.jpg',
    tagLine: 'Broaden your taste a little!',
  },
  36: {
    task: "Listen to an old favorite album",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/vinyl-records-945396_1280.jpg',
    tagLine: 'Take a trip down memory lane.',
  },
  37: {
    task: "Listen to your favorite album",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/vinyl-records-945396_1280.jpg',
    tagLine: 'How long\'s it been?',
  },
  38: {
    task: "Make a new playlist",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/headphones-2588235_1280.jpg',
    tagLine: 'Get a little creative here!',
  },
  39: {
    task: "Meal plan",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/beans-close-up-containers-1640775.jpg',
    tagLine: 'Make the week a little easier',
  },
  40: {
    task: "Meal prep",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/beans-close-up-containers-1640775.jpg',
    tagLine: 'No more $12 lunches during the week...',
  },
  41: {
    task: "Meditate",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/meditation-2214532_1280.jpg',
    tagLine: 'Find that inner peace.',
  },
  42: {
    task: "Plan a trip",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/vw-camper-336606_1920.jpg',
    tagLine: 'Time to head somewhere new!',
  },
  43: {
    task: "Play disc golf",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/disc-golf-3319992_1280.jpg',
    tagLine: 'Throwing the disc in nature with some friends? Sounds pretty nice.',
  },
  44: {
    task: "Play an instrument",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/french-horn-1566587_1280.jpg',
    tagLine: 'Or reawaken your old passion.',
  },
  45: {
    task: "Play some pickup soccer",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/soccer-1457988_1280.jpg',
    tagLine: 'Exercise and fun! Embrace your inner Messi.',
  },
  46: {
    task: "Play with your dog outside",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/dog-3066476_1280.jpg',
    tagLine: 'Give the pupper some love!',
  },
  47: {
    task: "Read",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/leaves-1076307_1280.jpg',
    tagLine: 'Get lost in a story.',
  },
  48: {
    task: "Read a book in the park",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/poet-2444548_1280.jpg',
    tagLine: 'Beautiful weather and a good book.',
  },
  49: {
    task: "Read the news",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/breakfast-1869772_1280.jpg',
    tagLine: 'Keep yourself up to date.',
  },
  50: {
    task: "Read up on some new technologies",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/laptop-3174729_1280.jpg',
    tagLine: 'And you call yourself a techie?',
  },
  51: {
    task: "Revisit an old app",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/coding-924920_1920.jpg',
    tagLine: 'Is it really looking how you want?',
  },
  52: {
    task: "Schedule a dentist appointment",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/dentist-1639683_1280.jpg',
    tagLine: 'Fight off those cavities!',
  },
  53: {
    task: "Schedule a doctors appointment",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/blood-pressure-monitor-1749577_1280.jpg',
    tagLine: 'You have healthcare for a reason!',
  },
  54: {
    task: "Setup a savings account",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/money-2696228_1280.jpg',
    tagLine: 'Build yourself a brighter future!',
  },
  55: {
    task: "Start building a new app",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/ux-788002_1280.jpg',
    tagLine: 'Any burning ideas?',
  },
  56: {
    task: "Take dog to dog park",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/dog-3066476_1280.jpg',
    tagLine: 'You know it\'s what they really want!',
  },
  57: {
    task: "Tune-up your bike",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/bicycle-1850008_1920.jpg',
    tagLine: 'Get that baby shifting smooth!',
  },
  58: {
    task: "Vacuum",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/vacuum-cleaner-268161_1280.jpg',
    tagLine: 'Yeah, your floor is probably nasty.',
  },
  59: {
    task: "Walk a new trail",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/tree-779827_1280.jpg',
    tagLine: 'Experience a new view.',
  },
  60: {
    task: "Walk dog",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/man-3687274_1280.jpg',
    tagLine: 'It\'s and obligation! Every. Single. Day.',
  },
  61: {
    task: "Watch a climbing video",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/climbing-2264698_1920.jpg',
    tagLine: 'Get some inspiration to go crush!',
  },
  62: {
    task: "Watch a documentary",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/library-849797_1280.jpg',
    tagLine: 'Knowledge is power, ya know.',
  },
  63: {
    task: "Watch a new movie",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/movie-918655_1280.jpg',
    tagLine: 'Seriously!? How have you never seen that flick?',
  },
  64: {
    task: "Watch a soccer match",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/woman-638384_1280.jpg',
    tagLine: 'Tune in on the Champion\'s League!',
  },
  65: {
    task: "Watch soccer highlights",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/woman-638384_1280.jpg',
    tagLine: 'Ever seen Messi\'s Barca B debut?',
  },
  66: {
    task: "Work on a new skill",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/strategy-1080527_1280.jpg',
    tagLine: 'Everybody starts somewhere!',
  },
  67: {
    task: "Work on client website",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/mockup-654585_1280.jpg',
    tagLine: 'Get it looking reaaaaaal nice.',
  },
  68: {
    task: "Work on design skills",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/ux-787980_1280.jpg',
    tagLine: 'Time to get a little more well-rounded.',
  },
  69: {
    task: "Work on your budget",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/coins-1015125_1280.jpg',
    tagLine: 'Where can you trim the fat?',
  },
  70: {
    task: "Work on your resume",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/application-2580867_1280.jpg',
    tagLine: 'Time to get some call backs.',
  },
  71: {
    task: "Work on your SQL skills",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/coding-924920_1920.jpg',
    tagLine: 'Are you talking about... SELECT statements?',
  },
  72: {
    task: "Work on your website",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/mockup-654585_1280.jpg',
    tagLine: 'Dude! It should be top class.',
  },
  73: {
    task: "Write a blog post",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/home-office-336581_1280.jpg',
    tagLine: 'Tell the world about your adventures!',
  }
}

export default tasks;
