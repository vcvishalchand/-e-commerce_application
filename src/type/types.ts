export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    brand: string;
    color: string;
    price: number;
    image: string;
    subCategory: string;
    quantity: number,
    inventory: number
}

export interface FilterOptions {
    brand?: string;
    color?: string;
    priceRange?: [number, number];
}

export interface AppState {
    products: Product[];
    selectedCategory: string | null;
    searchQuery: string;
    sortAscending: boolean;
    filters: FilterOptions;
}

export interface SearchBarProps {
    handleSearch: (searchQuery: any) => void,
    searchbox?: boolean,
    cartIcon?: boolean
}

export interface FilterOptionsProps {
    filterOptions: { brand: string; color: string; minPrice: number; maxPrice: number };
    onFilterChange: (newFilters: { brand: string; color: string; minPrice: number; maxPrice: number }) => void;
}

export interface stateProps {
    cart: {
        cartItemsID: number[]
    }
}
