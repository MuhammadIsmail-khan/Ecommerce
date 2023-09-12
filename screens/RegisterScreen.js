import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState('')
  const navigation = useNavigation();
  const navigateToSignIn = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{
            width: 200,
            height: 150,
            //            resizeMode:"contain",
          }}
          source={require("../assets/images/logo.png")}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#041E42",
            }}
          >
            Create New Account
          </Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              gap: 5,
              borderRadius: 7,
            }}
          >
            <Ionicons
              name="person"
              size={24}
              style={{ paddingLeft: 10 }}
              color="grey"
            />
            <TextInput
              style={{ width: "70%", height: 40, fontSize: name ? 16 : 16 }}
              placeholder="Enter Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              gap: 5,
              borderRadius: 7,
            }}
          >
            <MaterialIcons
              style={{ paddingLeft: 10 }}
              name="email"
              size={24}
              color="grey"
            />
            <TextInput
              style={{ width: "70%", height: 40, fontSize: Email ? 16 : 16 }}
              placeholder="Enter Email"
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              gap: 5,
              borderRadius: 7,
            }}
          >
            <AntDesign
              name="lock"
              style={{ paddingLeft: 10 }}
              size={24}
              color="grey"
            />
            <TextInput
              style={{ width: "70%", height: 40, fontSize: password ? 16 : 16 }}
              placeholder="Enter Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{}}>Keep me logged in</Text>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#febe10",
              width: 250,
              height: 50,
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Sign Up</Text>
          </Pressable>
          <View style={{ flexDirection: "row", gap: 7, marginTop: 15 }}>
            <Text>Already have an account?</Text>
            <Pressable
              onPress={() => {
                navigateToSignIn(), console.log("_______________signup presed");
              }}
            >
              <Text style={{ fontSize: 16, color: "blue" }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
