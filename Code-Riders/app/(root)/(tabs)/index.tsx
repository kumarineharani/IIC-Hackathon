import { Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {

  const handleLogin = () => {}
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <View className="flex justify-between h-[96%]">
    <View className="flex justify-center items-center">
      <Image source={require("../../../assets/Img/Logo.png")} className="w-[60%] h-[50%]" />
      
    </View>
    <Text className="text-center font-playwrite-regular absolute left-14 top-[20rem]">Split your cost and reach the Destination</Text>
    <TouchableOpacity onPress={handleLogin} className='py-3 mt-5 bg-yellow-300 rounded-full  border-[0.5px] border-gray-400 mx-10'>
      <Link href="/sign-in">
            <Text className='text-center text-[1.20rem] font-rubik-light font-extrabold'>Get Started</Text>
            </Link>
          </TouchableOpacity>
          </View>
    {/* <View className="flex gap-5">
      <Link href="/sign-in">Sign In</Link>
      <Link href="/ride">Riding</Link>
      <Link href="/profile">Profile for BuddyRider</Link>
      <Link href="/profileRider">Profile for Rider</Link> 
    </View> */}
    </ScrollView>
    </SafeAreaView>
  );
}
