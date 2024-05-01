import React, { useState } from 'react';

const User = ({ user }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div onClick={handleClick}>
                <img src={user.avatar} alt="User Avatar" />
                <h3>{user.name}</h3>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <img src={user.avatar} alt="User Avatar" />
                        <h3>{user.name}</h3>
                        <p>Bio: {user.bio}</p>
                        <p>Joined Date: {user.joinedDate}</p>
                        {/* Add more details here */}
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;