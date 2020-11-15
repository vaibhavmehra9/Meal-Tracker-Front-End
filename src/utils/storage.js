function AppStorage() {
  const storage = window.localStorage;
  return {
    set: function (key, value) {
      storage.setItem(key, value);
    },
    get: function (key) {
      storage.getItem(key);
    },
    remove: function (key) {
      storage.removeItem(key);
    },
    clear: function () {
      storage.clear();
    },
  };
}

export default AppStorage();
