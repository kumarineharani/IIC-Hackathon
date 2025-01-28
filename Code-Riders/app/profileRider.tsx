import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
  } from "react-native";
  import React, { useState } from "react";
  import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Link } from "expo-router";
  
  const ProfileRider = () => {
    const handleLogin = () => {};
  
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
      setSelectedDate(date);
      hideDatePicker();
    };
  
    return (
      <SafeAreaView className="bg-white h-full">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView keyboardShouldPersistTaps="handled" contentContainerClassName="h-full">
              <View className="flex h-[76%] gap-y-11 p-10">
                <Text className="font-rubik-semibold text-2xl">
                  Enter your details:
                </Text>
                <View className="flex gap-5">
                  <View className="flex justify-start gap-1">
                    <Text className="font-rubik-medium text-xl">Name:</Text>
                    <TextInput
                      className="border-[0.5px] border-gray-500 rounded-2xl px-2"
                      placeholder="Enter your name"
                    />
                  </View>
                  <View className="flex justify-start gap-2">
                    <Text className="font-rubik-medium text-xl">Date of Birth:</Text>
  
                    <View>
                      <TextInput
                        inputMode="none"
                        className="border-[0.5px] border-gray-500 rounded-2xl px-2"
                        placeholder="Enter DOB"
                        value={
                          selectedDate
                            ? new Intl.DateTimeFormat("en-GB").format(selectedDate)
                            : ""
                        }
                      />
  
                      <TouchableOpacity
                        className="w-10 h-10 absolute right-[11px] top-[7px]"
                        onPress={showDatePicker}
                      >
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                        />
                        <Image
                          className="w-[80%] h-[80%]"
                          source={require("../assets/images/cal.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
  
                  <View className="flex justify-start gap-1">
                    <Text className="font-rubik-medium text-xl">
                      Driving Licence No:
                    </Text>
                    <TextInput
                      className="border-[0.5px] border-gray-500 rounded-2xl px-2"
                      placeholder="Enter your driving licence"
                    />
                  </View>
                  <View className="flex justify-start gap-1">
                    <Text className="font-rubik-medium text-xl">Vehicle No:</Text>
                    <TextInput
                      className="border-[0.5px] border-gray-500 rounded-2xl px-2"
                      placeholder="Enter your vehicle number"
                    />
                  </View>
                  <View className="flex justify-start gap-1">
                    <Text className="font-rubik-medium text-xl">
                      Aadhaar/ Pan No:
                    </Text>
                    <TextInput
                      onFocus={() => {}}
                      className="border-[0.5px] border-gray-500 rounded-2xl px-2"
                      placeholder="Enter your Unique Identifier"
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleLogin}
                  className="py-3 mt-5 rounded-full border-2 border-yellow-400"
                >
                  <Link href="/ride">
                  <Text className="text-center text-[1.20rem] font-rubik-light font-extrabold">
                    Continue as Rider
                  </Text>
                  </Link>
                </TouchableOpacity>
              </View>
              <View className="w-full h-full">
                <Image
                  className="w-[49vh] h-[30vh]"
                  resizeMode="cover"
                  source={require("../assets/Img/img1.jpg")}
                />
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default ProfileRider;
  