import React, { useState }  from 'react';

function Character({char, url}) {
  const [info, setInfo] = useState(false)
  
  return (
    <div>
      <div onClick={() => setInfo(!info)}>{char.name}</div>
      {info ? (
        <>
          <div>{char.gender}</div>
          <div>{char.height}</div>
        </>
      ) : null}
    </div>
  )
}

export default Character;
