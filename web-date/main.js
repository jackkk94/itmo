(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\test-project\web-date\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DeoA":
/*!*******************************************************************!*\
  !*** ./src/app/app/components/line-chart/line-chart.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChartComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! ng2-charts */ "LPYB");
class LineChartComponent {
    constructor() {
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(255,255,0,0.28)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
    }
    ngOnInit() {
    }
}
exports.LineChartComponent = LineChartComponent;
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(); };
LineChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { lineChartData: "lineChartData", lineChartLabels: "lineChartLabels" }, decls: 2, vars: 7, consts: [[1, "chart-wrapper"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "canvas", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
    } }, directives: [i1.BaseChartDirective], styles: ["[_nghost-%COMP%]{\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSJdfQ== */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SiiQ":
/*!***********************************************************************!*\
  !*** ./src/app/app/components/result-chart/result-chart.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultChartComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! ../line-chart/line-chart.component */ "DeoA");
class ResultChartComponent {
    constructor() {
        this.model = [];
        this.labels = [];
    }
    ngOnInit() {
        this.initChart();
    }
    initChart() {
        const data1 = this.model.map(e => e.value.operation1.averageTime);
        const data2 = this.model.map(e => e.value.operation2.averageTime);
        this.chart = [{ data: data1, fill: false, label: this.model[0].value.operation1.name }, { data: data2, fill: false, label: this.model[0].value.operation2.name }];
        this.labels = this.model.map(e => e.index.toString());
    }
}
exports.ResultChartComponent = ResultChartComponent;
ResultChartComponent.ɵfac = function ResultChartComponent_Factory(t) { return new (t || ResultChartComponent)(); };
ResultChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultChartComponent, selectors: [["app-result-chart"]], inputs: { model: "model" }, decls: 1, vars: 2, consts: [[3, "lineChartData", "lineChartLabels"]], template: function ResultChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-line-chart", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("lineChartData", ctx.chart)("lineChartLabels", ctx.labels);
    } }, directives: [i1.LineChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQtY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! ./app/components/array-test/array-test.component */ "Txab");
class AppComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnDestroy() {
    }
}
exports.AppComponent = AppComponent;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-array-test");
    } }, directives: [i1.ArrayTestComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "Txab":
/*!*******************************************************************!*\
  !*** ./src/app/app/components/array-test/array-test.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayTestComponent = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "mrSG");
const utils_1 = __webpack_require__(/*! src/app/node/utils */ "a3hw");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
const i2 = __webpack_require__(/*! @angular/forms */ "3Pt+");
const i3 = __webpack_require__(/*! @angular/common */ "ofXK");
const i4 = __webpack_require__(/*! ../result-table/result-table.component */ "Zgmn");
const i5 = __webpack_require__(/*! ../result-chart/result-chart.component */ "SiiQ");
function ArrayTestComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function ArrayTestComponent_button_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.showServerResult = !ctx_r4.showServerResult; });
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.showServerResult ? "Hide Result from server" : "Show Result from server", " ");
} }
function ArrayTestComponent_app_result_table_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-result-table", 19);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("model", ctx_r1.result);
} }
function ArrayTestComponent_app_result_chart_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-result-chart", 19);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("model", ctx_r2.result);
} }
function ArrayTestComponent_div_31_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "app-result-table", 19);
    i0.ɵɵelement(4, "app-result-chart", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("model", item_r7.data);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("model", item_r7.data);
} }
function ArrayTestComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Result from server");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ArrayTestComponent_div_31_ng_container_3_Template, 5, 3, "ng-container", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.serverResult);
} }
const jsonPath = 'assets/';
class ArrayTestComponent {
    constructor(http, cdr) {
        this.http = http;
        this.cdr = cdr;
        this.iterationsCount = utils_1.iterationsCount;
        this.serverResult = [];
        this.showServerResult = false;
        this.arraySize = utils_1.arrLength;
        this.experimentsCount = utils_1.experiments;
        this.maxExperimentsCount = 8000;
        this.numbers = [];
        this.strings = [];
        this.objects = [];
        this.dataType = utils_1.DataType.Number;
        this.processing = false;
        this.result = [];
        this.sampleIndexes = [1, Math.ceil(this.arraySize / 2), this.arraySize - 1];
        this.getJSON(`${jsonPath}data.json`).subscribe(data => {
            this.data = data;
        });
        this.getJSON(`${jsonPath}result.json`).subscribe(data => {
            this.serverResult = data;
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        //this.numbers = genArray(genNumber, arraySize);
        //this.strings = genArray(genString, arraySize);
        //this.objects = this.genArray(this.genObject.bind(this));
        //this.runExperiment(this.numbers);
    }
    handleClick() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.processing) {
                return;
            }
            this.processing = true;
            this.sampleIndexes = utils_1.genSampleIndexes(this.arraySize);
            console.log('indexes: ', this.sampleIndexes);
            let arr = [];
            this.result = [];
            if (this.dataType === utils_1.DataType.Number)
                arr = this.data.numbers.slice(0, this.arraySize);
            else if (this.dataType === utils_1.DataType.String)
                arr = this.data.strings.slice(0, this.arraySize);
            else if (this.dataType === utils_1.DataType.Object)
                arr = this.data.objects.slice(0, this.arraySize);
            this.result = yield utils_1.runExperiment(this.sampleIndexes, arr, this.experimentsCount, this.iterationsCount, utils_1.calcTimeCustom);
            this.processing = false;
            this.cdr.markForCheck();
        });
    }
    onExperimentsChange(e) {
        const count = +e.target.value;
        if (count > this.maxExperimentsCount) {
            this.experimentsCount = this.maxExperimentsCount;
            return;
        }
        this.experimentsCount = count;
    }
    onDataTypeChange(type) {
        this.dataType = type;
    }
    getJSON(url) {
        return this.http.get(url);
    }
}
exports.ArrayTestComponent = ArrayTestComponent;
ArrayTestComponent.ɵfac = function ArrayTestComponent_Factory(t) { return new (t || ArrayTestComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ArrayTestComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ArrayTestComponent, selectors: [["app-array-test"]], decls: 32, vars: 14, consts: [[1, "container-fluid", "pt-4", "px-4"], [1, "row"], [1, "col-md-3"], [1, "d-flex", "align-items-center", "justify-content-between", "my-2"], [1, "label"], ["type", "number", "placeholder", "", "min", "10", "max", "10000", 1, "form-control", "form-input", "ms-2", 3, "ngModel", "disabled", "ngModelChange"], ["type", "number", "min", "1", 1, "form-control", "form-input", "ms-2", 3, "ngModel", "disabled", "ngModelChange", "blur"], [1, "d-flex", "mt-1"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "option1", "checked", "", 1, "form-check-input", 3, "disabled", "change"], ["for", "exampleRadios1", 1, "form-check-label"], [1, "form-check", "ms-4"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "option2", 1, "form-check-input", 3, "disabled", "change"], ["for", "exampleRadios2", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-primary", "mt-4", "p-2", "w-100", 3, "click"], ["type", "button", "class", "btn btn-primary mt-4 p-2 w-100", 3, "click", 4, "ngIf"], [1, "col-md-9", "ps-4"], ["class", "col-md-6", 3, "model", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-md-6", 3, "model"], [4, "ngFor", "ngForOf"]], template: function ArrayTestComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "label", 4);
        i0.ɵɵtext(5, "Array size: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "input", 5);
        i0.ɵɵlistener("ngModelChange", function ArrayTestComponent_Template_input_ngModelChange_6_listener($event) { return ctx.arraySize = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "label", 4);
        i0.ɵɵtext(9, "Experiments count: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "input", 6);
        i0.ɵɵlistener("ngModelChange", function ArrayTestComponent_Template_input_ngModelChange_10_listener($event) { return ctx.experimentsCount = $event; })("blur", function ArrayTestComponent_Template_input_blur_10_listener($event) { return ctx.onExperimentsChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 3);
        i0.ɵɵelementStart(12, "label", 4);
        i0.ɵɵtext(13, "Data Type: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 7);
        i0.ɵɵelementStart(15, "div", 8);
        i0.ɵɵelementStart(16, "input", 9);
        i0.ɵɵlistener("change", function ArrayTestComponent_Template_input_change_16_listener() { return ctx.onDataTypeChange(0); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "label", 10);
        i0.ɵɵtext(18, " Number ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 11);
        i0.ɵɵelementStart(20, "input", 12);
        i0.ɵɵlistener("change", function ArrayTestComponent_Template_input_change_20_listener() { return ctx.onDataTypeChange(1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "label", 13);
        i0.ɵɵtext(22, " String ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 14);
        i0.ɵɵlistener("click", function ArrayTestComponent_Template_button_click_23_listener() { return ctx.handleClick(); });
        i0.ɵɵelementStart(24, "div");
        i0.ɵɵtext(25);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(26, ArrayTestComponent_button_26_Template, 3, 1, "button", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 16);
        i0.ɵɵelementStart(28, "div", 1);
        i0.ɵɵtemplate(29, ArrayTestComponent_app_result_table_29_Template, 1, 1, "app-result-table", 17);
        i0.ɵɵtemplate(30, ArrayTestComponent_app_result_chart_30_Template, 1, 1, "app-result-chart", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(31, ArrayTestComponent_div_31_Template, 4, 1, "div", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.arraySize)("disabled", ctx.processing);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.experimentsCount)("disabled", ctx.processing);
        i0.ɵɵattribute("max", ctx.maxExperimentsCount);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("disabled", ctx.processing);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.processing);
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("spinner-border", ctx.processing);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.processing ? "Run" : "", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.serverResult.length);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.result.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.result.length);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showServerResult && ctx.serverResult.length);
    } }, directives: [i2.NumberValueAccessor, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.NgIf, i4.ResultTableComponent, i5.ResultChartComponent, i3.NgForOf], styles: [".label[_ngcontent-%COMP%]{\r\n    flex-shrink: 0;\r\n}\r\n\r\n.form-input[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycmF5LXRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImFycmF5LXRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbHtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const forms_1 = __webpack_require__(/*! @angular/forms */ "3Pt+");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
const ng2_charts_1 = __webpack_require__(/*! ng2-charts */ "LPYB");
const app_component_1 = __webpack_require__(/*! ./app.component */ "Sy1n");
const array_test_component_1 = __webpack_require__(/*! ./app/components/array-test/array-test.component */ "Txab");
const line_chart_component_1 = __webpack_require__(/*! ./app/components/line-chart/line-chart.component */ "DeoA");
const result_component_1 = __webpack_require__(/*! ./app/components/result/result.component */ "kVth");
const http_1 = __webpack_require__(/*! @angular/common/http */ "tk/3");
const result_table_component_1 = __webpack_require__(/*! ./app/components/result-table/result-table.component */ "Zgmn");
const result_chart_component_1 = __webpack_require__(/*! ./app/components/result-chart/result-chart.component */ "SiiQ");
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
class AppModule {
}
exports.AppModule = AppModule;
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
AppModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
            platform_browser_1.BrowserModule,
            ng2_charts_1.ChartsModule,
            forms_1.FormsModule,
            http_1.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        array_test_component_1.ArrayTestComponent,
        line_chart_component_1.LineChartComponent,
        result_component_1.ResultComponent,
        result_table_component_1.ResultTableComponent,
        result_chart_component_1.ResultChartComponent], imports: [platform_browser_1.BrowserModule,
        ng2_charts_1.ChartsModule,
        forms_1.FormsModule,
        http_1.HttpClientModule] }); })();


/***/ }),

/***/ "Zgmn":
/*!***********************************************************************!*\
  !*** ./src/app/app/components/result-table/result-table.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultTableComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! @angular/common */ "ofXK");
function ResultTableComponent_caption_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "caption");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.caption, " ");
} }
function ResultTableComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "th", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelementStart(4, "div", 6);
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵelementStart(11, "div", 6);
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.index);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(item_r2.value.operation1.class);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 11, item_r2.value.operation1.averageTime, "0.0-6"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" | ", item_r2.value.operation1.isFaster, "");
    i0.ɵɵadvance(1);
    i0.ɵɵclassMap(item_r2.value.operation2.class);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 14, item_r2.value.operation2.averageTime, "0.0-6"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" | ", item_r2.value.operation2.isFaster, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.value.isEqual);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.value.Failes);
} }
class ResultTableComponent {
    constructor() {
        this.model = [];
    }
    ngOnInit() {
        this.operationNames = {
            op1: this.model[0].value.operation1.name,
            op2: this.model[0].value.operation2.name,
        };
        this.model.forEach(e => {
            e.value.operation1.isFaster > e.value.operation2.isFaster ?
                e.value.operation1.class = 'table-success'
                :
                    e.value.operation2.class = 'table-success';
            return e;
        });
    }
}
exports.ResultTableComponent = ResultTableComponent;
ResultTableComponent.ɵfac = function ResultTableComponent_Factory(t) { return new (t || ResultTableComponent)(); };
ResultTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultTableComponent, selectors: [["app-result-table"]], inputs: { model: "model", caption: "caption" }, decls: 17, vars: 4, consts: [[1, "table-responsive"], [1, "table"], [4, "ngIf"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-flex", "justify-content-between"]], template: function ResultTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵtemplate(2, ResultTableComponent_caption_2_Template, 2, 1, "caption", 2);
        i0.ɵɵelementStart(3, "thead");
        i0.ɵɵelementStart(4, "tr");
        i0.ɵɵelementStart(5, "th", 3);
        i0.ɵɵtext(6, "index");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "th", 3);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "th", 3);
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "th", 3);
        i0.ɵɵtext(12, "Equal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "th", 3);
        i0.ɵɵtext(14, "Fails");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "tbody");
        i0.ɵɵtemplate(16, ResultTableComponent_tr_16_Template, 23, 17, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.caption);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("", ctx.operationNames.op1, ", ms");
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", ctx.operationNames.op2, ", ms");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [i1.NgIf, i1.NgForOf], pipes: [i1.DecimalPipe], styles: ["[_nghost-%COMP%]{\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJyZXN1bHQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "a3hw":
/*!*******************************!*\
  !*** ./src/app/node/utils.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.genSampleIndexes = exports.compare = exports.calcTimeCustom = exports.calcTime = exports.runExperiment = exports.genString = exports.genObject = exports.genNumber = exports.genArray = exports.arrLength = exports.experiments = exports.iterationsCount = exports.DataType = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "mrSG");
var DataType;
(function (DataType) {
    DataType[DataType["Number"] = 0] = "Number";
    DataType[DataType["String"] = 1] = "String";
    DataType[DataType["Object"] = 2] = "Object";
})(DataType = exports.DataType || (exports.DataType = {}));
;
exports.iterationsCount = 1000000;
exports.experiments = 1000;
exports.arrLength = 10000;
// generate --------------------------------------------------------
function genArray(generator, count = 10000) {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(generator());
    }
    return arr;
}
exports.genArray = genArray;
function genNumber(min = 0, max = 100) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
exports.genNumber = genNumber;
function genObject() {
    return {
        name: this.genString(),
        age: this.genNumber()
    };
}
exports.genObject = genObject;
function genString(len = 5) {
    const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < len; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}
exports.genString = genString;
const runExperiment = (indexes, arr, experimentsCount = exports.experiments, iterations = exports.iterationsCount, calcFn = exports.calcTime) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = [];
    console.log('data: ', arr);
    for (let i of indexes) {
        console.log(i);
        const el = arr[i];
        const fn2 = {
            name: 'findIndex',
            fn: (searchEl) => arr.findIndex(x => x === searchEl),
            results: [],
            averageTime: 0,
            isFaster: 0
        };
        const fn1 = {
            name: 'indexOf',
            fn: (searchEl) => arr.indexOf(searchEl),
            results: [],
            averageTime: 0,
            isFaster: 0
        };
        const value = yield exports.compare(el, fn1, fn2, experimentsCount, iterations, calcFn);
        result.push({
            label: `Index of searching element: ${i}`,
            value,
            index: i
        });
    }
    return Promise.resolve(result);
});
exports.runExperiment = runExperiment;
const calcTime = (fn, searchEl, iterations = exports.iterationsCount) => {
    var _a, _b;
    performance.mark('a');
    for (let i = 0; i < iterations; i++) {
        fn.call(null, searchEl);
    }
    ;
    performance.mark('b');
    for (let i = 0; i < iterations; i++) { }
    ;
    performance.mark('c');
    performance.measure("ab", 'a', 'b');
    performance.measure("bc", 'b', 'c');
    const value = (_a = performance.getEntriesByName("ab", "measure")[0]) === null || _a === void 0 ? void 0 : _a.duration;
    const cycle = (_b = performance.getEntriesByName("bc", "measure")[0]) === null || _b === void 0 ? void 0 : _b.duration;
    performance.clearMarks();
    performance.clearMeasures();
    const diff = (value - cycle) / iterations;
    return diff;
};
exports.calcTime = calcTime;
const calcTimeCustom = (fn, searchEl, iterations = exports.iterationsCount) => {
    let start = (new Date()).getTime();
    const time = 5;
    let counter = 0;
    while ((new Date()).getTime() - start < time) {
        fn.call(null, searchEl);
        ++counter;
    }
    return time / counter;
};
exports.calcTimeCustom = calcTimeCustom;
const compare = (searchEl, operation1, operation2, count = exports.experiments, iterations = exports.iterationsCount, calcFn) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = {
        operation1,
        operation2,
        isEqual: 0,
        Failes: 0
    };
    result.operation1.isFaster = result.operation2.isFaster = 0;
    for (let i = 0; i < count; i++) {
        const res1 = calcFn.call(null, operation1.fn, searchEl, iterations);
        yield new Promise(resolve => setTimeout(resolve, 1));
        const res2 = calcFn.call(null, operation2.fn, searchEl, iterations);
        if (!i) {
            result.operation1.averageTime = res1;
            result.operation2.averageTime = res2;
        }
        else {
            result.operation1.averageTime = (result.operation1.averageTime + res1) / 2;
            result.operation2.averageTime = (result.operation2.averageTime + res2) / 2;
        }
        result.operation1.class = result.operation2.class = '';
        result.operation1.results.push(res1);
        result.operation2.results.push(res2);
        if (res1 && res2) {
            if (res1 < res2)
                result.operation1.isFaster++;
            else if (res1 > res2)
                result.operation2.isFaster++;
            else
                result.isEqual++;
            continue;
        }
        else
            result.Failes++;
    }
    return result;
});
exports.compare = compare;
const genSampleIndexes = (dataLength, maxSamplesLength = 20) => {
    const arr = [];
    if (!dataLength) {
        return arr;
    }
    let length = dataLength;
    if (dataLength > maxSamplesLength) {
        length = maxSamplesLength;
    }
    let offset = Math.floor(dataLength / length);
    for (let i = 0; i < dataLength; i = i + offset) {
        arr.push(i);
    }
    return arr;
};
exports.genSampleIndexes = genSampleIndexes;


/***/ }),

/***/ "kVth":
/*!***********************************************************!*\
  !*** ./src/app/app/components/result/result.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultComponent = void 0;
const i0 = __webpack_require__(/*! @angular/core */ "fXoL");
const i1 = __webpack_require__(/*! @angular/common */ "ofXK");
function ResultComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "h3", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 3);
    i0.ɵɵelementStart(8, "div", 4);
    i0.ɵɵelementStart(9, "div", 5);
    i0.ɵɵelementStart(10, "b");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 6);
    i0.ɵɵelementStart(13, "div");
    i0.ɵɵtext(14, "Faster (times):");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 6);
    i0.ɵɵelementStart(18, "div");
    i0.ɵɵtext(19, "~Time (ms):");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 4);
    i0.ɵɵelementStart(23, "div", 5);
    i0.ɵɵelementStart(24, "b");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 6);
    i0.ɵɵelementStart(27, "div");
    i0.ɵɵtext(28, "Faster (times):");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 6);
    i0.ɵɵelementStart(32, "div");
    i0.ɵɵtext(33, "~Time (ms):");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Equal (times): ", item_r1.value.isEqual, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Not Calculated (times): ", item_r1.value.Failes, "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r1.value.operation1.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r1.value.operation1.isFaster);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r1.value.operation1.averageTime);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r1.value.operation2.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r1.value.operation2.isFaster);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r1.value.operation2.averageTime);
} }
class ResultComponent {
    constructor() {
        this.model = [];
    }
    ngOnInit() {
        console.log(this.model);
    }
}
exports.ResultComponent = ResultComponent;
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(); };
ResultComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResultComponent, selectors: [["app-result"]], inputs: { model: "model" }, decls: 1, vars: 1, consts: [["class", "mb-5", 4, "ngFor", "ngForOf"], [1, "mb-5"], [1, "mb-2"], [1, "d-flex", "justify-content-between"], [1, "info"], [1, "text-center", "my-2"], [1, "info-item"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ResultComponent_div_0_Template, 36, 9, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.model);
    } }, directives: [i1.NgForOf], styles: [".info[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJyZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZve1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmluZm8taXRlbXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __NgCli_bootstrap_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
const core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "ZAI4");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "AytR");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_1.platformBrowser().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map