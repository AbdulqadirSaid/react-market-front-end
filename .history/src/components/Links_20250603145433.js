const links = {
    
    Admin:[
        { label: 'Dashboard', path: '/admin-dash', icon: 'dashboard' },
        { label: 'Manage Customers', path: '/manage-customer', icon: 'dashboard' },
        { label: 'Manage Market Owner', path: '/market-owner', icon: 'dashboard' },
        { label: 'Generate Report', path: '/generate-report', icon: 'dashboard' },
        { label: 'Account Setting', path: '/account-setting', icon: 'dashboard' },
        {label:'Logout', path:'/logout', icon: 'dashboard'},
        
        

    ],

    Owner:[
        { label:'Dashboard', path: '/owner-dash', icon: 'dashboard' },
        { label:'Manage Market Info', path: '/market-info', icon: 'dashboard' },
        { label:'Manage Bookings', path: '/manage-bookings', icon: 'dashboard' },
         label:'Manage Reports', path: '/manage-reports', icon: 'dashboard' },
         { label: 'Account Setting', path: '/account-setting', icon: 'dashboard' },

    ],

    Customer:[
        {label:'Dashboard ', path:'/dashboard', icon: 'dashboard'},
        {label:'Browse Market', path:'/browse-market', icon: 'dashboard'},
        {label:'Booking Info', path:'/booking-info', icon: 'dashboard'},
        {label:'Manage Payment', path:'/manage-payment', icon: 'dashboard'},
        {label:'System Setting', path:'/system-setting', icon: 'dashboard'},
        {label:'Logout', path:'/logout', icon: 'dashboard'},

    ]

}

export default links;