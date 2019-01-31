const serviceBase = {
  port: 3000,
  url: 'gungunfebrianza.com'
};
const getAccounts = () => {
  return [1, 2, 3];
};

const accountService = {
  __proto__: serviceBase,
  getUrl() {
    return 'http://' + this.url + ':' + this.port;
  }
};

console.log(accountService.getUrl()); // ready to be used
