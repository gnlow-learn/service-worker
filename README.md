# service-worker

## memo
- 왜인지 service worker에서 한 `console.log`는 firefox는 안뜨고 chrome에서만 뜬다
- Firefox는 service worker에서 import 못씀
    - [caniuse - ServiceWorker API: Support for ECMAScript modules](https://caniuse.com/mdn-api_serviceworker_ecmascript_modules)
    - [Bugzilla - Implement "module" service workers](https://bugzilla.mozilla.org/show_bug.cgi?id=1360870)
