//const classes = require("./Sprint-Challenge--JavaScript/challenges/classes");
//const functions = require("./Sprint-Challenge--JavaScript/challenges/functions");
//const prototypes = require("./Sprint-Challenge--JavaScript/challenges/prototypes");

// echo -en "\nmodule.exports = {uni,contactInfo,graduates,universities,tyrannosaurus,stegosaurus,velociraptor}" >> ./Sprint-Challenge--JavaScript/challenges/objects-arrays.js

const {populationTotal,largerPopulation,lowerCase,animalNames,zooAnimals,uni,contactInfo,graduates,universities,tyrannosaurus,stegosaurus,velociraptor} = require("../../Sprint-Challenge--JavaScript/challenges/objects-arrays");

describe("Testing accessing properties in objects",async () => {

    test("Test weight of tyrannosaurus",async () => {
        expect(tyrannosaurus.weight).toBe("7000kg");
    });

    test("Test diet of velociraptor",async () => {
        expect(velociraptor.diet).toBe("carnivorous");
    });

    test("Test length of stegosaurus",async () => {
        expect(stegosaurus.length).toBe("9m");
    });

    test("Test time period of tyrannosaurus",async () => {
        expect(tyrannosaurus.period).toBe("Late Cretaceious");
    });

    test("Test roar method of tyrannosaurus",async () => {
        expect(tyrannosaurus.roar()).toBe("RAWERSRARARWERSARARARRRR!");
    });
});

describe("Testing Arrays",async () => {

    test("Sorting the universities alphabetically",async () => {
        let schools = [];
        for(let i = 0;i < graduates.length;i++){
            schools.push(graduates[i].university);
        }
        schools.sort();
        expect(universities).toEqual(schools);
    });

    test("Checking if space exists between first name and email",async () => {
        let contacts = [];
        for(let i = 0;i < graduates.length;i++){
            contacts.push(`${graduates[i].first_name} ${graduates[i].email}`);
        }
        expect(contactInfo).toEqual(contacts);
    });

    test("Testing variable 'uni'",async () => {
        const jestUni = [];
        for(let i = 0;i < graduates.length;i++){
            if(graduates[i].university.match(/Uni/g)){
                jestUni.push(graduates[i].university);
            }
        }
        expect(uni).toEqual(jestUni);
    });
});

describe("Testing array methods",async () => {

    test("Testing forEach method and the resultant array with scientific and animal name",async () => {
        const jestZooAnimals = [];
        zooAnimals.forEach( ele => jestZooAnimals.push({
            name:ele.animal_name,
            Scientific:ele.scientific_name
            })
        )
        expect(animalNames).toEqual(jestZooAnimals);
    });

    test("Testing lowerCase function",async () => {
        const jestLowerCase = [];
        zooAnimals.map( ele => jestLowerCase.push(ele["animal_name"].toLowerCase()));
        expect(lowerCase).toEqual(jestLowerCase);
    });

    test("Testing population count function",async () => {
        const jestLargerPopulation = zooAnimals.filter(ele => ele["population"] < 5);
        expect(largerPopulation).toEqual(jestLargerPopulation);
    });

    test("total animal population",async () => {
        const jestPopulationTotal = zooAnimals.map( ele => ele.population).reduce(function(x,y){return x+y})
        expect(populationTotal).toEqual(jestPopulationTotal);
    });
});

////////////////////////////////////////////////////////////