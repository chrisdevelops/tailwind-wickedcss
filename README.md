# tailwind-wickedcss
A simple tailwind plugin that adds WickedCSS animations by Kristoffer Andreasen to your project.

## Important Information
Tailwindcss >= v3.0.24 is required.

## Installation
Ensure tailwindcss is installed first, instructions can be found at https://tailwindcss.com/docs/installation.

Install the wickedcss plugin via npm or yarn
```
npm install --save-dev tailwind-wickedcss
```
```
yarn add tailwind-wickedcss
```

Add the plugin to your `tailwind.config.js` file
```
plugins: [
  // Other plugins
  require('./tailwind-wickedcss')
 ]
```

## Usage
Once installed you can use the animations the same way as [tailwinds base animations](https://tailwindcss.com/docs/animation#spin).

```
<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-barrel-roll h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    <!-- ... -->
  </svg>
  Processing...
</button>

```

### Tailwind Classes
To view a demo visit http://kristofferandreasen.github.io/wickedCSS/.

* .animate-barrel-roll
* .animate-bounce-in
* .animate-fade-in
* .animate-fade-out
* .animate-floater
* .animate-heartbeat
* .animate-pound
* .animate-pulse
* .animate-roller-left
* .animate-roller-right
* .animate-rotate-in
* .animate-rotate-in-left
* .animate-rotate-in-right
* .animate-rotation
* .animate-shake
* .animate-side-to-side
* .animate-slide-down
* .animate-slide-left
* .animate-slide-right
* .animate-slide-up
* .animate-spinner
* .animate-wiggle
* .animate-zoomer
* .animate-zoomer-out

### Variants
Out of the box these animations support `responsive` and `hover` variants.

## Credits
All credit goes to Kristoffer Andreasen for creating [WickedCSS Animations](http://kristofferandreasen.github.io/wickedCSS/).

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

