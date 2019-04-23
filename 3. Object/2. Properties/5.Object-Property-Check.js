var person = {
  firstName: 'Gun Gun',
  lastName: 'Febrianza',
  language: 'en',
  get lang() {
    return this.language;
  }
};

console.log('language' in person);
console.log('languages' in person);

if ('languages' in person === false) {
  console.log('Properties is not exist');
}
