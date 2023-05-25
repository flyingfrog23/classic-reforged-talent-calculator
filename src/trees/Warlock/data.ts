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
      "Suppression": {
        name: "Suppression",
        pos: "a2",
        icon: icons["spell_shadow_unsummonbuilding"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the chaance for enemies to resist your Affliction spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Corruption": {
        name: "Improved Corruption",
        pos: "a3",
        icon: icons["spell_shadow_abominationexplosion"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the casting time of your Corruption spell by ${[
          0.4,
          0.8,
          1.2,
          1.6,
          2,
        ]} sec.`,
      },
      "Improved Curse of Weakness": {
        name: "Improved Curse of Weakness",
        pos: "b1",
        icon: icons["spell_shadow_curseofmannoroth"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the effect of your Curse of Weakness by ${[
          6,
          13,
          20,
        ]}%.`,
      },
      "Improved Drain Soul": {
        name: "Improved Drain Soul",
        pos: "b2",
        icon: icons["spell_shadow_haunting"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to get a 100% increase to your Mana regeneration for 10 sec if the target is killed by you while you drain its soul. In addition your Mana may continue to regenerate while casting at 50% of normal.`,
      },
      "Improved Life Tap": {
        name: "Improved Life Tap",
        pos: "b3",
        icon: icons["spell_shadow_burningspirit"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the amount of Mana awarded by your Life Tap spell by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Drain Life": {
        name: "Improved Drain Life",
        pos: "b4",
        icon: icons["spell_shadow_lifedrain02"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the Health drained by your Drain Life spell by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Improved Curse of Agony": {
        name: "Improved Curse of Agony",
        pos: "c1",
        icon: icons["spell_shadow_curseofsargeras"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases the damage done by your Curse of Agony by ${[
          2,
          4,
          6,
        ]}%.`,
      },
      "Fel Concentration": {
        name: "Fel Concentration",
        pos: "c2",
        icon: icons["spell_shadow_fingerofdeath"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Gives you a ${[
          14,
          28,
          42,
          56,
          70,
        ]}% chance to avoid interruption caused by damage while channeling the Drain Life, Drain Mana, or Drain Soul spell.`,
      },
      "Amplify Curse": {
        name: "Amplify Curse",
        pos: "c3",
        icon: icons["spell_shadow_contagion"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%. Lasts 30 sec.`,
      },
      "Grim Reach": {
        name: "Grim Reach",
        pos: "d1",
        icon: icons["spell_shadow_callofbone"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the range of your Affliction spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Nightfall": {
        name: "Nightfall",
        pos: "d2",
        icon: icons["spell_shadow_twilight"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives your Corruption and Drain Life spells a ${[
          2,
          4,
        ]}% chance to cause you to enter a Shadow Trance state after damaging the opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.`,
      },
      "Improved Drain Mana": {
        name: "Improved Drain Mana",
        pos: "d4",
        icon: icons["spell_shadow_siphonmana"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Causes 15% of the Mana drained by your Drain Mana spell to damage the opponent.`,
      },
      "Siphon Life": {
        name: "Siphon Life",
        pos: "e2",
        icon: icons["spell_shadow_requiem"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Transfers 15 health from the target to the caster every 3 sec. Lasts 30 sec.`,
      },
      "Curse of Exhaustion": {
        name: "Curse of Exhaustion",
        pos: "e3",
        icon: icons["spell_shadow_grimward"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Amplify Curse",
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`Reduces the target's movement speed by 10% for 12 sec. Only one Curse per Warlock can be active on any one target.`,
      },
      "Improved Curse of Exhaustion": {
        name: "Improved Curse of Exhaustion",
        pos: "e4",
        icon: icons["spell_shadow_grimward"],
        maxRank: 4,
        reqPoints: 20,
        prereq: "Curse of Exhaustion",
        arrows: [{ dir: "right", from: "e3", to: "e4" }],
        description: talentText`Increases the speed reduction of your Curse of Exhaustion by ${[
          5,
          10,
          15,
          20,
        ]}%.`,
      },
      "Shadow Mastery": {
        name: "Shadow Mastery",
        pos: "f2",
        icon: icons["spell_shadow_shadetruesight"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Siphon Life",
        arrows: [{ dir: "down", from: "e2", to: "f2" }],
        description: talentText`Increases the damage dealt or life drained by your Shadow spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Dark Pact": {
        name: "Dark Pact",
        pos: "g2",
        icon: icons["spell_shadow_darkritual"],
        maxRank: 1,
        reqPoints: 30,
        description: talentText`Drains 150 of your pet's Mana, returning 100% to you.`,
      },
    },
  },
  "Demonology": {
    name: "Demonology",
    background: backgrounds["demonology"],
    icon: icons["spell_shadow_metamorphosis"],
    talents: {
      "Improved Healthstone": {
        name: "Improved Healthstone",
        pos: "a1",
        icon: icons["inv_stone_04"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Increases the amount of Health restored by your Healthstone by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Imp": {
        name: "Improved Imp",
        pos: "a2",
        icon: icons["spell_shadow_summonimp"],
        maxRank: 3,
        reqPoints: 0,
        description: talentText`Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Demonic Embrace": {
        name: "Demonic Embrace",
        pos: "a3",
        icon: icons["spell_shadow_metamorphosis"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Increases your total Stamina by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%, but reduces your total Spirit by ${[1, 2, 3, 4, 5]}%.`,
      },
      "Improved Health Funnel": {
        name: "Improved Health Funnel",
        pos: "b1",
        icon: icons["spell_shadow_lifedrain"],
        maxRank: 2,
        reqPoints: 5,
        description: talentText`Increases the amount of Health transfered by your Health Funnel spell by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Voidwalker": {
        name: "Improved Voidwalker",
        pos: "b2",
        icon: icons["spell_shadow_summonvoidwalker"],
        maxRank: 3,
        reqPoints: 5,
        description: talentText`Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice and Suffering spells by ${[
          10,
          20,
          30,
        ]}%.`,
      },
      "Fel Intellect": {
        name: "Fel Intellect",
        pos: "b3",
        icon: icons["spell_holy_magicalsentry"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Increases the maximum Mana of your Imp, Voidwalker, Succubus, and Felhunter by ${[
          3,
          6,
          9,
          12,
          15,
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
        ]}%, and increases the duration of your Succubus' Seduction and Lesser Invisibility spells by ${[
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
        description: talentText`Your next Imp, Voidwalker, Succubus, or Felhunter Summon spell has its casting time reduced by 5.5 sec and its mana cost reduced by 50%.`,
      },
      "Fel Stamina": {
        name: "Fel Stamina",
        pos: "c3",
        icon: icons["spell_shadow_antishadow"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the maximum Health of your Imp, Voidwalker, Succubus, and Felhutner by ${[
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
          2,
          4,
        ]} sec and the Mana cost by ${[20, 40]}%.`,
      },
      "Unholy Power": {
        name: "Unholy Power",
        pos: "d3",
        icon: icons["spell_shadow_shadowworddominate"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the damage done by your Voidwalker, Succubus, and Felhunter's melee attacks by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.`,
      },
      "Improved Enslave Demon": {
        name: "Improved Enslave Demon",
        pos: "e1",
        icon: icons["spell_shadow_enslavedemon"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Reduces the Attack Speed and Casting Speed penalty of your Enslave Demon spell by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and reduces the resist chance by ${[2, 4, 6, 8, 10]}%.`,
      },
      "Demonic Sacrifice": {
        name: "Demonic Sacrifice",
        pos: "e2",
        icon: icons["spell_shadow_psychicscream"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`When activated, sacrifices your summoned demon to grant you an effect that lasts 30 min. The effect is canceled if any Demon is summoned.\n\nImp: Increases your Fire damage by 15%.\n\nVoidwalker: Restores 3% of your total Health every 4 sec.\n\nSuccubus: Increases your Shadow damage by 15%.\n\nFelhunter: Restores 2% of total Mana every 4 sec.`,
      },
      "Improved Firestone": {
        name: "Improved Firestone",
        pos: "e4",
        icon: icons["inv_ammo_firetar"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases the bonus Fire damage from Firestones and the Firestone effect by ${[
          15,
          30,
        ]}%.`,
      },
      "Master Demonologist": {
        name: "Master Demonologist",
        pos: "f3",
        icon: icons["spell_shadow_shadowpact"],
        maxRank: 5,
        reqPoints: 25,
        prereq: "Unholy Power",
        arrows: [{ dir: "down", from: "d3", to: "f3" }],
        description: talentText`Grants both the Warlock and the summoned demon an effect as long as the demon is active.\n\nImp - Reduces threat caused by ${[
          4,
          8,
          12,
          16,
          20,
        ]}%.\n\nVoidwalker - Reduces physical damage taken by ${[
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
          0.2,
          0.4,
          0.6,
          0.8,
          1,
        ]} per level.`,
      },
      "Soul Link": {
        name: "Soul Link",
        pos: "g2",
        icon: icons["spell_shadow_gathershadows"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Demonic Sacrifice",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, or Felhunter demon instead. In addition, both the demon and master will inflict 3% more damage. Lasts as long as the demon is active.`,
      },
      "Improved Spellstone": {
        name: "Improved Spellstone",
        pos: "g3",
        icon: icons["inv_misc_gem_sapphire_01"],
        maxRank: 2,
        reqPoints: 30,
        description: talentText`Increases the amount of damage absorbed by your Spellstone by ${[
          15,
          30,
        ]}%.`,
      },
    },
  },
  "Destruction": {
    name: "Destruction",
    background: backgrounds["destruction"],
    icon: icons["spell_shadow_rainoffire"],
    talents: {
      "Improved Shadow Bolt": {
        name: "Improved Shadow Bolt",
        pos: "a2",
        icon: icons["spell_shadow_shadowbolt"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Your Shadow Bolt critical strikes increase Shadow damage dealt to the target by ${[
          4,
          8,
          12,
          16,
          20,
        ]}% until 4 non-periodic damage sources are applied. Effect lasts a maximum of 12 sec.`,
      },
      "Cataclysm": {
        name: "Cataclysm",
        pos: "a3",
        icon: icons["spell_fire_windsofwoe"],
        maxRank: 5,
        reqPoints: 0,
        description: talentText`Reduces the Mana cost of your Destruction spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Bane": {
        name: "Bane",
        pos: "b2",
        icon: icons["spell_shadow_deathpact"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Reduces the casting time of your Shadow Bolt and Immolate spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec and your Soul Fire spell by ${[0.4, 0.8, 1.2, 1.6, 2]} sec.`,
      },
      "Aftermath": {
        name: "Aftermath",
        pos: "b3",
        icon: icons["spell_fire_fire"],
        maxRank: 5,
        reqPoints: 5,
        description: talentText`Gives your Destruction spells a ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to daze the target for 5 sec.`,
      },
      "Improved Firebolt": {
        name: "Improved Firebolt",
        pos: "c1",
        icon: icons["spell_fire_firebolt"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Reduces the casting time of your Imp's Firebolt spell by ${[
          0.5,
          1,
        ]} sec.`,
      },
      "Improved Lash of Pain": {
        name: "Improved Lash of Pain",
        pos: "c2",
        icon: icons["spell_shadow_curse"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Reduces the cooldown of your Succubus' Lash of Pain by ${[
          3,
          6,
        ]} sec.`,
      },
      "Devastation": {
        name: "Devastation",
        pos: "c3",
        icon: icons["spell_fire_flameshock"],
        maxRank: 5,
        reqPoints: 10,
        description: talentText`Increases the critical strike chance of your Destruction spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`,
      },
      "Shadowburn": {
        name: "Shadowburn",
        pos: "c4",
        icon: icons["spell_shadow_scourgebuild"],
        maxRank: 1,
        reqPoints: 10,
        description: talentText`Instantly blasts the target for 91 to 104 Shadow damage. If the target dies within 5 sec of Shadowburn, and yields experience or honor, the caster gains a Soul Shard.`,
      },
      "Intensity": {
        name: "Intensity",
        pos: "d1",
        icon: icons["spell_fire_lavaspawn"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to resist interruption caused by damage while channeling the Rain of Fire, Hellfire or Soul Fire spell.`,
      },
      "Destructive Reach": {
        name: "Destructive Reach",
        pos: "d2",
        icon: icons["spell_shadow_corpseexplode"],
        maxRank: 2,
        reqPoints: 15,
        description: talentText`Increases the range of your Destruction spells by ${[
          10,
          20,
        ]}%.`,
      },
      "Improved Searing Pain": {
        name: "Improved Searing Pain",
        pos: "d4",
        icon: icons["spell_fire_soulburn"],
        maxRank: 5,
        reqPoints: 15,
        description: talentText`Increases the critical strike chance of your Searing Pain spell by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`,
      },
      "Pyroclasm": {
        name: "Pyroclasm",
        pos: "e1",
        icon: icons["spell_fire_volcano"],
        maxRank: 2,
        reqPoints: 20,
        prereq: "Intensity",
        arrows: [{ dir: "down", from: "d1", to: "e1" }],
        description: talentText`Gives your Rain of Fire, Hellfire, and Soul Fire spells a ${[
          13,
          26,
        ]}% chance to stun the target for 3 sec.`,
      },
      "Improved Immolate": {
        name: "Improved Immolate",
        pos: "e2",
        icon: icons["spell_fire_immolation"],
        maxRank: 5,
        reqPoints: 20,
        description: talentText`Increases the initial damage of your Immolate spell by ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`,
      },
      "Ruin": {
        name: "Ruin",
        pos: "e3",
        icon: icons["spell_shadow_shadowwordpain"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "Devastation",
        arrows: [{ dir: "down", from: "c3", to: "e3" }],
        description: talentText`Increases the critical strike damage bonus of your Destruction spells by 100%.`,
      },
      "Emberstorm": {
        name: "Emberstorm",
        pos: "f3",
        icon: icons["spell_fire_selfdestruct"],
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
      "Conflagrate": {
        name: "Conflagrate",
        pos: "g2",
        icon: icons["spell_fire_fireball"],
        maxRank: 1,
        reqPoints: 30,
        prereq: "Improved Immolate",
        arrows: [{ dir: "down", from: "e2", to: "g2" }],
        description: talentText`Ignites a target that is already afflicted by Immolate, dealing 249 to 316 Fire damage and consuming the Immolate spell.`,
      },
    },
  },
};