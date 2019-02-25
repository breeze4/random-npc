const genderTable = ['Male', 'Female', 'Male', 'Female'];

const genderNamesTable = {
  1: ['rut', 'en', 'os', 'an', 'in', 'ak', 'il', 'ik'],
  2: ['lynn', 'lia', 'ra', 'ley', 'ina', 'eth', 'lia', 'nor'],
  3: ['li', 'al', 'er', 'as', 'riel', 'urt', 'on', 'org'],
  4: ['na', 'aya', 'yn', 'na', 'ila', 'na', 'tha', 'gri']
}

const feature1Table = [
  'Tattooed / Pierced / Unusual',
  'Long / Large / Loud / Extravagant',
  'Short / Small / Quiet / Simple',
  'Missing / Injured',
  'Beautiful / Ugly',
  'Colourful / Dyed / Painted'];

const feature1NamesTable = {
  1: ['omma', 'ryl', null, null, null, 'li', 'tu', 'og'],
  2: ['ogg', 'tha', null, null, null, 'mer', 'ana', 'oto'],
  3: ['osgra', 'ina', 'ow', null, null, 'wun', 'dra', 'ust'],
  4: ['ed', 'ala', 'em', null, null, 'men', 'ado', null],
  5: ['tirl', 'yni', null, null, null, 'alv', 'la', 'g'],
  6: ['wod', 'arun', null, null, null, 'ip', 'reg', 'ak']
}

const feature2Table = [
  'Nose / Voice',
  'Eyes / Stare',
  'Beard / Hair / Sideburns',
  'Ears / Hearing',
  'Mouth / Laugh',
  'Head / Forehead / Face',
  'Clothing',
  'Skin / Scar',
  'Shoes / Hat',
  'Teeth / Nails / Hands'
];

const feature2NamesTable = {
  1: ['Dal', 'Taer', 'Mar', 'Dyl', 'Eth', 'Clad', 'Gal', 'Bok'],
  2: ['Hour', 'Keth', 'Dan', 'Eth', 'La', 'Ged', 'Ari', 'Gun'],
  3: ['Kal', 'Elin', 'San', 'Jord', 'Gab', 'Dap', 'Fae', 'Ton'],
  4: ['Gat', 'Ay', 'Tar', 'Gab', 'Zach', 'Jip', 'Avil', 'Tar'],
  5: ['Brot', 'Lae', 'Wil', 'Zach', 'Hay', 'Cos', 'Tyr', 'Kez'],
  6: ['Har', 'Sil', 'Fin', 'Al', 'Dyl', 'Glon', 'Yen', 'Vug'],
  7: ['Strom', 'Arth', 'Elk', 'La', 'Iv', 'Smid', 'Rad', 'No'],
  8: ['Glor', 'Sca', 'Jop', 'Iv', 'Jord', 'Jen', 'Ven', 'Kir'],
  9: ['Thog', 'Evin', 'Ric', 'Kar', 'Al', 'Tin', 'Lan', 'Bro'],
  10: ['Demm', 'Kyr', 'Bel', 'Hay', 'Kar', 'Deb', 'Dan', 'Gor']
}


const raceTable = ['Dwarf', 'Elf', 'Halfling', 'Human', 'Human', 'Gnome', 'Half-Elf', 'Half-Orc'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomNumber = (dice) => {
  return getRandomInt(1, dice);
}

// const { name, race, gender, feature1, feature2 } = npc;
export const generateRandomNPC = () => {

  // race
  const raceRoll = generateRandomNumber(8);
  const race = raceTable[raceRoll - 1];

  // gender
  const genderRoll = generateRandomNumber(4);
  const gender = genderTable[genderRoll - 1];
  const genderName = genderNamesTable[genderRoll][raceRoll - 1];

  // feature1
  const feature1Roll = generateRandomNumber(6);
  const feature1 = feature1Table[feature1Roll - 1];
  const feature1Name = feature1NamesTable[feature1Roll][raceRoll - 1];


  // feature2
  const feature2Roll = generateRandomNumber(10);
  const feature2 = feature2Table[feature2Roll - 1];
  const feature2Name = feature2NamesTable[feature2Roll][raceRoll - 1];

  const name = `${feature2Name}${feature1Name}${genderName}`;

  return {
    name,
    race,
    gender,
    feature1,
    feature2
  }
}

