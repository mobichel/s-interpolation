# Smart Interpolation

The simple application which allows editing specific parts of provided text.

## Template format
- {number[:default]}
- {string[:default]}
- {list:item1,item2,...[:default]}
- {range:min,max}

## Browser Support

Latest stable versions of Chrome, Firefox and Safari are supported.

## Dependencies

Run `npm install` to install dependencies.
Run `npm install -g @angular/cli` to install [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
Use the `-prod` flag for a production build. 
Due to [#2](https://github.com/mobichel/s-interpolation/issues/2) you need to specify additional flags `--build-optimizer false --aot false` for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
