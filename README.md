# LegalLingo 🦅⚖️

**Learn the law. Live smarter.**

A gamified legal-literacy learning platform inspired by Duolingo's engagement loops. Master everyday legal knowledge through bite-sized, interactive lessons.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB Atlas account (free tier works)

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your backend URL
npm run dev
```

App runs on `http://localhost:5173`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your MongoDB credentials
uvicorn server:app --reload
```

API runs on `http://localhost:8000`

## 📚 Features

✅ **8 Units of Everyday Law**
- Contracts & Agreements
- Consumer Rights
- Renting & Housing
- Workplace Law
- Digital & Privacy
- Police & Legal Issues
- Money & Debt
- Civil Disputes

✅ **Interactive Exercise Engine**
- 13 exercise types (MCQ, True/False, Scenarios, Matching, Sorting, Fill-in, Ordering, etc.)
- Instant feedback with mascot reactions
- XP rewards & streak tracking

✅ **Gamification**
- Hearts energy system
- Daily quests & achievements
- Weekly leaderboard with 4 leagues
- Gems shop & cosmetics
- Streak freeze protection

✅ **Social**
- Friends system
- Leaderboards (Global + Friends)
- Shared challenges

✅ **Mobile Responsive**
- Bottom navigation on mobile
- Touch-friendly 3D buttons
- Optimized for all screen sizes

## 🎨 Design System

**Colors:**
- Primary: Burgundy (#6B1D2F)
- Secondary: Emerald (#0F766E)
- Accents: Fire orange, Gem blue, XP gold

**Typography:**
- Headings: Fredoka (bold, sharp)
- Body: Plus Jakarta Sans (friendly, readable)

**Components:**
- Tactile 3D buttons with bottom borders
- Rounded cards & nodes
- Organic curved paths
- Smooth animations

## 📱 Responsive Design

- Desktop: Sidebar nav (64 lessons visible at once)
- Tablet: Optimized 2-column layouts
- Mobile: Bottom navigation + full-width screens

## 🗄️ Architecture

**Frontend (React + Tailwind)**
- Vite dev server
- React Router for navigation
- Axios for API calls
- Zustand (optional state)

**Backend (FastAPI + MongoDB)**
- Async motor driver
- JWT-like token sessions
- Idempotent lesson completion
- Streak & gamification logic

## 🔐 Authentication

- Email/password signup & login
- Token-based sessions (stored in localStorage)
- Protected routes
- Auto-logout on invalid token

## 📊 Data Model

**Users**
- Profile (name, avatar, email)
- Stats (XP, level, streak, gems, energy)
- Progress (completed lessons, mastered, achievements)
- Social (friends, leaderboard rank)

**Courses**
- 8 Units × 6-8 lessons each
- 48+ lessons × 3-5 questions each
- 200+ total questions

**Gamification**
- XP transactions (idempotent)
- Daily quests (3 active)
- Achievements (8 types)
- Leaderboard (weekly reset)

## 🚢 Deployment

### Frontend (Vercel/Netlify)

```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Railway/Render/Fly.io)

```bash
cd backend
# Set env vars in platform
uvicorn server:app --host 0.0.0.0 --port 8000
```

### Database (MongoDB Atlas)

1. Create free cluster
2. Get connection string
3. Set `MONGO_URL` in backend .env
4. Seed data runs on startup

## 🧪 Testing

```bash
# Demo credentials
Email: aarav@demo.com
Password: demo1234
```

## 📝 Content

All course content is **India-focused, general educational information**:
- No specific legal advice
- Disclaimer on every relevant lesson
- References to Indian laws (IPC, CrPC, CPA, DPDP, etc.)
- Real-world everyday scenarios

## 🤝 Contributing

Contributions welcome! Areas:
- More lesson content
- Additional exercise types
- Localization (Hindi, Tamil, Telugu)
- Mobile app (React Native)
- AI tutor integration

## 📄 License

MIT License - See LICENSE file

## 🙋 Support

Issues? Questions?
- Check `/admin` panel for course analytics
- Review seed data in `backend/server.py`
- Test with demo account first

---

**Built with ❤️ for legal literacy**
