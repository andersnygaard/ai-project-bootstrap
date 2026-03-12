# Project Specification

## Overview

[Describe the project: what it does, the problem it solves, and who the target users are.]

## Tech Stack

- **Language:** [e.g., TypeScript, Python, C#, Go]
- **Framework:** [e.g., Next.js, FastAPI, .NET, Express]
- **Database:** [e.g., PostgreSQL, SQLite, MongoDB, none]
- **Testing:** [e.g., Jest, pytest, xUnit + FluentAssertions]
- **Build/Run:** [e.g., npm run dev, dotnet run, go run .]

## Features

### Core

- [Feature 1: brief description]
- [Feature 2: brief description]
- [Feature 3: brief description]

### Future / Nice-to-have

- [Feature that can wait]

## Architecture

[Describe the layers, modules, or services and how they interact.]

```
┌─────────────────────────────────┐
│  Presentation / UI              │
├─────────────────────────────────┤
│  Business Logic / Services      │
├─────────────────────────────────┤
│  Data Access / Storage          │
└─────────────────────────────────┘
```

## Project Structure

```
src/
├── [folder]/          # [description]
├── [folder]/          # [description]
└── [folder]/          # [description]
```

## Code Conventions

- [Naming conventions]
- [Formatting rules]
- [Pattern preferences — e.g., prefer composition over inheritance]
- [Error handling strategy]

## Test Strategy

### What is Tested

| Layer | What is tested | Mocking |
|-------|---------------|---------|
| [Layer 1] | [What] | [How] |
| [Layer 2] | [What] | [How] |

### Test Conventions

- **Naming:** `MethodUnderTest_Scenario_ExpectedResult`
- **Pattern:** Arrange-Act-Assert
- One assertion per test where practical

## Non-Goals (for now)

- [Things explicitly out of scope]
