import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { GrFormPrevious } from 'react-icons/gr';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10);
    let userdataPerPage = 3;
    const fetchData = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users?limit=${userdataPerPage}&skip=${(currentPage - 1) * userdataPerPage}`);
            const finalRes = res.data;
            console.log("finalres", finalRes);
            setData(finalRes)
            setFilterData(finalRes)
        } catch (error) {
            console.log("network issued", error);
        }
    }
    const handleOnChage = (e) => {
        const value = e.target.value;
        setSearch(value)
    }
    const handleSearch = () => {
        let result = data.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        )
        setFilterData(result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handlePageChange = (page) => {
        setCurrentPage(page)
        console.log(page);
        fetchData()
    }
    const dashboarditem = [
        {
            id: 1,
            label: "dashboard"
        },
        {
            id: 2,
            label: "users"
        }, {
            id: 3,
            label: "settings"
        },
    ]
    return (
        <>
            <div className="relative bg-[#f7f6f9] h-full min-h-screen">
                <div className="flex items-start">
                    <nav id="sidebar" className="lg:min-w-[270px] w-max max-lg:min-w-8">
                        <div id="sidebar-collapse-menu"
                            className="bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500">
                            <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
                            </div>
                            <div className="py-6 px-6">
                                <ul className="space-y-2">
                                    {
                                        dashboarditem.map((val, i) => {
                                            return (
                                                <li key={i}>
                                                    <a classNameName='font-semibold capitalize' href="#">
                                                        {val.label}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <section className="main-content w-full px-8">
                        <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-8">
                            <div className="flex flex-wrap items-center w-full relative tracking-wide">
                                <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
                                    <div
                                        className="flex items-center gap-4 w-full px-6 bg-white shadow-sm min-h-[48px] sm:mr-20 rounded-md outline-0 border-0">
                                        <input value={search} onChange={handleOnChage} type='text' placeholder='Search something...'
                                            className="w-full text-sm bg-transparent rounded-sm outline-0" />
                                        <button onClick={handleSearch}>search</button>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="my-10 px-2">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                                {
                                    filterData.length === 0 ? (
                                        <>
                                            <p>no data here</p>
                                        </>
                                    ) : (
                                        <>
                                            {filterData.map((val, index) => {
                                                return (
                                                    <Card key={index} data={val} />
                                                )
                                            })}
                                        </>
                                    )
                                }

                                <div>

                                    <div class="flex items-center justify-center space-x-2">

                                        <button class={`px-3 py-2  bg-gray-800  text-white ${currentPage == totalPages ? "cursor-not-allowed" : ""}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage == 1}>
                                            <GrFormPrevious />
                                        </button>
                                        {[...Array(totalPages)].map((_, index) => {
                                            return (
                                                <button key={index} class={`px-3 py-2 bg-gray-800  text-white ${currentPage == index + 1 ? "bg-red-500" : ""}`} onClick={() => handlePageChange(index + 1)}>
                                                    {index + 1}
                                                </button>
                                            )
                                        })}


                                        <button class={`px-3 py-2 bg-gray-800  text-white ${currentPage == totalPages ? "cursor-not-allowed" : ""}  `} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage == totalPages}>
                                            &gt;
                                        </button>
                                    </div >
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Dashboard
