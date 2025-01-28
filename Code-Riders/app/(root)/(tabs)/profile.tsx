import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Link } from 'expo-router';

const profile = () => {
  const handleLogin = () => {}

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.warn("A date has been picked: ", date);
    setSelectedDate(date)
    hideDatePicker();
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <View className='flex h-[71%] gap-y-11 p-10'>
          <Text className='font-rubik-semibold text-2xl'>Enter your details:</Text>
          <View className='flex gap-5'>
            <View className='flex justify-start gap-1'>
              <Text className='font-rubik-medium text-xl'>Name:</Text>
              <TextInput className='border-[0.5px] border-gray-500 rounded-2xl px-2' placeholder='Enter your name' />
            </View>
            <View className='flex justify-start gap-1'>
              <Text className='font-rubik-medium text-xl'>Date of Birth:</Text>

              <View className=''>
                <TextInput inputMode='none' className='border-[0.5px] border-gray-500 rounded-2xl px-2' placeholder='Enter DOB' value={selectedDate ? new Intl.DateTimeFormat('en-GB').format(selectedDate) : ''} />

                <TouchableOpacity className='w-10 h-10 absolute right-[11px] top-[7px]' onPress={showDatePicker}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker} />
                  <Image className='w-[80%] h-[80%]' source={require("../../../assets/images/cal.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogin} className='py-3 mt-5 bg-yellow-300 rounded-full  border-[0.5px] border-gray-400'>
          <Link href="/ride">
            <Text className='text-center text-[1.20rem] font-rubik-light font-extrabold'>Continue as BuddyRider</Text>
            </Link>
          </TouchableOpacity>
          {/* <View className='w-[34vh] h-[78vw] mt-[13rem]'>
            <Image className='w-[41vh] h-[20vh]' resizeMode='cover' source={require("../../../assets/Img/img2.png")} />
          </View> */}
        </View>
        <View className='w-full h-full'>
            <Image className='w-[49vh] h-[30vh]' resizeMode='cover' source={require("../../../assets/Img/cusPOV.jpeg")} />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile