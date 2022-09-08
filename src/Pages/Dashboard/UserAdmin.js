import React from 'react';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
const UserAdmin = ({ user, refetch, index }) => {
  const { email, role } = user;

 // Make Admin
  const handleAdmin = () => {
    fetch(`https://manu-project-server.vercel.app/user/admin/${email}`, {
      method: 'PUT',
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
        console.log(data);
      })
  }

  return (
      <tr className="border-0">
        <th className="font-medium text-center p-6  text-[#fcca03]">{index + 1}</th>
        <td className="font-medium text-center p-6 bg-[#333] text-white">
          <div className="flex justify-center items-center">
            <Icon icon="ic:round-email" className="email-product" />
            <p className="ml-3">{user.email}</p>
          </div>
        </td>
        <td className="font-medium text-center p-6  text-white">
          {(role !== "admin") ?
            <button className='project-button' onClick={handleAdmin}>
              Make admin
            </button>
            : <h4 className="text-green-400 font-bold text-lg">Already An Admin</h4>}
        </td>
      </tr>
  );
};

export default UserAdmin;