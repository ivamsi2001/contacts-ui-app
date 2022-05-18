
export const FILE_TYPES = Object.freeze({
    IMAGE: Object.freeze(["JPEG", "PNG"]),
    VIDEO: Object.freeze(["MP4", "M4V", "MOV", "3GP", "3G2", "WMV", "ASF", "AVI", "FLV", "MKV", "WEBM"])
});

export const RESPONSIVE = Object.freeze({
    HIDE_SM: Object.freeze({ display: { xs: "none", sm: "block" } }),
    SHOW_SM: Object.freeze({ display: { xs: "block", sm: "none" } })
});

export const PATHS = Object.freeze({
    EMPLOYEES: "/employees",
    EMPLOYEE_ADD: "/employee/add",
    DEPARTMENTS: "/departments",
    DEPARTMENT_ADD: "/department/add"
});
