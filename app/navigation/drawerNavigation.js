import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import BottomSheetScreen from '../components/bottomSheetScreen';
import PopUpsScreen from "../components/popUpsScreen";
import HospitalLogin from '../components/hospitalLogin';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/customDrawer';
import Login from '../components/loginWithValidation';
import Taps from '../components/Tabs';
import Dashboard from '../components/Dashboard';
import DateScreen from '../components/DateComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();
const mainColor = '#8200d6';

const DrawerNavigation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: false,
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 16,
                },
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: '#aaa',
            }}
                drawerContent={props => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="Home" component={BottomSheetScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="md-home" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
                <Drawer.Screen name="Pop-Ups" component={PopUpsScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="md-notifications-outline" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
                <Drawer.Screen name="Hospital Login" component={HospitalLogin}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <FontAwesome5 name="hospital-user" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
                <Drawer.Screen name="Login with validation" component={Login}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="md-log-in-outline" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
                <Drawer.Screen name="Tabs" component={Taps}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="md-apps-outline" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
                <Drawer.Screen name="Dashboard" component={Dashboard}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <FontAwesome5 name="chart-line" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
                <Drawer.Screen name="Date" component={DateScreen}
                    options={{
                        drawerIcon: ({ focused, size }) => (
                            <Ionicons name="md-calendar-outline" size={size} color={focused ? 'white' : mainColor} />
                        )
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer >
    );
}

export default DrawerNavigation;