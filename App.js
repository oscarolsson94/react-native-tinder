import React from "react";
import { Text, View } from "react-native";
import tw from "tailwind-rn";

export default function App() {
    return (
        <View style={tw("flex-1 justify-center items-center")}>
            <Text>Testing react naive</Text>
        </View>
    );
}
