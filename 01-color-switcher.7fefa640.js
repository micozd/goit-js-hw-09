var t=null;function e(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t=setTimeout(e,1e3)}document.querySelector("button[data-start]").addEventListener("click",(function(){this.disabled=!0,document.querySelector("button[data-stop]").disabled=!1,e()})),document.querySelector("button[data-stop]").addEventListener("click",(function(){this.disabled=!0,document.querySelector("button[data-start]").disabled=!1,clearTimeout(t),t=null,t=null}));
//# sourceMappingURL=01-color-switcher.7fefa640.js.map
