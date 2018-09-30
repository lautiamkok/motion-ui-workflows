'use strict'

// Import babel/polyfill.
// https://babeljs.io/docs/en/babel-polyfill/#usage-in-node--browserify--webpack
// Installation
// npm install --save @babel/polyfill
// Because this is a polyfill (which will run before your source code), we need it to be a dependency, not a devDependency
import "@babel/polyfill";

// Import node modules.
import DocReady from 'es6-docready'
import $ from 'jquery'
import 'jquery-ui-bundle'
import Foundation from 'foundation-sites'
import MotionUI from 'motion-ui'

// Import local modules.
import { getZFcurrentMediaQuery } from './utils'
import Sample from './modules/sample/index'

// Must wait until DOM is ready before initiating the modules.
DocReady(async () => {
  console.log("DOM is ready. Let's party")

  $(".button").click(function() {
    var $animation = $("#yeti").data("animation")
    MotionUI.animateIn($("#yeti"), $animation)
  })

  // Async sample.
  async function example3() {
    return 'example 3'
  }
  console.log(await example3())

  // Initiate foundation.
  // Must do it after Vue has rendered the view.
  $(document).foundation()

  // Sample class evocation.
  let s = new Sample()
  console.log(await s.multiply(2)) // return 4

  // Detect ZF sceen size on resize.
  window.addEventListener('resize', () => {
    var current = getZFcurrentMediaQuery()
    console.log('Screen size: ' + current)
  })

  // Detect browser visibility.
  // https://stackoverflow.com/questions/10328665/how-to-detect-browser-minimize-and-maximize-state-in-javascript
  document.addEventListener('visibilitychange', () => {
    console.log(document.hidden, document.visibilityState)
  }, false)
})
