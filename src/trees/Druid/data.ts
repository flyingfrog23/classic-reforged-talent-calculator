import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/druid"),
);
const icons = requireAll(require.context("../../assets/icons/druid"));

export const data: TalentData = {
  Balance: {
    name: "Balance",
    background: backgrounds["balance"],
    icon: icons["spell_nature_starfall"],
    talents: {
      "Improved Wrath": {
        name: "Improved Wrath",
        pos: "a1",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the cast time of your Wrath spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Nature's Grasp": {
        name: "Nature's Grasp",
        pos: "a2",
        icon: icons["spell_nature_natureswrath"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`While active, any time an enemy strikes the caster they have a 35% chance to become afflicted by Entangling Roots (Rank 1). Only useable outdoors. 1 charge. Lasts 45 sec.`,
      },
      "Improved Nature's Grasp": {
        name: "Improved Nature's Grasp",
        pos: "a3",
        icon: icons["spell_nature_natureswrath"],
        maxRank: 4,
        reqPoints: 0,
        prereq: "Nature's Grasp",
        arrows: [{ dir: "right", from: "a2", to: "a3" }],
        description: talentText`Increases the chance of your Nature's Grasp to entangle an enemy by ${[
          15,
          30,
          45,
          65,
        ]}%.`,
      },
      "Improved Entangling Roots": {
        name: "Improved Entangling Roots",
        pos: "b1",
        icon: icons["spell_nature_stranglevines"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          40,
          70,
          100,
        ]}% chance to avoid interruption caused by damage while casting Entangling Roots.`,
      },
      "Improved Moonfire": {
        name: "Improved Moonfire",
        pos: "b2",
        icon: icons["spell_nature_starfall"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the damage and critical strike chance of your Moonfire spell by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Natural Shapeshifter": {
        name: "Natural Shapeshifter",
        pos: "b3",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the mana cost of all shapeshifting by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Subtlety": {
        name: "Subtlety",
        pos: "b4",
        icon: icons["ability_eyeoftheowl"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the threat generated by your spells by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Improved Thorns": {
        name: "Improved Thorns",
        pos: "c1",
        icon: icons["spell_nature_thorns"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage caused by your Thorns spell by ${[
          25,
          50,
          75,
        ]}%.`,
      },
      "Insect Swarm": {
        name: "Insect Swarm",
        pos: "c3",
        icon: icons["spell_nature_insectswarm"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`The enemy is swarmed by insects, decreasing their chance to hit by 2% and causing 66 Nature damage over 12 sec.`,
      },
      "Nature's Reach": {
        name: "Nature's Reach",
        pos: "c4",
        icon: icons["spell_nature_naturetouchgrow"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire, and Hurricane spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Vengeance": {
        name: "Vengeance",
        pos: "d2",
        icon: icons["spell_nature_purge"],
        maxRank: 5,
        reqPoints: 15,
        prereq: "Improved Moonfire",
        arrows: [{ dir: "down", from: "b2", to: "d2" }],
        description: talentText`Increases the critical strike damage bonus of your Starfire, Moonfire, and Wrath spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Improved Starfire": {
        name: "Improved Starfire",
        pos: "d3",
        icon: icons["spell_arcane_starfire"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Reduces the cast time of Starfire by ${[
          0.15,
          0.3,
          0.45,
          0.6,
          0.75,
        ]} sec and has a ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to stun the target for 3 sec.`,
      },
      "Nature's Grace": {
        name: "Nature's Grace",
        pos: "e2",
        icon: icons["spell_nature_naturesblessing"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`All spell criticals grace you with the blessing of nature, reducing the casting time of your next spell by 0.5 sec.`,
      },
      "Moonglow": {
        name: "Moonglow",
        pos: "e3",
        icon: icons["spell_nature_sentinal"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Reduce the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Moonfury": {
        name: "Moonfury",
        pos: "f2",
        icon: icons["spell_nature_moonglow"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Nature's Grace",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Increases the damage done by your Starfire, Moonfire and Wrath spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%`,
      },
      "Moonkin Form": {
        name: "Moonkin Form",
        pos: "g2",
        icon: icons["spell_nature_forceofnature"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Transforms the Druid into Moonkin Form. While in this form the armor contribution from items is increased by 360% and all party members within 30 yards have their spell hit and spell critical chance increased by 3% and all resistances increased by 30. The Moonkin can only cast Balance spells while shapeshifted.\n\nThe act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.`,
      },
    },
  },
  "Feral Combat": {
    name: "Feral Combat",
    background: backgrounds["feral"],
    icon: icons["ability_racial_bearform"],
    talents: {
      Ferocity: {
        name: "Ferocity",
        pos: "a2",
        icon: icons["ability_hunter_pet_hyena"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the cost of your Maul, Swipe, Claw and Rake abilities by ${[
          1,
          2,
          3,
          4,
          5,
        ]} Rage or Energy.`,
      },
      "Feral Aggression": {
        name: "Feral Aggression",
        pos: "a3",
        icon: icons["ability_druid_demoralizingroar"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the Attack Power reduction of your Demoralizing Roar by ${[
          8,
          16,
          24,
          32,
          40,
        ]}% and the damage caused by your Ferocious Bite by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Feral Instinct": {
        name: "Feral Instinct",
        pos: "b1",
        icon: icons["ability_ambush"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the threat caused in Bear and Dire Bear forms by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% and reduces the chance enemies have to detect you while Prowling.`,
      },
      "Brutal Impact": {
        name: "Brutal Impact",
        pos: "b2",
        icon: icons["ability_druid_bash"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the stun duration of your Bash and Pounce abilities by ${[
          0.5,
          1,
        ]} sec.`,
      },
      "Natural Weapons": {
        name: "Natural Weapons",
        pos: "b3",
        icon: icons["inv_staff_01"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the damage you deal with physical attacks in all forms by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Enrage": {
        name: "Improved Enrage",
        pos: "b4",
        icon: icons["ability_druid_enrage"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`The Enrage ability now instantly generates ${[
          5,
          10,
        ]} Rage.`,
      },
      "Feline Swiftness": {
        name: "Feline Swiftness",
        pos: "c1",
        icon: icons["spell_nature_spiritwolf"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your movement speed by ${[
          15,
          30,
        ]}% while outdoors in Cat Form and increases your chance to dodge while in Cat Form by ${[
          2,
          4,
        ]}%.`,
      },
      "Feral Charge": {
        name: "Feral Charge",
        pos: "c2",
        icon: icons["ability_hunter_pet_bear"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Causes you to charge an enemy, immobilizing and interrupting any spell being cast for 4 sec.`,
      },
      "Sharpened Claws": {
        name: "Sharpened Claws",
        pos: "c3",
        icon: icons["inv_misc_monsterclaw_04"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your critical strike chance while in Bear, Dire Bear or Cat Form by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Improved Shred": {
        name: "Improved Shred",
        pos: "d1",
        icon: icons["spell_shadow_vampiricaura"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the Energy cost of your Shred ability by ${[
          6,
          12,
        ]}.`,
      },
      "Predatory Strikes": {
        name: "Predatory Strikes",
        pos: "d2",
        icon: icons["ability_hunter_pet_cat"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases your attack power in Cat, Bear and Dire Bear Forms by ${[
          50,
          100,
          150,
        ]}% of your level.`,
      },
      "Blood Frenzy": {
        name: "Blood Frenzy",
        pos: "d3",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Sharpened Claws",
        arrows: [{ dir: "down", from: "c3", to: "d3" }],
        description: talentText`Your critial strikes from Cat Form abilities that add combo points have a ${[
          50,
          100,
        ]}% chance to add an additional combo point.`,
      },
      "Primal Fury": {
        name: "Primal Fury",
        pos: "d4",
        icon: icons["ability_racial_cannibalize"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Sharpened Claws",
        arrows: [
          { dir: "right-down", from: "c3", to: "c4" },
          { dir: "right-down-down", from: "c4", to: "d4" },
        ],
        description: talentText`Gives you ${[
          50,
          100,
        ]} chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear Form.`,
      },
      "Savage Fury": {
        name: "Savage Fury",
        pos: "e1",
        icon: icons["ability_druid_ravage"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the damage caused by your Claw, Rake, Maul and Swipe abilities by ${[
          10,
          20,
        ]}%.`,
      },
      "Faerie Fire (Feral)": {
        name: "Faerie Fire (Feral)",
        pos: "e3",
        icon: icons["spell_nature_faeriefire"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Decrease the armor of the target by 175 for 40 sec. While affected, the target cannot stealth or turn invisible.`,
      },
      "Heart of the Wild": {
        name: "Heart of the Wild",
        pos: "f2",
        icon: icons["spell_holy_blessingofagility"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Predatory Strikes",
        arrows: [{ dir: "down", from: "d2", to: "f2" }],
        description: talentText`Increases your Intellect by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%. In addition, while in Bear or Dire Bear Form your Stamina is increased by ${[
          7,
          14,
          21,
          28,
          35,
        ]}% and while in Cat Form your Strength is increased by ${[
          7,
          14,
          21,
          28,
          35,
        ]}%.`,
      },
      "Leader of the Pack": {
        name: "Leader of the Pack",
        pos: "g2",
        icon: icons["spell_nature_unyeildingstamina"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`While in Cat, Bear or Dire Bear Form, the Leader of the Pack increases dodge, hit and critical chance of all party members within 45 yards by 3%`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_healingtouch"],
    talents: {
      "Improved Mark of the Wild": {
        name: "Improved Mark of the Wild",
        pos: "a2",
        icon: icons["spell_nature_regeneration"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the effects of your Mark of the Wild and Gift of the Wild spells by ${[
          7,
          14,
          21,
          28,
          35,
        ]}%.`,
      },
      "Furor": {
        name: "Furor",
        pos: "a3",
        icon: icons["spell_nature_unyeildingstamina"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives you ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to gain 10 Rage when you shapeshift into Bear and Dire Bear Form or 40 Energy when you shapeshift into Cat Form.`,
      },
      "Improved Healing Touch": {
        name: "Improved Healing Touch",
        pos: "b1",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the cast time of your Healing Touch spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Nature's Focus": {
        name: "Nature's Focus",
        pos: "b2",
        icon: icons["spell_nature_healingwavegreater"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.`,
      },
      "Thick Hide": {
        name: "Thick Hide",
        pos: "b3",
        icon: icons["inv_misc_pelt_bear_03"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your Armor contribution from items by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Reflection": {
        name: "Reflection",
        pos: "c2",
        icon: icons["spell_frost_windwalkon"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Allows ${[
          5,
          10,
          15,
        ]}% of your Mana regeneration to continue while casting.`,
      },
      "Omen of Clarity": {
        name: "Omen of Clarity",
        pos: "c3",
        icon: icons["spell_nature_crystalball"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Imbues the druid with natural energy. Each of the Druid's melee attacks has a chance of causing the caster to enter a Clearcasting state. The Clearcasting state reduces the Mana, Rage, or Energy cost of your next damage or healing spell or offensive ability by 100%. Lasts 10 min.`,
      },
      "Tranquil Spirit": {
        name: "Tranquil Spirit",
        pos: "d2",
        icon: icons["spell_holy_elunesgrace"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Reduces the mana cost of your Healing Touch and Tranquility spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Rejuvenation": {
        name: "Improved Rejuvenation",
        pos: "d4",
        icon: icons["spell_nature_rejuvenation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the effect of your Rejuvenation spell by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e1",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Improved Healing Touch",
        arrows: [{ dir: "down", from: "b1", to: "e1" }],
        description: talentText`When activated, your next Nature spell becomes an instant cast spell.`,
      },
      "Gift of Nature": {
        name: "Gift of Nature",
        pos: "e3",
        icon: icons["spell_nature_protectionformnature"],
        maxRank: 5,
        reqPoints: 20,
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`Increases the effect of all healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Tranquility": {
        name: "Improved Tranquility",
        pos: "e4",
        icon: icons["spell_nature_tranquility"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the threat caused by Tranquility by ${[
          50,
          100,
        ]}%.`,
      },
      "Improved Regrowth": {
        name: "Improved Regrowth",
        pos: "f3",
        icon: icons["spell_nature_resistnature"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the critical effect chance of your Regrowth spell by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Swiftmend": {
        name: "Swiftmend",
        pos: "g2",
        icon: icons["inv_relics_idolofrejuvenation"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Tranquil Spirit",
        arrows: [{ dir: "down", from: "d2", to: "g2" }],
        description: talentText`Consumes a Rejuvenation or Regrowth effect on a friendly target to instantly heal them an amount equal to 12 sec. of Rejuvenation or 18 sec. of Regrowth.`,
      },
    },
  },
};