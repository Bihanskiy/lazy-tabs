import { api } from "./api";

export const getTabs = () => api.get('/tabs.json');