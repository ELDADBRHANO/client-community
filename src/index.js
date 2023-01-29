import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AdsProvider from "./contexts/ads";
import PostsProvider from "./contexts/posts";
import UsersProvider from "./contexts/users";
import CommunitiesProvider from "./contexts/communities";
import CategoriesProvider from "./contexts/categories";
import EventsProvider from "./contexts/events";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AdsProvider>
      <PostsProvider>
        <UsersProvider>
          <CommunitiesProvider>
            <CategoriesProvider>
              <EventsProvider>
                <App />
              </EventsProvider>
            </CategoriesProvider>
          </CommunitiesProvider>
        </UsersProvider>
      </PostsProvider>
    </AdsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
