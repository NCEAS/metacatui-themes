# MetacatUI themes

This repository contains files for public themes for [MetacatUI](https://nceas.github.io/metacatui/), mainly themes created for [DataONE Plus Hosted Repositories](https://www.dataone.org/hosted-repo/).

For detailed instructions on how to create a custom theme, see the [MetacatUI Themes docs](https://nceas.github.io/metacatui/install/configuration/index.html)


## Adding a new theme to this repo

In the example below, the new theme is called `new-theme`. This should be replaced with the actual name of your theme.

1. Create a copy of the `src/theme-boilerplate` directory:
```bash
cp -r src/theme-boilerplate src/new-theme
```

2. Rename the theme subdirectory that you just copied

```bash
mv src/new-theme/js/themes/theme-boilerplate src/new-theme/js/themes/new-theme
```

3. Edit the repo `src/new-theme/js/themes/new-theme/config.js` file to reflect the MetacatUI behavior that the new repo wants (access policy default, editing controls, admin group id, repository name, etc.)

4. Edit the HTML templates in `src/new-theme/js/themes/new-theme/templates` and CSS in `src/new-theme/js/themes/new-theme/css` to create the look and feel for the repo.

5. For hosted repositories: Add the new repo's `urn:node` identifier to the `dataoneHostedRepos` list in the source MetacatUI AppModel. For example, this is what it will look like in `metacatui/src/js/models/AppModel.js`:
```js
      dataoneHostedRepos: ["urn:node:KNB", "urn:node:ARCTIC", "urn:node:CA_OPC", "urn:node:ESS_DIVE", "urn:node:CERP_SFWMD", "urn:node:Your-New-Theme"],
```

Make sure that change is pushed to the MetacatUI code base and deployed.
