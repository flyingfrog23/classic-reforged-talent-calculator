import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/priest"),
);
const icons = requireAll(require.context("../../assets/icons/priest"));

export const data: TalentData = {
  Discipline: {
    name: "Discipline",
    background: backgrounds["discipline"],
    icon: icons["spell_holy_wordfortitude"],
    talents: {
      "Silent Resolve": {
        name: "Silent Resolve", 
        pos: "a1", 
        icon: icons["spell_nature_manaregentotem"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Reduces the threat generated by your spells by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Unbreakable Will": {
        name: "Unbreakable Will", 
        pos: "a2", 
        icon: icons["spell_magic_magearmor"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Increases your chance to resist Stun, Fear and Silence effects by an additional ${[
          5,
          10,
          15,
          20,
          25,
        ]}%.`, 
      },
      "Wand Specialization": {
        name: "Wand Specialization", 
        pos: "a3", 
        icon: icons["inv_wand_01"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Increases your damage with Wands by ${[
          25,
          50,
        ]}%.`, 
      },
      "Pilgrimage": {
          name: "Pilgrimage", 
        pos: "b1", 
        icon: icons["inv_staff_10"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Increases movement and mounted speed by ${[
          5,
          10,
        ]}%. This does not stack with other movement speed increasing effects.`, 
      },
      "Improved Inner Fire": {
        name: "Improved Inner Fire", 
        pos: "b2", 
        icon: icons["spell_holy_innerfire"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Increases the Armor bonus and number of charges of your Inner Fire spell by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Concentration": {
        name: "Concentration", 
        pos: "b3", 
        icon: icons["ability_druid_naturalperfection"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`Gives you a ${[
          4,
          8,
          12,
        ]}% chance to enter a Clearcasting state after casting any damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.`, 
      },
      "Martyrdom": {
        name: "Martyrdom", 
        pos: "b4", 
        icon: icons["spell_nature_tranquility"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to increase your resistance to Interrupt effects by ${[
          15,
          30,
        ]}% and to become immune to melee and ranged critical strikes for next 2 attacks or 5 seconds after being the victim of a critical strike.`, 
      },
      "Improved Power Word: Fortitude": {
        name: "Improved Power Word: Fortitude", 
        pos: "c1", 
        icon: icons["spell_holy_wordfortitude"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the Mana cost and increases the effect of your Power Word: Fortitude and Prayer of Fortitude spells by ${[
          15,
          30,
        ]}%. In addition, reduces the chance listed spells will be dispelled by ${[
          45,
          90,
        ]}%.`, 
      },
      "Inner Focus": {
        name: "Inner Focus", 
        pos: "c2", 
        icon: icons["spell_frost_windwalkon"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Improved Inner Fire", 
        arrows: [{ dir: "down", from: "b2", to: "c2" }], 
        description: talentText`When activated, reduces the Mana cost of your next spell by 100% and increases its critical effect chance by 100% if capable of a critical effect.`, 
      },
      "Meditation": {
        name: "Meditation", 
        pos: "c3", 
        icon: icons["spell_nature_sleep"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Allows ${[
          7,
          14,
          20,
        ]}% of your Mana regeneration to continue while casting.`, 
      },
      "Focused Casting": {
        name: "Focused Casting", 
        pos: "c4", 
        icon: icons["spell_arcane_blink"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Martyrdom", 
        arrows: [{dir: "down", from: "b4", to: "c4" }], 
        description: talentText`While active, you no longer lose casting time from taking damage and you are immune to Silence and Interrupt mechanics. Lasts 5 seconds.`, 
      },
      "Stratagem": {
        name: "Stratagem", 
        pos: "d1", 
        icon: icons["spell_shadow_manaburn"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Reduces the casting time of your Mind Control and Mana Burn spells by ${[
          0.5,
          1,
        ]} sec.`, 
      },
      "Mental Strength": {
        name: "Mental Strength", 
        pos: "d2", 
        icon: icons["spell_nature_enchantarmor"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases your total Intellect by ${[
          3,
          6,
          9,
          12,
          15,
        ]}%.`, 
      },
      "Mental Agility": {
        name: "Mental Agility", 
        pos: "d3", 
        icon: icons["ability_hibernation"], 
        maxRank: 3, 
        reqPoints: 15, 
        description: talentText`Reduces the Mana cost of all your spells by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Improved Power Word: Shield": {
        name: "Improved Power Word: Shield", 
        pos: "e1", 
        icon: icons["spell_holy_powerwordshield"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Increases the damage absorbed by your Power Word: Shield by ${[
          10,
          20,
          30,
        ]}% and reduces the duration of the Weakened Soul effect caused by your Power Word: Shield by ${[
          2,
          4,
          6,
        ]} sec.`, 
      },
      "Power Word: Requital": {
        name: "Power Word: Requital", 
        pos: "e3", 
        icon: icons["spell_fire_elementaldevastation"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Blasts an enemy with Light, instantly causing 173 to 186 holy damage, 347 to 371 if the target is feared, stunned or incapacitated.`, 
      },
      "Twin Disciplines": {
        name: "Twin Disciplines", 
        pos: "e4", 
        icon: icons["spell_holy_blessingofstrength"], 
        maxRank: 3, 
        reqPoints: 20, description: talentText`Your Holy damage spells have a ${[
          10,
          20,
          30,
        ]}% chance to reduce the mana cost of your next Shadow damage spell by 100% and your Shadow damage spells have a ${[
          10,
          20,
          30,
        ]}% chance to reduce the Mana cost of your next Holy damage spell by 100%`, 
      },
      "Improved Memory": {
        name: "Improved Memory", 
        pos: "f1", 
        icon: icons["inv_misc_organ_03"], 
        maxRank: 5, 
        reqPoints: 25, description: talentText`Increases your casting speed by ${[
          5,
          10,
          15,
          20,
          25
        ]}%.`, 
      },
      "Force of Will": {
        name: "Force of Will", 
        pos: "f3", 
        icon: icons["spell_nature_slowingtotem"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your spell damage by ${[
          2,
          4,
          6,
          8,
          10,
        ]}% and the critical strike chance of your offensive spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}`, 
      },
      "Power Infusion": {
        name: "Power Infusion", 
        pos: "g2", 
        icon: icons["spell_holy_powerinfusion"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Mental Strength", 
        arrows: [{ dir: "down", from: "d2", to: "g2"}], 
        description: talentText`Infuses the target with power, increasing their spell damage and healing by 15%. Lasts 30 sec.`, 
      },
    },
  },
  Holy: {
    name: "Holy",
    background: backgrounds["holy"],
    icon: icons["spell_holy_holybolt"],
    talents: {
      "Holy Focus": {
        name: "Holy Focus", 
        pos: "a1", 
        icon: icons["spell_holy_healingfocus"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Gives you a ${[
          35,
          70,
        ]}% chance to avoid interruption caused by damage while casting any Holy spell.`, 
      },
      "Improved Renew": {
        name: "Improved Renew", 
        pos: "a2", 
        icon: icons["spell_holy_renew"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Increases the amount healed by your Renew spell by ${[
          5,
          10,
          15,
        ]}% and reduces threat cause by Renew by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Spell Warding": {
        name: "Spell Warding", 
        pos: "a3", 
        icon: icons["spell_holy_spellwarding"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Reduces all spell damage taken by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Spell Focus": {
        name: "Spell Focus", 
        pos: "b1", 
        icon: icons["spell_holy_surgeoflight"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Improves your chance to hit with spells by ${[
          2,
          4,
        ]}% and reduces your target's resistance to all your spells by ${[
          10,
          20,
        ]}`, 
      },
      "Light's Grace": {
        name: "Light's Grace", 
        pos: "b2", 
        icon: icons["spell_holy_blessedlife"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces the Mana cost of your Resurrection, Lightwell, Shackle Undead, Cure Disease, Abolish Disease and Dispel Magic spells by ${[
          10,
          20,
        ]}%.`, 
      },
      "Divine Fury": {
        name: "Divine Fury", 
        pos: "b3", 
        icon: icons["spell_holy_sealofwrath"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by ${[
          0.1,
          0.2,
          0.3,
          0.4,
          0.5,
        ]} sec.`, 
      },
      "Blessed Recovery": {
        name: "Blessed Recovery", 
        pos: "b4", 
        icon: icons["spell_holy_blessedrecovery"], 
        maxRank: 3, 
        reqPoints: 5, 
        description: talentText`After being struck by a critical hit, heal ${[
          15,
          30,
          45,
        ]}% of the damage taken over 5 seconds.`, 
      },
      "Holy Nova": {
        name: "Holy Nova", 
        pos: "c1", 
        icon: icons["spell_holy_holynova"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Causes an explosion of holy light around the caster, causing 181-209 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for 302-250. These effects cause no threat.`, 
      },
      "Holy Specialization": {
        name: "Holy Specialization", 
        pos: "c2", 
        icon: icons["spell_holy_sealofsalvation"], 
        maxRank: 5, 
        reqPoints: 10, 
        description: talentText`Increases the critical effect chance of your Holy spells by ${[
          1,
          2,
          3,
          4,
          5,
        ]}%.`, 
      },
      "Improved Healing": {
        name: "Improved Healing", 
        pos: "c4", 
        icon: icons["spell_holy_heal02"], 
        maxRank: 3, 
        reqPoints: 10, 
        description: talentText`Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by ${[
          5,
          10,
          15,
        ]}%.`, 
      },
      "Holy Reach": {
        name: "Holy Reach", 
        pos: "d1", 
        icon: icons["spell_holy_purify"], 
        maxRank: 2, 
        reqPoints: 15, 
        description: talentText`Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by ${[
          20,
          40,
        ]}%.`, 
      },
      "Purifying Light": {
        name: "Purifying Light", 
        pos: "d2", 
        icon: icons["spell_holy_retribution"], 
        maxRank: 3, 
        reqPoints: 15, 
        prereq: "Holy Specialization", 
        arrows: [{ dir: "down", from: "c2", to: "d2" }], 
        description: talentText`Increases the critical strike damage bonus of your Holy spells by ${[
          50,
          75,
          100,
        ]}% and increases damage dealt to Undead or Demons by ${[
          10,
          15,
          20,
        ]}%.`, 
      },
      "Searing Light": {
        name: "Searing Light", 
        pos: "d3", 
        icon: icons["spell_holy_searinglightpriest"], 
        maxRank: 2, 
        reqPoints: 15, 
        prereq: "Divine Fury", 
        arrows: [{ dir: "down", from: "b3", to: "d3"}], 
        description: talentText`Increases the damage of your Smite and Holy Fire spells by ${[
          5,
          10,
        ]}%.`, 
      },
      "Spiritual Guidance": {
        name: "Spiritual Guidance", 
        pos: "d4", 
        icon: icons["spell_holy_spiritualguidence"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases spell damage and healing by up to ${[
          8,
          16,
          24,
          32,
          40,
        ]}% of your total Spirit.`, 
      },
      "Improved Prayer of Healing": {
        name: "Improved Prayer of Healing", 
        pos: "e1", 
        icon: icons["spell_holy_prayerofhealing02"], 
        maxRank: 2, 
        reqPoints: 20, 
        description: talentText`Reduces the Mana cost of your Prayer of Healing spell by ${[
          15,
          30,
        ]}%.`, 
      },
      "Sacrifice": {
        name: "Sacrifice", 
        pos: "e2", 
        icon: icons["spell_holy_sealofsacrifice"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Sacrifices the caster's life in order to heal party members withing 30 yards for an amount equal to the caster's maximum health. Also gives you a chance of being resurrected with 100% health and mana.`, 
      },
      "Inspiration": {
        name: "Inspiration", 
        pos: "e3", 
        icon: icons["spell_holy_layonhands"], 
        maxRank: 3, reqPoints: 20, 
        description: talentText`Increases you target's armor by ${[
          5,
          10,
          15,
        ]}% for 20 seconds after getting a critical effect from your Flash Heal, Heal, Greater Heal, or Prayer of Healing spells.`, 
      },
      "Spiritual Healing": {
        name: "Spiritual Healing", 
        pos: "f1", 
        icon: icons["spell_nature_moonglow"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases the amount healed by your healing spells by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%.`, 
      },
      "Faith": {
        name: "Faith", 
        pos: "f3", 
        icon: icons["spell_holy_divinespirit"], 
        maxRank: 5, 
        reqPoints: 25, 
        description: talentText`Increases your Spirit by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`, 
      },
      "Spirit of Redemption": {
        name: "Spirit of Redemption", 
        pos: "g2", 
        icon: icons["inv_enchant_essenceeternallarge"], 
        maxRank: 1, 
        reqPoints: 30, 
        prereq: "Sacrifice", 
        arrows: [{ dir: "down", from: "e2", to: "g2"}], 
        description: talentText`Upon death, the priest becomes the Spirit of Redemption for 15 seconds. The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects. While in this form the priest can cast any healing spell free of cost. When the effect ends, the priest dies.`, 
      },
    },
  },
  Shadow: {
    name: "Shadow",
    background: backgrounds["shadow"],
    icon: icons["spell_shadow_shadowwordpain"],
    talents: {
      "Shadow Affinity": {
        name: "Shadow Affinity", 
        pos: "a1", 
        icon: icons["spell_shadow_shadowward"], 
        maxRank: 3, 
        reqPoints: 0, 
        description: talentText`Reduces the threat generated by your Shadow spells by ${[
          10,
          20,
          30,
        ]}%.`, 
      },
      "Improved Shadow Word: Pain": {
        name: "Improved Shadow Word: Pain", 
        pos: "a2", 
        icon: icons["spell_shadow_shadowwordpain"], 
        maxRank: 2, 
        reqPoints: 0, 
        description: talentText`Increases the duration of your Shadow Word: Pain spell by ${[
          3,
          6,
        ]} sec and reduces its Mana cost by ${[
          5,
          10,
        ]}%.`, 
      },
      "Blackout": {
        name: "Blackout", 
        pos: "a3", 
        icon: icons["spell_shadow_gathershadows"], 
        maxRank: 5, 
        reqPoints: 0, 
        description: talentText`Gives your Shadow damage spells a${["","","","n",""]} ${[
          2,
          4,
          6,
          8,
          10,
        ]}% chance to stun the target for 3 seconds.`, 
      },
      "Spirit Tap": {
        name: "Spirit Tap", 
        pos: "b1", 
        icon: icons["spell_shadow_requiem"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Gives you a ${[
          50,
          100,
        ]}% chance to gain a 100% bonus to your Spirit after killing a target that yields experience. For the duration, your Mana will regenerate at a 50% rate while casting. Lasts 15 seconds.`, 
      },
      "Improved Mind Blast": {
        name: "Improved Mind Blast", 
        pos: "b2", 
        icon: icons["spell_shadow_unholyfrenzy"], 
        maxRank: 5, 
        reqPoints: 5, 
        description: talentText`Reduces the cooldown of your Mind Blast spell by ${[
          1,
          2,
          3,
          4,
          5,
        ]} sec.`, 
      },
      "Shadow Focus": {
        name: "Shadow Focus", 
        pos: "b4", 
        icon: icons["spell_shadow_burningspirit"], 
        maxRank: 2, 
        reqPoints: 5, 
        description: talentText`Reduces your target's chance to resist your Shadow spells by ${[
          5,
          10,
        ]}% and increases the range of your Shadow damage spells by ${[
          10,
          20,
        ]}%.`, 
      },
      "Improved Psychic Scream": {
        name: "Improved Psychic Scream", 
        pos: "c1", 
        icon: icons["spell_shadow_psychicscream"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Reduces the cooldown of your Psychic Scream spell by ${[
          15,
          30,
        ]} sec. Also increases the duration by ${[
          1,
          2,
        ]} second${["","s",]} and decreases the enemy's chance to resist Psychic Scream  by ${[
          5,
          10,
        ]}%.`, 
      },
      "Mind Flay": {
        name: "Mind Flay", 
        pos: "c2", 
        icon: icons["spell_shadow_siphonmana"], 
        maxRank: 1, 
        reqPoints: 10, 
        description: talentText`Assault the target's mind with Shadow energy, causing 25 Shadow damage over 4 seconds and slowing their movement speed by 50%.`, 
      },
      "Shadow Word: Numb": {
        name: "Shadow Word: Numb", 
        pos: "c3", 
        icon: icons["spell_shadow_nightofthedead"], 
        maxRank: 1, 
        reqPoints: 10, 
        prereq: "Blackout", 
        arrows: [{dir: "down", from: "a3", to: "c3" }], 
        description: talentText`A word of dark binding that strikes terror in the hearts, paralyzing the target for 3 seconds.`, 
      },
      "Improved Fade": {
        name: "Improved Fade", 
        pos: "c4", 
        icon: icons["spell_magic_lesserinvisibilty"], 
        maxRank: 2, 
        reqPoints: 10, 
        description: talentText`Decreases the cooldown of your Fade ability by ${[
          20,
          40,
        ]} sec.`, 
      },
      "Improved Shadow Word: Silence": {
        name: "Improved Shadow Word: Silence", 
        pos: "d1", 
        icon: icons["spell_holy_silence"], 
        maxRank: 2, 
        reqPoints: 15, 
        prereq: "Improved Psychic Scream", 
        arrows: [{dir: "down", from: "c1", to: "d1" }], 
        description: talentText`Reduces the cooldown of your Shadow Word: Silence spell by ${[
          15,
          30,
        ]} sec.`, 
      },
      "Improved Mind Flay": {
        name: "Improved Mind Flay", 
        pos: "d2", 
        icon: icons["spell_shadow_siphonmana"], 
        maxRank: 3, 
        reqPoints: 15, 
        prereq: "Mind Flay", 
        arrows: [{dir: "down", from: "c2", to: "d2"}], 
        description: talentText`Gives you a ${[
          30,
          60,
          90,
        ]}% chance to avoid interruption caused by damage while channeling the Mind Flay spell.`, 
      },
      "Darkness": {
        name: "Darkness", 
        pos: "d3", 
        icon: icons["spell_shadow_twilight"], 
        maxRank: 5, 
        reqPoints: 15, 
        description: talentText`Increases your Shadow spell damage by ${[
          1,
          2,
          3,
          4,
          5,
        ]}% nad the effect of your Shadow Protection by ${[
          10,
          20,
          30,
          40,
          50,
        ]}%.`, 
      },
      "Burnt Soul": {
        name: "Burnt Soul", 
        pos: "e1", 
        icon: icons["spell_shadow_shadowpower"], 
        maxRank: 3, 
        reqPoints: 20, 
        description: talentText`Gives your shadow damage spells a ${[
          5,
          10,
          15,
        ]}% chance to generate 3% of your total Mana over 9 seconds at the cost of 9% health.`, 
      },
      "Vampiric Embrace": {
        name: "Vampiric Embrace", 
        pos: "e2", 
        icon: icons["spell_shadow_unsummonbuilding"], 
        maxRank: 1, 
        reqPoints: 20, 
        description: talentText`Afflicts your target with Shadow energy that causes all party members to be healed for 15% of any Shadow spell damage you deal for 60 seconds.`, 
      },
      "Blur": {
        name: "Blur", 
        pos: "e4", 
        icon: icons["ability_ambush"], 
        maxRank: 3, 
        reqPoints: 20, 
        prereq: "Improved Fade", 
        arrows: [{dir: "down", from: "c4", to: "e4" }], 
        description: talentText`The darkness envelopes you. You become untrackable, and the chance you are hit by melee and ranged attacks is reduced by ${[
          4,
          7,
          10,
        ]}%.`, 
      },
      "Mind Overlord": {
        name: "Mind Overlord", 
        pos: "f1", 
        icon: icons["spell_nature_focusedmind"], 
        maxRank: 5, 
        reqPoints: 25, description: talentText`Reduces the Mana cost of your Mind Blast, Mind Flay, Mind Control, and Mind Vision spells by ${[
          6,
          12,
          18,
          24,
          30,
        ]}%.`, 
      },
      "Improved Vampiric Embrace": {
        name: "Improved Vampiric Embrace", 
        pos: "f2", 
        icon: icons["spell_shadow_improvedvampiricembrace"], 
        maxRank: 2, 
        reqPoints: 25, 
        prereq: "Vampiric Embrace", 
        arrows: [{dir: "down", from: "e2", to: "f2" }], 
        description: talentText`Increases the percentage healed by Vampiric Embrace by an additional ${[
          10,
          20,
        ]}%.`, 
      },
      "Shadow Weaving": {
        name: "Shadow Weaving", 
        pos: "f3", 
        icon: icons["spell_shadow_blackplague"], 
        maxRank: 5, 
        reqPoints: 25, 
        prereq: "Darkness", 
        arrows: [{dir: "down", from: "d3", to: "f3" }], 
        description: talentText`Your Shadow damage spells have a ${[
          20,
          40,
          60,
          80,
          100,
        ]}% chance to cause your target to be vulnerable by 1%, lasting 20 seconds. Stacks up to 10 times.`, 
      },
      "Shadowform": {
        name: "Shadowform", 
        pos: "g2", 
        icon: icons["spell_shadow_shadowform"], 
        maxRank: 1, 
        reqPoints: 30, 
        description: talentText`Assume a Shadowform, increasing your Shadow damage by 20% and reducing shadow damage done to you by 20%. However, you may not cast Holy spells while in this form.`, 
      },
    },
  },
};
