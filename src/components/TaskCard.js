import React from 'react';
import { Clock, Flag, Trash2, Edit2 } from 'lucide-react';
import { animate } from 'animejs';
import './TaskCard.css';

function TaskCard({ reminder, onToggleComplete, onToggleFlag, onDelete, onEdit }) {
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    if (cardRef.current) {
      animate(cardRef.current, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        ease: 'out(3)'
      });
    }
  }, []);

  const handleComplete = () => {
    animate(cardRef.current, {
      scale: [1, 0.95, 1],
      duration: 300,
      ease: 'inOut(2)',
      onComplete: () => onToggleComplete(reminder.id)
    });
  };

  const handleDelete = () => {
    animate(cardRef.current, {
      translateX: [0, -100],
      opacity: [1, 0],
      duration: 400,
      ease: 'in(3)',
      onComplete: () => onDelete(reminder.id)
    });
  };
  const priorityColors = {
    high: 'red',
    medium: 'amber',
    normal: 'slate',
    low: 'slate'
  };

  return (
    <div ref={cardRef} className={`task-card priority-${reminder.priority}`}>
      <div className="task-header">
        <div 
          className={`checkbox ${reminder.completed ? 'checked' : ''}`}
          onClick={handleComplete}
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
              onClick={handleDelete}
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
