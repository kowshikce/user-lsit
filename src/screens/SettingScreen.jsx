import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , Image, Button, SafeAreaView} from 'react-native';
import { Divider, SearchBar} from 'react-native-elements';


export default function SettingScreen({navigation}) {

    const [search, setSearch] = useState('');

    const updateSearch = (value) => {
        setSearch(value);
    }

    return (
        <SafeAreaView>
            <StatusBar ></StatusBar>
            <View style={{ marginTop: 100}}>
            <SearchBar round lightTheme placeholder="Type Here ..." onChangeText={updateSearch} value={search}/>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text>Setting Screen</Text>
            <Divider  style={{ backgroundColor: 'blue', height: 5}}/>
            <Button onPress={() => navigation.navigate("Home")} title="Go to HomeScreen"/>
            </View>
        </View>
        </SafeAreaView>
    );
}