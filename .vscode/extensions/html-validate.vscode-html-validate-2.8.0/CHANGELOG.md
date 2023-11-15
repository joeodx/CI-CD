# vscode-html-validate changelog

# [2.7.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.6.0...v2.7.0) (2023-03-26)

### Features

- bump minimum version of vscode to 1.56.0 ([be655f0](https://gitlab.com/html-validate/vscode-html-validate/commit/be655f0d523e27e6bd1e7122c0f70f3e3990f076))
- require node 14 or later ([b93c839](https://gitlab.com/html-validate/vscode-html-validate/commit/b93c839ffc0b94ae91084ba51ef371a0f0ab2f29))

# [2.6.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.5.0...v2.6.0) (2022-11-08)

### Features

- use bundled `html-validate` library as fallback ([4508424](https://gitlab.com/html-validate/vscode-html-validate/commit/4508424cfa7d47ee5751eb0a1819885ab05028bd)), closes [#11](https://gitlab.com/html-validate/vscode-html-validate/issues/11) [#9](https://gitlab.com/html-validate/vscode-html-validate/issues/9)

# [2.5.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.4.0...v2.5.0) (2022-11-06)

### Bug Fixes

- clear diagnostics from closed files ([96861c3](https://gitlab.com/html-validate/vscode-html-validate/commit/96861c3bfe47166ea5d6f1a3a0f66e073edf0c2d))

### Features

- activate only on html language or if workspace contains configuration ([458f44a](https://gitlab.com/html-validate/vscode-html-validate/commit/458f44a097a291170b2c6d04b66fd71eb8cb745a))
- watch js configuration for changes ([907cd86](https://gitlab.com/html-validate/vscode-html-validate/commit/907cd8631f1708d1ce15b45dff7ffa13c859ebf1))

# [2.4.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.3.1...v2.4.0) (2022-08-13)

### Features

- **server:** add yarn options in missing library errors ([0cfb0fc](https://gitlab.com/html-validate/vscode-html-validate/commit/0cfb0fce3e0a9aa72f925ed74679f337d7ec6a1a))
- **server:** search global Yarn packages for html-validate ([7d32546](https://gitlab.com/html-validate/vscode-html-validate/commit/7d325467317f44c728dc0d79e6011f1b42f6b71c))

## [2.3.1](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.3.0...v2.3.1) (2022-05-15)

### Bug Fixes

- **deps:** support html-validate v7 ([e8b827e](https://gitlab.com/html-validate/vscode-html-validate/commit/e8b827eb8f85a2d61a61fb24fef36cc3ef82bafc))

# [2.3.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.2.1...v2.3.0) (2022-02-27)

### Features

- require node 12 ([5d24ac6](https://gitlab.com/html-validate/vscode-html-validate/commit/5d24ac6768edd7c3cda2553117a5852076ed0841))

## [2.2.1](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.2.0...v2.2.1) (2021-11-12)

### Bug Fixes

- html-validate v6 compatibility ([648cefc](https://gitlab.com/html-validate/vscode-html-validate/commit/648cefca85489dae0a9d5a7818351ed0adf762df))

# [2.2.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.1.1...v2.2.0) (2021-09-09)

### Features

- slimmer package zip ([056cfa5](https://gitlab.com/html-validate/vscode-html-validate/commit/056cfa525835a20d3e4999d855f2a6a5c888c3d9))

## [2.1.1](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.1.0...v2.1.1) (2021-08-31)

### Bug Fixes

- **deps:** html-validate v5 compatibility ([5c17642](https://gitlab.com/html-validate/vscode-html-validate/commit/5c17642b6d3b692c674b3de58c5ef4890475027e))

# [2.1.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v2.0.0...v2.1.0) (2021-03-21)

### Bug Fixes

- extension requires vscode 1.52 ([6932c1a](https://gitlab.com/html-validate/vscode-html-validate/commit/6932c1aaf6d04bb0588f87b630ae3fd2e93e5ea2))

### Features

- checking javascript, markdown and vue enabled by default ([5b5b6aa](https://gitlab.com/html-validate/vscode-html-validate/commit/5b5b6aaeac2b4c5266915573014eab4b525205a5))
- test if file can be validated according to configuration ([6b21da6](https://gitlab.com/html-validate/vscode-html-validate/commit/6b21da617d90217540b23d36a547c3e570001657))

# [2.0.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.4.2...v2.0.0) (2021-03-18)

### Bug Fixes

- **deps:** update vscode-lsp to v7 ([744569d](https://gitlab.com/html-validate/vscode-html-validate/commit/744569d9631bbdb4e4a4b577bf3ebb9b6e15af0f))

### Features

- use global instead of bundled library when not present in workspace ([6ba1fde](https://gitlab.com/html-validate/vscode-html-validate/commit/6ba1fdee39700a519f5839e674df9476b6368ef6)), closes [#1](https://gitlab.com/html-validate/vscode-html-validate/issues/1) [#2](https://gitlab.com/html-validate/vscode-html-validate/issues/2) [#6](https://gitlab.com/html-validate/vscode-html-validate/issues/6)

### BREAKING CHANGES

- Previously the extension came with a bundled version of the
  `html-validate` library which was used when there was no version available in
  the workspace. The bundled copy has been dropped in favour of using a globally
  installed version (by the user, eg. `npm install -g html-validate`).

This comes with many benefits:

- Possible to use a `.htmlvalidate.json` configuration with plugins without
  depending on the library in `package.json` (typically useful for non-js projects)
- User is now in control of which version to use.

## [1.4.2](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.4.1...v1.4.2) (2021-01-15)

### Bug Fixes

- **deps:** bump `vscode-uri` to 3.0.2 ([5a1f0d9](https://gitlab.com/html-validate/vscode-html-validate/commit/5a1f0d944f0bf3a5273f69f1f806b807a64bf845))
- disable optimization ([0c599f0](https://gitlab.com/html-validate/vscode-html-validate/commit/0c599f093bc71af7bd9b1e1e931fff97735440ae))

## [1.4.1](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.4.0...v1.4.1) (2020-12-20)

### Bug Fixes

- **deps:** update dependency vscode-uri to v3 ([3130f71](https://gitlab.com/html-validate/vscode-html-validate/commit/3130f71bf8af5d4cc9929d5156865e96f1873e63))

# [1.4.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.3.1...v1.4.0) (2020-11-09)

### Features

- html-validate v4 compatibility ([0455bd9](https://gitlab.com/html-validate/vscode-html-validate/commit/0455bd9f83dc5e6ea36030637da0d64741ca1e11)), closes [#3](https://gitlab.com/html-validate/vscode-html-validate/issues/3)

## [1.3.1](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.3.0...v1.3.1) (2020-08-19)

### Bug Fixes

- **deps:** update dependency find-up to v5 ([e9daf50](https://gitlab.com/html-validate/vscode-html-validate/commit/e9daf50e7516b3f7146ee2674ff36650cfa767d4))
- **deps:** update dependency html-validate to v3 ([53ee3a3](https://gitlab.com/html-validate/vscode-html-validate/commit/53ee3a35d7920478fb5f5422d3cd14338add4a3c))
- **server:** allow html-validate@3 ([226d3fe](https://gitlab.com/html-validate/vscode-html-validate/commit/226d3feb914ef849152717b549356fd864412909))

# [1.3.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.2.0...v1.3.0) (2020-02-26)

### Features

- show extended documentation on hover ([9963c48](https://gitlab.com/html-validate/vscode-html-validate/commit/9963c48e2148540c7b21fae8fdbaac000c051e8a))

# [1.2.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.1.0...v1.2.0) (2020-02-17)

### Features

- code action for opening rule documentation ([2168b46](https://gitlab.com/html-validate/vscode-html-validate/commit/2168b46212996acc9832cf9c3747d2cd4e9554da))

# [1.1.0](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.0.4...v1.1.0) (2020-02-12)

### Bug Fixes

- actually show configuration error message dialog ([c731113](https://gitlab.com/html-validate/vscode-html-validate/commit/c7311134f19bc2ba145f753dec7625aac41ea958))
- reset diagnostics when all errors are fixed ([587240f](https://gitlab.com/html-validate/vscode-html-validate/commit/587240fee979cc5740dfd84a3ac58849b1b40b8b))
- watch elements.json for changes ([6cd7a85](https://gitlab.com/html-validate/vscode-html-validate/commit/6cd7a856a4b32c7c04d405f599fa2fc3fe279677))

### Features

- add json schema ([61dccce](https://gitlab.com/html-validate/vscode-html-validate/commit/61dcccefc9c37b52fe1d50e67362380b66b8ac79))

## [1.0.4](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.0.3...v1.0.4) (2020-02-10)

### Bug Fixes

- resolve module on windows ([98c4026](https://gitlab.com/html-validate/vscode-html-validate/commit/98c4026adf2e45abbbb811106bba25924fce3ab8))
- show unhandled exception and disable for document ([d8bcd8c](https://gitlab.com/html-validate/vscode-html-validate/commit/d8bcd8c748a073345e66b065abae934ca2739186))

## [1.0.3](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.0.2...v1.0.3) (2020-02-09)

### Bug Fixes

- fix missing `semver` dependency ([02a1f98](https://gitlab.com/html-validate/vscode-html-validate/commit/02a1f982551c22a0a95109a23558a9b282edde49))
- fix searching for `package.json` ([4738aff](https://gitlab.com/html-validate/vscode-html-validate/commit/4738affb29d4edc83faab01e2f7d65223d448f16))

## [1.0.2](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.0.1...v1.0.2) (2020-02-09)

### Bug Fixes

- **deps:** update dependency vscode-languageclient to v6 ([5ab7b8f](https://gitlab.com/html-validate/vscode-html-validate/commit/5ab7b8fdaac8e75a360202159680d3fd0ecf9600))
- **deps:** update dependency vscode-languageserver to v6 ([1f0ad7b](https://gitlab.com/html-validate/vscode-html-validate/commit/1f0ad7b9addde07bb467c3fd5ccd69db25787cc6))

## [1.0.1](https://gitlab.com/html-validate/vscode-html-validate/compare/v1.0.0...v1.0.1) (2020-01-05)

### Bug Fixes

- use bundled version if there is no project local ([3525a02](https://gitlab.com/html-validate/vscode-html-validate/commit/3525a02a55955f6810b6eaf4c89c80cb53e92eb3))

# 1.0.0 (2020-01-05)

### Bug Fixes

- **deps:** update dependency semver to v7 ([dd11b63](https://gitlab.com/html-validate/vscode-html-validate/commit/dd11b63673a310a1b74f6df0879ea765e997eded))
- fix no-empty-function ([4bb9e7c](https://gitlab.com/html-validate/vscode-html-validate/commit/4bb9e7c9f831e91b047357a8d8144e3d74ee35ee))
- revalidate documents after configuration change ([1bf3068](https://gitlab.com/html-validate/vscode-html-validate/commit/1bf3068c9e9acf9ace5991e601943f70a01e70bc))

### Features

- initial version ([079aba6](https://gitlab.com/html-validate/vscode-html-validate/commit/079aba6afc2089c103cfd01b5d9f75a9816a57bc))
- support other languages ([f70b613](https://gitlab.com/html-validate/vscode-html-validate/commit/f70b613d07972e651c05011d2010a7b83118b410))
- validate minimum required version ([db12f9d](https://gitlab.com/html-validate/vscode-html-validate/commit/db12f9df1d00986146a1a6f6181c3f42d2dbcd3c))
