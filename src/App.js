import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavLayout from "./components/layout/Nav";
import SpecificPage from "./components/pokemon/SpecificPage";
import ContactPage from "./components/contact/ContactPage";
import GrassTypes from "./components/pokemon/GrassTypes";
import './scss/App.scss';

function App() {
	return (
			<AuthProvider>
          <Router>
              <NavLayout/>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="cards/:id" element={<SpecificPage />} />
                  <Route path="cards/grass" element={<GrassTypes />} />
              </Routes>
          </Router>
			</AuthProvider>
	);
}

export default App;

/**                <Route path="dashboard" element={<DashboardPage/>} />
<Route path="dashboard/posts" element={<PostPage />} />
<Route path="dashboard/posts/:id" element={<SpecificPostPage />} />
<Route path="dashboard/posts/add" element={<AddPost />} />
<Route path="dashboard/posts/edit/:id" element={<EditPost />} />
<Route path="login" element={<LoginPage />} />
<Route path="users" element={<ProfilesPage />} />
<Route path="users/:name" element={<SpecificProfilePage />} />
<Route path="updatebanner/:name" element={<UpdateBanner />} />
<Route path="updateavatar/:name" element={<UpdateAvatar />} /> */