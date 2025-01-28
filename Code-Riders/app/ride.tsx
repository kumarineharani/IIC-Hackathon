import { View, Text, StyleSheet, TextInput, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useRef } from 'react'
import { Link, useNavigation, useRouter } from "expo-router";

const ride = () => {

  const mapRef = useRef<any>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity className='absolute w-10 h-10' onPress={focusMap}>
          <View style={{padding: 10}}>
          <Text>Focus</Text>
          </View>
          </TouchableOpacity>
      )
    })
  }, [])
  
  const focusMap = () => {

  };

  const router = useRouter(); // Hook for programmatic navigation
  return (
    <SafeAreaView className='bg-white h-full' style={styles.container}>
      <ScrollView contentContainerClassName='h-full'>
        <View className='grid grid-rows-2'>
      <View className='border-b-1 border-gray-600 mx-4 mt-2 flex flex-row items-center gap-2 pb-4 pt-2'>
        <Link href="/menu">
        
        
        <View>
        <Image className='w-9 h-8' source={require("../assets/images/ham.png")} />
        </View></Link>

        <View>
        <TextInput onPressIn={() => router.push('/searchRide')} className='border border-gray-700 rounded-full w-[40vh] pl-6 font-rubik-bold' placeholder='Where are you going?'/>
        </View>
      </View>
      {/* <Text onPress={focusMap} className='3xl'>Focus</Text> */}
      <MapView initialRegion={{
        latitude: 23.334944,
        longitude: 85.257998,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} style={styles.map}
      ref={mapRef} />
      {/* <Marker coordinate={{
            latitude: 0,
            longitude: 0
          }}>
 <View className='w-20 h-20' >
  <Image className='w-1/2 h-1/2' source={require("../assets/Img/pin.png")} />
 </View>
</Marker> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default ride