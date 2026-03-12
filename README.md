# ai-project-bootstrap

Bootstrap an AI-assisted development project with Claude Code skills, task board, and specs template.

## Quick Start

```bash
cd your-project-folder
npx https://github.com/andersnygaard/ai-project-bootstrap
```

## What You Get

```
your-project/
├── .claude/
│   ├── CLAUDE.md                          # Project instructions for Claude
│   ├── settings.local.json                # Permission settings
│   └── skills/
│       ├── scan-project/SKILL.md          # Project scanning & task generation
│       ├── start-working/SKILL.md         # Autonomous task execution
│       └── task-board/skill.md            # Planning & documentation
├── .docs/
│   └── specs.md                           # Project specification template
├── .task-board/
│   ├── PLANNING-BOARD.md                  # Current priorities
│   ├── backlog/                           # Planned tasks
│   ├── in-progress/                       # Active tasks
│   ├── done/                              # Completed tasks
│   └── on-hold/                           # Blocked tasks
└── .gitignore
```

## How to Use It

### Step 1: Write a Good Spec

The spec file (`.docs/specs.md`) is the foundation. The better your spec, the better the AI understands what to build. Include:

- **Overview** — What the project does and who it's for
- **Tech stack** — Language, framework, database, testing tools, build/run commands
- **Features** — List every feature, even briefly. This becomes the checklist the scanner uses
- **Architecture** — Layers, modules, how they connect. Include a diagram if possible
- **Project structure** — Where code lives (`src/`, `lib/`, `components/`, etc.)
- **Code conventions** — Naming, formatting, patterns you want followed
- **Test strategy** — What's tested, how, what frameworks, naming conventions

**Tips for a good spec:**
- Be specific: "REST API with JWT auth" not "backend"
- List interfaces/contracts you want: "IUserRepository with GetById, Create, Delete"
- Include code examples for conventions you care about
- Define your build and test commands so the skills know how to verify work

### Step 2: Fill in CLAUDE.md

Edit `.claude/CLAUDE.md` with your project's name, description, architecture summary, and tech stack. This file is loaded into every Claude conversation as context.

### Step 3: Scan Your Project

Run the `/scan-project` skill in Claude Code:

```
/scan-project
```

This will:
1. Read your spec and compare it against your actual codebase
2. Build a coverage matrix showing what's implemented, partial, or missing
3. Review code quality, readability, and best practices
4. Generate **3 prioritized tasks** in `.task-board/backlog/`
5. Update `PLANNING-BOARD.md` with the new priorities

Run `/scan-project` repeatedly — each round finds the next most impactful work.

### Step 4: Start Working

Run the `/start-working` skill in Claude Code:

```
/start-working
```

This will:
1. Pick the top priority task from the planning board
2. Move it to `in-progress/`
3. Spawn a subagent to implement it
4. Verify the build passes and tests succeed
5. Move it to `done/`
6. **Automatically continue** to the next task

It keeps going until all tasks are done or it hits a blocker.

### The Loop

```
/scan-project  →  generates 3 tasks
/start-working →  implements them all
/scan-project  →  finds the next 3
/start-working →  implements them all
...repeat until your spec is fully implemented
```

### Automate It with Claude Code on the Web

You can let Claude Code run the full loop autonomously using subagents. Paste this as your prompt:

```
iterate the following patterns until application is finished:

1. using a subagent:
   /scan-project with focus on specs found in /.docs/specs.md
   we strive for quality, readability and best practice code
   make good tests

2. using a new subagent:
   /start-working

3. goto 1

iterate at least 20 times
```

This creates a fully autonomous development loop — Claude scans for gaps, generates tasks, implements them, and repeats. Each iteration uses fresh subagents so context stays clean.

## Templates

By default, the `default` template is used. Specify a different template:

```bash
npx ai-project-bootstrap advanced
```

Currently available: `default`

## Skills Reference

| Skill | Command | Purpose |
|-------|---------|---------|
| **Scan Project** | `/scan-project` | Spec gap analysis, code quality review, bottleneck detection, task generation |
| **Start Working** | `/start-working` | Autonomous task execution via subagents |
| **Task Board** | `/task-board` | Create a single detailed implementation plan |

## License

MIT
