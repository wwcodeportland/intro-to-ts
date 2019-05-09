# Intro to TypeScript
Intro to TypeScript for WWCode's May JS Study Night

### Preparation
In order to work with TypeScript, please install the following:
**Node:** I recommend installing via HomeBrew. To do that, run the following commands:
- Homebrew: `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- Node: `brew install node`
- Verify by running `node -v`.
**NPM:** This should come with your Node installation. Verify by running `npm -v`.
**VS Code:** (_recommended_) [Download Here](https://code.visualstudio.com/)


### Install TypeScript
Before we start coding, we need to install TypeScript. Open the terminal and type the following command:

```js
npm install -g typescript
```

Verify it's installed by running the command `tsc -v`. This will display the version of the TypeScript installed.


### The TypeScript Compiler
Next, we're going to learn how to start using TypeScript compilation and write a TypeScript configuration file.

Navigate into the `exercises/1-intro-to-compiling` folder. 

Run `tsc src/index.ts`. See the errors in your console?
Run `tsc src/index.ts --target ES2015` or `tsc src/index.ts --target ES2017`. Look at how the code has changed.

Now run `tsc`. Go into the newly created `lib` folder and look at the index.js file.

Learn more about tsconfigs here: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### Exercises: Code Sandbox

Use the code sandbox links here to run the exercises: https://codesandbox.io/s/l74z601pj9

BONUS: Run the exercises locally, using your own tsconfig.
