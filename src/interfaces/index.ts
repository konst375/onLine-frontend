import React from "react";

export interface AbstractEntity {
    id: string;
}

export interface BaseImage extends AbstractEntity{
    img: URL;
    createdDate: Date;
    modifiedDate: Date;
}

export interface User extends AbstractEntity {
    name: string;
    surname: string;
    avatar: BaseImage | null;
}

export interface UserContext {
    user: User;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
}