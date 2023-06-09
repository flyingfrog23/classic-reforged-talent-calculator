import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/rogue"),
);
const icons = requireAll(require.context("../../assets/icons/rogue"));

export const data: TalentData = {
  Assassination: {
    name: "Assassination",
    background: backgrounds["assassination"],
    icon: icons["ability_rogue_eviscerate"],
    talents: {
      "Murder": {
        name: "Murder",
        pos: "a1",
        icon: icons["spell_shadow_deathscream"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by ${[
          1,
          2,
        ]}%.`,
      },
      "Remorseless Attacks": {
        name: "Remorseless Attacks",
        pos: "a2",
        icon: icons["ability_fiegndead"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`After killing a target that yields experience or honor, gives you a ${[
          20,
          40,
        ]}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike. Lasts 20 sec.`,
      },
      "Opportunity": {
        name: "Opportunity",
        pos: "a3",
        icon: icons["ability_warrior_warcry"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases the damage dealt when striking from behind with your Backstab, Garrote, or Ambush abilities by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
//placeholder ruthelessnes
      "Improved Backstab": {
        name: "Improved Backstab",
        pos: "b2",
        icon: icons["ability_backstab"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the critical strike chance of your Backstab ability by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Improved Poisons": {
        name: "Improved Poisons",
        pos: "b3",
        icon: icons["ability_poisons"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the chance to apply poisons to your target by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Relentless Strikes": {
        name: "Relentless Strikes",
        pos: "c1",
        icon: icons["ability_warrior_decisivestrike"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Your finishing moves have a 20% chance per combo point to restore 25 energy.`,
      },
      "Improved Ambush": {
        name: "Improved Ambush",
        pos: "c2",
        icon: icons["ability_rogue_ambush"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Ambush ability by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Vile Poisons": {
        name: "Vile Poisons",
        pos: "c3",
        icon: icons["ability_rogue_feigndeath"],
        maxRank: 5,
        reqPoints: 10,
        prereq: "Improved Poisons",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Increases the damage dealt by your poisons by ${[
          10,
          20,
          30,
          40,
          50,
        ]}% and gives your poisons an additional ${[
          15,
          30,
          45,
          60,
          75,
        ]}% chance to resist dispel effects.`,
      },
      "Dagger Specialization": {
        name: "Dagger Specialization",
        pos: "d2",
        icon: icons["inv_weapon_shortblade_05"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your chance to get a critical strike with Daggers by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Serrated Blades": {
        name: "Serrated Blades",
        pos: "d3",
        icon: icons["inv_sword_17"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Causes your attacks to ignore 0 of your target's Armor and increases the damage dealt by your Rupture ability by ${[
          10,
          20,
          30,
        ]}%. The amount of Armor reduced increases with your level.`,
      },
      "Improved Eviscerate": {
        name: "Improved Eviscerate",
        pos: "e1",
        icon: icons["ability_rogue_eviscerate"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the damage done by your Eviscerate ability by ${[
          5,
          10,
          15,
        ]}%.`,
      },
      "Premeditation": {
        name: "Premeditation",
        pos: "e2",
        icon: icons["spell_shadow_possession"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When used, adds 2 combo points to your target. You must add to or use those combo points within 10 sec. or the combo points are lost. (120 sec. cooldown)`,
      },
      "Improved Kidney Shot": {
        name: "Improved Kidney Shot",
        pos: "e3",
        icon: icons["ability_rogue_kidneyshot"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`While affected by your Kidney Shot ability, the target receives an additional ${[
          5,
          10,
          15,
        ]}% damage from all sources.`,
      },
      "Seal Fate": {
        name: "Seal Fate",
        pos: "f2",
        icon: icons["spell_shadow_chilltouch"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Your critical strikes from abilities that add combo points have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to add an additional combo point.`,
      },
      "Cold Blood": {
        name: "Cold Blood",
        pos: "g2",
        icon: icons["spell_ice_lament"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Seal Fate",
        arrows: [{ dir: "down", from: "f2", to: "g2" }],
        description: talentText`When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by 100%. (120 sec. cooldown)`,
      },
    },
  },
  Combat: {
    name: "Combat",
    background: backgrounds["combat"],
    icon: icons["ability_backstab"],
    talents: {
//placeholder improved gouge
      "Improved Sinister Strike": {
        name: "Improved Sinister Strike",
        pos: "a2",
        icon: icons["spell_shadow_ritualofsacrifice"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Reduces the Energy cost of your Sinister Strike ability by ${[
          3,
          5,
        ]}.`,
      },
      "Malice": {
        name: "Malice",
        pos: "a3",
        icon: icons["ability_racial_bloodrage"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your critical strike chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Improved Slice and Dice": {
        name: "Improved Slice and Dice",
        pos: "b1",
        icon: icons["ability_rogue_slicedice"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the duration of your Slice and Dice ability by ${[
          15,
          30,
          45,
        ]}%.`,
      },
      "Deflection": {
        name: "Deflection",
        pos: "b2",
        icon: icons["ability_parry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your Parry chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Precision": {
        name: "Precision",
        pos: "b3",
        icon: icons["ability_marksmanship"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your chance to hit with melee weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Endurance": {
        name: "Endurance",
        pos: "c1",
        icon: icons["spell_shadow_shadowward"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Sprint and Evasion abilities by ${[
          "45 sec",
          "1.5 min",
        ]}.`,
      },
      "Riposte": {
        name: "Riposte",
        pos: "c2",
        icon: icons["ability_warrior_challange"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Deflection",
        arrows: [{ dir: "down", from: "b2", to: "c2" }],
        description: talentText`A strike that becomes active after parrying an opponent's attack. This attack deals 150% weapon damage and disarms the target for 6 sec. (6 sec. cooldown)`,
      },
      "Dual Wield Specialization": {
        name: "Dual Wield Specialization",
        pos: "c3",
        icon: icons["ability_dualwield"],
        maxRank: 5,
        reqPoints: 10,
        prereq: "Precision",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Increases damage done by your offhand weapon by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`,
      },
      "Improved Sprint": {
        name: "Improved Sprint",
        pos: "c4",
        icon: icons["ability_rogue_sprint"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Gives a ${[
          50,
          100,
        ]}% chance to remove all movement impairing effects when you activate your Sprint ability.`,
      },
      "Aggression": {
        name: "Aggression",
        pos: "d1",
        icon: icons["ability_racial_avatar"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Increases the damage of your Sinister Strike and Eviscerate abilities by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Fist Weapon Specialization": {
        name: "Fist Weapon Specialization",
        pos: "d2",
        icon: icons["inv_gauntlets_04"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases your chance to get a critical strike with Fist Weapons by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Lethality": {
        name: "Lethality",
        pos: "d3",
        icon: icons["ability_criticalstrike"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`,
      },
      "Weapon Expertise": {
        name: "Weapon Expertise",
        pos: "e1",
        icon: icons["spell_holy_blessingofstrength"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your skill with Sword, Fist, and Dagger weapons by ${[
          3,
          5,
        ]}%.`,
      },
      "Mace Specialization": {
        name: "Mace Specialization",
        pos: "e3",
        icon: icons["inv_mace_01"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases your skill with Maces by ${[
          1,
          2,
          3,
          4,
          5,
        ]}, and gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to stun your target for 3 sec. with a Mace.`,
      },
      "Blade Flurry": {
        name: "Blade Flurry",
        pos: "e2",
        icon: icons["ability_warrior_punishingblow"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec. (120 sec. cooldown)`,
      },
//placeholder fist weapon special
      "Sword Specialization": {
        name: "Sword Specialization",
        pos: "f1",
        icon: icons["inv_sword_27"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Gives you a ${[
          1,
          2,
          3,
          4,
          5,
        ]}% chance to get an extra attack on the same target after dealing damage with your Sword.`,
      },
//placeholder aggression
      "Adrenaline Rush": {
        name: "Adrenaline Rush",
        pos: "g2",
        icon: icons["spell_shadow_shadowworddominate"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Blade Flurry",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Increases your Energy regeneration rate by 100% for 15 sec. In addition you become immune to stun and incapacitate effects. (5 min cooldown)`,
      },
    },
  },
  Subtlety: {
    name: "Subtlety",
    background: backgrounds["subtlety"],
    icon: icons["ability_stealth"],
    talents: {
      "Sleight of Hand": {
        name: "Sleight of Hand",
        pos: "a1",
        icon: icons["ability_rogue_feint"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Reduces the chance you are critically hit by melee and ranged attacks by ${[
          1,
          2,
        ]}% and increases the threat reduction of your Feint ability by ${[
          10,
          20,
        ]}%.`,
      },
      "Lightning Reflexes": {
        name: "Lightning Reflexes",
        pos: "a2",
        icon: icons["spell_nature_invisibilty"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your Dodge chance by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Master of Deception": {
        name: "Master of Deception",
        pos: "a3",
        icon: icons["spell_shadow_charm"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the chance enemies have to detect you while in Stealth mode.${[
          "",
          " More effective than Master of Deception (Rank 1)",
          " More effective than Master of Deception (Rank 2)",
          " More effective than Master of Deception (Rank 3)",
          " More effective than Master of Deception (Rank 4)",
        ]}.`,
      },
      "Improved Gouge": {
        name: "Improved Gouge",
        pos: "a4",
        icon: icons["ability_gouge"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effect duration of your Gouge ability by ${[
          0.5,
          1,
          1.5,
        ]} sec.`,
      },
      "Ruthlessness": {
        name: "Ruthlessness",
        pos: "b1",
        icon: icons["ability_druid_disembowel"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Gives your finishing moves a ${[
          20,
          40,
          60,
        ]}% chance to add a combo point to your target.`,
      },
      "Elusiveness": {
        name: "Elusiveness",
        pos: "b4",
        icon: icons["spell_magic_lesserinvisibilty"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the cooldown of your Vanish and Blind abilities by ${[
          "45 sec",
          "1.5 min",
        ]}.`,
      },
      "Camouflage": {
        name: "Camouflage",
        pos: "b3",
        icon: icons["ability_stealth"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases your speed while stealthed by ${[
          3,
          6,
          9,
          12,
          15,
        ]}% and reduces the cooldown of your Stealth ability by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "c1",
        icon: icons["spell_shadow_fumble"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          25,
          50,
          75,
        ]}% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.`,
      },
      "Ghostly Strike": {
        name: "Ghostly Strike",
        pos: "c2",
        icon: icons["spell_shadow_curse"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Lightning Reflexes",
        arrows: [{ dir: "down", from: "a2", to: "c2" }],
        description: talentText`A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point. (20 sec. cooldown)`,
      },
      "Improved Expose Armor": {
        name: "Improved Expose Armor",
        pos: "c3",
        icon: icons["ability_warrior_riposte"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the armor reduced by your Expose Armor ability by ${[
          25,
          50,
        ]}%.`,
      },
      "Setup": {
        name: "Setup",
        pos: "d1",
        icon: icons["spell_nature_mirrorimage"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          15,
          30,
          45,
        ]}% chance to add a combo point to your target after dodging their attack or fully resisting one of their spells.`,
      },
      "Improved Sap": {
        name: "Improved Sap",
        pos: "d2",
        icon: icons["ability_sap"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          33,
          66,
          100,
        ]}% chance to return to stealth mode after using your Sap ability.`,
      },
      "Improved Kick": {
        name: "Improved Kick",
        pos: "d3",
        icon: icons["ability_kick"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Kick ability a ${[
          50,
          100,
        ]}% chance to silence the target for 2 sec.`,
      },
      "Heightened Senses": {
        name: "Heightened Senses",
        pos: "e1",
        icon: icons["ability_ambush"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your Stealth detection and reduces the chance you are hit by spells and ranged attacks by ${[
          2,
          4,
        ]}.${["", " More effective than Heightened Senses (Rank 1)."]}`,
      },
      "Hemorrhage": {
        name: "Hemorrhage",
        pos: "e2",
        icon: icons["spell_shadow_lifedrain"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`An instant strike that damages the opponent and causes the target to hemmorhage, increasing any Physical damage dealt to the target by up to 3. Lasts 30 charges or 15 sec. Awards 1 combo point.`,
      },
      "Dirty Deeds": {
        name: "Dirty Deeds",
        pos: "e3",
        icon: icons["spell_shadow_summonsuccubus"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the Energy cost of your Cheap Shot and Garrote abilities by ${[
          10,
          20,
        ]}.`,
      },
      "Deadliness": {
        name: "Deadliness",
        pos: "f3",
        icon: icons["inv_weapon_crossbow_11"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Increases your Attack Power by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Preparation": {
        name: "Preparation",
        pos: "g2",
        icon: icons["spell_shadow_antishadow"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Hemorrhage",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, this ability immediately finishes the cooldown on your other Rogue abilities. (7.5 min cooldown)`,
      },
    },
  },
};
