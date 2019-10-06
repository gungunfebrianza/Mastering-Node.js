const wmi = require('node-wmi');

wmi.Query({
    class: 'AntiVirusProduct',
    namespace: 'root\\SecurityCenter2'
}, (err, av) => {
    if (err) {
        console.log(err);      
        return;
    }
    console.log(av);
});