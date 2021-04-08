import React from 'react';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  useTrackPlayerProgress,
} from 'react-native-track-player';
import Slider from 'react-native-slider';

import playlistData from '../Playlist/playlist.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';
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
  const progress = useTrackPlayerProgress();
  return (
    <View style={styles.container}>
      <View style={styles.audioCard}>
        <View>
          <Image style={styles.img} source={{uri: trackArtwork}} />
        </View>
        <View>
          <Text>{trackTitle}</Text>
          <Text>{trackArtist}</Text>
        </View>
        <View style={styles.slider}>
          <Slider
            value={progress.position}
            minimumTrackTintColor="red"
            maximumValue={progress.duration}
          />
        </View>
        <View style={styles.audioContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => previousButton()}>
            <Icon name={'skip-previous'} size={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => playButton()}>
            <Icon
              name={state() === 'Playing' ? 'pause' : 'play-arrow'}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nextButton()}>
            <Icon name={'skip-next'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
