"use strict";function n(n){if(n&&n.__esModule)return n;var e=Object.create(null);return n&&Object.keys(n).forEach((function(t){if("default"!==t){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})}})),e.default=n,Object.freeze(e)}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(require("react")),t=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var t=n.flatMap((function(n){return n?n.split(/\s+/):[]})).filter((function(n){return!!n&&"undefined"!==n})).join(" ");return t.length<1?void 0:t},r=function(n){return n&&+n.replace(/[^\d,-]/g,"").replace(",",".")||0};!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}('/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after{\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgba(59, 130, 246, 0.5);\n    --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n    --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n    --tw-shadow: 0 0 rgba(0,0,0,0);\n    --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  \r\n}\n\n::backdrop{\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgba(59, 130, 246, 0.5);\n    --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n    --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n    --tw-shadow: 0 0 rgba(0,0,0,0);\n    --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  \r\n}\r\n.scrollbar-hidden::-webkit-scrollbar{\n    display: none\r\n}\r\n.scrollbar-hidden{\r\n\r\n    display: none;\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none\r\n}\r\n.flex{\n    display: flex\r\n}\r\n.h-full{\n    height: 100%\r\n}\r\n.h-5{\n    height: 1.25rem\r\n}\r\n.w-\\[300px\\]{\n    width: 300px\r\n}\r\n.w-full{\n    width: 100%\r\n}\r\n.w-5{\n    width: 1.25rem\r\n}\r\n.transform{\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))\r\n}\r\n.flex-row{\n    flex-direction: row\r\n}\r\n.items-center{\n    align-items: center\r\n}\r\n.justify-center{\n    justify-content: center\r\n}\r\n.space-y-1 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.25rem * (1 - var(--tw-space-y-reverse)));\n    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))\r\n}\r\n.space-x-1 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.25rem * (1 - var(--tw-space-x-reverse)));\n    margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))\r\n}\r\n.overflow-hidden{\n    overflow: hidden\r\n}\r\n.rounded-sm{\n    border-radius: 0.125rem\r\n}\r\n.rounded-full{\n    border-radius: 9999px\r\n}\r\n.border-\\[2px\\]{\n    border-width: 2px\r\n}\r\n.border-transparent{\n    border-color: transparent\r\n}\r\n.bg-cover{\n    background-size: cover\r\n}\r\n.bg-center{\n    background-position: center\r\n}\r\n.bg-no-repeat{\n    background-repeat: no-repeat\r\n}\r\n.pt-2{\n    padding-top: 0.5rem\r\n}\r\n.text-\\[10px\\]{\n    font-size: 10px\r\n}\r\n.text-white{\n    --tw-text-opacity: 1;\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\r\n}\r\n.filter{\n    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)\r\n}\r\n.transition-all{\n    transition-property: all;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms\r\n}\r\n.ease-in{\n    transition-timing-function: cubic-bezier(0.4, 0, 1, 1)\r\n}\r\n');exports.ReactMinimalGallery=function(n){for(var o=n.images,a=n.containerClassName,i=void 0===a?"w-[300px] space-y-1":a,s=n.mainImageClassName,l=n.paginationColor,c=void 0===l?"#1a1a1a":l,d=n.width,u=void 0===d?400:d,h=n.thumbnailWidth,p=void 0===h?100:h,b=n.hoverColor,w="string"==typeof u?r(u):u,m="string"==typeof p?r(p):p,f=e.useState(o[0]),g=f[0],y=f[1],v=e.useState(!1),x=v[0],k=v[1],z=e.useState(1),C=z[0],S=z[1],E=e.useCallback((function(n){y(n)}),[]),j=Math.ceil(o.length/(w/m)),M=[],N=0;N<j;N++)M.push(N+1);var R=o.slice(Math.floor(w/m)*(C-1),(C+1)*Math.ceil(w/m));return e.createElement("div",{className:t(i),style:{width:"".concat(w,"px"),height:"".concat(w,"px")}},e.createElement("div",{className:t("overflow-hidden rounded-sm"),style:{width:"".concat(w,"px"),height:"".concat(w,"px")}},e.createElement("div",{className:t("bg-cover bg-center h-full w-full rounded-sm",s),style:{backgroundImage:"url(".concat(g.url,")"),transform:x?"scale(2)":"scale(1)",cursor:x?"zoom-out":"zoom-in"},onClick:function(){return k(!x)},onMouseLeave:function(){return k(!1)},id:"main-image"})),e.createElement("div",{className:"w-full flex flex-row space-x-1 overflow-hidden scrollbar-hidden"},e.createElement("div",{className:t("flex flex-row rounded-sm transition-all")},R.map((function(n){return e.createElement("div",{key:n.title,className:"rounded-sm",style:{width:"".concat(m,"px"),height:"".concat(m,"px")}},e.createElement("div",{className:t("w-full h-full bg-no-repeat bg-cover bg-center transition-all ease-in rounded-sm border-[2px] border-transparent"),style:{backgroundImage:"url(".concat(n.url,")")},onMouseOver:function(e){e.target.style.borderColor=b,E(n)},onMouseLeave:function(n){return n.target.style.borderColor="transparent"}}))})))),e.createElement("div",{className:"flex flex-row items-center justify-center space-x-1 pt-2"},M.map((function(n){return e.createElement("button",{key:n,className:"w-5 h-5 rounded-full text-white text-[10px] transition-all",style:{background:c,opacity:C===n?"1":"0.6"},onClick:function(){return S(n)}},n)}))))};