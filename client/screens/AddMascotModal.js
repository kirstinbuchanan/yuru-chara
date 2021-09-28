import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { addMascot } from '../ApiClientService';
import * as ImagePicker from 'expo-image-picker';

const AddNewMascot = ({ getMascots, navigation }) => {
  const [state, setState] = useState({
    name: '',
    japanese: '',
    mascot: '',
    city: '',
    prefecture: '',
    description: '',
    picture: '',
  });
  const [image, setImage] = useState(null);

  const addNewMascot = async (event) => {
    if (state.name === '') {
      alert(`Please submit a mascot`);
    } else {
      await addMascot(state);
      getMascots();
      navigation.navigate('Home');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      base64: true,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    } else {
      return;
    }

    let base64Img = `data:image/jpg;base64,${result.base64}`;

    let apiUrl = 'https://api.cloudinary.com/v1_1/dygjcgbh3/image/upload';
    let data = {
      file: base64Img,
      upload_preset: 'mascots',
    };

    fetch(apiUrl, {
      body: JSON.stringify(data),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
      .then(async (r) => {
        let data = await r.json();
        setImage(data.url);
        setState({ ...state, picture: data.url });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const japanInput = useRef();
  const representInput = useRef();
  const cityInput = useRef();
  const prefectureInput = useRef();
  const descriptionInput = useRef();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <ScrollView style={[styles.list]}>
        <View>
          <Text style={styles.heading}>Add a Mascot</Text>
        </View>
        <View style={[styles.form]}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            placeholder="Name (Required)"
            value={state.name}
            onChangeText={(text) => {
              setState({ ...state, name: text });
            }}
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => japanInput.current.focus()}
            blurOnSubmit={false}
          ></TextInput>
          <Text style={styles.label}>Japanese</Text>
          <TextInput
            placeholder="Japanese"
            value={state.japanese}
            onChangeText={(text) => {
              setState({ ...state, japanese: text });
            }}
            style={styles.input}
            ref={japanInput}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => representInput.current.focus()}
          ></TextInput>
          <Text style={styles.label}>Representing</Text>
          <TextInput
            placeholder="Representing"
            blurOnSubmit={false}
            value={state.mascot}
            onChangeText={(text) => {
              setState({ ...state, mascot: text });
            }}
            style={styles.input}
            ref={representInput}
            returnKeyType="next"
            onSubmitEditing={() => cityInput.current.focus()}
          ></TextInput>
          <Text style={styles.label}>City</Text>
          <TextInput
            placeholder="City"
            value={state.city}
            blurOnSubmit={false}
            onChangeText={(text) => {
              setState({ ...state, city: text });
            }}
            style={styles.input}
            ref={cityInput}
            returnKeyType="next"
            onSubmitEditing={() => prefectureInput.current.focus()}
          ></TextInput>
          <Text style={styles.label}>Prefecture</Text>
          <TextInput
            placeholder="Prefecture"
            value={state.prefecture}
            blurOnSubmit={false}
            onChangeText={(text) => {
              setState({ ...state, prefecture: text });
            }}
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => descriptionInput.current.focus()}
            ref={prefectureInput}
          ></TextInput>
          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder="Description"
            value={state.description}
            onChangeText={(text) => {
              setState({ ...state, description: text });
            }}
            style={styles.input}
            ref={descriptionInput}
          ></TextInput>

          <Text style={styles.label}>Picture</Text>
          <TouchableOpacity onPress={pickImage} style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Text>Pick an image</Text>
            </View>
          </TouchableOpacity>

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Button title="Submit" style={styles.button} onPress={addNewMascot} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#e8b4b8',
    flex: 1,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 25,
  },
  form: {
    borderRadius: 30,
    margin: 20,
    zIndex: 1,
  },
  label: {
    color: 'white',
    fontWeight: '600',
    fontSize: 17,
  },
  input: {
    borderWidth: 0,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 10,
    paddingLeft: 20,
  },
  button: {
    height: 40,
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonWrapper: {
    height: 100,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddNewMascot;
