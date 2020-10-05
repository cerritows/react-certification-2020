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
  const { user } = useAuth();

  const createStorageKey = (userid) => {
    return userid + FAVORITES_STORAGE_KEY;
  };

  useEffect(() => {
    if (user) {
      const savedFavorites = storage.getinsert(createStorageKey(user), []);
      setFavorites(savedFavorites);
    }
  }, [user]);

  useEffect(() => {
    storage.set(createStorageKey(user), favorites);
  }, [favorites, user]);

  const addToFavorites = useCallback(
    (newFavorite) => {
      const newFavorites = [...favorites, newFavorite];
      setFavorites(newFavorites);
    },
    [favorites]
  );

  const removeFromFavorites = useCallback(
    (favoriteToRemove) => {
      const currentFavs = [...favorites];
      currentFavs.splice(currentFavs.indexOf(favoriteToRemove), 1);
      setFavorites(currentFavs);
    },
    [favorites]
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
