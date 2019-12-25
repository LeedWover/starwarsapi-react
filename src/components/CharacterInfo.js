import React, { useEffect, useState } from "react";

import { getData } from "../api";

function CharacterInfo({ location }) {
    const url = location.search.split('=')[1]
    const [characterInformations, setCharacterInfo] = useState({});

    useEffect(() => {
        getData(url).then(data => {
          setCharacterInfo(data);
        });
      }, [url]);

    return (
        <div>
            {characterInformations.name}
        </div>
    )
}

export default CharacterInfo
