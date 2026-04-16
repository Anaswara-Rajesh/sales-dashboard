import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowsUpDownIcon,
} from "@heroicons/react/24/outline";

const DataTable = ({ searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [filterCity, setFilterCity] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        const transformedData = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          companyName: user.company.name,
          city: user.address.city,
        }));

        setUsers(transformedData);

        const uniqueCities = [
          ...new Set(transformedData.map((user) => user.city)),
        ];

        setCities(uniqueCities.sort());
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data. Please try again later.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    let result = [...users];

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();

      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerSearch) ||
          user.email.toLowerCase().includes(lowerSearch)
      );
    }

    if (filterCity) {
      result = result.filter((user) => user.city === filterCity);
    }

    return result;
  }, [users, searchTerm, filterCity]);

  const sortedUsers = useMemo(() => {
    const sortable = [...filteredUsers];

    sortable.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });

    return sortable;
  }, [filteredUsers, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <ArrowsUpDownIcon className="h-4 w-4 text-gray-400" />;
    }

    return sortConfig.direction === "asc" ? (
      <ArrowUpIcon className="h-4 w-4 text-indigo-600" />
    ) : (
      <ArrowDownIcon className="h-4 w-4 text-indigo-600" />
    );
  };

  const clearFilters = () => {
    setFilterCity("");
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col items-center justify-center py-16">
          <div className="h-12 w-12 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin"></div>
          <p className="mt-4 text-sm text-gray-500">
            Loading customer data...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col items-center justify-center py-16">
          <div className="text-4xl mb-3">⚠️</div>
          <p className="text-red-600 font-medium">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Filters */}
      <div className="px-6 py-5 border-b border-gray-100 bg-gray-50">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="w-full md:w-72">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by City
            </label>

            <select
              value={filterCity}
              onChange={(e) => setFilterCity(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="">All Cities</option>

              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={clearFilters}
            className="px-4 py-2.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="px-6 py-4 border-b border-gray-100">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-800">
            {sortedUsers.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-800">
            {users.length}
          </span>{" "}
          customers
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50">
            <tr>
              {[
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "companyName", label: "Company Name" },
                { key: "city", label: "City" },
              ].map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {getSortIcon(column.key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {sortedUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-16 text-center text-gray-500"
                >
                  No customers found matching your criteria.
                </td>
              </tr>
            ) : (
              sortedUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-indigo-50/40 transition"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm  text-gray-600">
                        {user.name}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    {user.companyName}
                  </td>

                  <td className="px-6 py-5 text-sm text-gray-600">
                    {user.city}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;