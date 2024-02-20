import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, { SANDBOX_ROUTES } from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import MangalPage from "../pages/menu/MangalPage";
import ShusiPage from "../pages/menu/ShusiPage";
import ChefPage from "../pages/menu/ChefPage";
import GalleryPage from "../pages/GalleryPage";
import HomePage from "../pages/HomePage";
import SignupPage from "../users/pages/signup/SignupPage";
import LoginPage from "../users/pages/login/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<HomePage />} />
      <Route path={ROUTES.MENU.MANGAL} element={<MangalPage />} />
      <Route path={ROUTES.MENU.CHEF} element={<ChefPage />} />
      <Route path={ROUTES.MENU.SHUSI} element={<ShusiPage />} />
      <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route
        path={`${ROUTES.DISH_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
    </Routes>
  );
};

export default Router;
