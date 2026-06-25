import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { HomeScreen } from '../app/HomeScreen';
import { DownloadsScreen } from '../app/DownloadsScreen';
import { SettingsScreen } from '../app/SettingsScreen';
import { Colors } from '../constants/Colors';
import { FontSizes } from '../constants/Fonts';
import { ShadowStyles } from '../constants/Shadow';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.backgroundElevated,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: Platform.OS === 'ios' ? 85 : 65,
          paddingBottom: Platform.OS === 'ios' ? 30 : 15,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textTertiary,
        tabBarLabelStyle: {
          fontFamily: 'Rajdhani_700Bold',
          fontSize: FontSizes.caption,
          marginTop: 4,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Convert',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons
                name={focused ? 'play-circle' : 'play-circle-outline'}
                size={size}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: Colors.primary,
                    borderRadius: 2,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={DownloadsScreen}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons
                name={focused ? 'download' : 'download-outline'}
                size={size}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: Colors.primary,
                    borderRadius: 2,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={size}
                color={color}
              />
              {focused && (
                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: Colors.primary,
                    borderRadius: 2,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}