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
    imgUrl: 'https://lh3.googleusercontent.com/i9dPZ-EOwsyBm-K3oziWw5_5jAs5rXQ3Me4x42TQIaI4NWa3qni6e5T1rRTP-KxDtezxY_NaxVMd50pFCWbqJEnZCXsMHZwJCjXcACLib4MBxqCrB8hFsyHdl4j4P_KEJSBIHE79aDnBwWUHx6ML793yRMXYjRaQQR1cKiovZoVOJFyJxw2JqkW-u6AlyTMNY-zN2VyKXv52dqt_e4d8t5nMF0EJoQ1a8YwT4408R2wGjA6dN89gAZAYAeVTyYVX7hf74Y3I-2zpGkzj-m9GlUd3njxwbD5UcMQKbU6BZfV-eLz-121xhWIsXOqII82AkfhYZbhGqO3IRyoxXBqtEbS6eeI3twW-V66j_3jCqa6fTVtbKKE1N6OBupCNc-tyQZHa23qR_gkbfXRlSo-c70lOIfHGzSRPwueq-6mj4g3b1MFpVnsklLcz154AiAidguuTj0zi79q00V_3OTNWAXYUS1BL3gNP6vcIEDEjHHgDhu3Y6JiwjRF3cHZbfY2gb54IxaDOXV6K7uj3x1yoRLjn5XGTOW1hWhC3YpMRrDAnSi-p634v0EWrshCR86sd0uVEkE_WlydtBlHe7KbiY2wrbdORWgCkYlPkYDYOdEIqKWDtIAJ50shqmVyAthJ29Z4boEFPsggXJ1MNkEkXpRtugFj0jCo=w1370-h1826-no',
    tagLine: 'It\'s what you really want anyways...',
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
    imgUrl: 'https://cdn.pixabay.com/photo/2016/03/16/14/12/garbage-can-1260832_1280.jpg',
    tagLine: 'Let\'s get this world looking the way it should!',
  },
  26: {
    task: "Go snowshoeing",
    imgUrl: 'https://cdn.pixabay.com/photo/2010/12/02/matterhorn-939_1280.jpg',
    tagLine: 'Take advantage of that snow while it lasts!',
  },
  27: {
    task: "Go to gym",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_1280.jpg',
    tagLine: 'Time to work on that beach bod!',
  },
  28: {
    task: "Go to the library",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/06/01/06/26/open-book-1428428_1280.jpg',
    tagLine: 'Check out that book you\'ve been wanting to read!',
  },
  29: {
    task: "Go to the museum",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/03/27/16/23/woman-1283009_1280.jpg',
    tagLine: 'Find some culture for once!',
  },
  30: {
    task: "Go to yoga",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/02/03/22/10/women-1178187_1280.jpg',
    tagLine: 'Fitness and mindfulness all in one!',
  },
  31: {
    task: "Hit the canyon",
    imgUrl: 'https://cdn.pixabay.com/photo/2014/12/15/17/18/tectonic-plates-569347_1280.jpg',
    tagLine: 'I mean, assuming you have one nearby...',
  },
  32: {
    task: "Knock something off your to-do list",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/to-do-2607082_1920.jpg',
    tagLine: 'You made one for a reason, after all.',
  },
  33: {
    task: "Learn guitar",
    imgUrl: 'https://cdn.pixabay.com/photo/2015/07/31/15/01/guitar-869217_1280.jpg',
    tagLine: 'Soon enough, you\'ll be singing those campfire songs.',
  },
  34: {
    task: "Learn to dj",
    imgUrl: 'https://cdn.pixabay.com/photo/2015/03/30/12/37/pioneer-698515_1280.jpg',
    tagLine: 'More than just pushing buttons. (Or is it?)',
  },
  35: {
    task: "Listen to a new album",
    imgUrl: 'https://cdn.pixabay.com/photo/2015/07/02/10/47/record-828983_1280.jpg',
    tagLine: 'Broaden your taste a little!',
  },
  36: {
    task: "Listen to an old favorite album",
    imgUrl: 'https://cdn.pixabay.com/photo/2015/07/02/10/47/record-828983_1280.jpg',
    tagLine: 'Take a trip down memory lane.',
  },
  37: {
    task: "Listen to your favorite album",
    imgUrl: 'https://cdn.pixabay.com/photo/2015/07/02/10/47/record-828983_1280.jpg',
    tagLine: 'How long\'s it been?',
  },
  38: {
    task: "Make a new playlist",
    imgUrl: 'https://cdn.pixabay.com/photo/2017/08/06/03/17/headphones-2588235_1280.jpg',
    tagLine: 'Get a little creative here!',
  },
  39: {
    task: "Meal plan",
    imgUrl: 'https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875_1280.jpg',
    tagLine: 'Make the week a little easier',
  },
  40: {
    task: "Meal prep",
    imgUrl: 'https://c1.staticflickr.com/5/4842/45165270525_ddd5623616_b.jpg',
    tagLine: 'No more $12 lunches during the week...',
  },
  41: {
    task: "Meditate",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/08/05/22/buddhist-1807526_1280.jpg',
    tagLine: 'Find that inner peace.',
  },
  42: {
    task: "Plan a trip",
    imgUrl: 'https://cdn.pixabay.com/photo/2014/05/03/00/42/vw-camper-336606_1280.jpg',
    tagLine: 'Time to head somewhere new!',
  },
  43: {
    task: "Play disc golf",
    imgUrl: 'https://cdn.pixabay.com/photo/2015/10/04/11/16/disc-golf-970865_1280.jpg',
    tagLine: 'Throwing the disc in nature with some friends? Sounds pretty nice.',
  },
  44: {
    task: "Play horn",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/08/03/12/20/french-horn-1566587_1280.jpg',
    tagLine: 'Or reawaken your old passion.',
  },
  45: {
    task: "Play some pickup soccer",
    imgUrl: 'https://cdn.pixabay.com/photo/2018/06/12/20/17/football-3471402_1280.jpg',
    tagLine: 'Exercise and fun! Embrace your inner Messi.',
  },
  46: {
    task: "Play with your dog outside",
    imgUrl: 'https://cdn.pixabay.com/photo/2014/05/26/13/27/swiss-shepherd-dog-354526_1280.jpg',
    tagLine: 'Give the pupper some love!',
  },
  47: {
    task: "Read",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/29/12/51/adult-1869624_1280.jpg',
    tagLine: 'Get lost in a story.',
  },
  48: {
    task: "Read in park",
    imgUrl: 'https://cdn.pixabay.com/photo/2018/06/08/15/27/reading-3462508_1280.jpg',
    tagLine: 'Beautiful weather and a good book.',
  },
  49: {
    task: "Read the news",
    imgUrl: 'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg',
    tagLine: 'Keep yourself up to date.',
  },
  50: {
    task: "Read up on some new technologies",
    imgUrl: 'https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg',
    tagLine: 'You call yourself a techie?',
  },
  51: {
    task: "Revisit an old app",
    imgUrl: 'https://travishowell.net/wp-content/uploads/2019/03/coding-924920_1920.jpg',
    tagLine: 'Is it really looking how you want?',
  },
  52: {
    task: "Schedule a dentist appointment",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/09/02/16/17/dentist-1639683_1280.jpg',
    tagLine: 'Fight off those cavities!',
  },
  53: {
    task: "Schedule a doctors appointment",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/02/29/15/01/doctor-1228627_1280.jpg',
    tagLine: 'You have healthcare for a reason!',
  },
  54: {
    task: "Setup a savings account",
    imgUrl: 'https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg',
    tagLine: 'Build yourself a brighter future!',
  },
  55: {
    task: "Start building a new app",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/09/28/18/12/smartphone-1701086_1280.jpg',
    tagLine: 'Any burning ideas?',
  },
  56: {
    task: "Take dog to dog park",
    imgUrl: 'https://cdn.pixabay.com/photo/2016/11/22/18/46/adorable-1849992_1280.jpg',
    tagLine: 'You know it\'s what they really want!',
  },
  57: {
    task: "Tune-up your bike",
    imgUrl: 'https://cdn.pixabay.com/photo/2017/03/09/20/38/bike-repair-shop-2130776_1280.jpg',
    tagLine: 'Get that baby shifting smooth!',
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
