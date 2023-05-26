import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/mage"),
);
const icons = requireAll(require.context("../../assets/icons/mage"));

export const data: TalentData = {
  Arcane: {
    name: "Arcane",
    background: backgrounds["arcane"],
    icon: icons["spell_holy_magicalsentry"],
    talents: {
      "Arcane Subtlety": {
        name: "Arcane Subtlety",
        pos: "a1",
        icon: icons["spell_holy_dispelmagic"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Reduces your target's resistance to all your spells by ${[
          5,
          10,
        ]} and reduces the threat caused by your Arcane spells by ${[
          20,
          40,
        ]}%.`,
      },
      "Arcane Focus": {
        name: "Arcane Focus",
        pos: "a2",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the chance that the opponent can resist your Arcane spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Arcane Missiles": {
        name: "Improved Arcane Missiles",
        pos: "a3",
        icon: icons["spell_nature_starfall"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to avoid interruption caused by damage while channeling Arcane Missiles.`,
      },
      "Magic Absorption": {
        name: "Magic Absorption",
        pos: "b2",
        icon: icons["spell_nature_astralrecalgroup"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases all resistances by ${[
          2,
          4,
          6,
          8,
          10,
        ]} and causes all spells you fully resist to restore ${[
          1,
          2,
          3,
          4,
          5,
        ]}% of your total Mana. 1 sec. cooldown.`,
      },
      "Arcane Concentration": {
        name: "Arcane Concentration",
        pos: "b3",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance of entering a Clearcasting state after any damage spell hits a target. The Clearcasting state reduces the mana cost of your next damage spell by 100%.`,
      },
      "Magic Attunement": {
        name: "Magic Attunement",
        pos: "c1",
        icon: icons["spell_nature_abolishmagic"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the effect of your Amplify Magic and Dampen Magic spells by ${[
          25,
          50,
        ]}%.`,
      },
      "Improved Arcane Explosion": {
        name: "Improved Arcane Explosion",
        pos: "c2",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Arcane Explosion spell by an additional ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Arcane Meditation": {
        name: "Arcane Meditation",
        pos: "c3",
        icon: icons["spell_shadow_siphonmana"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Allows ${[
          5,
          10,
          15,
        ]}% of your Mana regeneration to continue while casting.`,
      },
      "Improved Mana Shield": {
        name: "Improved Mana Shield",
        pos: "d1",
        icon: icons["spell_shadow_detectlesserinvisibility"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Decreases the mana lost per point of damage taken when Mana Sheild is active by ${[
          40,
          80,
        ]}%.`,
      },
      "Improved Counterspell": {
        name: "Improved Counterspell",
        pos: "d2",
        icon: icons["spell_frost_iceshock"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Counterspell a ${[
          50,
          100,
        ]}% chance to silence the target for 4 sec.`,
      },
      "Arcane Resilience": {
        name: "Arcane Resilience",
        pos: "d3",
        icon: icons["spell_arcane_arcaneresilience"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Increases your armor by an amount equal to 150% of your Intellect.`,
      },
      "Arcane Power": {
        name: "Arcane Power",
        pos: "e2",
        icon: icons["spell_nature_lightning"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your spells deal 30% more damage while costing 30% more mana to cast. This effect lasts 15 sec.`,
      },
      "Arcane Mind": {
        name: "Arcane Mind",
        pos: "e3",
        icon: icons["spell_shadow_charm"],
        maxRank: 5,
        reqPoints: 20,
        prereq: "Arcane Resilience",
        arrows: [{ dir: "down", from: "d3", to: "e3" }],
        description: talentText`Increases your maximum Mana by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Arcane Instability": {
        name: "Arcane Instability",
        pos: "f2",
        icon: icons["spell_shadow_teleport"],
        maxRank: 3,
        reqPoints: 25,
        prereq: "Arcane Power",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Increases your spell damage critical strike chance by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Presence of Mind": {
        name: "Presence of Mind",
        pos: "g2",
        icon: icons["spell_nature_enchantarmor"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Arcane Instability",
        arrows: [{ dir: "down", from: "f2", to: "g2" }],
        description: talentText`When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.`,
      },
    },
  },
  Fire: {
    name: "Fire",
    background: backgrounds["fire"],
    icon: icons["spell_fire_firebolt02"],
    talents: {
      "Improved Fireball": {
        name: "Improved Fireball",
        pos: "a2",
        icon: icons["spell_fire_firebolt02"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the casting time of your Fireball spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Impact": {
        name: "Impact",
        pos: "a3",
        icon: icons["spell_fire_meteorstorm"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives your Fire spells a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 2 sec.`,
      },
      "Ignite": {
        name: "Ignite",
        pos: "b1",
        icon: icons["spell_fire_incinerate"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Your critical strikes from Fire damage spells cause the target to burn for an additional ${[
          8,
          16,
          24,
          32,
          40,
        ]}% of your spell's damage over 4 sec.`,
      },
      "Flame Throwing": {
        name: "Flame Throwing",
        pos: "b2",
        icon: icons["spell_fire_flare"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Fire spells by ${[
          3,
          6,
        ]} yards.`,
      },
      "Improved Fire Blast": {
        name: "Improved Fire Blast",
        pos: "b3",
        icon: icons["spell_fire_fireball"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Fire Blast spell by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      },
      "Incinerate": {
        name: "Incinerate",
        pos: "c1",
        icon: icons["spell_fire_flameshock"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Fire Blast and Scorch spells by ${[
          2,
          4,
        ]}%.`,
      },
      "Improved Flamestrike": {
        name: "Improved Flamestrike",
        pos: "c2",
        icon: icons["spell_fire_selfdestruct"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Flamestrike spell by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Pyroblast": {
        name: "Pyroblast",
        pos: "c3",
        icon: icons["spell_fire_fireball02"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Hurls an immense fiery boulder that causes 141 to 188 Fire damage and an additional 56 Fire damage over 12 sec.`,
      },
      "Burning Soul": {
        name: "Burning Soul",
        pos: "c4",
        icon: icons["spell_fire_fire"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives your Fire spells a ${[
          35,
          70,
        ]}% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by ${[
          15,
          30,
        ]}%.`,
      },
      "Improved Scorch": {
        name: "Improved Scorch",
        pos: "d1",
        icon: icons["spell_fire_soulburn"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your Scorch spells have a ${[
          33,
          66,
          100,
        ]}% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases Fire damage dealt to your target by 3% and lasts 30 sec. Stacks up to 5 times.`,
      },
      "Improved Fire Ward": {
        name: "Improved Fire Ward",
        pos: "d2",
        icon: icons["spell_fire_firearmor"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Causes your Fire Ward to have a ${[
          50,
          100,
        ]}% chance to reflect Fire spells when active.`,
      },
      "Master of Elements": {
        name: "Master of Elements",
        pos: "d4",
        icon: icons["spell_fire_masterofelements"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your Fire and Frost spell criticals will refund ${[
          10,
          20,
          30,
        ]}% of their base mana cost.`,
      },
      "Critical Mass": {
        name: "Critical Mass",
        pos: "e2",
        icon: icons["spell_nature_wispheal"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the critical strike chance of your Fire spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Blast Wave": {
        name: "Blast Wave",
        pos: "e3",
        icon: icons["spell_holy_excorcism_02"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Pyroblast",
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 154 to 187 Fire damage, and dazing them for 6 sec.`,
      },
      "Fire Power": {
        name: "Fire Power",
        pos: "f3",
        icon: icons["spell_fire_immolation"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage done by your Fire spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Combustion": {
        name: "Combustion",
        pos: "g2",
        icon: icons["spell_fire_sealoffire"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Critical Mass",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%. This effect lasts until you have caused 3 critical strikes with Fire spells.`,
      },
    },
  },
  Frost: {
    name: "Frost",
    background: backgrounds["frost"],
    icon: icons["spell_frost_frostbolt02"],
    talents: {
      "Frost Warding": {
        name: "Frost Warding",
        pos: "a1",
        icon: icons["spell_frost_frostward"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the armor and resistances given by your Frost Armor and Ice Armor spells by ${[
          15,
          30,
        ]}%. In addition, gives your Frost Ward a ${[
          10,
          20,
        ]}% chance to reflect Frost spells and effects while active.`,
      },
      "Improved Frostbolt": {
        name: "Improved Frostbolt",
        pos: "a2",
        icon: icons["spell_frost_frostbolt02"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the casting time of your Frostbolt spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`,
      },
      "Elemental Precision": {
        name: "Elemental Precision",
        pos: "a3",
        icon: icons["spell_ice_magicdamage"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Reduces the chance that the opponent can resist your Frost and Fire spells by ${[
          2,
          4,
          6,
        ]}%`,
      },
      "Ice Shards": {
        name: "Ice Shards",
        pos: "b1",
        icon: icons["spell_frost_iceshard"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the critical strike damage bonus of your Frost spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Frostbite": {
        name: "Frostbite",
        pos: "b2",
        icon: icons["spell_frost_frostarmor"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your Chill effects a ${[
          5,
          10,
          15,
        ]}% chance to freeze the target for 5 sec.`,
      },
      "Improved Frost Nova": {
        name: "Improved Frost Nova",
        pos: "b3",
        icon: icons["spell_frost_freezingbreath"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Frost Nova spell by ${[
          2,
          4,
        ]} sec.`,
      },
      "Permafrost": {
        name: "Permafrost",
        pos: "b4",
        icon: icons["spell_frost_wisp"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the duration of your Chill effects by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec and reduces the target's speed by an additional ${[4, 7, 10]}%.`,
      },
      "Piercing Ice": {
        name: "Piercing Ice",
        pos: "c1",
        icon: icons["spell_frost_frostbolt"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Frost spells by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Ice Block": {
        name: "Ice Block",
        pos: "c2",
        icon: icons["spell_frost_frost"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot, move or cast spells.`,
      },
      "Improved Blizzard": {
        name: "Improved Blizzard",
        pos: "c4",
        icon: icons["spell_frost_icestorm"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by ${[
          30,
          50,
          65,
        ]}%. Lasts 1.50 sec.`,
      },
      "Arctic Reach": {
        name: "Arctic Reach",
        pos: "d1",
        icon: icons["spell_shadow_darkritual"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Frost Channeling": {
        name: "Frost Channeling",
        pos: "d2",
        icon: icons["spell_frost_stun"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Reduces the mana cost of your Frost spells by ${[
          5,
          10,
          15,
        ]}% and reduces the threat caused by your Frost spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Shatter": {
        name: "Shatter",
        pos: "d3",
        icon: icons["spell_frost_frostshock"],
        maxRank: 5,
        reqPoints: 15,
        prereq: "Improved Frost Nova",
        arrows: [{ dir: "down", from: "b3", to: "d3" }],
        description: talentText`Increases the critical strike chance of all your spells against frozen targets by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`,
      },
      "Cold Snap": {
        name: "Cold Snap",
        pos: "e2",
        icon: icons["spell_frost_wizardmark"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, this spell finishes the cooldown on all your Frost spells.`,
      },
      "Improved Cone of Cold": {
        name: "Improved Cone of Cold",
        pos: "e3",
        icon: icons["spell_frost_glacier"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage dealt by your Cone of Cold spell by ${[
          15,
          25,
          35,
        ]}%.`,
      },
      "Winter's Chill": {
        name: "Winter's Chill",
        pos: "f3",
        icon: icons["spell_frost_chillingblast"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives your Frost damage spells a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to apply the Winter's Chill effect, which increases the chance a Frost spell will critically hit the target by 2% for 15 sec. Stacks up to 5 times.`,
      },
      "Ice Barrier": {
        name: "Ice Barrier",
        pos: "g2",
        icon: icons["spell_ice_lament"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Ice Block",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Instantly sheilds you, absorbing 455 damage. Lasts 1 min. While the shield holds, spells will not be interrupted.`,
      },
    },
  },
};