import React, { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { useAuth } from '../../../context/Auth/AuthContext';
import Dialog from './Dialog';
import YoutubeService from '../../../utils/services/YoutubeService';
import { useVideoContext } from '../../../context/VideoContext';
import useStyles from './FavoriteButton.component.styles';

export default function FavoriteButton() {
  const { state } = useVideoContext();
  const classes = useStyles();
  const { redButton, greyButton } = classes;
  const { authenticated } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const [fav, setFav] = useState(() => {
    const saved = YoutubeService.getFavorite(state.videoId);
    return saved;
  });

  const handleFav = () => {
    setFav(!fav);
    YoutubeService.updateFavorites(state.videoId);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div data-testid="favorite-button-section">
      <Tooltip title={fav ? 'Remove from favorites' : 'Add to favorites'} aria-label="add">
        <IconButton
          onClick={authenticated ? handleFav : handleClickOpenDialog}
          aria-label="add to favorites"
        >
          <FavoriteIcon className={fav ? redButton : greyButton} />
        </IconButton>
      </Tooltip>
      <Dialog open={openDialog} onClose={handleCloseDialog} />
    </div>
  );
}
