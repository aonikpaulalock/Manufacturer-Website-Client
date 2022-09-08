import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import UserAdmin from './UserAdmin';
const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery(
    "users", () =>
    fetch('https://manu-project-server.vercel.app/users', {
      method: 'GET',
    })
    .then(res => res.json()));

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="container mx-auto px-10">
      <div className="parts-heading my-5">
        <h1>All Users</h1>
      </div>
      <div className="shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-[#3a3939]">
              <tr className="">
                <th className="font-semibold  text-center p-6 text-white">Index</th>
                <th className="font-semibold text-center p-6 text-white">Email</th>
                <th className="font-semibold text-center p-6 text-white">Manage</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) =>
                  <UserAdmin
                    key={user._id}
                    user={user}
                    index={index}
                    refetch={refetch}
                  ></UserAdmin>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;