import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/shaman"),
);
const icons = requireAll(require.context("../../assets/icons/shaman"));

export const data: TalentData = {
  Elemental: {
    name: "Elemental",
    background: backgrounds["elemental"],
    icon: icons["spell_nature_lightning"],
    talents: {
      "Storm Reach": {
        name: "Storm Reach", 
        pos: "a1", 
        icon: icons["spell_nature_stormreach"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Increases the range of your Lightning Bolt, Chain Lighting and Chain Heal spells by ${[
          3,
          6,
        ]} yards.`, 
      },
      "Convection": {
        name: "Convection", 
        pos: "b2", 
        icon: icons["spell_nature_wispsplode"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces the Mana cost of your Shock, Lightning Bolt, Chain Lightning, and Chain Heal spells by ${[
          5,
          10,
          15,
        ]}%`, 
      },
      "Concussion": {
        name: "Concussion", 
        pos: "a3", 
        icon: icons["spell_fire_fireball"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the damage done by your Lightning Bolt, Chain Lightning, and Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. Also increases the effectiveness of your Chain Heal spell by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Earth's Grasp": {
        name: "Earth's Grasp", 
        pos: "b1", 
        icon: icons["spell_nature_stoneclawtotem"], 
        maxRank: 2, reqPoints: 5, 
        description: talentText`Increases the health of your Stoneclaw Totem by ${[
          150,
          300,
        ]}% and the effect duration of your Earthbind Totem and Earth Shock by ${[
          25,
          50,
        ]}%.`, 
      },
      "Elemental Warding": {
        name: "Elemental Warding", 
        pos: "a2", 
        icon: icons["spell_nature_spiritarmor"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Reduces damage taken from Fire, Frost, and Nature effects by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Call of Flame": {
        name: "Call of Flame", 
        pos: "b3", 
        icon: icons["spell_fire_immolation"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the damage done by your Fire Totems by ${[
          10,
          20,
          30,
        ]}% and increases critical strike chance of your Flame Shock by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Reverberation": {
        name: "Reverberation", 
        pos: "b4", 
        icon: icons["spell_frost_frostward"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the cooldown of you Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`, 
      },
      "Sand Blast": {
        name: "Sand Blast", pos: "c1", 
        icon: icons["spell_fire_windsofwoe"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Earth's Grasp", 
        arrows: [{ dir: "down", from: "b1", to: "c1" }], 
        description: talentText`Sends a wave of sand, blinding nearby enemies for 4 seconds. Targets must be facing you. Any damage caused will remove the effect.`, 
      },
      "Elemental Focus": {
        name: "Elemental Focus", pos: "c2", 
        icon: icons["spell_shadow_manaburn"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Gives you a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell. The Clearcasting state reduces the Mana cost of your next damage spell by 100%.`, 
      },
      "Call of Thunder": {
        name: "Call of Thunder",
         pos: "c3", 
        icon: icons["spell_nature_callstorm"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Increases the critical strike chance of your Lightning Bolt, Chain Lightning, and Chain Heal spells by an additional ${[
          2,
          4,
        ]}%.`, 
      },
      "Eye of the Storm": {
        name: "Eye of the Storm", 
        pos: "c4", 
        icon: icons["spell_nature_eyeofthestorm"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Gives you a ${[
          20,
          40,
          60,
        ]}% chance to avoid interruption caused by damage while casting Lightning Bolt or Chain Lightning.`, 
      },
      "Elemental Fury": {
        name: "Elemental Fury", 
        pos: "d2", 
        icon: icons["spell_fire_volcano"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases the critical strike damage bonus of your Searing, Magma, and Fire Nova Totems, and your Fire, Frost, and Nature spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`, 
      },
      "Elemental Devastation": {
        name: "Elemental Devastation", 
        pos: "d4", 
        icon: icons["spell_fire_elementaldevastation"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Your offensive spell crits will increase your chance to get a critical strike with all attacks and spells by 5% for ${[
          5,
          10,
          15,
        ]} seconds.`, 
      },
      "Improved Fire Totems": {
        name: "Improved Fire Totems", 
        pos: "e1", 
        icon: icons["spell_fire_sealoffire"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Reduces the delay before your Fire Nova Totem activates by ${[
          1,
          2,
        ]} sec. and decreases the threat generated by your Magma totem by ${[
          50,
          100,
        ]}%.`, 
      },
      "Elemental Mastery": {
        name: "Elemental Mastery", 
        pos: "e2", 
        icon: icons["spell_nature_wispheal"], 
        maxRank: 1, 
        reqPoints: 20, 
        prereq: "Elemental Fury", 
        arrows: [{ dir: "down", from: "d2", to: "e2" }], 
        description: talentText`When activated, this spell gives your next Fire, Forst, or Nature damage spell a 100% critical strike chance.`, 
      },
      "Lightning Mastery": {
        name: "Lightning Mastery", 
        pos: "e3", 
        icon: icons["spell_lightning_lightningbolt01"], 
        maxRank: 5, 
        reqPoints: 20, 
        prereq: "Call of Thunder", 
        arrows: [{ dir: "down", from: "c3", to: "e3" }], 
        description: talentText`Reduces the cast time of your Lightning Bolt, Chain Lightning, and Chain Heal spells by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} sec.`, 
      },
      "Elemental Precision": {
        name: "Elemental Precision", 
        pos: "f1", 
        icon: icons["spell_nature_elementalprecision_1"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your chance to hit with Fire, Frost and Nature spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%. Also grants ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} per level Fire, Frost, and Nature spell penetration.`, 
      },
      "Lightning Overlord": {
        name: "Lightning Overlord", 
        pos: "f3", 
        icon: icons["inv_helmet_06"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Lightning Mastery", 
        arrows: [{ dir: "down", from: "e3", to: "f3" }], 
        description: talentText`Your Lightning Bolt, Chain Lightning, and Chain Heal spells' criticals will refund ${[
          25,
          50,
        ]}% of their base mana cost.`, 
      },
      "Static Field": {
        name: "Static Field", 
        pos: "f4", 
        icon: icons["spell_shaman_staticshock"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Gives your damage spells a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to energize you, increasing damage and reducing Mana cost of your damage spells by 1% for 15 seconds. Stacks up to 10 times.`, 
      },
      "Earthquake": {
        name: "Earthquake", 
        pos: "g2", 
        icon: icons["spell_nature_earthquake"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Elemental Mastery", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Shakes the ground, shocking enemies for trivial amounts of Nature damage. Each hit causes echoes that inflict damage to their neraby allies. The effect lessens with distance to the epicenter. Also dazes the targets for 5 seconds and causes a high amount of threat.`, 
      },
    },
  },
  Enhancement: {
    name: "Enhancement",
    background: backgrounds["enhancement"],
    icon: icons["spell_nature_lightningshield"],
    talents: {
      "Elemental Weapons": {
        name: "Elemental Weapons", 
        pos: "a1", 
        icon: icons["spell_fire_flametounge"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases the effectiveness of your elemental weapon enchants by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Ancestral Knowledge": {
        name: "Ancestral Knowledge", 
        pos: "a2", icon: icons["spell_shadow_grimward"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your maximum Mana by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Shield Specialization": {
        name: "Shield Specialization", 
        pos: "a3", 
        icon: icons["inv_shield_06"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Increases your chance to block attacks with a shield by ${[
          3,
          5,
        ]}% and has a ${[
          50,
          100,
        ]}% chance to restore 1% of your Mana when a block occurs.`, 
      },
      "Guardian Totems": {
        name: "Guardian Totems", 
        pos: "b1", 
        icon: icons["spell_nature_stoneskintotem"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases the effect of your Resistance Totems, Stoneskin Totem and Windwall Totem by ${[
          25,
          50,
        ]}% and reduces the cooldown of your Grounding Totem by ${[
          10,
          20,
        ]} sec.`, 
      },
      "Thundering Strikes": {
        name: "Thundering Strikes", 
        pos: "b2", 
        icon: icons["ability_thunderbolt"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Improves your chance to get a critical strike with your weapon attacks and Shock spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Toughness": {
        name: "Toughness", 
        pos: "b4", 
        icon: icons["spell_holy_devotion"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases your resistance and armor value from items by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Rockhide": {
        name: "Rockhide", 
        pos: "c1", 
        icon: icons["stoneskinz"], 
        maxRank: 5, 
        reqPoints: 10, 
        prereq: "Guardian Totems", 
        arrows: [{ dir: "down", from: "b1", to: "c1" }], 
        description: talentText`Has a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance when struck in combat to inflict up to 120 physical damage (scales with your level) to nearby enemies and to stun them for 1 seconds. In addition, reduces all damage taken by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Flurry": {
        name: "Flurry", 
        pos: "c2", 
        icon: icons["ability_ghoulfrenzy"], 
        maxRank: 5, 
        reqPoints: 10, 
        prereq: "Thundering Strikes", 
        arrows: [{ dir: "down", from: "b2", to: "c2" }], 
        description: talentText`Increases your attack speed by ${[
          10,
          15,
          20,
          25,
          30,
        ]}% for your next 3 swings after dealing a critical strike.`, 
      },
      "Earth Shield": {
        name: "Earth Shield", 
        pos: "c3", 
        icon: icons["spell_nature_skinofearth"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Shield Specialization", 
        arrows: [{ dir: "down", from: "a3", to: "c3" }], 
        description: talentText`Increases Healing taken by 15% and chance to block by 30%. Lasts for 10 min or 20 attacks.`, 
      },
      "Weapon Mastery": {
        name: "Weapon Mastery", 
        pos: "c4", 
        icon: icons["ability_hunter_swiftstrike"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Increases the damage you deal with all weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Improved Weapon Totems": {
        name: "Improved Weapon Totems", 
        pos: "d1", 
        icon: icons["spell_fire_enchantweapon"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effect and reduces the Mana cost of your Windfury and Flametongue Totems by ${[
          25,
          50,
        ]}%.`, 
      },
      "Primal Endurance": {
        name: "Primal Endurance", 
        pos: "d2", 
        icon: icons["spell_nature_ancestralguardian"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases total health by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`, 
      },
      "Improved Ghost Wolf": {
        name: "Improved Ghost Wolf", 
        pos: "d3", 
        icon: icons["spell_nature_spiritwolf"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Reduces the Mana cost of your Ghost Wolf spell by ${[
          50,
          100
        ]}% and cast time by ${[
          1,
          2,
        ]} sec.`, 
      },
      "Improved Lightning Shield": {
        name: "Improved Lightning Shield", 
        pos: "d4", 
        icon: icons["spell_nature_lightningshield"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the damage done by your Lightning Shield orbs by ${[
          5,
          10,
          15,
        ]}%, reduces its Mana cost by ${[
          5,
          10,
          15,
        ]}% and increases the number of orbs by ${[
          3,
          5,
          7,
        ]}.`, 
      },
      "Enhancing Totems": {
        name: "Enhancing Totems", 
        pos: "e1", 
        icon: icons["spell_nature_earthbindtotem"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Increases the effect and reduces the Mana cost of your Strength of Earth and Grace of Air totems by ${[
          25,
          50,
        ]}%.`, 
      },
      "Bloodlust": {
        name: "Bloodlust", 
        pos: "e2", 
        icon: icons["spell_nature_bloodlust"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Increases an ally's attack and casting speed by 10% for 180 seconds.`, 
      },
      "Anticipation": {
        name: "Anticipation", 
        pos: "e3", 
        icon: icons["spell_nature_mirrorimage"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases your stealth detection and reduces the chence you are hit by spells and ranged attakcs by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Armaments of Storm": {
        name: "Armaments of Storm", 
        pos: "f1", 
        icon: icons["spell_nature_stormhammer"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Imbue weapons with storm. Gives you a${["","n","","",""]} ${[
          4,
          8,
          12,
          16,
          20,
        ]}% chance to deal additional up to 240 Nature damage.(Scales with your level)`, 
      },
      "Shamanism": {
        name: "Shamanism", 
        pos: "f3", 
        icon: icons["spell_nature_shamanism"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Gives your melee attack a chance to enter a Shamanic Trance. The Shamanic Trance reduces the cast time and Mana cost of your next damage spell by 100% and greatly reduces target's chance to resist that spell. ${[
          "", 
          "Effect occurs more often than Shamanism (Rank 1)",
          "Effect occurs more often than Shamanism (Rank 2)",
          "Effect occurs more often than Shamanism (Rank 3)",
          "Effect occurs more often than Shamanism (Rank 4)",
        ]}`, 
      },
      "Aftershock": {
        name: "Aftershock", 
        pos: "g2", 
        icon: icons["spell_nature_elementalprecision_2"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Bloodlust", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Blasts a target with aftershock, consuming your shock spells and applies an effects based on consumed shock spells.\n\nFlame Shock: instantly deals damage equal to 15 sec of Flame Shock.\n\nFrost Shock: stuns the target for 3 sec.\n\nEarth Shock: breaks movement impairing effects for you and forces the target to focus attacks on you for 5 sec.`, 
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_magicimmunity"],
    talents: {
      "Nature's Guidance": {
        name: "Nature's Guidance", 
        pos: "a1", 
        icon: icons["spell_frost_stun"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases your chance to hit with melee attacks and spells by ${[
          1,
          2,
          3,
        ]}%.`, 
      },
      "Tidal Mastery": {
        name: "Tidal Mastery", 
        pos: "a2", 
        icon: icons["spell_nature_tranquility"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases the critical effect chance of your healing and lightning spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and increases the speed reduction of your Frost Shock by an additional ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Totemic Mastery": {
        name: "Totemic Mastery", 
        pos: "a3", 
        icon: icons["spell_nature_nullward"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`The radius of your totems is increased by ${[
          10,
          20,
        ]}%.`, 
      },
      "Improved Healing Wave": {
        name: "Improved Healing Wave", 
        pos: "b1", 
        icon: icons["spell_nature_magicimmunity"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the cast time of your Healing Wave by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`, 
      },
      "Totemic Focus": {
        name: "Totemic Focus", 
        pos: "b3", 
        icon: icons["spell_nature_moonglow"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces the Mana cost of your Totems by ${[
          25,
          50,
        ]}%.`, 
      },
      "Nature Grace": {
        name: "Nature Grace", 
        pos: "b4", 
        icon: icons["spell_nature_healingtouch"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces the threat you generate by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Nature's Guardian": {
        name: "Nature's Guardian", 
        pos: "c1", 
        icon: icons["spell_nature_natureguardian"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Reduces the chance you are critically hit by ${[
          2,
          4,
          6,
        ]}%.`, 
      },
      "Tidal Barrier": {
        name: "Tidal Barrier", 
        pos: "c2", 
        icon: icons["spell_frost_wisp"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Tidal Mastery", 
        arrows: [{ dir: "down", from: "a2", to: "c2" }], 
        description: talentText`Reduces the damage taken from physical attacks and Fire spells by 50%, but reduces damage caused by 30%. Lasts 10 seconds.`, 
      },
      "Spiritwalking": {
        name: "Spiritwalking", 
        pos: "c3", 
        icon: icons["spiritwalker"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the chance you are hit by melee attacks by ${[
          2,
          4,
        ]}%. In addition, reduces the cooldown of your Astral Recall and Reincarnation spells by ${[
          15,
          30,
        ]} minutes and increases the amount of Health and Man you reincarnate with by an additional ${[
          15,
          30,
        ]}%.`, 
      },
      "Nature Focus": {
        name: "Nature Focus", 
        pos: "c4", 
        icon: icons["spell_nature_healingwavelesser"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while casting any Healing spell and ${[
          6,
          12,
          18,
          24,
          30,
        ]}% while casting Lightning damange spells.`, 
      },
      "Nature Spirit": {
        name: "Nature Spirit", 
        pos: "d1", 
        icon: icons["spell_nature_preservation"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases spell damage and healing by up to ${[
          5,
          10,
          15,
          20,
          25,
        ]}% of your total Spirit.`, 
      },
      "Tidal Focus": {
        name: "Tidal Focus", 
        pos: "d2", 
        icon: icons["spell_frost_manarecharge"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Reduces the Mana cost of your healing and lightning spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. Also reduces the Mana cost of your Frost Shock spell by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`, 
      },
      "Restorative Totems": {
        name: "Restorative Totems", 
        pos: "d3", 
        icon: icons["spell_nature_manaregentotem"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the effect of your Mana Tide, Mana Spring and Healing Stream Totems by ${[
          30,
          50,
        ]}%.`, 
      },
      "Ancestral Healing": {
        name: "Ancestral Healing", 
        pos: "e1", 
        icon: icons["spell_nature_undyingstrength"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases your target's armor value by ${[
          5,
          10,
          15,
        ]}% for 20 seconds after getting a critical effect from one of your healing spells.`, 
      },
      "Purification": {
        name: "Purification", 
        pos: "e2", 
        icon: icons["spell_frost_wizardmark"], 
        maxRank: 5, 
        reqPoints: 20, 
        description: talentText`Increases the effectiveness of your Healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and increases damage dealt to Undead or Demons by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness", 
        pos: "e3", 
        icon: icons["spell_nature_ravenform"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Whan Activated, your next Nature spell with a casting time of less than 10 seconds becomes an instant cast spell.`, 
      },
      "Focused Mind": {
        name: "Focused Mind", 
        pos: "e4", 
        icon: icons["spell_nature_focusedmind"], 
        maxRank: 3, 
        reqPoints: 20, 
        prereq: "Nature Focus", 
        arrows: [{ dir: "down", from: "c4", to: "e4" }], 
        description: talentText`Increases your chance to resist Silence and Interrupt effects by an additional ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Healing Way": {
        name: "Healing Way", 
        pos: "f1", 
        icon: icons["spell_nature_healingway"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Your Healing Wave spells have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to increase the effect of subsequent Healing Wave spells on that target by 3% for 30 seconds. This effect will stack up to 5 times.`, 
      },
      "Meditation": {
        name: "Meditation", 
        pos: "f3", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Allows ${[
          10,
          20,
          30,
          40,
          50,
        ]}% of you Mana regeneration to continue while casting.`, 
      },
      "Cleansing Wave": {
        name: "Cleansing Wave", 
        pos: "g2", 
        icon: icons["spell_shadow_demonbreath"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Purification", 
        arrows: [{ dir: "down", from: "e2", to: "g2" }], 
        description: talentText`Attempts to cure 1 poison, disease and magic effect, and additional 1 poison, disease and magic effect in 3 seconds.`, 
      },
    },
  },
};
