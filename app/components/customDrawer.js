import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const mainColor = '#8200d6';
const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: mainColor }}>
                <ImageBackground
                    source={require('../../assets/menu-bg.jpeg')}
                    style={{ padding: 20 }}>
                    <Image source={require('../../assets/user-profile.jpg')} style={{ width: 100, height: 100, borderRadius: 20 }} />
                    <Text style={styles.name}>Peter Atef</Text>
                    <View style={styles.row}>
                        <Text style={{ color: 'white', paddingLeft: 10 }}>1000 Coins</Text>
                        <FontAwesome5 name="coins" size={20} color="white" style={{ paddingLeft: 10 }} />
                    </View>
                    <TouchableOpacity style={styles.ring}>
                        <Ionicons name="md-notifications-outline" size={30} color="white" />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.drawerItem}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footerView}>
                <TouchableOpacity style={styles.footer}>
                    <FontAwesome5 name="share-alt" size={20} color="black" style={{ paddingRight: 10 }} />
                    <Text style={styles.footerText}>Tell a friend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footer}>
                    <Ionicons name="md-log-out-outline" size={30} color="black" style={{ paddingRight: 10 }} />
                    <Text style={styles.footerText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20
    },
    ring: { position: 'absolute', right: 10, top: 10, },
    drawerItem: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        marginTop: 20
    },
    footer: {
        backgroundColor: '#fff',
        // backgroundColor: '#8200d6',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    footerView: {
        borderTopWidth: 2,
        borderTopColor: '#ccc',
    },
    footerText: { color: 'black', marginLeft: 10 }
})