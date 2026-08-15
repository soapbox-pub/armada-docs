---
title: Self-hosting
description: Run Armada yourself — the web client, a relay, and a voice server. What each piece does, and which ones you can skip.
sidebar:
  label: Overview
  order: 1
---

:::note[Placeholder]
This section is scaffolding. The pages below are the intended shape, not
finished writing.
:::

Nothing here is required to use Armada — the app talks to public relays out of
the box, and hosting your own is a choice about where your traffic lands, not a
prerequisite for anything.

Each piece is independent. Read the first page, then take only the parts you
want.

## What goes here

- **What you can host** — the four separable pieces (client, relay, voice,
  push), and what running each one actually buys you.
- **The web client** — the static build, the Docker image, and the server
  config it expects.
- **A relay** — running one for a NIP-29 server, or as somewhere your
  community's encrypted traffic lands.
- **Voice and video** — the LiveKit server and the blind AV broker.
- **Push notifications** — the content-blind gateway, and what it never sees.
- **Operations** — backups, upgrades, and the things that break.
