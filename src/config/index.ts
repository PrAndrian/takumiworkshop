export const PRODUCT_CATEGORIES = [
    {
        label: "Digital Art Prints",
        value: "digital_art" as const,
        featured : [
            {
                name : "Wallpapers",
                href : "#",
                imageSrc : "/nav/ui_kit/mixed.jpg",
            },
            {
                name : "New Arrivals",
                href : "#",
                imageSrc : "/nav/ui_kit/blue.jpg",
            },
            {
                name : "Bestsellers",
                href : "#",
                imageSrc : "/nav/ui_kit/purple.jpg",
            },
        ]
    },
    {
        label: "Anime Music and SFX",
        value: "sfx_music" as const,
        featured : [
            {
                name : "Favorite Music",
                href : "#",
                imageSrc : "/nav/icons/picks.jpg",
            },
            {
                name : "New Arrivals",
                href : "#",
                imageSrc : "/nav/icons/new.jpg",
            },
            {
                name : "Bestselling SFX",
                href : "#",
                imageSrc : "/nav/icons/bestsellers.jpg",
            },
        ]
    },
]