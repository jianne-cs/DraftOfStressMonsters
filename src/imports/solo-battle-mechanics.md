# BATTLE SYSTEM: SOLO VS GROUP MECHANICS

## BATTLE OVERVIEW

The battle system transforms therapeutic skills into combat mechanics where users fight personalized stress monsters. Two distinct modes serve different needs:

| Mode | Purpose | Best For |
|------|---------|----------|
| **Solo Battle** | Individual coping, personal practice | Daily maintenance, private struggles, skill practice |
| **Group Battle** | Shared support, collective strength | Overwhelming moments, community connection, accountability |

---

# SOLO BATTLE: COMPLETE BREAKDOWN

## Solo Battle Concept

A one-on-one fight between the user and their personalized stress monster. The user applies therapeutic skills to reduce the monster's HP while managing their own energy/stress level.

---

## Solo Battle Interface

```
+--------------------------------------------------+
|                      BATTLE                       |
|                                      [MENU] [EXIT]|
+--------------------------------------------------+
|                                                  |
|  [MONSTER ZONE]                                  |
|                                                  |
|  +------------------------------------------+    |
|  |                                          |    |
|  |          [THESIS PANIC MONSTER]          |    |
|  |               ●●●●○○ 78 HP               |    |
|  |          "You'll never finish..."         |    |
|  |                                          |    |
|  +------------------------------------------+    |
|                                                  |
|  [BATTLE LOG]                                    |
|  > Monster attacks! Confidence shaken (-5)       |
|  > You use Grounding Breath. Monster HP -12      |
|                                                  |
|  [USER ZONE]                                      |
|  +------------------------------------------+    |
|  |  [AVATAR]  YOUR ENERGY: ████████░░ 42/100 |    |
|  |                                          |    |
|  |  [SKILL DECK]                            |    |
|  |  +--------+ +--------+ +--------+         |    |
|  |  |GROUND- | |COGNITIVE| | BODY   |  >     |    |
|  |  |ING     | |SHIELD   | |DOUBLE  |  MORE  |    |
|  |  |BREATH  | |12 DMG   | |8 DMG   |  SKILLS|    |
|  |  |8 DMG   | |-5 ENERGY| |-3 ENERGY|       |    |
|  |  +--------+ +--------+ +--------+         |    |
|  |                                          |    |
|  +------------------------------------------+    |
+--------------------------------------------------+
```

---

## Solo Battle: Key Components

### 1. Monster Zone

**Visual Elements:**
- Animated monster representation (customized by user)
- Monster name displayed prominently
- **Monster HP Bar:** Visual and numerical representation
- Monster dialogue bubble showing current "attack" or thought

**Monster HP:**
```
Scale: 0-100 HP (or higher for evolved monsters)
Visual: ●●●●○○○○○○ 78/100
Color: Green (0-30), Yellow (31-70), Red (71-100)
```

**Monster Behavior:**
- Attacks every turn (or on timer for real-time battles)
- Dialogue reflects user's selected triggers
- Animations correspond to monster features

### 2. User Zone

**Avatar Area:**
- User profile picture or icon
- Username or "You"

**User Energy/Stamina Bar:**
```
YOUR ENERGY: ████████░░ 42/100
```
- Energy depletes as skills are used
- Energy regenerates slowly over time or with rest actions
- If energy reaches 0, user must retreat or use recovery items

**What Energy Represents:**
- Mental capacity to cope
- Emotional bandwidth
- Focus and attention
- Resilience in the moment

### 3. Skill Deck

**Layout:** 3-4 visible skill buttons + "More" to expand

**Each Skill Button Shows:**
- Skill name (short)
- Damage amount (HP reduction)
- Energy cost
- Small icon representing skill type

**Example Skills:**

| Skill | Damage | Energy Cost | Effect |
|-------|--------|-------------|--------|
| Grounding Breath | 8 | 3 | Reduces monster HP, calms user |
| Cognitive Shield | 12 | 5 | Blocks monster's next attack |
| Body Double | 10 | 4 | Summons accountability partner |
| Self-Compassion | 6 | 2 | Restores user energy |
| Thought Reframe | 15 | 7 | High damage, higher cost |

### 4. Battle Log

**Purpose:** Text record of the battle's progress

**Elements:**
- Timestamped actions (user and monster)
- Damage numbers
- Status effects
- Monster dialogue

**Example Log:**
```
> Monster attacks: "You're not good enough." (-5 energy)
> You use Grounding Breath. Monster HP -8
> Monster HP: 70/100
> You use Cognitive Shield. Monster's next attack blocked.
> Monster tries to attack but is blocked!
```

---

## Solo Battle Flow

### Turn Structure (Turn-Based)

1. **Monster attacks first** (or user, depending on who initiates)
2. **User selects skill** from deck
3. **Skill resolves:** Monster HP ↓, User Energy ↓
4. **Check win condition:** Monster HP = 0?
5. **Repeat** until victory or retreat

### Real-Time Alternative

- Continuous battle with cooldown timers on skills
- Monster attacks on timer (every 15-30 seconds)
- User can use any skill when available
- More intense, simulates ongoing stress

---

## Solo Battle: HP & Energy Dynamics

### Monster HP Calculation

**Base Formula:**
```
Monster HP = (User's self-reported severity × 10) + (Days active × 2) + Evolution Bonus
```

**Example:**
- User reports monster at 65% severity → 65 base HP
- Monster active for 10 days → +20 HP
- Evolved once → +15 HP
- **Total: 100 HP**

### User Energy Calculation

**Base Formula:**
```
Starting Energy = 100 - (Current Stress Level × 10)
```

**Example:**
- User stress level: 4 dots (high) → Starting Energy = 60
- User stress level: 2 dots (mild) → Starting Energy = 80

**Energy Recovery:**
- +5 energy per turn (passive)
- +15 energy when using self-care skills
- +25 energy when squad member sends encouragement
- Full recovery between battles

---

## Solo Battle Outcomes

| Outcome | Condition | Result |
|---------|-----------|--------|
| **Victory** | Monster HP = 0 | Monster HP resets to lower base, rewards earned |
| **Retreat** | User exits battle | Monster HP unchanged, no rewards |
| **Exhaustion** | User Energy = 0 | Monster gains +5 HP, user must wait to recover |
| **Time-out** | Battle too long | Progress saved, resume later |

---

# GROUP BATTLE: COMPLETE BREAKDOWN

## Group Battle Concept

Multiple users (squad members) fight together against either:
- **One shared monster** (a collective struggle, like "Group Project Stress")
- **Multiple individual monsters** (each fights their own, but together)
- **One person's monster** (squad rallies to help one member)

---

## Group Battle Configurations

### Configuration 1: One Monster, Multiple Fighters

**Scenario:** Squad faces a shared challenge (exam stress, team deadline)

**Visual:**
```
+--------------------------------------------------+
|              SQUAD BATTLE: 4 FIGHTERS             |
+--------------------------------------------------+
|                                                  |
|  [BOSS MONSTER ZONE]                              |
|  +------------------------------------------+    |
|  |                                          |    |
|  |     [GROUP PROJECT STRESS BEAST]         |    |
|  |            ●●●●●●●●○○ 250 HP              |    |
|  |     "You're all going to fail together"   |    |
|  |                                          |    |
|  +------------------------------------------+    |
|                                                  |
|  [SQUAD ZONE]                                    |
|  +------------------------------------------+    |
|  |                                              |
|  |  [ALEX]      [JORDAN]     [TAYLOR]    [YOU]  |
|  |  ████░░ 40   ██████░░ 60  ████░░ 35   █████  |
|  |  ENERGY      ENERGY       ENERGY       ENERGY |
|  |                                              |
|  +------------------------------------------+    |
|                                                  |
|  [YOUR SKILL DECK]                               |
|  +--------+ +--------+ +--------+                |
|  |GROUND- | |COGNITIVE| | SQUAD  |   [SUPPORT   |
|  |ING     | |SHIELD   | | RALLY  |    ALLY]     |
|  +--------+ +--------+ +--------+                |
+--------------------------------------------------+
```

### Configuration 2: Multiple Monsters, Multiple Fighters

**Scenario:** Each squad member faces their own monster, but together in shared space

**Visual:**
```
+--------------------------------------------------+
|              SQUAD BATTLE: ALL VS ALL              |
+--------------------------------------------------+
|                                                  |
|  [ALEX'S MONSTER]   [JORDAN'S MONSTER]           |
|  THESIS PANIC       SOCIAL ANXIETY               |
|  ●●●●●○ 65 HP       ●●●●●●○ 80 HP                |
|                                                  |
|  [TAYLOR'S MONSTER]  [YOUR MONSTER]              |
|  PERFECTIONISM      PROCRASTINATION              |
|  ●●●○○○ 45 HP       ●●●●●●○ 75 HP                |
|                                                  |
|  [SQUAD SUPPORT ZONE]                             |
|  +------------------------------------------+    |
|  |  ALEX: Need help with Thesis Panic?      |    |
|  |  JORDAN: I can boost you!                 |    |
|  |  TAYLOR: Using Squad Rally for everyone   |    |
|  +------------------------------------------+    |
|                                                  |
|  [YOUR SKILL DECK]                               |
+--------------------------------------------------+
```

### Configuration 3: Support Battle

**Scenario:** Whole squad fights ONE member's monster

**Visual:**
```
+--------------------------------------------------+
|         SQUAD SUPPORT: FIGHTING FOR ALEX          |
+--------------------------------------------------+
|                                                  |
|  [ALEX'S MONSTER - FOCUS TARGET]                  |
|  +------------------------------------------+    |
|  |                                          |    |
|  |     [THESIS PANIC MONSTER]               |    |
|  |            ●●●●●●●●○○ 200 HP              |    |
|  |     "You CAN'T defeat me alone..."        |    |
|  |                                          |    |
|  +------------------------------------------+    |
|                                                  |
|  [SUPPORTING SQUAD]                              |
|  JORDAN (BOOSTING)  TAYLOR (HEALING)  YOU (DMG)  |
|  ████████░░ 80      ██████░░ 60       ███████ 70 |
|                                                  |
|  [ALEX - PRIMARY FIGHTER]                         |
|  ████░░░░░░ 35 ENERGY - NEEDS SUPPORT             |
|                                                  |
|  [YOUR SKILL DECK - SUPPORT MODE]                 |
|  +--------+ +--------+ +--------+                |
|  |HEAL    | |BOOST   | |PROTECT |   [ATTACK      |
|  |ALLY    | |ALLY    | |ALLY    |    MONSTER]    |
|  +--------+ +--------+ +--------+                |
+--------------------------------------------------+
```

---

## Group Battle: HP Systems

### System 1: Shared Boss Monster HP

**Monster HP Calculation:**
```
Boss HP = (Average squad stress × 20) + (Number of squad members × 25)
```

**Example:**
- Squad of 4, average stress 3.5 dots → 70 + 100 = 170 HP
- Scales with squad size and collective struggle

**Damage Distribution:**
- All squad members' attacks contribute to same HP bar
- Combined effort visible in real-time
- Celebration when collective HP reaches 0

### System 2: Individual Monster HP

**Each monster has its own HP** (as configured in personal settings)

**But squad members can:**
- Attack any monster (not just their own)
- Boost allies' damage against their monster
- Heal allies' energy

### System 3: Support Battle HP

**Target Monster HP:** Full strength (may be higher due to "boss mode")

**Squad Members' Role:**
- Primary fighter (the person who owns the monster) deals base damage
- Support members can't directly attack but can:
  - Boost primary's damage
  - Heal primary's energy
  - Shield primary from monster attacks
  - Weaken monster's defenses

---

## Group Battle: User Energy Systems

### Individual Energy Bars

Each squad member has their own energy bar:

```
ALEX:    ████████░░ 80/100
JORDAN:  ██████░░░░ 60/100
TAYLOR:  ████░░░░░░ 40/100
YOU:     ████████░░ 80/100
```

**Energy functions independently** for each user:
- Using skills depletes your own energy
- Energy regenerates per turn
- If any user hits 0, they can only observe or use recovery

### Shared Energy Pool (Optional Variant)

For closer-knit squads:
```
SQUAD ENERGY: ████████░░░░░░░░ 120/200
```
- All skills draw from shared pool
- Requires coordination
- Builds collective responsibility

---

## Group Battle: Skill Buttons

### Individual Attack Skills (Your Monster)

When fighting your own monster in group context:

| Skill | Damage | Energy | Target |
|-------|--------|--------|--------|
| Grounding Breath | 8 | 3 | Your monster |
| Cognitive Shield | 12 | 5 | Your monster (blocks next attack) |
| Thought Reframe | 15 | 7 | Your monster |

### Support Skills (Helping Others)

When supporting squad members:

| Skill | Effect | Energy | Target |
|-------|--------|--------|--------|
| Heal Ally | Restores 15 energy | 4 | Any squad member |
| Boost Ally | Next attack +50% damage | 5 | Any squad member |
| Protect Ally | Blocks next monster attack on them | 6 | Any squad member |
| Squad Rally | Boosts ALL squad members' next attack | 10 | Everyone |
| Shared Grounding | Reduces all monsters' HP by 5 | 8 | All monsters |

### Coordinated Skills

Skills that require multiple squad members:

| Skill | Requirement | Effect |
|-------|-------------|--------|
| Synchronized Breathing | 2+ members use same turn | 2x damage for all |
| Support Circle | 3+ members target same ally | Ally fully heals |
| Collective Reframe | All members use Cognitive Shield | Monster stunned 1 turn |

---

## Group Battle: Turn Structure

### Simultaneous Turn System

1. **All players** select skills simultaneously (no waiting)
2. **Monster attacks** (targets random or based on threat)
3. **All skills resolve** at once
4. **Combined damage** applied to monster(s)
5. **Status effects** apply
6. **Next round** begins

### Turn Timer

- Each round: 30-60 seconds to choose
- Creates urgency and engagement
- Timer visible to all players
- Unselected players default to "rest" (regain energy)

### Turn Order Display

```
CURRENT ROUND (25s remaining)
_____________________________
▶ ALEX:    Boost (targeting JORDAN)
▶ JORDAN:  Attack (Thesis Panic)
  TAYLOR:  [CHOOSING...]
▶ YOU:     Heal (targeting TAYLOR)
```

---

## Visual Design: Battle Buttons

### Solo Battle Buttons

```
+------------------+
|  GROUNDING       |
|  BREATH          |
|  8 DMG  |  3 ENG |
|  [🌬️]           |
+------------------+
```

- Clear, centered text
- Damage prominent (top or left)
- Energy cost subtle (bottom or right)
- Icon for quick recognition

### Group Battle Buttons - Attack Mode

```
+------------------+
|  ATTACK          |
|  THESIS PANIC    |
|  12 DMG  |  5 ENG|
|  [⚔️]            |
+------------------+
```

- Target monster name visible
- Damage prominent
- Energy cost clear

### Group Battle Buttons - Support Mode

```
+------------------+
|  HEAL            |
|  JORDAN          |
|  +15 ENG |  4 ENG|
|  [💚]            |
+------------------+
```

- Ally name prominent
- Effect clear (+15 energy)
- Your energy cost

### Group Battle Buttons - Boost Mode

```
+------------------+
|  BOOST           |
|  ALEX            |
|  NEXT +50% | 5ENG|
|  [⬆️]            |
+------------------+
```

---

## Battle Log: Solo vs Group

### Solo Battle Log

```
> Thesis Panic attacks: "You'll never finish"
  Your energy -5
> You use Grounding Breath
  Monster HP -8 (78 → 70)
> Monster HP: 70/100
```

### Group Battle Log

```
ROUND 3 RESULTS
__________________
MONSTER ACTIONS:
• Thesis Panic attacks ALEX
  ALEX energy -8
• Social Anxiety attacks JORDAN
  JORDAN energy -5

PLAYER ACTIONS:
• ALEX uses Cognitive Shield
  Blocks next attack
• JORDAN uses Grounding Breath
  Thesis Panic HP -8 (70 → 62)
• TAYLOR uses Heal on ALEX
  ALEX +15 energy
• YOU use Squad Rally
  ALL squad next attack +25%

COMBINED DAMAGE:
Thesis Panic: -8 HP
Social Anxiety: 0 HP
Perfectionism: 0 HP

CURRENT STATUS:
Thesis Panic: 62/100
Social Anxiety: 80/100
Perfectionism: 45/100
```

---

## Victory Conditions

### Solo Victory

**Visual:** Monster collapses, fades, or transforms
**Message:** "You defeated [Monster Name]! For now..."
**Rewards:**
- Monster HP reduced for next encounter
- Skill XP earned
- Diary entry created
- Achievement progress

### Group Victory - Shared Monster

**Visual:** Monster dissolves, squad celebration animation
**Message:** "Together, you defeated the [Shared Monster]!"
**Rewards for All:**
- Squad bond increased
- All participants get victory credit
- Special "Squad Victory" achievement
- Group photo/celebration screen

### Group Victory - Multiple Monsters

**Visual:** Each monster defeated individually, final celebration when all down
**Message:** "Everyone defeated their monsters! Squad strength: UNBREAKABLE"
**Rewards:**
- Individual rewards plus squad bonus
- Most Valuable Player highlight (optional)
- Squad healing (all energy restored)

---

## Special Battle Mechanics

### Combo System

When multiple squad members target same monster:

```
COMBO! 3 players attacking Thesis Panic
BONUS: +15% damage for each additional attacker
Total bonus: +45% damage this round!
```

### Save the Ally

When an ally's energy is critically low:

```
WARNING: JORDAN at 8% energy!
Next monster attack may knock them out.
Quick! Use Protect or Heal!
```

### Last Stand

When only one squad member remains standing:

```
LAST STAND ACTIVATED!
ALEX is fighting alone against Thesis Panic
All skills cost 50% less energy
All damage increased by 100%
"Alone, but not forgotten..."
```

---

## Battle Setup Screens

### Solo Battle Setup

```
START BATTLE: THESIS PANIC (78 HP)
___________________________________

Your Energy: 72/100 (Good to fight!)

Recommended Skills:
☑ Grounding Breath (8 dmg, 3 eng)
☑ Cognitive Shield (12 dmg, 5 eng)
☑ Self-Compassion (6 dmg, +heal)
☐ Body Double (co-op only)

Battle Goal: Reduce HP to 0
Est. Rounds: 6-8 based on skill choice

[BACK]                    [FIGHT!]
```

### Group Battle Lobby

```
SQUAD BATTLE LOBBY
___________________________________

Waiting for squad (3/4 ready)
___________________________________
✓ ALEX (Ready)
✓ JORDAN (Ready)
◻ TAYLOR (Selecting monster)
✓ YOU (Ready)
___________________________________

Battle Type: [SUPPORT BATTLE ▼]
Target: [ALEX'S THESIS PANIC ▼]
Difficulty: Medium (200 HP)

[INVITE]  [CHANGE SETTINGS]  [START]
```

### Monster Selection for Group Battle

```
SELECT TARGETS FOR GROUP BATTLE
___________________________________

□ ALEX'S THESIS PANIC (78 HP)
□ JORDAN'S SOCIAL ANXIETY (65 HP)
□ TAYLOR'S PERFECTIONISM (45 HP)
☑ YOUR PROCRASTINATION (70 HP)

Battle Mode: [ALL SELECTED ▼]

Total monsters: 4
Combined HP: 258
Est. squad members: 4
Est. rounds: 10-12

[BACK]                    [START BATTLE]
```

---

## Post-Battle Screens

### Solo Victory

```
VICTORY!
___________________________________
You defeated THESIS PANIC

HP reduced from 78 → 0
Energy remaining: 23/100
Skills used: 4
Battle time: 3m 42s

REWARDS:
+50 Skill XP
+1 to battle streak
Diary entry created

[VIEW DIARY]  [BATTLE AGAIN]  [DONE]
```

### Group Victory

```
SQUAD VICTORY!
___________________________________
ALL MONSTERS DEFEATED

Final blows:
• ALEX defeated Thesis Panic
• JORDAN defeated Social Anxiety
• TAYLOR defeated Perfectionism
• YOU defeated Procrastination

SQUAD STATS:
Total damage: 845
Combined energy remaining: 156/400
MVP: ALEX (Most damage, most support)

REWARDS:
✓ Individual rewards (see your profile)
✓ Squad bond +25
✓ "Squad Strong" achievement
✓ Group photo captured

[SQUAD CELEBRATION]  [VIEW STATS]  [DONE]
```

---

## Comparison Summary: Solo vs Group Battle

| Element | Solo Battle | Group Battle |
|---------|-------------|--------------|
| **Monsters** | 1 (your monster) | 1-4 (various configurations) |
| **Your HP/Energy** | Visible, only yours | Visible, plus squad members |
| **Monster HP** | Single bar | Single or multiple bars |
| **Skills** | Personal coping only | Personal + support skills |
| **Turn Structure** | Simple alternating | Simultaneous with timer |
| **Victory** | Personal achievement | Collective celebration |
| **Best For** | Daily practice | Overwhelming moments |
| **Energy Cost** | Higher (you bear all) | Shared burden |

---

## When to Use Each Mode

### Choose Solo Battle When:
- It's a regular day, stress manageable
- You need private practice
- You're learning new skills
- Your monster is at low HP
- You prefer working alone

### Choose Group Battle When:
- Stress is overwhelming (4-5 dots)
- Your monster evolved and feels unbeatable
- A squad member is struggling and needs support
- You want to feel connected
- Shared challenge (group project, exam week)
- You need accountability

---

## Design Principles Summary

1. **Solo battles feel personal** - Your struggle, your skills, your victory
2. **Group battles feel powerful** - Shared burden multiplies strength
3. **Energy systems create tension** - Manage resources wisely
4. **Skill buttons are intuitive** - Damage and cost clearly visible
5. **Visual feedback is immediate** - HP changes, animations, logs
6. **Victory is celebrated appropriately** - Personal pride or squad joy
7. **Both modes connect to larger journey** - Diary, insights, progress

---

**The Golden Rule:** Solo battles teach self-reliance; group battles teach that you don't have to fight alone. Both are essential in a complete mental health toolkit.