import { View, Text, ScrollView, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from "expo-router";

const SignIn = () => {
  const handleLoginCustomer = () => {}
  const handleLoginRider = () => {}

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <View className='flex flex-row w-[32%] h-[16%] justify-between items-center pt-5'>
          <Image source={require('../assets/Img/Logo.png')} className='w-full h-full mt-5 ml-4 relative top-0 left-0' />
          <View className='flex flex-row items-center gap-2 border-[0.5px] border-black rounded-full absolute right-[-240px] px-2 py-2'>
            <Text className='font-rubik-light border-[0.5px] border-gray-600 px-2 rounded-full text-gray-900'>?</Text>
            <Text className='font-rubik-light font-semibold'>Help</Text>
          </View>
        </View>
        <View className='flex justify-between h-[170vw]'>
          <View className='flex m-10 pt-5 gap-2'>
            <Text className='font-extrabold text-2xl'>What is your number?</Text>
            <Text className='text-sm'>Enter your number to proceed</Text>
            <TextInput inputMode='tel' className='border-[0.5px] rounded-xl py-2 pl-8' placeholder="0000000000" />
          </View>
          <View className='flex gap-[0.18rem]'>
            <TouchableOpacity  className='py-3 mt-5 bg-yellow-300 mx-10 rounded-full'>
            <Link onPress={handleLoginCustomer} href="/profile">
              <Text className='text-center text-[1.20rem] font-rubik-light font-extrabold'>Sign in as BuddyRider</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity className='py-3 mt-5 bg-white mx-10 rounded-full border border-black'>
              <Link onPress={handleLoginRider} href="/profileRider">
              <Text className='text-center text-[1.20rem] font-rubik-light font-extrabold'>Sign in as Rider</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn