import React from 'react';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import playlistData from '../Playlist/playlist.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Audio(props) {
  const [trackTitle, setTrackTitle] = useState('None');
  const [trackArtwork, setTrackArtwork] = useState();
  const [trackArtist, setTrackArtist] = useState('None');

  useEffect(() => {
    playerSetup();
    let mounted = true;

    const listener = TrackPlayer.addEventListener(
      'playback-track-changed',
      async (data) => {
        const track = await TrackPlayer.getTrack(data.nextTrack);
        if (!mounted) return;
        setTrackTitle(track.title);
        setTrackArtist(track.artist);
        setTrackArtwork(track.artwork);
      },
    );
    return () => {
      mounted = false;
      listener.remove();
    };
  }, []);

  const playbackState = usePlaybackState();
  const playerSetup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
  };
  const playButton = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: '2222',
        url:
          'https://drive.google.com/uc?export=download&id=1VM9_umeyzJn0v1pRzR1BSm9y3IhZ3c0E',
        title: 'Soul Searching (Demo)',
        artist: 'David Chavez',
        artwork: 'https://i.picsum.photos/id/200/200/200.jpg',
        duration: 77,
      });
      await TrackPlayer.add(playlistData);

      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  const nextButton = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (e) {
      console.log(e);
    }
  };
  const previousButton = async () => {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (e) {
      console.log(e);
    }
  };
  const state = () => {
    switch (playbackState) {
      case TrackPlayer.STATE_NONE:
        return 'None';
      case TrackPlayer.STATE_PLAYING:
        return 'Playing';
      case TrackPlayer.STATE_PAUSED:
        return 'Paused';
      case TrackPlayer.STATE_STOPPED:
        return 'Stopped';
      case TrackPlayer.STATE_BUFFERING:
        return 'Buffering';
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image style={styles.img} source={{uri: trackArtwork}} />
        </View>
        <View>
          <Text>{trackTitle}</Text>
          <Text>{trackArtist}</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => previousButton()}>
            <Icon name={'skip-previous'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playButton()}>
            <Icon
              name={state() === 'Playing' ? 'pause' : 'play-arrow'}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nextButton()}>
            <Icon name={'skip-next'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#AAAAAA',
    elevation: 2,
    shadowColor: '#333333',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowRadius: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 100,
    backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  sign: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
