# USER PROFILE & LOGOUT: COMPLETE EXPERIENCE

## UNDERSTANDING THE USER'S CONTEXT

When a user navigates to their profile and considers logging out, they are in one of several psychological states:

| User State | What They're Feeling | What They Need |
|------------|---------------------|----------------|
| **End of session** | "I'm done for now" | Clean exit, confidence data is saved |
| **Privacy concern** | "Someone might see this" | Security, peace of mind |
| **Frustrated** | "This isn't helping" | Easy return path, no data loss |
| **Overwhelmed** | "Too much, need to step away" | Quick escape, preserved progress |
| **Device sharing** | "Someone else uses this phone" | Complete privacy, multiple account support |
| **Testing the app** | "Just exploring" | Guest mode understanding |

---

## PROFILE SECTION: COMPLETE BREAKDOWN

### Profile Entry Point

**How User Gets There:**
- Tab navigation: Profile icon (bottom or top navigation)
- Common icon: 👤 or circular avatar with user initials/photo
- Badge notification if applicable (settings needed, updates)

### Profile Screen Overview

**Layout Hierarchy:**

```
+--------------------------+
|     [BACK]  PROFILE      |
+--------------------------+
|                           |
|    [LARGE AVATAR]        |
|    USER NAME             |
|    @username             |
|    [EDIT PROFILE]        |
|                           |
+--------------------------+
| STATISTICS SUMMARY       |
+--------------------------+
| MONSTER STATS            |
| SQUAD INFO               |
| ACHIEVEMENTS             |
| SETTINGS                 |
| ACCOUNT                   |
| LOGOUT                    |
+--------------------------+
```

---

## PROFILE SECTIONS IN DETAIL

### 1. Header Section

**Visual Elements:**
- **Avatar:** Circle or square with rounded corners
  - Options: Initials, generated avatar, uploaded photo, or monster-inspired icon
  - Tap to view full size or change
- **Display Name:** User's chosen name
- **Username:** @handle (if applicable)
- **Edit Profile Button:** Pencil icon or "Edit" text

**User Expectations:**
- "I can change how I appear to others"
- "My squad knows who I am"
- "This feels like MY space"

### 2. Statistics Summary

**Key Metrics Displayed:**
- **Days Active:** "Member for X days"
- **Monsters Created:** Total count
- **Battles Won:** Total victories
- **Squad Size:** Number of connections
- **Current Streak:** Consecutive days active

**Visual Treatment:**
- Clean cards or grid layout
- Icons for each metric
- Tap any metric for detailed breakdown

**User Expectations:**
- "I can see my progress at a glance"
- "This shows my commitment to mental health"
- "Numbers don't judge me—they just show my journey"

### 3. Monster Stats

**Content:**
- **Most Battled Monster:** Name and image thumbnail
- **Strongest Monster:** Highest HP monster (current or historical)
- **Most Defeated Monster:** Which one they've beaten most often
- **Evolution Count:** Total evolutions across all monsters
- **Recent Activity:** "Last battle: [monster name], [time]"

**Interactive Elements:**
- Tap any monster to go to its profile
- "View All Monsters" link to collection

**User Expectations:**
- "I can see which struggles I'm working on most"
- "My progress is visible"
- "Even strong monsters are being tracked"

### 4. Squad Info

**Content:**
- **Squad Members:** Count and grid of avatars (first 4-6)
- **Pending Requests:** If any, with notification badge
- **Recent Squad Activity:** "Squad defeated 3 monsters together"
- **Find Squad Members:** Link to discovery

**Interactive Elements:**
- Tap avatars to view squad member profiles
- "Manage Squad" link to full squad management

**User Expectations:**
- "I'm not alone in this"
- "My support network is visible"
- "I can see who's been active"

### 5. Achievements

**Content:**
- **Recent Unlocks:** Last 2-3 achievements with icons
- **Progress Bars:** For in-progress achievements
- **Total Achievements:** "X of Y unlocked"

**Examples:**
- "First Monster Created" (bronze)
- "10 Battles Won" (silver)
- "Evolved Monster" (gold)
- "Squad Supporter" (helped 5 squad members)
- "30-Day Streak" (platinum)

**User Expectations:**
- "My efforts are recognized"
- "There's always something to work toward"
- "Small wins matter"

### 6. Settings

**Content Categories:**

*Appearance:*
- Dark/Light mode toggle
- Font size
- Animation preferences (reduce motion option)

*Notifications:*
- Battle reminders
- Squad activity
- Achievement unlocks
- Daily check-in prompts

*Privacy:*
- Profile visibility (public/private/squad only)
- Share battle history
- Show online status
- Data collection preferences

*Accessibility:*
- Voice guidance on/off
- Haptic feedback
- Simplified mode
- Reading level

*Content:*
- Trigger warnings
- Language preferences
- Exercise types to show/hide

**User Expectations:**
- "I can make this app work for ME"
- "My preferences are remembered"
- "I control what I see and who sees me"

### 7. Account

**Content:**

*Account Details:*
- Email address (with verification status)
- Account type (free/premium)
- Member since date
- Device information

*Data Management:*
- Export my data (JSON/CSV)
- Download journal entries
- Backup to cloud
- Clear local data

*Connected Accounts:*
- Sign-in methods (Google, Apple, email)
- Squad sync options
- Social connections

*Subscription (if applicable):*
- Current plan
- Renewal date
- Manage subscription
- View billing history

*Danger Zone:*
- Deactivate account
- Delete all data
- (with multiple confirmations)

**User Expectations:**
- "I own my data"
- "I can leave if I want to"
- "My information is secure"
- "I understand my account status"

---

## LOGOUT: THE COMPLETE EXPERIENCE

### Logout Button Location

**Primary Location:** Bottom of Profile page, before "Danger Zone" if present
**Visual Treatment:**
- May be in a separate section
- Often gray or neutral color (not alarming red)
- Text: "Log Out" or "Sign Out"
- Icon: ➡️ or 🚪

### User's Mental Model When Clicking Logout

**What User Expects:**
1. Confirmation (did I mean to do this?)
2. Security (my data is safe)
3. Clean exit (no lingering session)
4. Easy return (I can get back in)

**What User Fears:**
- Losing unsaved data
- Being permanently locked out
- Squad losing connection
- Having to re-enter everything

### Logout Confirmation Dialog

**Design:**

```
+--------------------------+
|    Log Out of [App Name]? |
+--------------------------+
|                           |
|  Are you sure you want   |
|  to log out?             |
|                           |
|  • Your data is saved    |
|  • You can log back in   |
|    anytime                |
|  • Squad notifications   |
|    will pause             |
|                           |
+--------------------------+
| [CANCEL]    [LOG OUT]    |
+--------------------------+
```

**Optional Checkboxes:**
- [ ] Remember me on this device
- [ ] Clear local data (for shared devices)
- [ ] Pause notifications while logged out

### What Happens After Confirmation

**Immediate Visual Feedback:**
- Loading spinner or progress indicator
- "Logging out..." message
- Brief pause (1-2 seconds) for processing

**Background Processes:**
1. Session token invalidated
2. Local cache preserved (unless "clear" selected)
3. Push notifications unregistered
4. Squad presence set to offline
5. Analytics session ended

### Post-Logout Destination

**Primary:** **Login/Signup Screen**

**Screen Should Show:**
- App logo and name
- "You've been logged out" confirmation
- Login options (email, social)
- "Continue as Guest" option (if available)
- "Remember me" checkbox
- "Trouble logging in?" link

**Friendly Touch:**
- "See you soon, [name]!" message briefly displayed
- Option to stay logged out or return quickly

---

## SPECIAL LOGOUT SCENARIOS

### Scenario 1: User Has Unsaved Data

**If user logs out mid-journal entry or mid-exercise:**

```
+--------------------------+
|    Wait! You have        |
|    unsaved journal entry |
+--------------------------+
|                           |
|  Your entry hasn't been  |
|  saved.                  |
|                           |
+--------------------------+
| [SAVE & LOG OUT]          |
| [DISCARD & LOG OUT]       |
| [CANCEL]                  |
+--------------------------+
```

### Scenario 2: Shared Device

**If device has multiple users or is shared:**

```
+--------------------------+
|    Shared Device?        |
+--------------------------+
|                           |
|  This looks like a shared |
|  device. Would you like  |
|  to:                      |
|                           |
|  ○ Just log out           |
|  ○ Clear my data on logout|
|  ○ Switch to Guest Mode   |
|                           |
+--------------------------+
| [CONTINUE]                |
+--------------------------+
```

### Scenario 3: Squad Admin

**If user is squad admin with pending responsibilities:**

```
+--------------------------+
|    You're a Squad Admin  |
+--------------------------+
|                           |
|  You manage [squad name]. |
|  Before logging out:      |
|                           |
|  • Assign another admin   |
|  • Squad will continue    |
|    without you            |
|  • You can still rejoin   |
|    later                  |
|                           |
+--------------------------+
| [MANAGE SQUAD]   [CONTINUE]|
+--------------------------+
```

### Scenario 4: Subscription Issues

**If user has active subscription but logs out:**

```
+--------------------------+
|    Subscription Active   |
+--------------------------+
|                           |
|  Your premium features    |
|  will still be available  |
|  when you log back in.    |
|                           |
|  Logging out doesn't      |
|  cancel your subscription.|
|                           |
+--------------------------+
| [OK, GOT IT]              |
+--------------------------+
```

---

## RETURNING AFTER LOGOUT

### First-Time Return Experience

When user logs back in after being logged out:

**Welcome Back Screen:**
- "Welcome back, [name]!"
- "While you were away:"
  - Your monsters missed you
  - Squad had X battles
  - You have X new insights

**What's Waiting:**
- All monsters exactly as left
- Journal entries preserved
- Squad connections intact
- Progress saved

**Quick Catch-Up:**
- "Would you like to:"
  - See squad activity
  - Check on your monsters
  - View new insights

### If User Was Gone Long-Term

**For returns after 30+ days:**

- "It's been a while. We're glad you're back."
- "Your monsters are still here. Want to check in?"
- "Anything changed since we last saw you?"
- Option to archive old monsters and start fresh

---

## USER PROFILE: COMPLETE MENTAL MODEL

### What Profile Means to Users

| User Type | Profile Represents |
|-----------|---------------------|
| New user | "This is where I set up my identity" |
| Regular user | "This is my mental health home base" |
| Progress-focused | "This shows how far I've come" |
| Privacy-conscious | "This is what I control about my data" |
| Social user | "This is how squad sees me" |
| Stressed user | "This is where I go to step away" |

### Profile Navigation Patterns

**Common User Journeys:**

1. **Check Progress:** Profile → Stats → Monster Details → Diary
2. **Adjust Settings:** Profile → Settings → [specific setting]
3. **Log Out:** Profile → Scroll to bottom → Logout → Confirm
4. **View Squad:** Profile → Squad Info → Member Profiles
5. **Edit Identity:** Profile → Edit Profile → Update info

### Profile as Safety Net

For stressed users, profile represents:
- Control ("I can change things")
- Exit ("I can leave when I need to")
- Privacy ("My data is mine")
- Identity ("This is me, struggles and all")

---

## DESIGN PRINCIPLES FOR PROFILE & LOGOUT

### 1. Always Save First

**Rule:** Before allowing logout, ensure all data is saved
**Implementation:** Auto-save on any navigation, confirm only if truly unsaved

### 2. Make Logout Reversible

**Rule:** Logout should never feel permanent
**Implementation:** Easy return path, preserved data, "Remember me" option

### 3. Respect User's State

**Rule:** If user is stressed, make exit clean and quick
**Implementation:** One-click logout option in emergencies, no confirmation required if user enables "quick exit" in settings

### 4. Communicate Clearly

**Rule:** Users should understand what logout means
**Implementation:** Simple language, no jargon, visible confirmations

### 5. Protect Privacy

**Rule:** On shared devices, extra precautions
**Implementation:** Clear data option, multiple account support, biometric re-auth

---

## ACCESSIBILITY CONSIDERATIONS

### For All Users

- Logout button large enough to tap easily
- High contrast for visibility
- Screen reader compatible: "Log out button. Double tap to log out of your account."
- Confirmation dialog readable by screen readers

### For Users with Anxiety

- Logout confirmation should be calming, not alarming
- Avoid red "warning" colors for logout button
- Include reassurance that data is safe
- Offer "take a break" option instead of just logout

### For Users with Memory Issues

- Clear labeling of what logout means
- Option to stay logged in indefinitely
- Visual cues upon return ("Welcome back, here's where you were")

### For Users in Crisis

- Quick logout option (one tap, no confirmation)
- Emergency resources still accessible after logout
- Option to clear session quickly

---

## TECHNICAL IMPLEMENTATION NOTES

### Logout Process Flow

```
User clicks Logout
        ↓
Confirmation dialog displayed
        ↓
User confirms
        ↓
Loading state activated
        ↓
API call: POST /auth/logout
        ↓
Clear local session storage
        ↓
Remove user data from memory
        ↓
Unregister push notifications
        ↓
Navigate to login screen
        ↓
Display confirmation: "Logged out successfully"
```

### Data Persistence After Logout

| Data Type | Persists After Logout? | Available When Logged Out? |
|-----------|------------------------|----------------------------|
| Monsters | Yes (on server) | No (requires login) |
| Journal entries | Yes (encrypted) | No |
| Settings preferences | Yes (local) | Only if guest mode |
| Squad connections | Yes | No |
| Achievement progress | Yes | No |
| Local cache | Optional (user choice) | Only if kept |

### Security Considerations

- Session tokens invalidated server-side
- No sensitive data stored after logout (if user selects clear)
- Biometric lock option for return
- Automatic logout after inactivity (configurable)

---

## COMPARISON: PROFILE VS. OTHER SECTIONS

| Section | Purpose | User Mindset |
|---------|---------|--------------|
| **Home** | Take action | "What should I do now?" |
| **Monsters** | Manage struggles | "These are my challenges" |
| **Squad** | Connect with others | "Who's with me?" |
| **Diary** | Reflect | "What's been happening?" |
| **Profile** | Manage self | "This is me and my settings" |
| **Logout** | Exit | "I'm done for now" |

---

## SUMMARY: USER PROFILE & LOGOUT

### What Users Expect from Profile

- **Identity:** "This is who I am in this space"
- **Progress:** "This shows my journey"
- **Control:** "I can change how things work"
- **Connection:** "This links me to my squad"
- **Security:** "My data is protected here"

### What Users Expect from Logout

- **Safety:** "My data is saved before I go"
- **Control:** "I choose when to leave"
- **Reversibility:** "I can come back anytime"
- **Privacy:** "No one can access my account"
- **Clarity:** "I understand what happens when I leave"

### The Perfect Logout Experience

1. User feels in control
2. Data is confirmed saved
3. Process is quick and clear
4. Return path is obvious
5. No anxiety about "losing" anything

**The Golden Rule:** Profile should feel like home base—a place of identity, progress, and control. Logout should feel like locking the door behind you—secure, intentional, and temporary.