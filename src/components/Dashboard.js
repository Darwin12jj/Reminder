import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Inbox, Calendar, Repeat, Flag, CheckCheck, Plus, Search, Trash2 } from 'lucide-react';
import { animate } from 'animejs';
import Sidebar from './Sidebar';
import TaskCard from './TaskCard';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import './Dashboard.css';

function Dashboard({ reminders, filter, onFilterChange, onAddClick, onToggleComplete, onToggleFlag, onDelete, onDeleteAllCompleted, customLists, onAddList, onDeleteList, onEdit, userProfile, onEditProfile }) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleAddClick = (e) => {
    animate(e.currentTarget, {
      scale: [1, 0.9, 1],
      duration: 300,
      ease: 'inOut(2)'
    });
    onAddClick();
  };
  
  const getFilteredReminders = () => {
    let filtered;
    switch(filter) {
      case 'all':
        filtered = reminders;
        break;
      case 'today':
        filtered = reminders.filter(r => !r.completed);
        break;
      case 'scheduled':
        filtered = reminders.filter(r => !r.completed && r.recurring);
        break;
      case 'flagged':
        filtered = reminders.filter(r => r.flagged);
        break;
      case 'completed':
        filtered = reminders.filter(r => r.completed);
        break;
      case 'work':
      case 'personal':
      case 'shopping':
        filtered = reminders.filter(r => r.list === t(`lists.${filter}`));
        break;
      default:
        // Custom list
        filtered = reminders.filter(r => r.list === filter);
    }
    
    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(r => 
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.notes && r.notes.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  };

  const filteredReminders = getFilteredReminders();

  const getTitle = () => {
    switch(filter) {
      case 'all': return t('nav.all');
      case 'today': return t('nav.today');
      case 'scheduled': return t('nav.scheduled');
      case 'flagged': return t('nav.flagged');
      case 'completed': return t('nav.completed');
      case 'work': return t('lists.work');
      case 'personal': return t('lists.personal');
      case 'shopping': return t('lists.shopping');
      default: return filter;
    }
  };
  
  return (
    <>
      <Sidebar 
        reminders={reminders}
        filter={filter}
        onFilterChange={onFilterChange}
        customLists={customLists}
        onAddList={onAddList}
        onDeleteList={onDeleteList}
        userProfile={userProfile}
        onEditProfile={onEditProfile}
      />
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h2>{getTitle()}</h2>
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder={t('dashboard.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="header-right">
            <ThemeSwitcher />
            <LanguageSwitcher />
            {filter === 'completed' && filteredReminders.length > 0 && (
              <button className="btn-delete-all" onClick={onDeleteAllCompleted}>
                <Trash2 size={18} />
                {t('actions.deleteAll')}
              </button>
            )}
            <button className="btn-primary" onClick={handleAddClick}>
              <Plus size={20} />
              {t('dashboard.addReminder')}
            </button>
          </div>
        </header>
        
        <div className="dashboard-content">
          <div className="section">
            <div className="section-header">
              <h3>{getTitle()}</h3>
              <span className="badge">{filteredReminders.length}</span>
            </div>
            <div className="task-grid">
              {filteredReminders.map(reminder => (
                <TaskCard 
                  key={reminder.id}
                  reminder={reminder}
                  onToggleComplete={onToggleComplete}
                  onToggleFlag={onToggleFlag}
                  onDelete={filter === 'completed' ? onDelete : null}
                  onEdit={onEdit}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
