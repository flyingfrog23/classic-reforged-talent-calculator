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
      "Convection": {
        name: "Convection",
        pos: "a2",
        icon: icons["spell_nature_wispsplode"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the many cost of your Shock, Lightening Bolt, and Chain Lightening spells by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Concussion": {
        name: "Concussion",
        pos: "a3",
        icon: icons["spell_fire_fireball"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the damage done by your Lightning Bolt, Chain Lightning and Shock spells by ${[
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
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the health of your Stoneclaw Totem by ${[
          50,
          100,
        ]}% and the radius of your Earthbind Totem by ${[10, 20]}%.`,
      },
      "Elemental Warding": {
        name: "Elemental Warding",
        pos: "b2",
        icon: icons["spell_nature_spiritarmor"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Reduces the damage taken by Fire, Frost and Nature effects by ${[
          6,
          12,
          18,
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
        ]}%.`,
      },
      "Elemental Focus": {
        name: "Elemental Focus",
        pos: "c1",
        icon: icons["spell_shadow_manaburn"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.`,
      },
      "Reverberation": {
        name: "Reverberation",
        pos: "c2",
        icon: icons["spell_frost_frostward"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Shock spells by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} sec.`,
      },
      "Call of Thunder": {
        name: "Call of Thunder",
        pos: "c3",
        icon: icons["spell_nature_callstorm"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Fire Totems": {
        name: "Improved Fire Totems",
        pos: "d1",
        icon: icons["spell_fire_sealoffire"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the delay before your Fire Nova Totem activates by ${[
          2,
          4,
        ]} sec. and decreases the threat generated by your Magma Totem by ${[
          40,
          80,
        ]}%.`,
      },
      "Eye of the Storm": {
        name: "Eye of the Storm",
        pos: "d2",
        icon: icons["spell_nature_eyeofthestorm"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          33,
          66,
          100,
        ]}% to gain the Focused Casting effect that lasts for 6 sec after being the victim of a melee or ranged critical strike. The Focused Casting effect prevents you from losing casting time when taking damage.`,
      },
      "Elemental Devastation": {
        name: "Elemental Devastation",
        pos: "d4",
        icon: icons["classic_spell_fire_elementaldevastation"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your offensive spell crits will increase your chance to get a critical strike with melee attacks by ${[
          3,
          6,
          9,
        ]}% for 10 sec.`,
      },
      "Storm Reach": {
        name: "Storm Reach",
        pos: "e1",
        icon: icons["spell_nature_stormreach"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the range of your Lightning Bolt and Chain Lightning spells by ${[
          3,
          6,
        ]} yards.`,
      },
      "Elemental Fury": {
        name: "Elemental Fury",
        pos: "e2",
        icon: icons["spell_fire_volcano"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases the critical strike challenge bonus of your Searing, Magma, and Fire Nova totems and your Fire, Frost, and Nature spells by 100%.`,
      },
      "Lightning Mastery": {
        name: "Lightning Mastery",
        pos: "f3",
        icon: icons["spell_lightning_lightningbolt01"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Call of Thunder",
        arrows: [{ dir: "down", from: "c3", to: "f3" }],
        description: talentText`Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ${[
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} sec.`,
      },
      "Elemental Mastery": {
        name: "Elemental Mastery",
        pos: "g2",
        icon: icons["spell_nature_wispheal"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Elemental Fury",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, this spell gives your next Fire, Frost, or Nature damage spell a 100% critical strike chance and reduces the mana cost by 100%.`,
      },
    },
  },
  Enhancement: {
    name: "Enhancement",
    background: backgrounds["enhancement"],
    icon: icons["spell_nature_lightningshield"],
    talents: {
      "Ancestral Knowledge": {
        name: "Ancestral Knowledge",
        pos: "a2",
        icon: icons["spell_shadow_grimward"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your maximum Mana by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Shield Specialization": {
        name: "Shield Specialization",
        pos: "a3",
        icon: icons["inv_shield_06"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your chance to block attacks with a shield by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% and increases the amount blocked by ${[
          5,
          10,
          15,
          20,
          25
        ]}%.`,
      },
      "Guardian Totems": {
        name: "Guardian Totems",
        pos: "b1",
        icon: icons["spell_nature_stoneskintotem"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the amount of damage reduced by your Stoneskin Totem and Windwall Totem by ${[
          25,
          50,
        ]}% and reduces the cooldown of your Grounding Totem by ${[1, 2]} sec.`,
      },
      "Thundering Strikes": {
        name: "Thundering Strikes",
        pos: "b2",
        icon: icons["ability_thunderbolt"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Improves your chance to get a critical strike with your weapon by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Ghost Wolf": {
        name: "Improved Ghost Wolf",
        pos: "b3",
        icon: icons["spell_nature_spiritwolf"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the cast time of your Ghost Wolf spell by ${[
          1,
          2,
        ]} sec.`,
      },
      "Improved Lightning Shield": {
        name: "Improved Lightning Shield",
        pos: "b4",
        icon: icons["spell_nature_lightningshield"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Lightning Shield orbs by ${[
          75,
          150,
          225,
        ]}%.`,
      },
      "Enhancing Totems": {
        name: "Enhancing Totems",
        pos: "c1",
        icon: icons["spell_nature_earthbindtotem"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increase the effect of your Strength of Earth and Grace of Air Totems by ${[
          8,
          15,
        ]}%.`,
      },
      "Parry": {
        name: "Parry",
        pos: "c3",
        icon: icons["ability_parry"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Gives a chance to parry enemy melee attacks.`,
      },
      "Anticipation": {
        name: "Anticipation",
        pos: "c4",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases your chance to dodge by an additional ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Flurry": {
        name: "Flurry",
        pos: "d2",
        icon: icons["ability_ghoulfrenzy"],
        maxRank: 5,
        reqPoints: 15,
        prereq: "Thundering Strikes",
        arrows: [{ dir: "down", from: "b2", to: "d2" }],
        description: talentText`Increases your attack speed by ${[
          10,
          15,
          20,
          25,
          30,
        ]}% for your next 3 swings after dealing a critical strike.`,
      },
      "Toughnes": {
        name: "Toughness",
        pos: "d3",
        icon: icons["spell_holy_devotion"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your armor value from items by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Improved Weapon Totems": {
        name: "Improved Weapon Totems",
        pos: "e1",
        icon: icons["spell_fire_enchantweapon"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the melee attack power bonus of your Windfury Totem by ${[
          15,
          30,
        ]}% and increases the damage caused by your Flametongue Totem by ${[
          6,
          12,
        ]}%.`,
      },
      "Elemental Weapons": {
        name: "Elemental Weapons",
        pos: "e2",
        icon: icons["spell_fire_flametounge"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the melee attack power bonus of your Rockbiter Weapon by ${[
          7,
          14,
          20,
        ]}%, your Windfury Weapon effect by ${[
          13,
          27,
          40,
        ]}% and increases the damage caused by your Flametongue Weapon and Frostbrand Weapon by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Two-Handed Axes and Maces": {
        name: "Two-Handed Axes and Maces",
        pos: "e3",
        icon: icons["inv_axe_10"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Allows you to use Two-Handed Axes and Two-Handed Maces.`,
      },
      "Weapon Mastery": {
        name: "Weapon Mastery",
        pos: "f3",
        icon: icons["ability_hunter_swiftstrike"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the damage you deal with all weapons by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Stormstrike": {
        name: "Stormstrike",
        pos: "g2",
        icon: icons["spell_holy_sealofmight"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Elemental Weapons",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Gives you an extra attack. In addition, the next 2 sources of Nature damage dealt to the target are increased by 20%. Lasts 12 sec.`,
      },
    },
  },
  Restoration: {
    name: "Restoration",
    background: backgrounds["restoration"],
    icon: icons["spell_nature_magicimmunity"],
    talents: {
      "Improved Healing Wave": {
        name: "Improved Healing Wave",
        pos: "a2",
        icon: icons["spell_nature_magicimmunity"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the casting time of your Healing Wave spell by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]}%.`,
      },
      "Tidal Focus": {
        name: "Tidal Focus",
        pos: "a3",
        icon: icons["spell_frost_manarecharge"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the Mana cost of your healing spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Imroved Reincarnation": {
        name: "Imroved Reincarnation",
        pos: "b1",
        icon: icons["spell_nature_reincarnation"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Reincarnation spell by ${[
          10,
          20,
        ]} min and increases the amount of health and mana you reincarnate with by an additional ${[
          10,
          20,
        ]}%.`,
      },
      "Ancestral Healing": {
        name: "Ancestral Healing",
        pos: "b2",
        icon: icons["spell_nature_undyingstrength"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases your target's armor value by ${[
          8,
          16,
          25,
        ]}% for 15 sec after getting a critical effect from one of your healing spells.`,
      },
      "Totemic Focus": {
        name: "Totemic Focus",
        pos: "b3",
        icon: icons["spell_nature_moonglow"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the Mana cost of your totems by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Nature's Guidance": {
        name: "Nature's Guidance",
        pos: "c1",
        icon: icons["spell_frost_stun"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your chance to hit with melee attacks and spells by ${[
          1,
          2,
          3,
        ]}%.`,
      },
      "Healing Focus": {
        name: "Healing Focus",
        pos: "c2",
        icon: icons["spell_nature_healingwavelesser"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while casting any healing spell.`,
      },
      "Totemic Mastery": {
        name: "Totemic Mastery",
        pos: "c3",
        icon: icons["spell_nature_nullward"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`The radius of your totems that affect friendly targets is increased to 30 yd.`,
      },
      "Healing Grace": {
        name: "Healing Grace",
        pos: "c4",
        icon: icons["spell_nature_healingtouch"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Reduces the threat generated by your spells by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Restorative Totems": {
        name: "Restorative Totems",
        pos: "d2",
        icon: icons["spell_nature_manaregentotem"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the effect of your Mana Spring and Healing Stream totems by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Tidal Mastery": {
        name: "Tidal Mastery",
        pos: "d3",
        icon: icons["spell_nature_tranquility"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the critical effect chance of your healing and lightning spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Healing Way": {
        name: "Healing Way",
        pos: "e1",
        icon: icons["classic_spell_nature_healingway"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Your Healing Wave spells have ${[
          33,
          66,
          100,
        ]}% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec. This effect will stack up to 3 times.`,
      },
      "Nature's Swiftness": {
        name: "Nature's Swiftness",
        pos: "e3",
        icon: icons["spell_nature_ravenform"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, your next Nature spell with a casting time less than 10 sec. becomes an instant cast spell.`,
      },
      "Purification": {
        name: "Purification",
        pos: "f3",
        icon: icons["spell_frost_wizardmark"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases the effectiveness of your healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Mana Tide Totem": {
        name: "Mana Tide Totem",
        pos: "g2",
        icon: icons["spell_frost_summonwaterelemental"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Restorative Totems",
        arrows: [{ dir: "down", from: "d2", to: "g2" }],
        description: talentText`Summons a Mana Tide Totem with 5 health at the feet of the caster for 12 sec that restores 170 mana every 3 seconds to group members within 20 yards.`,
      },
    },
  },
};