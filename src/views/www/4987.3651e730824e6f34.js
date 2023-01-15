"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{4987:(u,d,o)=>{o.r(d),o.d(d,{LoginPageModule:()=>h});var s=o(6895),l=o(4006),a=o(2977),p=o(6630),n=o(4650),M=o(6240),P=o(847),C=o(415);const O=[{path:"",component:(()=>{class t{constructor(i,e,c,g,x){this.location=i,this.auth=e,this.util=c,this.router=g,this.snackbar=x,this.username="",this.passcode="",this.onLogin=()=>{this.util.isLoading=!0,this.auth.login(this.username,this.passcode).then(m=>{this.util.isLoading=!1,this.auth.redirectUrl?this.router.navigateByUrl(this.auth.redirectUrl):this.onCancel()}).catch(m=>{this.snackbar.openSnackBar(m),this.util.isLoading=!1})},this.onCancel=()=>{this.location.back()}}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(s.Ye),n.Y36(M.e),n.Y36(P.f),n.Y36(p.F0),n.Y36(C.o))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:13,vars:3,consts:[["position","floating","color","danger"],["type","text",3,"ngModel","ngModelChange"],["type","password",3,"ngModel","ngModelChange"],["appearance","fill",1,"divlogin"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(i,e){1&i&&(n._UZ(0,"ion-header"),n.TgZ(1,"ion-content")(2,"ion-item")(3,"ion-label",0),n._uU(4,"User Name *"),n.qZA(),n.TgZ(5,"ion-input",1),n.NdJ("ngModelChange",function(g){return e.username=g}),n.qZA()(),n.TgZ(6,"ion-item")(7,"ion-label",0),n._uU(8,"Passcode *"),n.qZA(),n.TgZ(9,"ion-input",2),n.NdJ("ngModelChange",function(g){return e.passcode=g}),n.qZA()(),n.TgZ(10,"div",3)(11,"ion-button",4),n.NdJ("click",function(){return e.onLogin()}),n._uU(12," Login "),n.qZA()()()),2&i&&(n.xp6(5),n.Q6J("ngModel",e.username),n.xp6(4),n.Q6J("ngModel",e.passcode),n.xp6(2),n.Q6J("disabled",""===e.passcode.trim()||""===e.username.trim()))},dependencies:[l.JJ,l.On,a.YG,a.W2,a.Gu,a.pK,a.Ie,a.Q$,a.j9],styles:['html.ios[_ngcontent-%COMP%]{--ion-default-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif}html.md[_ngcontent-%COMP%]{--ion-default-font: "Roboto", "Helvetica Neue", sans-serif}html[_ngcontent-%COMP%]{--ion-font-family: var(--ion-default-font)}body[_ngcontent-%COMP%]{background:var(--ion-background-color)}body.backdrop-no-scroll[_ngcontent-%COMP%]{overflow:hidden}html.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:first-of-type, html.ios[_ngcontent-%COMP%]   ion-modal.modal-sheet[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:first-of-type, html.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]   ion-footer[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:first-of-type{padding-top:6px}html.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type, html.ios[_ngcontent-%COMP%]   ion-modal.modal-sheet[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-of-type{padding-bottom:6px}html.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding-right:calc(var(--ion-safe-area-right) + 8px);padding-left:calc(var(--ion-safe-area-left) + 8px)}@media screen and (min-width: 768px){html.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]:first-of-type{--backdrop-opacity: .18}}ion-modal.modal-default[_ngcontent-%COMP%]:not(.overlay-hidden) ~ ion-modal.modal-default[_ngcontent-%COMP%]{--backdrop-opacity: 0;--box-shadow: none}html.ios[_ngcontent-%COMP%]   ion-modal.modal-card[_ngcontent-%COMP%]   .ion-page[_ngcontent-%COMP%]{border-top-left-radius:var(--border-radius)}.ion-color-primary[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-primary, #3880ff) !important;--ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;--ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;--ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important}.ion-color-secondary[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;--ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;--ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;--ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important}.ion-color-tertiary[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-tertiary, #5260ff) !important;--ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;--ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;--ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important}.ion-color-success[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-success, #2dd36f) !important;--ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;--ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;--ion-color-tint: var(--ion-color-success-tint, #42d77d) !important}.ion-color-warning[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-warning, #ffc409) !important;--ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;--ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;--ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important}.ion-color-danger[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-danger, #eb445a) !important;--ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;--ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;--ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important}.ion-color-light[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-light, #f4f5f8) !important;--ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;--ion-color-contrast: var(--ion-color-light-contrast, #000) !important;--ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;--ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;--ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important}.ion-color-medium[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-medium, #92949c) !important;--ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;--ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-medium-shade, #808289) !important;--ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important}.ion-color-dark[_ngcontent-%COMP%]{--ion-color-base: var(--ion-color-dark, #222428) !important;--ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;--ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;--ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;--ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;--ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important}.ion-page[_ngcontent-%COMP%]{left:0;right:0;top:0;bottom:0;display:flex;position:absolute;flex-direction:column;justify-content:space-between;contain:layout size style;overflow:hidden;z-index:0}ion-modal[_ngcontent-%COMP%]   .ion-page[_ngcontent-%COMP%]:not(ion-nav   .ion-page)[_ngcontent-%COMP%]{position:relative;contain:layout style;height:100%}.split-pane-visible[_ngcontent-%COMP%] > .ion-page.split-pane-main[_ngcontent-%COMP%]{position:relative}ion-route[_ngcontent-%COMP%], ion-route-redirect[_ngcontent-%COMP%], ion-router[_ngcontent-%COMP%], ion-select-option[_ngcontent-%COMP%], ion-nav-controller[_ngcontent-%COMP%], ion-menu-controller[_ngcontent-%COMP%], ion-action-sheet-controller[_ngcontent-%COMP%], ion-alert-controller[_ngcontent-%COMP%], ion-loading-controller[_ngcontent-%COMP%], ion-modal-controller[_ngcontent-%COMP%], ion-picker-controller[_ngcontent-%COMP%], ion-popover-controller[_ngcontent-%COMP%], ion-toast-controller[_ngcontent-%COMP%], .ion-page-hidden[_ngcontent-%COMP%], [hidden][_ngcontent-%COMP%]{display:none!important}.ion-page-invisible[_ngcontent-%COMP%]{opacity:0}.can-go-back[_ngcontent-%COMP%] > ion-header[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{display:block}html.plt-ios.plt-hybrid[_ngcontent-%COMP%], html.plt-ios.plt-pwa[_ngcontent-%COMP%]{--ion-statusbar-padding: 20px}@supports (padding-top: 20px){html[_ngcontent-%COMP%]{--ion-safe-area-top: var(--ion-statusbar-padding)}}@supports (padding-top: constant(safe-area-inset-top)){html[_ngcontent-%COMP%]{--ion-safe-area-top: constant(safe-area-inset-top);--ion-safe-area-bottom: constant(safe-area-inset-bottom);--ion-safe-area-left: constant(safe-area-inset-left);--ion-safe-area-right: constant(safe-area-inset-right)}}@supports (padding-top: env(safe-area-inset-top)){html[_ngcontent-%COMP%]{--ion-safe-area-top: env(safe-area-inset-top);--ion-safe-area-bottom: env(safe-area-inset-bottom);--ion-safe-area-left: env(safe-area-inset-left);--ion-safe-area-right: env(safe-area-inset-right)}}ion-card.ion-color[_ngcontent-%COMP%]   .ion-inherit-color[_ngcontent-%COMP%], ion-card-header.ion-color[_ngcontent-%COMP%]   .ion-inherit-color[_ngcontent-%COMP%]{color:inherit}.menu-content[_ngcontent-%COMP%]{transform:translateZ(0)}.menu-content-open[_ngcontent-%COMP%]{cursor:pointer;touch-action:manipulation;pointer-events:none}.ios[_ngcontent-%COMP%]   .menu-content-reveal[_ngcontent-%COMP%]{box-shadow:-8px 0 42px #00000014}[dir=rtl].ios[_ngcontent-%COMP%]   .menu-content-reveal[_ngcontent-%COMP%]{box-shadow:8px 0 42px #00000014}.md[_ngcontent-%COMP%]   .menu-content-reveal[_ngcontent-%COMP%], .md[_ngcontent-%COMP%]   .menu-content-push[_ngcontent-%COMP%]{box-shadow:4px 0 16px #0000002e}ion-accordion-group.accordion-group-expand-inset[_ngcontent-%COMP%] > ion-accordion[_ngcontent-%COMP%]:first-of-type{border-top-left-radius:8px;border-top-right-radius:8px}ion-accordion-group.accordion-group-expand-inset[_ngcontent-%COMP%] > ion-accordion[_ngcontent-%COMP%]:last-of-type{border-bottom-left-radius:8px;border-bottom-right-radius:8px}ion-accordion-group[_ngcontent-%COMP%] > ion-accordion[_ngcontent-%COMP%]:last-of-type   ion-item[slot=header][_ngcontent-%COMP%]{--border-width: 0px}ion-accordion.accordion-animated[_ngcontent-%COMP%] > [slot=header][_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%]{transition:.3s transform cubic-bezier(.25,.8,.5,1)}@media (prefers-reduced-motion: reduce){ion-accordion[_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%]{transition:none!important}}ion-accordion.accordion-expanding[_ngcontent-%COMP%] > [slot=header][_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%], ion-accordion.accordion-expanded[_ngcontent-%COMP%] > [slot=header][_ngcontent-%COMP%]   .ion-accordion-toggle-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}ion-accordion-group.accordion-group-expand-inset.md[_ngcontent-%COMP%] > ion-accordion.accordion-previous[_ngcontent-%COMP%]   ion-item[slot=header][_ngcontent-%COMP%]{--border-width: 0px;--inner-border-width: 0px}ion-accordion-group.accordion-group-expand-inset.md[_ngcontent-%COMP%] > ion-accordion.accordion-expanding[_ngcontent-%COMP%]:first-of-type, ion-accordion-group.accordion-group-expand-inset.md[_ngcontent-%COMP%] > ion-accordion.accordion-expanded[_ngcontent-%COMP%]:first-of-type{margin-top:0}ion-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-date-and-time-value{text-align:start}.ion-datetime-button-overlay[_ngcontent-%COMP%]{--width: fit-content;--height: fit-content}.ion-datetime-button-overlay[_ngcontent-%COMP%]   ion-datetime.datetime-grid[_ngcontent-%COMP%]{width:320px;min-height:320px}audio[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], progress[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{vertical-align:baseline}audio[_ngcontent-%COMP%]:not([controls]){display:none;height:0}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:700}img[_ngcontent-%COMP%]{max-width:100%;border:0}svg[_ngcontent-%COMP%]:not(:root){overflow:hidden}figure[_ngcontent-%COMP%]{margin:1em 40px}hr[_ngcontent-%COMP%]{height:1px;border-width:0;box-sizing:content-box}pre[_ngcontent-%COMP%]{overflow:auto}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], samp[_ngcontent-%COMP%]{font-family:monospace,monospace;font-size:1em}label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;line-height:normal}textarea[_ngcontent-%COMP%]{overflow:auto;height:auto;font:inherit;color:inherit}textarea[_ngcontent-%COMP%]::placeholder{padding-left:2px}form[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{margin:0;font:inherit;color:inherit}html[_ngcontent-%COMP%]   input[type=button][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{cursor:pointer;-webkit-appearance:button}a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], a[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], button[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .ion-tappable[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   span[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], [tappable][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{touch-action:manipulation}a[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{pointer-events:none}button[_ngcontent-%COMP%]{border:0;border-radius:0;font-family:inherit;font-style:inherit;font-feature-settings:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;-webkit-appearance:button}[tappable][_ngcontent-%COMP%]{cursor:pointer}a[disabled][_ngcontent-%COMP%], button[disabled][_ngcontent-%COMP%], html[_ngcontent-%COMP%]   input[disabled][_ngcontent-%COMP%]{cursor:default}button[_ngcontent-%COMP%]::-moz-focus-inner, input[_ngcontent-%COMP%]::-moz-focus-inner{padding:0;border:0}input[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%]{padding:0;box-sizing:border-box}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}input[type=search][_ngcontent-%COMP%]::-webkit-search-cancel-button, input[type=search][_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:0}*[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}html[_ngcontent-%COMP%]{width:100%;height:100%;-webkit-text-size-adjust:100%;text-size-adjust:100%}html[_ngcontent-%COMP%]:not(.hydrated)   body[_ngcontent-%COMP%]{display:none}html.ion-ce[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{display:block}html.plt-pwa[_ngcontent-%COMP%]{height:100vh}body[_ngcontent-%COMP%]{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:0;position:fixed;width:100%;max-width:100%;height:100%;max-height:100%;transform:translateZ(0);text-rendering:optimizeLegibility;overflow:hidden;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;overscroll-behavior-y:none;-webkit-text-size-adjust:none;text-size-adjust:none}html[_ngcontent-%COMP%]{font-family:var(--ion-font-family)}a[_ngcontent-%COMP%]{background-color:transparent;color:var(--ion-color-primary, #3880ff)}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:10px;font-weight:500;line-height:1.2}h1[_ngcontent-%COMP%]{margin-top:20px;font-size:26px}h2[_ngcontent-%COMP%]{margin-top:18px;font-size:24px}h3[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%]{font-size:18px}h6[_ngcontent-%COMP%]{font-size:16px}small[_ngcontent-%COMP%]{font-size:75%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup[_ngcontent-%COMP%]{top:-.5em}sub[_ngcontent-%COMP%]{bottom:-.25em}.ion-hide[_ngcontent-%COMP%], .ion-hide-up[_ngcontent-%COMP%], .ion-hide-down[_ngcontent-%COMP%]{display:none!important}@media (min-width: 576px){.ion-hide-sm-up[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 575.98px){.ion-hide-sm-down[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 768px){.ion-hide-md-up[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 767.98px){.ion-hide-md-down[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 992px){.ion-hide-lg-up[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 991.98px){.ion-hide-lg-down[_ngcontent-%COMP%]{display:none!important}}@media (min-width: 1200px){.ion-hide-xl-up[_ngcontent-%COMP%]{display:none!important}}@media (max-width: 1199.98px){.ion-hide-xl-down[_ngcontent-%COMP%]{display:none!important}}.ion-no-padding[_ngcontent-%COMP%]{--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;padding:0}.ion-padding[_ngcontent-%COMP%]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-padding[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;padding-inline-start:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}.ion-padding-top[_ngcontent-%COMP%]{--padding-top: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px)}.ion-padding-start[_ngcontent-%COMP%]{--padding-start: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-padding-start[_ngcontent-%COMP%]{padding-left:unset;padding-inline-start:var(--ion-padding, 16px)}}.ion-padding-end[_ngcontent-%COMP%]{--padding-end: var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-padding-end[_ngcontent-%COMP%]{padding-right:unset;padding-inline-end:var(--ion-padding, 16px)}}.ion-padding-bottom[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-vertical[_ngcontent-%COMP%]{--padding-top: var(--ion-padding, 16px);--padding-bottom: var(--ion-padding, 16px);padding-top:var(--ion-padding, 16px);padding-bottom:var(--ion-padding, 16px)}.ion-padding-horizontal[_ngcontent-%COMP%]{--padding-start: var(--ion-padding, 16px);--padding-end: var(--ion-padding, 16px);padding-left:var(--ion-padding, 16px);padding-right:var(--ion-padding, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-padding-horizontal[_ngcontent-%COMP%]{padding-left:unset;padding-right:unset;padding-inline-start:var(--ion-padding, 16px);padding-inline-end:var(--ion-padding, 16px)}}.ion-no-margin[_ngcontent-%COMP%]{--margin-start: 0;--margin-end: 0;--margin-top: 0;--margin-bottom: 0;margin:0}.ion-margin[_ngcontent-%COMP%]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-margin[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;margin-inline-start:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}.ion-margin-top[_ngcontent-%COMP%]{--margin-top: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px)}.ion-margin-start[_ngcontent-%COMP%]{--margin-start: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-margin-start[_ngcontent-%COMP%]{margin-left:unset;margin-inline-start:var(--ion-margin, 16px)}}.ion-margin-end[_ngcontent-%COMP%]{--margin-end: var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-margin-end[_ngcontent-%COMP%]{margin-right:unset;margin-inline-end:var(--ion-margin, 16px)}}.ion-margin-bottom[_ngcontent-%COMP%]{--margin-bottom: var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-vertical[_ngcontent-%COMP%]{--margin-top: var(--ion-margin, 16px);--margin-bottom: var(--ion-margin, 16px);margin-top:var(--ion-margin, 16px);margin-bottom:var(--ion-margin, 16px)}.ion-margin-horizontal[_ngcontent-%COMP%]{--margin-start: var(--ion-margin, 16px);--margin-end: var(--ion-margin, 16px);margin-left:var(--ion-margin, 16px);margin-right:var(--ion-margin, 16px)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.ion-margin-horizontal[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;margin-inline-start:var(--ion-margin, 16px);margin-inline-end:var(--ion-margin, 16px)}}.ion-float-left[_ngcontent-%COMP%]{float:left!important}.ion-float-right[_ngcontent-%COMP%]{float:right!important}.ion-float-start[_ngcontent-%COMP%]{float:left!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-start[_ngcontent-%COMP%]{float:right!important}.ion-float-end[_ngcontent-%COMP%]{float:right!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-end[_ngcontent-%COMP%]{float:left!important}@media (min-width: 576px){.ion-float-sm-left[_ngcontent-%COMP%]{float:left!important}.ion-float-sm-right[_ngcontent-%COMP%]{float:right!important}.ion-float-sm-start[_ngcontent-%COMP%]{float:left!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-sm-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-sm-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-sm-start[_ngcontent-%COMP%]{float:right!important}.ion-float-sm-end[_ngcontent-%COMP%]{float:right!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-sm-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-sm-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-sm-end[_ngcontent-%COMP%]{float:left!important}}@media (min-width: 768px){.ion-float-md-left[_ngcontent-%COMP%]{float:left!important}.ion-float-md-right[_ngcontent-%COMP%]{float:right!important}.ion-float-md-start[_ngcontent-%COMP%]{float:left!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-md-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-md-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-md-start[_ngcontent-%COMP%]{float:right!important}.ion-float-md-end[_ngcontent-%COMP%]{float:right!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-md-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-md-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-md-end[_ngcontent-%COMP%]{float:left!important}}@media (min-width: 992px){.ion-float-lg-left[_ngcontent-%COMP%]{float:left!important}.ion-float-lg-right[_ngcontent-%COMP%]{float:right!important}.ion-float-lg-start[_ngcontent-%COMP%]{float:left!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-lg-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-lg-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-lg-start[_ngcontent-%COMP%]{float:right!important}.ion-float-lg-end[_ngcontent-%COMP%]{float:right!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-lg-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-lg-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-lg-end[_ngcontent-%COMP%]{float:left!important}}@media (min-width: 1200px){.ion-float-xl-left[_ngcontent-%COMP%]{float:left!important}.ion-float-xl-right[_ngcontent-%COMP%]{float:right!important}.ion-float-xl-start[_ngcontent-%COMP%]{float:left!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-xl-start[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-xl-start[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-xl-start[_ngcontent-%COMP%]{float:right!important}.ion-float-xl-end[_ngcontent-%COMP%]{float:right!important}[dir=rtl][_ngcontent-%COMP%]   .ion-float-xl-end[_ngcontent-%COMP%], [dir=rtl][_nghost-%COMP%]   .ion-float-xl-end[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .ion-float-xl-end[_ngcontent-%COMP%]{float:left!important}}.ion-text-center[_ngcontent-%COMP%]{text-align:center!important}.ion-text-justify[_ngcontent-%COMP%]{text-align:justify!important}.ion-text-start[_ngcontent-%COMP%]{text-align:start!important}.ion-text-end[_ngcontent-%COMP%]{text-align:end!important}.ion-text-left[_ngcontent-%COMP%]{text-align:left!important}.ion-text-right[_ngcontent-%COMP%]{text-align:right!important}.ion-text-nowrap[_ngcontent-%COMP%]{white-space:nowrap!important}.ion-text-wrap[_ngcontent-%COMP%]{white-space:normal!important}@media (min-width: 576px){.ion-text-sm-center[_ngcontent-%COMP%]{text-align:center!important}.ion-text-sm-justify[_ngcontent-%COMP%]{text-align:justify!important}.ion-text-sm-start[_ngcontent-%COMP%]{text-align:start!important}.ion-text-sm-end[_ngcontent-%COMP%]{text-align:end!important}.ion-text-sm-left[_ngcontent-%COMP%]{text-align:left!important}.ion-text-sm-right[_ngcontent-%COMP%]{text-align:right!important}.ion-text-sm-nowrap[_ngcontent-%COMP%]{white-space:nowrap!important}.ion-text-sm-wrap[_ngcontent-%COMP%]{white-space:normal!important}}@media (min-width: 768px){.ion-text-md-center[_ngcontent-%COMP%]{text-align:center!important}.ion-text-md-justify[_ngcontent-%COMP%]{text-align:justify!important}.ion-text-md-start[_ngcontent-%COMP%]{text-align:start!important}.ion-text-md-end[_ngcontent-%COMP%]{text-align:end!important}.ion-text-md-left[_ngcontent-%COMP%]{text-align:left!important}.ion-text-md-right[_ngcontent-%COMP%]{text-align:right!important}.ion-text-md-nowrap[_ngcontent-%COMP%]{white-space:nowrap!important}.ion-text-md-wrap[_ngcontent-%COMP%]{white-space:normal!important}}@media (min-width: 992px){.ion-text-lg-center[_ngcontent-%COMP%]{text-align:center!important}.ion-text-lg-justify[_ngcontent-%COMP%]{text-align:justify!important}.ion-text-lg-start[_ngcontent-%COMP%]{text-align:start!important}.ion-text-lg-end[_ngcontent-%COMP%]{text-align:end!important}.ion-text-lg-left[_ngcontent-%COMP%]{text-align:left!important}.ion-text-lg-right[_ngcontent-%COMP%]{text-align:right!important}.ion-text-lg-nowrap[_ngcontent-%COMP%]{white-space:nowrap!important}.ion-text-lg-wrap[_ngcontent-%COMP%]{white-space:normal!important}}@media (min-width: 1200px){.ion-text-xl-center[_ngcontent-%COMP%]{text-align:center!important}.ion-text-xl-justify[_ngcontent-%COMP%]{text-align:justify!important}.ion-text-xl-start[_ngcontent-%COMP%]{text-align:start!important}.ion-text-xl-end[_ngcontent-%COMP%]{text-align:end!important}.ion-text-xl-left[_ngcontent-%COMP%]{text-align:left!important}.ion-text-xl-right[_ngcontent-%COMP%]{text-align:right!important}.ion-text-xl-nowrap[_ngcontent-%COMP%]{white-space:nowrap!important}.ion-text-xl-wrap[_ngcontent-%COMP%]{white-space:normal!important}}.ion-text-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}.ion-text-lowercase[_ngcontent-%COMP%]{text-transform:lowercase!important}.ion-text-capitalize[_ngcontent-%COMP%]{text-transform:capitalize!important}@media (min-width: 576px){.ion-text-sm-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}.ion-text-sm-lowercase[_ngcontent-%COMP%]{text-transform:lowercase!important}.ion-text-sm-capitalize[_ngcontent-%COMP%]{text-transform:capitalize!important}}@media (min-width: 768px){.ion-text-md-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}.ion-text-md-lowercase[_ngcontent-%COMP%]{text-transform:lowercase!important}.ion-text-md-capitalize[_ngcontent-%COMP%]{text-transform:capitalize!important}}@media (min-width: 992px){.ion-text-lg-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}.ion-text-lg-lowercase[_ngcontent-%COMP%]{text-transform:lowercase!important}.ion-text-lg-capitalize[_ngcontent-%COMP%]{text-transform:capitalize!important}}@media (min-width: 1200px){.ion-text-xl-uppercase[_ngcontent-%COMP%]{text-transform:uppercase!important}.ion-text-xl-lowercase[_ngcontent-%COMP%]{text-transform:lowercase!important}.ion-text-xl-capitalize[_ngcontent-%COMP%]{text-transform:capitalize!important}}.ion-align-self-start[_ngcontent-%COMP%]{align-self:flex-start!important}.ion-align-self-end[_ngcontent-%COMP%]{align-self:flex-end!important}.ion-align-self-center[_ngcontent-%COMP%]{align-self:center!important}.ion-align-self-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.ion-align-self-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.ion-align-self-auto[_ngcontent-%COMP%]{align-self:auto!important}.ion-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.ion-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.ion-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.ion-justify-content-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.ion-justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.ion-justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.ion-justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.ion-justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.ion-justify-content-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.ion-align-items-start[_ngcontent-%COMP%]{align-items:flex-start!important}.ion-align-items-center[_ngcontent-%COMP%]{align-items:center!important}.ion-align-items-end[_ngcontent-%COMP%]{align-items:flex-end!important}.ion-align-items-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.ion-align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}ion-content[_ngcontent-%COMP%]{--background: url(bg.b1a8fc2456b24816.jpeg) center center fixed;background-size:100vw 100vh}ion-item[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]{--background: transparent}mat-card[_ngcontent-%COMP%], mat-list[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{background:transparent}.mat-table[_ngcontent-%COMP%], .searchbar-input.sc-ion-searchbar-md[_ngcontent-%COMP%], .searchbar-input.sc-ion-searchbar-md[_ngcontent-%COMP%]{background:rgba(255,255,255,.4549019608)}.dangercolor[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.primarycolor[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.newbill-full-width[_ngcontent-%COMP%]{width:100%}.btn[_ngcontent-%COMP%]{float:right}.divlogin[_ngcontent-%COMP%]{justify-content:center;display:flex}']}),t})(),data:{title:"Login",hideMenu:!0}}];let _=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[p.Bz.forChild(O),p.Bz]}),t})();var f=o(1373);let h=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,l.u5,a.Pc,_,f.q]}),t})()}}]);