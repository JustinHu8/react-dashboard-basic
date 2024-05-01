import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import Post from './post';
// import User from './user';
// import SearchBox from './searchBox';

const DashboardContainer = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const users = useSelector((state) => {
        console.log('State:', state);
        console.log('User:', state.user);
        console.log('Users:', state.user.users);
        return state.user?.users;
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Users</h2>
            <ul>
                { users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            {/* <SearchBox onSearch={handleSearch} />
            <Post searchQuery={searchQuery} />
            <User searchQuery={searchQuery} /> */}
        </div>
    );
}

export default DashboardContainer;
