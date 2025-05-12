import { useLocalSearchParams, Stack } from 'expo-router';
import { Text, View, Image, Pressable } from 'react-native';
import events from '~/assets/Events.json';
import dayjs from 'dayjs';

export default function EventPage() {
  const { id } = useLocalSearchParams();

  const event = events.find((e) => e.id === id);

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <View className="flex-1 gap-3 bg-white p-3">
      <Stack.Screen
        options={{ title: 'Event', headerTintColor: 'black', headerTitleAlign: 'center' }}
      />

      <Image source={{ uri: event.image }} className="aspect-video w-full rounded-xl" />
      <Text className="text-3xl font-bold" numberOfLines={2}>
        {event.title}
      </Text>
      <Text className="text-lg font-semibold uppercase text-amber-800">
        {dayjs(event.datetime).format('ddd, D MMM')}· {dayjs(event.datetime).format('h:mm A')}
      </Text>
      <Text className="text-gray-700">{event.location}</Text>
      <Text className="text-lg " numberOfLines={2}>
        {event.description}
      </Text>

      {/* footer */}

      <View className='border-t-2 items-center border-grey-200 flex-row absolute bottom-0 left-0 right-0 p-5 pb-10 justify-between'>
        <Text className='text-xl font-semibold'>Free</Text>
        <Pressable className='rounded-md bg-red-500 p-5 px-8'>
          <Text className='text-lg font-bold text-white'>
  Join and RSVP
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
