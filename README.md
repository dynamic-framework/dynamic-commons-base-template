# dynamic-commons-base-template

## Requirements:
- node@20+
- npm@10+

## Setup
1. Change the property name in `package.json` to the name of your commons.
> [!IMPORTANT]  
> Remember to use the scope of your organization.
2. Change the scope in the `actions/setup-node@v4` step of `.github/workflows/release-please.yml` to the scope of your organization.
3. Workflow permissions
   - If in your repository the actions in `workflow permissions` don't have permission to `create and approve pull request`, create a PAT token with the permissions `repo`, `workflows` and `write packages` and add it as a `repository secret` with the name `RELEASE_PLEASE_TOKEN`.
   - If in your repository the actions in `workflow permissions` have permission to `create and approve pull request`, change in `.github/workflows/release-please.yml` `${{ secrets.RELEASE_PLEASE_TOKEN }}` to `${{ secrets.GITHUB_TOKEN }}`
4. To apply the client theme in the storybook change in `.storybook/preview-head.html` the link `<link rel="stylesheet" href="https://www.unpkg.com/@dynamic-framework/ui-react@latest/dist/css/dynamic-ui-root.min.css" />` to a link to the theme css in the platform.

## Usage
The best way to use this template is to create a repository from it on GitHub.

```console
npm install @your-scope/your-package-name

or if you want to test our template

npm install @dynamic-framework/dynamic-commons-base-template
```

> [!IMPORTANT]  
> Remember that commons includes the framework as a peer dependency, you must install the framework in your widget

## Icon system
This template ships a build-time svg → React component pipeline, so your commons can publish its own icons without each consuming widget re-wiring svgr.

Add `my-icon.svg` to `src/icons`, re-export it from `src/icons/index.ts`, and consume it as a component:

```tsx
import { IconMyIcon } from '@your-scope/your-commons';

<IconMyIcon width={24} height={24} className="text-primary" />
```

Keep the `viewBox` and use `currentColor` so the icon scales and inherits the text color.

Icons are tree-shakeable: a widget that does not import one ships zero icon bytes. The feature costs ~9 MB of `devDependencies` and nothing at runtime for consumers who skip it.

### Using them through `DIcon`
`DIcon` resolves its `icon` name against the registry given to `DContextProvider` first, then `lucide-react`. Registering a Lucide name overrides that icon everywhere `DIcon` is used:

```tsx
import { DContextProvider, DIcon } from '@dynamic-framework/ui-react';
import { iconRegistry } from '@your-scope/your-commons';

<DContextProvider iconRegistry={iconRegistry}>
  <DIcon icon="CreditCard" size="2rem" color="primary" />  {/* brand svg */}
  <DIcon icon="House" size="2rem" />                       {/* Lucide, unchanged */}
</DContextProvider>
```

Declare your map in `src/icons/iconRegistry.ts`. This requires `@dynamic-framework/ui-react` >= 2.7.0.

> [!WARNING]
> Keep the registry hand-written and import only the icons you need resolved by name. It is a single object literal, so every icon it references is bundled and evaluated as soon as it is imported — never build it from a barrel or a glob. At ~890 B per icon, a wholesale 200-icon set adds ~175 KB to every widget that mounts the provider. Import the icon component directly everywhere name resolution is not needed.

> [!NOTE]
> The full documentation — authoring rules, the measured bundle cost and a step-by-step guide to remove the icon system — lives in the **Icons → Icon System** page of the Storybook (`stories/components/Icons.mdx`).

## Learn More
Find more information about microfrontends and configuration details on [Modyo Docs](https://docs.modyo.com) & [Modyo Community](https://www.modyo.com/community)
