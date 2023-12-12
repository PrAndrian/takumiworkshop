export const PRODUCT_CATEGORIES = [
    {
        label: "3D models",
        value: "3d_models" as const,
        featured : [
            {
                name : "Editor picks",
                href : "#",
                imageSrc : "/nav/ui-kits/mixed.jpg",
            },
            {
                name : "New Arrivals",
                href : "#",
                imageSrc : "/nav/ui-kits/blue.jpg",
            },
            {
                name : "Best sellers",
                href : "#",
                imageSrc : "/nav/ui-kits/purple.jpg",
            },
        ]
    },
    {
        label: "Digital arts",
        value: "digital_arts" as const,
        featured : [
            {
                name : "Favorite arts",
                href : "#",
                imageSrc : "/nav/icons/picks.jpg",
            },
            {
                name : "New Arrivals",
                href : "#",
                imageSrc : "/nav/icons/new.jpg",
            },
            {
                name : "Best selling arts",
                href : "#",
                imageSrc : "/nav/icons/bestsellers.jpg",
            },
        ]
    },
]