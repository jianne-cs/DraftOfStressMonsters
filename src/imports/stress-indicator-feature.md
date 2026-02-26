# STRESS INDICATOR: FEATURE SUMMARY

## What It Is

A **4-dot visual indicator** near the user's profile that displays current stress level at a glance:

```
○ ○ ○ ○ = Level 1 (Minimal)
● ○ ○ ○ = Level 2 (Mild)
● ● ○ ○ = Level 3 (Moderate)
● ● ● ○ = Level 4 (High)
● ● ● ● = Level 5 (Severe/Overwhelming)
```

---

## Core Decision: Editable or Not?

**YES - Must be editable.** A non-editable stress indicator becomes quickly outdated, misleading, and useless.

---

## Why It Must Be Editable

| Reason | Impact |
|--------|--------|
| **Stress fluctuates** | Changes throughout the day require updates |
| **Therapeutic value** | Self-check-ins are healing practices |
| **Accuracy drives usefulness** | Squad support and app insights need real data |
| **User agency** | Control over self-representation builds trust |

---

## How Editing Works

### Primary Method: Tap-to-Update

User taps dots → selector appears → chooses new level → instant update

### Context-Aware Design

| User State | Edit Method |
|------------|-------------|
| **High stress (4-5 dots)** | One-tap quick options (Better/Worse/Need Help) |
| **Moderate stress (3 dots)** | Dot selector + optional context |
| **Low stress (1-2 dots)** | Slider + optional notes |
| **Stale (>4 hours)** | Prompt: "Has your stress changed?" |

---

## What Happens After Update

| Change | System Response |
|--------|-----------------|
| Stress ↓ | "Glad you're better. What helped?" |
| Stress ↑ | "Things feel harder. Need grounding?" |
| Stays high | "You've been carrying this. Squad available." |
| Stays low | "Doing well! Want to help a squad member?" |

---

## Squad Integration

| Level | Squad Sees | Squad Can |
|-------|------------|-----------|
| 1-2 dots | "Doing well" | Celebrate |
| 3 dots | "Managing moderate stress" | Check in |
| 4-5 dots | "Could use support" | Send help, battle together |

---

## Privacy Controls

Users control who sees stress:
- Private (only me)
- Squad only
- Public (anonymized)
- Custom (specific people)
- Auto-clear after X hours

---

## Key Design Principles

1. **Match effort to state** - One tap when stressed, more options when calm
2. **Always offer help** - Stress increases trigger support
3. **Prevent staleness** - Fade indicators after 4+ hours
4. **Respect privacy** - Granular sharing controls
5. **Handle crisis gently** - Recognize spiraling, offer resources

---

## Benefits Summary

| Stakeholder | Benefit |
|-------------|---------|
| **User** | Accurate self-representation, therapeutic check-ins, agency |
| **Squad** | Real-time awareness, meaningful support opportunities |
| **App** | Quality data, accurate patterns, better recommendations |

---

**Bottom Line:** The stress indicator is a living tool, not a static label. It must be easily editable, context-aware, and privacy-respecting to serve its purpose.