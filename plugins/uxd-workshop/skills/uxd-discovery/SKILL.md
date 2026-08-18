---
name: uxd-discovery
version: 0.1.0
description: >-
  Produce a structured UX discovery brief from a feature request, Jira issue,
  or problem statement. Use when starting a research cycle, framing a design
  problem, or scoping user research.
---

# UX Discovery Brief

Produces a structured discovery brief that frames a design problem, identifies user groups, generates research questions, surveys the competitive landscape, and surfaces constraints. The brief is structured markdown, usable as input to research planning or design sprints.

---

## Inputs

| Input | Type | Required | Default |
|---|---|---|---|
| Problem source | Jira issue key/URL, feature description, or problem statement | yes | ask user |
| Domain context | Product area, team, or business context | no | infer from source |
| Known constraints | Technical, timeline, or organizational constraints | no | ask user |

## Outputs

| Output | Format | Description |
|---|---|---|
| Discovery brief | Structured markdown | Problem statement, user groups, research questions, competitive landscape, constraints |

## Arguments

$ARGUMENTS

Parse as: `<source> [--context <domain>] [--constraints <list>]`

- `source` -- Jira issue key (e.g., `PROJ-142`), Jira URL, feature description, or problem statement. If omitted, ask the user.
- `--context <domain>` -- Product area or team context to ground the brief (e.g., "admin console", "onboarding flow").
- `--constraints <list>` -- Known constraints to include (e.g., "must ship in Q3, no new dependencies").

---

## Step 0: Gather Input

If no source was provided, ask:

> What problem or feature should this discovery brief cover?
> You can share:
> - A Jira issue key or URL (e.g., `PROJ-142`)
> - A feature description or product requirement
> - A problem statement or user pain point

Wait for a response. Do not proceed without input.

### Resolve the source

**Jira issue:** Read the issue using available Jira tools (MCP or CLI). Extract the summary, description, acceptance criteria, linked issues, and any user stories. If Jira is unavailable, ask the user to paste the issue details.

**Feature description or problem statement:** Use the text as provided. If it is vague or a single sentence, ask clarifying questions:
- Who is affected by this problem?
- What is the current experience?
- What triggered this request (user feedback, business goal, technical need)?

### Confirm understanding

Summarize what you understand about the problem in 2-3 sentences. Ask the user to confirm or correct before proceeding.

---

## Step 1: Identify User Groups

Analyze the source material to identify distinct user groups affected by this problem. For each group, determine:

- **Who they are** -- role, context, relationship to the product
- **Goals** -- what they are trying to accomplish
- **Pain points** -- current frustrations or unmet needs related to this problem

Present the user groups and ask for confirmation:

> I've identified the following user groups. Should I add, remove, or adjust any?

If the source material does not clearly indicate user groups, propose candidates based on the problem domain and ask the user to validate.

---

## Step 2: Generate Research Questions

Based on the problem statement and user groups, generate 5-8 research questions that would inform design decisions. Questions should be:

- **Specific** -- tied to observable behavior or measurable outcomes, not vague
- **Actionable** -- answerable through user research methods (interviews, surveys, analytics, usability testing)
- **Prioritized** -- ordered by impact on design decisions

Group questions by theme (e.g., "Current workflow", "Decision factors", "Adoption barriers").

Present the questions and ask:

> Do these research questions cover the right areas? Should I adjust the focus or add questions about a specific aspect?

---

## Step 3: Survey Competitive Landscape

Identify 3-5 products or approaches that address the same problem space. For each, note:

- **Product/approach** -- name and brief description
- **Relevant pattern** -- how they solve the problem or a related one
- **Differentiator** -- what they do well or poorly

Base this on publicly known products in the domain. If the problem is internal or niche, note that competitive data is limited and focus on analogous patterns from adjacent domains.

Do not fabricate product details. If you are uncertain about a product's approach, say so and suggest the user verify.

---

## Step 4: Identify Constraints and Assumptions

Surface constraints and assumptions that should be validated during research:

**Constraints** -- technical limitations, timeline requirements, organizational boundaries, accessibility requirements, platform constraints.

**Assumptions** -- beliefs about users, the problem, or the solution that have not been validated. Frame each as a testable hypothesis.

Include any constraints the user provided via `--constraints`. Ask:

> Are there additional constraints or assumptions I should capture?

---

## Step 5: Produce the Discovery Brief

Assemble the brief using the template below. Present it to the user for review.

---

### Output Template

```markdown
# Discovery Brief: [Problem Title]

**Date:** [YYYY-MM-DD]
**Source:** [Jira issue key, or "Feature description", or "Problem statement"]
**Domain:** [Product area or team context]

---

## Problem Statement

[2-3 sentence summary of the problem, who it affects, and why it matters]

## User Groups

### [Group Name]
- **Description:** [Who they are]
- **Goals:** [What they want to accomplish]
- **Pain points:** [Current frustrations]

[Repeat for each group]

## Research Questions

### [Theme 1]
1. [Question]
2. [Question]

### [Theme 2]
3. [Question]
4. [Question]

[Additional themes as needed]

## Competitive Landscape

| Product / Approach | Relevant Pattern | Differentiator |
|---|---|---|
| [Name] | [How they address the problem] | [Strength or weakness] |
| [Name] | [How they address the problem] | [Strength or weakness] |

## Constraints

- [Constraint 1]
- [Constraint 2]

## Assumptions to Validate

- [ ] [Assumption framed as testable hypothesis]
- [ ] [Assumption framed as testable hypothesis]
```

---

## Guardrails

- **Do not fabricate data.** If the source material is insufficient, ask for more context rather than inventing user groups, research questions, or competitive products.
- **Do not prescribe solutions.** The brief frames the problem and research -- it does not recommend designs or implementations.
- **Do not skip confirmation.** The user must confirm understanding (Step 0), user groups (Step 1), and research questions (Step 2) before proceeding.
- **Assumptions are hypotheses, not facts.** Frame every assumption as something to validate, not a known truth.
- **AI transparency.** Note that the competitive landscape is based on the assistant's general knowledge and may need verification.
