import "./VOD.css"

import VOD from "../../assets/vod.mp4"

export default function Video () {
    return (
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="VOD"
        >
            <source src={VOD} type="video/mp4" />
        </video>
    )
}