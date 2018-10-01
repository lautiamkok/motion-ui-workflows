Motion UI Basic Workflow
===========

> Setting up a basic Motion UI workflow.

Read the post [here](https://www.codementor.io/lautiamkok/setting-a-workflow-for-using-motion-ui-nx1dpztlu) about this repository.

Quick start
=============

``` bash
# install dependencies
$ npm install

# install SASS globally
$ sudo npm install -g sass

# process SASS file
$ sass input.scss output.css

# watch all files in the app/sass folder for change and and compile CSS to the public/stylesheets folder
sass --watch app/sass:public/stylesheets
Sass is watching for changes. Press Ctrl-C to stop.

# another example to watch the changes and output in the same folder
$ sass --watch css:css
```

Access your project on any browser.

# References

* https://sass-lang.com/install
* https://sass-lang.com/guide
* https://github.com/zurb/motion-ui/blob/master/docs/installation.md
* https://zurb.com/playground/motion-ui
* https://www.creativebloq.com/web-design/create-custom-animations-motion-ui-21619210
* https://www.hongkiat.com/blog/animations-transitions-motion-ui/
