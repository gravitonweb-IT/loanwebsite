import React, { useState } from 'react';
import Sidebar from './Sidebar';

const notificationData = [
  {
    id: 1,
    title: "New Message",
    content: "You have a new message from John Doe.",
    timestamp: new Date("2024-01-18T12:30:00"),
  },
  {
    id: 2,
    title: "Meeting Reminder",
    content: "Reminder: Team meeting at 2:00 PM today.",
    timestamp: new Date("2024-01-19T09:00:00"),
  },
  {
    id: 3,
    title: "Task Completed",
    content: "Task #123 has been completed successfully.",
    timestamp: new Date("2024-01-20T15:45:00"),
  },
  // Add more dummy notifications as needed
];

const Status = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const openModal = (notification) => {
    setSelectedNotification(notification);
  };

  const closeModal = () => {
    setSelectedNotification(null);
  };

  return (
    <Sidebar>
      <div className="">
        <h2 className='mx-4'>Notification </h2>
        <table className="table table-striped mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Content</th>
              <th>Timestamp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {notificationData.map((notification) => (
              <tr key={notification.id} onClick={() => openModal(notification)}>
                <td>{notification.id}</td>
                <td>{notification.title}</td>
                <td>{notification.content}</td>
                <td>{notification.timestamp.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedNotification && (
        <div id="notificationModal" className="modal fade show" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedNotification.title}</h5>
                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{selectedNotification.content}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
};

export default Status;
