## React generate SVG component CLI

This is the CLI for generating SVG components from SVG files.

**Only 2 dependencies for work with CLI.**

## Table of Contents

-   [Installation And Usage](#installation-and-usage)
-   [Arguments](#arguments)
-   [Screenshots](#screenshots)
-   [Contribution](#contribution)

## <a name="installation-and-usage"></a>Installation and Usage

Prerequisites: [Node.js](https://nodejs.org/) (`^12.22.0`, `^14.17.0`, or `>=16.0.0`) built with SSL support. (If you are using an official Node.js distribution, SSL is always built in.)

You can install using npm:

```sh
npm i react-svg-cli
```

After that, you can execute by the command inner package.json, or inner project folder:

```sh
react-svg-cli -d $PATH_TO_IN_DIR -o $PATH_TO_OUT_DIR
```

See the [Arguments](#arguments) for more information.

## <a name="arguments"></a>Arguments

### **Required arguments:**

_**-o $PATH**_ and _**-d $PATH**_ - required arguments _in_ and _out_ dir

```sh
react-svg-cli -o components/svg -d assets/icons/svg
```

_Also can be like this:_

_**--outPath=$PATH**_ and _**--inPath=$PATH**_ - the same above

```sh
react-svg-cli --outPath=components/svg --inPath=assets/icons/svg
```

### **Allowed arguments:**

_**-e $TYPE**_ or _**--extension=$TYPE**_ - extension type for out file

```sh
react-svg-cli ... -e .js

react-svg-cli ... --extension=.js
```

_**-f $PATH**_ or _**--file=$PATH**_ - path to IN file (svg)

```sh
react-svg-cli ... -f ./examples/test/test.svg

react-svg-cli ... --file=./examples/test/test.svg
```

## <a name="screenshots"></a>Screenshots

### Example of in svg file:

<center>
  <img src="https://raw.githubusercontent.com/lgtome/react-svg-cli/master/assets/inSvg.png" alt="in" />
</center>

### Example of out svg component file:

<center>
  <img src="https://raw.githubusercontent.com/lgtome/react-svg-cli/master/assets/outComponent.png" alt="out" />
</center>

## <a name="contribution"></a>Contribution

Show your ❤️ and support by giving a ⭐. Any suggestions, issues or PR's are welcome!

```

```
