// Custom JS code can go here
// You can customize Reveal options:
Reveal.configure({
  "center": false,
  "dependencies": [
    // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
    { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },

    // Interpret Markdown in <section> elements
    { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },

    // Syntax highlight for <code> elements
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

    // Zoom in and out with Alt+click
    { src: 'plugin/zoom-js/zoom.js', async: true },

    // Speaker notes
    { src: 'plugin/notes/notes.js', async: true },

    // Remote control your reveal.js presentation using a touch device
    { src: 'plugin/remotes/remotes.js', async: true },

    { src: 'js/code-focus.js', async: true }
  ]});


// (an outdated version of) http://headjs.com/ is also loaded
//head.ready("codeblock.js", function () {

//});
