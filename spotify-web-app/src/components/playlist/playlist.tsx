import React from 'react'

type Props = {
    handlePlaylist : React.MouseEventHandler<HTMLButtonElement>,
    handleTitleChange : React.ChangeEventHandler<HTMLInputElement>,
    handleDescChange : React.ChangeEventHandler<HTMLTextAreaElement>,
}

const Playlist = ({ handlePlaylist, handleTitleChange, handleDescChange } : Props) => {
  return (
        <div className='grid-playlist'>
        <form>
            <h2 className='h2-playlist'>Create Playlist</h2>
            <ul className='list'>
                <li className='input-title'>
                    <label htmlFor="title">Title Playlist</label>
                    <input className="input" type="text" id="title" name="title" onChange={handleTitleChange} required minLength={10}/>
                </li>
                <li className='input-title'>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" onChange={handleDescChange}/>
                </li>
            </ul>
            <div className='btn-playlist'><button className="btn-play" type="submit" onClick={handlePlaylist}>Create playlist</button></div>

        </form></div>
  )
}

export default Playlist