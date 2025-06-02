// components/Links.js
const links = {
    Admin: [
        { label: 'Dashboard', path: '/admin-dash', icon: 'speedometer2' } // Updated icon name
    ],
    Owner: [
        { label: 'Dashboard', path: '/owner-dash', icon: 'speedometer2' } // Updated icon name
    ],
    Customer: [
        { label: 'Dashboard ', path: '/dashboard', icon: 'speedometer2'},
        { label: 'Browse Market', path: '/browse-market', icon: 'shop'}, // Example icon change
        { label: 'Booking Info', path: '/booking-info', icon: 'journal-bookmark'}, // Example icon change
        { label: 'Manage Payment', path: '/manage-payment', icon: 'wallet'}, // Example icon change
        { label: 'System Setting', path: '/system-setting', icon: 'gear'}, // Example icon change
        { label: 'Logout', path: '/logout', icon: 'box-arrow-right'}, // Example icon change
    ]
}

export default links;