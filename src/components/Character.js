import React, { useState }  from 'react';

function Character({char, url}) {
  const [info, setInfo] = useState(false)
  
  return (
    <div>
      <div onClick={() => setInfo(!info)} style={{fontSize: '2em', cursor: 'pointer'}}>{!info ? <i class="fas fa-sort-down"></i> : <i class="fas fa-sort-up"></i> } {char.name} {!info ? <i class="fas fa-sort-down"></i> : <i class="fas fa-sort-up"></i> }</div>
      {info ? (
        <>
          <div>Gender: {char.gender}</div>
          <div>Height: {char.height}</div>
        </>
      ) : null}
    </div>
  )
}

export default Character;
