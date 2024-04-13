import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import ConnectorSearchBar from "./ConnectorSearchBar"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function GrantsList() {
    const router = useRouter();
    const [filters, setFilters] = useState({
        grantAmountRange: [],
        category: [],
        location: [],
    });
    const [results, setResults] = useState([]);
    const [totalGrants, setTotalGrants] = useState(0);
    const [page, setPage] = useState(1);
    const limit = 10; // 假设每页显示10条数据
    // const [queryParameters, setQueryParameters] = useState({
    //     category: [],
    //     grantAmountRange: [],
    //     location: [],
    //     keyword: "",
    //     page: 1,
    //     limit: 10,
    // });

    useEffect(() => {
        if (router.isReady) {
            const {
                location = [],
                keyword = "",
                page,
                limit,
            } = router.query;
            console.log("router.query " + JSON.stringify(router.query));
            const updatedQueryParameters = {
                // 使用Array.isArray检查字段是否已经是数组，如果不是，则使用[]将其转换为数组
                location: Array.isArray(location) ? location : location ? [location] : [],
                keyword,
                page: parseInt(page, 10) || 1, // 确保page为数字，如果不存在，则默认为1
                limit: parseInt(limit, 10) || 10, // 确保limit为数字，如果不存在，则默认为10
            };
            console.log("updatedQueryParameters " + JSON.stringify(updatedQueryParameters));
            // setQueryParameters(updatedQueryParameters);
            // console.log("queryParameters " + JSON.stringify(queryParameters));
            // let didCancel = false;
            fetchData(updatedQueryParameters);
            // return () => {
            //     didCancel = true;
            // };
        }
    }, [router.isReady, router.query]);

    const fetchData = async (updatedQueryParameters) => {
        const queryString = new URLSearchParams();
        if (Array.isArray(updatedQueryParameters.category)) {
            updatedQueryParameters.category.forEach((value) =>
                queryString.append("category", value)
            );
        } else if (updatedQueryParameters.category) {
            queryString.append("category", updatedQueryParameters.category);
        }

        if (Array.isArray(updatedQueryParameters.grantAmountRange)) {
            updatedQueryParameters.grantAmountRange.forEach((value) =>
                queryString.append("grantAmountRange", value)
            );
        } else if (updatedQueryParameters.grantAmountRange) {
            queryString.append(
                "grantAmountRange",
                updatedQueryParameters.grantAmountRange
            );
        }

        if (Array.isArray(updatedQueryParameters.location)) {
            updatedQueryParameters.location.forEach((value) =>
                queryString.append("location", value)
            );
        } else if (updatedQueryParameters.location) {
            queryString.append("location", updatedQueryParameters.location);
        }

        if (updatedQueryParameters.keyword !== "") {
            queryString.append("keyword", updatedQueryParameters.keyword);
        }
        queryString.append("page", updatedQueryParameters.page.toString());
        queryString.append("limit", updatedQueryParameters.limit.toString());
        console.log("queryParams " + queryString.toString());
        setResults([]);
        try {
            const response = await axios.get(
                `/ecosystem-connector/recommendation/query`,query
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            // {
            //     "total_count": all_results.__len__(),
            //     "data": grant_details_list,
            //     "page": page,
            //     "limit": limit
            // }
            // console.log("result " + JSON.stringify(result));
            setTotalGrants(result.total_count);
            setResults(result.data);
            setPage(result.page)
            // if (!didCancel) {
            //     const result = await response.json();
            //     setGrantNum(result.length);
            //     setResults(result);
            // }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    const handleApplyFilter = () => {
        const filterParams = new URLSearchParams();
        filters.category.forEach((categoryId) => {
            filterParams.append("category", categoryId);
        });
        filters.grantAmountRange.forEach((rangeId) => {
            filterParams.append("grantAmountRange", rangeId);
        });
        filters.location.forEach((locationId) => {
            filterParams.append("location", locationId);
        });
        filterParams.append("page", 1);
        filterParams.append("limit", 10);
        router.push(`/grant-finder/search/?${filterParams.toString()}`);
    };

    const handleCheckboxChange = (event, filterType) => {
        const { value, checked } = event.target;
        setFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            if (checked) {
                if (!updatedFilters[filterType].includes(value)) {
                    updatedFilters[filterType].push(value);
                }
            } else {
                updatedFilters[filterType] = updatedFilters[filterType].filter(
                    (item) => item !== value
                );
            }
            return updatedFilters;
        });
    };

    const handleResetFilters = () => {
        setFilters({
            grantAmountRange: [],
            category: [],
            location: [],
        });
    };

    const grantAmountRanges = [
        { label: "All", label_id: "0" },
        { label: "£0 - £1 million", label_id: "1" },
        { label: "£1 million - £100 million", label_id: "2" },
        { label: "£100 million Plus", label_id: "3" },
    ];

    const categories = [
        { category_id: 0, category_name: "All" },
        { category_id: 1, category_name: "Community" },
        { category_id: 2, category_name: "Environment" },
        { category_id: 3, category_name: "Research" },
        { category_id: 4, category_name: "Technology" },
        { category_id: 5, category_name: "Education" },
        { category_id: 6, category_name: "Business" },
        { category_id: 7, category_name: "Disability" },
        { category_id: 8, category_name: "Equal Opportunities" },
        { category_id: 9, category_name: "People & Families" },
        { category_id: 10, category_name: "Health" },
        { category_id: 11, category_name: "Arts" },
        { category_id: 12, category_name: "Rural" },
        { category_id: 13, category_name: "Equality & Diversity" },
        { category_id: 14, category_name: "Regeneration" },
        { category_id: 15, category_name: "Religion" },
        { category_id: 16, category_name: "Social Enterprise" },
        { category_id: 17, category_name: "Leisure & Tourism" },
        { category_id: 18, category_name: "Employment" },
        { category_id: 19, category_name: "Crime" },
        { category_id: 20, category_name: "Young People" },
    ];

    const locations = [
        { label: "National", label_id: "0" },
        { label: "England", label_id: "1" },
        { label: "Scotland", label_id: "2" },
        { label: "Wales", label_id: "3" },
        { label: "Northern Ireland", label_id: "4" },
    ];

    function formatGrantAmount(amount) {
        //如果是null 返回NULL
        if(amount == null) return 'N/A'
        // 将金额转换为数字
        const numAmount = Number(amount);
        if (isNaN(numAmount)) return amount; // 如果转换失败，返回原始值

        // 检查金额是否大于1百万
        if (numAmount >= 1000000) {
            // 大于等于1百万时，转换为“X million”的形式
            return `£${numAmount / 1000000} million`;
        } else {
            // 否则，仅格式化数字，添加逗号
            return `£${numAmount.toLocaleString()}`;
        }
    }

    const handlePageChange = (event, value) => {
        setPage(value); // 更新当前页码状态
        const {
            category = [],
            grantAmountRange = [],
            location = [],
            keyword = "",
            page,
            limit,
        } = router.query;
const updatedQueryParameters = {
    // 使用Array.isArray检查字段是否已经是数组，如果不是，则使用[]将其转换为数组
    category: Array.isArray(category) ? category : category ? [category] : [],
    grantAmountRange: Array.isArray(grantAmountRange) ? grantAmountRange : grantAmountRange ? [grantAmountRange] : [],
    location: Array.isArray(location) ? location : location ? [location] : [],
    keyword,
    page: parseInt(page, 10) || 1, // 确保page为数字，如果不存在，则默认为1
    limit: parseInt(limit, 10) || 10, // 确保limit为数字，如果不存在，则默认为10
};
        console.log("pagechange " + JSON.stringify(updatedQueryParameters));
        const PaginationParams = new URLSearchParams();
        if (Array.isArray(updatedQueryParameters.category)) {
            updatedQueryParameters.category.forEach((categoryId) => {
                PaginationParams.append("category", categoryId);
            });
        }

        if (Array.isArray(updatedQueryParameters.grantAmountRange)) {
            updatedQueryParameters.grantAmountRange.forEach((rangeId) => {
                PaginationParams.append("grantAmountRange", rangeId);
            });
        }

        // 对于location，您已经有了类似的判断条件。
        if (Array.isArray(updatedQueryParameters.location)) {
            updatedQueryParameters.location.forEach((locationId) => {
                PaginationParams.append("location", locationId);
            });
        }
        PaginationParams.append("page", value);
        PaginationParams.append("limit", 10);
        router.push(`/grant-finder/search/?${PaginationParams.toString()}`);
    };

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className=" banner-hero bg-img-grant-finder">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                    <h2 className="wow animate__animated animate__fadeInUp">
                                        <span className="color-blue ">
                                            130 Grants
                                        </span>{" "}
                                        Available Now
                                    </h2>
                                        <p className="font-lg color-text-paragraph-2">
                                            Search for the latest personal,
                                            public, private, academic and
                                            voluntary sector grant funding
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-0">
                        <div className="container">
                            <div className="banner-hero">
                                <div className="block-banner">
                                    <div className="text-center">
                                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                            Funding for Every Type of Enterprise
                                        </h2>
                                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                            Find the right grants for you.
                                        </p>
                                    </div>
                                    <ConnectorSearchBar />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-5">
                                                    <span className="text-small text-showing">
                                                        <strong>
                                                            {totalGrants}{" "}
                                                        </strong>
                                                        Grants Found
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {results.map((grant) => (
                                            <Link
                                                legacyBehavior
                                                href={`/grant-finder/grant/${grant.grant_id}`}
                                            >
                                                <div className="row display-list clickable">
                                                    <div className="col-xl-12 col-12">
                                                        <div className="card-grid-2 hover-up">
                                                            <div className="row card-overflow-list">
                                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                                    <div className="card-grid-2-image-left">
                                                                        <div className="right-info">
                                                                            <h4>
                                                                                <a>
                                                                                    {
                                                                                        grant.title
                                                                                    }
                                                                                </a>
                                                                            </h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12 text-start pr-60 col-md-12 col-sm-12">
                                                                    <div className="pl-15 mb-15 mt-15">
                                                                        {grant.category_name.map(
                                                                            (
                                                                                one_category_name
                                                                            ) => (
                                                                                <Link
                                                                                    legacyBehavior
                                                                                    href={`/grant-finder`}
                                                                                >
                                                                                    <a className="btn btn-tags-sm mr-5">
                                                                                        {
                                                                                            one_category_name
                                                                                        }
                                                                                    </a>
                                                                                </Link>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-block-info card-overflow-list">
                                                                <div className="mt-5">
                                                                    <span className="card-location mr-15">
                                                                        {
                                                                            grant.location
                                                                        }
                                                                    </span>
                                                                    <span className="card-time">
                                                                        closing
                                                                        date:{" "}
                                                                        {
                                                                            grant.closing_date
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <p className="font-sm color-text-paragraph mt-10">
                                                                    {
                                                                        grant.description
                                                                    }
                                                                </p>
                                                                <div className="card-2-bottom mt-20">
                                                                    <div className="row">
                                                                        <div className="col-lg-7 col-7">
                                                                            <span className="card-text-price">
                                                                                {formatGrantAmount(
                                                                                    grant.total_size_of_grant_scheme
                                                                                )}
                                                                            </span>
                                                                        </div>
                                                                        {/* <Link
                                                                            legacyBehavior
                                                                            href={`/grant-finder/grant/${grant.grant_id}`}
                                                                        >
                                                                            <div className="col-lg-5 col-5 text-end">
                                                                                <div
                                                                                    className="btn btn-apply-now"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#ModalApplyJobForm"
                                                                                >
                                                                                    Read
                                                                                    More
                                                                                </div>
                                                                            </div>
                                                                        </Link> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <Stack
                                        spacing={2}
                                        sx={{ my: 2 }}
                                        justifyContent="center"
                                    >
                                        <Pagination
                                            count={Math.ceil(
                                                totalGrants / limit
                                            )}
                                            page={page}
                                            onChange={handlePageChange}
                                            color="primary"
                                        />
                                    </Stack>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="sidebar-shadow none-shadow mb-30">
                                        <div className="sidebar-filters">
                                            <div className="filter-block head-border mb-30">
                                                <h5>
                                                    Advance Filter
                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a
                                                            className="link-reset"
                                                            onClick={
                                                                handleResetFilters
                                                            }
                                                        >
                                                            Reset
                                                        </a>
                                                    </Link>
                                                </h5>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <Button
                                                    variant="contained"
                                                    fullWidth
                                                    size="large"
                                                    startIcon={<SearchIcon />}
                                                    sx={{
                                                        backgroundColor:
                                                            "rgb(58, 171, 103)",
                                                        "&:hover": {
                                                            backgroundColor:
                                                                "#339e5c",
                                                        },
                                                        height: "45px",
                                                    }}
                                                    onClick={handleApplyFilter}
                                                >
                                                    Apply Filters
                                                </Button>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">
                                                    Grant Amount Range
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        {grantAmountRanges.map(
                                                            (range) => (
                                                                <li
                                                                    key={
                                                                        range.label_id
                                                                    }
                                                                >
                                                                    <label className="cb-container">
                                                                        <input
                                                                            type="checkbox"
                                                                            value={
                                                                                range.label_id
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleCheckboxChange(
                                                                                    e,
                                                                                    "grantAmountRange"
                                                                                )
                                                                            }
                                                                            checked={filters.grantAmountRange.includes(
                                                                                range.label_id.toString()
                                                                            )}
                                                                            // 特殊处理逻辑（如果需要）可以在这里添加
                                                                        />
                                                                        <span className="text-small">
                                                                            {
                                                                                range.label
                                                                            }
                                                                        </span>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">
                                                    Category
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        {categories.map(
                                                            (category) => (
                                                                <li
                                                                    key={
                                                                        category.category_id
                                                                    }
                                                                >
                                                                    <label className="cb-container">
                                                                        <input
                                                                            type="checkbox"
                                                                            value={
                                                                                category.category_id
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleCheckboxChange(
                                                                                    e,
                                                                                    "category"
                                                                                )
                                                                            }
                                                                            checked={filters.category.includes(
                                                                                category.category_id.toString()
                                                                            )}
                                                                        />
                                                                        <span className="text-small">
                                                                            {
                                                                                category.category_name
                                                                            }
                                                                        </span>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">
                                                    Location
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        {locations.map(
                                                            (location) => (
                                                                <li
                                                                    key={
                                                                        location.label_id
                                                                    }
                                                                >
                                                                    <label className="cb-container">
                                                                        <input
                                                                            type="checkbox"
                                                                            value={
                                                                                location.label_id
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleCheckboxChange(
                                                                                    e,
                                                                                    "location"
                                                                                )
                                                                            }
                                                                            checked={filters.location.includes(
                                                                                location.label_id.toString()
                                                                            )}
                                                                        />
                                                                        <span className="text-small">
                                                                            {
                                                                                location.label
                                                                            }
                                                                        </span>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    );
}
