import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    browserSessionPersistence,
    createUserWithEmailAndPassword,
    EmailAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    reauthenticateWithCredential,
    sendPasswordResetEmail,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updatePassword
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const changePassword = async (oldPassword, newPassword) => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
        throw new Error("No user is currently logged in!");
    }

    const credential = EmailAuthProvider.credential(
        currentUser.email,
        oldPassword,
    );

    await reauthenticateWithCredential(currentUser, credential);
    await updatePassword(currentUser, newPassword);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = async (email, password, additionalData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check if this is the first user
            const usersCollection = collection(db, "users");
            const usersSnapshot = await getDocs(usersCollection);
            const isFirstUser = usersSnapshot.empty;

            // Set user data in Firestore
            const userRef = doc(db, "users", user.uid);
            await setDoc(userRef, {
                email: user.email,
                role: isFirstUser ? "admin" : "user",
                ...additionalData,
                createdAt: new Date().toISOString(),
                photoURL: additionalData.photoURL || "",
                uid: user.uid,
            });

            setCurrentUser({ ...user, role: isFirstUser ? "admin" : "user" });
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Error logging in:", error);
            throw error;
        }
    };

    const googleSignUp = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const userRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                const usersCollection = collection(db, "users");
                const usersSnapshot = await getDocs(usersCollection);
                const isFirstUser = usersSnapshot.empty;

                await setDoc(userRef, {
                    email: user.email,
                    role: isFirstUser ? "admin" : "user",
                    createdAt: new Date().toISOString(),
                    country: "",
                    fullName: user.displayName || "",
                    username: user.email,
                    photoURL: user.photoURL,
                    uid: user.uid,
                    phoneNumber: ""
                });

                setCurrentUser({ ...user, role: isFirstUser ? "admin" : "user" });
            } else {
                setCurrentUser({ ...user, ...userDoc.data() });
            }
        } catch (error) {
            console.error("Error with Google sign-up:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setCurrentUser(null);
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    };

    useEffect(() => {
        setPersistence(auth, browserSessionPersistence);

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userRef);
                setCurrentUser({ ...user, ...userDoc.data() });
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        register,
        login,
        googleSignUp,
        logout,
        changePassword,
        sendPasswordResetEmail,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
