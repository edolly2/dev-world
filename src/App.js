import "./_css/main.css";

import React, { useState } from "react";

import AccountMenu from "./_components/AccountMenu";
import Header from "./_components/Header";
import HomePage from "./_pages/HomePage";
import TopBar from "./_components/TopBar";

function App(props) {
  const [favoritesToolActive, setFavoritesToolActive] = useState(false);
  const [settingsToolActive, setSettingsToolActive] = useState(false);
  const [accountToolActive, setAccountToolActive] = useState(false);
  const [searchToolActive, setSearchToolActive] = useState(false);
  const [searchClickActive, setSearchClickActive] = useState(false);
  const [accountClickActive, setAccountClickActive] = useState(false);

  return (
    <div className="App">
      <Header
        favoritesHover={() => {
          setFavoritesToolActive(true);
        }}
        favoritesNotHover={() => {
          setFavoritesToolActive(false);
        }}
        favoritesTool={{ display: favoritesToolActive ? "block" : "none" }}
        settingsHover={() => {
          setSettingsToolActive(true);
        }}
        settingsNotHover={() => {
          setSettingsToolActive(false);
        }}
        settingsTool={{ display: settingsToolActive ? "block" : "none" }}
        accountHover={() => {
          setAccountToolActive(true);
        }}
        accountNotHover={() => {
          setAccountToolActive(false);
        }}
        accountTool={{ display: accountToolActive ? "block" : "none" }}
        accountClick={() => {
          setAccountClickActive(true);
        }}
      />
      <main>
        <TopBar
          searchHover={() => {
            setSearchToolActive(true);
          }}
          searchNotHover={() => {
            setSearchToolActive(false);
          }}
          searchTool={{
            display: searchClickActive
              ? "none"
              : searchToolActive
              ? "block"
              : "none",
          }}
          searchClick={() => {
            setSearchClickActive(!searchClickActive);
          }}
          inputStyle={{ display: searchClickActive ? "flex" : "none" }}
        />
        <AccountMenu
          accountMenuStyle={{ display: accountClickActive ? "flex" : "none" }}
        />
      </main>
      <HomePage />
    </div>
  );
}

export default App;
