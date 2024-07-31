import { RouteProps } from "react-router-dom";
import React from "react";
import AppRoutes from "../AppRoutes";
import HomeRoutes from "../HomeRoutes.tsx";

// import outros arquivos de rota conforme necessário

interface RouteConfigBase {
  path: string;
  element: React.ReactNode;
}

type RouteConfig = RouteProps & RouteConfigBase;

const routes: RouteConfig[] = [...AppRoutes, ...HomeRoutes];

export default routes;
