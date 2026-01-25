# TaxSense

**TaxSense** is a chatbot-first web application that helps Nigerians understand how the **2026 Nigerian Tax Reforms** (NTA, NTAA, NRSA, JRBA) apply to them — in **plain English, ELI5, or Nigerian Pidgin**.

Built for clarity, speed, and accessibility in low-bandwidth environments.

---

## What TaxSense Does

- Explains 2026 tax rules in language you actually speak
- Adapts to your role (employee, freelancer, business owner, first-timer)
- Answers questions in Standard English, ELI5, or Nigerian Pidgin
- Works on mobile under 3G networks

## What TaxSense Does NOT Do

- ❌ Calculate taxes  
- ❌ File returns  
- ❌ Process documents  
- ❌ Provide legal/financial advice  

**TaxSense is educational only.** It explains tax rules — it does not compute, file, or enforce them.

---

## The Problem We're Solving

The 2026 Nigerian tax reforms consolidated multiple laws into a single regime. While this simplifies the legal framework, it creates massive information gaps:

- **Complexity**: Official tax documents use dense legal language
- **Fear**: Citizens fear FIRS penalties from honest misunderstandings (e.g., the ₦100m turnover rule)
- **Access**: Generic AI tools hallucinate outdated rules; official portals assume prior knowledge

**TaxSense bridges the gap between law and citizen.**

---

## Tech Stack

### Frontend
- **React** with **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Feature-Sliced Design** (architecture)

### Backend
- **Python** + **FastAPI**
- **OpenAI GPT-4.1 / GPT-4o-mini** (AI engine)
- **Text-based law storage** (persona-specific summaries)

**Deployment**
- Frontend: **Vercel**
- Backend: **Render / Railway**

---

## How It Works

### User Flow
1. User selects **persona** (employee, freelancer, business owner, first-timer)
2. User selects **state** (e.g., Lagos)
3. User chooses **response mode** (Standard, ELI5, Pidgin, Hybrid)
4. User enters chat interface
5. User asks questions; AI responds using grounded 2026 tax rules
6. User can switch modes anytime

### Backend Flow
1. Receive chat request with persona, state, mode, and message
2. Load persona-specific law file (`backend/personas/nigeria/{persona}.txt`)
3. Construct AI prompt with law text, mode rules, and user question
4. Send to OpenAI GPT model
5. Validate response (no calculations, no filing instructions)
6. Return JSON response to frontend

---

## API Integration

**Base URL**  
```
https://taxsense-backend.onrender.com
```

**Core Endpoint**

`POST /chat`

**Request**
```json
{
  "persona": "freelancer",
  "state": "Lagos",
  "mode": "pidgin",
  "message": "Which taxes concern me?"
}
```

**Response**
```json
{
  "reply": "As freelancer for Lagos, na these taxes concern you for 2026..."
}
```

---

## Local Development

### Frontend

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Runs at: `http://localhost:5173`

### Backend

```bash
# Install dependencies
pip install -r requirements.txt

# Start server
uvicorn main:app --reload
```

Runs at: `http://localhost:8000`

---

## Environment Variables

### Frontend `.env`
```env
VITE_API_BASE_URL=https://taxsense-backend.onrender.com
```

### Backend `.env`
```env
OPENAI_API_KEY=your_openai_api_key
```

---

## Project Structure

### Frontend (Feature-Sliced Design)
```
src/
├── app/              # App initialization
├── pages/            # Route-level pages
│   ├── landing/
│   └── chat/
├── widgets/          # Large UI blocks
│   ├── PersonaSelector/
│   ├── ModeToggle/
│   └── ChatWindow/
├── features/         # User actions
│   ├── sendMessage/
│   └── selectPersona/
├── entities/         # Core data models
└── shared/           # UI kit, utils, config
```

### Backend
```
backend/
├── personas/
│   └── nigeria/
│       ├── employee.txt
│       ├── freelancer.txt
│       ├── business_owner.txt
│       └── first_timer.txt
├── main.py           # FastAPI app
└── requirements.txt
```

---

## Target Personas

| Persona | Goal | Key Law |
|---------|------|---------|
| **Salaried Employee** | Calculate new PAYE and take-home pay | ₦800k PIT threshold, 15%-25% bands |
| **Freelancer** | Decide individual vs. small company filing | Small company exemption (≤₦100m turnover) |
| **Business Owner** | Understand 4% Development Levy | Consolidation of IT Levy, TET, NASENI |
| **First-Timer** | Learn TIN registration and compliance | Simplified registration under NTAA |

---

## Safety Controls

| Risk | How We Handle It |
|------|------------------|
| **Hallucination** | AI only sees persona-specific law files; cannot guess outside provided text |
| **Prompt Injection** | Backend strips override phrases automatically |
| **Scope Creep** | Rejects calculation/filing requests; returns educational-only messages |
| **Wrong Language** | Enforces mode rules in system prompt |

---

## Success Metrics (MVP)

- **Adoption**: 1,000 unique users by March 2026
- **Accuracy**: 0 reported errors in tax rules
- **Engagement**: 40%+ users selecting Pidgin or ELI5 over Standard English

---

## Timeline

**4-week sprint (January 2025)**

- Week 1-2: UI, logic, and data
- Week 3: Document processing (post-MVP)
- Week 4: Stress testing

---

## Compliance & Legal

- **NDPR Compliant**: Adheres to Nigeria Data Protection Regulation
- **Educational Only**: Not an official government app
- **No Liability**: Tool does not file taxes or provide legal/financial advice

**Footer Disclaimer**:  
*"This is not an official government app. We are not the NRS. This is for educational guidance only."*

---

## Guiding Principle

> If it doesn't improve understanding or speed, it doesn't ship in January.

---

## Team

**Team 9** — Building for Nigerians, by Nigerians.

---

## License

[Add your license here]

---

## Contact

For questions or feedback, reach out via [your contact method].

---

**TaxSense** — Your pocket tax helper for Nigeria's 2026 reforms.
