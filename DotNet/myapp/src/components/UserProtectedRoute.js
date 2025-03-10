import {Outlet, Navigate} from "react-router-dom";
import { jwtDecode } from "jwt-decode";



export function UserProtectedRoute(){
    var role = null;
    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    role = decodedToken?.UserRole;
    return (role === "USER") ? <Outlet /> : <Navigate to="/Login" />
}