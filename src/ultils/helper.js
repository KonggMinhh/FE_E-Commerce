export const createSlug = (string) =>
    string
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/&/g, "-")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

export const formatMoney = (number) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(number);
};
