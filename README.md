# {minor tweaks}

[![Build Status](https://travis-ci.org/dunstontc/dark-plus-syntax.svg?branch=master)](https://travis-ci.org/dunstontc/dark-plus-syntax)
[![GitHub issues](https://img.shields.io/github/issues/dunstontc/dark-plus-syntax.svg)](https://github.com/dunstontc/dark-plus-syntax/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dunstontc/dark-plus-syntax/blob/master/LICENSE)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/dunstontc.dark-plus-syntax.svg?style=flat&color=blue)](https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax)
[![Version](https://vsmarketplacebadge.apphb.com/version-short/dunstontc.dark-plus-syntax.svg?style=flat&color=blue)](https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax)

<div align="center">
  <a href="https://github.com/Microsoft/vscode">
    <img src="https://raw.githubusercontent.com/dunstontc/dark-plus-syntax/master/dist/assets/512.png" alt="logo">
  </a>
</div>

**Enjoy!**


## Supported Languages

- C#
- C/C++
- Crystal
- CSS
    - SCSS
    - Stylus
- Elixir
- Erlang
- Go
- Haskell
- HTML
    - ECR/EEX/EJS/ERB
    - Handlebars
    - Jinja2
    - Pug/Jade
    - Twig
    - Liquid
    - CFML
- Java
    - Kotlin
    - Groovy
    - Scala
- JavaScript
    - TypeScript
    - JSX/TSX
- Markdown
- Python
- Ruby
    - Vagrant
    - Cucumber (Gherkin)
- Rust
- Swift
- Misc.
    - CMake
    - CSV/TSV
    - GraphQL
    - Makefile
    - NGINX
    - Terraform
    - JSON
    - TOML
    - YAML


## Tested With

> I'm not necessarily endorsing the plugins on this list, <br/>
> I've just made sure this theme takes advantage of the syntax groups that they define.
>
> If you like this theme but it doesn't support a certain language or plugin that you use, <br/>
> feel free to [open an issue](https://github.com/dunstontc/dark-plus-syntax/issues/new) and I'll look into it.

- [fr1zle/vscode-elixir](https://github.com/fr1zle/vscode-elixir)
- [bungcip/better-toml](https://github.com/bungcip/better-toml)
- [JustusAdam/language-haskell](https://github.com/JustusAdam/language-haskell)
- [dunstontc/viml](https://github.com/dunstontc/viml)
- [mauve/vscode-terraform](https://github.com/mauve/vscode-terraform)
- [jakebathman/mysql-syntax](https://github.com/jakebathman/mysql-syntax)
- [robinbentley/vscode-sass-indented](https://github.com/robinbentley/vscode-sass-indented)
- [mechatroner/vscode_rainbow_csv](https://github.com/mechatroner/vscode_rainbow_csv)
- [dunstontc/vscode-rust-syntax](https://github.com/dunstontc/vscode-rust-syntax)
- [goessner/mdmath](https://github.com/goessner/mdmath)
- [fwcd/KotlinLanguageServer](https://github.com/fwcd/KotlinLanguageServer)
- [angular/vscode-ng-language-service](https://github.com/angular/vscode-ng-language-service)
- JavaScript
    - [michaelgmcd/vscode-language-babel](https://github.com/michaelgmcd/vscode-language-babel)
    - [joshpeng/Sublime-Babel-VSCode](https://github.com/joshpeng/Sublime-Babel-VSCode)
    - [Digitalbrainstem/ejs-grammar](https://github.com/Digitalbrainstem/ejs-grammar)
    - [vuejs/vetur](https://github.com/vuejs/vetur)
- Go
    - [Microsoft/vscode-go](https://github.com/Microsoft/vscode-go)
    - [dunstontc/vscode-go-syntax](https://github.com/dunstontc/vscode-go-syntax)
- Ruby
    - [GingerBear/vscode-liquid](https://github.com/GingerBear/vscode-liquid)
    - [alexkrechik/VSCucumberAutoComplete](https://github.com/alexkrechik/VSCucumberAutoComplete)
- GraphQL
    - [kumarharsh/graphql-for-vscode](https://github.com/kumarharsh/graphql-for-vscode)
    - [prisma-labs/vscode-graphql](https://github.com/prisma-labs/vscode-graphql)


## Resources & References

- [Microsoft/vscode-textmate](https://github.com/Microsoft/vscode-textmate)
- [Scope Naming](https://www.sublimetext.com/docs/3/scope_naming.html)
- [VSCode Theme Colors](https://code.visualstudio.com/api/references/theme-color)


## Contributing

The code is split up (mainly by language) into individual TypeScript files, which live in `src/partials`.
So if you wanted to see the Ruby colors, for example, those are in `src/partials/ruby.js`.
Those files are imported, merged, and written out to `themes/dark-plus-syntax-color-theme.json`


### To make changes

1. Clone the project
2. Change a file in `src/partials`
2. Run `npm install` to install development dependencies.
3. Run `npm run build` to build the theme file with the new changes.
4. Go to  the *Debug* dropdown and click *Start Debugging* to run the new version of the theme locally.


## [License](https://github.com/dunstontc/dark-plus-syntax/blob/master/LICENSE)

## Italic Comments

This theme doesn't have italic comments, but you can get them by adding the following snippet to your `settings.json` file:

```json
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": [ "comment" ],
      "settings": { "fontStyle": "italic" },
    },
  ]
}
```

## License

Copyright © Clay Dunston <dunstontc@gmail.com>

Licensed under the [MIT][badge-link-license] license


[badge-image-ci]:       https://travis-ci.org/dunstontc/dark-plus-syntax.svg?branch=master
[badge-image-issues]:   https://img.shields.io/github/issues/dunstontc/dark-plus-syntax.svg
[badge-image-license]:  https://img.shields.io/badge/license-MIT-blue.svg
[badge-image-installs]: https://vsmarketplacebadge.apphb.com/installs-short/dunstontc.dark-plus-syntax.svg?style=flat&color=blue
[badge-image-version]:  https://vsmarketplacebadge.apphb.com/version-short/dunstontc.dark-plus-syntax.svg?style=flat&color=blue

[badge-link-ci]:       https://travis-ci.org/dunstontc/dark-plus-syntax
[badge-link-issues]:   https://github.com/dunstontc/dark-plus-syntax/issues
[badge-link-license]:  https://github.com/dunstontc/dark-plus-syntax/blob/master/LICENSE.md
[badge-link-installs]: https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax
[badge-link-version]:  https://marketplace.visualstudio.com/items?itemName=dunstontc.dark-plus-syntax
