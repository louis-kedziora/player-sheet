const mongoose = require("mongoose");


const characterSchema = {
  name: String,
  characterClass: String,
  race: String,
  background: String,
  alignment: String,
  languagesKnown: String,
  armorProficiences: String,
  weaponProficiences: String,
  toolProficiences: String,
  hpMax: Number,
  currentHP: Number,
  str: Number,
  int: Number,
  dex: Number,
  wis: Number,
  con: Number,
  char: Number,
  ac: Number,
  speed: Number,
  level: Number,
  hitDice: String,
  maxHitDice: Number,
  currentHitDice: Number,
  maxOneSpellSlots: Number,
  currentOneSpellSlots: Number,
  maxTwoSpellSlots: Number,
  currentTwoSpellSlots: Number,
  maxThreeSpellSlots: Number,
  currentThreeSpellSlots: Number,
  trainedSkills: {
    athletics: Boolean,
    acrobatics: Boolean,
    sleightOfHand: Boolean,
    stealth: Boolean,
    arcana: Boolean,
    history: Boolean,
    investigation: Boolean,
    nature: Boolean,
    religion: Boolean,
    animalHandling: Boolean,
    insight: Boolean,
    medicine: Boolean,
    perception: Boolean,
    survival: Boolean,
    deception: Boolean,
    intimidation: Boolean,
    performance: Boolean,
    persuasion: Boolean,
  },
  notes: String,
  features: String,
  loot: String,
  partyLoot: String,
  maxWildShapes: Number,
  currentWildShapes: Number,
  maxGuidingBolts: Number,
  currentGuidingBolts: Number,
  maxCosmicOmens: Number,
  currentCosmicOmens: Number,
  attacks: [
    {
      attackName: String,
      attackRange: String,
      attackModifier: String,
      attackDamage: String,
      attackType: String,
    },
  ],
  spells: [
    {
      spellPrepared: Boolean,
      spellName: String,
      spellTime: String,
      spellRange: String,
      spellHitOrDC: String,
      spellEffect: String,
      spellNotes: String,
    },
  ],
};

exports.getSchema = () => {
  return characterSchema;
}

exports.getModel = () => {
  const Character = mongoose.model("Character", characterSchema);
    return Character;
}
