/* eslint-disable no-restricted-globals */
import { version } from "@parcel/service-worker";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(version).then((cache) => {
      return self.__WB_MANIFEST.map((resource) => {
        // Cache each resource from the manifest
        return cache.add(resource.url);
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // Delete old caches
          if (key !== version) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
