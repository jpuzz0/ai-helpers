# Plugin Versioning

ai-helpers uses semantic versioning for plugins with external consumers.

## Versioned plugins

Only plugins that are hard dependencies in other systems carry a version:

| Plugin | Consumer | Version |
|--------|----------|---------|
| `patternfly` | carbonite | 1.0.0 |
| `pf-code-review` | fullsend-ai-agents | 1.0.0 |
| `uxd-research` | fullsend-ai-agents | 1.0.0 |

All other plugins stay on `main` with auto-update. Add versioning when a
plugin becomes a hard dependency elsewhere.

## Where versions live

Each versioned plugin declares its version in `.claude-plugin/plugin.json`:

```json
{
  "name": "uxd-research",
  "version": "1.0.0"
}
```

## Consuming a versioned plugin

Pin to a git tag matching the plugin version:

```
https://raw.githubusercontent.com/rh-uxd/ai-helpers/uxd-research@1.0.0/plugins/uxd-research/skills/...
```

## Releasing

1. Bump the `version` field in the plugin's `.claude-plugin/plugin.json`
2. Commit: `chore(release): bump <plugin> to X.Y.Z`
3. Tag: `git tag -a <plugin>@X.Y.Z -m "<plugin>@X.Y.Z: summary"`
4. Push: `git push origin main && git push origin <plugin>@X.Y.Z`

## Semver rules

| Bump | When |
|------|------|
| Patch (`1.0.1`) | Bugfix, docs clarification, no behavior change |
| Minor (`1.1.0`) | New skill added, existing skills enhanced, backward compatible |
| Major (`2.0.0`) | Skill renamed, finding schema changed, breaking change |
