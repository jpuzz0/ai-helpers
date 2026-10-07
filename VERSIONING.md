# Plugin Versioning

ai-helpers uses semantic versioning for plugins with external consumers.

## Which plugins are versioned

Only plugins with external consumers. If a plugin's `.claude-plugin/plugin.json`
has a `version` field, it's versioned. If it doesn't, it tracks `main`.

Add a `version` field when a plugin becomes a hard dependency in another system.
Don't version internal-only plugins.

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
