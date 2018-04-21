webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routingComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__week01_week01_component__ = __webpack_require__("./src/app/week01/week01.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__week09_week09_component__ = __webpack_require__("./src/app/week09/week09.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__week02_week02_component__ = __webpack_require__("./src/app/week02/week02.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__week03_week03_component__ = __webpack_require__("./src/app/week03/week03.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__week04_week04_component__ = __webpack_require__("./src/app/week04/week04.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__week07_week07_component__ = __webpack_require__("./src/app/week07/week07.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__week05_week05_component__ = __webpack_require__("./src/app/week05/week05.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__week06_week06_component__ = __webpack_require__("./src/app/week06/week06.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__week08_week08_component__ = __webpack_require__("./src/app/week08/week08.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "week01", component: __WEBPACK_IMPORTED_MODULE_0__week01_week01_component__["a" /* Week01Component */] },
    { path: "week02", component: __WEBPACK_IMPORTED_MODULE_4__week02_week02_component__["a" /* Week02Component */] },
    { path: "week03", component: __WEBPACK_IMPORTED_MODULE_5__week03_week03_component__["a" /* Week03Component */] },
    { path: "week04", component: __WEBPACK_IMPORTED_MODULE_6__week04_week04_component__["a" /* Week04Component */] },
    { path: "week05", component: __WEBPACK_IMPORTED_MODULE_8__week05_week05_component__["a" /* Week05Component */] },
    { path: "week06", component: __WEBPACK_IMPORTED_MODULE_9__week06_week06_component__["a" /* Week06Component */] },
    { path: "week07", component: __WEBPACK_IMPORTED_MODULE_7__week07_week07_component__["a" /* Week07Component */] },
    { path: "week08", component: __WEBPACK_IMPORTED_MODULE_10__week08_week08_component__["a" /* Week08Component */] },
    { path: "week09", component: __WEBPACK_IMPORTED_MODULE_3__week09_week09_component__["a" /* Week09Component */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_0__week01_week01_component__["a" /* Week01Component */], __WEBPACK_IMPORTED_MODULE_4__week02_week02_component__["a" /* Week02Component */],
    __WEBPACK_IMPORTED_MODULE_5__week03_week03_component__["a" /* Week03Component */], __WEBPACK_IMPORTED_MODULE_6__week04_week04_component__["a" /* Week04Component */], __WEBPACK_IMPORTED_MODULE_8__week05_week05_component__["a" /* Week05Component */], __WEBPACK_IMPORTED_MODULE_9__week06_week06_component__["a" /* Week06Component */],
    __WEBPACK_IMPORTED_MODULE_7__week07_week07_component__["a" /* Week07Component */], __WEBPACK_IMPORTED_MODULE_10__week08_week08_component__["a" /* Week08Component */], __WEBPACK_IMPORTED_MODULE_3__week09_week09_component__["a" /* Week09Component */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "nav {    \r\n    width: 90%;\r\n    margin: auto;  \r\n}\r\nnav ul {\r\n    width: 90%;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\nnav>ul>li{\r\n    width: 10%;\r\n    height: 40px;\r\n    background: #000; \r\n display: -webkit-inline-box; \r\n display: -ms-inline-flexbox; \r\n display: inline-flex;\r\n -webkit-box-pack:start;\r\n     -ms-flex-pack:start;\r\n         justify-content:flex-start;\r\n -webkit-box-align:start;\r\n     -ms-flex-align:start;\r\n         align-items:flex-start;\r\n opacity: .8;\r\n line-height: 40px;\r\n text-align: center;\r\n font-size: 20px;\r\n}\r\nnav ul li a{\r\n    width: 100%;\r\n    height: 40px;\r\n    color: #fff;\r\ntext-decoration: none;\r\ndisplay: block;\r\n-webkit-transition:.5s all;\r\ntransition:.5s all;\r\n}\r\nnav ul li a:hover{\r\n    color: #fff;\r\n    background-color: #3dc1d3;    \r\n}\r\nmain{\r\n    width: 90%;\r\n    margin: auto;    \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n    <ul>\n        <li><a [routerLink]=\"['/week01']\">第1周</a></li>\n        <li><a [routerLink]=\"['/week02']\">第2周</a></li>\n        <li><a [routerLink]=\"['/week03']\">第3周</a></li>\n        <li><a [routerLink]=\"['/week04']\">第4周</a></li>\n        <li><a [routerLink]=\"['/week05']\">第5周</a></li>\n        <li><a [routerLink]=\"['/week06']\">第6周</a></li>\n        <li><a [routerLink]=\"['/week07']\">第7周</a></li>\n        <li><a [routerLink]=\"['/week08']\">第8周</a></li>\n        <li><a [routerLink]=\"['/week09']\">第9周</a></li>\n    </ul>\n</nav>\n<main>\n    <marquee scrollamount=\"6\" behavior=\"slide\" \n    style=\"color:red\">未包含作業，到電腦教室再下載或自己準備。</marquee>\n    <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["b" /* routingComponents */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/week01/week01.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week01/week01.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Activity 狀態變化流程，參考第十章</h3>\n<pre> \n    <img src=\"../../assets/image/p101.jpg\" alt=\"\">\n    <img src=\"../../assets/image/p102.png\" alt=\"\">\n  簡單的總結幾個動作:\nonCreate()用來做程式的初使化動作;\nonDestory()通常都拿來把onCreate()時的資料做釋放的動作;\nonPause()時把需要保存的資料保存;\nonResume()把保存的資料拿回來使用.\n \n再歸納一般 Android Application遵循的動作流程：\n \n一般啟動:\nonCreate -> onStart -> onResume\n啟動一個 Activity 的基本流程是: 分配資源給這個 Activity(onCreate),\n 然後將 Activity 內容顯示到螢幕上(onStart), 在一切就緒後, 取得螢幕的控制權(onResume),\n 使用者可以開始使用這個程式。\n \n呼叫另一個 Activity:\nonPause(1) -> onCreate(2) -> onStart(2) - onResume(2) -> onStop(1)\n先凍結原本的 Activity, 再交出直接存取螢幕能力(onPause )的過程. 直到 Activity 2 完成一般啟動流程後, Activity 1 才會被停止.\n \n回復原 Activity\nonPause(2) -> onRestart(1) -> onStart(1) -> onResume(1) -> onStop(2) -> onDestroy(2)\n按 Back鍵可以回到原本的 Activity。\n \n退出/結束\nonPause -> onStop -> onDestroy\n如果程式中有直接呼叫 finish 函式來關閉 Activity的話, 系統會暫停(Pause), 停止(Stop)然後銷毀(Destroy)。\n \n回收後再啟動\nonCreate -> onStart -> onResume\n被回收掉的 Activity 一旦又重新被呼叫時，會像一般啟動一樣再次呼叫 Activity 的 onCreate 函式.\n\n</pre>\n<hr>\n<h3>播放音樂</h3>\n<pre>\n  public MediaPlayer player=new MediaPlayer();\n\n  player = MediaPlayer.create(getApplicationContext(), R.raw.music);\n  player.setLooping(true); // 循環播放\n  player.start();          // 音樂播放\n  player.pause();  // 音樂播放暫停\n  player.start();  // 音樂繼續播放\n  player.release();   // 釋放\n\n標準的機制通常 (參考課本pg.10-18)\n將要儲存的動作寫在 onPause()方法中\n回復狀態的動作寫在onResume()\n移除資源寫在onDestroy()\n</pre>\n<hr>\n<h3>SharedPreferences 的使用方式, 課本 pg.12-8</h3>\n<pre>\n  \n宣告\nSharedPreferences sp;\n\n建立物件 onCreate\nsp=getSharedPreferences(\"myData\", MODE_PRIVATE);\n\n寫入資料可以放在onPause\n\nsp.edit().putString(\"name\",\"蘇建郡\") => 寫入資料name\n            .putInt(\"age\",30)  => 寫入資料age\n            .commit();\n\n讀出資料可以放在onResume\n\nString name= sp.getString(\"name\",\"no data\");  =>讀出資料name\nint age = sp.getInt(\"age\",0); => 讀出資料 age\n\n</pre>\n"

/***/ }),

/***/ "./src/app/week01/week01.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week01Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week01Component = /** @class */ (function () {
    function Week01Component() {
    }
    Week01Component.prototype.ngOnInit = function () {
    };
    Week01Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week01',
            template: __webpack_require__("./src/app/week01/week01.component.html"),
            styles: [__webpack_require__("./src/app/week01/week01.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week01Component);
    return Week01Component;
}());



/***/ }),

/***/ "./src/app/week02/week02.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week02/week02.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Intent 資料傳遞</h3>\n<img src=\"../../assets/image/p204.png\" alt=\"\">\n<hr>\n<pre>\n  <h3>Activity A 與 B 之間資料傳遞與回傳方式</h3>\n  <img src=\"../../assets/image/p201.png\" alt=\"\">\n  <img src=\"../../assets/image/p202.png\" alt=\"\">\n  <img src=\"../../assets/image/p203.png\" alt=\"\">\n  <span>Activity A 程式</span>  \n    <code>\n        public class A extends AppCompatActivity &#123;\n\n          EditText editText1,editText2;\n          TextView textView;\n          Button button;\n      \n          @Override\n          protected void onActivityResult(int requestCode, int resultCode, Intent data) &#123;\n              super.onActivityResult(requestCode, resultCode, data);\n      \n              Log.d(\"Demo resultCode\", String.valueOf(resultCode));\n      \n      \n              if((resultCode==RESULT_OK) &&( requestCode==101)) &#123;\n      \n                  String result = data.getStringExtra(\"result\");\n                  textView.setText(\"計算結果 = \" + result);\n      \n                  Log.d(\"Demo requestCode\", String.valueOf(requestCode));\n                  Log.d(\"Demo resultCode\", String.valueOf(resultCode));\n                  Log.d(\"Demo Intent Data\", result);\n      \n              &#125;\n      \n          &#125;\n      \n          @Override\n          protected void onCreate(Bundle savedInstanceState) &#123;\n              super.onCreate(savedInstanceState);\n              setContentView(R.layout.activity_a);\n      \n              setTitle(\"AAAAA\");\n      \n              editText1 =(EditText) findViewById(R.id.editText1);\n              editText2 =(EditText) findViewById(R.id.editText2);\n              textView =(TextView) findViewById(R.id.textView);\n              button =(Button) findViewById(R.id.button);\n      \n              button.setOnClickListener(new View.OnClickListener() &#123;\n                  @Override\n                  public void onClick(View v) &#123;\n                      Intent it = new Intent(A.this,B.class);\n      \n                      it.putExtra(\"data1\",editText1.getText().toString());\n                      it.putExtra(\"data2\",editText2.getText().toString());\n      \n                    // startActivity(it);\n                    startActivityForResult(it,101);\n                  &#125;\n              &#125;);\n          &#125;\n      &#125;\n    </code>  \n  <span>A的排版</span>\n  <code>\n      &#60;?xml version=\"1.0\" encoding=\"utf-8\"?&#62;\n      &#60;LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n          xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n          xmlns:tools=\"http://schemas.android.com/tools\"\n          android:layout_width=\"match_parent\"\n          android:layout_height=\"match_parent\"\n          android:orientation=\"vertical\"\n          tools:context=\"com.stust.demo20180306.A\"&#62;\n      \n          &#60;EditText\n              android:id=\"@+id/editText1\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:ems=\"10\"\n              android:inputType=\"textPersonName\"\n              android:text=\"1111\" /&#62;\n      \n          &#60;EditText\n              android:id=\"@+id/editText2\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:ems=\"10\"\n              android:inputType=\"textPersonName\"\n              android:text=\"2222\" /&#62;\n      \n          &#60;TextView\n              android:id=\"@+id/textView\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"結果 = \" /&#62;\n      \n          &#60;Button\n              android:id=\"@+id/button\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"啟動 B\" /&#62;\n      \n      &#60;/LinearLayout&#62;\n  </code>\n  <span>Activity B 程式碼</span>\n  <code>\n      public class B extends AppCompatActivity &#123;\n\n        TextView textView1,textView2,textView3;\n        Button button1,button2;\n    \n    \n        @Override\n        protected void onCreate(Bundle savedInstanceState) &#123;\n            super.onCreate(savedInstanceState);\n            setContentView(R.layout.activity_b);\n    \n            setTitle(\"BBBBB\");\n    \n            textView1 = (TextView) findViewById(R.id.textView1);\n            textView2 = (TextView) findViewById(R.id.textView2);\n            textView3 = (TextView) findViewById(R.id.textView3);\n            button1 = (Button) findViewById(R.id.button1);\n            button2 = (Button) findViewById(R.id.button2);\n    \n    \n            Intent it = getIntent();\n            String s1 = it.getStringExtra(\"data1\");\n            String s2 = it.getStringExtra(\"data2\");\n    \n            textView1.setText(s1);\n            textView2.setText(s2);\n    \n    \n            button2.setOnClickListener(new View.OnClickListener() &#123;\n                @Override\n                public void onClick(View v) &#123;\n    \n                    Intent it = new Intent();\n                    it.putExtra(\"result\", textView3.getText().toString());\n                    setResult(RESULT_OK, it);\n    \n                    finish();\n    \n    \n                &#125;\n            &#125;);\n    \n            button1.setOnClickListener(new View.OnClickListener() &#123;\n                @Override\n                public void onClick(View v) &#123;\n                    Integer data1= Integer.parseInt(textView1.getText().toString());\n                    Integer data2= Integer.parseInt(textView2.getText().toString());\n    \n                    Integer result = data1+data2;\n    \n                    textView3.setText(result.toString());\n                &#125;\n            &#125;);\n    \n        &#125;\n    &#125;\n  </code>\n  <span>B的排版</span>\n  <code>\n      &#60;?xml version=\"1.0\" encoding=\"utf-8\"?&#62;\n      &#60;LinearLayout xmlns:android=\"http://schemas.android.com/apk/res/android\"\n          xmlns:app=\"http://schemas.android.com/apk/res-auto\"\n          xmlns:tools=\"http://schemas.android.com/tools\"\n          android:layout_width=\"match_parent\"\n          android:layout_height=\"match_parent\"\n          android:orientation=\"vertical\"\n          tools:context=\"com.stust.demo20180306.B\"&#62;\n      \n          &#60;TextView\n              android:id=\"@+id/textView1\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"1\" /&#62;\n      \n          &#60;TextView\n              android:id=\"@+id/textView2\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"2\" /&#62;\n      \n          &#60;Button\n              android:id=\"@+id/button1\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"加\" /&#62;\n      \n          &#60;TextView\n              android:id=\"@+id/textView3\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"33333\" /&#62;\n      \n          &#60;Button\n              android:id=\"@+id/button2\"\n              android:layout_width=\"match_parent\"\n              android:layout_height=\"wrap_content\"\n              android:text=\"回傳\" /&#62;\n      \n      &#60;/LinearLayout&#62;\n  </code>\n</pre>"

/***/ }),

/***/ "./src/app/week02/week02.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week02Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week02Component = /** @class */ (function () {
    function Week02Component() {
    }
    Week02Component.prototype.ngOnInit = function () {
    };
    Week02Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week02',
            template: __webpack_require__("./src/app/week02/week02.component.html"),
            styles: [__webpack_require__("./src/app/week02/week02.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week02Component);
    return Week02Component;
}());



/***/ }),

/***/ "./src/app/week03/week03.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week03/week03.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>try ... catch ... finally</h3>\n<pre>\n  <div>\n    <code>\n        try &#123;\n          int x = 30;\n      //    int y = 0;  除零的錯誤\n  \n          int[] z = new int[]&#123;1,2,3,4&#125;; //超過指標範圍的錯誤\n  \n          String s = \"a11\";\n          //int y = Integer.parseInt(s); //整數資料格式錯誤\n          int y = z[5];\n  \n          textView.setText(String.valueOf(x / y));\n  \n      &#125;catch (ArithmeticException err)&#123;\n          Log.d(\"Demo Arithmetic\",err.toString());\n      &#125;catch (NumberFormatException err)&#123;\n          Log.d(\"Demo NumberFormat\", err.toString());\n      &#125;catch (ArrayIndexOutOfBoundsException err)&#123;\n          Log.d(\"Demo IndexOutOfBounds\", err.toString());\n      &#125;catch (Exception err)&#123;\n          Log.d(\"Demo Exception\", err.toString());\n      &#125;finally &#123;\n          Log.d(\"Demo Finally\", \"Finally, OK ! \");\n      &#125;\n  &#125;\n    </code>\n  </div>\n  <h3>Debug 中斷點的使用方式</h3>\n  <div><code>\n      button2.setOnClickListener(new View.OnClickListener() &#123;\n        @Override\n        public void onClick(View v) &#123;\n           int r =  cal(10);\n           textView.setText(String.valueOf(r));\n        &#125;\n    &#125;);\n\n另外建立副程式\n\npublic  int cal(int no)&#123;\n    int sum =0;\n    for(int i=1;i<=no;i++)\n    &#123;\n        sum +=i;\n    &#125;\n    return  sum;\n&#125;\n  </code></div>\n  <h3>Step Into F7 與 Step Over F8</h3>\n  <div><code>\n      Step Into F7 會跳到cal 副程式中debug\n\n      Step Over F8 會直接將cal副程式執行完成\n      <img src=\"../../assets/image/p301.png\" alt=\"\">\n      <img src=\"../../assets/image/p302.png\" alt=\"\">\n  </code></div>\n  <h3>觀察SharedPreference 的檔案位置</h3>\n  <div><code>\n    <img src=\"../../assets/image/p303.png\" alt=\"\">\n    <span>檔案檢視需要模擬器 API 23以下，24(含)以上的不支援</span>\n    <img src=\"../../assets/image/p304.png\" alt=\"\">\n    <img src=\"../../assets/image/p305.png\" alt=\"\">\n  </code></div>\n  <h3>SharedPreferences 完整用法與檔案檢視</h3>\n  <div><code>\n    <span>宣告</span>\n      SharedPreferences sp;\n     <span>建立物件</span>\n      sp=getSharedPreferences(\"myData2\", MODE_PRIVATE);\n     \n     <span>新增資料</span>\n                     sp.edit().putString(\"name\",\"蘇建郡abc\")\n                             .putInt(\"age\",90)\n                             .putString(\"address\",\"台南市\")\n                             .commit();\n     <span>另一種寫法</span>\n     //                SharedPreferences.Editor editor = sp.edit();\n     //                editor.putString(\"a\",\"123\");\n     //                editor.putString(\"b\",\"456\");\n     //                editor.putInt(\"c\",11);\n     //                editor.commit();\n     <span>移除特定資料</span>\n           sp.edit().remove(\"name\").commit();\n     //                sp.edit().remove(\"name\")\n     //                        .remove(\"age\")\n     //                        .remove(\"address\")\n     //                        .commit();\n     <span>整個資料清除</span>\n         sp.edit().clear().commit();\n     \n    <span>檢視檔案可以發現下列的XML檔</span>\n     &#60;?xml version='1.0' encoding='utf-8' standalone='yes' ?&#62;\n     &#60;map&#62;    \n     &#60;string name=\"name\"&#62;蘇建郡abc&#60;/string&#62;    \n     &#60;string name=\"address\"&#62;台南市&#60;/string&#62;    \n     &#60;int name=\"age\" value=\"90\" /&#62;\n     &#60;/map&#62;\n\n     <img src=\"../../assets/image/p306.png\" alt=\"\">\n     <span>檔案檢視需要模擬器 API 23以下，24(含)以上的不支援</span>\n     檔案顯示位置\n     <img src=\"../../assets/image/p307.png\" alt=\"\">\n     <img src=\"../../assets/image/p308.png\" alt=\"\">\n  </code></div>\n</pre>"

/***/ }),

/***/ "./src/app/week03/week03.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week03Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week03Component = /** @class */ (function () {
    function Week03Component() {
    }
    Week03Component.prototype.ngOnInit = function () {
    };
    Week03Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week03',
            template: __webpack_require__("./src/app/week03/week03.component.html"),
            styles: [__webpack_require__("./src/app/week03/week03.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week03Component);
    return Week03Component;
}());



/***/ }),

/***/ "./src/app/week04/week04.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week04/week04.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  week04 works!\n</p>\n"

/***/ }),

/***/ "./src/app/week04/week04.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week04Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week04Component = /** @class */ (function () {
    function Week04Component() {
    }
    Week04Component.prototype.ngOnInit = function () {
    };
    Week04Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week04',
            template: __webpack_require__("./src/app/week04/week04.component.html"),
            styles: [__webpack_require__("./src/app/week04/week04.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week04Component);
    return Week04Component;
}());



/***/ }),

/***/ "./src/app/week05/week05.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week05/week05.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  week05 works!\n</p>\n"

/***/ }),

/***/ "./src/app/week05/week05.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week05Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week05Component = /** @class */ (function () {
    function Week05Component() {
    }
    Week05Component.prototype.ngOnInit = function () {
    };
    Week05Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week05',
            template: __webpack_require__("./src/app/week05/week05.component.html"),
            styles: [__webpack_require__("./src/app/week05/week05.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week05Component);
    return Week05Component;
}());



/***/ }),

/***/ "./src/app/week06/week06.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week06/week06.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  week06 works!\n</p>\n"

/***/ }),

/***/ "./src/app/week06/week06.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week06Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week06Component = /** @class */ (function () {
    function Week06Component() {
    }
    Week06Component.prototype.ngOnInit = function () {
    };
    Week06Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week06',
            template: __webpack_require__("./src/app/week06/week06.component.html"),
            styles: [__webpack_require__("./src/app/week06/week06.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week06Component);
    return Week06Component;
}());



/***/ }),

/***/ "./src/app/week07/week07.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week07/week07.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  week07 works!\n</p>\n"

/***/ }),

/***/ "./src/app/week07/week07.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week07Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week07Component = /** @class */ (function () {
    function Week07Component() {
    }
    Week07Component.prototype.ngOnInit = function () {
    };
    Week07Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week07',
            template: __webpack_require__("./src/app/week07/week07.component.html"),
            styles: [__webpack_require__("./src/app/week07/week07.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week07Component);
    return Week07Component;
}());



/***/ }),

/***/ "./src/app/week08/week08.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week08/week08.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  week08 works!\n</p>\n"

/***/ }),

/***/ "./src/app/week08/week08.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week08Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week08Component = /** @class */ (function () {
    function Week08Component() {
    }
    Week08Component.prototype.ngOnInit = function () {
    };
    Week08Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week08',
            template: __webpack_require__("./src/app/week08/week08.component.html"),
            styles: [__webpack_require__("./src/app/week08/week08.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week08Component);
    return Week08Component;
}());



/***/ }),

/***/ "./src/app/week09/week09.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/week09/week09.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  week09 works!\n</p>\n"

/***/ }),

/***/ "./src/app/week09/week09.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Week09Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Week09Component = /** @class */ (function () {
    function Week09Component() {
    }
    Week09Component.prototype.ngOnInit = function () {
    };
    Week09Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-week09',
            template: __webpack_require__("./src/app/week09/week09.component.html"),
            styles: [__webpack_require__("./src/app/week09/week09.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Week09Component);
    return Week09Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map