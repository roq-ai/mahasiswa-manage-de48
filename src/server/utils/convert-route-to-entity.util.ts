const mapping: Record<string, string> = {
  courses: 'course',
  organizations: 'organization',
  staff: 'staff',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
