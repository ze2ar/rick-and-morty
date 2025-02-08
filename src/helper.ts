export const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case 'alive':
      return '#4bff4b';
    case 'dead':
      return '#E74C3C';
    default:
      return '#F5F5F5';
  }
};