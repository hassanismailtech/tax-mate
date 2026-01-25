import { createContext, useContext, useMemo, useState } from "react";
import { startSession as apiStartSession, updateSession as apiUpdateSession } from "../../shared/api/client";

const SessionContext = createContext(null);

export function SessionProvider({ children }) {
  const [userType, setUserType] = useState(null);
  const [responseStyle, setResponseStyle] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const startSession = async () => {
    const payload = {
      persona: userType?.employmentType || null,
      mode: responseStyle?.key || null,
    };
    const res = await apiStartSession(payload);
    const id = res?.sessionId || res?.id || null;
    setSessionId(id);
    return id;
  };

  const updateSession = async () => {
    if (!sessionId) return;
    const payload = {
      persona: userType?.employmentType || null,
      mode: responseStyle?.key || null,
    };
    await apiUpdateSession(sessionId, payload);
  };

  const value = useMemo(
    () => ({
      userType,
      setUserType,
      responseStyle,
      setResponseStyle,
      sessionId,
      setSessionId,
      startSession,
      updateSession,
    }),
    [userType, responseStyle, sessionId]
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSession() {
  return useContext(SessionContext);
}
