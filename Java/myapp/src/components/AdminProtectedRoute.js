import {Outlet, Navigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";



export function AdminProtectedRoute(){
    var role = null;
    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    role = decodedToken?.role;
    return (role === "ADMIN") ? <Outlet /> : <Navigate to="/Login" />
}