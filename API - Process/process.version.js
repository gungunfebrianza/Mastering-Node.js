/*The process.versions property returns an object listing the version strings
of Node.js and its dependencies. process.versions.modules indicates the
current ABI version, which is increased whenever a C++ API changes.

Node.js will refuse to load modules that were compiled against a different
module ABI version.*/

console.log(process.versions);
