import { Stack } from 'expo-router';

import { Text, View, Image, FlatList } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import EventListItem from '~/components/EventListItem';

import events from '~/assets/Events.json';

export default function Events() {
  return (
    <>
      <Stack.Screen
        options={{ title: 'Events', headerTintColor: 'black', headerTitleAlign: 'center' }}
      />
      {/* Event List item */}
      {/* <EventListItem event={events[0]} /> */}
      <FlatList
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
        className="bg-white"
      />
    </>
  );
}
