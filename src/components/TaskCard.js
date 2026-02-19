import React from 'react';
import { Clock, Flag, Trash2, Edit2 } from 'lucide-react';
import './TaskCard.css';

function TaskCard({ reminder, onToggleComplete, onToggleFlag, onDelete, onEdit }) {
  const priorityColors = {
    high: 'red',
    medium: 'amber',
    normal: 'slate',
    low: 'slate'
  };

  return (
    <div className={`task-card priority-${reminder.priority}`}>
      <div className="task-header">
        <div 
          className={`checkbox ${reminder.completed ? 'checked' : ''}`}
          onClick={() => onToggleComplete(reminder.id)}
        >
          {reminder.completed && <span>✓</span>}
        </div>
        <div className="task-actions">
          <Edit2 
            size={18} 
            className="edit-icon"
            onClick={() => onEdit(reminder)}
          />
          <Flag 
            size={20} 
            className={`flag-icon ${reminder.flagged ? 'flagged' : ''}`}
            onClick={() => onToggleFlag(reminder.id)}
          />
          {onDelete && (
            <Trash2 
              size={20} 
              className="delete-icon"
              onClick={() => onDelete(reminder.id)}
            />
          )}
        </div>
      </div>
      
      <h4 className="task-title">{reminder.title}</h4>
      <p className="task-notes">{reminder.notes}</p>
      
      <div className="task-footer">
        <div className="task-time">
          <Clock size={16} />
          <span>{reminder.time}</span>
        </div>
        <div className={`priority-badge ${priorityColors[reminder.priority]}`}>
          <span className="dot"></span>
          <span>{reminder.priority}</span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
