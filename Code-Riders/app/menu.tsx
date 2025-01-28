import { View, Text, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from "expo-router";

const Menu = () => {
  const handleLogin = () => {}

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        
        <View>
          <Image source={require('../assets/menu/back-icon.png')} className='w-20 h-8 mt-5 ml-4 relative top-0 left-0' />
        </View>
        
        <View className='grid grid-rows-4 gap-4 mx-5 my-32'>
          <View className='flex flex-row items-center gap-5 border border-gray-500 rounded-full px-5'>
            <Image className='w-16 h-16' source={require('../assets/menu/menu-profile-icon.png')} />
            <View className='flex'>
          <Text className='font-semibold text-xl'>Rahul</Text>
          <Text className='font-semibold text-center'>0000000000</Text>
          </View>
          </View>
          
          <View className='flex flex-row items-center gap-5 border border-gray-500 rounded-full px-5'>
            <Image className='w-16 h-16' source={require('../assets/menu/customer-care-icon.png')} />
          <Text className='font-semibold text-center text-xl'>Help</Text>
          </View>
          <View className='flex flex-row items-center gap-5 border border-gray-500 rounded-full px-5'>
            <Image className='w-16 h-16' source={require('../assets/menu/history-clock-icon.png')} />
          <Text className='font-semibold text-center text-xl'>My Rides</Text>
          </View>
          <View className='flex flex-row items-center gap-5 border border-gray-500 rounded-full px-5'>
            <Image className='w-16 h-16' source={require('../assets/menu/card-icon.png')} />
          <Text className='font-semibold text-center text-xl'>Payments</Text>
          </View>
          <View className='flex flex-row items-center gap-5 border border-gray-500 rounded-full px-5'>
            <Image className='w-16 h-16' source={require('../assets/menu/setting-icon.png')} />
          <Text className='font-semibold text-center text-xl'>Settings</Text>
          </View>
          <View className='flex flex-row items-center gap-5 border border-gray-500 rounded-full px-5'>
            <Image className='w-16 h-16' source={require('../assets/menu/refera-and-earn-icon.png')} />
          <Text className='font-semibold text-center text-xl'>Refer and earn</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Menu