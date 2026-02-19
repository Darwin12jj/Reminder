import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, Save, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import './CreateReminderModal.css';

function CreateReminderModal({ onClose, onSave, customLists, editingReminder }) {
  const { t } = useTranslation();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(
    editingReminder && editingReminder.dueDate 
      ? new Date(editingReminder.dueDate + 'T00:00:00') 
      : today
  );
  
  const [formData, setFormData] = useState(
    editingReminder || {
      title: '',
      notes: '',
      list: t('lists.personal'),
      priority: 'low',
      time: '09:00',
      dueDate: today.toISOString().split('T')[0],
      recurring: true
    }
  );

  const handleSubmit = () => {
    if (!formData.title) return;
    onSave(formData);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const changeMonth = (delta) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
  };

  const { firstDay, daysInMonth } = getDaysInMonth(currentDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const allLists = [
    t('lists.personal'),
    t('lists.work'),
    t('lists.shopping'),
    ...customLists.map(l => l.name)
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingReminder ? 'Edit Reminder' : t('modal.title')}</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <div className="form-group">
            <label>{t('modal.titleLabel')}</label>
            <input 
              type="text" 
              placeholder={t('modal.titlePlaceholder')}
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>{t('modal.notesLabel')}</label>
            <textarea 
              placeholder={t('modal.notesPlaceholder')}
              value={formData.notes}
              onChange={e => setFormData({...formData, notes: e.target.value})}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t('modal.listLabel')}</label>
              <select 
                value={formData.list}
                onChange={e => setFormData({...formData, list: e.target.value})}
              >
                {allLists.map(list => (
                  <option key={list} value={list}>{list}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>{t('modal.priorityLabel')}</label>
              <div className="priority-selector">
                {['low', 'medium', 'high'].map(p => (
                  <button
                    key={p}
                    className={formData.priority === p ? 'active' : ''}
                    onClick={() => setFormData({...formData, priority: p})}
                  >
                    {t(`priority.${p}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>{t('modal.dueDateLabel')}</label>
              <div className="mini-calendar">
                <div className="calendar-header">
                  <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
                  <div className="calendar-nav">
                    <ChevronLeft size={14} onClick={() => changeMonth(-1)} />
                    <ChevronRight size={14} onClick={() => changeMonth(1)} />
                  </div>
                </div>
                <div className="calendar-grid">
                  <div className="day-label">S</div>
                  <div className="day-label">M</div>
                  <div className="day-label">T</div>
                  <div className="day-label">W</div>
                  <div className="day-label">T</div>
                  <div className="day-label">F</div>
                  <div className="day-label">S</div>
                  {[...Array(firstDay)].map((_, i) => (
                    <div key={`empty-${i}`} className="day empty"></div>
                  ))}
                  {[...Array(daysInMonth)].map((_, i) => {
                    const day = i + 1;
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                    const isSelected = selectedDate.toDateString() === date.toDateString();
                    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    return (
                      <div 
                        key={day} 
                        className={`day ${isSelected ? 'selected' : ''} ${isPast ? 'disabled' : ''}`}
                        onClick={() => {
                          if (!isPast) {
                            setSelectedDate(date);
                            setFormData({...formData, dueDate: date.toISOString().split('T')[0]});
                          }
                        }}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>{t('modal.timeLabel')}</label>
              <div className="time-input">
                <input 
                  type="time" 
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                />
                <Clock size={16} />
              </div>

              <div className="recurring-toggle">
                <div>
                  <span className="toggle-title">{t('modal.recurringTitle')}</span>
                  <span className="toggle-desc">{t('modal.recurringDesc')}</span>
                </div>
                <label className="toggle">
                  <input 
                    type="checkbox" 
                    checked={formData.recurring}
                    onChange={e => setFormData({...formData, recurring: e.target.checked})}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>{t('modal.cancel')}</button>
          <button className="btn-save" onClick={handleSubmit}>
            <Save size={16} />
            {t('modal.save')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateReminderModal;
