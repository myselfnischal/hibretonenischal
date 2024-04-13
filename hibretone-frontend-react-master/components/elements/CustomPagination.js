import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";

// Define your custom styled components
const StyledStack = styled(Stack)({
    // Add your styling properties here
    "& .MuiPaginationItem-root": {
        border: "1px solid #3c65f5",
        padding: "5px 10px",
        margin: "0 2px",
        borderRadius: "6px",
        height: "35px",
        width: "35px",
        textAlign: "center",
        "&.Mui-selected": {
            backgroundColor: "#3c65f5",
            color: "#fff",
        },
        "&:hover": {
            backgroundColor: "#ddd",
            color: "#333",
        },
    },
    "& .MuiPagination-ul": {
        justifyContent: "center",
    },
    "& .MuiPaginationItem-previousNext": {
        border: "none",
        minWidth: "30px",
        textAlign: "center",
        "& i": {
            fontFamily: '"Font Awesome 5 Free"',
            fontWeight: 900,
            fontSize: "16px",
        },
        "&:disabled": {
            cursor: "default",
            opacity: 0.5,
        },
    },
});

const CustomPagination = ({
    currentPage,
    totalPages,
    onPageChange,
    setCurrentPage,
}) => {
    return (
        <StyledStack spacing={3}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, newPage) => {
                    setCurrentPage(newPage);
                    onPageChange(newPage);
                }}
                shape="rounded"
                size="large"
            />
        </StyledStack>
    );
};

export default CustomPagination;

