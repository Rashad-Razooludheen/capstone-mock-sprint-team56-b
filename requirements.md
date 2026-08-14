# Requirements: Bootstrap Restyling (Team Page & Login UI)
This document details the functional and non-functional requirements for the Bootstrap Restyling initiative, covering the Team Page and Login Interface.

This document details the functional and non-functional requirements for the Bootstrap Restyling initiative, covering the Team Page and Login Interface.

- Team Page: Requires structured data fields and display formatting for member portfolios.

- Login Interface: Scope is strictly styling-only using Bootstrap components (no backend authentication logic, session handling, and API endpoints)


## 2. Functional Requirements
### 2.1. Team Page Requirements
The team page must display organizational and project information using responsive grid components and cards. All requirements are mandatory.

#### Requirement 1: Team Name
Field Type: Text String.
Display Rule: Clearly featured as the main page header.

#### Requirement 2: Project Name
Field Type: Text String.
Display Rule: Placed directly beneath or alongside the team name as a subtitle.
Validation Rule: Mandatory; maximum 150 characters.

#### Requirement 3: About-Us Blurb

Field Type: Multi-line Rich Text / Paragraph.

Display Rule: Rendered within a centered container or designated introductory card describing the project's mission and scope.

Validation Rule: Mandatory; recommended length between 50 and 500 characters.

#### Requirement 4: Per-Member Portfolio Information
The team page must display all team members, displaying a uniform card component for each individual containing:

1. **Member Photo:** Image element constrained to a responsive circular or square aspect ratio. Supports standard web formats (.jpg, .png, .webp). Fallback placeholder required if no image is provided.

2. **Member Name:** Text string; displayed as the card title.

4. **Member Role:** Text string; displayed as a muted subtitle or badge element (e.g., Project Manager, UX Designer).


## 2.2. Login Interface Requirements (Styling-Only Scope)
This task is STYLING-ONLY. NO changes are to be made to authentication logic, form validation, session handling, redirect behaviour or error handling. Every requirement below is related to styling.

#### Requirement 5: Scope Boundaries
All changes are restricted strictly to the view layer (HTML/CSS templates, Bootstrap classes).
No changes, additions, or refactoring shall be made to authentication controllers, validation logic, token management, form inputs or database queries.

#### Requirement 5: Log-in Page Elements 
The log-in page must keep the following elements:
- email imput; keep placeholder text "you@example.com"
- password input; keep masked input behaviour
- create account link
- 'Continue with Google' sign-in option
- sign-in button
- Error messages; do not change trigger logic

# Edge Cases
### 1. Missing Member Photos: 
If a team member's photo is null, empty, or fails to load, the system must fall back to a generic default avatar placeholder image to prevent layout breaking.

### 2. Long Text Strings:
Long Team Names, Project Names or Member role strings must wrap correctly without distrorting grid structure rather than overflowing container boundaries.

### 3. Missing membber blurb/description:
The blurb section should be hidden entirely without leaving visible empty space