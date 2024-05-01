import React, { useState } from 'react';

const Posts = () => {
    const [showModal, setShowModal] = useState(false);

    const handleViewComments = () => {
        // Logic to fetch and display comments
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={handleViewComments}>View Comments</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Comments</h2>
                        {/* Render comments here */}
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Posts;