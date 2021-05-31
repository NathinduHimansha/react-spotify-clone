import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ dicover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={dicover_weekly?.images[0].url} alt="" />
        <div className="body_info_text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{dicover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffe" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
      </div>
      {dicover_weekly?.tracks.items.map((item) => (
        <SongRow className="songrow_comp" track={item.track} />
      ))}
    </div>
  );
}

export default Body;
