import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  IconHome,
  IconHomeActive,
  IconOrder,
  IconOrderActive,
  IconProfile,
  IconProfileActive,
  IconSearch,
  IconSearchActive,
} from "../../../assets";

const Icon = ({ label, focus }) => {
  //
  //
  console.log("label:", label);
  switch (label) {
    case "Home":
      return focus ? <IconHomeActive /> : <IconHome />;
    case "Search":
      return focus ? <IconSearchActive /> : <IconSearch />;
    case "Order":
      return focus ? <IconOrderActive /> : <IconOrder />;
    case "Profile":
      return focus ? <IconProfileActive /> : <IconProfile />;
    default:
      return <IconHome />;
  }
};

const BottomNav = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.nav}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          //
          //debug
          console.log("option", options);
          console.log("options.tarBarLabel", options.tarBarLabel);
          console.log("options.title", options.title);
          console.log("label", label);
          console.log("route", route);
          console.log("route.key", route.key);

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.container}
            >
              <Icon label={label} focus={isFocused} />
              <Text
                style={{
                  color: "#000",
                  fontFamily: isFocused
                    ? "CircularStd-Bold"
                    : "CircularStd-Medium",
                  fontSize: 10,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomNav;

const styles = StyleSheet.compose({
  nav: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#dedede",
    minHeight: 40,
    paddingTop: 6,
    paddingBottom: 6,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },

  container: {
    textAlign: "center",
    alignItems: "center",
  },

  label: {
    fontFamily: "CircularStd-Bold",
    fontSize: 10,
  },
});
