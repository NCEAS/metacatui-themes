# MetacatUI themes

This repository contains files for public themes for [MetacatUI](https://nceas.github.io/metacatui/), mainly themes created for [DataONE Plus Hosted Repositories](https://www.dataone.org/hosted-repo/).

Themes distributed with MetacatUI can be found [here](https://github.com/NCEAS/metacatui/tree/main/src/js/themes).

For detailed instructions on how to create a custom theme, see the [MetacatUI Themes docs](https://nceas.github.io/metacatui/install/configuration/index.html)


## Adding a new theme to this repo

1. Use the `mk-theme.sh` script to copy of the `src/theme-boilerplate` directory and rename it for your new theme:
 
```bash
bash scripts/mk-theme.sh YOUR-THEME-NAME-HERE
```

2. Edit the repo `src/new-theme/js/themes/new-theme/config.js` file to reflect the MetacatUI behavior that the new repo wants (access policy default, editing controls, admin group id, repository name, etc.)

3. Edit the HTML templates in `src/new-theme/js/themes/new-theme/templates` and CSS in `src/new-theme/js/themes/new-theme/css` to create the look and feel for the repo.

4. For hosted repositories: Add the new repo's `urn:node` identifier to the `dataoneHostedRepos` list in the source MetacatUI AppModel. For example, this is what it will look like in `metacatui/src/js/models/AppModel.js`:
```js
      dataoneHostedRepos: ["urn:node:KNB", "urn:node:ARCTIC", "urn:node:CA_OPC", "urn:node:ESS_DIVE", "urn:node:CERP_SFWMD", "urn:node:Your-New-Theme"],
```

Make sure that change is pushed to the MetacatUI code base and deployed.
