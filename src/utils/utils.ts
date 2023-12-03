export const updateCategory = (categoryArr: string[], category: string) => {
    const updateCategory = [...categoryArr];
    if (categoryArr.includes(category)) {
        categoryArr.splice(categoryArr.indexOf(category, 1));
    } else {
        categoryArr.push(category);
    }
    return updateCategory;
}

export function includeCategory(categoryArr: string[], category: string) {
    const updateCategory = [...categoryArr];
    if (!updateCategory.includes(category)) {
        updateCategory.push(category);
    }
    return updateCategory;
}

export function excludeCategory(categoryArr: string[], category: string) {
    const updateCategory = [...categoryArr];
    if (updateCategory.includes(category)) {
        updateCategory.splice(updateCategory.indexOf(category, 1));
    }
    return updateCategory;
}