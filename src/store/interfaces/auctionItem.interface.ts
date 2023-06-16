export enum Role {
    User = 'user',
    Admin = 'admin',
    Client = 'client',
}

export interface UserProps {
    firstname: string;
    lastname: string;
    password?: string;
    email: string;
    isVerified: boolean;
    roles: Role[];
    company?: CompanyProps;
    notifications?: NotificationsProps;
}

export interface CompanyProps {
    companyName: string;
    country: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
}

export interface NotificationsProps {
    payout?: boolean;
    participants?: boolean;
    completed?: boolean;
    recentHackathon?: boolean;
    hackathonSetup?: boolean;
    rewards?: boolean;
}

export interface ErrorProps {
    msg: string;
    statusCode: number;
    Id: string;
}

export interface UserStateProps {
    account: string | null;
    defaultCurrency: string;
    user?: UserProps | null;
    companyInfo?: CompanyProps | null;
    isRegistering?: boolean;
    isLoggin?: boolean;
    isLoading?: boolean;
    errMsg?: ErrorProps | null | any;
    isRegistered?: boolean;
    loggin?: boolean;
    updatingProfile?: boolean;
    updatedProfile?: boolean;
    isAuthenticated?: boolean;
    updatingCompany?: boolean;
    updatedCompany?: boolean;
    updatingNotifications?: boolean;
    updatedNotifications?: boolean;
    token?: string | null;
    passwordRequestedProps?: {
        msg: string;
        passwordRequested: boolean;
        email: string;
    } | null;
    changedPasswordProps?: {
        msg: string;
        changed: boolean;
    } | null;
    clientProfileProps?: {
        msg: string;
        changed: boolean;
    } | null;
    clientNotificationsProps?: {
        msg: string;
        changed: boolean;
    } | null;
    city?: string;
    notificationsInfo?: NotificationsProps | null;
}


export interface AuctionItemProps {
    id?: string;
    title?: string;
    author?: string;
    photo: string;
    description?: string;
    minimum_bid?: number;
    current_bid?: number;
    bid_increment?: number;
    
    // bidder?: Types.ObjectId;
    is_closed?: boolean;
    // user?: Types.ObjectId;
    toObject?: () => any;


}

