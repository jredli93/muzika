import React from "react";

const MusicVideo = (props) => {
console.log(props);
let{song, artist, src} = props.el
    return(
        <article className="music__box">
          <iframe src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
    )
}


export default MusicVideo