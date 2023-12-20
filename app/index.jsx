// Note: I didnt install reanimated library
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'

export default function index() {
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />

      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{width: wp('100%'), height: hp('70%')}}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
        >
          <View className="flex items-center">
            <Text style={{fontSize : hp(5)}} className="text-white font-bold">
              Best <Text className="text-amber-400">workouts</Text>
            </Text>
            <Text style={{fontSize : hp(5)}} className="text-white font-bold">
              For you
            </Text>
          </View>

          <View className="flex items-center">
            <TouchableOpacity
              style={{width: wp('70%'), height: hp('7%'), borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => console.log('Pressed')}
              className="bg-slate-600"
            >
              <Text style={{fontSize : hp(5)}} className="text-white font-bold tracking-widest">
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
      
        </LinearGradient>
    </View>
  )
}