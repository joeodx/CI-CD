# No library

This test is supposed to run with no installation of `html-validate` present.
Make sure to remove any global installation before using this test.

## Preparation

    npm uninstall --global html-validate
    cp -R tests/no-library /tmp/no-library
    code /tmp/no-library

## Usage

Open `test.html`.
A single problem should be present under the `<button>` element:

> `<button> is missing required "type" attribute` `html-validate(element-required-attributes)`

If no problem is present or an error message is displayed the bundled library could not be loaded.

If multiple problems are present the configuration file could not be loaded.
