const links = {
    
    Admin:[
        { label: 'Dashboard', path: '/admin-dashboard', icon: 'dashboard' }

    ],

    Owner:[
        { label:'Dashboard', path: '/staff-dashboard', icon: 'dashboard' },

    ],

    Customer:[
        {label:'Dashboard', path:'/dashboard', icon: 'dashboard'},

        // {label: 'Application Form', path:'/apply', icon:'th-list'},

        {label: 'My Applications ', path:'/application-list', icon:'inbox'},

        {label: 'Generate Bill', path:'/generate-bill',  icon:'download'},

        // {label: 'Payment Records', path:'/pay-records', icon:'gittip'},

        {label: 'Account Settings', path:'/account-setting', icon:'cogs'}

    ]

}

export default links;