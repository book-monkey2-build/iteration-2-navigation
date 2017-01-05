webpackJsonp([0,3],{207:function(t,e,n){"use strict";var o=n(0),i=n(340);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){this.books=[new i.a("9783864903571","Angular",["Johannes Hoppe","Danny Koppenhagen","Ferdinand Malcher","Gregor Woiwode"],new Date(2016,5,26),"Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen",5,[new i.b("https://angular-buch.com/angular-buch.jpg","Buchcover")],"Dieses Buch vermittelt einen Schnelleinstieg in Angular..."),new i.a("9783864901546","AngularJS",["Philipp Tarasiewicz","Robin Böhm"],new Date(2014,5,29),"Eine praktische Einführung",5,[new i.b("https://goo.gl/Y5lFVE","Buchcover")],"Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...")]}return t.prototype.getAll=function(){return this.books},t.prototype.getSingle=function(t){return this.books.find(function(e){return e.isbn===t})},t=r([n.i(o.c)(),a("design:paramtypes",[])],t)}()},336:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=336},337:function(t,e,n){"use strict";var o=n(0),i=n(275),r=n(207);n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.bs=t,this.route=e}return t.prototype.ngOnInit=function(){var t=this.route.snapshot.params;this.book=this.bs.getSingle(t.isbn)},t.prototype.getRating=function(t){return new Array(t)},t=a([n.i(o._2)({selector:"bm-book-details",template:n(600)}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(s="undefined"!=typeof i.b&&i.b)&&s||Object])],t);var e,s}()},338:function(t,e,n){"use strict";var o=n(0),i=n(207);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.bs=t}return t.prototype.ngOnInit=function(){this.books=this.bs.getAll()},t=r([n.i(o._2)({selector:"bm-book-list",template:n(602)}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}()},339:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=i([n.i(o._2)({selector:"bm-home",template:'\n  <div class="ui container">\n    <h1>Home</h1>\n    <p>Das ist der BookMonkey.</p>\n    <a routerLink="../books" class="ui red button">\n      Buchliste ansehen\n      <i class="right arrow icon"></i>\n    </a>\n  </div>\n  '}),r("design:paramtypes",[])],t)}()},340:function(t,e,n){"use strict";var o=n(627);n.d(e,"b",function(){return o.a}),n.d(e,"a",function(){return i});var i=function(){function t(t,e,n,o,i,r,a,c){this.isbn=t,this.title=e,this.authors=n,this.published=o,this.subtitle=i,this.rating=r,this.thumbnails=a,this.description=c}return t}()},343:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(n(629),n(419)),i=n(0),r=n(628),a=n(625);r.a.production&&n.i(i.a)(),n.i(o.a)().bootstrapModule(a.a)},599:function(t,e){t.exports='<div class="ui two item tabs menu">\n  <a routerLink="home"  routerLinkActive="active" class="item">Home</a>\n  <a routerLink="books" routerLinkActive="active" class="item">Bücher</a>\n</div>\n<router-outlet></router-outlet>\n'},600:function(t,e){t.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book?.thumbnails && book?.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book.title }}</h1>\n    <h3 class="ui header">{{ book.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book.isbn }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <i *ngFor="let r of getRating(book.rating)" class="yellow star icon"></i>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n'},601:function(t,e){t.exports='<img class="ui tiny image"\n     *ngIf="book.thumbnails"\n     [src]="book.thumbnails[0].url"><div class="content">\n  <div class="header">{{ book.title }}</div>\n  <div class="description">{{ book.subtitle }}</div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">ISBN {{ book.isbn }}</div>\n</div>\n'},602:function(t,e){t.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of books"\n      [book]="b"\n      [routerLink]="b.isbn"></a>\n</div>\n'},617:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function r(t){if(l===clearTimeout)return clearTimeout(t);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){b&&h&&(b=!1,h.length?p=h.concat(p):m=-1,p.length&&c())}function c(){if(!b){var t=i(a);b=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,b=!1,r(t)}}function s(t,e){this.fun=t,this.array=e}function u(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(t){l=o}}();var h,p=[],b=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new s(t,e)),1!==p.length||b||i(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},623:function(t,e,n){"use strict";var o=n(0),i=n(275),r=n(339),a=n(338),c=n(337);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:r.a},{path:"books",component:a.a},{path:"books/:isbn",component:c.a}],l=function(){function t(){}return t=s([n.i(o.b)({imports:[i.a.forRoot(f)],exports:[i.a],providers:[]}),u("design:paramtypes",[])],t)}()},624:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t=i([n.i(o._2)({selector:"bm-root",template:n(599)}),r("design:paramtypes",[])],t)}()},625:function(t,e,n){"use strict";var o=n(167),i=n(0),r=n(624),a=n(339),c=n(338),s=n(626),u=n(337),f=n(207),l=n(623);n.d(e,"a",function(){return p});var d=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},h=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(){}return t=d([n.i(i.b)({declarations:[r.a,a.a,c.a,s.a,u.a],imports:[o.a,l.a],providers:[f.a],bootstrap:[r.a]}),h("design:paramtypes",[])],t)}()},626:function(t,e,n){"use strict";var o=n(0),i=n(340);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return r([n.i(o.F)(),a("design:type","function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object)],t.prototype,"book",void 0),t=r([n.i(o._2)({selector:"a.bm-book-list-item",template:n(601)}),a("design:paramtypes",[])],t);var e}()},627:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(t,e){this.url=t,this.title=e}return t}()},628:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},629:function(t,e,n){"use strict";var o=n(461),i=(n.n(o),n(454)),r=(n.n(i),n(450)),a=(n.n(r),n(456)),c=(n.n(a),n(455)),s=(n.n(c),n(453)),u=(n.n(s),n(452)),f=(n.n(u),n(460)),l=(n.n(f),n(449)),d=(n.n(l),n(448)),h=(n.n(d),n(458)),p=(n.n(h),n(451)),b=(n.n(p),n(459)),m=(n.n(b),n(457)),v=(n.n(m),n(462)),g=(n.n(v),n(622));n.n(g)},63:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},630:function(t,e,n){t.exports=n(343)}},[630]);
//# sourceMappingURL=main.09851ef26385a7ec9305.bundle.map