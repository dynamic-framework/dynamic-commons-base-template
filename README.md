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

## Learn More
Find more information about microfrontends and configuration details on [Modyo Docs](https://docs.modyo.com) & [Modyo Community](https://www.modyo.com/community)
