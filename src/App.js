import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import CreateReminderModal from './components/CreateReminderModal';
import UserSetupModal from './components/UserSetupModal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editingReminder, setEditingReminder] = useState(null);
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [filter, setFilter] = useState('today');
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : null;
  });
  const [reminders, setReminders] = useState(() => {
    const saved = localStorage.getItem('reminders');
    return saved ? JSON.parse(saved) : [];
  });
  const [customLists, setCustomLists] = useState(() => {
    const saved = localStorage.getItem('customLists');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  useEffect(() => {
    localStorage.setItem('customLists', JSON.stringify(customLists));
  }, [customLists]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      const currentDate = now.toISOString().split('T')[0];

      reminders.forEach(reminder => {
        if (!reminder.completed && reminder.time === currentTime && reminder.dueDate === currentDate) {
          if (Notification.permission === 'granted') {
            new Notification('⏰ Recordatorio', {
              body: `${reminder.title}\n${reminder.notes || ''}`,
              icon: '/favicon.ico',
              tag: reminder.id.toString()
            });
          }
        }
      });
    };

    // Request notification permission
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }

    // Check every minute
    const interval = setInterval(checkReminders, 60000);
    checkReminders(); // Check immediately

    return () => clearInterval(interval);
  }, [reminders]);

  const addReminder = (reminder) => {
    setReminders([...reminders, { ...reminder, id: Date.now(), completed: false, flagged: false }]);
    setShowModal(false);
  };

  const updateReminder = (updatedReminder) => {
    setReminders(reminders.map(r => r.id === updatedReminder.id ? updatedReminder : r));
    setEditingReminder(null);
    setShowModal(false);
  };

  const toggleComplete = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
  };

  const toggleFlag = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, flagged: !r.flagged } : r));
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  const deleteAllCompleted = () => {
    if (window.confirm('¿Eliminar todas las tareas completadas?')) {
      setReminders(reminders.filter(r => !r.completed));
    }
  };

  const addCustomList = (listData) => {
    if (listData.name && !customLists.find(l => l.name === listData.name)) {
      setCustomLists([...customLists, listData]);
    }
  };

  const deleteCustomList = (listName) => {
    setCustomLists(customLists.filter(l => l.name !== listName));
  };

  const handleEditReminder = (reminder) => {
    setEditingReminder(reminder);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingReminder(null);
  };

  const handleSaveProfile = (profile) => {
    setUserProfile(profile);
    setShowProfileSetup(false);
  };

  return (
    <div className="App">
      {!userProfile ? (
        <UserSetupModal onSave={handleSaveProfile} />
      ) : (
        <>
          <Dashboard 
            reminders={reminders}
            filter={filter}
            onFilterChange={setFilter}
            onAddClick={() => setShowModal(true)}
            onToggleComplete={toggleComplete}
            onToggleFlag={toggleFlag}
            onDelete={deleteReminder}
            onDeleteAllCompleted={deleteAllCompleted}
            customLists={customLists}
            onAddList={addCustomList}
            onDeleteList={deleteCustomList}
            onEdit={handleEditReminder}
            userProfile={userProfile}
            onEditProfile={() => setShowProfileSetup(true)}
          />
          {showModal && (
            <CreateReminderModal 
              onClose={handleCloseModal}
              onSave={editingReminder ? updateReminder : addReminder}
              customLists={customLists}
              editingReminder={editingReminder}
            />
          )}
          {showProfileSetup && (
            <UserSetupModal 
              onSave={handleSaveProfile}
              existingProfile={userProfile}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
