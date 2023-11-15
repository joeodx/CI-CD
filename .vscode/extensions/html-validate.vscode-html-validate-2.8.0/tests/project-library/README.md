# Project library

This test is supposed to run with a local installation of `html-validate`.
Make sure to install a local version before using this test.

## Preparation

    cp -R tests/project-library /tmp/project-library
    cd /tmp/project-library
    npm install
    code /tmp/project-library

## Usage

Open `test.html`.
A single problem should be present under the `<button>` element:

> `<button> is missing required "type" attribute` `html-validate(element-required-attributes)`

If no problem is present or an error message is displayed the bundled library could not be loaded.

If multiple problems are present the configuration file could not be loaded.
