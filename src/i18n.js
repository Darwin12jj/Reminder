import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      app: {
        title: "Reminders",
        subtitle: "Task Management"
      },
      nav: {
        all: "All",
        today: "Today",
        scheduled: "Scheduled",
        flagged: "Flagged",
        completed: "Completed",
        myLists: "MY LISTS"
      },
      lists: {
        work: "Work",
        personal: "Personal",
        shopping: "Shopping"
      },
      dashboard: {
        todayTasks: "Today's Tasks",
        priority: "Priority",
        addReminder: "Add Reminder",
        searchPlaceholder: "Search tasks..."
      },
      modal: {
        title: "Create New Reminder",
        titleLabel: "Title",
        titlePlaceholder: "What needs to be done?",
        notesLabel: "Notes",
        notesPlaceholder: "Add details, links, or specific instructions...",
        listLabel: "Select List",
        priorityLabel: "Priority",
        dueDateLabel: "Due Date",
        timeLabel: "Time",
        recurringTitle: "Recurring Alert",
        recurringDesc: "Repeats every day at 9:00 AM",
        cancel: "Cancel",
        save: "Save Reminder"
      },
      priority: {
        low: "LOW",
        medium: "MEDIUM",
        high: "HIGH"
      },
      user: {
        name: "Alex Rivera",
        account: "Pro Account"
      },
      actions: {
        deleteAll: "Delete All",
        addList: "Add List",
        newListPlaceholder: "New list name..."
      }
    }
  },
  es: {
    translation: {
      app: {
        title: "Recordatorios",
        subtitle: "Gestión de Tareas"
      },
      nav: {
        all: "Todos",
        today: "Hoy",
        scheduled: "Programados",
        flagged: "Marcados",
        completed: "Completados",
        myLists: "MIS LISTAS"
      },
      lists: {
        work: "Trabajo",
        personal: "Personal",
        shopping: "Compras"
      },
      dashboard: {
        todayTasks: "Tareas de Hoy",
        priority: "Prioridad",
        addReminder: "Agregar Recordatorio",
        searchPlaceholder: "Buscar tareas..."
      },
      modal: {
        title: "Crear Nuevo Recordatorio",
        titleLabel: "Título",
        titlePlaceholder: "¿Qué necesitas hacer?",
        notesLabel: "Notas",
        notesPlaceholder: "Agrega detalles, enlaces o instrucciones específicas...",
        listLabel: "Seleccionar Lista",
        priorityLabel: "Prioridad",
        dueDateLabel: "Fecha de Vencimiento",
        timeLabel: "Hora",
        recurringTitle: "Alerta Recurrente",
        recurringDesc: "Se repite todos los días a las 9:00 AM",
        cancel: "Cancelar",
        save: "Guardar Recordatorio"
      },
      priority: {
        low: "BAJA",
        medium: "MEDIA",
        high: "ALTA"
      },
      user: {
        name: "Alex Rivera",
        account: "Cuenta Pro"
      },
      actions: {
        deleteAll: "Eliminar Todas",
        addList: "Agregar Lista",
        newListPlaceholder: "Nombre de la nueva lista..."
      }
    }
  },
  de: {
    translation: {
      app: {
        title: "Erinnerungen",
        subtitle: "Aufgabenverwaltung"
      },
      nav: {
        all: "Alle",
        today: "Heute",
        scheduled: "Geplant",
        flagged: "Markiert",
        completed: "Erledigt",
        myLists: "MEINE LISTEN"
      },
      lists: {
        work: "Arbeit",
        personal: "Persönlich",
        shopping: "Einkaufen"
      },
      dashboard: {
        todayTasks: "Heutige Aufgaben",
        priority: "Priorität",
        addReminder: "Erinnerung Hinzufügen",
        searchPlaceholder: "Aufgaben suchen..."
      },
      modal: {
        title: "Neue Erinnerung Erstellen",
        titleLabel: "Titel",
        titlePlaceholder: "Was muss erledigt werden?",
        notesLabel: "Notizen",
        notesPlaceholder: "Details, Links oder spezifische Anweisungen hinzufügen...",
        listLabel: "Liste Auswählen",
        priorityLabel: "Priorität",
        dueDateLabel: "Fälligkeitsdatum",
        timeLabel: "Zeit",
        recurringTitle: "Wiederkehrende Warnung",
        recurringDesc: "Wiederholt sich jeden Tag um 9:00 Uhr",
        cancel: "Abbrechen",
        save: "Erinnerung Speichern"
      },
      priority: {
        low: "NIEDRIG",
        medium: "MITTEL",
        high: "HOCH"
      },
      user: {
        name: "Alex Rivera",
        account: "Pro-Konto"
      },
      actions: {
        deleteAll: "Alle Löschen",
        addList: "Liste Hinzufügen",
        newListPlaceholder: "Neuer Listenname..."
      }
    }
  },
  pt: {
    translation: {
      app: {
        title: "Lembretes",
        subtitle: "Gestão de Tarefas"
      },
      nav: {
        all: "Todos",
        today: "Hoje",
        scheduled: "Agendados",
        flagged: "Marcados",
        completed: "Concluídos",
        myLists: "MINHAS LISTAS"
      },
      lists: {
        work: "Trabalho",
        personal: "Pessoal",
        shopping: "Compras"
      },
      dashboard: {
        todayTasks: "Tarefas de Hoje",
        priority: "Prioridade",
        addReminder: "Adicionar Lembrete",
        searchPlaceholder: "Pesquisar tarefas..."
      },
      modal: {
        title: "Criar Novo Lembrete",
        titleLabel: "Título",
        titlePlaceholder: "O que precisa ser feito?",
        notesLabel: "Notas",
        notesPlaceholder: "Adicione detalhes, links ou instruções específicas...",
        listLabel: "Selecionar Lista",
        priorityLabel: "Prioridade",
        dueDateLabel: "Data de Vencimento",
        timeLabel: "Hora",
        recurringTitle: "Alerta Recorrente",
        recurringDesc: "Repete todos os dias às 9:00",
        cancel: "Cancelar",
        save: "Salvar Lembrete"
      },
      priority: {
        low: "BAIXA",
        medium: "MÉDIA",
        high: "ALTA"
      },
      user: {
        name: "Alex Rivera",
        account: "Conta Pro"
      },
      actions: {
        deleteAll: "Excluir Todas",
        addList: "Adicionar Lista",
        newListPlaceholder: "Nome da nova lista..."
      }
    }
  },
  fr: {
    translation: {
      app: {
        title: "Rappels",
        subtitle: "Gestion des Tâches"
      },
      nav: {
        all: "Tous",
        today: "Aujourd'hui",
        scheduled: "Planifiés",
        flagged: "Marqués",
        completed: "Terminés",
        myLists: "MES LISTES"
      },
      lists: {
        work: "Travail",
        personal: "Personnel",
        shopping: "Courses"
      },
      dashboard: {
        todayTasks: "Tâches d'Aujourd'hui",
        priority: "Priorité",
        addReminder: "Ajouter un Rappel",
        searchPlaceholder: "Rechercher des tâches..."
      },
      modal: {
        title: "Créer un Nouveau Rappel",
        titleLabel: "Titre",
        titlePlaceholder: "Que faut-il faire?",
        notesLabel: "Notes",
        notesPlaceholder: "Ajoutez des détails, des liens ou des instructions spécifiques...",
        listLabel: "Sélectionner une Liste",
        priorityLabel: "Priorité",
        dueDateLabel: "Date d'Échéance",
        timeLabel: "Heure",
        recurringTitle: "Alerte Récurrente",
        recurringDesc: "Se répète tous les jours à 9h00",
        cancel: "Annuler",
        save: "Enregistrer le Rappel"
      },
      priority: {
        low: "BASSE",
        medium: "MOYENNE",
        high: "HAUTE"
      },
      user: {
        name: "Alex Rivera",
        account: "Compte Pro"
      },
      actions: {
        deleteAll: "Tout Supprimer",
        addList: "Ajouter une Liste",
        newListPlaceholder: "Nom de la nouvelle liste..."
      }
    }
  },
  eo: {
    translation: {
      app: {
        title: "Memorigoj",
        subtitle: "Tasko-Administrado"
      },
      nav: {
        all: "Ĉiuj",
        today: "Hodiaŭ",
        scheduled: "Planitaj",
        flagged: "Markitaj",
        completed: "Kompletigitaj",
        myLists: "MIAJ LISTOJ"
      },
      lists: {
        work: "Laboro",
        personal: "Persona",
        shopping: "Aĉetoj"
      },
      dashboard: {
        todayTasks: "Hodiaŭaj Taskoj",
        priority: "Prioritato",
        addReminder: "Aldoni Memorigon",
        searchPlaceholder: "Serĉi taskojn..."
      },
      modal: {
        title: "Krei Novan Memorigon",
        titleLabel: "Titolo",
        titlePlaceholder: "Kion necesas fari?",
        notesLabel: "Notoj",
        notesPlaceholder: "Aldonu detalojn, ligilojn aŭ specifajn instrukciojn...",
        listLabel: "Elekti Liston",
        priorityLabel: "Prioritato",
        dueDateLabel: "Limdato",
        timeLabel: "Horo",
        recurringTitle: "Ripeta Alarmo",
        recurringDesc: "Ripetas ĉiutage je la 9-a horo",
        cancel: "Nuligi",
        save: "Konservi Memorigon"
      },
      priority: {
        low: "MALALTA",
        medium: "MEZA",
        high: "ALTA"
      },
      user: {
        name: "Alex Rivera",
        account: "Profesia Konto"
      },
      actions: {
        deleteAll: "Forigi Ĉiujn",
        addList: "Aldoni Liston",
        newListPlaceholder: "Nova listo-nomo..."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
