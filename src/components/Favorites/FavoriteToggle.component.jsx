import React, { useCallback } from 'react';
import { useAuth } from '../../providers/Auth';
import { useFavorites } from '../../providers/Favorites';

import { BorderlessButton } from '../Button';
import { LabeledIcon } from '../Icon';

function FavoriteToggle({ id }) {
  const { authenticated } = useAuth();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const addFavorite = useCallback(() => {
    addToFavorites(id);
  }, [id, addToFavorites]);

  const removeFavorite = useCallback(() => {
    removeFromFavorites(id);
  }, [id, removeFromFavorites]);

  return (
    <>
      {authenticated &&
        (favorites.includes(id) ? (
          <BorderlessButton onClick={removeFavorite}>
            <LabeledIcon name="CheckBox" label="Favorite" size="16" />
          </BorderlessButton>
        ) : (
          <BorderlessButton onClick={addFavorite}>
            <LabeledIcon name="CheckBoxOutlineBlank" label="Favorite" size="16" />
          </BorderlessButton>
        ))}
    </>
  );
}

export default FavoriteToggle;
