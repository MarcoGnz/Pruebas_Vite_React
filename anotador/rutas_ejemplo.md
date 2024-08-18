src/
│
├── components/          # Componentes reutilizables en toda la aplicación
│   ├── Button.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/               # Páginas principales de la aplicación
│   ├── Home/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── HomeComponent.jsx  # Componentes específicos de Home
│   │
│   ├── About/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   └── AboutComponent.jsx # Componentes específicos de About
│   │
│   └── App_alquiler/
│       ├── App_alquiler.jsx
│       ├── App_alquiler.css
│       └── AlquilerComponent.jsx # Componentes específicos de App_alquiler
│
├── assets/              # Archivos estáticos como imágenes, fuentes, etc.
│   ├── images/
│   └── styles/
│
├── App.jsx              # Componente principal que contiene las rutas y estructura básica
├── index.jsx            # Punto de entrada de la aplicación
└── routes.jsx           # Configuración de las rutas de la aplicación
