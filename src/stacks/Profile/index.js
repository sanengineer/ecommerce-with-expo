import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { IconContainer, ListText, Space } from "../../components";
import { useSelector } from "react-redux";
import {
  IconArrowRight,
  IconBio,
  IconSecurity,
  IconShipping,
} from "../../assets";

const Profile = ({ navigation }) => {
  const whoami = useSelector((state) => state.who_ami_reducer.who_ami);
  //
  //debug
  // console.log("avatar_profile:", whoami.avatar);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.page}>
        {/* <ScrollView> */}
        <View style={styles.avaNameEmailContainer}>
          <View style={styles.avaContainer}>
            <Image source={{ uri: whoami.avatar }} style={styles.avatar} />
          </View>
          <Space height={10} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {whoami.firstname} {whoami.lastname}
            </Text>
          </View>
          <Space height={6} />
          <View style={styles.emailContainer}>
            <Text style={styles.email}>{whoami.email}</Text>
          </View>
        </View>

        <Space height={50} />
        <View style={styles.mainContainer}>
          <View>
            <Pressable
              onPress={() => navigation.navigate("Bio")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(151, 151, 151, 0.1)"
                    : "white",
                },
              ]}
            >
              <View style={styles.listContainer}>
                <View style={styles.listIconNameContainer}>
                  <IconContainer>
                    {/* <IconBio /> */}
                    <Text style={{ fontSize: 26 }}>🧬</Text>
                  </IconContainer>
                  <Space width={10} />
                  <ListText text="Bio" />
                </View>
                <IconContainer>
                  <IconArrowRight />
                </IconContainer>
              </View>
            </Pressable>
            <Space height={10} />
            <Pressable
              onPress={() => navigation.navigate("Shipping")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(151, 151, 151, 0.1)"
                    : "white",
                },
              ]}
            >
              <View style={styles.listContainer}>
                <View style={styles.listIconNameContainer}>
                  <IconContainer>
                    {/* <IconShipping /> */}
                    <Text style={{ fontSize: 26 }}>🚚</Text>
                  </IconContainer>
                  <Space width={10} />
                  <ListText text="Shipping" />
                </View>
                <IconContainer>
                  <IconArrowRight />
                </IconContainer>
              </View>
            </Pressable>
            <Space height={10} />
            <Pressable
              onPress={() => navigation.navigate("Security")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "rgba(151, 151, 151, 0.1)"
                    : "white",
                },
              ]}
            >
              <View style={styles.listContainer}>
                <View style={styles.listIconNameContainer}>
                  <IconContainer>
                    {/* <IconSecurity /> */}
                    <Text style={{ fontSize: 26 }}>🔐</Text>
                  </IconContainer>
                  <Space width={10} />
                  <ListText text="Security" />
                </View>
                <IconContainer>
                  <IconArrowRight />
                </IconContainer>
              </View>
            </Pressable>
          </View>
          <Space height={30} />

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  // backgroundColor: "cyan",
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "CircularStd-Bold",
                    color: "red",
                    fontSize: 16,
                  }}
                >
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  page: {
    paddingTop: 30,
    paddingBottom: 10,
    flex: 1,
    // backgroundColor: "red",
  },
  avaNameEmailContainer: {
    flexDirection: "column",
    alignContent: "center",
    // backgroundColor: "cyan",
  },
  mainContainer: {
    flex: 2,
    // backgroundColor: "cyan",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 38,
    width: 100,
    height: 100,
  },
  name: {
    fontFamily: "CircularStd-Bold",
    fontSize: 16,
  },
  email: {
    fontFamily: "CircularStd-Medium",
    fontSize: 12,
  },
  avaContainer: {
    alignItems: "center",
  },
  nameContainer: {
    alignItems: "center",
  },
  emailContainer: {
    alignItems: "center",
  },

  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 50,
    paddingHorizontal: 18,
  },
  listIconNameContainer: {
    flexDirection: "row",
  },
});
