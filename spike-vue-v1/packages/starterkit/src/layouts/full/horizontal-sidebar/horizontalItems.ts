;export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    divider?: boolean;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    subCaption?: string;
    class?: string;
    extraclass?: string;
    type?: string;
    BgColor?: string;
}

const horizontalItems: menu[] = [

    {
        title: 'Sample Page',
        icon: 'screencast-2-linear',
        BgColor: 'primary',
        to: '/'
    },
    {
        title: 'Multilevel',
        icon: 'double-alt-arrow-down-bold-duotone',
        BgColor: 'secondary',
        to: '#',
        children: [
            {
                title: 'Level 1',
                to: '/level1'
            },
            {
                title: 'Level 1',
                to: '/2level',
                children: [
                    {
                        title: 'Level 2',
    
                        to: '/barry'
                    },
                    {
                        title: 'Level 2',
    
                        to: '/2.2level',
                        children: [
                            {
                                title: 'Level 3',
            
                                to: '/barry'
                            }
                        ]
                    }
                ]
            }
        ]
    },

   


];

export default horizontalItems;
