console.log('hi')
const { translate } = require('@vitalets/google-translate-api');
const { setTimeout } =  require('node:timers/promises')

async function f ()  {
    const file = {
        'Answer time': 'Answer time',
        'Answered callback call sms to lead.': 'Answered callback call sms to lead.',
        'An evenly selected one, then the others': 'An evenly selected one, then the others',
        'Answered calls': 'Answered calls',
        'Answered rate': 'Answered rate',
        'Answered callback call sms to agent.': 'Answered callback call sms to agent.',
        'App notification on inbound call (iPhone)': 'App notification on inbound call (iPhone)',
        'App notification on inbound call (Android)': 'App notification on inbound call (Android)',
        'Are you sure?': 'Are you sure?',
        'Are you sure to change lead form items to default of':
            'Are you sure to change lead form items to default of',
        'Are you sure you want to delete the build item?':
            'Are you sure you want to delete the build item?',
        'Are you sure to change texts to default of': 'Are you sure to change texts to default of',
        'Are you sure you want to delete tree?': 'Are you sure you want to delete tree?',
        'Are you sure you want to delete': 'Are you sure you want to delete',
        'Are you sure you want to delete team?': 'Are you sure you want to delete team?',
        API: 'API',
        'Api Key': 'Api Key',
        'Apply for all': 'Apply for all',
        'API connectors': 'API connectors',
        Approve: 'Approve',
        Approved: 'Approved',
        'available credits': 'available credits',
        'Available Agents': 'Available Agents',
        'Available Groups': 'Available Groups',
        'A voice message when the agent takes the call. Leave blank if no message for the agent. Please use %<PARAM_NAME>% to insert param, %COUNTRY_ENG% to insert English name of phone country (may work incorrectly for languages other than English).':
            'A voice message when the agent takes the call. Leave blank if no message for the agent. Please use %<PARAM_NAME>% to insert param, %COUNTRY_ENG% to insert English name of phone country (may work incorrectly for languages other than English).',
        'A voice message to the client.': 'A voice message to the client.',
        'A voice message for the client when the client answers. Leave blank if no message for the client.':
            'A voice message for the client when the client answers. Leave blank if no message for the client.',
        'Build server items': 'Build server items',
        'Billing payments': 'Billing payments',
        'Blocklist IPs and countries': 'Blocklist IPs and countries',
        'Browser timezone is': 'Browser timezone is',
        Branch: 'Branch',
        'Buy numbers': 'Buy numbers',
        "By default saying 'connect', convenient in 'hands free' situations, or if problems with DTMF.":
            "By default saying 'connect', convenient in 'hands free' situations, or if problems with DTMF.",
        'Call Flow': 'Call Flow',
        'Call flow': 'Call flow',
        'Call group': 'Call group',
        'Call recording in stereo mode': 'Call recording in stereo mode',
        'Call all at the same time': 'Call all at the same time',
        'Call in order': 'Call in order',
        'Call and SMS rates': 'Call and SMS rates',
        Calls: 'Calls',
        'Calls desktop': 'Calls desktop',
        'Calls fulfilled55sec answer time': 'Calls fulfilled55sec answer time',
        'Calls fulfilled55sec answer time rate': 'Calls fulfilled55sec answer time rate',
        'Calls mobile': 'Calls mobile',
        'Calls tab': 'Calls tab',
        'calls per day': 'calls per day',
        'Calls rate': 'Calls rate',
        'Calls with phone button click': 'Calls with phone button click',
        'Call result': 'Call result',
        'Call Result Registration': 'Call Result Registration',
        'Calls with tooltip click': 'Calls with tooltip click',
        'Call info': 'Call info',
        'Call Log': 'Call Log',
        Cancel: 'Cancel',
        'Call start': 'Call start',
        Call: 'Call',
        'Call in random order': 'Call in random order',
        'Call routing demo': 'Call routing demo',
        'Call Detail': 'Call Detail',
        'Call Routing Detail': 'Call Routing Detail',
        'Calls with auto popup': 'Calls with auto popup',
        'Call numbers': 'Call numbers',
        Callgroup: 'Callgroup',
        'Calls with exit popup': 'Calls with exit popup',
        'Calls with form submission': 'Calls with form submission',
        'Calls (Dialer)': 'Calls (Dialer)',
        'Calls (Leads)': 'Calls (Leads)',
        'calls to one random agent with even distribution that all agents generally get an equal amount of calls':
            'calls to one random agent with even distribution that all agents generally get an equal amount of calls',
        "calls to the first agent in the list, if he doesn't answer calls the rest simultaneously":
            "calls to the first agent in the list, if he doesn't answer calls the rest simultaneously",
        "calls to the first agent got randomly with even distribution, if he doesn't answer calls the rest simultaneously":
            "calls to the first agent got randomly with even distribution, if he doesn't answer calls the rest simultaneously",
        "Calls for these phone number patterns won't work":
            "Calls for these phone number patterns won't work",
        'Calls forwarded to agent mobile phones will use this number as caller id.':
            'Calls forwarded to agent mobile phones will use this number as caller id.',
        'Call group - simple setup, Flow designer - advanced setup, Convolo leads - this number used in Convolo leads, when the lead calls back it connects to the agent from Convolo leads.':
            'Call group - simple setup, Flow designer - advanced setup, Convolo leads - this number used in Convolo leads, when the lead calls back it connects to the agent from Convolo leads.',
        'Calling is technically limited by 10 minutes and 50 attempts (attempt = one call to the agent)':
            'Calling is technically limited by 10 minutes and 50 attempts (attempt = one call to the agent)',
        'Call Tree Type': 'Call Tree Type',
        'Call recordings': 'Call recordings',
        'Call events will be sent to this URL. Set blank if not active.':
            'Call events will be sent to this URL. Set blank if not active.',
        'Call can be answered by speaking word.': 'Call can be answered by speaking word.',
        "Call won't be automatically booked earlier than this hour in the timezone of client's' number, 0 - disabled":
            "Call won't be automatically booked earlier than this hour in the timezone of client's' number, 0 - disabled",
        Campaign: 'Campaign',
        'Campaign name': 'Campaign name',
        'Changes the first group every time': 'Changes the first group every time',
        "Change the time 'We call you within ... seconds'":
            "Change the time 'We call you within ... seconds'",
        'Changes the first agent after every call, then calls one by one':
            'Changes the first agent after every call, then calls one by one',
        'Changes the first agent after every call, then calls to all':
            'Changes the first agent after every call, then calls to all',
        ChargeBee: 'ChargeBee',
        'Check number': 'Check number',
        Client: 'Client',
        'Check datetime': 'Check datetime',
        'Code snippets': 'Code snippets',
        Commands: 'Commands',
        Comment: 'Comment',
        'Change project': 'Change project',
        Choose: 'Choose',
        'Choose a category': 'Choose a category',
        'Choose agent': 'Choose agent',
        'Choose call status': 'Choose call status',
        'Choose country': 'Choose country',
        'Choose phone category': 'Choose phone category',
        'Choose status': 'Choose status',
        'Choose State': 'Choose State',
        'Choose City': 'Choose City',
        'Choose users status': 'Choose users status',
        'Client number and source': 'Client number and source',
        'Columns from file': 'Columns from file',
        'Comma or space separated words, should be the same language, that is set above.':
            'Comma or space separated words, should be the same language, that is set above.',
        'Congratulations! Your contacts have been successfully added!':
            'Congratulations! Your contacts have been successfully added!',
        Connect: 'Connect',
        'Connect Convolo Leads to all your lead sources to make sure every Lead gets a call within 55 seconds. The whisper feature makes sure they know exactly what your customer wants.':
            'Connect Convolo Leads to all your lead sources to make sure every Lead gets a call within 55 seconds. The whisper feature makes sure they know exactly what your customer wants.',
        'Connect already answered in any widget agent first.':
            'Connect already answered in any widget agent first.',
        'Connect already answered agent first.': 'Connect already answered agent first.',
        'Contacts have been successfully added to the table. Go to the contact page to view.':
            'Contacts have been successfully added to the table. Go to the contact page to view.',
        'Convolo Dialer': 'Convolo Dialer',
        'Convolo Leads': 'Convolo Leads',
        'Connect standard forms': 'Connect standard forms',
        'Connects standard forms with input type “tel”, for more complicated forms use code snippets':
            'Connects standard forms with input type “tel”, for more complicated forms use code snippets',
        Confirm: 'Confirm',
        'Copy leads agents': 'Copy leads agents',
        'Create Inbound Call Flow': 'Create Inbound Call Flow',
        'Create Outgoing Call Flow': 'Create Outgoing Call Flow',
        'Custom interval': 'Custom interval',
        'Current Call Queue': 'Current Call Queue',
        Data: 'Data',
        Dashboard: 'Dashboard',
        'Dashboard-V2': 'Dashboard-V2',
        Default: 'Default',
        'Default timezone': 'Default timezone',
        'Default holidays': 'Default holidays',
        'Default country (for local format numbers in facebook, etc)':
            'Default country (for local format numbers in facebook, etc)',
        Delete: 'Delete',
        'Delete team': 'Delete team',
        DELETE: 'DELETE',
        Description: 'Description',
        Destination: 'Destination',
        'Deleting API connector': 'Deleting API connector',
        Details: 'Details',
        'Dialer support settings': 'Dialer support settings',
        'Dialer is not initialized.': 'Dialer is not initialized.',
        'dials your agents randomly, one at a time.': 'dials your agents randomly, one at a time.',
        'Dialer is initialized.': 'Dialer is initialized.',
        Documentation: 'Documentation',
        'Documentation is upcoming, after stabilization old API will be deprecated':
            'Documentation is upcoming, after stabilization old API will be deprecated',
        'Don’t have an account?': 'Don’t have an account?',
        'Do you want to delete the number': 'Do you want to delete the number',
        'Do you want to delete': 'Do you want to delete',
        'Do not record calls that involve the following numbers':
            'Do not record calls that involve the following numbers',
        Download: 'Download',
        'Download xls': 'Download xls',
        'Dialer key': 'Dialer key',
        "Earliest hour in client's timezone": "Earliest hour in client's timezone",
        Edit: 'Edit',
        'Edit Site Check': 'Edit Site Check',
        'Edit outcome and tags': 'Edit outcome and tags',
        'Edit Server Check': 'Edit Server Check',
        'Edit Task Check': 'Edit Task Check',
        'Edit build server item': 'Edit build server item',
        'Edit Outbound Call Flow': 'Edit Outbound Call Flow',
        'Edit Inbound Call Flow': 'Edit Inbound Call Flow',
        'Edit team': 'Edit team',
        Elapsed: 'Elapsed',
        'EDIT CODE': 'EDIT CODE',
        'Enable the widget in non-working time': 'Enable the widget in non-working time',
        Error: 'Error',
        Enter: 'Enter',
        Expenses: 'Expenses',
        'External call recordings': 'External call recordings',
        Extension: 'Extension',
        'Error log path': 'Error log path',
        'Error site only': 'Error site only',
        EXIT: 'EXIT',
        'Even distribution': 'Even distribution',
        'Even if it was already opened within the same lead session. May be annoying for the lead, use with caution.':
            'Even if it was already opened within the same lead session. May be annoying for the lead, use with caution.',
        'Facebook Leads': 'Facebook Leads',
        'Feedback invitation after the call.': 'Feedback invitation after the call.',
        'First row should contain unique column names!!':
            'First row should contain unique column names!!',
        "For modern sites without full page reload (React, etc). Use only if the widget doesn't work properly on such sites.":
            "For modern sites without full page reload (React, etc). Use only if the widget doesn't work properly on such sites.",
        'For example German - 01512 3456789': 'For example German - 01512 3456789',
        'for testing only': 'for testing only',
        'Forgot your password?': 'Forgot your password?',
        'for successful, future, on-demand calls': 'for successful, future, on-demand calls',
        'Forward client`s phone number': 'Forward client`s phone number',
        'Forward client`s phone number (caller id) to agent mobile phones. (not guaranteed for all numbers)':
            'Forward client`s phone number (caller id) to agent mobile phones. (not guaranteed for all numbers)',
        'For example if the call was made for the wrong project':
            'For example if the call was made for the wrong project',
        'Full name': 'Full name',
        Funnel: 'Funnel',
        'Future call time interval': 'Future call time interval',
        Generate: 'Generate',
        'Generate random API KEY': 'Generate random API KEY',
        'Generate API KEY': 'Generate API KEY',
        'Get default tags': 'Get default tags',
        'Get a prepared call group': 'Get a prepared call group',
        'Global IP ban': 'Global IP ban',
        'Go to Settings': 'Go to Settings',
        'Go leads page': 'Go leads page',
        'Give the visitor a choice of convenient call time':
            'Give the visitor a choice of convenient call time',
        'Group name': 'Group name',
        Groups: 'Groups',
        'Health checks': 'Health checks',
        Help: 'Help',
        'HTTP request': 'HTTP request',
        'Holidays and IP Settings': 'Holidays and IP Settings',
        'How the numbers should be dialed': 'How the numbers should be dialed',
        'How to set up Notifications?': 'How to set up Notifications?',
        'If you have problems accessing your current mail, write to the support service':
            'If you have problems accessing your current mail, write to the support service',
        'If you need tags from another project, please change it first.':
            'If you need tags from another project, please change it first.',
        'If the agent called this lead in any widget before within 7 days, he will get a call to this lead first':
            'If the agent called this lead in any widget before within 7 days, he will get a call to this lead first',
        'If the agent called this lead in this widget before within 7 days, he will get a call to this lead first':
            'If the agent called this lead in this widget before within 7 days, he will get a call to this lead first',
        'If used as department, use own non working time instead of main widget':
            'If used as department, use own non working time instead of main widget',
        'If enabled, visitors will be able to select a convenient date and time when they want to get a call.':
            'If enabled, visitors will be able to select a convenient date and time when they want to get a call.',
        "If turned on, then all calls will be recorded and saved as audio files. You can then listen to the recordings in the section 'Calls'.":
            "If turned on, then all calls will be recorded and saved as audio files. You can then listen to the recordings in the section 'Calls'.",
        'If on the design from the settings is ignored and the design from the widget json code is used, otherwise if off, the design from the settings is used and the design from the widget json code is ignored':
            'If on the design from the settings is ignored and the design from the widget json code is used, otherwise if off, the design from the settings is used and the design from the widget json code is ignored',
        'Import contacts': 'Import contacts',
        'Impressions total filter': 'Impressions total filter',
        'Impressions total': 'Impressions total',
        'Impressions desktop': 'Impressions desktop',
        'Impressions mobile': 'Impressions mobile',
        'Impressions tab': 'Impressions tab',
        'Impressions with auto popup': 'Impressions with auto popup',
        'Impressions with exit popup': 'Impressions with exit popup',
        'Impressions with tooltip click': 'Impressions with tooltip click',
        'Impressions with phone button click': 'Impressions with phone button click',
        'Inbound Call Flows': 'Inbound Call Flows',
        Incoming: 'Incoming',
        'Incoming calls': 'Incoming calls',
        'iphone allows only one short line, so need most important info':
            'iphone allows only one short line, so need most important info',
        "Instead of starting the call immediately after order, the agent will receive email and/or sms with a link, to start a call when it's convenient.":
            "Instead of starting the call immediately after order, the agent will receive email and/or sms with a link, to start a call when it's convenient.",
        'In Progress': 'In Progress',
        'Is Active': 'Is Active',
        'in this flow': 'in this flow',
        Id: 'Id',
        'INITIALIZE DIALER': 'INITIALIZE DIALER',
        Integrations: 'Integrations',
        'Integrations(dialer)': 'Integrations(dialer)',
        'Integrations(leads)': 'Integrations(leads)',
        'Integrations list': 'Integrations list',
        'Instead of call, agents will get notifications in the app, and call with their mobile phones. Only ordered lead processing is supported, all agents should have an app. Warning! The function is experimental!':
            'Instead of call, agents will get notifications in the app, and call with their mobile phones. Only ordered lead processing is supported, all agents should have an app. Warning! The function is experimental!',
        'IP and Numbers': 'IP and Numbers',
        'Internal call recordings': 'Internal call recordings',
        'Is press 1 needed': 'Is press 1 needed',
        'Is post format (get otherwise)': 'Is post format (get otherwise)',
        "It's easy to add the Convolo script to your website. Instantly, the Phone Button and Popup engages your website visitors and converts them into sales calls.":
            "It's easy to add the Convolo script to your website. Instantly, the Phone Button and Popup engages your website visitors and converts them into sales calls.",
        "It this word recognized, the call will be connected. Comma or space separated list of words, should be the same language, that is set above. If not set default word 'Connect' will be used":
            "It this word recognized, the call will be connected. Comma or space separated list of words, should be the same language, that is set above. If not set default word 'Connect' will be used",
        "I want to import incorrect phone numbers (call probably won't go)":
            "I want to import incorrect phone numbers (call probably won't go)",
        Language: 'Language',
        'Last Check': 'Last Check',
        'Language of recognition voice answer, should be the same as recognizable words.':
            'Language of recognition voice answer, should be the same as recognizable words.',
        language: 'language',
        Leads: 'Leads',
        'Leave empty to not send this type of message.':
            'Leave empty to not send this type of message.',
        'Lead custom provider rules': 'Lead custom provider rules',
        'Leads limit for agent per day': 'Leads limit for agent per day',
        'Less than this number of seconds will be considered as unsuccessful (0 to turn off)':
            'Less than this number of seconds will be considered as unsuccessful (0 to turn off)',
        'Limit calls per hour for one client(IP):': 'Limit calls per hour for one client(IP):',
        'Local Number': 'Local Number',
        Loading: 'Loading',
        LOG: 'LOG',
        LOADING: 'LOADING',
        'Log path': 'Log path',
        'Log in to': 'Log in to',
        logToConvolo: 'logToConvolo',
        'Log user actions': 'Log user actions',
        Main: 'Main',
        'Map field': 'Map field',
        'MAP SELECTED COLUMNS': 'MAP SELECTED COLUMNS',
        manager: 'manager',
        'Message to the client if the call was successful.':
            'Message to the client if the call was successful.',
        'Message to the agent if the call was successful.':
            'Message to the agent if the call was successful.',
        'Message to the agent 5 minutes before the future call':
            'Message to the agent 5 minutes before the future call',
        'Message to the client 5 minutes before the future call':
            'Message to the client 5 minutes before the future call',
        'Message to the client when a future call is ordered':
            'Message to the client when a future call is ordered',
        'Message to the agent for on demand calls.': 'Message to the agent for on demand calls.',
        'Message to the agent for booked on demand calls':
            'Message to the agent for booked on demand calls',
        'Message to the client when an on demand call is ordered.':
            'Message to the client when an on demand call is ordered.',
        'Message to the client when a future on demand call is ordered.':
            'Message to the client when a future on demand call is ordered.',
        'Missed calls': 'Missed calls',
        'Missed call notifications': 'Missed call notifications',
        'Missed callback call sms to agent.': 'Missed callback call sms to agent.',
        'My Dialer': 'My Dialer',
        'My numbers': 'My numbers',
        Menu: 'Menu',
        Messages: 'Messages',
        'min pause': 'min pause',
        Missed: 'Missed',
        'Minutes leads': 'Minutes leads',
        'Minutes dialer': 'Minutes dialer',
        'Modern GA and GTM events': 'Modern GA and GTM events',
        More: 'More',
        Name: 'Name',
        Negative: 'Negative',
        Neutral: 'Neutral',
        'New missed call notifications': 'New missed call notifications',
        'New Site Check': 'New Site Check',
        'New Server Check': 'New Server Check',
        'New Task Check': 'New Task Check',
        'NEXT CALL': 'NEXT CALL',
        No: 'No',
        'No read': 'No read',
        'Next Check': 'Next Check',
        'Noanswer calls': 'Noanswer calls',
        'No read notifications': 'No read notifications',
        'No unread notifications': 'No unread notifications',
        'No answer': 'No answer',
        Notifications: 'Notifications',
        Numbers: 'Numbers',
        'Numbers shop preview': 'Numbers shop preview',
        'Numbers used': 'Numbers used',
        'Numbers shop': 'Numbers shop',
        'Number of leads per month': 'Number of leads per month',
        'Number of users': 'Number of users',
        'Number of users to add': 'Number of users to add',
        'Numbers (of agents) to send SMS divided by comma.':
            'Numbers (of agents) to send SMS divided by comma.',
        'Numbers to send SMS divided by comma.': 'Numbers to send SMS divided by comma.',
        'Number of seconds the first group of agents will be called':
            'Number of seconds the first group of agents will be called',
        'Number of seconds next groups of agents will be called (each)':
            'Number of seconds next groups of agents will be called (each)',
        'Number of seconds last group of agents will be called':
            'Number of seconds last group of agents will be called',
        'Number of minutes after the start of opening hours that the system should start connecting calls ordered outside of opening hours':
            'Number of minutes after the start of opening hours that the system should start connecting calls ordered outside of opening hours',
        'Numbers (of agents) to send SMS divided by comma when callback answer.':
            'Numbers (of agents) to send SMS divided by comma when callback answer.',
        'ON DEMAND': 'ON DEMAND',
        'One group after another': 'One group after another',
        'On-demand calls': 'On-demand calls',
        'Only during non-working hours': 'Only during non-working hours',
        'Only active agents': 'Only active agents',
        'Opens time selector by default in non working time.':
            'Opens time selector by default in non working time.',
        'Order a test call': 'Order a test call',
        'Ordered groups': 'Ordered groups',
        Other: 'Other',
        'Our Product Specialist will analyze your workflows and suggest an optimized setup based on our experience. Every setting is fully customizable to your workflows. No need to adjust to our service.':
            'Our Product Specialist will analyze your workflows and suggest an optimized setup based on our experience. Every setting is fully customizable to your workflows. No need to adjust to our service.',
        'Outbound Call Flows': 'Outbound Call Flows',
        'Out of office hours texts': 'Out of office hours texts',
        Outgoing: 'Outgoing',
        'Outgoing calls': 'Outgoing calls',
        'Pause between calls': 'Pause between calls',
        Partner: 'Partner',
        'Personal data': 'Personal data',
        'Pipedrive CRM': 'Pipedrive CRM',
        Play: 'Play',
        'Please waiting a few seconds': 'Please waiting a few seconds',
        'Please upload the file': 'Please upload the file',
        'Please confirm deleting group': 'Please confirm deleting group',
        "Please select country (it's very important if you use numbers in the local format)":
            "Please select country (it's very important if you use numbers in the local format)",
        "Please leave empty to use the default message. Still requires 'Press 1' to be ON. Uses selected agent language. Warning! If set may be charged additionally.":
            "Please leave empty to use the default message. Still requires 'Press 1' to be ON. Uses selected agent language. Warning! If set may be charged additionally.",
        'Phone input use local phone format in placeholder.':
            'Phone input use local phone format in placeholder.',
        'Phone number start without default dial code':
            'Phone number start without default dial code',
        Positive: 'Positive',
        PREVIEW: 'PREVIEW',
        'Please enter date in widget timezone': 'Please enter date in widget timezone',
        'Preselected country': 'Preselected country',
        ' Preview widget': ' Preview widget',
        'Preview information': 'Preview information',
        'Press Ctrl+Enter to save changes': 'Press Ctrl+Enter to save changes',
        Product: 'Product',
        Project: 'Project',
        Provider: 'Provider',
        Projects: 'Projects',
        Queue: 'Queue',
        "Reads aloud client's country name, according to the phone number.":
            "Reads aloud client's country name, according to the phone number.",
        Read: 'Read',
        'Record calls': 'Record calls',
        'Recommended for you': 'Recommended for you',
        'Redirect phone number (callerId)': 'Redirect phone number (callerId)',
        Referrer: 'Referrer',
        'Register Here': 'Register Here',
        Refresh: 'Refresh',
        'Remember me': 'Remember me',
        Remove: 'Remove',
        'Repeat calling to agents until somebody answers':
            'Repeat calling to agents until somebody answers',
        'REMOVE OUTCOME TAG': 'REMOVE OUTCOME TAG',
        Reset: 'Reset',
        reset: 'reset',
        Reschedule: 'Reschedule',
        'Replace existing widget texts': 'Replace existing widget texts',
        Repository: 'Repository',
        RESTART: 'RESTART',
        'Reset password': 'Reset password',
        Responsible: 'Responsible',
        'Responsible agent': 'Responsible agent',
        'RESET TASK': 'RESET TASK',
        'Rotates full group in widget': 'Rotates full group in widget',
        Rotate: 'Rotate',
        'Rotate groups': 'Rotate groups',
        'Rotates full group in widget, calls the first agent, then the others same time':
            'Rotates full group in widget, calls the first agent, then the others same time',
        'Rotate one agent from the first group then ordered':
            'Rotate one agent from the first group then ordered',
        'Safety Account': 'Safety Account',
        Save: 'Save',
        'Save app tags': 'Save app tags',
        'Save the license amount': 'Save the license amount',
        'SAVE AND RUN CHECK': 'SAVE AND RUN CHECK',
        'Say the country to the agent': 'Say the country to the agent',
        'Send email to the responsible agent': 'Send email to the responsible agent',
        Search: 'Search',
        Select: 'Select',
        'Select language to get template values of notifications':
            'Select language to get template values of notifications',
        Send: 'Send',
        'Send legacy GA and GTM events': 'Send legacy GA and GTM events',
        'Send GA and GTM events, recommended for most users, you can send more flexible events with code snippets':
            'Send GA and GTM events, recommended for most users, you can send more flexible events with code snippets',
        'Search timezone': 'Search timezone',
        'Server tag': 'Server tag',
        'Send SMS (sending/receiving) events': 'Send SMS (sending/receiving) events',
        Settings: 'Settings',
        'Select timezone': 'Select timezone',
        'Select the language of voice messages': 'Select the language of voice messages',
        'Select the language of voice messages for the client':
            'Select the language of voice messages for the client',
        'Selected date': 'Selected date',
        'Select field for sort': 'Select field for sort',
        'Select language to get template values of texts':
            'Select language to get template values of texts',
        'Send a webhook when the call is ordered': 'Send a webhook when the call is ordered',
        'Send a webhook before the call': 'Send a webhook before the call',
        'Send a webhook in post json format instead of urlencoded payload.':
            'Send a webhook in post json format instead of urlencoded payload.',
        'Send a webhook in post json in new format (beta).':
            'Send a webhook in post json in new format (beta).',
        'Select the gender of voice messages for the agent':
            'Select the gender of voice messages for the agent',
        'Send agent data on webhook if only one agent in the queue (missed calls)':
            'Send agent data on webhook if only one agent in the queue (missed calls)',
        'Send an SMS to the answered agent to give feedback.':
            'Send an SMS to the answered agent to give feedback.',
        'Send an SMS to the client to give feedback.':
            'Send an SMS to the client to give feedback.',
        'Send SMS notifications': 'Send SMS notifications',
        'Send On-demand sms only during non-working time.':
            'Send On-demand sms only during non-working time.',
        'Send to the first missed agent': 'Send to the first missed agent',
        'Sender ID text': 'Sender ID text',
        'Send to all missed agents': 'Send to all missed agents',
        'Send SMS notifications when callback lead': 'Send SMS notifications when callback lead',
        'Send sms to the first agent who missed the call, if nobody else answered':
            'Send sms to the first agent who missed the call, if nobody else answered',
        'Send sms to the all agents who missed the call, if nobody answered. Warning! It could cause big SMS charges if you have many agents in the queue!':
            'Send sms to the all agents who missed the call, if nobody answered. Warning! It could cause big SMS charges if you have many agents in the queue!',
        'Select call group': 'Select call group',
        'Show costs in xls report': 'Show costs in xls report',
        'Show advanced settings:': 'Show advanced settings:',
        'Show deleted agents': 'Show deleted agents',
        'Show popup always': 'Show popup always',
        'Show placeholder without start +1 or other country code':
            'Show placeholder without start +1 or other country code',
        'Sign in': 'Sign in',
        'Site checks': 'Site checks',
        'Site URL': 'Site URL',
        'Show operators in department tables in the constructor':
            'Show operators in department tables in the constructor',
        'should be technically connected to the system to start using':
            'should be technically connected to the system to start using',
        'Show more sms notifications': 'Show more sms notifications',
        'Show advanced call settings': 'Show advanced call settings',
        'shown numbers, message to client, call recordings':
            'shown numbers, message to client, call recordings',
        'Sound message': 'Sound message',
        SMS: 'SMS',
        'SMS message sent to the answered agent': 'SMS message sent to the answered agent',
        'SMS message sent to the answered lead.': 'SMS message sent to the answered lead.',
        'SMS message to the lead, when none of the agents took the call.':
            'SMS message to the lead, when none of the agents took the call.',
        'SMS message to selected agents, when none of the agents took the call.':
            'SMS message to selected agents, when none of the agents took the call.',
        "SMS message to the lead, when the lead didn't answer.":
            "SMS message to the lead, when the lead didn't answer.",
        "SMS message to the agent, when the client didn't answer.":
            "SMS message to the agent, when the client didn't answer.",
        "SMS notifications (If the message is empty, sms won't be sent)":
            "SMS notifications (If the message is empty, sms won't be sent)",
        'Sorry, no prepared call groups': 'Sorry, no prepared call groups',
        'Specify count': 'Specify count',
        'Start date': 'Start date',
        'Start time': 'Start time',
        'START IMPORT': 'START IMPORT',
        'Start next call after': 'Start next call after',
        Statistics: 'Statistics',
        'Statistics access': 'Statistics access',
        'Statistics 2 min': 'Statistics 2 min',
        'Statistics permissions': 'Statistics permissions',
        'Step 1: Upload file': 'Step 1: Upload file',
        'Step 2: Select columns': 'Step 2: Select columns',
        'Step 3: Mapping': 'Step 3: Mapping',
        'Step 4: Import settings': 'Step 4: Import settings',
        STOP: 'STOP',
        Status: 'Status',
        START: 'START',
        'Start cooldown (min)': 'Start cooldown (min)',
        Support: 'Support',
        Source: 'Source',
        'Support single-page application': 'Support single-page application',
        'Support settings': 'Support settings',
        'Support single-page application works on pages where widget disabled':
            'Support single-page application works on pages where widget disabled',
        Suggestions: 'Suggestions',
        'Supporting Russian language': 'Supporting Russian language',
        Tariff: 'Tariff',
        'Talk duration': 'Talk duration',
        'Take design from another widget': 'Take design from another widget',
        Team: 'Team',
        Teams: 'Teams',
        'This team will be deleted permanently': 'This team will be deleted permanently',
        'The design will be taken from': 'The design will be taken from',
        'The first one, then the others': 'The first one, then the others',
        'The file size should not exceed 2 MB.': 'The file size should not exceed 2 MB.',
        'This group will be deleted permanently': 'This group will be deleted permanently',
        'this flow': 'this flow',
        'Time format': 'Time format',
        'Time zone': 'Time zone',
        'Time now in this timezone is': 'Time now in this timezone is',
        'Time now in this time zone': 'Time now in this time zone',
        'There was no activity during the selected time interval':
            'There was no activity during the selected time interval',
        'The Call Is Not Found': 'The Call Is Not Found',
        'This is a test version, so be careful about the correctness of the data you add! all numbers must be valid and there must be no empty cells in the imported file!':
            'This is a test version, so be careful about the correctness of the data you add! all numbers must be valid and there must be no empty cells in the imported file!',
        Top: 'Top',
        'to dial your agents one after another in order from top to bottom.':
            'to dial your agents one after another in order from top to bottom.',
        'to provide even lead distribution, then it calls to the rest of the group on by one':
            'to provide even lead distribution, then it calls to the rest of the group on by one',
        'to provide even lead distribution, then it calls to the rest of the group at the same time':
            'to provide even lead distribution, then it calls to the rest of the group at the same time',
        Total: 'Total',
        'Total cost': 'Total cost',
        Type: 'Type',
        'Type of call group': 'Type of call group',
        'Type of app call': 'Type of app call',
        'Voicemail protection': 'Voicemail protection',
        'Voice message to the agent.': 'Voice message to the agent.',
        'Voice message to the agent then lead callback.':
            'Voice message to the agent then lead callback.',
        'Voice message for the client.': 'Voice message for the client.',
        Wait: 'Wait',
        'Warning! This will affect statistics!': 'Warning! This will affect statistics!',
        'Warning ! Please make sure the provider is correct, otherwise the number may be not working !':
            'Warning ! Please make sure the provider is correct, otherwise the number may be not working !',
        Webform: 'Webform',
        Website: 'Website',
        'Website where the Phone button will be installed. Any value, used for reference only.':
            'Website where the Phone button will be installed. Any value, used for reference only.',
        Welcome: 'Welcome',
        Widgets: 'Widgets',
        'Widgets dashboard': 'Widgets dashboard',
        'Widget id': 'Widget id',
        'Widget name': 'Widget name',
        'Widgets with additional holidays': 'Widgets with additional holidays',
        'Widget not found': 'Widget not found',
        "Widget won't be shown for this IPs or patterns or 2-letter country codes":
            "Widget won't be shown for this IPs or patterns or 2-letter country codes",
        'Widget will be shown only for this IPs or IP patterns or 2-letter country codes comma separated':
            'Widget will be shown only for this IPs or IP patterns or 2-letter country codes comma separated',
        'Wider ranges (greater than 14 days) may take longer to calculate':
            'Wider ranges (greater than 14 days) may take longer to calculate',
        'widget settings will be changed, widget saved during starting call may discard this rotation':
            'widget settings will be changed, widget saved during starting call may discard this rotation',
        welcomeBackVariable: 'welcomeBackVariable',
        Worst: 'Worst',
        'Words for answer.': 'Words for answer.',
        'Working hours': 'Working hours',
        'Works only if the agent answered with a mobile phone.':
            'Works only if the agent answered with a mobile phone.',
        'Works only if the client answered with a mobile phone.':
            'Works only if the client answered with a mobile phone.',
        'Unique visitors': 'Unique visitors',
        'Unique visitors desktop': 'Unique visitors desktop',
        'Unique visitors mobile': 'Unique visitors mobile',
        'Unique visitors tab': 'Unique visitors tab',
        'UI kit': 'UI kit',
        Users: 'Users',
        'Use texts from the widget code': 'Use texts from the widget code',
        'Use app to process leads (Beta)': 'Use app to process leads (Beta)',
        'Use if need to enter page where widget disabled then move with spa where widget should be enabled':
            'Use if need to enter page where widget disabled then move with spa where widget should be enabled',
        'User/agent': 'User/agent',
        'Use routes': 'Use routes',
        'Use in': 'Use in',
        'Use design from the widget code': 'Use design from the widget code',
        'Use new PBX to process calls (Beta)': 'Use new PBX to process calls (Beta)',
        'Use more flexible events and code snippets instead':
            'Use more flexible events and code snippets instead',
        "Use %AGENT_PHONE% for agents's phone number. Use %AGENT_NAME% for agents's name. Leave empty to not send this type of message.":
            "Use %AGENT_PHONE% for agents's phone number. Use %AGENT_NAME% for agents's name. Leave empty to not send this type of message.",
        'Use the new functionality employeis/devices in constructor':
            'Use the new functionality employeis/devices in constructor',
        "Use global API url for webhooks if provided. Warning, widget API webhooks settings won't work then.":
            "Use global API url for webhooks if provided. Warning, widget API webhooks settings won't work then.",
        'Use email notification for IP address block when trying to register SIP-devices widh incorrect authorization data':
            'Use email notification for IP address block when trying to register SIP-devices widh incorrect authorization data',
        "Use %CLIENT_PHONE% for client's phone number. Use %CALL_LINK% for a call link. Leave empty to not send this type of message.":
            "Use %CLIENT_PHONE% for client's phone number. Use %CALL_LINK% for a call link. Leave empty to not send this type of message.",
        "Use %CLIENT_PHONE% for client's phone number. Use %CALL_LINK% for a callback link. Leave empty to not send this type of message.":
            "Use %CLIENT_PHONE% for client's phone number. Use %CALL_LINK% for a callback link. Leave empty to not send this type of message.",
        "Use %CLIENT_PHONE% for client's phone number. Use %ORDERED_TIME% for the order time. Leave empty to not send this type of message.":
            "Use %CLIENT_PHONE% for client's phone number. Use %ORDERED_TIME% for the order time. Leave empty to not send this type of message.",
        'Use %ORDERED_TIME% for the order time. Leave empty to not send this type of message.':
            'Use %ORDERED_TIME% for the order time. Leave empty to not send this type of message.',
        'Use %SCHEDULED_TIME% for the booked time. Leave empty to not send this type of message.':
            'Use %SCHEDULED_TIME% for the booked time. Leave empty to not send this type of message.',
        'Use our AI-powered website widgets and automated workflows for Lead Generation and Lead Follow-Up. End-to-End Analytics & AI-powered Optimizations.':
            'Use our AI-powered website widgets and automated workflows for Lead Generation and Lead Follow-Up. End-to-End Analytics & AI-powered Optimizations.',
        Unread: 'Unread',
        Unanswered: 'Unanswered',
        'You can change or remove a project for this call':
            'You can change or remove a project for this call',
        Yes: 'Yes',
        'Your timezone:': 'Your timezone:',
        'Your column name': 'Your column name',
        'You can change or remove an outcome and for this call.':
            'You can change or remove an outcome and for this call.',
        'You can select outcome and tags connected to this project.':
            'You can select outcome and tags connected to this project.',
        "You don't have a single team": "You don't have a single team",
        'You can add a new team': 'You can add a new team',
    }
    const fileTranslate = {}
    for (const [key, value] of Object.entries(file)) {
        // await setTimeout(15000)
        // await translate(value, { to: 'en' }).then(resolve => setTimeout((resolve), 1000));
        const text = await translate(value, { to: 'de' });
        fileTranslate[key] = text.text
        console.log('fileTranslate', fileTranslate)
    }
    console.log('fileTranslate', fileTranslate)
}

f().then()

// function convert(obj) {
//     const newObj = {}
//     for (const [key, value] of Object.entries(translateEmpty)) {
//         newObj[key] = key
//     }
//     console.log(newObj)
// }
// convert()
