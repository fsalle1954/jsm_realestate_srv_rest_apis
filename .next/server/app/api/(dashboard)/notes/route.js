"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/(dashboard)/notes/route";
exports.ids = ["app/api/(dashboard)/notes/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fnotes%2Froute&page=%2Fapi%2F(dashboard)%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fnotes%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fnotes%2Froute&page=%2Fapi%2F(dashboard)%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fnotes%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_fernando_8722a468_93b7_4df5_85f5_899ac3fe292f_home_fernando_salle_Documents_2_reactnative_jsm_realestate_srv_rest_apis_app_api_dashboard_notes_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/(dashboard)/notes/route.ts */ \"(rsc)/./app/api/(dashboard)/notes/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/(dashboard)/notes/route\",\n        pathname: \"/api/notes\",\n        filename: \"route\",\n        bundlePath: \"app/api/(dashboard)/notes/route\"\n    },\n    resolvedPagePath: \"/media/fernando/8722a468-93b7-4df5-85f5-899ac3fe292f/home/fernando-salle/Documents_2/reactnative/jsm_realestate_srv/rest-apis/app/api/(dashboard)/notes/route.ts\",\n    nextConfigOutput,\n    userland: _media_fernando_8722a468_93b7_4df5_85f5_899ac3fe292f_home_fernando_salle_Documents_2_reactnative_jsm_realestate_srv_rest_apis_app_api_dashboard_notes_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/(dashboard)/notes/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkYoZGFzaGJvYXJkKSUyRm5vdGVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkYoZGFzaGJvYXJkKSUyRm5vdGVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGKGRhc2hib2FyZCklMkZub3RlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZtZWRpYSUyRmZlcm5hbmRvJTJGODcyMmE0NjgtOTNiNy00ZGY1LTg1ZjUtODk5YWMzZmUyOTJmJTJGaG9tZSUyRmZlcm5hbmRvLXNhbGxlJTJGRG9jdW1lbnRzXzIlMkZyZWFjdG5hdGl2ZSUyRmpzbV9yZWFsZXN0YXRlX3NydiUyRnJlc3QtYXBpcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGbWVkaWElMkZmZXJuYW5kbyUyRjg3MjJhNDY4LTkzYjctNGRmNS04NWY1LTg5OWFjM2ZlMjkyZiUyRmhvbWUlMkZmZXJuYW5kby1zYWxsZSUyRkRvY3VtZW50c18yJTJGcmVhY3RuYXRpdmUlMkZqc21fcmVhbGVzdGF0ZV9zcnYlMkZyZXN0LWFwaXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dIO0FBQzdMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdC1hcGlzLz9lNzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9tZWRpYS9mZXJuYW5kby84NzIyYTQ2OC05M2I3LTRkZjUtODVmNS04OTlhYzNmZTI5MmYvaG9tZS9mZXJuYW5kby1zYWxsZS9Eb2N1bWVudHNfMi9yZWFjdG5hdGl2ZS9qc21fcmVhbGVzdGF0ZV9zcnYvcmVzdC1hcGlzL2FwcC9hcGkvKGRhc2hib2FyZCkvbm90ZXMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpLyhkYXNoYm9hcmQpL25vdGVzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbm90ZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpLyhkYXNoYm9hcmQpL25vdGVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL21lZGlhL2Zlcm5hbmRvLzg3MjJhNDY4LTkzYjctNGRmNS04NWY1LTg5OWFjM2ZlMjkyZi9ob21lL2Zlcm5hbmRvLXNhbGxlL0RvY3VtZW50c18yL3JlYWN0bmF0aXZlL2pzbV9yZWFsZXN0YXRlX3Nydi9yZXN0LWFwaXMvYXBwL2FwaS8oZGFzaGJvYXJkKS9ub3Rlcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvKGRhc2hib2FyZCkvbm90ZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fnotes%2Froute&page=%2Fapi%2F(dashboard)%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fnotes%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/(dashboard)/notes/route.ts":
/*!********************************************!*\
  !*** ./app/api/(dashboard)/notes/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var _lib_modals_notes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/modals/notes */ \"(rsc)/./app/lib/modals/notes.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_modals_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/modals/user */ \"(rsc)/./app/lib/modals/user.ts\");\n\n\n\n// import { Types } from \"mongoose\";\n\n// import mongoose from \"mongoose\";\n\nconst GET = async (request)=>{\n    try {\n        const { searchParams } = new URL(request.url);\n        const userId = searchParams.get(\"userId\");\n        if (!userId || !mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Invalid or missing userId\"\n            }), {\n                status: 400\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const user = await _lib_modals_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(userId);\n        if (!user) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"User not found\"\n            }), {\n                status: 404\n            });\n        }\n        const notes = await _lib_modals_notes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n            user: new mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId(userId)\n        });\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(notes), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Error in fetching notes\" + error, {\n            status: 500\n        });\n    }\n};\nconst POST = async (request)=>{\n    try {\n        const { searchParams } = new URL(request.url);\n        const userId = searchParams.get(\"userId\");\n        const body = await request.json();\n        const { title, description } = body;\n        if (!userId || !mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Invalid or missing userId\"\n            }), {\n                status: 400\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const user = await _lib_modals_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(userId);\n        if (!user) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"User not found\"\n            }), {\n                status: 404\n            });\n        }\n        //const NoteSchema = new Schema({\n        //  title: { type: String, required: true },\n        //  description: { type: String },\n        //  user: { type: Schema.Types.ObjectId, ref: \"User\" },\n        // });\n        const newNote = new _lib_modals_notes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            title,\n            description,\n            user: new mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId(userId)\n        });\n        await newNote.save();\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Note Created\",\n            note: newNote\n        }), {\n            status: 201\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Error creating note\",\n            error\n        }), {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpLyhkYXNoYm9hcmQpL25vdGVzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0w7QUFDTztBQUM3QyxvQ0FBb0M7QUFDb0I7QUFDeEQsbUNBQW1DO0FBQ1M7QUFHckMsTUFBTUssTUFBTSxPQUFPQztJQUN4QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO1FBQzVDLE1BQU1DLFNBQVNILGFBQWFJLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUNELFVBQVUsQ0FBQ1AsMkNBQUtBLENBQUNTLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSCxTQUFTO1lBQzlDLE9BQU8sSUFBSVYscURBQVlBLENBQ3JCYyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBNEIsSUFDdEQ7Z0JBQ0VDLFFBQVE7WUFDVjtRQUVKO1FBQ0EsTUFBTWhCLG1EQUFPQTtRQUViLE1BQU1pQixPQUFPLE1BQU1kLHdEQUFJQSxDQUFDZSxRQUFRLENBQUNUO1FBQ2pDLElBQUksQ0FBQ1EsTUFBTTtZQUNULE9BQU8sSUFBSWxCLHFEQUFZQSxDQUFDYyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUIsSUFBSTtnQkFDckVDLFFBQVE7WUFDVjtRQUNGO1FBRUEsTUFBTUcsUUFBUSxNQUFNbEIseURBQUlBLENBQUNtQixJQUFJLENBQUM7WUFBRUgsTUFBTSxJQUFJZiwyQ0FBS0EsQ0FBQ1MsUUFBUSxDQUFDRjtRQUFRO1FBQ2pFLE9BQU8sSUFBSVYscURBQVlBLENBQUNjLEtBQUtDLFNBQVMsQ0FBQ0ssUUFBUTtZQUFFSCxRQUFRO1FBQUk7SUFDL0QsRUFBRSxPQUFPSyxPQUFPO1FBQ2QsT0FBTyxJQUFJdEIscURBQVlBLENBQUMsNEJBQTRCc0IsT0FBTztZQUFFTCxRQUFRO1FBQUk7SUFDM0U7QUFDRixFQUFFO0FBRUssTUFBTU0sT0FBTyxPQUFPakI7SUFDekIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsUUFBUUcsR0FBRztRQUM1QyxNQUFNQyxTQUFTSCxhQUFhSSxHQUFHLENBQUM7UUFFaEMsTUFBTWEsT0FBTyxNQUFNbEIsUUFBUW1CLElBQUk7UUFFL0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRSxHQUFHSDtRQUUvQixJQUFJLENBQUNkLFVBQVUsQ0FBQ1AsMkNBQUtBLENBQUNTLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSCxTQUFTO1lBQzlDLE9BQU8sSUFBSVYscURBQVlBLENBQ3JCYyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBNEIsSUFDdEQ7Z0JBQ0VDLFFBQVE7WUFDVjtRQUVKO1FBRUEsTUFBTWhCLG1EQUFPQTtRQUViLE1BQU1pQixPQUFPLE1BQU1kLHdEQUFJQSxDQUFDZSxRQUFRLENBQUNUO1FBQ2pDLElBQUksQ0FBQ1EsTUFBTTtZQUNULE9BQU8sSUFBSWxCLHFEQUFZQSxDQUFDYyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFNBQVM7WUFBaUIsSUFBSTtnQkFDckVDLFFBQVE7WUFDVjtRQUNGO1FBQ0EsaUNBQWlDO1FBQ2pDLDRDQUE0QztRQUM1QyxrQ0FBa0M7UUFDbEMsdURBQXVEO1FBQ3ZELE1BQU07UUFFTixNQUFNVyxVQUFVLElBQUkxQix5REFBSUEsQ0FBQztZQUN2QndCO1lBQ0FDO1lBQ0FULE1BQU0sSUFBSWYsMkNBQUtBLENBQUNTLFFBQVEsQ0FBQ0Y7UUFDM0I7UUFFQSxNQUFNa0IsUUFBUUMsSUFBSTtRQUVsQixPQUFPLElBQUk3QixxREFBWUEsQ0FDckJjLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxTQUFTO1lBQWdCYyxNQUFNRjtRQUFRLElBQ3hEO1lBQUVYLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9LLE9BQU87UUFDZCxPQUFPLElBQUl0QixxREFBWUEsQ0FDckJjLEtBQUtDLFNBQVMsQ0FBQztZQUNiQyxTQUFTO1lBQ1RNO1FBQ0YsSUFDQTtZQUNFTCxRQUFRO1FBQ1Y7SUFFSjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaXMvLi9hcHAvYXBpLyhkYXNoYm9hcmQpL25vdGVzL3JvdXRlLnRzPzJhMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vbGliL2RiXCI7XG5pbXBvcnQgTm90ZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vZGFscy9ub3Rlc1wiO1xuLy8gaW1wb3J0IHsgVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCB7IFR5cGVzLCBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tIFwibW9uZ29vc2VcIjtcbi8vIGltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9saWIvbW9kYWxzL3VzZXJcIjtcbmltcG9ydCB7IEFueWJvZHkgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKHJlcXVlc3Q6IFJlcXVlc3QpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgY29uc3QgdXNlcklkID0gc2VhcmNoUGFyYW1zLmdldChcInVzZXJJZFwiKTtcbiAgICBpZiAoIXVzZXJJZCB8fCAhVHlwZXMuT2JqZWN0SWQuaXNWYWxpZCh1c2VySWQpKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkludmFsaWQgb3IgbWlzc2luZyB1c2VySWRcIiB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh1c2VySWQpO1xuICAgIGlmICghdXNlcikge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIgfSksIHtcbiAgICAgICAgc3RhdHVzOiA0MDQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBub3RlcyA9IGF3YWl0IE5vdGUuZmluZCh7IHVzZXI6IG5ldyBUeXBlcy5PYmplY3RJZCh1c2VySWQpIH0pO1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KG5vdGVzKSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcIkVycm9yIGluIGZldGNoaW5nIG5vdGVzXCIgKyBlcnJvciwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBjb25zdCB1c2VySWQgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidXNlcklkXCIpO1xuXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gICAgY29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSA9IGJvZHk7XG5cbiAgICBpZiAoIXVzZXJJZCB8fCAhVHlwZXMuT2JqZWN0SWQuaXNWYWxpZCh1c2VySWQpKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkludmFsaWQgb3IgbWlzc2luZyB1c2VySWRcIiB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHVzZXJJZCk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmRcIiB9KSwge1xuICAgICAgICBzdGF0dXM6IDQwNCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvL2NvbnN0IE5vdGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICAvLyAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIC8vICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAvLyAgdXNlcjogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJVc2VyXCIgfSxcbiAgICAvLyB9KTtcblxuICAgIGNvbnN0IG5ld05vdGUgPSBuZXcgTm90ZSh7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdXNlcjogbmV3IFR5cGVzLk9iamVjdElkKHVzZXJJZCksXG4gICAgfSk7XG5cbiAgICBhd2FpdCBuZXdOb3RlLnNhdmUoKTtcblxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIk5vdGUgQ3JlYXRlZFwiLCBub3RlOiBuZXdOb3RlIH0pLFxuICAgICAgeyBzdGF0dXM6IDIwMSB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWVzc2FnZTogXCJFcnJvciBjcmVhdGluZyBub3RlXCIsXG4gICAgICAgIGVycm9yLCAvLyBTZW5kIGEgdXNlci1mcmllbmRseSBlcnJvciBtZXNzYWdlXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICB9XG4gICAgKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0IiwiTm90ZSIsIlR5cGVzIiwiVXNlciIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJ1c2VySWQiLCJnZXQiLCJPYmplY3RJZCIsImlzVmFsaWQiLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInN0YXR1cyIsInVzZXIiLCJmaW5kQnlJZCIsIm5vdGVzIiwiZmluZCIsImVycm9yIiwiUE9TVCIsImJvZHkiLCJqc29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm5ld05vdGUiLCJzYXZlIiwibm90ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/(dashboard)/notes/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/db.ts":
/*!***********************!*\
  !*** ./app/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nconst connect = async ()=>{\n    const connectionState = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState;\n    if (connectionState === 1) {\n        console.log(\"Already connected\");\n        return;\n    }\n    if (connectionState === 2) {\n        console.log(\"Connecting...\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            dbName: \"restapinext14\",\n            bufferCommands: false\n        });\n        console.log(\"Connected\");\n    } catch (error) {\n        console.log(\"Error in connecting database\", error);\n        throw new Error(\"Error connecting to database\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUjtBQUVKO0FBRUEsTUFBTUMsVUFBVTtJQUNkLE1BQU1DLGtCQUFrQk4sNERBQW1CLENBQUNRLFVBQVU7SUFFdEQsSUFBSUYsb0JBQW9CLEdBQUc7UUFDekJHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFDQSxJQUFJSixvQkFBb0IsR0FBRztRQUN6QkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNVix1REFBZ0IsQ0FBQ0MsYUFBYztZQUNuQ1UsUUFBUTtZQUNSQyxnQkFBZ0I7UUFDbEI7UUFDQUgsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPRyxPQUFPO1FBQ2RKLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NHO1FBQzVDLE1BQU0sSUFBSVQsTUFBTTtJQUNsQjtBQUNGO0FBQ0EsaUVBQWVDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaXMvLi9hcHAvbGliL2RiLnRzPzU4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3Rpb25TdGF0ZSA9IG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZTtcblxuICBpZiAoY29ubmVjdGlvblN0YXRlID09PSAxKSB7XG4gICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGNvbm5lY3Rpb25TdGF0ZSA9PT0gMikge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGluZy4uLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkhLCB7XG4gICAgICBkYk5hbWU6IFwicmVzdGFwaW5leHQxNFwiLFxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gY29ubmVjdGluZyBkYXRhYmFzZVwiLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBkYXRhYmFzZVwiKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNvbm5lY3QiLCJjb25uZWN0aW9uU3RhdGUiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYk5hbWUiLCJidWZmZXJDb21tYW5kcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/modals/notes.ts":
/*!*********************************!*\
  !*** ./app/lib/modals/notes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// import mongoose from \"mongoose\";\nconst NoteSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    user: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Types.ObjectId,\n        ref: \"User\"\n    }\n});\nconst Note = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Note || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Note\", NoteSchema);\n// module.exports = models.Note || model(\"Note\", NoteSchema);\n//const Note = models.Note || model(\"Note\", NoteSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL21vZGFscy9ub3Rlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDeEQsbUNBQW1DO0FBQ25DLE1BQU1JLGFBQWEsSUFBSUgsNENBQU1BLENBQUM7SUFDNUJJLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDQyxhQUFhO1FBQUVILE1BQU1DO0lBQU87SUFDNUJHLE1BQU07UUFBRUosTUFBTU4sMkNBQUtBLENBQUNXLFFBQVE7UUFBRUMsS0FBSztJQUFPO0FBQzVDO0FBRUEsTUFBTUMsT0FBT1gsNENBQU1BLENBQUNXLElBQUksSUFBSVYsK0NBQUtBLENBQUMsUUFBUUM7QUFDMUMsNkRBQTZEO0FBQzdELHdEQUF3RDtBQUV4RCxpRUFBZVMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3QtYXBpcy8uL2FwcC9saWIvbW9kYWxzL25vdGVzLnRzP2VlYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZXMsIFNjaGVtYSwgbW9kZWxzLCBtb2RlbCB9IGZyb20gXCJtb25nb29zZVwiO1xuLy8gaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxuICB1c2VyOiB7IHR5cGU6IFR5cGVzLk9iamVjdElkLCByZWY6IFwiVXNlclwiIH0sXG59KTtcblxuY29uc3QgTm90ZSA9IG1vZGVscy5Ob3RlIHx8IG1vZGVsKFwiTm90ZVwiLCBOb3RlU2NoZW1hKTtcbi8vIG1vZHVsZS5leHBvcnRzID0gbW9kZWxzLk5vdGUgfHwgbW9kZWwoXCJOb3RlXCIsIE5vdGVTY2hlbWEpO1xuLy9jb25zdCBOb3RlID0gbW9kZWxzLk5vdGUgfHwgbW9kZWwoXCJOb3RlXCIsIE5vdGVTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuIl0sIm5hbWVzIjpbIlR5cGVzIiwiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJOb3RlU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInVzZXIiLCJPYmplY3RJZCIsInJlZiIsIk5vdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/modals/notes.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/modals/user.ts":
/*!********************************!*\
  !*** ./app/lib/modals/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL21vZGFscy91c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxhQUFhLElBQUlILDRDQUFNQSxDQUFDO0lBQzVCSSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3BEQyxVQUFVO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3ZERSxVQUFVO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztBQUMzQztBQUVBLE1BQU1JLE9BQU9ULDRDQUFNQSxDQUFDUyxJQUFJLElBQUlWLCtDQUFLQSxDQUFDLFFBQVFFO0FBRTFDLGlFQUFlUSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdC1hcGlzLy4vYXBwL2xpYi9tb2RhbHMvdXNlci50cz8yOGI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxufSk7XG5cbmNvbnN0IFVzZXIgPSBtb2RlbHMuVXNlciB8fCBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJVc2VyU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/modals/user.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(dashboard)%2Fnotes%2Froute&page=%2Fapi%2F(dashboard)%2Fnotes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(dashboard)%2Fnotes%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();