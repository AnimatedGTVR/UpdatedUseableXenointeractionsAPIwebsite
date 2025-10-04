import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "demo-key",
  authDomain: "xeno-interactions.firebaseapp.com",
  projectId: "xeno-interactions",
  storageBucket: "xeno-interactions.appspot.com",
  messagingSenderId: "123456789",
  appId: "demo-app-id",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  provider: "google" | "discord" | "email"
  createdAt: Date
  lastLogin: Date
  preferences: {
    theme: "light" | "dark" | "system"
    soundEnabled: boolean
    notifications: boolean
    language: string
  }
}

export const signInWithGoogle = async (): Promise<UserProfile | null> => {
  try {
    const provider = new GoogleAuthProvider()
    provider.addScope("email")
    provider.addScope("profile")

    const result = await signInWithPopup(auth, provider)
    const user = result.user

    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email || "",
      displayName: user.displayName || "",
      photoURL: user.photoURL || undefined,
      provider: "google",
      createdAt: new Date(),
      lastLogin: new Date(),
      preferences: {
        theme: "system",
        soundEnabled: true,
        notifications: true,
        language: "en",
      },
    }

    // Save to Firestore
    await setDoc(doc(db, "users", user.uid), userProfile, { merge: true })

    return userProfile
  } catch (error) {
    console.error("Google sign-in error:", error)
    throw error
  }
}

export const signInWithDiscord = async (): Promise<UserProfile | null> => {
  // Discord OAuth would be implemented here
  // For now, simulate the process
  throw new Error("Discord OAuth not yet implemented")
}

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error("Sign out error:", error)
    throw error
  }
}

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const docRef = doc(db, "users", uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data() as UserProfile
    }
    return null
  } catch (error) {
    console.error("Get user profile error:", error)
    return null
  }
}

export const updateUserProfile = async (uid: string, updates: Partial<UserProfile>): Promise<void> => {
  try {
    const docRef = doc(db, "users", uid)
    await setDoc(docRef, updates, { merge: true })
  } catch (error) {
    console.error("Update user profile error:", error)
    throw error
  }
}
