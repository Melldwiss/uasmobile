import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e03794', 
        tabBarInactiveTintColor: '#686464', 
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="promo" // Renamed from "diskon" to "promo"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="megaphone-outline" size={size} color={color} />
          ),
          title: 'Promo', // Updated title
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
          title: 'Transaksi',
        }}
      />
    </Tabs>
  );
};
