import { useGetUsersQuery } from "../../redux/features/user/userApi";

const DashboardUsers = () => {
    const { data: users, isLoading } = useGetUsersQuery();
    console.log(users);
    return (
        <div className=''>
            DashboardUsers
            <br />
            {users?.data.map(user => (
                <p>{user?.email}</p>
            ))}
        </div>
    );
};

export default DashboardUsers;