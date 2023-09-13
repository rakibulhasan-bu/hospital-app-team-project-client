import { useGetUsersQuery } from "../../redux/features/user/userApi";

const DashboardUsers = () => {
    const { data: users, isLoading } = useGetUsersQuery();
    console.log(users);
    return (
        <div className=''>
            DashboardUsers
            <br />
            {users?.data[0]?.email}
        </div>
    );
};

export default DashboardUsers;