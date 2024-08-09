import { ThemedText } from "@/components/ThemedText";
import { Text, View,StyleSheet,Image,StatusBar} from "react-native";
import {useState} from "react"
// libraries
import * as ImagePicker from 'expo-image-picker';

// custom components
import IconButton from '../components/IconButton'
import CircleButton from '../components/CircleButton'
import Button from '../components/Button';
import ImageViewer from '../components/ImageViewer'; 
import EmojiPicker from "../components/EmojiPicker";
const PlaceholderImage = require('../assets/images/background-image.png');

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };



  return (
    <View
      style={styles.container}
    >

      <ThemedText type="title">Byenvini</ThemedText>
      <View style={styles.imageContainer}>
         <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage = {selectedImage} />
      </View>
      {showAppOptions ?
      
      <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <IconButton icon="refresh" label="Reset" onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
      </View>
    </View>:
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme={"primary"} onPress={pickImageAsync} />
        <Button label="Use this photo" theme=""  onPress={() => setShowAppOptions(true)} />
      </View>
      }
      <StatusBar/>
    </View>
  );
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});
