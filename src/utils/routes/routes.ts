type TabBarRoutes = Record<string, { title: string; icon: string }>;

export const tabBarRoutes: TabBarRoutes = {
  home: {
    title: 'Home',
    icon: 'home',
  },
  simulacoes: {
    title: 'Simulações',
    icon: 'hands-helping',
  },
  dashboard: {
    title: 'Dashboard',
    icon: 'chart-pie',
  },
  perfil: {
    title: 'Perfil',
    icon: 'id-card-alt',
  },
};
