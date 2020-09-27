import React, { useState, useCallback, useContext, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { useAuth } from '../Auth';

const storageKey = 'favorites';

const FavoritesContext = React.createContext(null);

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use Favorites without a provider`);
  }
  return context;
}

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const { authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      const savedFavorites = storage.getinsert(storageKey, []);
      setFavorites(savedFavorites);
    }
  }, [authenticated]);

  const addToFavorites = useCallback(
    (newFavorite) => {
      const newFavorites = [...favorites, newFavorite];
      setFavorites(newFavorites);
      storage.set(storageKey, newFavorites);
    },
    [favorites]
  );

  const removeFromFavorites = useCallback(
    (favoriteToRemove) => {
      const currentFavs = [...favorites];
      currentFavs.splice(currentFavs.indexOf(favoriteToRemove), 1);
      setFavorites(currentFavs);
      storage.set(storageKey, currentFavs);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
export { useFavorites };
