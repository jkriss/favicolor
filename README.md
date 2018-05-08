## Installation

`npm install --save favicolor`

## Command line usage

Pass any valid css hex color or named color and favicolor will write the corresponding data uri to stdout.

I like using these for favicons, but you can use them however you like.

    $ favicolor steelblue
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAklEQVR4AewaftIAAAALSURBVGNwa9ryHwAFCgJ8ShCPgQAAAABJRU5ErkJggg==

You can then use that in an image tag

    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAklEQVR4AewaftIAAAALSURBVGNwa9ryHwAFCgJ8ShCPgQAAAABJRU5ErkJggg==" width="15" height="15">

Or a favicon tag:

    <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAklEQVR4AewaftIAAAALSURBVGNwa9ryHwAFCgJ8ShCPgQAAAABJRU5ErkJggg==">


## Examples

`favicolor steelblue` &rarr; <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAklEQVR4AewaftIAAAALSURBVGNwa9ryHwAFCgJ8ShCPgQAAAABJRU5ErkJggg==" width="15" height="15">


`favicolor "#bada55"` &rarr; <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAklEQVR4AewaftIAAAALSURBVGPYdSv0PwAHJALp25+8NQAAAABJRU5ErkJggg==
" width="15" height="15">

`favicolor rebeccapurple` &rarr; <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAklEQVR4AewaftIAAAALSURBVGNIM575HwAEZwIyPrllTwAAAABJRU5ErkJggg==" width="15" height="15">
