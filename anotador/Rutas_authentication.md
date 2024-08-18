src/
│
├── components/
│   ├── authentication/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Logout.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── ResetPassword.jsx
│   │   └── AuthForm.jsx  (opcional: si tienes un formulario común)
│   │
│   ├── common/  (componentes reutilizables en toda la aplicación)
│   │   ├── InputField.jsx
│   │   └── Button.jsx
│   │
│   └── ... (otros componentes compartidos)
│
├── pages/
│   ├── Auth/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── ForgotPasswordPage.jsx
│   │
│   └── ... (otras páginas)
│
├── hooks/
│   ├── useAuth.js  (custom hook para manejar la lógica de autenticación)
│   └── useForm.js  (custom hook para manejar formularios)
│
├── services/
│   ├── authService.js  (módulo para manejar las solicitudes a la API relacionadas con la autenticación)
│   └── api.js  (archivo central para todas las solicitudes de API)
│
├── context/
│   └── AuthContext.js  (contexto para manejar el estado de autenticación globalmente)
│
└── App.jsx
