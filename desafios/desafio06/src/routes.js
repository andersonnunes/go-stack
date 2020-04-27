import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./screens/Main";
import User from "./screens/User";
import Repository from "./screens/Repository";

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTintColor: "#FFF",
        }}
      >
        <Screen
          name="Main"
          component={Main}
          options={{
            title: "Usuários",
          }}
        />
        <Screen
          name="User"
          component={User}
          options={({ route }) => ({ title: route.params.user.name })}
        />
        <Screen
          name="Repository"
          component={Repository}
          options={({ route }) => ({ title: route.params.repository.name })}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
