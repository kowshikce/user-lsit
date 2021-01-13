import React from 'react';
import { StyleSheet, Text, View , Image, ToastAndroid, TouchableOpacity} from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';


export default function HomeScreen() {

    const showToast = () => {
        ToastAndroid.show("a Pikachu appeared nearby !", ToastAndroid.SHORT);
        console.log("click");
    }

    const [items, setItems] = React.useState([
      { name: 'TURQUOISE', code: '#1abc9c' },
      { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' },
      { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' },
      { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' },
      { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' },
      { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' },
      { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' },
      { name: 'CLOUDS', code: '#ec7e11' },
      { name: 'CONCRETE', code: '#95a5a6' },
      { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' },
      { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' },
      { name: 'ASBESTOS', code: '#7f8c8d' },
    ]);
  
    return (
      <SectionGrid
        itemDimension={90}
        staticDimension={400}
        fixed
        spacing={20}
        sections={[
          {
            title: 'React + Redux',
            data: items.slice(0, 6),
          },
          {
            title: 'React-Native + Redux',
            data: items.slice(6, 12),
          },
          {
            title: 'React-Native + Redux + React-Router',
            data: items.slice(12, 20),
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
            <TouchableOpacity onPress={() => showToast()}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Badge status="success" value="99+" containerStyle={{position: 'absolute', top: -4, right: -4}}></Badge>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text>
                    <View style={{height: 10}}></View>
                    <Image style={{height: 70, width: 70}} source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}></Image>
                </View>
            </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    );
  }
  
  const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
  });
  