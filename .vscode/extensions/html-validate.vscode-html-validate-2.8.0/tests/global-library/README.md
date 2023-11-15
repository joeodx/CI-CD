# Global library

This test is supposed to run with a global installation of `html-validate`.
Make sure to install a global version before using this test.

## Preparation

    npm install --global html-validate
    cp -R tests/global-library /tmp/global-library
    code /tmp/global-library

## Usage

Open `test.html`.
A single problem should be present under the `<button>` element:

> `<button> is missing required "type" attribute` `html-validate(element-required-attributes)`

If no problem is present or an error message is displayed the bundled library could not be loaded.

If multiple problems are present the configuration file could not be loaded.
