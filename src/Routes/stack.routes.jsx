import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen";
import GalleryScreen from "../screens/GalleryScreen";

const { Screen, Navigator } = createStackNavigator();
export default function StackNavigator() {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} options={{title:"Inicio"}} />
      <Screen name="gallery" component={GalleryScreen} options={{title:"Galeria"}} />
    </Navigator>
  );
}
