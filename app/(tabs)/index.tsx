import { Stack } from 'expo-router';

import { Text, View, Image } from 'react-native';

import { ScreenContent } from '~/components/ScreenContent';
import EventListItem from '~/components/EventListItem';

import events from '~/assets/Events.json';

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      {/* Event List item */}
      <EventListItem event={events[0]} />
    </>
  );
}
