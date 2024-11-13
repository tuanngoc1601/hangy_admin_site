import { useState } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { NavLink } from "react-router-dom";
import { Card, CardBody, Label, Select } from "@windmill/react-ui";
import OrdersTable from "../components/OrdersTable";
import { IconName, IconProps } from "../types/app";
import * as Icons from "../icons";

function Icon({ icon, ...props }: IconProps) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

const Orders = () => {
  // pagination setup
  const [resultsPerPage, setResultPerPage] = useState<number>(10);
  const [filter, setFilter] = useState("all");

  const handleFilter = (filter_name: string) => {
    // console.log(filter_name);
    if (filter_name == "All") {
      setFilter("all");
    }
    if (filter_name == "Un-Paid Orders") {
      setFilter("un-paid");
    }
    if (filter_name == "Paid Orders") {
      setFilter("paid");
    }
    if (filter_name == "Completed") {
      setFilter("completed");
    }
  };

  return (
    <div>
      <PageTitle>Orders</PageTitle>

      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-purple-600">
          <Icon
            className="w-5 h-5"
            aria-hidden="true"
            icon={"HomeIcon" as IconName}
          />
          <NavLink to="/app/dashboard" className="mx-2">
            Dashboard
          </NavLink>
        </div>
        {">"}
        <p className="mx-2">Orders</p>
      </div>

      {/* Sort */}
      <Card className="mt-5 mb-5 shadow-md">
        <CardBody>
          <div className="flex items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Filter Orders
            </p>

            <Label className="mx-3">
              <Select
                placeholder="Status"
                onPointerEnterCapture={() => console.log("Pointer entered")}
                onPointerLeaveCapture={() => console.log("Pointer left")}
                css={{ borderColor: "gray" }} // Đảm bảo sử dụng đúng kiểu css nếu thư viện yêu cầu
                className="py-3 px-2"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option>All</option>
                <option>Un-Paid Orders</option>
                <option>Paid Orders</option>
                <option>Completed</option>
              </Select>
            </Label>

            <Label className="">
              {/* <!-- focus-within sets the color for the icon when input is focused --> */}
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400 rounded-md">
                <input
                  className="py-3 pr-5 ps-2 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  value={resultsPerPage}
                  onChange={(e) => setResultPerPage(Number(e.target.value))}
                />
                <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                  {/* <SearchIcon className="w-5 h-5" aria-hidden="true" /> */}
                  Results on Table
                </div>
              </div>
            </Label>
          </div>
        </CardBody>
      </Card>

      {/* Table */}
      <OrdersTable resultsPerPage={resultsPerPage} filter={filter} />
    </div>
  );
};

export default Orders;
