import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { Collection, MongoClient } from "mongodb";
import { cookies } from "next/headers";

// mongodbAdpter의 인자로는
// 세션 컬렉션과 유저 컬렉션이 들어간다.
export const mongo = MongoClient.connect(
  "mongodb+srv://xitseo:ajvls450@universe.bpzvwux.mongodb.net/?retryWrites=true&w=majority&appName=universe"
);
// 데이터 베이스 생성
const client = await mongo;
const db = client.db("universe");
// 컬렉션(테이블) 생성
const User = db.collection("users"); // {_id :, email, password}
const Session = db.collection("sessions"); // {_id, expires_at, user_id}

const adapter = new MongodbAdapter(Session, User);

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      sameSite: 'none',
      secure:true,
    },
  },
});

// 로그인 성공시 세션을 생성한다.
export async function createAuthSession(userId) {
  const session = await lucia.createSession(userId, {});

  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

export async function verifyAuth() {
  const sessionCookie = cookies().get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }

  // 세션 가져옴
  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch {}

  return result;
}

export async function destroySession() {
  const { session } = await verifyAuth();
  if (!session) {
    return {
      error: "Unauthorized!",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}
