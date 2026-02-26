# CUSTOM MONSTER SYSTEM: DETAILED DESCRIPTION FOR AI PROMPT GENERATION

## OVERVIEW & CORE CONCEPT

Create a comprehensive mental health gamification system where users design personalized "monsters" that represent their specific psychological struggles. The system transforms abstract mental health challenges into tangible, customizable entities that users can identify, track, and battle through therapeutic game mechanics. The fundamental psychological principle is **externalization**—helping users separate their identity from their struggles by framing problems as external opponents to be overcome rather than internal flaws to be endured.

---

## SECTION 1: THE CREATION WIZARD

Design an intuitive three-step guided process that walks users through monster creation, with each step serving both functional and therapeutic purposes.

### Step 1: Naming & Identification

**Interface Components:**
- A prominent text input field with the prompt: "What would you call this struggle?"
- Below it, a categorized selection grid of common struggle types:
  - **Anxiety Cluster**: Worry, Social Anxiety, Health Anxiety, Panic, Rumination
  - **Mood Cluster**: Sadness, Emptiness, Irritability, Numbness, Mood Swings
  - **Motivation Cluster**: Procrastination, Burnout, Overwhelm, Apathy, Avoidance
  - **Self-Concept Cluster**: Perfectionism, Self-Criticism, Imposter Syndrome, Comparison
  - **Custom Option**: "Something else..." with free-text entry

**Therapeutic Design Notes:**
- Include placeholder examples that normalize specific struggles: "e.g., 'Thesis Panic Monster,' 'Sunday Scaries Beast,' '3pm Slump Goblin'"
- Add a tooltip explaining: "Naming your struggle is the first step in gaining power over it. You can't fight what you can't name."
- After selection/entry, display a confirmation message: "Meet [Monster Name]. Now let's see what they look like."

### Step 2: Visual Customization

Create a dynamic character builder where each choice metaphorically represents the user's internal experience, with real-time visual updates.

**Body Type Selection (Primary Emotion Mapping):**

Display five base silhouettes that users can click to select:

| Body Type | Visual Description | Psychological Mapping | When This Might Be Selected |
|-----------|-------------------|----------------------|----------------------------|
| **Anxiety Imp** | Small, wiry, jittery figure with rapid idle animation (vibrating, twitching) | Racing thoughts, physical restlessness, inability to sit still | Generalized anxiety, social anxiety, panic |
| **Irritability Ogre** | Bulky, hunched figure with clenched fists, steam particles from ears | Pent-up frustration, anger, feeling "prickly" or explosive | Anger issues, irritability, resentment |
| **Sadness Shadow** | Wispy, translucent figure that droops and sags, leaving a faint trail | Low energy, isolation, feeling insubstantial or unseen | Depression, grief, loneliness |
| **Overwhelm Hydra** | Multiple-headed creature (2-5 heads) with each head looking different directions | Feeling pulled in multiple directions, too many demands | Burnout, caregiving stress, work-life balance |
| **Perfectionist Golem** | Rigid, stone-like figure with visible cracks, stands unnaturally still | Rigid standards, fear of mistakes, never feeling "done" | Academic pressure, creative blocks, high achievement |

**Feature Selection (Symptom Representation):**

Create a scrollable gallery of modular features that users can toggle on/off, with visual stacking:

| Feature | Visual Implementation | Symptom Represented |
|---------|----------------------|---------------------|
| **Sharp Teeth** | Jagged mouth overlay with occasional snap animation | Harsh self-criticism, negative inner voice |
| **Many Eyes** | 4-8 eyes positioned around head/body, all blinking independently | Feeling watched/judged, hypervigilance |
| **Heavy Chains** | Chains wrapped around limbs/torso, dragging on ground | Exhaustion, feeling weighed down, inertia |
| **Fog Aura** | Swirling mist particle effect surrounding monster | Brain fog, confusion, unclear thinking |
| **Sharp Claws** | Extended talons that occasionally slash the air | Sudden anxiety spikes, intrusive thoughts |
| **Shadow Form** | Monster lacks solid form, shifts and distorts | Unidentifiable unease, nameless dread |
| **Multiple Heads** | Additional head(s) on necks extending from body | Juggling multiple responsibilities |
| **Invisible** | Faint outline, partly transparent sections | Feeling unheard/unseen by others |
| **Pulsing Heart** | Glowing core that beats visibly | Palpitations, physical anxiety symptoms |
| **Heavy Feet** | Oversized feet that seem stuck to ground | Immobilization, procrastination paralysis |

**Color Selection (Emotional Quality):**

Offer a color wheel with pre-selected emotional associations:

| Color | Emotional Association | When Appropriate |
|-------|----------------------|-------------------|
| **Red** | Anger, intensity, agitation | Irritability, frustration, rage |
| **Blue** | Sadness, calm heaviness | Depression, melancholy, grief |
| **Purple** | Anxiety, unease, nervousness | Worry, panic, dread |
| **Gray** | Numbness, emptiness, apathy | Burnout, emotional exhaustion |
| **Black** | Overwhelming, consuming, hopeless | Deep depression, despair |
| **Orange** | Restlessness, agitation | Mania, anxiety with energy |
| **Green** | Envy, comparison, jealousy | Social comparison, imposter syndrome |

**Real-Time Feedback:**
- As users select options, a central canvas renders the combined monster
- Include subtle animations (breathing, shifting, particle effects)
- Display a running description: "Your [Monster Name] is a [Color] [Body Type] with [Selected Features]"

### Step 3: Quantification & Context

Move from visual to data-based customization, making the abstract measurable.

**Current HP Slider:**
- Interactive slider labeled "How strong is [Monster Name] today?"
- Range 0-100 with descriptive anchors:
  - 0-20: "Barely a whisper—I can handle this"
  - 21-40: "Present, but manageable"
  - 41-60: "Definitely affecting my day"
  - 61-80: "Strong—this is really hard right now"
  - 81-100: "Overwhelming—I need support"
- Include confirmation: "Your monster is at [X] HP. This will be their starting strength in battles."

**Trigger Selection:**

Design a checklist with search/add capability:

*Common Triggers Category:*
- Opening laptop/email
- Thinking about deadlines
- Sunday evenings
- Monday mornings
- Social media comparison
- Being alone
- Crowded spaces
- Unexpected changes
- Criticism (real or anticipated)
- Making decisions

*Custom Trigger Entry:*
- Field with "Add your own trigger" plus examples
- Triggers become tags that appear on monster profile

**Attack Pattern Mapping:**

Create interactive time/calendar interface:

*Time of Day Toggles:*
- □ Morning (wake-up to noon)
- □ Afternoon (noon to 5pm)
- □ Evening (5pm to 10pm)
- □ Late Night (10pm to sleep)

*Day Pattern:*
- □ Weekdays
- □ Weekends
- □ Specific days (multi-select calendar)

*Pattern Description Generator:*
Auto-generates: "[Monster Name] typically attacks on [weekdays/weekends] during [time periods]"

**Timeline Context:**

Add optional date picker with:
- "When did you first notice this struggle?"
- Options: "This week," "This month," "This year," "Longer than a year," "Choose specific date"
- Include note: "This helps track how this monster has evolved over time"

**Sharing & Privacy:**

Toggle switch with:
- "Share this monster with my squad"
- Privacy note: "Squad members will see this monster in their feed and can offer targeted support. You can change this anytime."

---

## SECTION 2: POST-CREATION EXPERIENCE

### Monster Collection Dashboard

Design the personal gallery view where all created monsters live:

**Visual Layout:**
- Grid of monster cards, each showing:
  - Rendered monster image (small version)
  - Monster name
  - Current HP bar with color-coded health (green/yellow/red)
  - Last battle timestamp
  - Evolution stage indicator (if applicable)
- Sorting options: By newest, by highest HP, by most battled, alphabetical
- Filter options: By type, by evolution stage, by sharing status

**Card Interactions:**
- Click card to open monster profile
- Quick-action buttons: "Battle Now," "View Diary," "Edit Monster"
- Hover state shows HP trend (arrow up/down over last 7 days)

### Monster Profile Page

Create a comprehensive individual monster view:

**Header Section:**
- Large monster render with ambient animation
- Monster name and type tag
- Evolution stage badge (if applicable)
- HP meter with historical sparkline
- "Battle" CTA button

**Visual Summary Panel:**
- Recreation of all customization choices as labeled icons
- Shows: Body Type, Colors, All Selected Features
- "Remix" button to return to editor

**Triggers & Patterns Tab:**
- Trigger cloud visualization (larger text for most selected triggers)
- Attack time heatmap (showing when monster is strongest)
- First noticed date with "X days since identified"

**Battle History Preview:**
- Mini timeline of last 5 battles
- Win/loss indicators
- Most effective skill badge

**Community Insights Panel:**
- "[X] squad members have similar monsters"
- "Top skills for this monster type:"
- Community quote: "Others with [Feature] found [Skill] helpful"

**Recommended Skills Section:**
- Algorithm-generated skill suggestions
- Each shows: Skill name, damage estimate, community rating
- "View All Skills" link to skill library filtered for this monster

---

## SECTION 3: BATTLE MECHANICS

### Combat System Design

Create a turn-based or real-time interaction where users apply therapeutic skills to reduce monster HP:

**Battle Interface Layout:**
- Left side: Animated monster with HP bar, attack animations
- Right side: User's skill deck (4-6 available skills)
- Bottom: Battle log showing monster dialogue and skill results
- Top: Battle timer (optional) and "Flee" option (strategic retreat)

**Monster Behavior During Battle:**

*Personalized Dialogue System:*
Monster "speaks" based on user-selected triggers and features:

- For Thesis Panic Monster (with Many Eyes + Sharp Teeth):
  - "They're all judging your introduction."
  - "Chapter three will never be good enough."
  - "Everyone else is finishing faster than you."

- For Procrastination Goblin (with Heavy Feet + Fog Aura):
  - "Just one more video first."
  - "You work better under pressure, remember?"
  - "Starting is the hard part... so don't start."

- For Social Anxiety Specter (with Invisible + Shadow Form):
  - "They didn't invite you for a reason."
  - "Everyone noticed you stumbled over those words."
  - "You're being too quiet. They think you're weird."

*Attack Animations Based on Features:*
- Sharp Teeth: Monster lunges with biting animation, user confidence stat temporarily reduced
- Fog Aura: Screen gets hazy, skill descriptions blur momentarily
- Many Eyes: User feels "watched," social anxiety debuff applied
- Chains: Monster wraps chains around user, movement restriction metaphor

### Skill System Integration

**Skill Matching Algorithm:**
When a user selects a skill during battle:

1. Check skill type against monster type (bonus damage for type matching)
2. Check skill against monster features (additional effectiveness for feature targeting)
3. Reference user's history with this skill on similar monsters
4. Incorporate community data on skill effectiveness

**Example Skill-Monster Interactions:**

| Skill | Base Effect | Bonus Against | Feature Synergy |
|-------|-------------|---------------|-----------------|
| **Cognitive Reframing** | 15 damage | Anxiety-type | Extra damage vs. Sharp Teeth (counters self-criticism) |
| **Body Double** | 10 damage + co-op boost | Procrastination-type | Extra damage vs. Heavy Feet (provides accountability) |
| **Grounding Exercise** | 12 damage + stun | Panic symptoms | Extra damage vs. Fog Aura (clears confusion) |
| **Squad Rally** | 5 damage per squad member | Isolation-type | Extra damage vs. Invisible (brings struggle to light) |
| **Self-Compassion Break** | 8 damage + heal | Perfectionism-type | Extra damage vs. Multiple Heads (reduces pressure) |

**Battle Outcome Calculation:**
- Success: Monster HP reduced to 0 → Victory screen with rewards
- Partial: Monster HP reduced but not defeated → HP persists for next battle
- Retreat: User exits battle → Monster HP unchanged, morale penalty

### Battle Narrative Text

Generate dynamic combat descriptions:

*User Action Descriptions:*
- "You use [Skill Name]. The [Monster Name] recoils as you [skill description]."
- "Critical hit! Your understanding of this trigger weakens the monster significantly."
- "The [Feature] flickers as you challenge its power over you."

*Monster Counter-Attack Descriptions:*
- "[Monster Name]'s [Feature] activates, making you feel [emotional response]."
- "The monster whispers [personalized trigger phrase]. You feel your resolve waver."
- "[Monster Name] evolves its attack pattern based on your [specific trigger]."

---

## SECTION 4: MONSTER EVOLUTION SYSTEM

### Evolution Triggers

Design conditions that trigger monster evolution:

**Primary Evolution Conditions:**
- Monster battled 5+ times without being fully defeated
- Monster HP consistently above 70 for 7+ days
- User reports "monster feels stronger" via check-in
- New triggers added to existing monster

**Evolution Notification:**
- Dramatic animation of monster transforming
- Message: "[Monster Name] has adapted and evolved into [New Name/Form]"
- Explanation: "Sometimes struggles get stronger before they get easier. This doesn't mean you're failing—it means you need new strategies."

### Evolved Monster Characteristics

**Visual Changes:**
- Body type becomes more imposing version
- Features become more pronounced (chains thicker, eyes more numerous)
- Color saturation increases
- New feature added based on recent triggers

**New Abilities:**

Examples by evolution stage:

*Stage 2 - "Reinforced"*
- Gains resistance to previously effective skill
- Develops "Trigger Cascade" (multiple triggers activate simultaneously)
- New dialogue includes past "successes" ("You couldn't beat me yesterday either")

*Stage 3 - "Chronic"*
- Gains "Community Comparison" ability (references others' progress)
- Develops "Hope Drain" (reduces skill effectiveness over time)
- New visual: Chains now connected to environment (work, relationships)

*Stage Max - "Integrated"*
- Becomes partially merged with environment
- Attacks target user's support system
- Requires co-op battle to defeat

### Evolution Weaknesses

Balance evolution by introducing new vulnerabilities:

**New Weaknesses by Stage:**
- Stage 2: Becomes vulnerable to co-op battles (2x damage when fought with squad)
- Stage 3: Triggers new "Insight" skills unlocked specifically for this form
- Stage Max: Vulnerability to acceptance-based skills (radical acceptance deals massive damage)

**Evolution Diary Entry:**
- Automatic entry created: "[Monster Name] evolved today. This reflects how this struggle has grown more complex. Review your battle history to see what patterns preceded this evolution."
- Suggested new skills based on evolution type

---

## SECTION 5: MONSTER DIARY & ANALYTICS

### Diary Interface Design

Create a chronological battle log with rich data:

**Timeline View:**
- Scrollable vertical timeline
- Each entry shows: Date, battle duration, HP before/after, skills used
- Color coding: Green (victory), Yellow (partial), Red (retreat/defeat)
- Filterable by monster, by skill, by outcome

**Individual Entry Detail:**
- Full battle summary with skill-by-skill breakdown
- User's star rating for each skill (1-5 effectiveness)
- Notes field with user's reflections
- "What worked" highlight box
- "Try this next time" suggestion based on similar battles

**Pattern Detection Algorithms:**

System automatically identifies and displays:

*Temporal Patterns:*
- "You consistently struggle most with [Monster Name] on [day of week]"
- "Your monster's HP tends to spike between [time range]"
- "You're most successful when battling [time of day]"

*Trigger Patterns:*
- "When [trigger] occurs, monster HP increases by average of [X] points"
- "Your top three most frequent triggers: [trigger1], [trigger2], [trigger3]"

*Skill Effectiveness Patterns:*
- "Your most effective skill against this monster is [Skill Name] (average 4.2 stars)"
- "Co-op battles are 35% more effective than solo battles for this monster"
- "Skills used within 2 hours of trigger are 20% more effective"

### Insight Generation

Create proactive insights dashboard:

**Weekly Monster Brief:**
- "This week, your [Monster Name] was active [X] times"
- "You defeated them [X] times and partially succeeded [X] times"
- "Compared to last week: [better/worse/same]"
- "Your top strategy this week: [Skill Name]"

**Comparative Analytics:**
- "Your monster's HP fluctuation is similar to others with [shared feature]"
- "You're using [Skill Name] more effectively than 80% of users"
- "Your monster's evolution stage is typical for [X] days since creation"

**Predictive Insights:**
- "Based on patterns, your monster may be vulnerable tomorrow morning"
- "Warning: Upcoming trigger (Monday) typically increases HP by 15 points"
- "Suggestion: Schedule a co-op battle for Thursday—your most successful day"

---

## SECTION 6: SOCIAL & COMMUNITY FEATURES

### Squad Sharing System

Design how monsters integrate with social support:

**Shared Monster Feed:**
- When user shares monster, appears in squad members' feeds
- Card shows: Monster image, name, current HP, "Last seen [time]"
- Call to action: "Offer Support," "Battle Together," "Send Encouragement"

**Support Interaction Options:**

*Comment System:*
- Squad members can leave supportive messages
- Option to share personal experience: "I struggled with something similar..."
- Encouragement stickers related to monster types

*Support Actions:*
- **Send Energy**: Boosts user's next battle by 5%
- **Share Insight**: Recommend a skill that helped them with similar monster
- **Battle Together**: Initiate co-op battle (both users fight monster simultaneously)
- **Check In**: Ask how monster is doing today

### Monster Similarity Matching

Create connection algorithms:

**Similarity Metrics:**
- Same monster type
- Overlapping features (3+ shared features)
- Similar triggers (70% match)
- Comparable HP patterns

**Connection Suggestions:**
- "[User Name] also battles a [Monster Name] with similar features"
- "You and [User Name] share [X] triggers"
- "[User Name] has defeated their monster 5 times—they might have strategies to share"

### Community Monster Browser

Design exploration interface:

**Browse Options:**
- By popularity (most created monsters)
- By type (filter by body type)
- By feature (show all monsters with specific feature)
- By success rate (monsters with highest defeat rates)

**Monster Gallery:**
- Grid of community monsters (anonymized, usernames optional)
- Each shows: Visual render, name, how many users have this monster
- Click to view: Common triggers, top skills, community notes

**Normalization Impact:**
- Display counter: "X people have created monsters like yours"
- Quote rotation: "You are not alone in this" messages
- Success stories: Anonymous testimonials from users who defeated similar monsters

---

## SECTION 7: TECHNICAL IMPLEMENTATION SPECIFICATIONS

### Data Structure

```javascript
MonsterSchema = {
  // Core identifiers
  monsterId: UUID,
  userId: UUID,
  creationTimestamp: ISO8601,
  
  // Naming data
  categoryType: enum[anxiety, mood, motivation, selfConcept, custom],
  customName: string,
  displayName: string, // concatenated or custom
  
  // Visual configuration
  bodyType: enum[imp, ogre, shadow, hydra, golem],
  features: [
    { featureId: string, enabled: boolean, position: coordinates, intensity: 0-100 }
  ],
  primaryColor: hexCode,
  secondaryColor: hexCode,
  renderLayers: object, // compositing instructions
  
  // Stats and metrics
  baseHP: number, // initial creation HP
  currentHP: number, // real-time
  maxRecordedHP: number,
  minRecordedHP: number,
  averageHP: number, // rolling 30-day
  
  // Behavioral data
  triggers: [
    { triggerId: string, customText: string, frequency: number }
  ],
  attackPatterns: {
    timeOfDay: boolean[4], // morning, afternoon, evening, night
    daysOfWeek: boolean[7],
    specificDates: ISO8601[]
  },
  
  // Timeline
  firstNoticed: ISO8601,
  lastBattle: ISO8601,
  battleCount: number,
  
  // Evolution
  evolutionStage: number,
  evolutionHistory: [
    { stage: number, timestamp: ISO8601, reason: string }
  ],
  
  // Social
  sharingStatus: boolean,
  sharedWith: UUID[], // squad member IDs
  communityVisible: boolean,
  
  // Battle history references
  battleIds: UUID[],
  
  // Derived data (cached for performance)
  skillEffectivenessRankings: [
    { skillId: string, averageDamage: number, uses: number }
  ],
  patternInsights: object
}
```

### Rendering Engine Specifications

**Dynamic Monster Compositing:**

Build monsters through layered rendering:

1. **Base Layer**: Body type silhouette with idle animation cycle
2. **Color Layer**: Color overlay with opacity blending
3. **Feature Layers**: Individual PNG sequences with:
   - Position mapping (relative to body type)
   - Independent animation loops
   - Interaction behaviors (features react to battle events)
4. **Effect Layer**: Particle systems (fog, glow, shadow)
5. **UI Overlay**: HP bar, status effects, name tag

**Performance Considerations:**
- Pre-render common combinations for caching
- LOD (Level of Detail) system: simpler animations when many monsters on screen
- Asset optimization: SVG paths for scalable features

### Skill Recommendation Algorithm

**Input Factors:**
- Monster type (40% weight)
- Monster features (30% weight)
- User's battle history with similar monsters (20% weight)
- Community data from identical feature combinations (10% weight)

**Scoring Formula:**
```
SkillScore = 
  (TypeMatch * 0.4) + 
  (FeatureMatchAverage * 0.3) + 
  (UserHistoryScore * 0.2) + 
  (CommunityScore * 0.1)
```

Where:
- TypeMatch = 1 if skill primary category matches monster type, else 0-0.5 based on secondary categories
- FeatureMatchAverage = average of binary matches for skill's target features
- UserHistoryScore = normalized star rating from user's past use
- CommunityScore = normalized effectiveness rating from community

---

## SECTION 8: THERAPEUTIC FRAMEWORK DOCUMENTATION

### Psychological Principles Implemented

**Externalization (Narrative Therapy):**
- Creating monster as separate entity disrupts the "problem-saturated story"
- User shifts from "I am anxious" to "I am fighting an anxiety monster"
- Visual representation makes abstract struggle concrete and manageable

**Cognitive Behavioral Therapy (CBT) Integration:**
- Trigger identification corresponds to CBT's antecedent identification
- Battle logs serve as thought records
- Skill effectiveness tracking reinforces cognitive restructuring

**Acceptance and Commitment Therapy (ACT) Elements:**
- Monster evolution teaches acceptance of chronic struggles
- Defusion techniques embedded in monster dialogue challenging
- Values-based skill selection aligned with ACT principles

**Behavioral Activation:**
- Battling monsters creates behavioral momentum
- Victory rewards reinforce engagement with coping strategies
- Pattern recognition supports scheduling of protective behaviors

**Social Prescribing:**
- Squad support mechanisms facilitate natural helping relationships
- Similarity matching reduces isolation
- Co-op battles normalize help-seeking

### Outcome Measurement Framework

**Clinical Indicators Tracked:**
- Monster HP as proxy for symptom severity
- Battle frequency as engagement with coping
- Skill diversity as strategy flexibility
- Evolution patterns as struggle chronicity
- Co-op battle ratio as help-seeking behavior

**Success Metrics:**
- HP reduction over time (individual monster)
- Time between evolution stages (slowing progression)
- New monster creation rate (identifying new struggles)
- Skill effectiveness improvement (learning curve)
- Squad interaction correlation with outcomes

---

## SECTION 9: USER EXPERIENCE FLOWS

### Complete User Journey Map

**Onboarding:**
1. First-time user enters app
2. Tutorial explains externalization concept
3. Guided example: Create a practice monster together
4. User creates first real monster
5. First battle tutorial with that monster

**Daily Engagement:**
1. Check-in notification: "How is [Monster Name] today?"
2. Quick HP update slider
3. Suggested battle if HP > threshold
4. Squad feed showing shared monsters
5. Daily insight based on patterns

**Weekly Review:**
1. Sunday evening summary notification
2. Monster progress report
3. Skill effectiveness rankings updated
4. New recommended skills based on week's battles
5. Squad shout-outs for most supportive members

**Monthly Deep Dive:**
1. Full analytics dashboard
2. Evolution review (any monsters progressed?)
3. Trigger pattern analysis
4. Community comparison (optional)
5. Goal setting for next month

### Notification Strategy

**Supportive Notifications:**
- "Your [Monster Name] HP is up today. Need battle support?"
- "Squad member [Name] just defeated their [Monster Name]. They used [Skill]."
- "Pattern detected: Tomorrow morning may be challenging. Pre-battle now?"

**Encouragement Notifications:**
- "Victory! You defeated [Monster Name] yesterday. That's [X] times this month."
- "Your [Skill Name] effectiveness has improved 20% this week."
- "You've identified [X] triggers this month. Awareness is growing."

**Community Notifications:**
- "New monster similar to yours created by [Anonymous User]"
- "Community insight: [Skill] working well for [Monster Type]"
- "Squad challenge: Defeat [X] monsters together this week"

---

## SECTION 10: ACCESSIBILITY & INCLUSIVITY

### Design Considerations

**Visual Accessibility:**
- High contrast mode for monster rendering
- Descriptions for all visual elements (screen reader compatible)
- Color blindness simulation check for all monster palettes
- Option to disable animations for vestibular sensitivity

**Cognitive Accessibility:**
- Simplified creation mode (fewer options, guided choices)
- Battle complexity slider (adjustable difficulty)
- Reading level options for monster dialogue
- Executive function supports (reminders, simplified tracking)

**Cultural Inclusivity:**
- Monster body types avoid cultural stereotypes
- Feature selections culturally neutral where possible
- Color associations customizable (different cultures associate colors differently)
- Trigger options include culturally-specific experiences

**Trauma-Informed Design:**
- Content warnings before potentially triggering monster features
- Easy exit from any battle (no penalty for retreat)
- No mandatory sharing
- Option to "archive" monsters without deleting (acknowledging ongoing struggles)

---

## APPENDIX: EXAMPLE MONSTER PROFILES

### Example 1: "Thesis Panic Monster"

**Created By:** Graduate Student
**Body Type:** Anxiety Imp
**Features:** Many Eyes, Sharp Teeth, Fog Aura
**Color:** Purple
**Current HP:** 65
**Triggers:** Opening dissertation document, Advisor emails, Seeing peers' publications, Sunday evenings
**Attack Pattern:** Worst in evenings, peaks before deadlines
**Evolution Stage:** 2 (Evolved after comprehensive exams)
**Most Effective Skill:** Body Double (4.8 stars), Breaking into Sections (4.5 stars)

### Example 2: "Monday Morning Dread"

**Created By:** Corporate Employee
**Body Type:** Sadness Shadow
**Features:** Heavy Chains, Invisible, Heavy Feet
**Color:** Gray
**Current HP:** 42
**Triggers:** Sunday 8pm, Alarm on Monday, Checking work email, Commute
**Attack Pattern:** Sundays 8pm-Monday 10am, every week
**Evolution Stage:** 1
**Most Effective Skill:** Sunday Prep Ritual (4.2 stars), Squad Rally (4.0 stars)

### Example 3: "Imposter Syndrome Specter"

**Created By:** New Manager
**Body Type:** Perfectionist Golem
**Features:** Sharp Teeth, Many Eyes, Shadow Form
**Color:** Blue-Green
**Current HP:** 78
**Triggers:** Team meetings, Performance reviews, Speaking up, Being praised
**Attack Pattern:** Before meetings, after receiving compliments
**Evolution Stage:** 1
**Most Effective Skill:** Evidence Log (4.6 stars), Squad Reality Check (4.3 stars)

---

*This detailed specification provides comprehensive documentation for implementing a Custom Monster System that combines mental health therapeutic principles with engaging gamification mechanics, creating a personalized, supportive experience for users managing psychological struggles.*