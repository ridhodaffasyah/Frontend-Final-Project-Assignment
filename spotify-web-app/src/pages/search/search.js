import React, { useState, useEffect } from 'react'

import { Input, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Track from '../../components/track/track'
import axios from 'axios'
import Playlist from '../../components/playlist/playlist'
import Button from '../../components/button/button'
import { useSelector } from 'react-redux'

const Search = () => {
  const [track, setTrack] = useState([])
  const [query, setQuery] = useState('')
  const [selectedTrack, setSelectedTrack] = useState([])
  const [userId, setUserId] = useState('')
  const [titleForm, setTitleForm] = useState('')
  const [descForm, setDescForm] = useState('')
  
  const userToken = useSelector(state => state.user.userToken)

  const fetchData = () => {
    if (!query) {
      return
    }
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
      headers: {
        Authorization: 'Bearer ' + userToken
      }
    }).then((response) => {
      setTrack(response.data.tracks.items)
    }).catch((error) => {
      console.log(error)
    })
  }

  const fetchUser = () => {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + userToken
      }
    })
      .then(res => {
        setUserId(res.data.id)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handlePlaylistInitiate = (e) => {
    e.preventDefault()
    if (titleForm.length < 10) { alert('Title must be at least 10 characters') }
    const play = axios.post(`https://api.spotify.com/v1/users/${userId}/playlists`, JSON.stringify({
      name: titleForm,
      description: descForm,
      public: false
    }), {
      headers: {
        Authorization: 'Bearer ' + userToken
      }
    })
      .then(res => {
        // setPlaylist(res.data);
        return res.data
      })
      .catch(err => {
        console.log(err)
      })

    return play
  }

  const addTrackToPlaylist = (playlistID) => {
    axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, JSON.stringify({
      uris: selectedTrack
    }), {
      headers: {
        Authorization: 'Bearer ' + userToken
      }
    })
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  }

  const clearState = () => {
    setSelectedTrack([])
    setTitleForm('')
    setDescForm('')
  }

  const handleForm = (e) => {
    if (titleForm.length < 10) { 
      alert('Title must be at least 10 characters') 
    } else {
      handlePlaylist(e);
    }
  }

  const handlePlaylist = async (e) => {
    e.preventDefault()
    const playlistId = await handlePlaylistInitiate(e)
    addTrackToPlaylist(playlistId.id)
    alert('Playlist created successfully!')
    clearState()
  }

  const handleInput = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const addToList = (id) => {
    let selectedSong = []
    selectedSong = selectedTrack
    selectedSong.push(id)
    setSelectedTrack(selectedSong)
  }

  const removeFromList = (id) => {
    const selectedSong = selectedTrack
    for (let i = 0; i < selectedTrack.length; i++) {
      if (selectedTrack[i] === id) {
        selectedSong.splice(i, 1)
      }
    }
    setSelectedTrack(selectedSong)
  }

  const getStatus = (id) => {
    let status = false
    for (let i = 0; i < selectedTrack.length; i++) {
      if (selectedTrack[i] === id) {
        status = true
      }
    }
    return status
  }

  const handleTitleChange = (e) => {
    const { value } = e.target
    setTitleForm(value)
  }

  const handleDescChange = (e) => {
    const { value } = e.target
    setDescForm(value)
  }

  useEffect(() => {
    if (userToken) {
      fetchUser()
    }
  }, [])

  return (
        <div className='center-content'>
            <h1 className='title'>Track List<span>.</span></h1>
            <div className='input'>
                <Input placeholder='Cara track favoritmu..' size='md' aria-label={'searchBox'} className='search-input' onChange={e => handleInput(e)}/>
                <IconButton
                className='search-icon'
                icon={<SearchIcon className='search-button' />}
                onClick={fetchData} aria-label={"Search"}/>
            </div>
            <Playlist handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} handlePlaylist={handleForm}></Playlist>
            <div className='grid'>
                {track.map((track) => {
                const status = getStatus(track.uri)
                return (
                    <Track
                        testid="track"
                        key={track.uri}
                        trackImg={track.album.images[0].url}
                        trackArtist={track.artists[0].name}
                        trackAlbum={track.album.name}
                        trackName={track.name}
                        trackDuration={Math.floor(track.duration_ms / 1000 / 60) + 'm ' + Math.floor(((track.duration_ms / 1000 / 60) % 1) * 10) + 's'}
                    >
                        <Button statusSelect={status} removeFromList={removeFromList} addToList={addToList} id={track.uri} />
                    </Track>)
                })}
            </div>
        </div>
  )
}

export default Search
