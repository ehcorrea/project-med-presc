type TabBarRoutes = Record<string, { title: string; icon: string }>;

export const tabBarRoutes: TabBarRoutes = {
  home: {
    title: 'Home',
    icon: 'home',
  },
  remedios: {
    title: 'Remédios',
    icon: 'pills',
  },
  configuracoes: {
    title: 'Configs',
    icon: 'cogs',
  },
};
