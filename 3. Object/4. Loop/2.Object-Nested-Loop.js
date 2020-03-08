let routes = {
  getLevel1: {
    getLevel2A: 'Get Level 1 A',
    getLevel2B: 'Get Level 1 B',
    getLevel2C: 'Get Level 1 C'
  },
  postLevel1: {
    postLevel2A: 'Post Level 2 A',
    postLevel2B: 'Post Level 2 B',
    postLevel2C: 'Post Level 2 C'
  },
  NALevel1: 'NA'
};

let levelOne = routes => {
  console.log('===== Level One ======');
  for (let getLevel1 in routes) {
    console.log(getLevel1);
    console.log(routes[getLevel1]);
  }
  console.log('===== Level One ======');
};

levelOne(routes);

let levelTwo = routes => {
  console.log('===== Level Two ======');
  for (let getLevel1 in routes) {
    // console.log(getLevel1);
    // console.log(routes[getLevel1]);
    for (let getLevel2 in routes[getLevel1]) {
      console.log(getLevel2);
      console.log(routes[getLevel1][getLevel2]);
    }
  }
  console.log('===== Level Two ======');
};

levelTwo(routes);
