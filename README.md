# Exam Management System

A comprehensive web-based Exam Management System built with Angular 17 that facilitates seamless interaction between Doctors (instructors) and Students. The system provides role-based authentication, exam creation, exam-taking capabilities, and automated result calculation.

---

## 📋 Project Description

The Exam Management System is a modern, full-stack web application designed to streamline the examination process in educational institutions. The platform enables doctors to create and manage exams while allowing students to take exams and receive instant feedback on their performance. The system implements secure authentication, role-based access control, and a responsive user interface.

---

## ✨ Features

### 🔐 Authentication & Authorization

- **User Registration**: Multi-step registration process with email confirmation
- **Email Verification**: Secure email confirmation system with token-based validation
- **User Login**: Role-based authentication (Doctor/Student)
- **Password Management**:
  - Forget Password functionality
  - Reset Password with secure token validation
  - Change Password for authenticated users
- **Resend Confirmation Email**: Option to resend verification emails
- **JWT Token Management**: Secure token storage and decoding
- **Role-Based Access Control**: Separate access levels for Doctors and Students

### 👨‍⚕️ Doctor Features

- Role-based dashboard access
- Exam creation and management capabilities
- Question bank management
- Student performance tracking
- Exam publishing controls

### 🎓 Student Features

- Access to available exams
- Exam-taking interface
- Answer submission system
- Automated score calculation
- Result display upon exam completion
- Personal exam history

---

## 🛠️ Technologies & Tools Used

### Frontend Framework
- **Angular 17.3.0** - Modern standalone component architecture
- **TypeScript 5.4.2** - Type-safe development
- **RxJS 7.8.0** - Reactive programming

### UI & Styling
- **Bootstrap 5.3.8** - Responsive design framework
- **FontAwesome 7.1.0** - Icon library
- **Custom CSS** - Additional styling

### State Management & Utilities
- **Angular Signals** - Modern reactive state management
- **Angular Reactive Forms** - Form handling and validation
- **jwt-decode 4.0.0** - JWT token decoding

### User Experience
- **ngx-toastr 17.0.2** - Toast notifications
- **ngx-spinner 17.0.0** - Loading indicators

### HTTP & Networking
- **Angular HttpClient** - API communication
- **HTTP Interceptors** - Request/response handling

### Development Tools
- **Angular CLI 17.3.17** - Project scaffolding and build tools
- **Jasmine & Karma** - Testing framework
- **Angular SSR** - Server-side rendering support

---

## 📁 Project Structure

```
examTask/
├── src/
│   ├── app/
│   │   ├── core/                          # Core application modules
│   │   │   ├── environment/               # Environment configuration
│   │   │   │   └── environment.ts         # API base URL configuration
│   │   │   ├── interceptors/              # HTTP interceptors
│   │   │   │   ├── errors.interceptor.ts  # Global error handling
│   │   │   │   ├── header.interceptor.ts  # Authorization header injection
│   │   │   │   └── loading-screen.interceptor.ts  # Loading state management
│   │   │   └── sharedservices/            # Shared services across modules
│   │   │
│   │   ├── features/                      # Feature modules
│   │   │   ├── auth/                      # Authentication module
│   │   │   │   ├── services/
│   │   │   │   │   └── auth.service.ts    # Authentication service
│   │   │   │   ├── login/                 # Login component
│   │   │   │   ├── register/              # Registration component
│   │   │   │   ├── forgetpass/            # Forget password component
│   │   │   │   └── auth.component.ts      # Auth layout wrapper
│   │   │   ├── doctor/                    # Doctor module
│   │   │   │   └── doctor.component.ts    # Doctor dashboard
│   │   │   └── students/                  # Student module
│   │   │       └── students.component.ts  # Student dashboard
│   │   │
│   │   ├── shared/                        # Shared components & utilities
│   │   ├── app.component.ts               # Root component
│   │   ├── app.routes.ts                  # Application routing
│   │   └── app.config.ts                  # Application configuration
│   │
│   ├── assets/                            # Static assets
│   ├── index.html                         # Main HTML file
│   ├── main.ts                            # Application entry point
│   └── styles.css                         # Global styles
│
├── docs/                                  # Documentation files
├── angular.json                           # Angular workspace configuration
├── package.json                           # Dependencies and scripts
├── tsconfig.json                          # TypeScript configuration
└── server.ts                              # SSR server configuration
```

### Key Folders Explained

- **`core/`**: Contains singleton services, interceptors, and environment configurations used throughout the application
- **`features/`**: Feature-based modules organized by domain (auth, doctor, students)
- **`interceptors/`**: HTTP interceptors for cross-cutting concerns (authentication, error handling, loading states)
- **`shared/`**: Reusable components, directives, and pipes shared across features

---

## 🏗️ Application Architecture & Data Flow

### Architecture Overview

The application follows a **modular, feature-based architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface Layer                 │
│         (Components: Login, Register, Doctor, Student)  │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  Service Layer                          │
│              (AuthService, Shared Services)             │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              HTTP Interceptor Layer                     │
│    (Header, Error Handling, Loading Screen)             │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  Backend API                            │
│         (https://my-exam-system.runasp.net)             │
└─────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Interaction**: User interacts with components (Login, Register, etc.)
2. **Form Validation**: Reactive forms validate input using Angular validators
3. **Service Call**: Component calls appropriate service method (e.g., `AuthService.login()`)
4. **HTTP Request**: Service makes HTTP request via `HttpClient`
5. **Interceptor Chain**:
   - **Header Interceptor**: Adds authorization token to request headers
   - **Loading Screen Interceptor**: Shows/hides loading spinner
6. **Backend Communication**: Request sent to backend API
7. **Response Handling**:
   - **Error Interceptor**: Catches errors and displays toast notifications
   - **Loading Screen Interceptor**: Hides spinner on completion
8. **State Update**: Service updates application state (tokens, user role)
9. **UI Update**: Component receives response and updates view

### Authentication Flow

```
Registration → Email Confirmation → Login → Role Detection → Route to Dashboard
                                              ↓
                                    ┌─────────┴─────────┐
                                    │                   │
                              Doctor Role          Student Role
                                    │                   │
                            Doctor Dashboard    Student Dashboard
```

### Role-Based Routing

- **Public Routes**: `/register`, `/login`, `/forgetpass`
- **Doctor Routes**: Protected routes for exam management
- **Student Routes**: Protected routes for exam taking

---

## 🔌 API Integration

### Base URL
```
https://my-exam-system.runasp.net
```

### Authentication Endpoints

The application integrates with the following backend API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/Authentication/register` | User registration |
| POST | `/api/Authentication/login` | User login |
| POST | `/api/Authentication/forget-password` | Request password reset |
| POST | `/api/Authentication/reset-password` | Reset password with token |
| GET | `/api/Authentication/confirm-email` | Confirm email with token |
| POST | `/api/Authentication/change-password` | Change user password |
| GET | `/api/Authentication/resend-confirm-email` | Resend confirmation email |

### Request/Response Flow

- **Request Headers**: Automatically injected by `headerInterceptor`
- **Authorization**: Bearer token stored in `localStorage` as `AppToken`
- **Response Handling**: Centralized error handling via `errorsInterceptor`
- **Loading States**: Managed by `loadingScreenInterceptor`

---

## 🛡️ Error Handling & Interceptors

### 1. **Error Interceptor** (`errors.interceptor.ts`)
- Catches all HTTP errors globally
- Displays user-friendly error messages via `ngx-toastr`
- Extracts error descriptions from backend responses
- Prevents error propagation to individual components

### 2. **Header Interceptor** (`header.interceptor.ts`)
- Automatically injects authorization headers
- Adds Bearer token to all outgoing requests
- Ensures secure API communication

### 3. **Loading Screen Interceptor** (`loading-screen.interceptor.ts`)
- Shows loading spinner when HTTP requests start
- Hides spinner when requests complete
- Provides visual feedback for asynchronous operations
- Uses `ngx-spinner` for consistent loading states

### Interceptor Chain Execution Order
1. **Header Interceptor** → Adds authentication
2. **Loading Screen Interceptor** → Shows spinner
3. **Request Sent** → Backend processing
4. **Error Interceptor** → Handles errors
5. **Loading Screen Interceptor** → Hides spinner

---

## 🌍 Environment Setup

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher
- **Angular CLI**: v17.3.17

### Environment Configuration

Update the API base URL in `src/app/core/environment/environment.ts`:

```typescript
export const environment = {
  baseUrl: "https://my-exam-system.runasp.net"
};
```

---

## 📦 Installation & Running the Project

### 1. Clone the Repository
```bash
git clone <repository-url>
cd examTask
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`

### 4. Build for Production
```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### 5. Run Server-Side Rendering (SSR)
```bash
npm run serve:ssr:examTask
```

### 6. Run Tests
```bash
npm test
```

### 7. Watch Mode (Development)
```bash
npm run watch
```

---

## 🚀 Future Improvements

### Planned Features
- [ ] **Exam Management Dashboard**: Complete doctor interface for creating and managing exams
- [ ] **Question Bank**: Advanced question creation with multiple question types (MCQ, True/False, Essay)
- [ ] **Student Exam Interface**: Interactive exam-taking experience with timer
- [ ] **Real-time Results**: Instant score calculation and detailed analytics
- [ ] **Exam History**: Comprehensive exam history for students
- [ ] **Performance Analytics**: Detailed performance reports and statistics
- [ ] **Export Functionality**: Export results to PDF/Excel
- [ ] **Notification System**: Real-time notifications for exam availability
- [ ] **Profile Management**: User profile editing and avatar upload
- [ ] **Dark Mode**: Theme switching capability

### Technical Enhancements
- [ ] **Route Guards**: Implement authentication and role-based guards
- [ ] **Lazy Loading**: Optimize bundle size with lazy-loaded modules
- [ ] **Progressive Web App (PWA)**: Offline support and installability
- [ ] **Unit Testing**: Comprehensive test coverage
- [ ] **E2E Testing**: End-to-end testing with Cypress/Playwright
- [ ] **Accessibility**: WCAG 2.1 AA compliance
- [ ] **Internationalization (i18n)**: Multi-language support
- [ ] **State Management**: NgRx or Akita for complex state management

### Security Improvements
- [ ] **Token Refresh**: Automatic token refresh mechanism
- [ ] **Session Management**: Enhanced session handling
- [ ] **CSRF Protection**: Cross-site request forgery protection
- [ ] **Rate Limiting**: Client-side rate limiting
- [ ] **Input Sanitization**: Enhanced XSS protection

---

## 📸 Screenshots

> **Note**: Screenshots will be added here to showcase the application interface

### Authentication Flow
- [ ] Registration Page
- [ ] Email Confirmation Page
- [ ] Login Page
- [ ] Forget Password Page

### Doctor Dashboard
- [ ] Doctor Home Dashboard
- [ ] Exam Creation Interface
- [ ] Question Management
- [ ] Student Results View

### Student Dashboard
- [ ] Student Home Dashboard
- [ ] Available Exams List
- [ ] Exam Taking Interface
- [ ] Results Display

---

## 📄 License

This project is developed as part of an exam task demonstration.

---

## 👥 Contact & Support

For questions, issues, or contributions, please refer to the project repository.

---

**Built with ❤️ using Angular 17**