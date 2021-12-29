import React from "react";

import { data } from "./data";
import MusicVideo from "./MusicVideo";
import Header from "./Header";


function App() {
  return (
    <>
      <Header/>
      <div className="music">
        {
          data.map((el) => {
            return <MusicVideo key={el.id} el={el} />
          }
        )}
      </div>
    </>
  );
}

export default App;
