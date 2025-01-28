import { View, Text, SafeAreaView, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'

const searchRide = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
         <ScrollView contentContainerClassName='h-full'>
            <View className='border-b border-gray-400 pb-10 mx-5'>

         <Image className='w-4 h-16 absolute left-12 top-9' source={require("../assets/Img/location-icon.png")} />
            <View className='ml-20 mr-8 mt-2 flex gap-3'>
                
         <TextInput className='border border-gray-700 rounded-full pl-6 font-rubik-bold' placeholder='Starting point'/>
         <TextInput className='border border-gray-700 rounded-full pl-6 font-rubik-bold' placeholder='Destination'/>
         </View>
         </View>
         </ScrollView>
    </SafeAreaView>
  )
}

export default searchRide