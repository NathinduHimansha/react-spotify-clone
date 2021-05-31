import React, { useState, useEffect } from "react";
import "./SideBar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function SideBar() {
  const [{ playLists }, dispatch] = useDataLayerValue();
  const [isPlaylistEmpty, setIsPlaylistEmpty] = useState(true);

  //check playlists availble or not(obj size)
  useEffect(() => {
    if (ObjectSize(playLists.items) > 0) {
      setIsPlaylistEmpty(false);
    }
  }, [playLists]);

  //return object values ize
  let ObjectSize = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOptions title="Home" Icon={HomeIcon} />
      <SidebarOptions title="Search" Icon={SearchIcon} />
      <SidebarOptions title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playLists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}

      {!isPlaylistEmpty ? (
        playLists?.items?.map((playlist) => <SidebarOptions title={playlist.name} />)
      ) : (
        <span className="playlist_text">no playlists to display</span>
      )}
    </div>
  );
}

export default SideBar;
