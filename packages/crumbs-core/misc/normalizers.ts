export function toKebabCase(value: string): string {
    return value
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
        .replace(/([a-zA-Z])([0-9])/g, '$1-$2') // Separate letters and digits
        .replace(/\s+/g, '-') // Replace spaces with -
        .toLowerCase(); // Convert to lowercase
}

export function toCamelCase(value: string): string {
    return value
        .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '') // Convert kebab-case, snake_case and words to camelCase
        .replace(/^(.)/, c => c.toLowerCase()); // Ensure the first character is lowercase
}
