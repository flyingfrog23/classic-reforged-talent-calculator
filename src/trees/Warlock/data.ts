import { areReqPointsMet, TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/warlock"),
);
const icons = requireAll(require.context("../../assets/icons/warlock"));

export const data: TalentData = {
  Affliction: {
    name: "Affliction",
    background: backgrounds["affliction"],
    icon: icons["spell_shadow_deathcoil"],
    talents: {
      "Fel Concentration": {
        name: "Fel Concentration",
        pos: "a1",
        icon: icons["spell_shadow_fingerofdeath"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while channeling the Drain life, Drain Mana or Drain Soul spell.`,
      },
      "Improved Life Tap": {
        name: "Improved Life Tap",
        pos: "a2",
        icon: icons["spell_shadow_burningspirit"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the amount of Mana awarded by your Life Tap spell by ${[
          10,
          20,
        ]}%.`,
      },
      "Jinx": {
        name: "Jinx",
        pos: "a3",
        icon: icons["spell_shadow_curseofmannoroth"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the duration of your Curse of Exhaustion by ${[
          3,
          6,
          9,
        ]} sec, the effect of your Curse of Weakness by ${[
          10,
          20,
          30
        ]}% and the duration of your Curse of Weakness, Curse of Recklessness, Curse of Shadow and Curse of the Elements by ${[
          30,
          60,
          90,
        ]} sec.`,
      },
      "Suppression": {
        name: "Suppression",
        pos: "b2",
        icon: icons["spell_shadow_unsummonbuilding"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the range of your Affliction spells by ${[
          5,
          10,
        ]} yards and reduces the chance for enemies to resist your Affliction spells by ${[
          5,
          10,
        ]}%.`,
      },
      "Improved Curse of Agony": {
        name: "Improved Curse of Agony",
        pos: "b3",
        icon: icons["spell_shadow_curseofsargeras"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Curse of Agony by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Improved Corruption": {
        name: "Improved Corruption",
        pos: "b4",
        icon: icons["spell_shadow_abominationexplosion"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the Mana cost and threat caused by your Corruption spell by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`,
      },
      "Improved Drain": {
        name: "Improved Drain",
        pos: "c1",
        icon: icons["drainingall"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases the Health drained by your Drain Life spell by ${[
          5,
          10,
        ]}% and causes ${[
          15,
          30,
        ]}% of the Mana drained by your Drain Mana spell to damage the opponent.`,
      },
      "Black Speech": {
        name: "Black Speech",
        pos: "c2",
        icon: icons["spell_shadow_soulleech"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your chance to resist Silence and Interrupt mechanics by an additional ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Amplify Curse": {
        name: "Amplify Curse",
        pos: "c3",
        icon: icons["spell_shadow_contagion"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Improved Curse of Agony",
        arrows: [{ dir: "down", from: "b3", to: "c3" }],
        description: talentText`Increases the effect of your next Curse by 50%. Lasts 30 sec.`,
      },
      "Improved Drain Soul": {
        name: "Improved Drain Soul",
        pos: "d1",
        icon: icons["spell_shadow_haunting"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Reduces the cooldown of Drain Soul by ${[
          5,
          10,
        ]} sec. Also gives you a 50% chance to get a 100% increase to your Mana regeneration, that may continue to regenerate while casting at ${[
          50,
          100,
        ]}% of normal, for 10 sec if the target is killed by you while you drain its soul.`,
      },
      "Nightfall": {
        name: "Nightfall",
        pos: "d2",
        icon: icons["spell_shadow_twilight"],
        maxRank: 3,
        reqPoints: 15,
        description: talentText`Your periodic Shadow damage has a ${[
          1,
          2,
          3,
        ]}% chance to cause you to enter a Shadow Trance state.\n\nThe Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.\nCan occur once per 10 sec.`,
      },
      "Herald of Woe": {
        name: "Herald of Woe",
        pos: "d3",
        icon: icons["cloak_of_flame"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Amplify Curse",
        arrows: [{ dir: "down", from: "c3", to: "d3" }],
        description: talentText`Decreases the cooldown of your Death and Decay, Amplify Curse and Death Coil spells by ${[
          30,
          60,
        ]} sec.`,
      },
      "Siphon Life": {
        name: "Siphon Life",
        pos: "e1",
        icon: icons["spell_shadow_requiem"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec.`,
      },
      "Prolonged Misery": {
        name: "Prolonged Misery",
        pos: "e3",
        icon: icons["spell_shadow_unstableafllictions"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the duration of your Corruption, Curse of Agony ${["", "", "Curse of Exhaustion "]}and Immolate spells by ${[
          2,
          4,
          6,
        ]} sec.`,
      },
      "Death and Decay": {
        name: "Death and Decay",
        pos: "e4",
        icon: icons["spell_shadow_deathanddecay"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Improved Corruption",
        arrows: [{ dir: "down", from: "b4", to: "e4" }],
        description: talentText`Invokes the malignant power of death and decay, reducing the effectiveness of any healing by 20% and inflicting Shadow damage equal to your level to nearby enemies every 3 seconds for 30 sec.`,
      },
      "Shadow Mastery": {
        name: "Shadow Mastery",
        pos: "f1",
        icon: icons["spell_shadow_shadetruesight"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Siphon Life",
        arrows: [{ dir: "down", from: "e1", to: "f1" }],
        description: talentText`Increases the damage dealt or life drained by your Shadow spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Inevitable Doom": {
        name: "Inevitable Doom",
        pos: "f2",
        icon: icons["spell_shadow_auraofdarkness"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Nightfall",
        arrows: [{ dir: "down", from: "d2", to: "f2"}],
        description: talentText`Gives your Affliction spells an additional ${[
          5,
          10,
          15,
          20,
          25,
        ]}% chance to resist dispel effects and increases the damage done by your Curse of Doom by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Bubonic Trail": {
        name: "Bubonic Trail",
        pos: "f3",
        icon: icons["spell_shadow_callofbone"],
        maxRank: 2,
        reqPoints: 25,
        description: talentText`Afflicts nearby enemies with a disease that causes Nature damage equal to ${[
          50,
          100,
        ]}% of your level every 4 sec. and slows their movement and attack speed by ${[
          5,
          10,
        ]}%. Lasts 12 sec.`,
      },
      "Defiler": {
        name: "Defiler",
        pos: "g2",
        icon: icons["inevitabledoom"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Reduces the time between pediodic damage ticks of your Affliction spells by 20%.`,
      },
    },
  },
  Demonology: {
    name: "Demonology",
    background: backgrounds["demonology"],
    icon: icons["spell_shadow_metamorphosis"],
    talents: {
      "Improved Imp": {
        name: "Improved Imp",
        pos: "a1",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effect of your Imp's Firebold, Fire shield and Blood Pact spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Improved Healthstone": {
        name: "Improved Healthstone",
        pos: "a2",
        icon: icons["inv_stone_04"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the amount of Health restored by your Healthstone by ${[
          10,
          20,
        ]}%.`,
      },
      "Demonic Embrace": {
        name: "Demonic Embrace",
        pos: "a3",
        icon: icons["spell_shadow_metamorphosis"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your total Stamina by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%, but reduces your total Spirit by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%. In addition, gives your Shadow Ward a ${[
          6,
          12,
          18,
          24,
          30,
        ]}% chance to reflect Shadow spells and effects while active.`,
      },
      "Improved Voidwalker": {
        name: "Improved Voidwalker",
        pos: "b1",
        icon: icons["spell_shadow_summonvoidwalker"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the effectiveness of your Voidwalker's Tormen, Consume Shadows, Sacrifice and Suffering spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Master Conjuror": {
        name: "Master Conjuror",
        pos: "b2",
        icon: icons["spell_shadow_soulgem"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Reduces the Mana cost and casting time of your Stone creation spells by ${[
          25,
          50,
        ]}% and increases the effectiveness of your Spellstones and Firestones by ${[
          20,
          40,
        ]}%.`,
      },
      "Unholy Power": {
        name: "Unholy Power",
        pos: "b3",
        icon: icons["spell_shadow_shadowworddominate"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the damage done by your Imp, Voidwalker, Succubus and felhunter by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Improved Health Funnel": {
        name: "Improved Health Funnel",
        pos: "b4",
        icon: icons["spell_shadow_lifedrain"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the effectiveness of your Health funnel spell by ${[
          25,
          50,
        ]}%.`,
      },
      "Improved Succubus": {
        name: "Improved Succubus",
        pos: "c1",
        icon: icons["spell_shadow_summonsuccubus"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the effect of your Succubus' Lash of Pain and Soothing Kiss spells by ${[
          10,
          20,
          30,
        ]}% and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Fel Domination": {
        name: "Fel Domination",
        pos: "c2",
        icon: icons["spell_nature_removecurse"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 4 sec and its Mana cost reduced by 40%. In addition, reduces the casting time of your next Enslave Demon spell by up to 3 sec.`,
      },
      "Demonic Onslaught": {
        name: "Demonic Onslaught",
        pos: "c3",
        icon: icons["inv_misc_horn_02"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the melee and spell critical strike chance of your Imp, Voidwalker, Succubus, and felhunter by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Damned Vanguard": {
        name: "Damned Vanguard",
        pos: "c4",
        icon: icons["demonic_resilence"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Decreases the damage taken by your demons by ${[
          10,
          20,
        ]}% and increases threat generated by them by ${[
          10,
          20,
        ]}%.`,
      },
      "Fel Intellect": {
        name: "Fel Intellect",
        pos: "d1",
        icon: icons["spell_holy_magicalsentry"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the maximum Mana of your demons by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and your total Intellect by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Master Summoner": {
        name: "Master Summoner",
        pos: "d2",
        icon: icons["spell_shadow_impphaseshift"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Fel Domination",
        arrows: [{ dir: "down", from: "c2", to: "d2" }],
        description: talentText`Reduces the casting time of your Imp, Voidwalker, Succubus, and Felhunter Summoning spells by ${[
          3,
          6,
        ]} sec and the Mana cost by ${[
          30,
          60,
        ]}%`,
      },
      "Fel Stamina": {
        name: "Fel Stamina",
        pos: "d4",
        icon: icons["spell_shadow_antishadow"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the maximum Health of your demons by ${[
          5,
          10,
          15,
          20,
          25,
        ]}% and your total Stamina by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`,
      },
      "Improved Felhunter": {
        name: "Improved Felhunter",
        pos: "e1",
        icon: icons["spell_shadow_summonfelhunter"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases the effectiveness of your Felhunter's Mana Burn and Paranoia spells by ${[
          10,
          20,
          30,
        ]}% and reduces the cooldown of your Felhunter's Devour Magic and Spell Lock spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Soul Link": {
        name: "Soul Link",
        pos: "e2",
        icon: icons["spell_shadow_gathershadows"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When active, 20% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter demon instead. In addition, the demon shares the master's stats, and both the demon and master will inflict 5% more damage. Lasts as long as the demon is active.`,
      },
      "Improved Enslave Demon": {
        name: "Improved Enslave Demon",
        pos: "e4",
        icon: icons["spell_shadow_enslavedemon"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Reduces the Attack Speed penalty of your Enslace Demon spell by ${[
          20,
          40,
        ]}% and reduces the chance it will be resisted by ${[
          5,
          10,
        ]}%.`,
      },
      "Master Demonologist": {
        name: "Master Demonilogist",
        pos: "f1",
        icon: icons["spell_shadow_shadowpact"],
        maxRank: 5,
        reqPoints: 25,
        description: talentText`Grants both the Warlock and the summoned demon an effect as long as that demon is active.\n\nImp - Reduces threat caused by ${[
          8,
          16,
          24,
          32,
          40,
        ]}%.\n\nVoidwalker - Reduces physical physical damage taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.\n\nSuccubus - Increases all damage caused by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.\n\nFelhunter - Increases all resistances by ${[
          .2,
          .4,
          .6,
          .8,
          1,
        ]} per level.`,
      },
      "Fel Pact": {
        name: "Fel Pact",
        pos: "f3",
        icon: icons["inv_helmet_08"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Demonic Onslaught",
        arrows: [{ dir: "down", from: "c3", to: "f3" }],
        description: talentText`Demon's critical hits from a spell or abilities have a ${[
          8,
          16,
          24,
          32,
          40,
        ]}% chance to regenerate 15% of your total Mana over 15 sec. In addition your spell casts have a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to regenerate 30% of demon's total Health over 15 seconds.`,
      },
      "Demonic Sacrifice": {
        name: "Demonic Sacrifice",
        pos: "g2",
        icon: icons["spell_shadow_psychicscream"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Soul Link",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When activated, sacrifices your summoned demon to grant you an effect based on the demon's type.\n\nImp - Shifts you out of phase with the world for 10 sec and increases your Fire damage by 5% for 5 min.\n\nVoidwalker - Shielding nearby group members, absorbing 1151 damage for 30 sec and restores 3% of your total health every 3 sec for 5 min,\n\nSuccubus - Increases your casting speed by 33% for 30 sec and increases your Shadow damage by 5% for 5 min.\n\nFelhunter - Protexts your from all spells for 8 sec and restores 3% of your total Mana every 3 sec for 5 min.`,
      },
    },
  },
  Destruction: {
    name: "Destruction",
    background: backgrounds["destruction"],
    icon: icons["spell_shadow_rainoffire"],
    talents: {
      "Destructive Reach": {
        name: "Destructive Reach", 
        pos: "a1", 
        icon: icons["spell_shadow_corpseexplode"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`increases the range of your Destruction spells by ${[
          10,
          20,
        ]}% and reduces the threat generated by your Destruction spells by ${[
          10,
          20,
        ]}%.`, 
      },
      "Bane": {
        name: "Bane", 
        pos: "a2", 
        icon: icons["spell_shadow_deathpact"], 
        maxRank: 5, 
        reqPoints: 0, description: talentText`Reduces the casting time of your Shadow Bolt by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec and your Soul Fire spell by ${[
          0.5,
          1,
          1.5,
          2,
          2.5,
        ]}sec.`, 
      },
      "Aftermath": {
        name: "Aftermath", 
        pos: "a3", 
        icon: icons["spell_fire_fire"], 
        maxRank: 3, 
        reqPoints: 0, description: talentText`Gives your Destruction spells a ${[
          5,
          10,
          15,
        ]}% chance to daze the target for 10 sec.`, 
      },
      "Cataclysm": {
        name: "Cataclysm", 
        pos: "b1", 
        icon: icons["spell_fire_windsofwoe"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Reduces the Mana cost of your Destruction spells by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Devastation": {
        name: "Devastation", 
        pos: "b2", 
        icon: icons["spell_fire_flameshock"], 
        maxRank: 5, 
        reqPoints: 5, description: talentText`Increases the critical strike chance of your Destruction spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Demonic Power": {
        name: "Demonic Power", 
        pos: "b3", 
        icon: icons["spell_fire_firebolt"], 
        maxRank: 2, 
        reqPoints: 5, description: talentText`Reduces the casting time of your Imp's Firebold spell by ${[
          0.5,
          1,
        ]} sec and increases the critical strike chance of your Succubus' Lash of Pain ability by ${[
          30,
          60,
        ]}%.`, 
      },
      "Intensity": {
        name: "Intensity", 
        pos: "c1", 
        icon: icons["spell_fire_lavaspawn"], 
        maxRank: 2, 
        reqPoints: 10, description: talentText`Reduces the chance for enemies to resist your Destruction spells by ${[
          3,
          6,
        ]}% and gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while casting or channeling any Destruction spell.`, 
      },
      "Ruin": {
        name: "Ruin", 
        pos: "c2", 
        icon: icons["spell_shadow_shadowwordpain"], 
        maxRank: 5, 
        reqPoints: 10, 
        prereq: "Devastation", 
        arrows: [{dir: "down", from: "b2", to: "c2" }],
        description: talentText`Increases the critical strike damage bonus of your Destruction spells by ${[
          20,
          40,
          60,
          80,
          100,
        ]}%.`,
      },
      "Feeding Demons": {
        name: "Feeding Demons", 
        pos: "c3", 
        icon: icons["dragon_devour"], 
        maxRank: 2, 
        reqPoints: 10, 
        prereq: "Demonic Power", 
        arrows: [{ dir: "down", from: "b3", to: "c3" }], 
        description: talentText`Your spell critical strikes have a ${[
          50,
          100,
        ]}% chance to restore 6 per level Mana to your demon.`, 
      },
      "Shadowburn": {
        name: "Shadowburn", 
        pos: "c4", 
        icon: icons["spell_shadow_scourgebuild"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Instantly blasts target for 87 to 99 Shadow damage. If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.`, 
      },
      "Improved Immolate": {
        name: "Improved Immolate", 
        pos: "d2", 
        icon: icons["spell_fire_immolation"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Increases the damage done by your Immolate by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Bring the Pain": {
        name: "Bring the Pain", 
        pos: "d3", 
        icon: icons["spell_fire_soulburn"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the critical strike chance of your Searing Pain, Conflagrate and Shadowburn spells by ${[
          3,
          5,
        ]}%.`, 
      },
      "Improved Shadow Bolt": {
        name: "Improved Shadow Bolt", 
        pos: "d4", 
        icon: icons["spell_shadow_shadowbolt"], 
        maxRank: 5, 
        reqPoints: 15,
        description: talentText`Your Shadow Bolt critical strikes has a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to increase Shadow damage dealt to the target by 10% for 10 sec.`, 
      },
      "Pyroclasm": {
        name: "Pyroclasm", 
        pos: "e1", 
        icon: icons["spell_fire_volcano"], 
        maxRank: 2, 
        reqPoints: 20, 
        prereq: "Intensity", 
        arrows: [{ dir: "down", from: "c1", to: "e1"}], 
        description: talentText`Gives your Rain of Fire, Hellfire, and Soul Fire spells a ${[
          20,
          40,
        ]}% chance to stun the target for 4 sec.`, 
      },
      "Conflagrate": {
        name: "Conflagrate", 
        pos: "e2", 
        icon: icons["spell_fire_fireball"], 
        maxRank: 1, 
        reqPoints: 20, 
        prereq: "Improved Immolate", 
        arrows: [{ dir: "down", from: "d2", to: "e2" }], 
        description: talentText`Ignites a target that is already afflicted by Immolate, dealing 160 to 226 Fire damage and consuming the Immolate spell.`, 
      },
      "Sadism": {
        name: "Sadism", 
        pos: "e3", 
        icon: icons["spell_shadow_unstableaffliction_3"], 
        maxRank: 5, 
        reqPoints: 20, 
        prereq: "Bring the Pain", 
        arrows: [{ dir: "down", from: "d3", to: "e3" }], 
        description: talentText`Your spell critical strikes have a ${[
          8,
          16,
          24,
          32,
          40,
        ]}% chance to restore 666 mana.`, 
      },
      "Mayhem": {
        name: "Mayhem", 
        pos: "e4", 
        icon: icons["spell_holy_excorcism_02"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`When activated, increases the critical strike chance of your next Destruction spell by 100%`, 
      },
      "Shadowstorm ": {
        name: "Shadowstorm ", 
        pos: "f2", 
        icon: icons["spell_shadow_chilltouch"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases the damage done by your Shadow spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Emberstorm": {
        name: "Emberstorm", 
        pos: "f3", 
        icon: icons["spell_fire_selfdestruct"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases the damage done by your Fire spells by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%`, 
      },
      "Shock and Awe": {
        name: "Shock and Awe", 
        pos: "g2", 
        icon: icons["phoenix"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Stuns the target for 3 sec. While stunned, the target receives an aditional 10% damage from all sources and cannot be healed.`, 
      },
    },
  },
};
