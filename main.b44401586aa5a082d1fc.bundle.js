webpackJsonp([1],{"/2cm":function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"",""]),t.exports=t.exports.toString()},0:function(t,e,n){t.exports=n("cDNt")},"2SKQ":function(t,e){t.exports='<span class="editable" (click)="toggleMode(true)" (keyup.enter)="toggleMode(false)">\n  <mat-form-field class="form-field-short" *ngIf="editMode; else elseBlock">\n    <input matInput autofocus type="number" (blur)="toggleMode(false)" [value]="value" (change)="setValue($event.target.value)"/>\n  </mat-form-field>\n  <ng-template #elseBlock>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="value">{{value}}</span>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="!value">&nbsp;&nbsp;</span>\n  </ng-template>\n</span>\n\n'},"8MoF":function(t,e){t.exports="\n"},MfsK:function(t,e){t.exports='<span class="editable" (click)="toggleMode(true)" (keyup.enter)="toggleMode(false)">\n  <mat-form-field class="form-field" *ngIf="editMode; else elseBlock">\n    <mat-select autofocus [(ngModel)]="value">\n      <mat-option *ngFor="let option of options" [value]="option">{{option}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <ng-template #elseBlock>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="value">{{value}}</span>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="!value">&nbsp;&nbsp;</span>\n  </ng-template>\n</span>\n\n'},"R+rB":function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"",""]),t.exports=t.exports.toString()},YuZA:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="YuZA"},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n("LMZF"),i=n("x8Hs"),a=n("RyBE"),c=n("MCDL"),l=n("0nO6"),s=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},p=function(){function t(){this.title="Smart Interpolation"}return t=s([Object(r.m)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],t)}(),f=n("Un6q"),u=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.number=0]="number",t[t.range=1]="range",t[t.list=2]="list",t[t.string=3]="string"}(o||(o={}));var m=function(){function t(){}return t.prototype.validate=function(t){void 0===t&&(t="");for(var e=[],n=!0,o=0,r=t;o<r.length;o++){var i=r[o];if("{"===i&&e.push("{"),"}"===i){if("{"!==e.pop()){n=!1;break}}}return n=n&&0===e.length},t.prototype.escape=function(t){return void 0===t&&(t=""),t.replace(/{|}/g,function(t){return"{{'"+t+"'}}"})},t.prototype.parse=function(t){void 0===t&&(t="");var e=t;return this.validate(t)?(e=e.replace(/({[^{}]*})/g,function(t){var e=t.replace(/{|}/g,""),n=e.indexOf(":");n<0&&(n=e.length);var r=e.substr(0,n).trim();if(r in o){return"<"+r+' config="'+e.substr(n+1,e.length)+'"></'+r+">"}return t}),this.escape(e)):""},t=u([Object(r.A)(),d("design:paramtypes",[])],t)}(),h=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},y=function(){function t(t){this.el=t,this.TOOLTIP="Click to edit the value."}return t.prototype.toggleMode=function(t){this.editMode=t},t.prototype.clickout=function(t){this.el&&null!==t.target.parentNode&&(this.el.nativeElement.contains(t.target)||this.toggleMode(!1))},h([Object(r.y)("document:click",["$event"]),g("design:type",Function),g("design:paramtypes",[Object]),g("design:returntype",void 0)],t.prototype,"clickout",null),t=h([Object(r.m)({selector:"base",template:n("8MoF"),styles:[n("hdhB")],encapsulation:r._10.None}),g("design:paramtypes",[r.t])],t)}(),b=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),v=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},O=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return b(e,t),e.prototype.setValue=function(t){this.value=t},e=v([Object(r.m)({selector:"number",inputs:["value: config"],template:n("2SKQ"),styles:[n("hdhB"),n("wS8Q")],encapsulation:r._10.None})],e)}(y),_=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),j=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.ngOnInit=function(){var t=this.config.split(":");this.value=t[1]||"",this.options=(t[0]||"").split(",")},e.prototype.setValue=function(t){this.value=t},e=j([Object(r.m)({selector:"list",inputs:["config"],template:n("MfsK"),styles:[n("hdhB"),n("/2cm")],encapsulation:r._10.None})],e)}(y),R=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return R(e,t),e.prototype.ngOnInit=function(){var t=this.config.split(",");this.valueMin=t[0],this.valueMax=t[1]},e.prototype.setMinValue=function(t){this.valueMin=t},e.prototype.setMaxValue=function(t){this.valueMax=t},e=P([Object(r.m)({selector:"range",inputs:["config"],template:n("kiEn"),styles:[n("hdhB"),n("R+rB")],encapsulation:r._10.None})],e)}(y),T=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),I=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return T(e,t),e.prototype.setValue=function(t){this.value=t},e=I([Object(r.m)({selector:"string",inputs:["value: config"],template:n("rBbr"),styles:[n("hdhB"),n("fnH1")],encapsulation:r._10.None})],e)}(y),k=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},S=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},B=function(){function t(t){this.el=t}return t.prototype.ngOnInit=function(){this.el&&this.el.nativeElement.focus()},t=k([Object(r.s)({selector:"[autofocus]"}),S("design:paramtypes",[r.t])],t)}(),L=n("6lRS"),D=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},C=function(){function t(){}return t=D([Object(r.I)({imports:[f.a,l.d,L.e,L.c,L.d,L.g],declarations:[y,O,x,M,w,B],exports:[y,O,x,M,w]})],t)}(),A=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},Y=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},F=function(){function t(t,e,n){var o=this;this.componentFactoryResolver=t,this.parseService=e,this.compiler=n,this.template="The meeting took place in {number:2017}, at {list:Saint-Petersburg,Moscow,London:Moscow} and was attended by {string:Trump} in period of {range:1,11} September";this.formControl=new l.b("",[function(t){return o.parseService.validate(t.value)?null:{braces:!0}}])}return t.prototype.cleartTemplate=function(){this.template="",this.container.clear()},t.prototype.compileTemplate=function(){var t={template:'<span style="line-height:60px" class="mat-body-1">'+this.parseService.parse(this.template)+"</span>"},e=this.createComponentFactorySync(this.compiler,t,null);this.componentRef&&(this.componentRef.destroy(),this.componentRef=null),this.componentRef=this.container.createComponent(e)},t.prototype.createComponentFactorySync=function(t,e,n){var o=n||function(){return function(){}}(),i=Object(r.m)(e)(o),a=function(){function t(){}return t=A([Object(r.I)({imports:[f.a,C],declarations:[i]})],t)}();return t.compileModuleAndAllComponentsSync(a).componentFactories.find(function(t){return t.componentType===i})},A([Object(r._7)("container",{read:r._9}),Y("design:type",r._9)],t.prototype,"container",void 0),t=A([Object(r.m)({selector:"compiler",template:n("ij1f"),styles:[n("vLRA")]}),Y("design:paramtypes",[r.o,m,r.k])],t)}(),V=this&&this.__decorate||function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},N=function(){function t(){}return t=V([Object(r.I)({declarations:[p,F],imports:[a.a,l.d,l.i,c.a,L.f,L.c,L.d,L.a,C,L.b],providers:[m],bootstrap:[p]})],t)}();Object(r._13)(),Object(i.a)().bootstrapModule(N).catch(function(t){return console.log(t)})},efyd:function(t,e){t.exports='<mat-toolbar color="primary" class="mat-elevation-z6">Welcome to {{title}}!</mat-toolbar>\n<compiler></compiler>\n'},fnH1:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"",""]),t.exports=t.exports.toString()},hdhB:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,".editable>span{background:#673ab7;border-radius:4px;padding:4px;color:#fff}.form-field{width:120px}.form-field-short{width:50px}",""]),t.exports=t.exports.toString()},hxJY:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"mat-toolbar{position:fixed;top:0;left:0;right:0;z-index:2;width:100%}compiler{top:75px;position:relative}",""]),t.exports=t.exports.toString()},ij1f:function(t,e){t.exports='<div>\n  <mat-form-field>\n    <textarea matInput matTextareaAutosize placeholder="Text to be processed" [formControl]="formControl" [(ngModel)]="template"></textarea>\n    <mat-error *ngIf="formControl.hasError(\'braces\')">Mismathcing braces!</mat-error>\n  </mat-form-field>\n  <button color="primary" mat-button mat-raised-button (click)="compileTemplate()">Process</button>\n  <button color="warn" mat-button mat-raised-button (click)="cleartTemplate()">Clear</button>\n  <mat-card>\n    <mat-card-subtitle>Result:</mat-card-subtitle>\n    <mat-card-content><div #container></div></mat-card-content>\n  </mat-card>\n</div>\n'},kiEn:function(t,e){t.exports='<span class="editable" (click)="toggleMode(true)" (keyup.enter)="toggleMode(false)">\n  <mat-form-field class="form-field-short" *ngIf="editMode;">\n    <input matInput autofocus type="number" max="{{valueMax}}" [value]="valueMin" (change)="setMinValue($event.target.value)"/>\n  </mat-form-field>\n  <mat-form-field class="form-field-short" *ngIf="editMode; else elseBlock" >\n    <input matInput type="number" min="{{valueMin}}" [value]="valueMax" (change)="setMaxValue($event.target.value)"/>\n  </mat-form-field>\n  <ng-template #elseBlock>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="valueMin">{{valueMin}}</span>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="!valueMin">&nbsp;&nbsp;</span>\n      -\n    <span matTooltip="{{TOOLTIP}}" *ngIf="valueMax">{{valueMax}}</span>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="!valueMax">&nbsp;&nbsp;</span>\n  </ng-template>\n</span>\n'},rBbr:function(t,e){t.exports='<span class="editable" (click)="toggleMode(true)" (keyup.enter)="toggleMode(false)">\n  <mat-form-field class="form-field" *ngIf="editMode; else elseBlock">\n    <input matInput autofocus (blur)="toggleMode(false)" [value]="value" (change)="setValue($event.target.value)"/>\n  </mat-form-field>\n  <ng-template #elseBlock>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="value">{{value}}</span>\n    <span matTooltip="{{TOOLTIP}}" *ngIf="!value">&nbsp;&nbsp;</span>\n  </ng-template>\n</span>\n'},vLRA:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"mat-form-field{width:100%;padding-bottom:10px}mat-card{margin-top:20px}",""]),t.exports=t.exports.toString()},wS8Q:function(t,e,n){(t.exports=n("rP7Y")(!1)).push([t.i,"",""]),t.exports=t.exports.toString()}},[0]);