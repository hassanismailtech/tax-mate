## Backend Config
- Add env support for base URL via VITE_API_BASE_URL; default to https://taxsense-backend.onrender.com.
- Centralize access in a small config helper.

## API Client
- Create a thin client with functions for backend endpoints:
  - startSession(payload) → POST /session/start
  - updateSession(sessionId, payload) → POST /session/update
  - getTopics() → GET /topics
  - postChat(sessionId, payload) → POST /chat
- Use fetch with JSON, timeouts, and basic error handling.

## Session Flow
- Introduce SessionContext to persist persona, state, responseStyle, and sessionId.
- On "Start Chatting" from Setup, call startSession and store sessionId.
- When persona/responseStyle changes, call updateSession.
- Files:
  - New: src/app/context/SessionContext.jsx
  - Update: [UserSetup.jsx](file:///c:/Users/hassanismailtech/Dev/Tax%20Mate/tax-mate/src/pages/UserSetup/UserSetup.jsx), [AiChatPage.jsx](file:///c:/Users/hassanismailtech/Dev/Tax%20Mate/tax-mate/src/pages/AiChatPage/AiChatPage.jsx)

## Chat Integration
- Wire [ChatAi.jsx](file:///c:/Users/hassanismailtech/Dev/Tax%20Mate/tax-mate/src/shared/ui/ChatAi.jsx) send handler to postChat(sessionId, { message, persona, state, mode }).
- Show loading states, disable input while awaiting reply, append AI message on success.
- Handle errors with a visible toast/banner.

## Topics Integration
- Replace local topics array by getTopics() response.
- Render topics in [ChatAi.jsx](file:///c:/Users/hassanismailtech/Dev/Tax%20Mate/tax-mate/src/shared/ui/ChatAi.jsx); clicking a topic sends its prompt through postChat.

## Response Style Mapping
- Map UI choices in [ResponseStyleSelector.jsx](file:///c:/Users/hassanismailtech/Dev/Tax%20Mate/tax-mate/src/shared/ui/ResponseStyleSelector.jsx) to backend mode keys (e.g., "standard", "eli5", "pidgin", "hybrid").
- Persist selected style in SessionContext and include in session/update and chat payloads.

## Config & Client Files
- New: src/shared/config/env.js → exports API_BASE_URL from import.meta.env with default.
- New: src/shared/api/client.js → implements startSession, updateSession, getTopics, postChat.

## Assumptions
- Methods: POST for /session/start, /session/update, /chat; GET for /topics.
- Responses:
  - startSession → { sessionId }
  - updateSession → { ok: true }
  - getTopics → { topics: [{ title, prompt }] }
  - postChat → { reply }
- If backend differs, I’ll adapt payloads after first run.

## Error Handling
- Graceful fallback when API_BASE_URL missing or network fails.
- User-facing error messages and retry option on chat.

## Testing & Verification
- Add lightweight unit tests for client request builders.
- Manual verification via app preview:
  - Set .env: VITE_API_BASE_URL=https://taxsense-backend.onrender.com
  - Start app, run through Setup → Chat, confirm session creation, topics load, chat replies.

## File Changes Summary
- Create: env.js, client.js, SessionContext.jsx.
- Update: UserSetup.jsx, AiChatPage.jsx, ChatAi.jsx, ResponseStyleSelector.jsx.
- Documentation: Confirm README env section aligns with Vite usage.

## Next Step
- After approval, I will implement the client, context, wire components, and verify end-to-end with the live backend.