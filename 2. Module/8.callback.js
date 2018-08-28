var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Gun Gun Febrianza'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (undefined) => {
  console.log(undefined);
});
