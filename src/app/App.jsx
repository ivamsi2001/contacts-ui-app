
import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "../employees/AddEmployee";
import EmployeeList from "../employees/EmployeeList";
import './App.css';
import { PATHS } from "../constants";
import AddDept from "../departments/AddDept";
import DeptList from "../departments/DeptList";
import Home from "../home/Home";

const App = () => {
    const LOCAL_STORAGE_EMP_KEY = 'employees';
    const LOCAL_STORAGE_DEPT_KEY = 'depts';

    const [departments, setDepartments] = useState([]);
    const [employees, setEmployees] = useState([]);

    const addEmployee = (employee) => {
        setEmployees([...employees, employee]);
    };

    const addDept = (dept) => {
        setDepartments([...departments, dept]);
    };

    useEffect(() => {
        let lclStoreEmps = localStorage.getItem(LOCAL_STORAGE_EMP_KEY);
        if (lclStoreEmps) {
            let jsnEmpAry = JSON.parse(lclStoreEmps);
            if (jsnEmpAry && jsnEmpAry.length > 0) {
                setEmployees(jsnEmpAry);
            }
        }
        let lclStoreDepts = localStorage.getItem(LOCAL_STORAGE_DEPT_KEY);
        if (lclStoreDepts) {
            let jsnDeptAry = JSON.parse(lclStoreDepts);
            if (jsnDeptAry && jsnDeptAry.length > 0) {
                setDepartments(jsnDeptAry);
            }
        }
    }, []);

    useEffect(() => { localStorage.setItem(LOCAL_STORAGE_EMP_KEY, JSON.stringify(employees)); }, [employees]);
    useEffect(() => { localStorage.setItem(LOCAL_STORAGE_DEPT_KEY, JSON.stringify(departments)); }, [departments]);

    return (
        <Box>
            <Navbar />
            <Stack direction="row" spacing={1} justifyContent="space-between">
                <Sidebar />
                <Box id="main" flex="4" p={1}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={PATHS.EMPLOYEES} exact element={<EmployeeList employees={employees} />} />
                            <Route path={PATHS.EMPLOYEE_ADD} exact element={<AddEmployee addEmployee={addEmployee} />} />
                            <Route path={PATHS.DEPARTMENTS} exact element={<DeptList departments={departments} />} />
                            <Route path={PATHS.DEPARTMENT_ADD} exact element={<AddDept addDept={addDept} />} />
                            <Route path="/" exact element={<Home/>} />
                        </Routes>
                    </BrowserRouter>
                </Box>
            </Stack>
        </Box>
    )
}

export default App;