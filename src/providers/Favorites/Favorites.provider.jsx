import React, { useState, useCallback, useContext, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { useAuth } from '../Auth';
import { FAVORITES_STORAGE_KEY } from '../../utils/constants';

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
  const { user, authenticated } = useAuth();

  useEffect(() => {
    if (authenticated) {
      const savedFavorites = storage.getinsert(user + FAVORITES_STORAGE_KEY, []);
      setFavorites(savedFavorites);
    }
  }, [authenticated, user]);

  const addToFavorites = useCallback(
    (newFavorite) => {
      const newFavorites = [...favorites, newFavorite];
      setFavorites(newFavorites);
      storage.set(user + FAVORITES_STORAGE_KEY, newFavorites);
    },
    [favorites, user]
  );

  const removeFromFavorites = useCallback(
    (favoriteToRemove) => {
      const currentFavs = [...favorites];
      currentFavs.splice(currentFavs.indexOf(favoriteToRemove), 1);
      setFavorites(currentFavs);
      storage.set(user + FAVORITES_STORAGE_KEY, currentFavs);
    },
    [favorites, user]
  );

  const isFavorite = useCallback(
    (elementToTest) => {
      return favorites.includes(elementToTest);
    },
    [favorites]
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
export { useFavorites };
