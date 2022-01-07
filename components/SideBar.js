import React from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, Image} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import {Ionicons} from "@expo/vector-icons";

export default Sidebar=props=>(
    <ScrollView>
        <ImageBackground
            source={require("../assets/rockstar.jpg")}
            style={{width:undefined, padding:16, paddingTop:70}}
        >
            <Image source={require("../assets/pratim.jpg")} style={styles.profile}/>
            <Text style={styles.name}>Pratim Dutta</Text>

             <View style={{flexDirection:"row"}}>
                <Ionicons name="wallet-outline" size={25} color="rgba(255,255,255,0.8)"/>
                <Text style={styles.balance}> $10,000</Text> 
            </View> 
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    balance: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 20,
        marginRight: 4
    }
});

