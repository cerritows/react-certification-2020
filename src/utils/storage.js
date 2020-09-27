const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  getinsert(key, value) {
    try {
      const rawValue = window.localStorage.getItem(key);

      if (rawValue == null) {
        window.localStorage.setItem(key, JSON.stringify(value));
        return value;
      }

      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
    }
  },
};

export { storage };
