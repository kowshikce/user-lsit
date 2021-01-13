import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, View, Text, Image, StyleSheet} from 'react-native';
import { fetchUserFromStart } from '../redux/UserSlice/UserSlice';
import { SectionGrid } from 'react-native-super-grid';
import {  Badge } from 'react-native-elements';


function UserScreen({userslice, dispatch}) {
    const status = userslice.status;

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchUserFromStart());
        }
    }, [status]);

    let content;

    if(status === 'pending') {
        content = (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
        );
    }else if(status === 'success') {
        content = (
        <View>
            <SectionGrid
            itemDimension={90}
            staticDimension={400}
            fixed
            spacing={20}
            sections={[
                {
                    title: "User-List",
                    data: userslice.users
                }
            ]}
            style={styles.gridView}
            renderItem={({item, section, index}) => (
                <View style={[styles.itemContainer, { backgroundColor: "#ffffff" }]}>
                    <Badge status="success" value={index + 1} containerStyle={{position: 'absolute', top: -4, right: -4}}></Badge>
                    <Image style={{height: 70, width: 70}} source={{uri: `https://robohash.org/${index}`}}></Image>
                    <View style={{height: 10}}></View>
                    <Text style={styles.specialItemName}>{item}</Text>
                </View>
            )}

            renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
              )}

            />
        </View>
        )
    }else if(status === 'error') {
        content = (
            <View style={[styles.container, styles.horizontal]}>
                <Text>{userslice.error}</Text>
            </View>
        )
    }

    return (
        <View style={[styles.container, styles.horizontal]}>
            {content}
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        userslice: state.userSlice
    }
}

const dispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, dispatchToProps)(UserScreen);


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
      specialItemName: {
        fontSize: 16,
        color: 'black',
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
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
    }
  });