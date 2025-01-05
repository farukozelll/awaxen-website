'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    Settings,
    FileText,
    BarChart3,
    Users,
    Menu,
    X,
    Bell,
    Search,
    Home,
    UserCircle,
    ChevronDown,
    Sun,
    Moon,
    LogOut
} from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/images/logo-beyaz.png';
import { cn } from '@/utils/utils';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analysis', href: '/dashboard/analysis', icon: BarChart3 },
    { name: 'Reports', href: '/dashboard/reporting', icon: FileText },
    { name: 'Management', href: '/dashboard/management', icon: Users },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Website', href: '/', icon: Home },
];
// Mock notifications for demo
const mockNotifications = [
    {
        id: 1,
        title: 'New Report Available',
        message: 'Monthly performance report is ready to view',
        time: '5 minutes ago',
        unread: true,
    },
    {
        id: 2,
        title: 'System Update',
        message: 'New features have been added',
        time: '1 hour ago',
        unread: true,
    },
    {
        id: 3,
        title: 'Welcome to Dashboard',
        message: 'Get started with your new dashboard',
        time: '2 hours ago',
        unread: false,
    },
];
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const pathname = usePathname();
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(mockNotifications);
    const [unreadCount, setUnreadCount] = useState(2);
    // Dark mode implementation
    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', String(newDarkMode));
        document.documentElement.classList.toggle('dark');
    }
    const handleSignOut = () => {
        try {
            // Clear all auth related data
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('user');
            sessionStorage.clear();

            // Optional: Make API call to logout endpoint
            // await fetch('/api/auth/logout');

            // Close any open menus
            setUserMenuOpen(false);

            // Redirect to login page
            router.push('/signin');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const markNotificationAsRead = (notificationId: number) => {
        setNotifications(notifications.map(notification =>
            notification.id === notificationId
                ? { ...notification, unread: false }
                : notification
        ));
        setUnreadCount(prev => Math.max(0, prev - 1));
    };

    return (
        <div className={cn(
            "min-h-screen transition-colors duration-200",
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        )}>            {/* Mobile sidebar overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm transition-opacity lg:hidden',
                    sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
                )}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 w-64 transform bg-gradient-to-b from-indigo-600 to-indigo-800 transition-transform lg:translate-x-0',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                {/* Logo Section */}
                <div className="flex h-16 items-center justify-between px-6">
                    <Link href="/dashboard" className="flex items-center">
                        <div className="relative h-48 w-48">
                            <Image
                                src={logo}
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="rounded-lg p-1.5 text-white/80 hover:bg-white/10 lg:hidden"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex flex-col gap-y-6 px-4 py-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-white/10 py-2 pl-10 pr-4 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                        isActive
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    )}
                                >
                                    <item.icon
                                        className={cn(
                                            'mr-3 h-5 w-5 flex-shrink-0 transition-colors',
                                            isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                                        )}
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:pl-64">
                {/* Top Navbar */}
                <header className={cn(
                    "sticky top-0 z-40 flex h-16 items-center shadow-sm",
                    darkMode ? 'bg-gray-800' : 'bg-white'
                )}>
                    <div className="flex w-full items-center px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className={cn(
                                "rounded-lg p-2 lg:hidden",
                                darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-400 hover:bg-gray-100'
                            )}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Right Side Items */}
                        <div className="ml-auto flex items-center gap-4">
                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className={cn(
                                    "rounded-full p-2",
                                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                )}
                            >
                                {darkMode ? (
                                    <Sun className="h-5 w-5 text-gray-300" />
                                ) : (
                                    <Moon className="h-5 w-5 text-gray-500" />
                                )}
                            </button>

                            {/* Notifications */}
                            <div className="relative">
                                <button
                                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                                    className={cn(
                                        "relative rounded-full p-2",
                                        darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                    )}
                                >
                                    <Bell className={cn(
                                        "h-5 w-5",
                                        darkMode ? 'text-gray-300' : 'text-gray-500'
                                    )} />
                                    {unreadCount > 0 && (
                                        <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                                    )}
                                </button>

                                {/* Notifications Dropdown */}
                                {notificationsOpen && (
                                    <div className={cn(
                                        "absolute right-0 mt-2 w-80 rounded-lg py-1 shadow-lg ring-1 ring-black/5",
                                        darkMode ? 'bg-gray-800' : 'bg-white'
                                    )}>
                                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                                            <h3 className={cn(
                                                "text-sm font-semibold",
                                                darkMode ? 'text-white' : 'text-gray-900'
                                            )}>
                                                Notifications
                                            </h3>
                                        </div>
                                        <div className="max-h-96 overflow-y-auto">
                                            {notifications.map((notification) => (
                                                <div
                                                    key={notification.id}
                                                    className={cn(
                                                        "px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50",
                                                        notification.unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                                    )}
                                                    onClick={() => markNotificationAsRead(notification.id)}
                                                >
                                                    <p className={cn(
                                                        "text-sm font-medium",
                                                        darkMode ? 'text-white' : 'text-gray-900'
                                                    )}>
                                                        {notification.title}
                                                    </p>
                                                    <p className={cn(
                                                        "text-sm",
                                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                                    )}>
                                                        {notification.message}
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        {notification.time}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>


                            {/* User Menu */}
                            <div className="relative">
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-2 rounded-full p-2 hover:bg-gray-100"
                                >
                                    <div className="h-8 w-8 overflow-hidden rounded-full bg-indigo-100">
                                        <UserCircle className="h-full w-full text-indigo-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Ali Bayar</span>
                                    <ChevronDown className="h-4 w-4 text-gray-500" />
                                </button>

                                {/* Dropdown Menu */}
                                {userMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black/5">
                                        <Link
                                            href="/dashboard/profile"
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                        >
                                            Profile Settings
                                        </Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            Sign out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="py-8">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}