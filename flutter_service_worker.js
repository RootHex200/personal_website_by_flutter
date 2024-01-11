'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d5a05027a7e049a7312ee1ae78abde41",
".git/config": "9064559c2b164e8d4466667dd3b58a98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "349ffcfdfda50bacdcd606678c095253",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "11b20887668378d927cbddf31ffc0acf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f968fe0fe7f3e5f55d2e776f0dab1ff",
".git/logs/refs/heads/main": "06dc63b19d10b116f71d847d2bf8f945",
".git/logs/refs/remotes/origin/main": "d80804addc0b8a1ada93445f98641ab6",
".git/objects/82/5e0dc4e2823eeffadf12400eeeafd781b01b28": "6a744490fe5147ba3a59f3b7fb2eee67",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/01c17e4bc6490a27dad02607d16d4741427278": "99b08bd05689e99d5dab7cf50d2fbe25",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1f/dba045efdb907c3c177f13b0d9337216db582f": "dc74ab20d046f01765c2986acf4f7eb1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/bf4271fe8552cb817fa6d49f4180de1bf3525d": "04b388de15ee37644a44b6eaef6d38b9",
".git/objects/2b/51e373d68c1558a95fcdd08ad34dd04d628ed7": "a95771723bab5103af8b2cb03a9fd26c",
".git/objects/33/d77f79ac589e1ef36eb991026f7fe5ac661121": "9fc8b1db08769d825797a5af7bff8bc4",
".git/objects/36/59f6ad9bafe59bed8d64f709244c665a934049": "89d7993e51d2dae9c0fe8bedcb0c1bcb",
".git/objects/37/fa90b4bc0734c9165c24694650ac2a0c75afe4": "b111b5d3eb4240659a6c79314563ce03",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/3f/6967d3322764dd22da9ef529901d5620a36717": "20a58e120e2f9daa306b0273cbf6c96a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/15d53790ba19baecea809a52175eb217b1dc3d": "c8854e22853cbaddff9680929c924e72",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/4ae4747f3fd13794edb92650b580bea7cf9f22": "672d560b665914d4ca7eb6978eb6ef46",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/f9918df804c1069ed96a0e9a38f681424795a3": "226865ba212b52a78ba58b22c8aa3373",
".git/objects/5c/0f5563608f59890815614f4dc427279ca2242b": "67069173e31ed557ff2d8b382ef9ce16",
".git/objects/70/36340175192ad7d24c0723fe8e887d17fb4ccb": "9f709ef3841fd4147248702842e092c5",
".git/objects/70/89967ff83e03d73686fc966f64eb9034ea45a6": "bb4fc9a09867eb190c634133fa1d88d3",
".git/objects/71/2b0bbd7bbdc90ff2f3b4fce9e705c4506c1c6c": "d3eea0a93c2d0bb76b428c568e7e3f25",
".git/objects/76/b73870ab4bb93eeb794d4bc167495e790b5c5a": "0fc14f7c802ce8ada2b0270f129ec523",
".git/objects/84/4ebe675d4714a9d0e9bb809f47ef78efd2741f": "1d3262131838e5f40bcd61b5a855285a",
".git/objects/84/a1177e711c71d2726db9fc316ea06af6cf6330": "fcb457719f36228e51138540b873699e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/92/8be9f71913a94a8c911ba42e63298466896bcd": "1458e1911e605581ceb68f4c324999cf",
".git/objects/92/a84e32d7e9c6b996a6159ae6964f9edd911076": "6ed88604239e8ede24b8b422b89b9bae",
".git/objects/96/4318ea10a5b2dc573ed410540afadc2470ce44": "b192c0c0f4d69fc7cea6e87e8b5781ac",
".git/objects/98/5bd70a53b741e5337ed39e027c0f105437ed28": "b82c9e8d88aa168936105a68cd26c94b",
".git/objects/b2/90e3c11223567cdb09dc4707809ce18d44d704": "12c9ea486671aa638688aa5a9a20fc74",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/77a554fcbe28b58991368fdc490e42d55c42bf": "3fc93826667631f84ffd82a0eb66d861",
".git/objects/b9/d192716767e12e5924346ed545920bdcc1d581": "82cca183ffcb9a247617ebe8b05b05d1",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/d6d2777423ad4753a439685cdca7ebd3618e3b": "cf7360f7cddf09694798f62fa7617305",
".git/objects/c0/05b89d11378821f7f657dcbc2f9bf5ad87d39c": "268b0c40addf62d320564c1bea0f2be8",
".git/objects/c5/a65882d7b7758d916e68572a4c86809b0470cc": "10b08a019e667f46d20324f062d81a70",
".git/objects/c6/047e687a2ba30ec38ef69541e88e30b2444b9d": "de763b5cb2a9c3792ac974791148d600",
".git/objects/ca/895c18a50c3765ed06a1a992d9c72f2fb0fed1": "e6f00acbac62af293ed97df79202c70e",
".git/objects/cc/17b224378926990d21950065a73a5077949ce7": "209e017dd4347c510e80de725f751ebb",
".git/objects/cd/65cc8e2e3c2df7b80105aca9fd558041dd02e4": "e5edec5be164d636e32bb39b115b6e09",
".git/objects/cf/7f0278f8c21b0cccfeeb84bcd1885bd8110fd6": "c2083caf3e06f2b21b1b9f6124314108",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/10ce05a62e4760ae7b526f4cf9758e96b48618": "b65536abe54e9638aeb53bfee82026d9",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/48dec52c1c47ae12c87169b5f2c286fe90ec44": "0ff5e85b46910502abb879b91a75bb39",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/fe1da67b289ec025fb61969e305485cd0c9343": "398ef1b1506b2020a3d107dc5bf42cea",
".git/objects/e9/36a7947b4ccc55b17614d4d0b9e7f7d6050bf3": "a8a7f1a894cb52ac4148dab2bae97c58",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/16d456b868dcfd67ed35fe881516f2339fbc87": "036cefd3167fdbb53ea80107882b1114",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/pack/pack-ecf702d3c57e9acf0b654f23e3e031dac9d5ccf0.idx": "ac66622e382fb6f96c23fd45217c8904",
".git/objects/pack/pack-ecf702d3c57e9acf0b654f23e3e031dac9d5ccf0.pack": "4bcc4b5c844cd2e7248a2067ffecdabe",
".git/refs/heads/main": "63925c8deeb6e97741e1501eb0e68366",
".git/refs/remotes/origin/main": "63925c8deeb6e97741e1501eb0e68366",
"assets/AssetManifest.bin": "1a440d4b1ffadfde9c2f991bedba46d3",
"assets/AssetManifest.bin.json": "44565cad367c06b3140215f4525a18c3",
"assets/AssetManifest.json": "515126b14ddc96d7dd1f269de2965c7f",
"assets/assets/images/122.jpg": "55b24d1e782ebf4977752ea847051a24",
"assets/assets/images/api.png": "5ca9b6ace6f655c3618905056ff5a3bf",
"assets/assets/images/auction.png": "24539d6c925cf7ed951bfb82e988ed1d",
"assets/assets/images/bdresult.png": "7c4dde2eb424e394c44f8613e0dbdc9e",
"assets/assets/images/email.png": "bead89aeb9bc5aebdc97232ad34d62b4",
"assets/assets/images/food.png": "a1698b4a24b0fe9d5610181e1d3c6683",
"assets/assets/images/front-end.png": "c8d7fd5148ea96bdb9ece57146a5fe02",
"assets/assets/images/github.png": "10c5e07903f7a9da327b7d86ee19fcf0",
"assets/assets/images/hh.png": "fbff3ddfc789d31e5272752a51a1f80b",
"assets/assets/images/linkedins.png": "918edd626a0f66ba9aee1633bc0a6ec8",
"assets/assets/images/playstore.png": "368b2ef331be24b6782eb26f7aa27972",
"assets/assets/images/reminder.png": "cffc617c7986e5dc82d15bec6b2cdb30",
"assets/assets/images/sabitur.png": "e78628acb754c4c608a76d00c851b1ea",
"assets/assets/images/security.png": "a2c8360d693af8805c376b13e490e44f",
"assets/assets/images/task.png": "59d540a08b9d45799f4ffc8805b86da3",
"assets/assets/images/telegram.png": "898f3084d9af62ae3bb7a5217ca35bf1",
"assets/assets/images/twitter.png": "58b537689276dd3432df40b6da7caaa3",
"assets/assets/images/wallpaper.png": "24df098e9bbdf63a72243aef696f935d",
"assets/assets/images/web.png": "4a9cfdb7ee694dc030cd8c266f82c664",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d1153ebcb57bdc2496802137c00acd8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7cde5c176ed557a801205de19f5b95f5",
"/": "7cde5c176ed557a801205de19f5b95f5",
"loding.gif": "b29833343440b298ef141015db83f904",
"main.dart.js": "867e2a61902d57f09825fa56410dd895",
"manifest.json": "a9c1050f52781596770f5f21085dd0e6",
"version.json": "f3e246751d879ad12b5b6efd988ee70e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
