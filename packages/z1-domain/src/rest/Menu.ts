export interface Menu {
    name: string;
    items: MenuItem[];
}

export interface MenuItem {
    icon: string;
    label: string;
    link: string;
}