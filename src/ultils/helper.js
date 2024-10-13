export const createSlug = (string) =>
    string
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/&/g, "-")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
