import { Button, Text, View } from "react-native";

export default function HomeScreen({navigation}){

    function goGallery(){
        navigation.navigate("gallery")
    }

    return(
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Gallery"
                onPress={goGallery}
            />
        </View>
    )
}