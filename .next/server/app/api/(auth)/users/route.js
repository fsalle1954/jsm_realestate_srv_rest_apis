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
exports.id = "app/api/(auth)/users/route";
exports.ids = ["app/api/(auth)/users/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(auth)%2Fusers%2Froute&page=%2Fapi%2F(auth)%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(auth)%2Fusers%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(auth)%2Fusers%2Froute&page=%2Fapi%2F(auth)%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(auth)%2Fusers%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_fernando_8722a468_93b7_4df5_85f5_899ac3fe292f_home_fernando_salle_Documents_2_reactnative_jsm_realestate_srv_rest_apis_app_api_auth_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/(auth)/users/route.ts */ \"(rsc)/./app/api/(auth)/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/(auth)/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/(auth)/users/route\"\n    },\n    resolvedPagePath: \"/media/fernando/8722a468-93b7-4df5-85f5-899ac3fe292f/home/fernando-salle/Documents_2/reactnative/jsm_realestate_srv/rest-apis/app/api/(auth)/users/route.ts\",\n    nextConfigOutput,\n    userland: _media_fernando_8722a468_93b7_4df5_85f5_899ac3fe292f_home_fernando_salle_Documents_2_reactnative_jsm_realestate_srv_rest_apis_app_api_auth_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/(auth)/users/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkYoYXV0aCklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGKGF1dGgpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkYoYXV0aCklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZtZWRpYSUyRmZlcm5hbmRvJTJGODcyMmE0NjgtOTNiNy00ZGY1LTg1ZjUtODk5YWMzZmUyOTJmJTJGaG9tZSUyRmZlcm5hbmRvLXNhbGxlJTJGRG9jdW1lbnRzXzIlMkZyZWFjdG5hdGl2ZSUyRmpzbV9yZWFsZXN0YXRlX3NydiUyRnJlc3QtYXBpcyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGbWVkaWElMkZmZXJuYW5kbyUyRjg3MjJhNDY4LTkzYjctNGRmNS04NWY1LTg5OWFjM2ZlMjkyZiUyRmhvbWUlMkZmZXJuYW5kby1zYWxsZSUyRkRvY3VtZW50c18yJTJGcmVhY3RuYXRpdmUlMkZqc21fcmVhbGVzdGF0ZV9zcnYlMkZyZXN0LWFwaXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJHO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdC1hcGlzLz8zZTdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9tZWRpYS9mZXJuYW5kby84NzIyYTQ2OC05M2I3LTRkZjUtODVmNS04OTlhYzNmZTI5MmYvaG9tZS9mZXJuYW5kby1zYWxsZS9Eb2N1bWVudHNfMi9yZWFjdG5hdGl2ZS9qc21fcmVhbGVzdGF0ZV9zcnYvcmVzdC1hcGlzL2FwcC9hcGkvKGF1dGgpL3VzZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS8oYXV0aCkvdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvKGF1dGgpL3VzZXJzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL21lZGlhL2Zlcm5hbmRvLzg3MjJhNDY4LTkzYjctNGRmNS04NWY1LTg5OWFjM2ZlMjkyZi9ob21lL2Zlcm5hbmRvLXNhbGxlL0RvY3VtZW50c18yL3JlYWN0bmF0aXZlL2pzbV9yZWFsZXN0YXRlX3Nydi9yZXN0LWFwaXMvYXBwL2FwaS8oYXV0aCkvdXNlcnMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpLyhhdXRoKS91c2Vycy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(auth)%2Fusers%2Froute&page=%2Fapi%2F(auth)%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(auth)%2Fusers%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/(auth)/users/route.ts":
/*!***************************************!*\
  !*** ./app/api/(auth)/users/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./app/lib/db.ts\");\n/* harmony import */ var _lib_modals_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/modals/user */ \"(rsc)/./app/lib/modals/user.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ObjectId = (__webpack_require__(/*! mongoose */ \"mongoose\").Types).ObjectId;\nconst GET = async ()=>{\n    try {\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const users = await _lib_modals_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(users), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(\"Error in fetching users\" + error, {\n            status: 500\n        });\n    }\n};\nconst POST = async (request)=>{\n    try {\n        const body = await request.json();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        const newUser = new _lib_modals_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"](body);\n        await newUser.save();\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"User is created\",\n            user: newUser\n        }), {\n            status: 201\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            Message: \"Error in creating user\",\n            error\n        }), {\n            status: 500\n        });\n    }\n};\nconst PATCH = async (request)=>{\n    try {\n        const body = await request.json();\n        const { userId, newUsername } = body;\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        if (!userId || !newUsername) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringfy({\n                message: \"ID or new username are requerid\"\n            }), {\n                status: 400\n            });\n        }\n        if (!mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Invalid UserId\"\n            }), {\n                status: 400\n            });\n        }\n        const updatedUser = await _lib_modals_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({\n            _id: new ObjectId(userId)\n        }, {\n            username: newUsername\n        }, {\n            new: true\n        });\n        if (!updatedUser) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"User not found or didn't update user sucessfully.\"\n            }), {\n                status: 400\n            });\n        }\n        // Return a success response\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Username updated successfully\",\n            user: updatedUser\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Error updating username\"\n        }), {\n            status: 500\n        });\n    }\n};\nconst DELETE = async (request)=>{\n    try {\n        const { searchParams } = new URL(request.url);\n        const userId = searchParams.get(\"userId\");\n        // Validate the userId\n        if (!userId) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"UserId is required\"\n            }), {\n                status: 400\n            });\n        }\n        // Validate if userId is a valid ObjectId\n        if (!mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId.isValid(userId)) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"Invalid userId\"\n            }), {\n                status: 400\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        // TODO\n        const deletedUser = await _lib_modals_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(new mongoose__WEBPACK_IMPORTED_MODULE_3__.Types.ObjectId(userId));\n        // Check if the user was found and deleted\n        if (!deletedUser) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"User not found\"\n            }), {\n                status: 404\n            });\n        }\n        // Return a success response\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Use deleted successfully\"\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            message: \"Error deleting user\",\n            error\n        }), {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxJQUFJdkIscURBQVlBLENBQ3JCUyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVTLFNBQVM7WUFBcUIsSUFDL0M7Z0JBQ0VSLFFBQVE7WUFDVjtRQUVKO1FBRUEseUNBQXlDO1FBRXpDLElBQUksQ0FBQ1IsMkNBQUtBLENBQUNDLFFBQVEsQ0FBQ3NCLE9BQU8sQ0FBQ0gsU0FBUztZQUNuQyxPQUFPLElBQUl2QixxREFBWUEsQ0FBQ1MsS0FBS0MsU0FBUyxDQUFDO2dCQUFFUyxTQUFTO1lBQWlCLElBQUk7Z0JBQ3JFUixRQUFRO1lBQ1Y7UUFDRjtRQUVBLE1BQU1WLG1EQUFPQTtRQUNiLE9BQU87UUFFUCxNQUFNb0MsY0FBYyxNQUFNbkMsd0RBQUlBLENBQUNvQyxpQkFBaUIsQ0FDOUMsSUFBSW5DLDJDQUFLQSxDQUFDQyxRQUFRLENBQUNtQjtRQUdyQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDYyxhQUFhO1lBQ2hCLE9BQU8sSUFBSXJDLHFEQUFZQSxDQUFDUyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVTLFNBQVM7WUFBaUIsSUFBSTtnQkFDckVSLFFBQVE7WUFDVjtRQUNGO1FBQ0EsNEJBQTRCO1FBQzVCLE9BQU8sSUFBSVgscURBQVlBLENBQ3JCUyxLQUFLQyxTQUFTLENBQUM7WUFDYlMsU0FBUztRQUNYLElBQ0E7WUFDRVIsUUFBUTtRQUNWO0lBRUosRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJWixxREFBWUEsQ0FDckJTLEtBQUtDLFNBQVMsQ0FBQztZQUNiUyxTQUFTO1lBQ1RQO1FBQ0YsSUFDQTtZQUNFRCxRQUFRO1FBQ1Y7SUFFSjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaXMvLi9hcHAvYXBpLyhhdXRoKS91c2Vycy9yb3V0ZS50cz9kZDA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb2RhbHMvdXNlclwiO1xuaW1wb3J0IHsgVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgT2JqZWN0SWQgPSByZXF1aXJlKFwibW9uZ29vc2VcIikuVHlwZXMuT2JqZWN0SWQ7XG5cbmV4cG9ydCBjb25zdCBHRVQgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdCgpO1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKCk7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkodXNlcnMpLCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFwiRXJyb3IgaW4gZmV0Y2hpbmcgdXNlcnNcIiArIGVycm9yLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIGF3YWl0IGNvbm5lY3QoKTtcbiAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoYm9keSk7XG4gICAgYXdhaXQgbmV3VXNlci5zYXZlKCk7XG5cbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJVc2VyIGlzIGNyZWF0ZWRcIiwgdXNlcjogbmV3VXNlciB9KSxcbiAgICAgIHsgc3RhdHVzOiAyMDEgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIE1lc3NhZ2U6IFwiRXJyb3IgaW4gY3JlYXRpbmcgdXNlclwiLFxuICAgICAgICBlcnJvcixcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgIH1cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUEFUQ0ggPSBhc3luYyAocmVxdWVzdDogUmVxdWVzdCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIGNvbnN0IHsgdXNlcklkLCBuZXdVc2VybmFtZSB9ID0gYm9keTtcblxuICAgIGF3YWl0IGNvbm5lY3QoKTtcblxuICAgIGlmICghdXNlcklkIHx8ICFuZXdVc2VybmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5nZnkoeyBtZXNzYWdlOiBcIklEIG9yIG5ldyB1c2VybmFtZSBhcmUgcmVxdWVyaWRcIiB9KSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIVR5cGVzLk9iamVjdElkLmlzVmFsaWQodXNlcklkKSkge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBcIkludmFsaWQgVXNlcklkXCIgfSksIHtcbiAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZUFuZFVwZGF0ZShcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQodXNlcklkKSB9LFxuICAgICAgeyB1c2VybmFtZTogbmV3VXNlcm5hbWUgfSxcbiAgICAgIHsgbmV3OiB0cnVlIH1cbiAgICApO1xuXG4gICAgaWYgKCF1cGRhdGVkVXNlcikge1xuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kIG9yIGRpZG4ndCB1cGRhdGUgdXNlciBzdWNlc3NmdWxseS5cIixcbiAgICAgICAgfSksXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGEgc3VjY2VzcyByZXNwb25zZVxuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtZXNzYWdlOiBcIlVzZXJuYW1lIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICAgIHVzZXI6IHVwZGF0ZWRVc2VyLFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1lc3NhZ2U6IFwiRXJyb3IgdXBkYXRpbmcgdXNlcm5hbWVcIixcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgIH1cbiAgICApO1xuICB9XG59O1xuZXhwb3J0IGNvbnN0IERFTEVURSA9IGFzeW5jIChyZXF1ZXN0OiBSZXF1ZXN0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJ1c2VySWRcIik7XG5cbiAgICAvLyBWYWxpZGF0ZSB0aGUgdXNlcklkXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6IFwiVXNlcklkIGlzIHJlcXVpcmVkXCIgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZSBpZiB1c2VySWQgaXMgYSB2YWxpZCBPYmplY3RJZFxuXG4gICAgaWYgKCFUeXBlcy5PYmplY3RJZC5pc1ZhbGlkKHVzZXJJZCkpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJJbnZhbGlkIHVzZXJJZFwiIH0pLCB7XG4gICAgICAgIHN0YXR1czogNDAwLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgY29ubmVjdCgpO1xuICAgIC8vIFRPRE9cblxuICAgIGNvbnN0IGRlbGV0ZWRVc2VyID0gYXdhaXQgVXNlci5maW5kQnlJZEFuZERlbGV0ZShcbiAgICAgIG5ldyBUeXBlcy5PYmplY3RJZCh1c2VySWQpXG4gICAgKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSB1c2VyIHdhcyBmb3VuZCBhbmQgZGVsZXRlZFxuICAgIGlmICghZGVsZXRlZFVzZXIpIHtcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZFwiIH0pLCB7XG4gICAgICAgIHN0YXR1czogNDA0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJldHVybiBhIHN1Y2Nlc3MgcmVzcG9uc2VcbiAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbWVzc2FnZTogXCJVc2UgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBtZXNzYWdlOiBcIkVycm9yIGRlbGV0aW5nIHVzZXJcIixcbiAgICAgICAgZXJyb3IsIC8vIFNlbmQgYSB1c2VyLWZyaWVuZGx5IGVycm9yIG1lc3NhZ2VcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgIH1cbiAgICApO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNvbm5lY3QiLCJVc2VyIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlcXVpcmUiLCJHRVQiLCJ1c2VycyIsImZpbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZXJyb3IiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJqc29uIiwibmV3VXNlciIsInNhdmUiLCJtZXNzYWdlIiwidXNlciIsIk1lc3NhZ2UiLCJQQVRDSCIsInVzZXJJZCIsIm5ld1VzZXJuYW1lIiwic3RyaW5nZnkiLCJpc1ZhbGlkIiwidXBkYXRlZFVzZXIiLCJmaW5kT25lQW5kVXBkYXRlIiwiX2lkIiwidXNlcm5hbWUiLCJuZXciLCJERUxFVEUiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJnZXQiLCJkZWxldGVkVXNlciIsImZpbmRCeUlkQW5kRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/(auth)/users/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/db.ts":
/*!***********************!*\
  !*** ./app/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nconst connect = async ()=>{\n    const connectionState = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState;\n    if (connectionState === 1) {\n        console.log(\"Already connected\");\n        return;\n    }\n    if (connectionState === 2) {\n        console.log(\"Connecting...\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            dbName: \"restapinext14\",\n            bufferCommands: false\n        });\n        console.log(\"Connected\");\n    } catch (error) {\n        console.log(\"Error in connecting database\", error);\n        throw new Error(\"Error connecting to database\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUjtBQUVKO0FBRUEsTUFBTUMsVUFBVTtJQUNkLE1BQU1DLGtCQUFrQk4sNERBQW1CLENBQUNRLFVBQVU7SUFFdEQsSUFBSUYsb0JBQW9CLEdBQUc7UUFDekJHLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFDQSxJQUFJSixvQkFBb0IsR0FBRztRQUN6QkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNVix1REFBZ0IsQ0FBQ0MsYUFBYztZQUNuQ1UsUUFBUTtZQUNSQyxnQkFBZ0I7UUFDbEI7UUFDQUgsUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPRyxPQUFPO1FBQ2RKLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NHO1FBQzVDLE1BQU0sSUFBSVQsTUFBTTtJQUNsQjtBQUNGO0FBQ0EsaUVBQWVDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0LWFwaXMvLi9hcHAvbGliL2RiLnRzPzU4ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbmNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3Rpb25TdGF0ZSA9IG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZTtcblxuICBpZiAoY29ubmVjdGlvblN0YXRlID09PSAxKSB7XG4gICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGNvbm5lY3RlZFwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGNvbm5lY3Rpb25TdGF0ZSA9PT0gMikge1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGluZy4uLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkhLCB7XG4gICAgICBkYk5hbWU6IFwicmVzdGFwaW5leHQxNFwiLFxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgaW4gY29ubmVjdGluZyBkYXRhYmFzZVwiLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBkYXRhYmFzZVwiKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNvbm5lY3QiLCJjb25uZWN0aW9uU3RhdGUiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkYk5hbWUiLCJidWZmZXJDb21tYW5kcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/db.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2F(auth)%2Fusers%2Froute&page=%2Fapi%2F(auth)%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(auth)%2Fusers%2Froute.ts&appDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmedia%2Ffernando%2F8722a468-93b7-4df5-85f5-899ac3fe292f%2Fhome%2Ffernando-salle%2FDocuments_2%2Freactnative%2Fjsm_realestate_srv%2Frest-apis&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();