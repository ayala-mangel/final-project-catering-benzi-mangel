import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES, { SANDBOX_ROUTES } from "./routesModel";
import CardsPage from "../pages/CardsPage";
/* import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandboxMenu from "../sandbox/SandboxMenu";
import Template from "../sandbox/components/Template";
import ComponentMenu from "../sandbox/components/ComponentMenu";
import Logic from "../sandbox/components/Logic";
import Styles from "../sandbox/components/styles/Styles";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooksMenu";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidUpdate from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependencies from "../sandbox/life-cycle-hooks/UseEffectNoDependencies";
import LifeCycleExe from "../sandbox/life-cycle-hooks/LifeCycleExe";
import CustomHookMenu from "../sandbox/custom-hooks/CustomHookMenu";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import CustomName from "../sandbox/custom-hooks/CustomName";
import Memoization from "../sandbox/memoization/Memoization";
import UseCallback from "../sandbox/memoization/use-callback/UseCallback";
import UseMemo from "../sandbox/memoization/use-memo/UseMemo";
import ContextMenu from "../sandbox/context/ContextMenu";
import A from "../sandbox/context/components/A";
import SnackExample from "../sandbox/context/SnackExample";
import FormTest from "../sandbox/forms/FormTest";
import LoginPage from "../users/pages/LoginPage"; */

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      {/* <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandboxMenu />}>
        <Route path={SANDBOX_ROUTES.COMPONENT} element={<ComponentMenu />}>
          <Route path={SANDBOX_ROUTES.TEMPLATE} element={<Template />} />
          <Route path={SANDBOX_ROUTES.LOGIC} element={<Logic />} />
          <Route path={SANDBOX_ROUTES.STYLES} element={<Styles />} />
        </Route>
        <Route path={SANDBOX_ROUTES.LIFECYCLE} element={<LifeCycleHooks />}>
          <Route path={SANDBOX_ROUTES.INITIAL} element={<InitialCycle />} />
          <Route path={SANDBOX_ROUTES.USE_STATE} element={<UseStateCycle />} />
          <Route
            path={SANDBOX_ROUTES.DID_MOUNT}
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path={SANDBOX_ROUTES.DID_UPDATE}
            element={<UseEffectAsComponentDidUpdate />}
          />
          <Route
            path={SANDBOX_ROUTES.WILL_UNMOUNT}
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route
            path={SANDBOX_ROUTES.NO_DEPENDENCIES}
            element={<UseEffectNoDependencies />}
          />
          <Route
            path={SANDBOX_ROUTES.LIFECYCLE_EXE}
            element={<LifeCycleExe />}
          />
        </Route>
        <Route path={SANDBOX_ROUTES.CUSTOM} element={<CustomHookMenu />}>
          <Route
            path={SANDBOX_ROUTES.CUSTOM_COUNTER}
            element={<CustomCounterHook />}
          />
          <Route path={SANDBOX_ROUTES.CUSTOM_NAME} element={<CustomName />} />
        </Route>
        <Route path={SANDBOX_ROUTES.MEMOIZATION} element={<Memoization />}>
          <Route path={SANDBOX_ROUTES.USECALLBACK} element={<UseCallback />} />
          <Route path={SANDBOX_ROUTES.USEMEMO} element={<UseMemo />} />
        </Route>
        <Route path={SANDBOX_ROUTES.CONTEXT} element={<ContextMenu />}>
          <Route path={SANDBOX_ROUTES.NAME} element={<A />} />
          <Route path={SANDBOX_ROUTES.SNACK} element={<SnackExample />} />
        </Route>
        <Route path={SANDBOX_ROUTES.FORM} element={<FormTest />} />
      </Route>
      <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default Router;
