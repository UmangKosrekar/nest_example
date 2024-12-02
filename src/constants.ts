export const userEnum = Object.freeze({
  role: {
    ADMIN: 'admin',
    MANAGER: 'manager',
    USER: 'user',
  },
});

export const taskEnum = Object.freeze({
  status: {
    PENDING: 'pending',
    IN_PROGRESS: 'inProgress',
    COMPLETED: 'completed',
  },
  priority: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
  },
});

export const errorCodes = Object.freeze({
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
});
