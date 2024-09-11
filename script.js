        function deepEqual(obj1, obj2) {
            function compare(a, b) {
                if (Object.keys(a).length !== Object.keys(b).length) {
                    return false;
                }
                for (let key of Object.keys(a).sort()) {
                    if (typeof a[key] === 'object' && typeof b[key] === 'object') {
                        if (!deepEqual(a[key], b[key])) {
                            return false;
                        }
                    } else if (a[key] !== b[key]) {
                        return false;
                    }
                }
                return true;
            }
            return compare(obj1, obj2);
        }

        var obj1 = { name: "Person 1", age: 5 };
        var obj2 = { age: 5, name: "Person 1" };

        console.log("Comparing JSON Objects:");
        console.log(deepEqual(obj1, obj2)); 

        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                console.log("\nCountry Flags:");
                data.forEach(country => {
                    if (country.flags && country.flags.png) {
                        console.log(country.flags.png); 
                    }
                });
            })
            .catch(error => console.error('Error fetching flags data:', error));

        // 3. Fetching and Printing Country Details
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                console.log("\nCountry Details:");
                data.forEach(country => {
                    console.log(`Name: ${country.name.common}`);
                    console.log(`Region: ${country.region}`);
                    console.log(`Sub-region: ${country.subregion}`);
                    console.log(`Population: ${country.population}`);
                    console.log('-----------------------------');
                });
            })
            .catch(error => console.error('Error fetching country details:', error));