import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { toast } from 'react-toastify';
const AllUsers = () => {
  const [user] = useAuthState(auth)
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  // Make Admin
  const handleMakeAdmin = () => {
    fetch(`http://localhost:4000/user/admin/${user.email}`, {
      method: 'PUT',
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
      // }
    })
      .then(res => { return res.json() })
      .then(data => {
        if (data.modifiedCount > 0) {
          // refetch();
          toast.success(`Successfully made an admin`);
        }
        console.log(data);
      })
  }
  return (
    <div className="container mx-auto px-10">
      <div className="parts-heading my-5">
        <h1>All Users</h1>
      </div>
      <div className="shadow-2xl">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead className="border-b bg-[#3a3939]">
              <tr className="">
                <th className="font-semibold  text-center p-6 text-white">Index</th>
                <th className="font-semibold text-center p-6 text-white">Email</th>
                <th className="font-semibold text-center p-6 text-white">Manage</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => <>
                  <tr className="border-0">
                    <th className="font-medium text-center p-6  text-[#fcca03]">{index + 1}</th>
                    <td className="font-medium text-center p-6 bg-[#333] text-white">
                      <div className="flex justify-center items-center">
                        <Icon icon="ic:round-email" className="email-product" />
                        <p className="ml-3">{user.email}</p>
                      </div>
                    </td>
                    {
                      user.role === "admin" ?
                      <td className="font-medium text-center p-6  text-white">
                          <div className="flex items-center justify-center">
                            <h1>Already Admin</h1>
                          </div>
                        </td>
                        :
                        <td className="font-medium text-center p-6  text-white">
                          <div className="flex items-center justify-center">
                            <Icon icon="subway:admin-1" className='admin' onClick={handleMakeAdmin} />
                          </div>
                        </td>
                    }
                  </tr>
                </>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;