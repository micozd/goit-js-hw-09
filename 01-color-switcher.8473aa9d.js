!function(){function t(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),timeout=setTimeout(t,1e3)}document.querySelector("button[data-start]").addEventListener("click",(function(){this.disabled=!0,document.querySelector("button[data-stop]").disabled=!1,t()})),document.querySelector("button[data-stop]").addEventListener("click",(function(){this.disabled=!0,document.querySelector("button[data-start]").disabled=!1,clearTimeout(timeout),timeout=null}))}();
//# sourceMappingURL=01-color-switcher.8473aa9d.js.map
