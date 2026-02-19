import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Inbox, Calendar, Repeat, Flag as FlagIcon, CheckCheck, Plus, Settings, X } from 'lucide-react';
import './Sidebar.css';

function Sidebar({ reminders, filter, onFilterChange, customLists, onAddList, onDeleteList, userProfile, onEditProfile }) {
  const { t } = useTranslation();
  const [showAddList, setShowAddList] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const counts = {
    all: reminders.length,
    today: reminders.filter(r => !r.completed).length,
    scheduled: reminders.filter(r => !r.completed && r.recurring).length,
    flagged: reminders.filter(r => r.flagged).length,
    completed: reminders.filter(r => r.completed).length,
    work: reminders.filter(r => r.list === t('lists.work')).length,
    personal: reminders.filter(r => r.list === t('lists.personal')).length,
    shopping: reminders.filter(r => r.list === t('lists.shopping')).length
  };

  const handleAddList = () => {
    if (newListName.trim()) {
      onAddList({ name: newListName.trim(), color: selectedColor });
      setNewListName('');
      setSelectedColor('blue');
      setShowAddList(false);
    }
  };

  const colors = ['blue', 'orange', 'green', 'purple', 'pink', 'yellow'];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="app-identity">
          <div className="app-icon">
            <CheckCircle size={20} />
          </div>
          <div>
            <h1>{t('app.title')}</h1>
            <p>{t('app.subtitle')}</p>
          </div>
        </div>

        <nav className="nav-main">
          <a 
            href="#" 
            className={`nav-item ${filter === 'all' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onFilterChange('all'); }}
          >
            <div className="nav-item-left">
              <Inbox size={20} />
              <span>{t('nav.all')}</span>
            </div>
            <span className={`count ${filter === 'all' ? 'active' : ''}`}>{counts.all}</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${filter === 'today' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onFilterChange('today'); }}
          >
            <div className="nav-item-left">
              <Calendar size={20} />
              <span>{t('nav.today')}</span>
            </div>
            <span className={`count ${filter === 'today' ? 'active' : ''}`}>{counts.today}</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${filter === 'scheduled' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onFilterChange('scheduled'); }}
          >
            <div className="nav-item-left">
              <Repeat size={20} />
              <span>{t('nav.scheduled')}</span>
            </div>
            <span className={`count ${filter === 'scheduled' ? 'active' : ''}`}>{counts.scheduled}</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${filter === 'flagged' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onFilterChange('flagged'); }}
          >
            <div className="nav-item-left">
              <FlagIcon size={20} />
              <span>{t('nav.flagged')}</span>
            </div>
            <span className={`count ${filter === 'flagged' ? 'active' : ''}`}>{counts.flagged}</span>
          </a>
          <a 
            href="#" 
            className={`nav-item ${filter === 'completed' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); onFilterChange('completed'); }}
          >
            <div className="nav-item-left">
              <CheckCheck size={20} />
              <span>{t('nav.completed')}</span>
            </div>
            <span className={`count ${filter === 'completed' ? 'active' : ''}`}>{counts.completed}</span>
          </a>
        </nav>

        <div className="lists-section">
          <div className="lists-header">
            <h3>{t('nav.myLists')}</h3>
            <button onClick={() => setShowAddList(!showAddList)}><Plus size={16} /></button>
          </div>
          
          {showAddList && (
            <div className="add-list-form">
              <div className="color-picker">
                {colors.map(color => (
                  <div
                    key={color}
                    className={`color-option ${color} ${selectedColor === color ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
              <div className="add-list-input">
                <input 
                  type="text" 
                  placeholder={t('actions.newListPlaceholder')}
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddList()}
                  autoFocus
                />
                <button onClick={handleAddList}><Plus size={14} /></button>
              </div>
            </div>
          )}

          <div className="custom-lists">
            <a 
              href="#" 
              className={`list-item ${filter === 'work' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); onFilterChange('work'); }}
            >
              <span className="dot blue"></span>
              <span>{t('lists.work')}</span>
              {counts.work > 0 && <span className="list-count">{counts.work}</span>}
            </a>
            <a 
              href="#" 
              className={`list-item ${filter === 'personal' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); onFilterChange('personal'); }}
            >
              <span className="dot orange"></span>
              <span>{t('lists.personal')}</span>
              {counts.personal > 0 && <span className="list-count">{counts.personal}</span>}
            </a>
            <a 
              href="#" 
              className={`list-item ${filter === 'shopping' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); onFilterChange('shopping'); }}
            >
              <span className="dot green"></span>
              <span>{t('lists.shopping')}</span>
              {counts.shopping > 0 && <span className="list-count">{counts.shopping}</span>}
            </a>
            
            {customLists.map((list) => {
              const count = reminders.filter(r => r.list === list.name).length;
              return (
                <a 
                  key={list.name}
                  href="#" 
                  className={`list-item ${filter === list.name ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); onFilterChange(list.name); }}
                >
                  <span className={`dot ${list.color}`}></span>
                  <span>{list.name}</span>
                  {count > 0 && <span className="list-count">{count}</span>}
                  <X 
                    size={14} 
                    className="delete-list-icon"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDeleteList(list.name); }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="user-profile">
          <div className="avatar">
            {userProfile.photo ? (
              <img src={userProfile.photo} alt={userProfile.name} />
            ) : (
              getInitials(userProfile.name)
            )}
          </div>
          <div className="user-info">
            <p className="user-name">{userProfile.name}</p>
            <p className="user-tier">{t('user.account')}</p>
          </div>
          <Settings size={18} className="settings-icon" onClick={onEditProfile} />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
