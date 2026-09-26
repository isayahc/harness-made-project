# Hello World — Next.js

A minimal [Next.js](https://nextjs.org/) App Router app (TypeScript, `src/` directory) that renders a
Hello World page. It is intended to be built and verified inside a
[Daytona](https://www.daytona.io/) sandbox.

## Prerequisites

- **Node.js 20 or newer** (`node --version`)
- **npm** 10 or newer (ships with Node 20)
- Optionally, the [Daytona CLI](https://www.daytona.io/docs/) for the sandbox workflow below

## Local development

```bash
npm install     # install dependencies
npm run dev     # start the dev server on http://localhost:3000
npm run build   # create a production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Build in a Daytona sandbox

> **Unverified steps.** The commands below could **not** be checked against
> <https://www.daytona.io/docs/> in the environment where this README was written (no network
> access, and the Daytona CLI was neither installed nor authenticated). Treat the subcommand and
> flag names as a best-effort starting point and confirm each one against the current Daytona docs
> before relying on them. Anything that could not be confirmed is flagged inline.

### 1. Install the Daytona CLI

```bash
npm install -g @daytonaio/cli
daytona --version
```

### 2. Authenticate

```bash
daytona auth login
```

> Older CLI releases used `daytona login`; confirm which one your installed version expects with
> `daytona --help`.

### 3. Create a sandbox for this repository

From a clone of this repository:

```bash
daytona create
```

To target the remote explicitly and give the sandbox a name:

```bash
daytona create https://github.com/<owner>/<repo> --name hello-world-next
```

> **Confirm:** the exact flag used to name a sandbox (`--name`) and to pick a base image
> (`--snapshot` in older releases, possibly renamed in newer ones) were not verified. Run
> `daytona create --help` to confirm.

### 4. Run the build inside the sandbox

Open a shell in the sandbox and run the project scripts there:

```bash
npm install
npm run build
```

### 5. Preview the result

Start the production server in the sandbox and expose it on a previewable port:

```bash
npm run start
```

Then print the sandbox's URL for port `3000`:

```bash
daytona get-port hello-world-next 3000
```

> **Confirm:** port/URL commands were renamed across CLI versions (`daytona get-port` in older
> releases; newer releases expose `daytona get ports` / a `daytona preview` command). Run
> `daytona --help` to confirm the current name. If a preview URL is not available, the port can be
> forwarded with `daytona ssh` or a local editor via `daytona code`.

### 6. Clean up

```bash
daytona delete hello-world-next
```

## Project structure

```
src/app/layout.tsx   Root layout, global metadata, imports the global stylesheet
src/app/page.tsx     Home page: "Hello, World!" heading
src/app/globals.css  Default global styles (no CSS framework)
```
